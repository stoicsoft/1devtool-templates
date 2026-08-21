"use client"

import { useEffect, useState } from "react"

const TOC = [
  ["summary", "Summary"],
  ["impact", "Impact"],
  ["timeline", "Timeline"],
  ["cause", "Contributing factors"],
  ["went-well", "What went well"],
  ["actions", "Action items"],
  ["lessons", "Lessons"],
]

const TIMELINE = [
  ["13:42", "deploy", "v4.2.0 ships to production", "Rollout completes across all three regions in 4 minutes. No alerts fire.", "#87867f"],
  ["13:58", "signal", "First customer report", "Vertex Labs opens a ticket: checkout is timing out. Support tags it as isolated.", "#98801f"],
  ["14:06", "alert", "p99 latency alert fires", "Threshold is 300ms; observed 1.42s. Paged the platform on-call.", "#c5621b"],
  ["14:09", "response", "Incident declared, severity 2", "Bridge opened. Three engineers join within 90 seconds.", "#827dbd"],
  ["14:17", "investigation", "Wrong hypothesis: database", "Connection pool saturation looked causal. Eight minutes spent scaling the pool, which did not help.", "#cf2055"],
  ["14:31", "investigation", "Trace review finds the real cause", "A single trace shows fourteen sequential calls to GET /prices inside a loop.", "#629987"],
  ["14:38", "mitigation", "Rollback initiated", "Decision to roll back rather than fix forward. Rollback completes in 6 minutes.", "#629987"],
  ["14:44", "resolved", "p99 returns to baseline", "244ms. Error rate back under 0.05%.", "#1e9f3c"],
  ["15:20", "monitoring", "Incident closed", "36 minutes of monitoring with no recurrence.", "#87867f"],
]

const FACTORS = [
  {
    kind: "Technical",
    tone: "#c96442",
    title: "A refactor turned a batch call into a loop",
    body: "The pricing client gained a cleaner per-item API. The checkout path was migrated to it mechanically, converting one batched request into one request per line item. Carts average nine items; the p99 cart has fourteen.",
  },
  {
    kind: "Process",
    tone: "#827dbd",
    title: "Load testing used a three-item cart",
    body: "Our synthetic checkout has used the same fixture since 2023. At three items the regression is 180ms — inside noise. The fixture does not reflect the cart-size distribution we actually serve.",
  },
  {
    kind: "Observability",
    tone: "#98801f",
    title: "No alert on outbound call count per request",
    body: "We alert on latency and error rate, both of which are lagging indicators. Fan-out per request would have fired at deploy time, sixteen minutes earlier.",
  },
  {
    kind: "Human",
    tone: "#c5621b",
    title: "Anchoring on the first plausible cause",
    body: "Pool saturation was real but downstream. Eight minutes went into it because it was the first graph anyone opened. Nobody asked what changed at 13:42 until minute twenty-two.",
  },
]

const WENT_WELL = [
  "Rollback took six minutes and worked exactly as rehearsed in the last game day.",
  "The decision to roll back rather than fix forward was made in under a minute, with no debate.",
  "Support had a holding statement out to affected customers before the bridge was ten minutes old.",
  "No data was lost. Every timed-out checkout was recoverable from the idempotency log.",
]

const ACTIONS = [
  ["Alert on outbound calls per request", "Platform", "P0", "Apr 18", "done"],
  ["Rebuild load fixtures from production cart-size distribution", "Platform", "P0", "Apr 25", "in progress"],
  ["Add a lint rule for await inside loops over network clients", "Developer platform", "P1", "May 2", "in progress"],
  ["Restore batched pricing behind a flag, ramp to 100%", "Platform", "P0", "Apr 30", "in progress"],
  ["Add \"what changed in the last hour\" to the incident runbook", "SRE", "P1", "Apr 22", "done"],
  ["Publish cart-size percentiles on the platform dashboard", "Data", "P2", "May 16", "not started"],
]

const statusStyle = {
  done: ["bg-[#e6f4ea]", "text-[#177c31]"],
  "in progress": ["bg-[#fbeee3]", "text-[#8f4413]"],
  "not started": ["bg-[#f0efec]", "text-[#5e5d59]"],
}

const IMPACT = [
  ["62 min", "customer-visible degradation"],
  ["8,412", "failed checkouts"],
  ["$41,200", "delayed revenue, all recovered"],
  ["14", "support tickets"],
  ["0", "records lost"],
  ["Sev 2", "severity, never escalated"],
]

