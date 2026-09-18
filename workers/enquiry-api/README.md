# Linshi Studio enquiry API

Cloudflare Worker + D1 backend for the public project brief on
`https://linshistudio.com/`.

## Data flow

1. The public form submits JSON to `POST /v1/enquiries`.
2. The Worker validates the allowed origin, payload, consent, timing,
   idempotency key and hourly rate limit.
3. Accepted enquiries are written to D1 with attribution and a unique lead ID.
4. The public site opens `/thank-you/`, which is the conversion page in
   Cloudflare Web Analytics.
5. The enquiry-monitor automation reads new D1 rows with Wrangler, updates the
   local pipeline and notifies the user. It never exposes a public list endpoint.

## Optional immediate Zoho notification

The Worker can also send an internal notification to the studio mailbox after a
successful D1 write. It is deliberately non-blocking: an email-provider outage
does not reject or lose a customer enquiry.

Configure these Cloudflare Worker secrets; never add their values to source
control:

- `ZOHO_CLIENT_ID`
- `ZOHO_CLIENT_SECRET`
- `ZOHO_REFRESH_TOKEN`
- `ZOHO_ACCOUNT_ID`
- `ZOHO_NOTIFY_TO`
- `ZOHO_FROM_EMAIL` (optional; defaults to `ZOHO_NOTIFY_TO`)

The Zoho OAuth client needs only `ZohoMail.messages.CREATE`. A successful
submission writes `notification_sent` to `enquiry_events`; unavailable
credentials write `notification_not_configured`; provider errors write
`notification_failed`.

`IP_HASH_SALT` is a Worker secret and must never be committed. The database
stores only a salted hash of the submitting IP for abuse prevention.
