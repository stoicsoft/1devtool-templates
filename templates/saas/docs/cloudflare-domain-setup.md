# Cloudflare Domain Setup

Use this guide when a customer wants to connect a domain managed in Cloudflare to your SaaS.

The template stores domains in Postgres when `DATABASE_URL` is set. Run `npm run db:migrate`, then use `POST /api/domains` to create the domain row and generate the TXT verification token before sending these instructions to a customer. Without `DATABASE_URL`, the UI uses demo data only.

Sources checked on April 14, 2026:

- Cloudflare primary DNS setup: https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/
- Cloudflare zone apex records: https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-zone-apex/
- Cloudflare proxy status: https://developers.cloudflare.com/dns/proxy-status/
- Cloudflare Full Strict SSL mode: https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full-strict/

## 1. Add the Domain to Cloudflare

If the domain is not already in Cloudflare:

1. Add the apex domain, for example `example.com`, in the Cloudflare dashboard.
2. Review the DNS records Cloudflare imports.
3. Replace the registrar nameservers with the two Cloudflare nameservers shown in the zone overview.
4. Wait until the Cloudflare zone status is Active.
5. Re-enable DNSSEC after the nameserver change is complete if the customer uses DNSSEC.

Cloudflare says full setup makes Cloudflare the primary DNS provider for the zone. Their docs also note nameserver changes can take up to 24 hours at the registrar.

## 2. Add the Verification TXT Record

Create the TXT record shown in the app.

For an apex domain:

| Type | Name | Value | Proxy |
| --- | --- | --- | --- |
| TXT | `_their_project-verify` | `<verification-token>` | DNS only |

For a subdomain like `docs.example.com`:

| Type | Name | Value | Proxy |
| --- | --- | --- | --- |
| TXT | `_their_project-verify.docs` | `<verification-token>` | DNS only |

TXT records are for ownership verification, not traffic, so keep them DNS only.

## 3. Add the CNAME Record

Point the customer hostname at your SaaS routing hostname.

For an apex domain:

| Type | Name | Target | Proxy |
| --- | --- | --- | --- |
| CNAME | `@` | `cname.their_project.com` | Proxied |
| CNAME | `www` | `cname.their_project.com` | Proxied |

For a subdomain like `docs.example.com`:

| Type | Name | Target | Proxy |
| --- | --- | --- | --- |
| CNAME | `docs` | `cname.their_project.com` | Proxied |
| CNAME | `www.docs` | `cname.their_project.com` | Proxied |

Cloudflare supports CNAME records at the zone apex through CNAME flattening. If your hosting provider must see the original CNAME target for certificate issuance, use DNS only until issuance finishes, then enable the orange cloud if your provider supports Cloudflare proxying.

## 4. Verify DNS

Use the app's domain page or call the API route directly:

```bash
curl "http://localhost:3000/api/domains/inspect?domain=example.com&token=<verification-token>&target=cname.their_project.com"
```

For a saved Postgres domain row:

```bash
curl "http://localhost:3000/api/domains/inspect?domainId=<domain-id>&target=cname.their_project.com"
```

Expected checks:

- `tokenMatch` is `true` after the TXT record is visible.
- `targetFound` is `true` when the public DNS response shows the target CNAME, or when a proxied record returns A records.

Cloudflare proxied records can hide the origin target and return Cloudflare anycast IPs. The template treats a proxied A response as a routing signal only after the TXT token matches; confirm the hostname works over HTTPS before relying on `ssl_status = active` for billing or launch gates.

## 5. SSL/TLS Settings

Use Cloudflare SSL/TLS Full (strict) when possible. Cloudflare's Full Strict mode requires the origin to serve HTTPS on port `443` with an unexpired certificate issued by a public CA or Cloudflare Origin CA, and the certificate must match the requested hostname.

Avoid Flexible mode for SaaS custom domains because it can mask origin TLS problems and create redirect loops once the app forces HTTPS.

## 6. Production Handoff

Before enabling traffic:

- Store domain, token, primary-domain flag, redirect behavior, verification status, and SSL status in your database.
- Verify ownership before serving customer content.
- Redirect `www` to the primary domain or keep it as an alias, but make that behavior explicit.
- Return clear DNS instructions from the product UI.
- Recheck SSL state after Cloudflare proxying is enabled.
