---
title: Webhooks
description: Receive signed incident, probe, and domain events from ServerCompass.
section: Guides
sectionOrder: 2
order: 1
---

Webhooks let ServerCompass notify your own systems when a check fails, an incident changes state, or a certificate moves toward expiry.

## Event types

| Event | When it fires |
|---|---|
| `probe.failed` | A probe crosses its failure policy. |
| `probe.recovered` | A previously failing probe passes again. |
| `incident.opened` | ServerCompass opens a new incident. |
| `incident.resolved` | An incident is marked resolved. |
| `domain.ssl_expiring` | A certificate enters the warning window. |

## Signature header

Every request includes `ServerCompass-Signature`.

```text
t=1776230800,v1=2fe4f7c1d6c9...
```

Build the signed payload from the timestamp, a period, and the raw request body. Reject requests older than five minutes.

## Retry policy

ServerCompass retries failed deliveries for 24 hours with backoff. Return a `2xx` response after you store the event, not after every downstream action finishes.

## Local testing

Use the webhook tester from the dashboard to send a signed sample to a tunnel URL while you build the handler.
