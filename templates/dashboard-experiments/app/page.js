"use client"

import { useState } from "react"

function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    beaker: <path d="M9 3h6M10 3v6.5L4.8 18A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-3L14 9.5V3M7.5 15h9" />,
    split: <path d="M12 3v18M3 7h5M3 12h5M3 17h5M16 7h5M16 12h5M16 17h5" />,
    chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    shield: <path d="M12 2.5 20 6v6c0 4.6-3.2 8.5-8 9.5-4.8-1-8-4.9-8-9.5V6l8-3.5Z" />,
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="m5 13 4 4L19 7" />,
    warn: <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01" />,
    trend: <path d="M22 7 13.5 15.5 8.5 10.5 2 17M22 7h-6M22 7v6" />,
    stop: <rect x="6" y="6" width="12" height="12" rx="2" />,
    rocket: <path d="M5 13c-2 2-2 6-2 6s4 0 6-2m-4-4a12 12 0 0 1 9-9 8 8 0 0 1 5 5 12 12 0 0 1-9 9l-5-5ZM14 10h.01" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

const EXPERIMENTS = [
  {
    id: "exp_412",
    name: "Batched pricing on checkout",
    hypothesis: "Removing the per-item price fan-out cuts perceived wait and lifts completion.",
    status: "running",
    days: 9,
    plannedDays: 14,
    exposed: 184203,
    metric: "Checkout completion",
    control: 61.4,
    variant: 64.8,
    lift: 5.54,
    ci: [3.1, 7.9],
    p: 0.0004,
    power: 0.94,
    tone: "#c96442",
    decision: "ship",
  },
  {
    id: "exp_408",
    name: "Inline diff as default",
    hypothesis: "Inline diffs reduce review time without hurting comprehension.",
    status: "running",
    days: 6,
    plannedDays: 21,
    exposed: 41208,
    metric: "Review completion time",
    control: 8.2,
    variant: 7.4,
    lift: -9.76,
    ci: [-16.2, -3.1],
    p: 0.012,
    power: 0.61,
    tone: "#629987",
    decision: "wait",
  },
  {
    id: "exp_401",
    name: "Pricing page: annual first",
    hypothesis: "Defaulting the toggle to annual increases annual plan share.",
    status: "concluded",
    days: 21,
    plannedDays: 21,
    exposed: 96410,
    metric: "Annual plan share",
    control: 31.2,
    variant: 38.9,
    lift: 24.68,
    ci: [19.4, 30.1],
    p: 0.0000,
    power: 0.99,
    tone: "#827dbd",
    decision: "shipped",
  },
  {
    id: "exp_396",
    name: "Onboarding: skip the tour",
    hypothesis: "Removing the forced tour improves day-7 activation.",
    status: "concluded",
    days: 18,
    plannedDays: 18,
    exposed: 28104,
    metric: "Day-7 activation",
    control: 44.1,
    variant: 43.6,
    lift: -1.13,
    ci: [-4.4, 2.2],
    p: 0.49,
    power: 0.88,
    tone: "#98801f",
    decision: "no effect",
  },
]

const decisionStyle = {
  ship: ["bg-[#e6f4ea]", "text-[#177c31]"],
  shipped: ["bg-[#e6f4ea]", "text-[#177c31]"],
  wait: ["bg-[#f5f1e0]", "text-[#7a6614]"],
  "no effect": ["bg-[#f0efec]", "text-[#5e5d59]"],
}

const GUARDRAILS = [
  ["p99 latency", "386ms", "≤ 400ms", true],
  ["Error rate", "0.31%", "≤ 0.5%", true],
  ["Support contacts", "+2.1%", "≤ +5%", true],
  ["Refund rate", "0.09%", "≤ 0.15%", true],
  ["Page weight", "412 KB", "≤ 380 KB", false],
]

const SEGMENTS = [
  ["All users", 5.54, 0.0004, 184203],
  ["New (< 30 days)", 8.91, 0.0008, 41220],
  ["Returning", 4.12, 0.014, 142983],
  ["Mobile", 9.44, 0.0001, 84102],
  ["Desktop", 2.18, 0.19, 100101],
  ["Cart > 8 items", 18.72, 0.0000, 22410],
]

