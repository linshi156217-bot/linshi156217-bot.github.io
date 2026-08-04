import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import path from "node:path";

const tracked = execFileSync(
  "git",
  ["ls-files", "-z", "--cached", "--others", "--exclude-standard"],
  {
    encoding: "utf8",
  },
)
  .split("\0")
  .filter(Boolean);

const blockedNames = [
  /(^|\/)\.env($|\.)/i,
  /(^|\/)(credentials|service-account[^/]*)\.json$/i,
  /(^|\/)(id_rsa|id_ed25519)$/i,
  /\.(pem|key|p12|pfx|jks)$/i,
];
const allowedNames = new Set([".env.example"]);
const patterns = [
  ["private-key", /-----BEGIN (?:RSA |OPENSSH |EC |DSA )?PRIVATE KEY-----/],
  ["aws-access-key", /\bAKIA[0-9A-Z]{16}\b/],
  ["github-token", /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/],
  ["stripe-secret", /\bsk_(?:live|test)_[A-Za-z0-9]{16,}\b/],
  ["google-api-key", /\bAIza[0-9A-Za-z_-]{30,}\b/],
];

const failures = [];
for (const file of tracked) {
  const normalized = file.replaceAll("\\", "/");
  const base = path.posix.basename(normalized);
  if (!allowedNames.has(base) && blockedNames.some((rule) => rule.test(normalized))) {
    failures.push({ file: normalized, rule: "blocked-secret-filename" });
    continue;
  }

  if (normalized === "pnpm-lock.yaml") continue;

  let text;
  try {
    text = await readFile(file, "utf8");
  } catch {
    continue;
  }

  for (const [rule, pattern] of patterns) {
    const match = pattern.exec(text);
    if (!match) continue;
    const line = text.slice(0, match.index).split("\n").length;
    failures.push({ file: normalized, line, rule });
  }

  if (
    normalized === ".github/workflows/ai-release-gate.yml" &&
    /\$\{\{\s*secrets\./.test(text)
  ) {
    failures.push({ file: normalized, rule: "ai-gate-must-not-read-secrets" });
  }
}

if (failures.length) {
  console.error("Potential secret exposure detected. Values are intentionally redacted.");
  for (const failure of failures) {
    console.error(
      `- ${failure.file}${failure.line ? `:${failure.line}` : ""} [${failure.rule}]`,
    );
  }
  process.exit(1);
}

console.log(`Secret gate passed: ${tracked.length} tracked files checked; no secret material found.`);
