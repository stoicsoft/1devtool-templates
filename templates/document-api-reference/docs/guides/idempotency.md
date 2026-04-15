---
title: Idempotency
description: Make create and update calls safe to retry during deploys and incident automation.
section: Guides
sectionOrder: 2
order: 2
---

Network automation should be boring under retry. ServerCompass accepts an `Idempotency-Key` header on mutating requests.

## Header

```bash
curl https://api.servercompass.example/v1/incidents \
  -X POST \
  -H "Authorization: Bearer sc_live_your_key" \
  -H "Idempotency-Key: deploy-2026-04-15-01" \
  -d '{"title":"Deploy verification failed"}'
```

## Retention

Keys are retained for 24 hours. Reusing the same key with a different request body returns `409 conflict`.

## Good keys

Use keys that match the job creating the request:

- Deployment id
- Incident automation run id
- CI workflow id
- Domain verification attempt id

## When not to use keys

Do not reuse a key across unrelated resources. A key should describe one attempted write, not a whole workflow.
