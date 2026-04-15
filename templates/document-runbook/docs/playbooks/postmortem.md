---
title: Postmortem
description: Write useful incident reviews that lead to operational change.
section: Playbooks
sectionOrder: 3
order: 2
---

A postmortem should make the next incident less likely or less expensive. Keep it plain and specific.

## Sections

Use this shape for most incidents:

1. Summary
2. Customer impact
3. Timeline
4. What went well
5. What went poorly
6. Action items

## Timeline

Pull timestamps from ServerCompass, deploy logs, and status page updates. Avoid reconstructing the timeline from chat memory alone.

## Action items

Every action item needs an owner and a due date.

```text
[ ] Add synthetic checkout probe - Owner: Platform - Due: 2026-04-30
```

## Review

Review high-severity postmortems in the next engineering planning meeting. If nobody changes priority afterward, the review was only paperwork.
