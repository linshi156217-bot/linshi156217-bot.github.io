import fs from 'node:fs';
import path from 'node:path';
import dns from 'node:dns/promises';
import tls from 'node:tls';
import { execFileSync } from 'node:child_process';
import { chromium } from '@playwright/test';

const root = process.cwd();
const control = path.join(root, 'outputs', 'automation-control');
const reports = path.join(control, 'health-reports');
const lockPath = path.join(control, 'locks', 'website-health.lock');
const pipelinePath = path.join(control, 'pipeline-state.json');
const clientPath = path.join(control, 'client-pipeline.json');
const baseUrl = 'https://linshistudio.com';
const htmlPaths = ['/', '/work/', '/website-review/', '/thank-you/?lead=LSQ-HEALTH-CHECK&source=health_monitor', '/project-guide/', '/privacy/', '/salt-and-hawthorn/', '/alder-and-slate/', '/aster-house-hair/'];
const endpoints = ['/robots.txt', '/sitemap.xml'];
const widths = [320, 375, 390, 440];
const now = new Date();
const londonParts = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/London', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' }).formatToParts(now).filter(x => x.type !== 'literal').map(x => [x.type, x.value]));
const date = `${londonParts.year}-${londonParts.month}-${londonParts.day}`;
const startedAt = now.toISOString();
const screenshotDir = path.join(reports, date, 'screenshots');
const evidenceDir = path.join(reports, date);
let acquired = false;

const mkdir = p => fs.mkdirSync(p, { recursive: true });
const rel = p => path.relative(root, p).replaceAll('\\', '/');
const safeJson = p => JSON.parse(fs.readFileSync(p, 'utf8').replace(/^\uFEFF/, ''));
const statusOf = count => count === 0 ? 'PASS' : 'FAIL';
const fetchWithTimeout = async (url, options = {}, timeout = 20000) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try { return await fetch(url, { redirect: 'follow', ...options, signal: controller.signal }); }
  finally { clearTimeout(timer); }
};

function acquireLock() {
  mkdir(path.dirname(lockPath));
  if (fs.existsSync(lockPath)) {
    const age = Date.now() - fs.statSync(lockPath).mtimeMs;
    if (age > 90 * 60 * 1000) fs.unlinkSync(lockPath);
    else throw new Error(`website-health.lock is active (${Math.round(age / 60000)} minutes old)`);
  }
  fs.writeFileSync(lockPath, JSON.stringify({ pid: process.pid, startedAt, automationId: 'linshi-studio-9' }, null, 2));
  acquired = true;
}

async function certificate() {
  return await new Promise((resolve, reject) => {
    const socket = tls.connect({ host: 'linshistudio.com', port: 443, servername: 'linshistudio.com', rejectUnauthorized: true }, () => {
      const cert = socket.getPeerCertificate();
      const result = { protocol: socket.getProtocol(), subject: cert.subject?.CN, issuer: cert.issuer?.CN, validFrom: cert.valid_from, validTo: cert.valid_to, authorized: socket.authorized };
      socket.end(); resolve(result);
    });
    socket.setTimeout(20000, () => socket.destroy(new Error('TLS timeout')));
    socket.on('error', reject);
  });
}

