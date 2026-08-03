const DEFAULT_ORIGINS = ["https://linshistudio.com", "https://www.linshistudio.com"];
const REQUIRED_FIELDS = ["projectType", "business", "town", "sector", "contactName", "email"];

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...headers },
  });
}

function allowedOrigins(env) {
  return (env.ALLOWED_ORIGINS || DEFAULT_ORIGINS.join(","))
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin") || "";
  return {
    "Access-Control-Allow-Origin": allowedOrigins(env).includes(origin) ? origin : DEFAULT_ORIGINS[0],
    "Access-Control-Allow-Headers": "Authorization, Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, OPTIONS",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function clean(value, maxLength = 500) {
  return String(value ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function normaliseSubmission(input) {
  const lead = {
    projectType: clean(input.projectType, 120),
    business: clean(input.business, 120),
    town: clean(input.town, 120),
    sector: clean(input.sector, 120),
    contactName: clean(input.contactName, 120),
    email: clean(input.email, 254).toLowerCase(),
    phone: clean(input.phone, 60),
    currentLink: clean(input.currentLink, 500),
    goal: clean(input.goal, 1200),
    utmSource: clean(input.utm_source || input.utmSource || "direct", 120),
    utmCampaign: clean(input.utm_campaign || input.utmCampaign || "website_enquiry", 120),
  };
  const missing = REQUIRED_FIELDS.filter((field) => !lead[field]);
  if (missing.length) throw new Error(`Missing required fields: ${missing.join(", ")}`);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) throw new Error("Enter a valid email address");
  if (lead.currentLink) {
    try {
      const url = new URL(lead.currentLink);
      if (!["http:", "https:"].includes(url.protocol)) throw new Error();
    } catch { throw new Error("Current website must be a valid http(s) URL"); }
  }
  return lead;
}

function buildReplyDraft(lead) {
  const firstName = lead.contactName.split(" ")[0];
  return `Hi ${firstName},\n\nThanks for telling us about ${lead.business} and what you need in ${lead.town}. We have received your ${lead.projectType.toLowerCase()} enquiry and will review the details before recommending the clearest next step.\n\n${lead.goal ? `Your main goal is: ${lead.goal}\n\n` : ""}We will reply personally within one business day.\n\nBest,\nLinshi Studio`;
}

function requireAdmin(request, env) {
  const supplied = request.headers.get("Authorization") || "";
  return Boolean(env.ADMIN_TOKEN) && supplied === `Bearer ${env.ADMIN_TOKEN}`;
}

async function sha256(value) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function enforceRateLimit(request, env) {
  if (!env.DB) return;
  const ip = request.headers.get("CF-Connecting-IP") || "local";
  const ipHash = await sha256(`${env.RATE_LIMIT_SALT || "linshi"}:${ip}`);
  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const row = await env.DB.prepare("SELECT COUNT(*) AS total FROM submission_events WHERE ip_hash = ? AND created_at >= ?").bind(ipHash, since).first();
  if (Number(row?.total || 0) >= 8) throw new Error("Too many submissions. Please try again later.");
  await env.DB.prepare("INSERT INTO submission_events (ip_hash, created_at) VALUES (?, ?)").bind(ipHash, new Date().toISOString()).run();
}

async function zohoAccessToken(env) {
  const required = ["ZOHO_CLIENT_ID", "ZOHO_CLIENT_SECRET", "ZOHO_REFRESH_TOKEN"];
  if (required.some((key) => !env[key])) throw new Error("Zoho OAuth is not configured");
  const params = new URLSearchParams({
    refresh_token: env.ZOHO_REFRESH_TOKEN,
    grant_type: "refresh_token",
    client_id: env.ZOHO_CLIENT_ID,
    client_secret: env.ZOHO_CLIENT_SECRET,
  });
  const response = await fetch(`${env.ZOHO_ACCOUNTS_URL || "https://accounts.zoho.com"}/oauth/v2/token`, { method: "POST", body: params });
  const body = await response.json();
  if (!response.ok || !body.access_token) throw new Error(`Zoho token refresh failed: ${body.error || response.status}`);
  return body.access_token;
}

async function sendZohoMail(env, { to, subject, content }) {
  if (env.EMAIL_MODE === "mock") return { mode: "mock" };
  if (!env.ZOHO_ACCOUNT_ID) throw new Error("ZOHO_ACCOUNT_ID is not configured");
  const token = await zohoAccessToken(env);
  const response = await fetch(`${env.ZOHO_MAIL_URL || "https://mail.zoho.com"}/api/accounts/${env.ZOHO_ACCOUNT_ID}/messages`, {
    method: "POST",
    headers: { Authorization: `Zoho-oauthtoken ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      fromAddress: env.FROM_EMAIL || "hello@linshistudio.com",
      toAddress: to,
      subject,
      content,
      mailFormat: "plaintext",
      encoding: "UTF-8",
    }),
  });
  const body = await response.json();
  if (!response.ok || body.status?.code === 500) throw new Error(`Zoho send failed: ${body.data?.errorCode || response.status}`);
  return { mode: "zoho", id: body.data?.messageId || null };
}

async function notifyOwner(env, lead, id) {
  const queueUrl = `${env.ADMIN_URL || "https://linshistudio.com/inquiries/"}?lead=${id}`;
  const content = [
    `New website enquiry from ${lead.contactName} (${lead.business})`,
    "",
    `Email: ${lead.email}`,
    `Phone: ${lead.phone || "Not provided"}`,
    `Town: ${lead.town}`,
    `Sector: ${lead.sector}`,
    `Project: ${lead.projectType}`,
    `Goal: ${lead.goal || "Not provided"}`,
    "",
    `Review and approve: ${queueUrl}`,
  ].join("\n");
  return sendZohoMail(env, { to: env.OWNER_EMAIL || "hello@linshistudio.com", subject: `New enquiry — ${lead.business}`, content });
}

async function createInquiry(request, env, ctx) {
  const input = await request.json();
  if (clean(input.companyWebsite, 200)) return json({ ok: true }, 202, corsHeaders(request, env));
  await enforceRateLimit(request, env);
  const lead = normaliseSubmission(input);
  const id = crypto.randomUUID();
  const now = new Date().toISOString();
  const draft = buildReplyDraft(lead);
  await env.DB.prepare(`INSERT INTO inquiries
    (id, project_type, business, town, sector, contact_name, email, phone, current_link, goal, utm_source, utm_campaign, status, draft_reply, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new', ?, ?, ?)`)
    .bind(id, lead.projectType, lead.business, lead.town, lead.sector, lead.contactName, lead.email, lead.phone, lead.currentLink, lead.goal, lead.utmSource, lead.utmCampaign, draft, now, now).run();
  ctx.waitUntil(notifyOwner(env, lead, id).catch(async (error) => {
    await env.DB.prepare("UPDATE inquiries SET notification_error = ?, updated_at = ? WHERE id = ?").bind(error.message.slice(0, 500), new Date().toISOString(), id).run();
  }));
  return json({ ok: true, id, message: "Thanks — your project brief has been received." }, 201, corsHeaders(request, env));
}

async function listInquiries(request, env) {
  const result = await env.DB.prepare("SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 200").all();
  return json({ inquiries: result.results || [] }, 200, corsHeaders(request, env));
}

async function updateInquiry(request, env, id) {
  const input = await request.json();
  const draft = clean(input.draftReply, 5000);
  if (!draft) return json({ error: "Draft reply is required" }, 400, corsHeaders(request, env));
  await env.DB.prepare("UPDATE inquiries SET draft_reply = ?, status = 'new', approved_at = NULL, updated_at = ? WHERE id = ?")
    .bind(draft, new Date().toISOString(), id).run();
  return json({ ok: true }, 200, corsHeaders(request, env));
}

async function approveInquiry(request, env, id) {
  const now = new Date().toISOString();
  await env.DB.prepare("UPDATE inquiries SET status = 'approved', approved_at = ?, updated_at = ? WHERE id = ? AND status != 'sent'").bind(now, now, id).run();
  return json({ ok: true }, 200, corsHeaders(request, env));
}

async function sendApprovedInquiry(request, env, id) {
  const lead = await env.DB.prepare("SELECT * FROM inquiries WHERE id = ?").bind(id).first();
  if (!lead) return json({ error: "Inquiry not found" }, 404, corsHeaders(request, env));
  if (lead.status !== "approved") return json({ error: "Human approval is required before sending" }, 409, corsHeaders(request, env));
  const delivery = await sendZohoMail(env, { to: lead.email, subject: `Re: your Linshi Studio project enquiry`, content: lead.draft_reply });
  const now = new Date().toISOString();
  await env.DB.prepare("UPDATE inquiries SET status = 'sent', sent_at = ?, updated_at = ?, delivery_id = ? WHERE id = ?")
    .bind(now, now, delivery.id || delivery.mode, id).run();
  return json({ ok: true, delivery }, 200, corsHeaders(request, env));
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const cors = corsHeaders(request, env);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    try {
      if (request.method === "POST" && url.pathname === "/api/inquiries") return await createInquiry(request, env, ctx);
      if (url.pathname.startsWith("/api/admin/")) {
        if (!requireAdmin(request, env)) return json({ error: "Unauthorised" }, 401, cors);
        if (request.method === "GET" && url.pathname === "/api/admin/inquiries") return await listInquiries(request, env);
        const match = url.pathname.match(/^\/api\/admin\/inquiries\/([^/]+)(?:\/(approve|send))?$/);
        if (match && request.method === "PATCH" && !match[2]) return await updateInquiry(request, env, match[1]);
        if (match && request.method === "POST" && match[2] === "approve") return await approveInquiry(request, env, match[1]);
        if (match && request.method === "POST" && match[2] === "send") return await sendApprovedInquiry(request, env, match[1]);
      }
      if (request.method === "GET" && url.pathname === "/health") return json({ ok: true, service: "linshi-enquiries" }, 200, cors);
      return json({ error: "Not found" }, 404, cors);
    } catch (error) {
      const clientError = /Missing required|valid email|valid http|Too many/.test(error.message);
      return json({ error: error.message }, clientError ? 400 : 500, cors);
    }
  },
};

export { buildReplyDraft, normaliseSubmission };
