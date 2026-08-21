"use client"

import { useMemo, useState } from "react"

function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    coin: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15 9.5a3 3 0 0 0-3-1.5c-1.7 0-3 .9-3 2s1.3 2 3 2 3 .9 3 2-1.3 2-3 2a3 3 0 0 1-3-1.5M12 6v12" />
      </>
    ),
    trend: <path d="M22 7 13.5 15.5 8.5 10.5 2 17M22 7h-6M22 7v6" />,
    down: <path d="M22 17 13.5 8.5 8.5 13.5 2 7M22 17h-6M22 17v-6" />,
    bulb: <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z" />,
    server: (
      <>
        <rect x="3" y="4" width="18" height="7" rx="1.5" />
        <rect x="3" y="13" width="18" height="7" rx="1.5" />
        <path d="M7 7.5h.01M7 16.5h.01" />
      </>
    ),
    db: (
      <>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </>
    ),
    box: <path d="M21 8 12 3 3 8v8l9 5 9-5V8ZM3 8l9 5 9-5M12 13v8" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
      </>
    ),
    check: <path d="m5 13 4 4L19 7" />,
    chevronRight: <path d="m9 6 6 6-6 6" />,
    warn: <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

const SERVICES = [
  { name: "Compute (EC2 + Fargate)", icon: "server", tone: "#c96442", cost: 18420, delta: 12.4, share: 42 },
  { name: "Managed Postgres", icon: "db", tone: "#629987", cost: 9840, delta: -3.1, share: 22 },
  { name: "Object storage", icon: "box", tone: "#827dbd", cost: 6210, delta: 8.8, share: 14 },
  { name: "Data transfer", icon: "globe", tone: "#98801f", cost: 4980, delta: 31.2, share: 11 },
  { name: "Observability", icon: "trend", tone: "#c5621b", cost: 3140, delta: 2.0, share: 7 },
  { name: "Everything else", icon: "coin", tone: "#cbcadb", cost: 1610, delta: -0.4, share: 4 },
]

const MONTHS = [
  ["Nov", 32100], ["Dec", 33800], ["Jan", 35400], ["Feb", 36900], ["Mar", 41200], ["Apr", 44200],
]

const FORECAST = 48600

const TEAMS = [
  ["platform", 19840, 45, "#c96442"],
  ["data", 11220, 25, "#629987"],
  ["growth", 6640, 15, "#827dbd"],
  ["search", 4180, 9, "#98801f"],
  ["untagged", 2320, 6, "#87867f"],
]

const RECS = [
  {
    title: "42 idle Postgres replicas across staging",
    save: 2840,
    effort: "low",
    body: "Replicas in staging have had zero read traffic for 30 days. Scaling them to zero overnight keeps the schema and drops the bill by two thirds.",
  },
  {
    title: "Data transfer is crossing AZs unnecessarily",
    save: 1960,
    effort: "medium",
    body: "The pricing service and its cache sit in different availability zones. Co-locating them removes 61% of inter-AZ egress.",
  },
  {
    title: "Commit to a 1-year savings plan on baseline compute",
    save: 4120,
    effort: "low",
    body: "Your compute floor has not dropped below 62% of current usage in nine months. A partial-upfront plan on that floor pays back in seven weeks.",
  },
  {
    title: "Lifecycle old export artifacts to cold storage",
    save: 780,
    effort: "low",
    body: "1.8 TB of export files older than 90 days are still in standard storage. Nothing has read them since creation.",
  },
]

const ANOMALIES = [
  ["Data transfer up 31% week over week", "critical", "Started 14 April, coincides with the v4.2 deploy"],
  ["Object storage growth outpacing revenue", "warning", "Storage +8.8%, revenue +2.1% this month"],
]

