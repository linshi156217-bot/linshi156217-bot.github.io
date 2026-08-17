# Linshi Studio 恢复与备份手册

最后核对：2026-08-17

## 1. 生产系统入口

| 项目 | 当前信息 | 恢复用途 |
|---|---|---|
| 正式网站 | https://linshistudio.com/ | 核对线上是否可访问 |
| 网站代码仓库 | https://github.com/linshi156217-bot/linshi156217-bot.github.io | 异地保存已提交的网站源码与历史 |
| GitHub 账户 | `linshi156217-bot` | 部署 GitHub Pages |
| 生产分支 | `main` | 推送后触发正式部署 |
| 企业邮箱 | `hello@linshistudio.com` | 客户询价与正式沟通 |
| 邮箱服务商 | Zoho Mail | 邮件收发与域名邮箱管理 |
| 域名 | `linshistudio.com` | 网站和邮箱身份 |
| 域名注册/DNS | GNAME / share-dns (`a.share-dns.com`, `b.share-dns.net`) | 域名续费与 DNS 修改 |
| 域名账户联系邮箱 | `linshi156217@gmail.com` | GNAME 账户与恢复通知 |
| Instagram | `@designerlinshi` | 社交展示与私信 |
| Facebook | `Shi Lin` · profile ID `61592734760210` | 社交展示与私信 |
| WhatsApp | `https://wa.me/qr/NFHKON7S4RKEO1` | 网站真实联系入口 |
| TikTok | 已注册；账号名尚未写入项目资料 | 补充账号名后用于社交展示 |
| 收款平台 | PayPal；审核状态以 PayPal 后台为准 | 正式 invoice 与 50% 订金 |
| 网站分析 | Cloudflare Web Analytics | 隐私友好的浏览统计 |
| 询盘 API | `https://linshi-studio-enquiry-api.salt-hawthorn-whitby-demo.workers.dev` | 网站表单的服务端接收、校验与留存 |
| 询盘数据库 | Cloudflare D1 `linshi-studio-enquiries` | 保存真实网站询盘和 CRM 同步状态 |

密码、2FA 恢复码、Cookie、OAuth Client Secret 和应用密码不写在本文件，也不写进 GitHub 仓库。
账户恢复信息的人工核对表见 `docs\ACCOUNT-RECOVERY-CHECKLIST.md`。

## 2. 网站技术结构

