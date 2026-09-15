import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";

const outputDir = path.resolve("output/ai-release-gate");
const releaseGatePort = Number(process.env.RELEASE_GATE_PORT || 43127);
const baseUrl = `http://127.0.0.1:${releaseGatePort}`;
const routes = [
  "/",
  "/work/",
  "/website-review/",
  "/thank-you/?lead=LSQ-QA-20260817&source=release_gate",
  "/project-guide/",
  "/working-together/",
  "/provider-terms/",
  "/project-agreement/",
  "/website-handover-checklist/",
  "/ai-search-visibility/",
  "/website-review-framework/",
  "/privacy/",
  "/alder-and-slate/",
  "/aster-house-hair/",
  "/marlowe-dental/",
  "/gable-and-mere/",
  "/morrow-and-tide/",
  "/salt-and-hawthorn/",
];
const viewportWidths = [320, 375, 390, 440, 768, 1440];
const failures = [];
const results = [];

await mkdir(outputDir, { recursive: true });
const server = spawn(process.execPath, ["scripts/serve-static-release.mjs", "out", String(releaseGatePort)], {
  stdio: ["ignore", "pipe", "pipe"],
});

async function waitForServer() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // The server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error("Static release-test server did not start.");
}

function recordFailure(route, width, problem) {
  failures.push({ route, width, problem });
}

