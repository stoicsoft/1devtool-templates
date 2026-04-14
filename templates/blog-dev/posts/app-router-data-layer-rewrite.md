---
title: "Why we rewrote our App Router data layer in a weekend"
description: "A tour of the tiny pattern we landed on after six months of fetching things the hard way."
date: "2026-04-06"
author: "Mei Wong"
readTime: "9 min"
tags: ["next.js", "typescript", "architecture"]
---

We had a rule for the first six months of our Next.js app: no fetching inside components. All data loaded in `page.tsx` server components, passed down as props. Clean on paper; tangled in practice.

## Where it broke

Every route owns its data. That&rsquo;s fine until two routes want the same data. Then one of three things happens:

- You import the fetcher across routes and pay the cost twice.
- You build a shared layout that prefetches and stashes it on a context.
- You install a query library and accept its opinions.

We did all three in turn. None of them felt like the right abstraction.

## What we landed on

A `server/` folder with a single convention: every file exports one async function named for the thing it returns.

```ts
// server/getWorkspace.ts
import { cache } from "react"
import { db } from "@/db"

export const getWorkspace = cache(async (id: string) => {
    return db.workspace.findUnique({ where: { id } })
})
```

Three things make this work:

1. **`cache` from React.** Call the function ten times in a request tree; it runs once. Free deduplication.
2. **Named exports, one per file.** The grep pattern is the import path. No barrel files, no indirection.
3. **No class, no hook, no config.** You can delete any file in `server/` without consulting anyone.

## What we don&rsquo;t do

- We don&rsquo;t use a dedicated server state library. `cache` + request deduplication gets us most of it.
- We don&rsquo;t pass Promises down. Every server function resolves before it leaves the data layer.
- We don&rsquo;t invalidate by tag. We revalidate by path on mutation — one `revalidatePath` is easier to reason about than a web of tags.

Six months in, the whole layer is sixteen files. It has been rewritten once; it has been extended twelve times. I still like reading it.