const DAILY = [
  1.2, 2.8, 1.9, 3.4, 4.1, 3.8, 4.9, 5.2, 5.54,
]

export default function Experiments() {
  const [selected, setSelected] = useState("exp_412")
  const [tab, setTab] = useState("results")
  const exp = EXPERIMENTS.find((e) => e.id === selected)
  const significant = exp.p < 0.05

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <header className="flex h-[56px] shrink-0 items-center gap-5 border-b border-[var(--color-line)] px-5">
        <div className="flex shrink-0 items-center gap-2">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
            <rect width="32" height="32" rx="8" fill="#141413" />
            <path d="M13 7h6M14 7v7l-5 9a1.8 1.8 0 0 0 1.6 2.7h10.8A1.8 1.8 0 0 0 23 23l-5-9V7M11.5 19h9" fill="none" stroke="#c96442" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Crucible</span>
        </div>
        <nav className="flex items-center gap-0.5">
          {["Experiments", "Metrics", "Segments", "Settings"].map((n, i) => (
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
        <button className="ml-auto inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]">
          <Icon name="plus" className="h-4 w-4" /> New experiment
        </button>
      </header>

      <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
        <div className="mx-auto max-w-[1100px]">
          {/* list */}
          <div className="mb-4 space-y-2.5">
            {EXPERIMENTS.map((e) => {
              const [db, df] = decisionStyle[e.decision]
              const sig = e.p < 0.05
              return (
                <div
                  key={e.id}
                  onClick={() => setSelected(e.id)}
                  className={`cursor-pointer rounded-xl border bg-white p-4 transition-all ${
                    selected === e.id ? "border-[var(--color-ink)]" : "border-[var(--color-line)] hover:border-[var(--color-faint)]"
                  }`}
                >
                  <div className="flex flex-wrap items-start gap-3">
                    <span className="mt-[3px] h-[8px] w-[8px] shrink-0 rounded-full" style={{ background: e.tone }} />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[14px] font-medium">{e.name}</span>
                        <span className={`rounded-full px-2 py-[2px] text-[10.5px] font-medium ${db} ${df}`}>
                          {e.decision}
                        </span>
                        {e.status === "running" && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-clay-soft)] px-1.5 py-[1px] text-[10px] font-medium text-[var(--color-clay-2)]">
                            <span className="pulse-dot h-[5px] w-[5px] rounded-full bg-[var(--color-clay)]" />
                            day {e.days}/{e.plannedDays}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-[12.5px] leading-[1.6] text-[var(--color-muted)]">{e.hypothesis}</p>
                      <p className="mt-1.5 font-mono text-[11px] text-[var(--color-faint)]">
                        {e.id} · {e.exposed.toLocaleString()} exposed · {e.metric}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-6">
                      <div className="text-right">
                        <p className="text-[10.5px] text-[var(--color-faint)]">Lift</p>
                        <p
                          className="font-mono text-[17px] font-medium"
                          style={{ color: !sig ? "#87867f" : e.lift > 0 ? "#1e9f3c" : "#cf2055" }}
                        >
                          {e.lift > 0 ? "+" : ""}
                          {e.lift.toFixed(2)}%
                        </p>
                      </div>
                      <div className="hidden text-right sm:block">
                        <p className="text-[10.5px] text-[var(--color-faint)]">p-value</p>
                        <p className="font-mono text-[12.5px]" style={{ color: sig ? "#177c31" : "#87867f" }}>
                          {e.p < 0.0001 ? "<0.0001" : e.p.toFixed(4)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* detail */}
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
              <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-2.5">
                {["results", "segments", "daily"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`relative px-2 py-1.5 text-[12.5px] font-medium capitalize transition-colors ${
                      tab === t ? "text-[var(--color-ink)]" : "text-[var(--color-faint)] hover:text-[var(--color-ink-2)]"
                    }`}
                  >
                    {t}
                    {tab === t && <span className="absolute inset-x-1 -bottom-[10px] h-[2px] rounded-full bg-[var(--color-clay)]" />}
                  </button>
                ))}
                <span className="ml-auto truncate font-mono text-[11px] text-[var(--color-faint)]">{exp.name}</span>
              </div>

              <div className="p-5">
                {tab === "results" && (
                  <>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        ["Control", exp.control, "#87867f", "50% of traffic"],
                        ["Variant", exp.variant, exp.tone, "50% of traffic"],
                      ].map(([label, val, tone, sub]) => (
                        <div key={label} className="rounded-xl border border-[var(--color-line)] p-4">
                          <div className="flex items-center gap-2">
                            <span className="h-[8px] w-[8px] rounded-full" style={{ background: tone }} />
                            <span className="text-[12.5px] font-medium">{label}</span>
                          </div>
                          <p className="mt-1.5 font-serif text-[30px] font-medium leading-none tracking-[-0.018em]">
                            {val.toFixed(1)}
                            {exp.metric.includes("time") ? "m" : "%"}
                          </p>
                          <p className="mt-1.5 text-[11.5px] text-[var(--color-faint)]">{sub}</p>
                        </div>
                      ))}
                    </div>

                    {/* CI visual */}
                    <div className="mt-5">
                      <div className="mb-2 flex items-baseline justify-between">
                        <span className="text-[12px] font-medium">95% confidence interval on lift</span>
                        <span className="font-mono text-[11.5px] text-[var(--color-muted)]">
                          [{exp.ci[0].toFixed(1)}%, {exp.ci[1].toFixed(1)}%]
                        </span>
                      </div>
                      <div className="relative h-[42px] rounded-lg bg-[var(--color-sunk)]">
                        <span className="absolute inset-y-0 left-1/2 w-px bg-[var(--color-faint)]" />
                        <span className="absolute left-1/2 top-[3px] -translate-x-1/2 font-mono text-[9.5px] text-[var(--color-faint)]">
                          0
                        </span>
                        {(() => {
                          const scale = 40 // ±40% maps to full width
                          const l = 50 + (exp.ci[0] / scale) * 50
                          const r = 50 + (exp.ci[1] / scale) * 50
                          const m = 50 + (exp.lift / scale) * 50
                          return (
                            <>
                              <span
                                className="absolute top-1/2 h-[8px] -translate-y-1/2 rounded-full"
                                style={{
                                  left: `${Math.min(l, r)}%`,
                                  width: `${Math.abs(r - l)}%`,
                                  background: significant ? `${exp.tone}55` : "#dcdad3",
                                }}
                              />
                              <span
                                className="absolute top-1/2 h-[16px] w-[3px] -translate-y-1/2 rounded-full"
                                style={{ left: `${m}%`, background: significant ? exp.tone : "#87867f" }}
                              />
                            </>
                          )
                        })()}
                      </div>
                      <p className="mt-2 text-[12px] leading-[1.6] text-[var(--color-muted)]">
                        {significant ? (
                          <>
                            The interval excludes zero, so the effect is unlikely to be chance. Statistical power is{" "}
                            <span className="font-mono">{exp.power.toFixed(2)}</span>
                            {exp.power < 0.8 ? " — below the 0.80 threshold, so hold before deciding." : "."}
                          </>
                        ) : (
                          <>
                            The interval spans zero. This is consistent with no effect; shipping on this basis would be
                            guessing.
                          </>
                        )}
                      </p>
                    </div>
                  </>
                )}

                {tab === "segments" && (
                  <div className="space-y-3">
                    {SEGMENTS.map(([name, lift, p, n]) => {
                      const sig = p < 0.05
                      return (
                        <div key={name}>
                          <div className="mb-1.5 flex items-baseline justify-between">
                            <span className="text-[12.5px]">{name}</span>
                            <span className="flex items-baseline gap-3">
                              <span className="font-mono text-[11px] text-[var(--color-faint)]">
                                n={n.toLocaleString()}
                              </span>
                              <span
                                className="w-[52px] text-right font-mono text-[12.5px] font-medium"
                                style={{ color: !sig ? "#87867f" : lift > 0 ? "#1e9f3c" : "#cf2055" }}
                              >
                                {lift > 0 ? "+" : ""}
                                {lift.toFixed(2)}%
                              </span>
                            </span>
                          </div>
                          <div className="relative h-[6px] rounded-full bg-[var(--color-sunk)]">
                            <span className="absolute inset-y-0 left-1/2 w-px bg-[var(--color-line)]" />
                            <span
                              className="absolute inset-y-0 rounded-full"
                              style={{
                                left: lift > 0 ? "50%" : `${50 + (lift / 40) * 50}%`,
                                width: `${(Math.abs(lift) / 40) * 50}%`,
                                background: !sig ? "#dcdad3" : lift > 0 ? "#629987" : "#cf2055",
                              }}
                            />
                          </div>
                        </div>
                      )
                    })}
                    <p className="mt-3 border-t border-[var(--color-line-2)] pt-3 text-[11.5px] leading-[1.6] text-[var(--color-faint)]">
                      Segment results are exploratory. Six comparisons at α=0.05 means roughly one false positive by
                      chance — treat these as hypotheses, not conclusions.
                    </p>
                  </div>
                )}

                {tab === "daily" && (
                  <>
                    <div className="mb-2 flex items-baseline justify-between">
                      <span className="text-[12px] font-medium">Cumulative lift by day</span>
                      <span className="font-mono text-[11px] text-[var(--color-faint)]">
                        day {exp.days} of {exp.plannedDays}
                      </span>
                    </div>
                    <div className="flex h-[150px] items-end gap-2">
                      {DAILY.map((v, i) => (
                        <div key={i} className="group flex flex-1 flex-col items-center gap-1.5">
                          <span className="font-mono text-[10px] text-[var(--color-muted)]">{v.toFixed(1)}</span>
                          <div
                            className="w-full rounded-t-md"
                            style={{ height: `${(v / 6) * 118}px`, background: exp.tone, opacity: 0.55 + i * 0.05 }}
                          />
                          <span className="font-mono text-[9.5px] text-[var(--color-faint)]">d{i + 1}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-[12px] leading-[1.6] text-[var(--color-muted)]">
                      The effect stabilised around day six. Early days show the usual novelty inflation — the first two
                      points should not be read as signal.
                    </p>
                  </>
                )}
              </div>

              {exp.status === "running" && (
                <div className="flex flex-wrap gap-2 border-t border-[var(--color-line-2)] p-3">
                  <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-ink)] px-3 text-[12.5px] font-medium text-white hover:bg-black">
                    <Icon name="rocket" className="h-3.5 w-3.5" /> Ship variant
                  </button>
                  <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)]">
                    <Icon name="stop" className="h-3.5 w-3.5" /> Stop experiment
                  </button>
                  <button className="h-8 rounded-lg border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)]">
                    Extend 7 days
                  </button>
                </div>
              )}
            </div>

            {/* guardrails */}
            <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white lg:sticky lg:top-0 lg:self-start">
              <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                <Icon name="shield" className="h-4 w-4 text-[var(--color-mineral)]" />
                <h2 className="text-[13px] font-medium">Guardrails</h2>
                <span className="ml-auto text-[11px] text-[var(--color-faint)]">4 / 5 pass</span>
              </div>
              {GUARDRAILS.map(([name, value, limit, ok], i) => (
                <div
                  key={name}
                  className={`flex items-center gap-3 px-4 py-2.5 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}
                >
                  <span
                    className={`grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full ${
                      ok ? "bg-[#e6f4ea] text-[#177c31]" : "bg-[#fbeee3] text-[#8f4413]"
                    }`}
                  >
                    <Icon name={ok ? "check" : "warn"} className="h-[11px] w-[11px]" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[12.5px]">{name}</p>
                    <p className="font-mono text-[10.5px] text-[var(--color-faint)]">limit {limit}</p>
                  </div>
                  <span
                    className="shrink-0 font-mono text-[12px]"
                    style={{ color: ok ? "var(--color-muted)" : "#c5621b" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
              <div className="border-t border-[var(--color-line-2)] bg-[var(--color-ivory-2)] px-4 py-3">
                <p className="text-[11.5px] leading-[1.6] text-[var(--color-muted)]">
                  Page weight exceeded its limit on day 7. It does not block shipping on its own, but it must be
                  written up in the ship note.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
