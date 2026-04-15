---
title: Incidents
description: Endpoint reference for opening, updating, resolving, and listing incidents.
section: Reference
sectionOrder: 3
order: 1
badge: Reference
---

Incidents collect probe evidence, timeline notes, owners, and status-page updates.

## List incidents

```http
GET /v1/incidents
```

Query parameters:

| Name | Type | Notes |
|---|---|---|
| `status` | string | `open`, `investigating`, `resolved` |
| `service_id` | string | Filter by service. |
| `created_after` | datetime | ISO 8601 timestamp. |

## Open an incident

```http
POST /v1/incidents
```

```json
{
  "title": "API latency above threshold",
  "service_id": "svc_api",
  "severity": "major",
  "summary": "p95 latency is above 2s from three regions."
}
```

## Resolve an incident

```http
POST /v1/incidents/{incident_id}/resolve
```

Include a concise resolution note. The note becomes part of the incident timeline.