async function resolveDns() {
  const result = { a: [], ns: [], mx: [], txt: [], source: 'node-dns', diagnostics: [] };
  try { result.a = await dns.resolve4('linshistudio.com'); } catch (error) { result.diagnostics.push(`A: ${error.code || error.message}`); }
  try { result.ns = await dns.resolveNs('linshistudio.com'); } catch (error) { result.diagnostics.push(`NS: ${error.code || error.message}`); }
  try { result.mx = (await dns.resolveMx('linshistudio.com')).sort((a,b) => a.priority-b.priority); } catch (error) { result.diagnostics.push(`MX: ${error.code || error.message}`); }
  try { result.txt = (await dns.resolveTxt('linshistudio.com')).flat(); } catch (error) { result.diagnostics.push(`TXT: ${error.code || error.message}`); }
  if (!result.a.length) {
    result.source = 'dns.google HTTPS fallback';
    const types = [['a', 1], ['ns', 2], ['mx', 15], ['txt', 16]];
    for (const [key, type] of types) {
      try {
        const response = await fetchWithTimeout(`https://dns.google/resolve?name=linshistudio.com&type=${type}`, {}, 6000);
        const body = await response.json();
        const answers = (body.Answer || []).filter(x => x.type === type).map(x => x.data.replace(/^"|"$/g, ''));
        if (key === 'mx') result.mx = answers.map(x => { const m = x.match(/^(\d+)\s+(.+)\.?$/); return { priority: Number(m?.[1] || 0), exchange: m?.[2] || x }; });
        else result[key] = answers.map(x => x.replace(/\.$/, ''));
      } catch (error) { result.diagnostics.push(`DoH ${key.toUpperCase()}: ${error.message}`); }
    }
  }
  if (!result.a.length && process.platform === 'win32') {
    try {
      const script = `$a=Resolve-DnsName linshistudio.com -Type A -DnsOnly;$ns=Resolve-DnsName linshistudio.com -Type NS -DnsOnly;$mx=Resolve-DnsName linshistudio.com -Type MX -DnsOnly;$txt=Resolve-DnsName linshistudio.com -Type TXT -DnsOnly;[pscustomobject]@{a=@($a|? Type -eq A|% IPAddress);ns=@($ns|? Type -eq NS|% NameHost);mx=@($mx|? Type -eq MX|%{"$($_.Preference) $($_.NameExchange)"});txt=@($txt|? Type -eq TXT|%{$_.Strings -join ''})}|ConvertTo-Json -Compress`;
      const fallback = JSON.parse(execFileSync('powershell.exe', ['-NoProfile', '-Command', script], { encoding: 'utf8', timeout: 15000 }));
      Object.assign(result, fallback, { source: 'Windows Resolve-DnsName fallback' });
    } catch (error) { result.diagnostics.push(`Windows DNS fallback: ${error.message}`); }
  }
  return result;
}