export default function CostExplorer() {
  const [range, setRange] = useState("6m")
  const [group, setGroup] = useState("service")
  const [applied, setApplied] = useState({})

  const total = SERVICES.reduce((a, s) => a + s.cost, 0)
  const savings = useMemo(
    () => RECS.filter((r) => applied[r.title]).reduce((a, r) => a + r.save, 0),
    [applied]
  )
  const potential = RECS.reduce((a, r) => a + r.save, 0)
  const max = Math.max(...MONTHS.map((m) => m[1]), FORECAST)

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <header className="flex h-[56px] shrink-0 items-center gap-5 border-b border-[var(--color-line)] px-5">
        <div className="flex shrink-0 items-center gap-2">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
            <rect width="32" height="32" rx="8" fill="#141413" />
            <path d="M8 22V13M14 22V9M20 22v-6M24 22H6" fill="none" stroke="#c96442" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Tally</span>
        </div>
        <nav className="flex items-center gap-0.5">
          {["Explorer", "Budgets", "Recommendations", "Reports"].map((n, i) => (
            <button
              key={n}
              className={`rounded-lg px-2.5 py-1.5 text-[13px] transition-colors ${
                i === 0 ? "bg-[var(--color-hover)] font-medium" : "text-[var(--color-muted)] hover:bg-[var(--color-sunk)]"
              }`}
            >
              {n}
            </button>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center gap-[2px] rounded-lg border border-[var(--color-line)] bg-white p-[2px]">
            {["1m", "3m", "6m", "12m"].map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`rounded-md px-2.5 py-1 text-[12px] font-medium ${
                  range === r ? "bg-[var(--color-ivory)] text-[var(--color-ink)]" : "text-[var(--color-faint)]"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          <button className="h-8 rounded-lg border border-[var(--color-line)] bg-white px-3 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
            Export
          </button>
        </div>
      </header>

      <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
        <div className="mx-auto max-w-[1100px]">
          {/* kpis */}
          <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Month to date", `$${total.toLocaleString()}`, "+7.3% vs March", "#c5621b"],
              ["Forecast", `$${FORECAST.toLocaleString()}`, "10% over budget", "#cf2055"],
              ["Committed savings", `$${savings.toLocaleString()}`, `of $${potential.toLocaleString()} available`, "#1e9f3c"],
              ["Cost per 1k events", "$0.24", "-4.1% — good", "#629987"],
            ].map(([k, v, sub, tone]) => (
              <div key={k} className="rounded-xl border border-[var(--color-line)] bg-white px-4 py-3.5">
                <p className="text-[11.5px] text-[var(--color-faint)]">{k}</p>
                <p className="mt-0.5 font-serif text-[26px] font-medium leading-none tracking-[-0.018em]">{v}</p>
                <p className="mt-1.5 text-[11.5px] font-medium" style={{ color: tone }}>
                  {sub}
                </p>
              </div>
            ))}
          </div>

          {/* anomalies */}
          <div className="mb-4 space-y-2">
            {ANOMALIES.map(([title, sev, note]) => (
              <div
                key={title}
                className="flex flex-wrap items-center gap-3 rounded-xl border px-4 py-3"
                style={
                  sev === "critical"
                    ? { borderColor: "#f0d6de", background: "#fdf3f6" }
                    : { borderColor: "#f0e0cf", background: "#fdf7f1" }
                }
              >
                <span className="shrink-0" style={{ color: sev === "critical" ? "#cf2055" : "#c5621b" }}>
                  <Icon name="warn" className="h-[17px] w-[17px]" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] font-medium" style={{ color: sev === "critical" ? "#a81a44" : "#8f4413" }}>
                    {title}
                  </span>
                  <span className="block text-[12px]" style={{ color: sev === "critical" ? "#8b3a52" : "#a05a2a" }}>
                    {note}
                  </span>
                </span>
                <button className="h-7 shrink-0 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12px] font-medium">
                  Investigate
                </button>
              </div>
            ))}
          </div>

          {/* trend chart */}
          <div className="mb-4 rounded-xl border border-[var(--color-line)] bg-white p-5">
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-[13px] font-medium">Monthly spend and forecast</h2>
              <span className="flex gap-4 text-[11.5px] text-[var(--color-muted)]">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-[8px] w-[8px] rounded-sm bg-[var(--color-clay)]" /> actual
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-[8px] w-[8px] rounded-sm border border-dashed border-[var(--color-clay)]" /> forecast
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-[2px] w-[14px] bg-[#cf2055]" /> budget
                </span>
              </span>
            </div>

            <div className="relative flex h-[180px] items-end gap-4">
              <div
                className="pointer-events-none absolute inset-x-0 border-t-[1.5px] border-dashed border-[#cf2055]"
                style={{ bottom: `${(44000 / max) * 180}px` }}
              >
                <span className="absolute -top-[16px] right-0 rounded bg-[#cf2055] px-1.5 text-[10px] font-medium text-white">
                  budget $44k
                </span>
              </div>
              {MONTHS.map(([m, v]) => (
                <div key={m} className="group flex flex-1 flex-col items-center gap-2">
                  <span className="font-mono text-[11px] text-[var(--color-muted)]">${(v / 1000).toFixed(1)}k</span>
                  <div
                    className="w-full rounded-t-md bg-[var(--color-clay)] opacity-85 transition-opacity group-hover:opacity-100"
                    style={{ height: `${(v / max) * 150}px` }}
                  />
                  <span className="font-mono text-[11px] text-[var(--color-faint)]">{m}</span>
                </div>
              ))}
              <div className="group flex flex-1 flex-col items-center gap-2">
                <span className="font-mono text-[11px] text-[#cf2055]">${(FORECAST / 1000).toFixed(1)}k</span>
                <div
                  className="w-full rounded-t-md border-2 border-dashed border-[var(--color-clay)]"
                  style={{ height: `${(FORECAST / max) * 150}px` }}
                />
                <span className="font-mono text-[11px] text-[var(--color-faint)]">May</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
            {/* breakdown */}
            <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
              <div className="flex items-center justify-between border-b border-[var(--color-line-2)] px-4 py-3">
                <h2 className="text-[13px] font-medium">Breakdown</h2>
                <div className="flex items-center gap-[2px] rounded-lg border border-[var(--color-line)] p-[2px]">
                  {["service", "team"].map((g) => (
                    <button
                      key={g}
                      onClick={() => setGroup(g)}
                      className={`rounded-md px-2.5 py-[3px] text-[11.5px] font-medium capitalize ${
                        group === g ? "bg-[var(--color-ivory)] text-[var(--color-ink)]" : "text-[var(--color-faint)]"
                      }`}
                    >
                      by {g}
                    </button>
                  ))}
                </div>
              </div>

              {group === "service"
                ? SERVICES.map((s, i) => (
                    <div
                      key={s.name}
                      className={`flex items-center gap-3 px-4 py-3 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}
                    >
                      <span
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-lg"
                        style={{ background: `${s.tone}1c`, color: s.tone }}
                      >
                        <Icon name={s.icon} className="h-4 w-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[13px] font-medium">{s.name}</p>
                        <div className="mt-1 h-[5px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                          <div className="h-full rounded-full" style={{ width: `${s.share}%`, background: s.tone }} />
                        </div>
                      </div>
                      <span className="w-[68px] shrink-0 text-right font-mono text-[13px]">
                        ${s.cost.toLocaleString()}
                      </span>
                      <span
                        className="w-[52px] shrink-0 text-right font-mono text-[11.5px] font-medium"
                        style={{ color: s.delta > 10 ? "#cf2055" : s.delta > 0 ? "#c5621b" : "#1e9f3c" }}
                      >
                        {s.delta > 0 ? "+" : ""}
                        {s.delta}%
                      </span>
                    </div>
                  ))
                : TEAMS.map(([name, cost, share, tone], i) => (
                    <div
                      key={name}
                      className={`flex items-center gap-3 px-4 py-3 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}
                    >
                      <span className="h-[8px] w-[8px] shrink-0 rounded-full" style={{ background: tone }} />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-mono text-[12.5px]">{name}</p>
                        <div className="mt-1 h-[5px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                          <div className="h-full rounded-full" style={{ width: `${share}%`, background: tone }} />
                        </div>
                      </div>
                      <span className="w-[68px] shrink-0 text-right font-mono text-[13px]">
                        ${cost.toLocaleString()}
                      </span>
                      <span className="w-[38px] shrink-0 text-right text-[11.5px] text-[var(--color-faint)]">
                        {share}%
                      </span>
                    </div>
                  ))}
            </div>

            {/* recommendations */}
            <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white lg:sticky lg:top-0 lg:self-start">
              <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                <Icon name="bulb" className="h-4 w-4 text-[var(--color-olive)]" />
                <h2 className="text-[13px] font-medium">Recommendations</h2>
                <span className="ml-auto font-mono text-[11.5px] text-[#1e9f3c]">
                  ${potential.toLocaleString()}/mo
                </span>
              </div>
              {RECS.map((r, i) => {
                const on = !!applied[r.title]
                return (
                  <div key={r.title} className={`px-4 py-3.5 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}>
                    <div className="flex items-start gap-2.5">
                      <button
                        onClick={() => setApplied((a) => ({ ...a, [r.title]: !a[r.title] }))}
                        className={`mt-[2px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded border-2 transition-colors ${
                          on
                            ? "border-[var(--color-mineral)] bg-[var(--color-mineral)] text-white"
                            : "border-[var(--color-line)] text-transparent hover:border-[var(--color-clay)]"
                        }`}
                      >
                        <Icon name="check" className="h-3 w-3" />
                      </button>
                      <div className="min-w-0 flex-1">
                        <p className={`text-[12.5px] font-medium leading-[1.45] ${on ? "text-[var(--color-faint)] line-through" : ""}`}>
                          {r.title}
                        </p>
                        <p className="mt-1 text-[11.5px] leading-[1.6] text-[var(--color-muted)]">{r.body}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="rounded-full bg-[#e6f4ea] px-2 py-[2px] font-mono text-[10.5px] font-medium text-[#177c31]">
                            −${r.save.toLocaleString()}/mo
                          </span>
                          <span className="rounded-full bg-[var(--color-sunk)] px-2 py-[2px] text-[10.5px] text-[var(--color-muted)]">
                            {r.effort} effort
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