- 工作区：`C:\Users\Administrator\Documents\搭建网址`
- 框架：Next.js 16.3.1 + React 19.2.8
- 类型：纯代码静态网站
- 配置：`next.config.mjs` 使用 `output: "export"`
- 包管理：pnpm 11.19.0
- 构建：`pnpm install --frozen-lockfile`，然后 `pnpm exec next build`
- 静态输出：`out\`
- 自动部署：`.github\workflows\deploy-pages.yml`
- 自定义域名声明：`public\CNAME`
- 正式部署：推送到 GitHub 仓库的 `main` 分支后由 GitHub Pages 自动执行。
- 询盘 Worker 源码：`workers\enquiry-api\`
- D1 数据库 ID：`b3d666e4-f0a0-4275-af96-7e901b275bb3`（不是密码，可用于重新绑定）
- CRM 同步命令：`pnpm run enquiries:sync`

## 3. 邮箱 DNS

- MX：`mx.zoho.com`、`mx2.zoho.com`、`mx3.zoho.com`
- SPF：`v=spf1 include:zohomail.com ~all`
- DKIM：`zmail._domainkey.linshistudio.com`
- DMARC：`v=DMARC1; p=none; rua=mailto:hello@linshistudio.com; adkim=r; aspf=r; pct=100`
- Zoho 域名验证 TXT 已发布。

恢复 DNS 时必须先在 Zoho 与 GitHub 官方页面重新确认最新要求，不能只凭旧截图覆盖现有记录。

## 4. 关键数据位置

- 网站页面和组件：`app\`
- 网站图片与 QR：`public\`
- 部署配置：`.github\`、`next.config.mjs`、`package.json`、`pnpm-lock.yaml`
- 询盘后端与数据结构：`workers\enquiry-api\`（D1 真实数据仍需从 Cloudflare 单独导出）
- 获客、CRM、报告和自动化状态：`outputs\`
- 自动化与数据处理脚本：`scripts\`
- 社交视频项目：`social-video-*\`
- 视频最终质检：`video-final-qc\`
- 交付与流程文档：`docs\`
- Playwright 的非敏感验收产物：`output\playwright\`，但浏览器 profile 必须排除。

## 5. 不进入普通备份的敏感内容

以下目录可能包含 Cookie、登录数据库、设备会话或本机加密数据，不放入普通压缩包或公开 Git：

- `output\playwright\social-publisher-profile\`
- `output\playwright\zoho-mail-profile\`
- 任何 `*browser-profile*`、`*mail-profile*`、`*publisher-profile*`
- `.env*`、`*credentials*`、`*secrets*`、`*auth-state*`、`*storage-state*`
- 私钥、应用密码和 OAuth 密钥

丢失浏览器 profile 不会让网站瘫痪，只需要重新登录对应平台。备份 Cookie 反而会扩大账户被接管的风险。

## 6. 从 GitHub 恢复网站

```powershell
git clone https://github.com/linshi156217-bot/linshi156217-bot.github.io.git
Set-Location linshi156217-bot.github.io
pnpm install --frozen-lockfile
pnpm exec next build
```

构建通过后检查 `public\CNAME` 是否仍为 `linshistudio.com`。推送 `main` 后在 GitHub Actions 和 https://linshistudio.com/ 核对部署。

## 6.1 恢复询盘 Worker 与 D1

1. 登录当前 Cloudflare 账户并确认 D1 数据库 `linshi-studio-enquiries` 仍存在。
2. 在项目根目录执行 `pnpm exec wrangler d1 execute linshi-studio-enquiries --remote --file workers/enquiry-api/schema.sql`。该 SQL 使用 `IF NOT EXISTS`，用于补齐结构，不会主动删除现有表。
3. 在 `workers\enquiry-api` 目录执行 `pnpm exec wrangler secret put IP_HASH_SALT`，输入新的随机值；不要把值写入源码或本手册。
4. 执行 `pnpm exec wrangler deploy --config workers/enquiry-api/wrangler.jsonc`。
5. 检查 `/health`、网站表单的确认页与 `pnpm run enquiries:sync`。不要用真实客户资料做测试。

Cloudflare D1 中的询盘记录不包含在 Git 仓库中。每周备份应另外执行只读导出，并将导出文件存入受控的私有备份位置，不能提交到公开 GitHub。

## 7. 从完整备份恢复

1. 先验证 `BACKUP-CHECKSUMS.sha256` 中的 SHA-256。
2. 使用 `linshi-studio-git-history.bundle` 恢复 Git 历史。
3. 解压 `linshi-studio-critical-data.tar.gz` 到新的空目录；该压缩包保存本地 CRM 与自动化状态，但不代替 Cloudflare D1 导出。
4. 安装 Node.js 与 pnpm，再执行依赖安装；不要从旧 `node_modules` 恢复。
5. 构建并在本地检查手机端。
6. 登录 GitHub、GNAME、Zoho 和社交平台时使用各平台的账户恢复或 2FA，不从普通备份恢复 Cookie。

恢复 Git bundle 示例：

```powershell
git clone linshi-studio-git-history.bundle restored-linshi-studio
```

## 8. 备份频率

- 每次正式部署、域名/DNS 修改、邮箱配置修改、CRM 大批量更新后立即备份。
- 至少每周生成一次完整备份。
- 同时保留：GitHub 远程源码、D 盘副本、桌面应急副本和一份确认已同步的异地云端副本。
- 每月抽查一次：校验哈希、列出压缩包、从 Git bundle 克隆到临时目录并完成一次构建。

手动生成新的多位置备份：

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "C:\Users\Administrator\Documents\搭建网址\scripts\run-multi-location-backup.ps1"
```

脚本会生成 D 盘主副本，再复制到桌面与 OneDrive 目录并校验哈希。OneDrive 文件夹出现绿色对勾后，才代表云端同步完成。
