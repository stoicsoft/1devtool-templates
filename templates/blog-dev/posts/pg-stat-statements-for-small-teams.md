---
title: "A practical guide to pg_stat_statements for small teams"
description: "Ninety percent of what a small team needs from Postgres observability can be learned from one extension and five queries."
date: "2026-03-29"
author: "Clara Figueira"
readTime: "12 min"
tags: ["postgres", "database", "ops"]
---

If you are running a Postgres database and you have not turned on `pg_stat_statements`, stop reading this and go turn it on. The rest of the post will wait for you.

## The one-line setup

```sql
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
```

Add `pg_stat_statements` to `shared_preload_libraries`, restart the cluster, and you have a running record of every normalised query the database has executed. The extension itself costs about a percent of CPU. Worth it.

## The five queries

The first is the one you will run the most:

```sql
SELECT query, calls, total_exec_time, mean_exec_time
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 20;
```

This tells you, in descending order, which queries are spending your database&rsquo;s life. The second is the same thing but for mean time — often the more interesting chart.

```sql
SELECT query, calls, mean_exec_time
FROM pg_stat_statements
WHERE calls > 100
ORDER BY mean_exec_time DESC
LIMIT 20;
```

## Reading the results

Two patterns show up repeatedly in small teams:

- **One outlier query.** Usually a missing index, or a join that has quietly grown. Easy to fix once you see it.
- **A swarm of tiny queries.** Usually an N+1 from an ORM. Harder to fix, but obvious once you name it.

## What we do, on a schedule

Every Monday morning, a small script dumps the top twenty queries by `total_exec_time` into a Slack channel. The team glances at it. Most weeks we don&rsquo;t act on it. The weeks we do, we know we&rsquo;re not guessing.

The habit is worth more than any dashboard we&rsquo;ve tried.