let browser;
try {
  await waitForServer();
  const systemChrome = [
    process.env.RELEASE_GATE_BROWSER,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  ].find((candidate) => candidate && existsSync(candidate));
  browser = await chromium.launch({ headless: true, executablePath: systemChrome || undefined });

  for (const route of routes) {
    for (const width of viewportWidths) {
      const page = await browser.newPage({ viewport: { width, height: 844 } });
      const consoleErrors = [];
      await page.route("https://cloudflareinsights.com/**", async (route) => {
        await route.fulfill({
          status: 204,
          headers: { "access-control-allow-origin": "*" },
          body: "",
        });
      });
      page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });

      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded", timeout: 15_000 });
      await page.evaluate(async () => {
        for (const image of document.images) image.loading = "eager";
        const step = Math.max(4000, window.innerHeight * 4);
        for (let position = 0; position < document.body.scrollHeight; position += step) {
          window.scrollTo(0, position);
          await new Promise((resolve) => setTimeout(resolve, 15));
        }
        window.scrollTo(0, 0);
        await Promise.all(
          [...document.images].map((image) => {
            if (image.complete) return Promise.resolve();
            return new Promise((resolve) => {
              image.addEventListener("load", resolve, { once: true });
              image.addEventListener("error", resolve, { once: true });
              setTimeout(resolve, 1000);
            });
          }),
        );
      });
      const audit = await page.evaluate(() => {
        const images = [...document.images];
        const hashLinks = [...document.querySelectorAll('a[href^="#"]')];
        const controls = [...document.querySelectorAll("input, select, textarea")].filter(
          (control) => control.getAttribute("type") !== "hidden",
        );
        return {
          statusTitle: document.title,
          overflow: document.documentElement.scrollWidth > window.innerWidth,
          overflowElements: [...document.querySelectorAll("body *")]
            .map((element) => {
              const rect = element.getBoundingClientRect();
              return {
                tag: element.tagName.toLowerCase(),
                className: typeof element.className === "string" ? element.className : "",
                left: Math.round(rect.left),
                right: Math.round(rect.right),
                width: Math.round(rect.width),
              };
            })
            .filter((item) => item.left < -1 || item.right > window.innerWidth + 1)
            .slice(0, 8),
          brokenImages: images.filter((image) => image.complete && image.naturalWidth === 0).map((image) => image.currentSrc || image.src),
          missingHashTargets: hashLinks
            .map((link) => link.getAttribute("href"))
            .filter((href) => href && href !== "#" && !document.querySelector(href)),
          unlabeledControls: controls
            .filter((control) => !control.closest("label") && !control.getAttribute("aria-label") && !control.getAttribute("aria-labelledby"))
            .map((control) => control.getAttribute("name") || control.tagName),
        };
      });

      const brokenImages = audit.brokenImages;

      if (!response?.ok()) recordFailure(route, width, `HTTP ${response?.status() ?? "no response"}`);
      if (audit.overflow) recordFailure(route, width, `horizontal overflow: ${JSON.stringify(audit.overflowElements)}`);
      if (brokenImages.length) recordFailure(route, width, `broken images: ${brokenImages.join(", ")}`);
      if (audit.missingHashTargets.length) recordFailure(route, width, `missing hash targets: ${audit.missingHashTargets.join(", ")}`);
      if (audit.unlabeledControls.length) recordFailure(route, width, `unlabelled controls: ${audit.unlabeledControls.join(", ")}`);
      if (consoleErrors.length) recordFailure(route, width, `console errors: ${consoleErrors.join(" | ")}`);

        if (route === "/website-review/") {
        const reviewCtaProblem = await page.evaluate(() =>
          [...document.querySelectorAll("a")]
            .filter((link) => /request the review|ask if your site fits|request a fit check/i.test(link.textContent || ""))
            .some((link) => link.getAttribute("href") !== "/work/#project-brief"),
        );
        if (reviewCtaProblem) recordFailure(route, width, "review CTA does not reach the project brief");
      }

      if (route === "/project-guide/") {
        const pricingGuideProblem = await page.evaluate(() => {
          const text = document.body.textContent || "";
          return !text.includes("£350") || !/one review, not an automatically renewing subscription/i.test(text);
        });
         if (pricingGuideProblem) recordFailure(route, width, "project guide does not explain the £350 one-off quarterly review");
        }

      results.push({ route, width, httpStatus: response?.status() ?? null, ...audit, brokenImages, consoleErrors });
      await page.close();
    }
  }

  const formPage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await formPage.route("https://cloudflareinsights.com/**", async (route) => {
    await route.fulfill({ status: 204, headers: { "access-control-allow-origin": "*" }, body: "" });
  });
  await formPage.route(
    "https://linshi-studio-enquiry-api.salt-hawthorn-whitby-demo.workers.dev/v1/enquiries",
    async (route) => {
      const request = route.request();
      const cors = { "access-control-allow-origin": "*", "access-control-allow-methods": "POST, OPTIONS", "access-control-allow-headers": "Content-Type, Idempotency-Key" };
      if (request.method() === "OPTIONS") {
        await route.fulfill({ status: 204, headers: cors, body: "" });
        return;
      }
      if (request.method() !== "POST") {
        await route.fulfill({ status: 405, headers: cors, body: "" });
        return;
      }
      const payload = request.postDataJSON();
      const required = ["projectType", "business", "contactName", "email", "town", "sector"];
      if (required.some((field) => !payload?.[field]) || payload?.privacyConsent !== true) {
        await route.fulfill({
          status: 422,
          headers: cors,
          contentType: "application/json",
          body: JSON.stringify({ ok: false, error: "validation_failed" }),
        });
        return;
      }
      await route.fulfill({
        status: 201,
        headers: cors,
        contentType: "application/json",
        body: JSON.stringify({ ok: true, leadId: "LSQ-QA-20260817" }),
      });
    },
  );
  await formPage.goto(`${baseUrl}/work/`, { waitUntil: "domcontentloaded", timeout: 15_000 });
  const form = formPage.locator("#project-brief form");
  if ((await form.count()) !== 1) {
    recordFailure("/work/", 390, "project enquiry form missing or duplicated");
  } else {
    const emptyValid = await form.evaluate((element) => element.checkValidity());
    if (emptyValid) recordFailure("/work/", 390, "required-field validation did not block an empty form");
    await formPage.selectOption('select[name="projectType"]', { index: 1 });
    await formPage.fill('input[name="business"]', "Release Gate Test Business");
    await formPage.fill('input[name="contactName"]', "Release Gate Tester");
    await formPage.fill('input[name="email"]', "qa@example.com");
    await formPage.fill('input[name="town"]', "Bath");
    await formPage.selectOption('select[name="sector"]', { index: 1 });
    await formPage.fill('input[name="currentLink"]', "https://example.com");
    await formPage.fill('textarea[name="goal"]', "Test a clear mobile enquiry route.");
    await formPage.check('input[name="privacyConsent"]');
    const completedValid = await form.evaluate((element) => element.checkValidity());
    if (!completedValid) recordFailure("/work/", 390, "completed enquiry form remained invalid");
    const submitText = (await form.locator('button[type="submit"]').textContent())?.trim() ?? "";
    if (!/send my project brief/i.test(submitText)) recordFailure("/work/", 390, "secure enquiry submit action missing");
    await Promise.all([
      formPage.waitForURL(/\/thank-you\/\?lead=LSQ-QA-20260817/, { timeout: 15_000 }),
      form.locator('button[type="submit"]').click(),
    ]);
    const confirmation = await formPage.locator("main").textContent();
    if (!confirmation?.includes("LSQ-QA-20260817")) {
      recordFailure("/thank-you/", 390, "server-confirmed enquiry reference was not shown");
    }
  }
  await formPage.screenshot({ path: path.join(outputDir, "work-form-mobile.png"), fullPage: true });
  await formPage.close();
} catch (error) {
  failures.push({ route: "gate-runtime", width: null, problem: String(error) });
} finally {
  await Promise.race([browser?.close(), new Promise((resolve) => setTimeout(resolve, 5_000))]);
  server.kill();
}

const report = {
  generatedAt: new Date().toISOString(),
  routes,
  viewportWidths,
  checks: results.length,
  failures,
  result: failures.length ? "FAIL" : "PASS",
  results,
};
await writeFile(path.join(outputDir, "report.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");

if (failures.length) {
  console.error(JSON.stringify({ result: report.result, failures }, null, 2));
  process.exit(1);
}
console.log(`AI release gate passed: ${results.length} viewport checks and the mocked server-confirmed enquiry journey validated.`);
