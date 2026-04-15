---
title: Escalation policy
description: Reference for paging owners, leadership, support, and customer communications.
section: Reference
sectionOrder: 4
order: 1
badge: Reference
---

Escalation exists to get the right decision-maker into the incident room quickly.

## Primary path

| Trigger | Escalate to |
|---|---|
| SEV1 declared | Engineering lead and product lead |
| Data integrity risk | Security and database owner |
| Customer-facing outage over 30 minutes | Support lead and leadership on-call |
| No service owner found | Platform lead |

## Backup path

If the primary owner does not acknowledge within five minutes, page the backup owner. If both fail, page the engineering lead.

## Customer escalation

Support should receive a short internal note before customers start asking:

```text
Incident: API writes failing for some EU workspaces.
Impact: Create/update actions may fail.
ETA: Unknown. Next engineering update at 14:30 UTC.
```

## After incident

Update the policy when escalation was slow, unclear, or too broad.
