# Linshi Studio AI code release policy

This policy applies to Linshi Studio and every customer website maintained from this workspace.

## Mandatory gate

No AI-generated or AI-assisted change may reach production until all of the following are complete:

1. A pull request exposes the complete code diff for human review.
2. The secret gate confirms that credentials and private keys are not committed.
3. The production dependency audit reports no high or critical vulnerability.
4. The production build completes from the committed lockfile.
5. Forms, links, images and mobile layouts pass the automated release gate at 320, 375, 390 and 440 CSS pixels.
6. A human inspects the diff and the uploaded release evidence.
7. A human explicitly approves the protected `github-pages` production environment.

The commands are:

```powershell
pnpm run security:scan
pnpm run security:audit
pnpm run build:site
pnpm run qa:release
```

## Higher-risk customer sites

Database, payment, member login, booking and admin projects require additional tests before approval:

- a restorable database/configuration backup;
- separate test and production credentials;
- authorization tests for every protected action;
- safe test transactions or sandbox providers only;
- migration and rollback instructions;
- privacy, retention and deletion checks;
- an identified human owner for production approval.

Production secrets must never be available to pull-request jobs, AI research scripts, lead-generation scripts or social/email automations.

## Emergency rollback

If a production defect is found, stop further deployments, record the affected commit, revert through a reviewed pull request when practical, rerun the full gate and require a new production approval. Do not bypass the gate to “fix forward” without evidence.
