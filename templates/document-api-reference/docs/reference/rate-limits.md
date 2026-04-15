---
title: Rate limits
description: Understand API quotas, retry headers, and safe backoff behavior.
section: Reference
sectionOrder: 3
order: 3
---

Rate limits protect incident systems from accidental loops while keeping normal deploy automation fast.

## Default limits

| Bucket | Limit |
|---|---|
| Read requests | 600 per minute |
| Write requests | 120 per minute |
| Webhook test sends | 30 per hour |

## Headers

Every response includes quota headers.

```text
ServerCompass-RateLimit-Limit: 120
ServerCompass-RateLimit-Remaining: 114
ServerCompass-RateLimit-Reset: 1776230860
```

## Backoff

When you receive `429 too_many_requests`, wait until the reset timestamp before retrying. For deploy automation, surface the failure instead of retrying forever.
