---
title: Create a probe
description: Add an HTTP monitor, choose regions, and set the failure policy through the ServerCompass API.
section: Get Started
sectionOrder: 1
order: 2
badge: Endpoint
---

A probe is a scheduled check against a URL, a TCP endpoint, or a certificate. Most teams start with an HTTP probe for their public app before layering on DNS and SSL probes.

> [!NOTE]
> Every probe you create runs from a minimum of three regions in parallel. Read the [regions reference](/docs/reference/domains) for the full region list before promoting a probe to production.

## Endpoint

```http
POST /v1/probes
```

All requests must be authenticated. See [Authentication](/docs/get-started/authentication) for signed-request details.

## Request

```json
{
  "name": "Docs site",
  "target": "https://docs.example.com",
  "method": "GET",
  "interval_seconds": 60,
  "regions": ["iad", "fra", "sin"],
  "failure_policy": {
    "consecutive_failures": 3,
    "open_incident": true
  }
}
```

### Parameters

| Field | Type | Description |
|---|---|---|
| `name` | string | Human label shown in the dashboard and alerts. |
| `target` | string | Full URL, TCP host, or hostname for certificate checks. |
| `method` | enum | `GET`, `HEAD`, `POST`, `OPTIONS`. Defaults to `GET`. |
| `interval_seconds` | integer | 30, 60, 300, or 900. Subject to plan rate limits. |
| `regions` | string[] | ISO-like codes. Provide at least three for failover confidence. |
| `failure_policy` | object | How many consecutive failures create an incident. |

## Response

```json
{
  "id": "probe_7n9x",
  "status": "active",
  "next_run_at": "2026-04-15T09:42:00Z",
  "regions": ["iad", "fra", "sin"]
}
```

> [!TIP]
> Save the returned `id` in your own system. Every other API in ServerCompass — incidents, webhooks, status pages — references probes by id, not name.

## Choose regions

Pick at least three regions for customer-facing services. One failed city should create evidence, not panic. The default regional triad for global SaaS is:

- `iad` — US East (Ashburn)
- `fra` — EU (Frankfurt)
- `sin` — APAC (Singapore)

Add `syd`, `gru`, or `cpt` when you care about Oceania, South America, or Africa specifically.

> [!WARNING]
> Single-region probes will save you one credit per minute, but they cannot distinguish an internet-weather event from a real outage. Avoid them for anything customer-facing.

## Verify

Read the probe after creation and confirm `status` is `active`:

```bash
curl -H "Authorization: Bearer $SERVERCOMPASS_KEY" \
  https://api.servercompass.local/v1/probes/probe_7n9x
```

Expect a 200 response with the same body shape as the create call, plus a `last_run` block once the first check has completed.

## What to read next

- [Authentication](/docs/get-started/authentication) to sign the request correctly.
- [Rate limits](/docs/reference/rate-limits) for probe creation throughput.
- [Webhooks](/docs/guides/webhooks) to ship probe state changes into Slack or a custom endpoint.
