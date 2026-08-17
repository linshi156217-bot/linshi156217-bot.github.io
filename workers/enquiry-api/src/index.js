const JSON_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "no-referrer",
};

const MAX_BODY_BYTES = 16_384;
const RATE_LIMIT_PER_HOUR = 5;

function json(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...JSON_HEADERS, ...extraHeaders },
  });
}

function allowedOrigins(env) {
  return new Set(
    String(env.ALLOWED_ORIGINS || "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean),
  );
}

function corsHeaders(origin, env) {
  if (!origin || !allowedOrigins(env).has(origin)) return {};
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Idempotency-Key",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function clean(value, maxLength) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function cleanMultiline(value, maxLength) {
  return String(value || "").trim().replace(/\r\n/g, "\n").slice(0, maxLength);
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value) && value.length <= 254;
}

function validOptionalUrl(value) {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

async function sha256(value) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );
  return [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function leadId(now = new Date()) {
  const date = now.toISOString().slice(0, 10).replaceAll("-", "");
  const suffix = crypto.randomUUID().replaceAll("-", "").slice(0, 8).toUpperCase();
  return `LSQ-${date}-${suffix}`;
}

function clientIp(request) {
  return request.headers.get("CF-Connecting-IP") || "unknown";
}

async function rateLimited(env, ipHash, since) {
  const result = await env.DB.prepare(
    "SELECT COUNT(*) AS total FROM enquiries WHERE ip_hash = ? AND created_at >= ?",
  )
    .bind(ipHash, since)
    .first();
  return Number(result?.total || 0) >= RATE_LIMIT_PER_HOUR;
}

async function handleEnquiry(request, env, origin) {
  const cors = corsHeaders(origin, env);
  if (!origin || !allowedOrigins(env).has(origin)) {
    return json({ ok: false, error: "origin_not_allowed" }, 403);
  }

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return json({ ok: false, error: "content_type_required" }, 415, cors);
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return json({ ok: false, error: "payload_too_large" }, 413, cors);
  }

  let raw;
  try {
    const bodyText = await request.text();
    if (bodyText.length > MAX_BODY_BYTES) {
      return json({ ok: false, error: "payload_too_large" }, 413, cors);
    }
    raw = JSON.parse(bodyText);
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400, cors);
  }

  // A filled honeypot receives a normal-looking response without being stored.
  if (clean(raw.website, 200)) {
    return json({ ok: true, leadId: `LSQ-${Date.now()}` }, 202, cors);
  }

  const startedAt = Number(raw.startedAt || 0);
  const elapsedMs = Date.now() - startedAt;
  if (!startedAt || elapsedMs < 2_500 || elapsedMs > 172_800_000) {
    return json({ ok: false, error: "form_timing_invalid" }, 400, cors);
  }

  const enquiry = {
    business: clean(raw.business, 120),
    contactName: clean(raw.contactName, 120),
    email: clean(raw.email, 254).toLowerCase(),
    phone: clean(raw.phone, 40),
    town: clean(raw.town, 120),
    sector: clean(raw.sector, 120),
    projectType: clean(raw.projectType, 160),
    currentLink: clean(raw.currentLink, 500),
    goal: cleanMultiline(raw.goal, 1200),
  };

  const errors = {};
  if (!enquiry.business) errors.business = "Business name is required.";
  if (!enquiry.contactName) errors.contactName = "Your name is required.";
  if (!validEmail(enquiry.email)) errors.email = "Enter a valid email address.";
  if (!enquiry.town) errors.town = "Town or service area is required.";
  if (!enquiry.sector) errors.sector = "Business type is required.";
  if (!enquiry.projectType) errors.projectType = "Choose a starting point.";
  if (!validOptionalUrl(enquiry.currentLink)) {
    errors.currentLink = "Use a full http or https link.";
  }
  if (raw.privacyConsent !== true) {
    errors.privacyConsent = "Please confirm the privacy notice.";
  }
  if (Object.keys(errors).length) {
    return json({ ok: false, error: "validation_failed", fields: errors }, 422, cors);
  }

  const idempotencyKey = clean(
    request.headers.get("Idempotency-Key") || raw.idempotencyKey,
    100,
  );
  if (!/^[A-Za-z0-9_-]{16,100}$/.test(idempotencyKey)) {
    return json({ ok: false, error: "idempotency_key_required" }, 400, cors);
  }

  const previous = await env.DB.prepare(
    "SELECT id FROM enquiries WHERE idempotency_key = ?",
  )
    .bind(idempotencyKey)
    .first();
  if (previous?.id) {
    return json({ ok: true, leadId: previous.id, duplicate: true }, 200, cors);
  }

  if (!env.IP_HASH_SALT) {
    return json({ ok: false, error: "service_not_configured" }, 503, cors);
  }
  const ipHash = await sha256(`${env.IP_HASH_SALT}:${clientIp(request)}`);
  const oneHourAgo = new Date(Date.now() - 3_600_000).toISOString();
  if (await rateLimited(env, ipHash, oneHourAgo)) {
    return json({ ok: false, error: "rate_limited" }, 429, {
      ...cors,
      "Retry-After": "3600",
    });
  }

  const now = new Date();
  const id = leadId(now);
  const createdAt = now.toISOString();
  const attribution = raw.attribution || {};
  const userAgent = clean(request.headers.get("user-agent"), 500);

  await env.DB.prepare(
    `INSERT INTO enquiries (
      id, idempotency_key, created_at, business, contact_name, email, phone,
      town, sector, project_type, current_link, goal, privacy_consent,
      marketing_consent, consent_version, consent_at, source, medium,
      campaign, content, term, referrer, landing_page, user_agent, ip_hash
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  )
    .bind(
      id,
      idempotencyKey,
      createdAt,
      enquiry.business,
      enquiry.contactName,
      enquiry.email,
      enquiry.phone || null,
      enquiry.town,
      enquiry.sector,
      enquiry.projectType,
      enquiry.currentLink || null,
      enquiry.goal || null,
      raw.marketingConsent === true ? 1 : 0,
      clean(env.CONSENT_VERSION, 40) || "unknown",
      createdAt,
      clean(attribution.source, 120),
      clean(attribution.medium, 120),
      clean(attribution.campaign, 160),
      clean(attribution.content, 160),
      clean(attribution.term, 160),
      clean(attribution.referrer, 500),
      clean(attribution.landingPage, 500),
      userAgent,
      ipHash,
    )
    .run();

  await env.DB.prepare(
    "INSERT INTO enquiry_events (enquiry_id, event_type, occurred_at, metadata) VALUES (?, 'submitted', ?, ?)",
  )
    .bind(
      id,
      createdAt,
      JSON.stringify({
        source: clean(attribution.source, 120) || "direct",
        campaign: clean(attribution.campaign, 160) || "website_enquiry",
      }),
    )
    .run();

  return json({ ok: true, leadId: id }, 201, cors);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("origin") || "";

    if (request.method === "OPTIONS" && url.pathname === "/v1/enquiries") {
      const cors = corsHeaders(origin, env);
      if (!Object.keys(cors).length) return new Response(null, { status: 403 });
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method === "POST" && url.pathname === "/v1/enquiries") {
      return handleEnquiry(request, env, origin);
    }

    if (request.method === "GET" && url.pathname === "/health") {
      return json({ ok: true, service: "linshi-studio-enquiry-api" });
    }

    return json({ ok: false, error: "not_found" }, 404);
  },
};
