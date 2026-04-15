---
title: Incident room
description: Start the response channel, assign roles, and keep the first ten minutes calm.
section: Start
sectionOrder: 1
order: 1
badge: Start here
---

Use this runbook when ServerCompass opens a major incident, or when a customer reports a broad outage before monitoring confirms it. The goal of the first ten minutes is not to resolve — it is to contain, attribute, and communicate.

> [!IMPORTANT]
> If customer data integrity may be affected, page the on-call CTO immediately using the phone tree in the [escalation policy](/docs/reference/escalation-policy). Do not wait for investigation.

## First ten minutes

1. Open the incident room in Slack or the tool your team uses.
2. Assign commander, communications, and investigator roles.
3. Pin the ServerCompass incident link and any correlated probes.
4. Add a short impact statement — what the customer sees, right now.
5. Decide whether a public status update is needed in the next ten minutes.

> [!TIP]
> The commander&apos;s only job in the first ten minutes is to keep the room quiet. Silence Slack threads that are not the incident room. Delegate external comms and investigation to the other two roles.

## Role checklist

| Role | Owns | Does not do |
|---|---|---|
| Commander | Scope, decisions, and next checkpoint. | Writing code or debugging live. |
| Investigator | Logs, probes, deploy history, rollback options. | Drafting customer updates. |
| Communications | Status page updates, support notes, customer replies. | Deciding technical mitigations. |

## First update

Keep the first update short, truthful, and on a cadence the customer can plan around.

```text
We are investigating elevated errors on the API. Current impact appears limited to write requests. Next update in 15 minutes.
```

If you do not have new information in 15 minutes, post a "no new info, investigating" update anyway. Silence is the worst update.

## When to escalate

Escalate when any of the following is true:

- Customer impact is confirmed and growing.
- Data integrity or billing accuracy may be affected.
- The team cannot identify the owning service within ten minutes.
- The incident crosses a regulatory line (GDPR breach, payment auth failure at scale).

> [!WARNING]
> Escalation is not a failure signal. Teams that escalate earlier resolve faster, and every escalation path in ServerCompass is logged as a learning input for the next postmortem.

## After resolution

When customer impact is contained and monitoring is green, the commander announces "stand down" and hands off to the postmortem owner. The [postmortem playbook](/docs/playbooks/postmortem) picks up from there — usually within one business day.

> [!NOTE]
> The incident room is archived, not deleted. Historical incident rooms are read-only for two years and used verbatim in our public engineering retrospectives.

## What to read next

- [Severity levels](/docs/start/severity-levels) to classify the incident before posting updates.
- [Status page updates](/docs/playbooks/status-page) for the external communication template.
- [Postmortem playbook](/docs/playbooks/postmortem) for the 72-hour follow-up.
