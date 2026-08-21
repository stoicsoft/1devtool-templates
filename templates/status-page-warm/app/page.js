"use client"

import { useState } from "react"

function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    check: <path d="m5 13 4 4L19 7" />,
    warn: <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01" />,
    x: <path d="M18 6 6 18M6 6l12 12" />,
    wrench: <path d="M14.7 6.3a4 4 0 0 1 5 5l-9.2 9.2a2.1 2.1 0 0 1-3-3l9.2-9.2a4 4 0 0 1-2-2ZM6.3 6.3l3.4 3.4" />,
    bell: <path d="M18 9a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7M10.3 21a2 2 0 0 0 3.4 0" />,
    rss: (
      <>
        <path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" />
        <circle cx="5" cy="19" r="1.4" fill="currentColor" />
      </>
    ),
    chevronDown: <path d="m6 9 6 6 6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

const STATE = {
  operational: { label: "Operational", tone: "#1e9f3c", bg: "#e9f5ed", fg: "#177c31" },
  degraded: { label: "Degraded", tone: "#c5621b", bg: "#fbeee3", fg: "#8f4413" },
  partial: { label: "Partial outage", tone: "#cf2055", bg: "#fceaef", fg: "#a81a44" },
  maintenance: { label: "Maintenance", tone: "#827dbd", bg: "#eceaf5", fg: "#5d58a0" },
}

// 90 days of uptime, deterministic
function history(seed, incidents = []) {
  return Array.from({ length: 90 }, (_, i) => {
    const hit = incidents.find((x) => x[0] === i)
    if (hit) return hit[1]
    const n = Math.sin(seed * 13.7 + i * 2.3)
    return n > 0.997 ? "degraded" : "operational"
  })
}

const COMPONENTS = [
  { name: "API", desc: "REST and streaming endpoints", state: "operational", uptime: 99.98, days: history(1, [[62, "degraded"], [63, "partial"]]) },
  { name: "Dashboard", desc: "Web application", state: "operational", uptime: 99.99, days: history(2, [[62, "degraded"]]) },
  { name: "Ingest pipeline", desc: "Event collection and processing", state: "degraded", uptime: 99.82, days: history(3, [[88, "degraded"], [89, "degraded"], [62, "partial"], [41, "degraded"]]) },
  { name: "Exports", desc: "Scheduled and on-demand exports", state: "operational", uptime: 99.94, days: history(4, [[30, "degraded"], [62, "degraded"]]) },
  { name: "Webhooks", desc: "Outbound delivery and retries", state: "operational", uptime: 99.91, days: history(5, [[12, "degraded"], [62, "partial"]]) },
  { name: "Authentication", desc: "SSO, sessions, and API keys", state: "operational", uptime: 100, days: history(6) },
]

const ACTIVE = {
  title: "Elevated ingest lag in eu-west-1",
  state: "degraded",
  started: "Today at 13:42 UTC",
  components: ["Ingest pipeline"],
  updates: [
    ["14:31", "Monitoring", "Lag is down to 12 seconds and falling. We are watching for another 30 minutes before closing this."],
    ["14:08", "Identified", "A partition rebalance after the v4.2 deploy left two consumers idle. Rebalance forced manually; backlog draining."],
    ["13:49", "Investigating", "We are seeing ingest lag above 90 seconds in eu-west-1. Events are queued, not dropped."],
  ],
}

const PAST = [
  {
    date: "12 April 2026",
    title: "Checkout latency regression after v4.2.0",
    state: "partial",
    duration: "62 minutes",
    components: ["API", "Dashboard", "Webhooks"],
    summary:
      "A refactor turned one batched pricing call into one call per cart item. p99 rose from 240ms to 1.4s. Resolved by rollback. Full postmortem published.",
  },
  {
    date: "28 March 2026",
    title: "Export truncation above 10,000 rows",
    state: "degraded",
    duration: "4 days",
    components: ["Exports"],
    summary:
      "Synchronous exports silently truncated instead of paginating. No data loss. Cursor pagination documented as the supported path; a 413 response ships this month.",
  },
  {
    date: "9 March 2026",
    title: "Scheduled database maintenance",
    state: "maintenance",
    duration: "35 minutes",
    components: ["API", "Dashboard"],
    summary: "Planned major-version upgrade of the primary cluster. Completed 11 minutes ahead of the announced window.",
  },
  {
    date: "17 February 2026",
    title: "Webhook retry storm",
    state: "degraded",
    duration: "2 hours 14 minutes",
    components: ["Webhooks"],
    summary:
      "A downstream 500 loop caused retries to compound. Backoff was linear rather than exponential; corrected and load-tested.",
  },
]

