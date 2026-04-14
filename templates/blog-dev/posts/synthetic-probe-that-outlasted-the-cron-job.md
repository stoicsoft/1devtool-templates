---
title: "Writing a synthetic probe that outlasted the cron job"
description: "How we replaced 114 cron-scheduled curl checks with a single 220-line Go service — and what we learned about liveness, jitter, and boring reliability."
date: "2026-04-11"
author: "Dante Okafor"
readTime: "14 min"
tags: ["server-compass", "go", "ops"]
---

A year into running ServerCompass we had one hundred and fourteen cron jobs watching our production endpoints. Each job was a single `curl` in a wrapper script, piped into a line of log output and, on failure, a Slack webhook. It worked. It also drifted.

## Why it drifted

Three things went wrong, in quiet succession:

1. **Cron is not aware of itself.** The `/15 * * * *` schedule is advisory. If the box is under load, the job skips. Nobody notices.
2. **Failures are not correlated.** When three endpoints fail at once, you get three Slack pings. You don&rsquo;t get a reason.
3. **Scripts accumulate opinions.** Eighteen months of edits leave you with fourteen subtly different retry strategies across fourteen probes.

The fix wasn&rsquo;t a better cron configuration. It was a small service.

## The probe, in one file

Most of the complexity lives in understanding what &ldquo;success&rdquo; means. Here is the heart of it:

```go
// Probe performs a single liveness check with backoff and jitter.
// A successful result is recorded with latency; an error is wrapped.
func Probe(ctx context.Context, t Target) (Result, error) {
    attempt := 0
    for {
        start := time.Now()
        resp, err := t.client.Do(ctx, t.Request)
        if err == nil && resp.StatusCode < 500 {
            return Result{Latency: time.Since(start)}, nil
        }
        attempt++
        if attempt >= t.MaxAttempts {
            return Result{}, fmt.Errorf("probe: %w", err)
        }
        time.Sleep(backoff(attempt))
    }
}
```

The `backoff` function is a pure function of `attempt` that produces a jittered delay. Two hundred and twenty lines later, we have a service.

## What we learned

- **Keep probes boring.** The goal is not cleverness; it is predictability. A boring probe is one you can read in a year and still trust.
- **Correlate by intent.** Group probes by the user outcome they protect, not by the URL. A &ldquo;user can sign in&rdquo; correlation is worth more than four green pings.
- **Record latency, not just liveness.** &ldquo;Slow&rdquo; is a failure mode with different signatures. It deserves its own paging policy.

The probe has been running for eight months. We have deleted all 114 cron jobs. The number of false pages is down 94%, which is approximately the same as saying we sleep again.
