---
title: Severity levels
description: Decide incident severity from customer impact instead of internal anxiety.
section: Start
sectionOrder: 1
order: 2
---

Severity sets the response pace. It should describe customer impact, not how noisy the alert feels.

## Levels

| Severity | Customer impact | Response |
|---|---|---|
| SEV1 | Broad outage or data risk | Immediate incident room and executive awareness. |
| SEV2 | Major feature degraded | Incident room and public status update if confirmed. |
| SEV3 | Narrow degradation | Owner investigates during business hours unless worsening. |
| SEV4 | No active impact | Track as maintenance work. |

## Adjusting severity

Raise severity as soon as evidence changes. Lower severity after the commander confirms impact is narrower than first believed.

## Notes

Use ServerCompass probe evidence in the incident timeline so severity changes are easy to audit later.
