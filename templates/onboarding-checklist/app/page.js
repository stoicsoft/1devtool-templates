"use client"

import { useMemo, useState } from "react"

function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    check: <path d="m5 13 4 4L19 7" />,
    plug: <path d="M9 2v6M15 2v6M7 8h10v4a5 5 0 0 1-10 0V8ZM12 17v5" />,
    team: (
      <>
        <circle cx="9" cy="8" r="3.4" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 5.2a3.4 3.4 0 0 1 0 6.6M18 14.4a6.5 6.5 0 0 1 3.5 5.6" />
      </>
    ),
    bell: <path d="M18 9a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7M10.3 21a2 2 0 0 0 3.4 0" />,
    key: (
      <>
        <circle cx="7.5" cy="15.5" r="3.5" />
        <path d="m10 13 8-8 3 3-2 2-2-2-2 2 2 2-3 3" />
      </>
    ),
    chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    play: <path d="m7 4 12 8-12 8Z" />,
    book: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />,
    chevronRight: <path d="m9 6 6 6-6 6" />,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />,
    x: <path d="M18 6 6 18M6 6l12 12" />,
    copy: (
      <>
        <rect x="9" y="9" width="12" height="12" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

const TASKS = [
  {
    id: "source",
    title: "Connect your first data source",
    time: "2 min",
    icon: "plug",
    tone: "#c96442",
    required: true,
    body: "Point Thicket at somewhere events already land — a Postgres replica, an S3 bucket of Parquet, or the HTTP ingest endpoint. Read-only credentials are enough.",
    detail: "code",
    code: `curl -X POST https://api.thicket.dev/v1/ingest \\
  -H "authorization: Bearer $THICKET_KEY" \\
  -d '{"event":"checkout_completed","value":42.10}'`,
  },
  {
    id: "keys",
    title: "Create a production API key",
    time: "1 min",
    icon: "key",
    tone: "#629987",
    required: true,
    body: "Scope it to ingest-only and store it in your secret manager. You can rotate it later without downtime — old and new keys overlap for 24 hours.",
  },
  {
    id: "dashboard",
    title: "Build your first dashboard",
    time: "5 min",
    icon: "chart",
    tone: "#827dbd",
    required: true,
    body: "Start from a template — conversion funnel, revenue by cohort, or service health — and swap in your own fields. Nothing here is locked; every template is just a saved query.",
    detail: "templates",
  },
  {
    id: "team",
    title: "Invite your team",
    time: "1 min",
    icon: "team",
    tone: "#98801f",
    body: "Dashboards are considerably less useful alone. Members can view and build; only admins can change billing.",
    detail: "invite",
  },
  {
    id: "alerts",
    title: "Set up an alert",
    time: "3 min",
    icon: "bell",
    tone: "#c5621b",
    body: "Pick a metric, a threshold, and a channel. Alerts fire once and then stay quiet until the condition clears, so nobody learns to ignore them.",
  },
  {
    id: "tour",
    title: "Take the 4-minute tour",
    time: "4 min",
    icon: "play",
    tone: "#cbcadb",
    body: "A quick walk through query building, saved views, and the parts of the product that are not obvious from the sidebar.",
  },
]

const TEMPLATES = [
  ["Conversion funnel", "Signup → activation → paid, with drop-off at each step"],
  ["Revenue by cohort", "Monthly cohorts, retention curve, expansion revenue"],
  ["Service health", "Throughput, latency percentiles, and error rate"],
]

const RESOURCES = [
  ["Quickstart guide", "Ten minutes end to end", "book"],
  ["Query language reference", "Every function, with examples", "book"],
  ["Sample datasets", "Play with real shapes before you wire yours", "chart"],
]

export default function Onboarding() {
  const [done, setDone] = useState({ source: true, keys: true })
  const [open, setOpen] = useState("dashboard")
  const [copied, setCopied] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  const required = TASKS.filter((t) => t.required)
  const completed = TASKS.filter((t) => done[t.id]).length
  const pct = Math.round((completed / TASKS.length) * 100)
  const requiredLeft = required.filter((t) => !done[t.id]).length

  const nextUp = useMemo(() => TASKS.find((t) => !done[t.id]), [done])

  function toggle(id) {
    setDone((d) => ({ ...d, [id]: !d[id] }))
  }

  return (
    <div className="min-h-screen bg-[var(--color-page)] text-[var(--color-ink)]">
      <header className="border-b border-[var(--color-line)]">
        <div className="mx-auto flex h-[56px] max-w-[900px] items-center gap-3 px-5">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
            <rect width="32" height="32" rx="8" fill="#141413" />
            <path d="M16 7c-3 4-6 5.5-6 9a6 6 0 0 0 12 0c0-3.5-3-5-6-9Z" fill="#c96442" />
          </svg>
          <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Thicket</span>
          <span className="ml-auto flex items-center gap-3">
            <span className="hidden text-[12.5px] text-[var(--color-faint)] sm:inline">Trial · 13 days left</span>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#629987] text-[11px] font-medium text-white">
              RK
            </span>
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-[900px] px-5 py-9">
        {/* progress header */}
        <div className="mb-7">
          <span className="text-[11.5px] font-medium tracking-wide text-[var(--color-faint)]">GETTING STARTED</span>
          <h1 className="mt-2 font-serif text-[32px] font-medium tracking-[-0.016em]">
            {pct === 100 ? "You're set up" : "Let's get you to your first insight"}
          </h1>
          <p className="mt-2 max-w-[60ch] text-[14.5px] leading-[1.7] text-[var(--color-muted)]">
            {pct === 100
              ? "Everything essential is done. This checklist will disappear from your sidebar tomorrow."
              : `Three of these are required before data flows. The rest take about ten minutes total and you can do them whenever.`}
          </p>

          <div className="mt-5 flex items-center gap-4">
            <div className="h-[8px] min-w-0 flex-1 overflow-hidden rounded-full bg-[var(--color-sunk)]">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${pct}%`, background: pct === 100 ? "#1e9f3c" : "var(--color-clay)" }}
              />
            </div>
            <span className="shrink-0 font-mono text-[12.5px] text-[var(--color-muted)]">
              {completed} / {TASKS.length}
            </span>
          </div>
          {requiredLeft > 0 && (
            <p className="mt-2 text-[12px] text-[var(--color-faint)]">
              {requiredLeft} required step{requiredLeft === 1 ? "" : "s"} remaining
            </p>
          )}
        </div>

        {/* next-up nudge */}
        {nextUp && !dismissed && (
          <div className="mb-5 flex flex-wrap items-center gap-3 rounded-xl border border-[var(--color-line)] bg-[var(--color-ivory)] px-4 py-3.5">
            <Icon name="spark" className="h-[18px] w-[18px] shrink-0 text-[var(--color-clay)]" />
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-medium">Up next: {nextUp.title}</p>
              <p className="text-[12px] text-[var(--color-muted)]">About {nextUp.time}.</p>
            </div>
            <button
              onClick={() => setOpen(nextUp.id)}
              className="h-8 shrink-0 rounded-lg bg-[var(--color-clay)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]"
            >
              Start
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-[var(--color-faint)] hover:bg-white"
            >
              <Icon name="x" className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* checklist */}
        <div className="space-y-2.5">
          {TASKS.map((t) => {
            const isDone = !!done[t.id]
            const isOpen = open === t.id
            return (
              <div
                key={t.id}
                className={`overflow-hidden rounded-xl border bg-white transition-colors ${
                  isOpen ? "border-[var(--color-ink)]" : "border-[var(--color-line)]"
                }`}
              >
                <div className="flex items-center gap-3 px-4 py-3.5">
                  <button
                    onClick={() => toggle(t.id)}
                    className={`grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full border-2 transition-colors ${
                      isDone
                        ? "border-[var(--color-mineral)] bg-[var(--color-mineral)] text-white"
                        : "border-[var(--color-line)] text-transparent hover:border-[var(--color-clay)]"
                    }`}
                    aria-label={`Mark ${t.title} ${isDone ? "incomplete" : "complete"}`}
                  >
                    <Icon name="check" className="h-3 w-3" />
                  </button>

                  <button onClick={() => setOpen(isOpen ? null : t.id)} className="flex min-w-0 flex-1 items-center gap-3 text-left">
                    <span
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-lg"
                      style={{ background: `${t.tone}1c`, color: t.tone }}
                    >
                      <Icon name={t.icon} className="h-[17px] w-[17px]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <span
                          className={`text-[14px] font-medium ${
                            isDone ? "text-[var(--color-faint)] line-through" : ""
                          }`}
                        >
                          {t.title}
                        </span>
                        {t.required && !isDone && (
                          <span className="rounded-full bg-[var(--color-clay-soft)] px-1.5 py-[1px] text-[10px] font-medium text-[var(--color-clay-2)]">
                            required
                          </span>
                        )}
                      </span>
                      <span className="text-[11.5px] text-[var(--color-faint)]">{t.time}</span>
                    </span>
                    <Icon
                      name="chevronDown"
                      className={`h-4 w-4 shrink-0 text-[var(--color-faint)] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {isOpen && (
                  <div className="border-t border-[var(--color-line-2)] bg-[var(--color-ivory-2)] px-4 py-4">
                    <p className="max-w-[70ch] text-[13.5px] leading-[1.7] text-[var(--color-ink-2)]">{t.body}</p>

                    {t.detail === "code" && (
                      <div className="mt-3.5 overflow-hidden rounded-lg border border-[var(--color-line)] bg-white">
                        <div className="flex items-center justify-between border-b border-[var(--color-line-2)] px-3 py-1.5">
                          <span className="font-mono text-[11px] text-[var(--color-faint)]">shell</span>
                          <button
                            onClick={() => {
                              setCopied(true)
                              setTimeout(() => setCopied(false), 1400)
                            }}
                            className="inline-flex items-center gap-1 text-[11px] text-[var(--color-faint)] hover:text-[var(--color-ink)]"
                          >
                            <Icon name={copied ? "check" : "copy"} className="h-3 w-3" />
                            {copied ? "Copied" : "Copy"}
                          </button>
                        </div>
                        <pre className="scroll-thin overflow-x-auto px-3 py-2.5 font-mono text-[11.5px] leading-[1.7] text-[var(--color-ink-2)]">
                          {t.code}
                        </pre>
                      </div>
                    )}

                    {t.detail === "templates" && (
                      <div className="mt-3.5 grid gap-2 sm:grid-cols-3">
                        {TEMPLATES.map(([name, desc]) => (
                          <button
                            key={name}
                            className="rounded-lg border border-[var(--color-line)] bg-white p-3 text-left transition-colors hover:border-[var(--color-ink)]"
                          >
                            <p className="text-[12.5px] font-medium">{name}</p>
                            <p className="mt-1 text-[11px] leading-[1.5] text-[var(--color-muted)]">{desc}</p>
                          </button>
                        ))}
                      </div>
                    )}

                    {t.detail === "invite" && (
                      <div className="mt-3.5 flex flex-wrap gap-2">
                        <input
                          placeholder="name@company.com"
                          className="h-9 min-w-[220px] flex-1 rounded-lg border border-[var(--color-line)] bg-white px-3 text-[13px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
                        />
                        <button className="h-9 rounded-lg bg-[var(--color-ink)] px-4 text-[13px] font-medium text-white hover:bg-black">
                          Send invite
                        </button>
                      </div>
                    )}

                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        onClick={() => {
                          toggle(t.id)
                          setOpen(null)
                        }}
                        className="h-8 rounded-lg bg-[var(--color-clay)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]"
                      >
                        {isDone ? "Mark as not done" : "Mark complete"}
                      </button>
                      <button className="h-8 rounded-lg border border-[var(--color-line)] bg-white px-3 text-[12.5px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)]">
                        Read the docs
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* resources */}
        <section className="mt-9">
          <h2 className="mb-3 text-[12px] font-medium tracking-wide text-[var(--color-faint)]">
            WHILE YOU'RE HERE
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {RESOURCES.map(([title, desc, icon]) => (
              <a
                key={title}
                href="#"
                className="group rounded-xl border border-[var(--color-line)] bg-white p-4 transition-colors hover:border-[var(--color-ink)]"
              >
                <Icon name={icon} className="h-[18px] w-[18px] text-[var(--color-clay)]" />
                <p className="mt-2.5 flex items-center gap-1.5 text-[13.5px] font-medium">
                  {title}
                  <Icon name="chevronRight" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </p>
                <p className="mt-1 text-[12px] leading-[1.55] text-[var(--color-muted)]">{desc}</p>
              </a>
            ))}
          </div>
        </section>

        <p className="mt-9 text-center text-[12.5px] text-[var(--color-faint)]">
          Rather have someone walk you through it?{" "}
          <a href="#" className="text-[var(--color-clay)] underline underline-offset-2">
            Book 20 minutes with an engineer
          </a>
          .
        </p>
      </main>
    </div>
  )
}
