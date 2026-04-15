---
title: Status page updates
description: Publish accurate incident updates without overpromising the resolution.
section: Playbooks
sectionOrder: 3
order: 1
---

The status page is for customers, not internal speculation. Say what is affected, what users may experience, and when the next update will arrive.

## Update rhythm

| Severity | Cadence |
|---|---|
| SEV1 | Every 15 minutes |
| SEV2 | Every 30 minutes |
| SEV3 | At confirmation and resolution |

## Good update

```text
API writes are failing for some workspaces in the EU region. Reads and dashboard access are healthy. We have rolled back the latest worker deploy and are watching recovery.
```

## Avoid

- Root causes before evidence.
- Exact recovery promises.
- Internal service names customers cannot map to product behavior.
- Blaming vendors while your team is still responsible for communication.

## Closeout

Resolve the public incident only after ServerCompass probes have stayed green through two full check intervals.
