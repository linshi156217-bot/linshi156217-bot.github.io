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

`IP_HASH_SALT` is a Worker secret and must never be committed. The database
stores only a salted hash of the submitting IP for abuse prevention.
