---
title: SSL expiry
description: Respond when ServerCompass warns that a certificate is nearing expiry or failed renewal.
section: Alerts
sectionOrder: 2
order: 2
---

Certificate alerts are easy to ignore until they become outages. Treat failed renewal as customer-impacting unless the hostname is internal and unused.

## Check status

Open the domain in ServerCompass and confirm:

| Signal | What to look for |
|---|---|
| Expiry date | Less than 14 days is warning territory. |
| Issuer | Unexpected issuer may mean the wrong certificate is served. |
| DNS target | CNAME or A record still points at the managed edge. |
| Validation error | ACME or DNS challenge failure. |

## Common fixes

- Restore the required CNAME target.
- Remove stale AAAA records if the edge does not serve IPv6.
- Confirm the TXT verification record is still present.
- Retry renewal after DNS propagation.

## Customer note

```text
We found a certificate renewal issue for docs.example.com. Traffic is still secure. We are correcting DNS validation and will confirm after renewal completes.
```
