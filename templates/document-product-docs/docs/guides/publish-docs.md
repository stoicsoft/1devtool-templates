---
title: Publish docs
description: Prepare a markdown documentation site for production with redirects, analytics, and ownership notes.
section: Guides
sectionOrder: 2
order: 2
---

Good docs need the same launch discipline as the product. Decide where the docs live, who owns them, and how stale pages get fixed.

## Production checklist

- Replace every demo value in `lib/site.js`.
- Confirm every sidebar group has at least two pages or a clear reason to stand alone.
- Add redirects for old docs paths.
- Check mobile navigation on a real phone.
- Add a support link or issue template for feedback.

## Custom domain

For a docs subdomain, point `docs.example.com` at your hosting provider. If the docs live behind ServerCompass, add a domain record there first so TLS and health checks are visible to the operations team.

## Analytics

Track search misses, page exits, and copy events. Those signals are more useful than raw page views because they show where readers get stuck.

## Ownership

Add a short owner note to high-risk pages. The note can live in markdown and does not need to be fancy:

```md
> Maintained by Platform. Review after every billing or onboarding release.
```
