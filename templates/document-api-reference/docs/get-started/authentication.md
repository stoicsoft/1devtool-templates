---
title: Authentication
description: Send signed API requests to ServerCompass from deploy scripts, status bots, and internal tools.
section: Get Started
sectionOrder: 1
order: 1
badge: Start here
---

ServerCompass uses scoped API keys for automation. Keep one key per environment so production scripts can be rotated without touching staging jobs.

## Create a key

Open **Settings -> API keys** and create a key with the scopes your integration needs.

| Scope | Allows |
|---|---|
| `probes:read` | List probes and read current health. |
| `probes:write` | Create or update probes. |
| `incidents:write` | Open incidents and add timeline notes. |
| `domains:read` | Check domain and certificate status. |

## Send the header

Include the key in the `Authorization` header.

```bash
curl https://api.servercompass.example/v1/probes \
  -H "Authorization: Bearer sc_live_your_key" \
  -H "Accept: application/json"
```

## Rotate safely

Create the replacement key first, deploy the new secret, then revoke the old key after one successful probe cycle.

## Error response

Authentication failures use a consistent error envelope.

```json
{
  "error": {
    "code": "unauthorized",
    "message": "Missing or invalid API key"
  }
}
```
