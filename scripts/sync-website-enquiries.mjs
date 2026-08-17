import { execFileSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const controlDir = path.join(root, "outputs", "automation-control");
const statePath = path.join(controlDir, "website-enquiry-state.json");
const clientPipelinePath = path.join(controlDir, "client-pipeline.json");
const pipelineStatePath = path.join(controlDir, "pipeline-state.json");
const wrangler = path.join(root, "node_modules", "wrangler", "bin", "wrangler.js");
const config = path.join(root, "workers", "enquiry-api", "wrangler.jsonc");

async function readJson(file, fallback) {
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch (error) {
    if (error?.code === "ENOENT") return fallback;
    throw error;
  }
}

async function writeJson(file, value) {
  await writeFile(file, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function executeD1(command) {
  const stdout = execFileSync(
    process.execPath,
    [
      wrangler,
      "d1",
      "execute",
      "linshi-studio-enquiries",
      "--remote",
      "--config",
      config,
      "--json",
      "--command",
      command,
    ],
    {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      env: {
        ...process.env,
        CI: "true",
        WRANGLER_SEND_METRICS: "false",
      },
    },
  );
  const result = JSON.parse(stdout);
  if (!Array.isArray(result) || !result[0]?.success) {
    throw new Error("Cloudflare D1 enquiry query did not succeed.");
  }
  return result[0].results || [];
}

function safeLeadId(value) {
  const id = String(value || "");
  if (!/^LSQ-[A-Z0-9-]{12,40}$/.test(id)) throw new Error(`Invalid lead id: ${id}`);
  return id;
}

await mkdir(controlDir, { recursive: true });
const startedAt = new Date().toISOString();
const state = await readJson(statePath, {
  version: 1,
  lastCheckedAt: null,
  surfacedLeadIds: [],
  runs: [],
});

let newRows = [];
let status = "completed_no_new_enquiries";
let blocker = null;

try {
  newRows = executeD1(
    `SELECT id, created_at, business, contact_name, email, phone, town, sector,
      project_type, current_link, goal, marketing_consent, source, medium,
      campaign, landing_page, status
     FROM enquiries
     WHERE status = 'new' AND suppression = 0
     ORDER BY created_at ASC
     LIMIT 25`,
  );

  const clientPipeline = await readJson(clientPipelinePath, { version: 1, clients: [] });
  const existingIds = new Set(clientPipeline.clients.map((client) => client.id));
  const surfaced = [];

  for (const row of newRows) {
    const id = safeLeadId(row.id);
    if (!existingIds.has(id)) {
      clientPipeline.clients.push({
        id,
        name: row.contact_name,
        businessName: row.business,
        status: "new_website_enquiry_needs_personal_reply",
        sector: row.sector,
        town: row.town,
        channel: "Website form",
        sourceUrl: row.landing_page || "https://linshistudio.com/work/",
        website: row.current_link || null,
        replyEmail: row.email,
        publicPhone: row.phone || null,
        replyClass: "Inbound website enquiry",
        conceptPermission: "No",
        suppression: "No",
        marketingConsent: row.marketing_consent === 1 ? "Yes" : "No",
        lastInboundAt: row.created_at,
        lastInboundText: row.goal || "Website enquiry submitted without an additional message.",
        requestedStartingPoint: row.project_type,
        attribution: {
          source: row.source || "direct",
          medium: row.medium || "website",
          campaign: row.campaign || "website_enquiry",
        },
        nextAction: "Reply personally within one UK working day. Confirm fit and ask no more than one necessary discovery question. Do not add to marketing outreach unless marketingConsent=Yes.",
        updatedAt: startedAt,
      });
      existingIds.add(id);
    }
    surfaced.push(id);
  }

  if (surfaced.length) {
    clientPipeline.updatedAt = startedAt;
    await writeJson(clientPipelinePath, clientPipeline);
    for (const id of surfaced) {
      executeD1(`UPDATE enquiries SET status = 'surfaced' WHERE id = '${id}' AND status = 'new'`);
    }
    status = "completed_new_enquiries_surfaced";
    state.surfacedLeadIds = [...new Set([...(state.surfacedLeadIds || []), ...surfaced])].slice(-500);
  }
} catch (error) {
  status = "blocked";
  blocker = error instanceof Error ? error.message : String(error);
}

const completedAt = new Date().toISOString();
state.lastCheckedAt = completedAt;
state.lastStatus = status;
state.lastNewCount = newRows.length;
state.lastBlocker = blocker;
state.runs = [
  ...(state.runs || []),
  { startedAt, completedAt, status, newCount: newRows.length, blocker },
].slice(-100);
await writeJson(statePath, state);

const pipelineState = await readJson(pipelineStatePath, { version: 1, jobs: {} });
pipelineState.jobs ||= {};
pipelineState.jobs.websiteEnquiries = {
  completedAt,
  status,
  counts: { newEnquiries: newRows.length },
  blockers: blocker ? [blocker] : [],
};
pipelineState.updatedAt = completedAt;
await writeJson(pipelineStatePath, pipelineState);

const report = {
  ok: status !== "blocked",
  status,
  checkedAt: completedAt,
  newEnquiries: newRows.map((row) => ({
    id: row.id,
    business: row.business,
    contactName: row.contact_name,
    email: row.email,
    town: row.town,
    sector: row.sector,
    requestedStartingPoint: row.project_type,
    goal: row.goal,
  })),
  blocker,
};
console.log(JSON.stringify(report, null, 2));
if (status === "blocked") process.exitCode = 1;