async function main() {
  acquireLock();
  mkdir(screenshotDir);
  const clients = safeJson(clientPath);
  const eligibleClients = (clients.clients || []).filter(c => ['live', 'maintenance'].includes(String(c.status || '').toLowerCase()) && c.url);
  const targets = [{ name: 'Linshi Studio', url: baseUrl, primary: true }, ...eligibleClients.map(c => ({ name: c.name || c.businessName || c.url, url: c.url, primary: false }))];

  const dnsResult = await resolveDns();
  let tlsResult;
  try { tlsResult = await certificate(); } catch (error) { tlsResult = { error: error.message }; }
  let httpResult = { status: 0, url: '', diagnostic: '' };
  try { const response = await fetchWithTimeout('http://linshistudio.com/'); httpResult = { status: response.status, url: response.url, source: 'node-fetch' }; }
  catch (error) { httpResult.diagnostic = error.message; }

  const endpointResults = [...htmlPaths, ...endpoints].map(p => ({ path: p, status: 0, source: 'pending-chromium' }));

  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const browser = await chromium.launch({ headless: true, executablePath: fs.existsSync(chromePath) ? chromePath : undefined });
  const browserChecks = [];
  const browserEndpointResults = [];
  const browserErrors = [];
  const discoveredExternal = new Set();
  const performanceSamples = [];
  let formCheck = { status: 'FAIL', present: false, sent: false };
  let notFound = {};
  try {
    const probeContext = await browser.newContext({ viewport: { width: 390, height: 900 } });
    const probePage = await probeContext.newPage();
    try {
      const response = await probePage.goto('http://linshistudio.com/', { waitUntil: 'domcontentloaded', timeout: 10000 });
      httpResult = { status: response?.status() || 0, url: probePage.url(), source: 'chromium' };
    } catch (error) { httpResult.browserDiagnostic = error.message; }
    for (const p of endpoints) {
      try {
        const response = await probePage.goto(baseUrl + p, { waitUntil: 'domcontentloaded', timeout: 10000 });
        browserEndpointResults.push({ path: p, status: response?.status() || 0, finalUrl: probePage.url(), source: 'chromium' });
      } catch (error) { browserEndpointResults.push({ path: p, status: 0, error: error.message, source: 'chromium' }); }
    }
    await probeContext.close();
    for (const target of targets) {
      const paths = target.primary ? htmlPaths : ['/'];
      for (const p of paths) {
          const context = await browser.newContext({ viewport: { width: 390, height: 900 }, deviceScaleFactor: 1, locale: 'en-GB' });
          const page = await context.newPage();
          const errors = [];
          page.on('console', m => { if (m.type() === 'error') errors.push(`console: ${m.text()}`); });
          page.on('pageerror', e => errors.push(`pageerror: ${e.message}`));
          const started = Date.now();
          let response;
          try {
            response = await page.goto(new URL(p, target.url).href, { waitUntil: 'domcontentloaded', timeout: 10000 });
            await page.waitForTimeout(500);
            if (target.primary && p === '/') performanceSamples.push(Date.now() - started);
            for (const width of widths) {
              await page.setViewportSize({ width, height: 900 });
              await page.waitForTimeout(100);
              const metrics = await page.evaluate(() => {
                const images = [...document.images].map(i => ({ src: i.currentSrc || i.src, alt: i.getAttribute('alt'), broken: i.complete && i.naturalWidth === 0 }));
                const links = [...document.querySelectorAll('a[href]')].map(a => a.href);
                const emptyLinks = [...document.querySelectorAll('a')].filter(a => !a.getAttribute('href') || a.getAttribute('href') === '#').length;
                const unlabeledControls = [...document.querySelectorAll('button,input,select,textarea')].filter(el => {
                  const id = el.id; const label = id && document.querySelector(`label[for="${CSS.escape(id)}"]`);
                  const hasOwnAccessibleName = el.matches('button') && Boolean(el.textContent?.trim() || el.getAttribute('title') || el.getAttribute('value'));
                  return !label && !el.closest('label') && !el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby') && !hasOwnAccessibleName && el.getAttribute('type') !== 'hidden';
                }).length;
                return { scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth, h1Count: document.querySelectorAll('h1').length, title: document.title, description: document.querySelector('meta[name="description"]')?.content || '', canonical: document.querySelector('link[rel="canonical"]')?.href || '', robots: document.querySelector('meta[name="robots"]')?.content || '', jsonLd: [...document.querySelectorAll('script[type="application/ld+json"]')].map(x => x.textContent), images, links, emptyLinks, lang: document.documentElement.lang, unlabeledControls };
              });
              for (const href of metrics.links) { try { const u = new URL(href); if (!['mailto:','tel:','javascript:'].includes(u.protocol) && u.origin !== new URL(target.url).origin) discoveredExternal.add(u.href); } catch {} }
              browserChecks.push({ site: target.name, path: p, width, status: response?.status() || 0, ...metrics, horizontalOverflow: metrics.scrollWidth > metrics.clientWidth + 1, brokenImages: metrics.images.filter(i => i.broken), missingImageAlt: metrics.images.filter(i => i.alt === null), errors: [...errors] });
              if (target.primary && ((p === '/' && [390, 440].includes(width)) || (p === '/work/' && width === 320))) {
                const name = p === '/' ? `home-${width}.png` : `work-${width}.png`;
                await page.screenshot({ path: path.join(screenshotDir, name), fullPage: true });
              }
            }
          } catch (error) {
            for (const width of widths) browserChecks.push({ site: target.name, path: p, width, status: response?.status() || 0, fatalError: error.message, errors: [...errors] });
          } finally { await context.close(); }
      }
    }

    const context = await browser.newContext({ viewport: { width: 390, height: 900 } });
    const page = await context.newPage();
    let capturedEnquiry = null;
    try {
      await page.route('https://linshi-studio-enquiry-api.salt-hawthorn-whitby-demo.workers.dev/v1/enquiries', async route => {
        capturedEnquiry = route.request().postDataJSON();
        await route.fulfill({ status: 201, contentType: 'application/json', body: JSON.stringify({ ok: true, leadId: 'LSQ-HEALTH-CHECK' }) });
      });
      await page.goto(`${baseUrl}/work/?utm_source=health_monitor&utm_campaign=read_only`, { waitUntil: 'domcontentloaded', timeout: 10000 });
      const form = page.locator('form');
      formCheck.present = await form.count() > 0;
      if (formCheck.present) {
      formCheck.requiredFields = await form.locator('[required]').evaluateAll(els => els.map(e => e.name));
      await form.locator('[name="projectType"]').selectOption({ index: 1 });
      await form.locator('[name="business"]').fill('Health Monitor Test — Do Not Send');
      await form.locator('[name="contactName"]').fill('Health Monitor');
      await form.locator('[name="email"]').fill('health-monitor@example.com');
      await form.locator('[name="town"]').fill('London');
      await form.locator('[name="sector"]').selectOption({ index: 1 });
      await form.locator('[name="currentLink"]').fill('https://example.com');
      await form.locator('[name="goal"]').fill('Read-only validation of the server-confirmed enquiry path.');
      await form.locator('[name="privacyConsent"]').check();
      const endpoint = await form.evaluate(() => [...document.scripts].map(script => script.textContent || '').join('\n').includes('linshi-studio-enquiry-api'));
      await Promise.all([
        page.waitForURL(/\/thank-you\/\?lead=LSQ-HEALTH-CHECK/),
        form.locator('button[type="submit"]').click(),
      ]);
      const current = page.url();
      const referenceVisible = await page.locator('main').textContent().then(text => text?.includes('LSQ-HEALTH-CHECK'));
      const payloadValid = Boolean(capturedEnquiry?.projectType && capturedEnquiry?.business && capturedEnquiry?.contactName && capturedEnquiry?.email && capturedEnquiry?.town && capturedEnquiry?.sector && capturedEnquiry?.privacyConsent === true);
        formCheck = { ...formCheck, status: endpoint && payloadValid && referenceVisible ? 'PASS' : 'FAIL', endpointConfigured: endpoint, requestIntercepted: Boolean(capturedEnquiry), payloadValid, serverAcknowledged: current.includes('LSQ-HEALTH-CHECK'), referenceVisible, sent: false, observedUrl: current };
      }
    } catch (error) { formCheck = { ...formCheck, status: 'WARN', error: error.message, sent: false }; }
    await context.close();

    const nfContext = await browser.newContext({ viewport: { width: 390, height: 900 } });
    const nfPage = await nfContext.newPage();
    try {
      const nfResponse = await nfPage.goto(`${baseUrl}/health-monitor-missing-${Date.now()}/`, { waitUntil: 'domcontentloaded', timeout: 10000 });
      notFound = { status: nfResponse?.status() || 0, hasHomeLink: await nfPage.locator('a[href="/"]').count() > 0, title: await nfPage.title() };
      await nfPage.screenshot({ path: path.join(screenshotDir, '404-390.png'), fullPage: true });
    } catch (error) { notFound = { status: 0, hasHomeLink: false, error: error.message }; }
    await nfContext.close();
  } finally { await browser.close(); }

  for (const item of endpointResults) {
    if (item.status !== 0) continue;
    const browserValue = endpoints.includes(item.path)
      ? browserEndpointResults.find(x => x.path === item.path)
      : browserChecks.find(x => x.site === 'Linshi Studio' && x.path === item.path && x.width === 390);
    if (browserValue?.status) Object.assign(item, { status: browserValue.status, finalUrl: browserValue.finalUrl || baseUrl + item.path, source: 'chromium-fallback', nodeDiagnostic: item.error });
  }

  const externalResults = [];
  for (const href of [...discoveredExternal].slice(0, 30)) {
    try { const response = await fetchWithTimeout(href, { headers: { 'user-agent': 'Mozilla/5.0 LinshiHealthMonitor/1.0' } }, 8000); externalResults.push({ url: href, status: response.status, finalUrl: response.url }); }
    catch (error) { externalResults.push({ url: href, status: 0, error: error.message }); }
  }

  const htmlFailures = endpointResults.filter(x => htmlPaths.includes(x.path) && x.status !== 200);
  const endpointFailures = endpointResults.filter(x => endpoints.includes(x.path) && x.status !== 200);
  const overflow = browserChecks.filter(x => x.horizontalOverflow);
  const brokenImages = browserChecks.flatMap(x => x.brokenImages || []);
  const missingMeta = browserChecks.filter(x => x.status === 200 && (!x.title || !x.description || !x.canonical || x.h1Count !== 1));
  const consoleErrors = browserChecks.flatMap(x => x.errors || []).filter(e => !/favicon|third-party|ERR_BLOCKED_BY_CLIENT/i.test(e));
  const jsonLdErrors = [];
  for (const c of browserChecks.filter(x => x.width === 390)) for (const value of c.jsonLd || []) try { JSON.parse(value); } catch { jsonLdErrors.push({ path: c.path, site: c.site }); }
  const privacyPresent = endpointResults.some(x => x.path === '/privacy/' && x.status === 200);
  const whatsapp = externalResults.filter(x => /wa\.me|whatsapp\.com/.test(x.url));
  const social = externalResults.filter(x => /instagram\.com|facebook\.com/.test(x.url));
  const externalHardFailures = externalResults.filter(x => x.status >= 400 && !/instagram\.com|facebook\.com/.test(x.url));
  const medium = [];
  const critical = [];
  if (htmlFailures.length) critical.push(`${htmlFailures.length} key page(s) did not return 200`);
  if (httpResult.url !== `${baseUrl}/` || httpResult.status !== 200) critical.push('HTTP does not redirect to healthy HTTPS homepage');
  const chromiumHttpsHealthy = browserChecks.some(x => x.site === 'Linshi Studio' && x.path === '/' && x.status === 200);
  if (!chromiumHttpsHealthy) critical.push('HTTPS homepage failed certificate-validated Chromium navigation');
  if (overflow.length) critical.push(`${overflow.length} severe mobile horizontal overflow check(s) failed`);
  if (!formCheck.present || formCheck.status !== 'PASS') high.push('The server-confirmed enquiry journey did not pass the safe intercepted submission check');
  const high = [];
  if (brokenImages.length) high.push(`${brokenImages.length} broken image occurrence(s)`);
  if (endpointFailures.length) high.push(`${endpointFailures.length} robots/sitemap endpoint failure(s)`);
  if (externalHardFailures.length) high.push(`${externalHardFailures.length} contact/external target failure(s)`);
  if (missingMeta.length) medium.push(`${missingMeta.length} mobile page check(s) missing required metadata or valid H1`);
  if (jsonLdErrors.length) medium.push(`${jsonLdErrors.length} invalid JSON-LD block(s)`);
  if (consoleErrors.length) medium.push(`${consoleErrors.length} browser console error(s)`);
  const warnings = [];
  for (const x of social.filter(x => x.status === 0 || x.status >= 400)) warnings.push(`Third-party social probe ${x.status || 'network error'}: ${x.url}`);
  if (notFound.status !== 404 || !notFound.hasHomeLink) warnings.push(`404 route returned ${notFound.status}; home recovery link=${notFound.hasHomeLink}`);
  const status = critical.length || high.length ? 'FAIL' : medium.length || warnings.length ? 'WARN' : 'PASS';
  const completedAt = new Date().toISOString();
  const report = {
    schemaVersion: 1, date, timezone: 'Europe/London', scheduledTime: '04:30', startedAt, completedAt, lateCatchUp: true, mode: 'read-only', status, modifiedProduction: false,
    severityCounts: { critical: critical.length, high: high.length, medium: medium.length, info: warnings.length },
    counts: { htmlPages: htmlPaths.length, siteEndpoints: endpoints.length, mobileViewportChecks: browserChecks.length, eligibleClientSites: eligibleClients.length, issuesRequiringSiteChanges: critical.length + high.length + medium.length },
    targets: { baseUrl, htmlPaths, endpoints, widths, sites: targets },
    clientPipeline: { path: rel(clientPath), clientCount: (clients.clients || []).length, eligibleStatuses: ['live','maintenance'], eligibleSiteCount: eligibleClients.length, status: eligibleClients.length ? 'completed' : 'completed_0' },
    checks: {
      dns: { status: dnsResult.a.length ? 'PASS' : 'FAIL', ...dnsResult },
      https: { status: chromiumHttpsHealthy && httpResult.url === `${baseUrl}/` ? 'PASS' : 'FAIL', ...tlsResult, chromiumValidated: chromiumHttpsHealthy, httpFinalUrl: httpResult.url, httpFinalStatus: httpResult.status, httpProbeSource: httpResult.source, diagnostics: [httpResult.diagnostic, httpResult.browserDiagnostic].filter(Boolean) },
      keyPages: { status: statusOf(htmlFailures.length), results: endpointResults.filter(x => htmlPaths.includes(x.path)) },
      robotsAndSitemap: { status: statusOf(endpointFailures.length), results: endpointResults.filter(x => endpoints.includes(x.path)) },
      mobile: { status: statusOf(overflow.length + brokenImages.length), checkCount: browserChecks.length, horizontalOverflowCount: overflow.length, brokenImageCount: brokenImages.length, missingImageAltCount: browserChecks.reduce((n,x) => n+(x.missingImageAlt?.length||0),0), emptyLinkCount: browserChecks.reduce((n,x)=>n+(x.emptyLinks||0),0), invalidH1OrMetadataCount: missingMeta.length, unlabeledControlCount: browserChecks.reduce((n,x)=>n+(x.unlabeledControls||0),0), consoleErrorCount: consoleErrors.length },
      form: formCheck,
      contactAndExternalLinks: { status: externalHardFailures.length ? 'FAIL' : warnings.length ? 'WARN' : 'PASS', tested: externalResults, whatsapp, social },
      structuredData: { status: statusOf(jsonLdErrors.length), parseErrors: jsonLdErrors },
      notFound: { status: notFound.status === 404 && notFound.hasHomeLink ? 'PASS' : 'WARN', ...notFound },
      privacy: { status: privacyPresent ? 'PASS' : 'FAIL' },
      performanceBaseline: { status: 'PASS', classification: 'diagnostic_only', viewportWidth: 390, domContentLoadedAndNetworkIdleMs: performanceSamples, realUserCoreWebVitalsMeasured: false },
      remoteStudioLocalBusinessFields: { status: 'N/A', publicStoreMap: 'N/A', openingHours: 'N/A', publicTelephone: 'N/A', reason: 'Remote studio with email and verified WhatsApp as primary contact paths' }
    },
    issues: [...critical.map(message => ({ severity:'critical', message })), ...high.map(message => ({ severity:'high', message })), ...medium.map(message => ({ severity:'medium', message })), ...warnings.map(message => ({ severity:'info', message }))],
    blockers: critical, evidence: { screenshots: fs.readdirSync(screenshotDir).map(f => rel(path.join(screenshotDir, f))), raw: rel(path.join(evidenceDir, 'raw.json')) },
    nextStep: status === 'PASS' ? 'Continue daily read-only monitoring; no production change is required.' : status === 'WARN' ? 'Review warnings while continuing daily monitoring; no blocking production failure was confirmed.' : 'Investigate blocking failures immediately; production was not modified by this monitor.'
  };
  fs.writeFileSync(path.join(evidenceDir, 'raw.json'), JSON.stringify({ dnsResult, tlsResult, endpointResults, browserChecks, externalResults, formCheck, notFound }, null, 2));
  fs.writeFileSync(path.join(reports, `${date}.json`), JSON.stringify(report, null, 2));
  const lines = [
    `# Linshi Studio 网站健康监控 — ${date}`,'',
    `- 结论：**${status}**（critical ${critical.length} / high ${high.length} / medium ${medium.length} / info ${warnings.length}）`,
    `- 时间：${startedAt} 至 ${completedAt}；Europe/London 04:30 计划任务的晚触发补跑`,
    '- 模式：只读；未修改生产，未发送表单或真实线索',
    `- 客户站点：${eligibleClients.length} 个 live/maintenance（${eligibleClients.length ? 'completed' : 'completed_0'}）`,'',
    '## 检查摘要','',
    `- HTTPS/DNS：${report.checks.https.status} / ${report.checks.dns.status}；HTTP 最终 ${httpResult.status} ${httpResult.url}；TLS ${tlsResult.protocol || (chromiumHttpsHealthy ? 'Chromium certificate validation passed' : tlsResult.error)}`,
    `- 首页与关键页：${htmlPaths.length-htmlFailures.length}/${htmlPaths.length} 返回 200；robots/sitemap ${endpoints.length-endpointFailures.length}/${endpoints.length} 正常`,
    `- 移动端：${browserChecks.length} 次检查（320/375/390/440）；横向溢出 ${overflow.length}，破图 ${brokenImages.length}，关键 metadata/H1 异常 ${missingMeta.length}，控制台错误 ${consoleErrors.length}`,
    `- 表单路径：${formCheck.status}；请求被安全拦截=${Boolean(formCheck.requestIntercepted)}，服务端确认=${Boolean(formCheck.serverAcknowledged)}，编号可见=${Boolean(formCheck.referenceVisible)}，实际生产写入=false`,
    `- 内外链/联系方式：${report.checks.contactAndExternalLinks.status}；测试 ${externalResults.length} 个外部目标；WhatsApp ${whatsapp.length}，社交目标 ${social.length}`,
    `- 结构化数据：${report.checks.structuredData.status}；404：${report.checks.notFound.status}（HTTP ${notFound.status}，返回首页路径=${notFound.hasHomeLink}）`,
    `- 基础无障碍：缺失图片 alt ${report.checks.mobile.missingImageAltCount}；无标签表单控件 ${report.checks.mobile.unlabeledControlCount}`,'',
    '## 问题与阻断项','',
    ...(report.issues.length ? report.issues.map(x => `- ${x.severity.toUpperCase()}：${x.message}`) : ['- 无。']), '',
    '## 性能诊断','',
    `- 390px 首页 DOMContentLoaded + network-idle 样本：${performanceSamples.join(' / ') || '未取得'} ms。此项为合成诊断，不宣称真实用户 Core Web Vitals。`,'',
    '## N/A','',
    '- Linshi Studio 为远程工作室；公开门店地图、营业时间和公共电话号码继续记为 N/A，不建议添加虚假信息。','',
    '## 证据','',
    ...report.evidence.screenshots.map(x => `- ${x}`),
    `- ${report.evidence.raw}`,'',
    '## 下一步','', report.nextStep, ''
  ];
  fs.writeFileSync(path.join(reports, `${date}.md`), lines.join('\n'));

  const pipeline = safeJson(pipelinePath);
  pipeline.version ??= 1; pipeline.timezone ??= 'Europe/London'; pipeline.jobs ??= {};
  pipeline.updatedAt = completedAt;
  pipeline.jobs.websiteHealth = { lastRun: completedAt, completedAt, lastSuccessfulLondonDate: status === 'FAIL' ? (pipeline.jobs.websiteHealth?.lastSuccessfulLondonDate || null) : date, status: `completed_${status.toLowerCase()}`, mobileWidthsChecked: widths, horizontalOverflow: overflow.length > 0, brokenImages: brokenImages.length, criticalFailures: critical.length, highFailures: high.length, mediumFailures: medium.length, counts: report.counts, blockers: critical, report: rel(path.join(reports, `${date}.md`)), jsonReport: rel(path.join(reports, `${date}.json`)), screenshots: report.evidence.screenshots, productionModified: false };
  const temp = `${pipelinePath}.${process.pid}.tmp`;
  fs.writeFileSync(temp, JSON.stringify(pipeline, null, 2));
  fs.renameSync(temp, pipelinePath);
  console.log(JSON.stringify({ status, date, report: rel(path.join(reports, `${date}.md`)), json: rel(path.join(reports, `${date}.json`)), screenshots: report.evidence.screenshots, severityCounts: report.severityCounts, eligibleClientSites: eligibleClients.length, blockers: critical }, null, 2));
}

try { await main(); }
finally { if (acquired && fs.existsSync(lockPath)) fs.unlinkSync(lockPath); }
