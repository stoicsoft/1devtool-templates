---
title: "Our Cloudflare Workers bill, one year in"
description: "What it actually costs to run an indie SaaS on the edge — and the three surprises we hit along the way."
date: "2026-03-22"
author: "Dante Okafor"
readTime: "7 min"
tags: ["infra", "cloudflare", "money"]
---

We moved ServerCompass onto Cloudflare Workers in April 2025. Twelve months later we have a stable cost envelope and a few numbers worth writing down. Here they are, with context.

## The bill

- **Workers**: $84 / month (paid plan baseline, plus overages)
- **D1**: $18 / month
- **R2**: $9 / month
- **KV**: $0 (well within free tier)
- **Queues**: $12 / month
- **Total**: ~$123 / month, trailing twelve-month average

That is running a product with about 1,200 paying teams and twelve million requests a month.

## Three surprises

**1. KV read costs dominated until we cached.** The fix was not to move off KV. It was to add a 30-second L1 cache inside the Worker. Reads dropped by 96%.

**2. D1 handles more than we thought.** We deferred migrating our Postgres to D1 for a year. When we finally tested with production-shaped queries, D1 held up under our entire workload. We kept Postgres for the billing seams — the boring decision, and the right one.

**3. The cost of a cold start is a myth at our scale.** We instrumented cold-start latency for ninety days. It averaged 1.8 ms. The 99th percentile, 14 ms. Below the noise floor for anything we care about.

## What it replaced

Before the migration we were running a single t3.large on AWS with RDS, behind a managed load balancer. That setup was ~$340 / month, plus one engineer&rsquo;s Wednesday evening most weeks.

The Workers setup is $123 and no Wednesday evenings. The difference is not the line item. It is that nobody is on call for the bill any more.