export default function Postmortem() {
  const [active, setActive] = useState("summary")

  useEffect(() => {
    const onScroll = () => {
      let current = TOC[0][0]
      for (const [id] of TOC) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < 150) current = id
      }
      setActive(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[rgba(240,238,230,0.9)] backdrop-blur-md">
        <div className="mx-auto flex h-[58px] max-w-[1080px] items-center gap-3 px-6">
          <a href="#" className="flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
              <rect width="32" height="32" rx="9" fill="#141413" />
              <path d="M16 8v9M16 21v.5" stroke="#c96442" strokeWidth="2.6" strokeLinecap="round" />
              <circle cx="16" cy="16" r="11" fill="none" stroke="#c96442" strokeWidth="1.6" opacity=".4" />
            </svg>
            <span className="font-serif text-[18px] font-medium tracking-[-0.012em]">Incidents</span>
          </a>
          <span className="hidden font-mono text-[12px] text-[var(--color-faint)] sm:inline">INC-2026-041</span>
          <div className="ml-auto flex items-center gap-2">
            <span className="rounded-full bg-[#e6f4ea] px-2.5 py-[3px] text-[11px] font-medium text-[#177c31]">
              resolved
            </span>
            <button className="h-8 rounded-lg border border-[var(--color-line)] bg-white px-3 text-[12.5px] font-medium hover:bg-white">
              Export PDF
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1080px] gap-10 px-6">
        <article className="min-w-0 max-w-[72ch] flex-1 py-12">
          <section id="summary">
            <span className="eyebrow">Postmortem · blameless · published internally</span>
            <h1 className="display mt-4 text-[38px] sm:text-[44px]">
              Checkout latency regression after v4.2.0
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-[var(--color-faint)]">
              <span>14 April 2026</span>
              <span>Severity 2</span>
              <span>62 minutes</span>
              <span className="inline-flex items-center gap-1.5">
                Author
                <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-[#629987] text-[9px] font-medium text-white">
                  RK
                </span>
                Rina Kowalski
              </span>
            </div>

            <p className="mt-7 border-l-2 border-[var(--color-clay)] pl-5 font-serif text-[19px] leading-[1.55] text-[var(--color-ink-3)]">
              A refactor replaced one batched pricing call with one call per cart line item. Checkout p99 rose from
              240ms to 1.42s and 8,412 checkouts timed out over 62 minutes. We rolled back. No data was lost, and all
              delayed revenue was recovered within a day.
            </p>

            <p className="mt-6 text-[15.5px] leading-[1.75] text-[var(--color-ink-3)]">
              The change passed review and passed load testing. It passed load testing because our synthetic cart has
              three items and the real p99 cart has fourteen — at three items the regression is invisible. The most
              useful thing in this document is not the bug; it is that our test fixture stopped resembling production
              some time in 2024 and nobody noticed until customers did.
            </p>
          </section>

          <section id="impact" className="mt-14">
            <h2 className="font-serif text-[27px] font-medium tracking-[-0.014em]">Impact</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {IMPACT.map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3.5">
                  <p className="font-serif text-[24px] font-medium tracking-[-0.016em]">{n}</p>
                  <p className="mt-0.5 text-[12px] leading-[1.45] text-[var(--color-muted)]">{l}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="timeline" className="mt-14">
            <h2 className="font-serif text-[27px] font-medium tracking-[-0.014em]">Timeline</h2>
            <p className="mt-2 text-[14px] text-[var(--color-faint)]">All times UTC on 14 April 2026.</p>

            <div className="relative mt-6 pl-[76px]">
              <span className="absolute left-[64px] top-2 bottom-2 w-px bg-[var(--color-line)]" />
              {TIMELINE.map(([time, kind, title, body, tone], i) => (
                <div key={i} className="relative mb-6 last:mb-0">
                  <span className="absolute -left-[76px] top-[1px] font-mono text-[12px] text-[var(--color-faint)]">
                    {time}
                  </span>
                  <span
                    className="absolute -left-[17px] top-[5px] h-[11px] w-[11px] rounded-full border-2 border-[var(--color-ivory)]"
                    style={{ background: tone }}
                  />
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-[15px] font-medium">{title}</h3>
                    <span
                      className="rounded-full px-1.5 py-[1px] font-mono text-[10px]"
                      style={{ background: `${tone}1c`, color: tone }}
                    >
                      {kind}
                    </span>
                  </div>
                  <p className="mt-1 text-[14px] leading-[1.68] text-[var(--color-muted)]">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="cause" className="mt-14">
            <h2 className="font-serif text-[27px] font-medium tracking-[-0.014em]">Contributing factors</h2>
            <p className="mt-2 max-w-[62ch] text-[15px] leading-[1.72] text-[var(--color-muted)]">
              There is no single root cause. Four things had to be true at once, and only one of them is a bug.
            </p>
            <div className="mt-6 space-y-3">
              {FACTORS.map((f) => (
                <div key={f.title} className="rounded-2xl border border-[var(--color-line)] bg-white p-5">
                  <span
                    className="inline-block rounded-full px-2.5 py-[3px] text-[11px] font-medium"
                    style={{ background: `${f.tone}1c`, color: f.tone }}
                  >
                    {f.kind}
                  </span>
                  <h3 className="mt-2.5 font-serif text-[19px] font-medium tracking-[-0.01em]">{f.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.72] text-[var(--color-muted)]">{f.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white">
              <div className="border-b border-[var(--color-line-2)] bg-[var(--color-ivory-2)] px-4 py-2 font-mono text-[11.5px] text-[var(--color-faint)]">
                src/checkout/reprice.ts — the change
              </div>
              <pre className="scroll-thin overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-[1.8]">
                <span className="text-[#a81a44]">{`- const prices = await pricing.getMany(cart.items.map((i) => i.sku))
- for (const item of cart.items) item.price = prices[item.sku]
`}</span>
                <span className="text-[#177c31]">{`+ for (const item of cart.items) {
+   item.price = await pricing.get(item.sku)   // cleaner, 14× slower
+ }`}</span>
              </pre>
            </div>
          </section>

          <section id="went-well" className="mt-14">
            <h2 className="font-serif text-[27px] font-medium tracking-[-0.014em]">What went well</h2>
            <ul className="mt-4 space-y-2.5">
              {WENT_WELL.map((w) => (
                <li key={w} className="flex gap-3 text-[15px] leading-[1.7]">
                  <svg viewBox="0 0 24 24" className="mt-[5px] h-3.5 w-3.5 shrink-0 text-[var(--color-mineral)]" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink-3)]">{w}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="actions" className="mt-14">
            <h2 className="font-serif text-[27px] font-medium tracking-[-0.014em]">Action items</h2>
            <p className="mt-2 text-[14px] text-[var(--color-faint)]">
              Every item has an owner and a date. Items without both do not go in this table.
            </p>
            <div className="scroll-thin mt-5 overflow-x-auto rounded-2xl border border-[var(--color-line)] bg-white">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-[var(--color-line)] bg-[var(--color-ivory-2)]">
                    {["Action", "Owner", "Priority", "Due", "Status"].map((h) => (
                      <th key={h} className="px-4 py-2.5 text-left text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
                        {h.toUpperCase()}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ACTIONS.map(([action, owner, pri, due, status]) => {
                    const [bg, fg] = statusStyle[status]
                    return (
                      <tr key={action} className="border-b border-[var(--color-line-2)] last:border-0">
                        <td className="px-4 py-3 text-[13.5px] leading-[1.5]">{action}</td>
                        <td className="px-4 py-3 text-[12.5px] text-[var(--color-muted)]">{owner}</td>
                        <td className="px-4 py-3">
                          <span
                            className="font-mono text-[11.5px] font-medium"
                            style={{ color: pri === "P0" ? "#cf2055" : pri === "P1" ? "#c5621b" : "#87867f" }}
                          >
                            {pri}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-mono text-[12px] text-[var(--color-muted)]">{due}</td>
                        <td className="px-4 py-3">
                          <span className={`rounded-full px-2 py-[3px] text-[10.5px] font-medium ${bg} ${fg}`}>
                            {status}
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </section>

          <section id="lessons" className="mt-14">
            <h2 className="font-serif text-[27px] font-medium tracking-[-0.014em]">Lessons</h2>
            <div className="mt-5 space-y-4">
              {[
                ["Fixtures rot silently", "A test fixture is a claim about production that nobody re-checks. Ours was three years stale and gave us false confidence at exactly the moment we needed real confidence."],
                ["Alert on causes, not only symptoms", "Latency told us something was wrong sixteen minutes after it started. Fan-out per request would have told us what was wrong, immediately."],
                ["Ask what changed before asking what is broken", "The first useful question in an incident is almost always \"what shipped in the last hour?\" It took us twenty-two minutes to ask it."],
              ].map(([h, b]) => (
                <div key={h} className="rounded-2xl border-l-2 border-[var(--color-clay)] bg-white py-4 pl-5 pr-4">
                  <p className="font-serif text-[18px] font-medium tracking-[-0.01em]">{h}</p>
                  <p className="mt-1.5 text-[14.5px] leading-[1.72] text-[var(--color-muted)]">{b}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-line)] pt-6 text-[12.5px] text-[var(--color-faint)]">
            <span>Reviewed by Luis Pereira and Dae-Sung Oh · 17 April 2026</span>
            <a href="#" className="font-medium text-[var(--color-clay)] underline underline-offset-2">
              Suggest an edit
            </a>
          </div>
        </article>

        <aside className="hidden w-[176px] shrink-0 py-12 lg:block">
          <div className="sticky top-[80px]">
            <p className="mb-3 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">CONTENTS</p>
            <nav className="space-y-1.5 border-l border-[var(--color-line)]">
              {TOC.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`-ml-px block border-l-2 py-1 pl-3 text-[13px] leading-[1.45] transition-colors ${
                    active === id
                      ? "border-[var(--color-clay)] font-medium text-[var(--color-ink)]"
                      : "border-transparent text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="mt-7 rounded-xl border border-[var(--color-line)] bg-white p-3.5">
              <p className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">RELATED</p>
              <div className="mt-2 space-y-2">
                {[
                  ["INC-2026-038", "Cache stampede"],
                  ["INC-2025-119", "Webhook retry storm"],
                ].map(([id, name]) => (
                  <a key={id} href="#" className="block">
                    <span className="block font-mono text-[10.5px] text-[var(--color-faint)]">{id}</span>
                    <span className="block text-[12px] leading-[1.35] hover:text-[var(--color-clay)]">{name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