export default function StatusPage() {
  const [open, setOpen] = useState(null)
  const [subscribed, setSubscribed] = useState(false)

  const allOk = COMPONENTS.every((c) => c.state === "operational")
  const overall = allOk ? "operational" : "degraded"
  const o = STATE[overall]

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <header className="border-b border-[var(--color-line)]">
        <div className="mx-auto flex h-[66px] max-w-[860px] items-center gap-4 px-6">
          <a href="#" className="flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
              <rect width="32" height="32" rx="9" fill="#141413" />
              <path d="M7 16h4l3-6 4 12 3-6h4" fill="none" stroke="#c96442" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-serif text-[19px] font-medium tracking-[-0.012em]">Ridgeline</span>
          </a>
          <nav className="ml-auto hidden items-center gap-5 sm:flex">
            {["Docs", "Support", "Blog"].map((n) => (
              <a key={n} href="#" className="text-[13.5px] text-[var(--color-muted)] hover:text-[var(--color-ink)]">
                {n}
              </a>
            ))}
          </nav>
          <a href="#" className="rounded-full border border-[var(--color-line)] bg-white px-3.5 py-1.5 text-[13px] font-medium hover:border-[var(--color-ink)]">
            Sign in
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-[860px] px-6 py-12">
        {/* overall */}
        <div
          className="flex flex-wrap items-center gap-4 rounded-2xl border px-6 py-5"
          style={{ borderColor: `${o.tone}44`, background: o.bg }}
        >
          <span
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-white"
            style={{ background: o.tone }}
          >
            <Icon name={allOk ? "check" : "warn"} className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <h1 className="font-serif text-[26px] font-medium tracking-[-0.014em]" style={{ color: o.fg }}>
              {allOk ? "All systems operational" : "Partially degraded service"}
            </h1>
            <p className="mt-0.5 text-[13.5px]" style={{ color: o.fg, opacity: 0.8 }}>
              Updated 2 minutes ago · next check in 60 seconds
            </p>
          </div>
          <span className="pulse-dot h-[10px] w-[10px] shrink-0 rounded-full" style={{ background: o.tone }} />
        </div>

        {/* active incident */}
        <section className="mt-6 overflow-hidden rounded-2xl border border-[#f0e0cf] bg-white">
          <div className="flex flex-wrap items-center gap-2.5 border-b border-[#f0e0cf] bg-[#fdf7f1] px-5 py-3.5">
            <span className="rounded-full bg-[#fbeee3] px-2.5 py-[3px] text-[11px] font-medium text-[#8f4413]">
              Active incident
            </span>
            <span className="text-[13.5px] font-medium text-[#8f4413]">{ACTIVE.title}</span>
            <span className="ml-auto text-[12px] text-[#a05a2a]">since {ACTIVE.started}</span>
          </div>
          <div className="px-5 py-4">
            <p className="mb-3 text-[12.5px] text-[var(--color-faint)]">
              Affected: {ACTIVE.components.join(", ")}
            </p>
            <div className="relative pl-5">
              <span className="absolute left-[4px] top-2 bottom-2 w-px bg-[var(--color-line)]" />
              {ACTIVE.updates.map(([time, phase, text], i) => (
                <div key={time} className="relative mb-4 last:mb-0">
                  <span
                    className="absolute -left-5 top-[6px] h-[9px] w-[9px] rounded-full border-2 border-white"
                    style={{ background: i === 0 ? "#c5621b" : "#dedcd1" }}
                  />
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-[13px] font-medium">{phase}</span>
                    <span className="font-mono text-[11px] text-[var(--color-faint)]">{time} UTC</span>
                  </div>
                  <p className="mt-1 text-[13.5px] leading-[1.68] text-[var(--color-muted)]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* components */}
        <section className="mt-8">
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="font-serif text-[20px] font-medium tracking-[-0.012em]">Components</h2>
            <span className="text-[12px] text-[var(--color-faint)]">Last 90 days</span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white">
            {COMPONENTS.map((c, i) => {
              const st = STATE[c.state]
              return (
                <div key={c.name} className={`px-5 py-4 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="h-[8px] w-[8px] shrink-0 rounded-full" style={{ background: st.tone }} />
                    <span className="text-[14px] font-medium">{c.name}</span>
                    <span className="hidden text-[12.5px] text-[var(--color-faint)] sm:inline">— {c.desc}</span>
                    <span className="ml-auto flex items-center gap-3">
                      <span className="font-mono text-[12px] text-[var(--color-muted)]">
                        {c.uptime.toFixed(2)}%
                      </span>
                      <span className="rounded-full px-2 py-[3px] text-[10.5px] font-medium" style={{ background: st.bg, color: st.fg }}>
                        {st.label}
                      </span>
                    </span>
                  </div>

                  <div className="mt-2.5 flex gap-[2px]">
                    {c.days.map((d, j) => (
                      <span
                        key={j}
                        title={`Day ${90 - j}: ${STATE[d].label}`}
                        className="h-[26px] flex-1 rounded-[2px] transition-opacity hover:opacity-60"
                        style={{ background: STATE[d].tone, opacity: d === "operational" ? 0.85 : 1 }}
                      />
                    ))}
                  </div>
                  <div className="mt-1.5 flex justify-between font-mono text-[10px] text-[var(--color-faint)]">
                    <span>90 days ago</span>
                    <span>today</span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* subscribe */}
        <section className="mt-8 rounded-2xl border border-[var(--color-line)] bg-[var(--color-ivory-2)] p-6">
          <h2 className="font-serif text-[20px] font-medium tracking-[-0.012em]">Get told before you notice</h2>
          <p className="mt-1.5 max-w-[54ch] text-[13.5px] leading-[1.68] text-[var(--color-muted)]">
            One email per incident, one when it resolves, and nothing else. We do not send marketing from this list.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSubscribed(true)
            }}
            className="mt-4 flex max-w-[420px] gap-2"
          >
            {subscribed ? (
              <p className="inline-flex items-center gap-2 rounded-full bg-[#e9f5ed] px-4 py-2.5 text-[13.5px] font-medium text-[#177c31]">
                <Icon name="check" className="h-4 w-4" /> Subscribed — check your inbox to confirm
              </p>
            ) : (
              <>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="h-10 min-w-0 flex-1 rounded-full border border-[var(--color-line)] bg-white px-4 text-[14px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
                />
                <button className="shrink-0 rounded-full bg-[var(--color-ink)] px-5 text-[14px] font-medium text-white hover:bg-black">
                  Subscribe
                </button>
              </>
            )}
          </form>
          <div className="mt-3 flex flex-wrap gap-4 text-[12.5px] text-[var(--color-faint)]">
            {[
              ["RSS", "rss"],
              ["Slack", "bell"],
              ["Webhook", "bell"],
            ].map(([l, icon]) => (
              <a key={l} href="#" className="inline-flex items-center gap-1.5 hover:text-[var(--color-ink)]">
                <Icon name={icon} className="h-3.5 w-3.5" />
                {l}
              </a>
            ))}
          </div>
        </section>

        {/* history */}
        <section className="mt-8">
          <h2 className="mb-3 font-serif text-[20px] font-medium tracking-[-0.012em]">Past incidents</h2>
          <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {PAST.map((p) => {
              const st = STATE[p.state]
              const isOpen = open === p.title
              return (
                <div key={p.title}>
                  <button
                    onClick={() => setOpen(isOpen ? null : p.title)}
                    className="flex w-full flex-wrap items-center gap-3 py-4 text-left"
                  >
                    <span className="h-[8px] w-[8px] shrink-0 rounded-full" style={{ background: st.tone }} />
                    <span className="min-w-0 flex-1">
                      <span className="block text-[14.5px] font-medium">{p.title}</span>
                      <span className="mt-0.5 block text-[12px] text-[var(--color-faint)]">
                        {p.date} · {p.duration} · {p.components.join(", ")}
                      </span>
                    </span>
                    <span className="shrink-0 rounded-full px-2 py-[3px] text-[10.5px] font-medium" style={{ background: st.bg, color: st.fg }}>
                      {st.label}
                    </span>
                    <Icon
                      name="chevronDown"
                      className={`h-4 w-4 shrink-0 text-[var(--color-faint)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <p className="-mt-1 max-w-[70ch] pb-5 text-[14px] leading-[1.72] text-[var(--color-muted)]">
                      {p.summary}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
          <button className="mt-5 rounded-full border border-[var(--color-line)] bg-white px-5 py-2 text-[13.5px] font-medium hover:border-[var(--color-ink)]">
            Show older incidents
          </button>
        </section>

        {/* uptime summary */}
        <section className="mt-8 grid gap-3 sm:grid-cols-4">
          {[
            ["99.94%", "90-day uptime"],
            ["4", "incidents"],
            ["47m", "median time to resolve"],
            ["1", "postmortem published"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3.5">
              <p className="font-serif text-[24px] font-medium tracking-[-0.016em]">{n}</p>
              <p className="mt-0.5 text-[12px] text-[var(--color-muted)]">{l}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex max-w-[860px] flex-wrap items-center justify-between gap-3 px-6 py-8 text-[12.5px] text-[var(--color-faint)]">
          <span>© 2026 Ridgeline · All times UTC</span>
          <span className="flex gap-5">
            {["Status API", "Postmortems", "SLA", "Contact"].map((l) => (
              <a key={l} href="#" className="hover:text-[var(--color-ink)]">
                {l}
              </a>
            ))}
          </span>
        </div>
      </footer>
    </div>
  )
}
