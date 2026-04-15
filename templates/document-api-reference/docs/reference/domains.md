---
title: Domains
description: API reference for custom domains, DNS verification, and certificate status.
section: Reference
sectionOrder: 3
order: 2
---

Domain endpoints help SaaS teams automate onboarding for customer-owned hostnames.

## Create domain

```http
POST /v1/domains
```

```json
{
  "hostname": "docs.customer.example",
  "service_id": "svc_docs",
  "verification_method": "txt"
}
```

## Verification records

The response includes DNS records that the customer must create.

| Type | Name | Value |
|---|---|---|
| `TXT` | `_servercompass-verify.docs` | `sc-verification=...` |
| `CNAME` | `docs` | `cname.servercompass.example` |

## Certificate status

Read a domain to check certificate progress.

```http
GET /v1/domains/{domain_id}
```

Possible certificate states are `pending`, `active`, `expiring`, and `failed`.
