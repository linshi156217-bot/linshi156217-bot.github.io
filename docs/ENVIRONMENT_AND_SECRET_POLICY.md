# Environment and secret policy

## Current production model

- Public source repository: `linshi156217-bot/linshi156217-bot.github.io`.
- Test/preview work: local or pull-request CI, with no production secrets.
- Production deployment: GitHub Pages through the protected `github-pages` environment.
- Production approver: `@linshi156217-bot`.

The current site is static and needs no repository, Actions or Dependabot secret. Do not add one unless a future feature has a documented need.

## Rules

1. Never commit `.env`, private keys, certificates, service-account files or provider credentials.
2. Only non-secret browser values may use the `NEXT_PUBLIC_` prefix.
3. Test and production credentials must use different provider accounts or keys.
4. Production values belong only in the `github-pages` environment; test values belong in a separate test environment.
5. Pull-request and AI validation jobs receive `contents: read` only and must not reference `${{ secrets.* }}`.
6. Rotate any credential immediately if it appears in a commit, log, screenshot, email or chat; deleting the visible line is not sufficient.
7. Back up workflow and environment configuration before permission changes.

## 2026-08-04 audit baseline

- Deploy keys: none.
- Repository Actions secrets: none.
- Dependabot secrets: none.
- Open GitHub secret-scanning alerts: none.
- Secret scanning: enabled.
- Push protection: enabled.
- Tracked files and Git history: no common private-key or token signatures found by the local redacted scan.

This baseline contains names and counts only; secret values must never be copied into audit reports.
