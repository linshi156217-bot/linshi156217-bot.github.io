## What changed

- [ ] I reviewed the complete code diff, including generated or AI-assisted changes.
- [ ] I explained the customer-facing effect and rollback path.

## Release gate

- [ ] `pnpm run security:scan` passes.
- [ ] `pnpm run security:audit` reports no high-risk production dependency.
- [ ] `pnpm run build:site` passes.
- [ ] `pnpm run qa:release` passes forms, links, images and 320/375/390/440 px mobile checks.
- [ ] Any database, payment, membership or admin change has a separate test plan and backup.

## Human approval

- [ ] A human reviewer inspected the diff and the uploaded release-gate evidence.
- [ ] Production deployment will be approved manually in the `github-pages` environment.
