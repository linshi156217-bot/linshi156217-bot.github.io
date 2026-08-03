# Linshi enquiry API

Cloudflare Worker + D1 backend for the public project brief and private approval queue.

## Data flow

1. `POST /api/inquiries` validates and stores a project brief.
2. Zoho sends a notification to `hello@linshistudio.com`.
3. `/inquiries/` loads the protected queue with `ADMIN_TOKEN`.
4. Editing resets approval. A reply can only be sent after explicit approval.
5. Approved replies are sent by the Zoho Mail API and marked `sent`.

## Cloudflare setup

```bash
cd worker
pnpm dlx wrangler d1 create linshi-enquiries
# Put the returned database_id in wrangler.jsonc.
pnpm dlx wrangler d1 migrations apply linshi-enquiries --remote
pnpm dlx wrangler secret put ADMIN_TOKEN
pnpm dlx wrangler secret put RATE_LIMIT_SALT
pnpm dlx wrangler secret put ZOHO_CLIENT_ID
pnpm dlx wrangler secret put ZOHO_CLIENT_SECRET
pnpm dlx wrangler secret put ZOHO_REFRESH_TOKEN
pnpm dlx wrangler secret put ZOHO_ACCOUNT_ID
pnpm dlx wrangler deploy
```

Use Zoho OAuth scopes `ZohoMail.accounts.READ,ZohoMail.messages.CREATE` with offline access. Set the correct Zoho data-centre URLs if the mailbox is not in the US data centre.

Set the GitHub repository variable `NEXT_PUBLIC_ENQUIRY_API_URL` to the deployed Worker URL, including `/api/inquiries`.
