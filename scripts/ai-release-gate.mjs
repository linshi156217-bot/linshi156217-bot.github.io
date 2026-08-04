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
  "/project-guide/",
  "/privacy/",
  "/alder-and-slate/",
  "/aster-house-hair/",
  "/marlowe-dental/",
  "/gable-and-mere/",
  "/morrow-and-tide/",
  "/salt-and-hawthorn/",
];
const mobileWidths = [320, 375, 390, 440];
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
  browser = await chromium.launch({
    headless: true,
    executablePath: systemChrome || undefined,
  });

  for (const route of routes) {
    for (const width of mobileWidths) {
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

      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded" });
      await page.evaluate(async () => {
        for (const image of document.images) image.loading = "eager";
        const step = Math.max(500, window.innerHeight * 0.8);
        for (let position = 0; position < document.body.scrollHeight; position += step) {
          window.scrollTo(0, position);
          await new Promise((resolve) => setTimeout(resolve, 75));
        }
        window.scrollTo(0, 0);
        await Promise.all(
          [...document.images].map((image) => {
            if (image.complete) return Promise.resolve();
            return new Promise((resolve) => {
              image.addEventListener("load", resolve, { once: true });
              image.addEventListener("error", resolve, { once: true });
              setTimeout(resolve, 3000);
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
          imageSources: [...new Set(images.map((image) => image.currentSrc || image.src).filter(Boolean))],
          missingHashTargets: hashLinks
            .map((link) => link.getAttribute("href"))
            .filter((href) => href && href !== "#" && !document.querySelector(href)),
          unlabeledControls: controls
            .filter((control) => !control.closest("label") && !control.getAttribute("aria-label") && !control.getAttribute("aria-labelledby"))
            .map((control) => control.getAttribute("name") || control.tagName),
        };
      });

      const brokenImages = [];
      for (const source of audit.imageSources) {
        const imageResponse = await page.request.get(source);
        if (!imageResponse.ok()) brokenImages.push(`${new URL(source).pathname} (HTTP ${imageResponse.status()})`);
      }

      if (!response?.ok()) recordFailure(route, width, `HTTP ${response?.status() ?? "no response"}`);
      if (audit.overflow) recordFailure(route, width, "horizontal overflow");
      if (brokenImages.length) recordFailure(route, width, `broken images: ${brokenImages.join(", ")}`);
      if (audit.missingHashTargets.length) recordFailure(route, width, `missing hash targets: ${audit.missingHashTargets.join(", ")}`);
      if (audit.unlabeledControls.length) recordFailure(route, width, `unlabelled controls: ${audit.unlabeledControls.join(", ")}`);
      if (consoleErrors.length) recordFailure(route, width, `console errors: ${consoleErrors.join(" | ")}`);

      results.push({ route, width, httpStatus: response?.status() ?? null, ...audit, brokenImages, consoleErrors });
      await page.close();
    }
  }

  const formPage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await formPage.route("https://cloudflareinsights.com/**", async (route) => {
    await route.fulfill({ status: 204, headers: { "access-control-allow-origin": "*" }, body: "" });
  });
  await formPage.goto(`${baseUrl}/work/`, { waitUntil: "domcontentloaded" });
  const form = formPage.locator("#project-brief form");
  if ((await form.count()) !== 1) {
    recordFailure("/work/", 390, "project enquiry form missing or duplicated");
  } else {
    const emptyValid = await form.evaluate((element) => element.checkValidity());
    if (emptyValid) recordFailure("/work/", 390, "required-field validation did not block an empty form");
    await formPage.selectOption('select[name="projectType"]', { index: 1 });
    await formPage.fill('input[name="business"]', "Release Gate Test Business");
    await formPage.fill('input[name="town"]', "Bath");
    await formPage.selectOption('select[name="sector"]', { index: 1 });
    await formPage.fill('input[name="currentLink"]', "https://example.com");
    await formPage.fill('textarea[name="goal"]', "Test a clear mobile enquiry route.");
    const completedValid = await form.evaluate((element) => element.checkValidity());
    if (!completedValid) recordFailure("/work/", 390, "completed enquiry form remained invalid");
    const submitText = (await form.locator('button[type="submit"]').textContent())?.trim() ?? "";
    if (!/project email/i.test(submitText)) recordFailure("/work/", 390, "email preparation submit action missing");
  }
  await formPage.screenshot({ path: path.join(outputDir, "work-form-mobile.png"), fullPage: true });
  await formPage.close();
} catch (error) {
  failures.push({ route: "gate-runtime", width: null, problem: String(error) });
} finally {
  await browser?.close();
  server.kill();
}

const report = {
  generatedAt: new Date().toISOString(),
  routes,
  mobileWidths,
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
console.log(`AI release gate passed: ${results.length} mobile page checks and the project enquiry form validated.`);
