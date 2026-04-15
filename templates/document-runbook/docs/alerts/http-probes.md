---
title: HTTP probe failures
description: Triage failed status checks, latency spikes, and regional HTTP probe failures.
section: Alerts
sectionOrder: 2
order: 1
---

HTTP probes fail when the target returns the wrong status, times out, or becomes unreachable from enough regions to cross the failure policy.

## Confirm scope

Check the ServerCompass probe detail page:

- Failing regions
- Response status
- p95 latency
- Last successful check
- Related deploys

## Fast checks

```bash
curl -I https://api.example.com/health
curl -I https://api.example.com/health --resolve api.example.com:443:203.0.113.10
```

Use the direct-origin check only when you know the origin IP. Do not bypass a customer-facing CDN during normal verification.

## Recovery

If the probe recovers before a fix is shipped, keep the incident open long enough to identify the cause. Flapping probes usually point to capacity, DNS, or a partial deploy.
