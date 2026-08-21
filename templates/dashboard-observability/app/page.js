"use client"

import { useState } from "react"

function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    pulse: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    trace: <path d="M4 6h16M8 12h12M12 18h8M4 12h.01M4 18h.01" />,
    alert: <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01" />,
    check: <path d="m5 13 4 4L19 7" />,
    chevronRight: <path d="m9 6 6 6-6 6" />,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
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
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

const SERVICES = [
  { name: "checkout-api", tone: "#c96442", icon: "globe", rps: 1840, p50: 42, p99: 386, err: 0.31, sat: 62, state: "degraded" },
  { name: "pricing-svc", tone: "#629987", icon: "box", rps: 4210, p50: 8, p99: 61, err: 0.02, sat: 41, state: "healthy" },
  { name: "inventory-svc", tone: "#827dbd", icon: "box", rps: 980, p50: 14, p99: 88, err: 0.04, sat: 28, state: "healthy" },
  { name: "postgres-primary", tone: "#98801f", icon: "db", rps: 6120, p50: 3, p99: 112, err: 0.0, sat: 78, state: "warning" },
  { name: "search-cluster", tone: "#c5621b", icon: "box", rps: 620, p50: 26, p99: 210, err: 0.11, sat: 34, state: "healthy" },
]

const stateStyle = {
  healthy: ["bg-[#e6f4ea]", "text-[#177c31]", "#1e9f3c"],
  warning: ["bg-[#f5f1e0]", "text-[#7a6614]", "#98801f"],
  degraded: ["bg-[#fbeee3]", "text-[#8f4413]", "#c5621b"],
  down: ["bg-[#fceaef]", "text-[#a81a44]", "#cf2055"],
}

const LATENCY = [38, 41, 39, 44, 42, 46, 43, 48, 52, 49, 58, 71, 96, 142, 186, 204, 178, 152, 118, 94, 72, 61, 54, 48]
const ERRORS = [0.02, 0.03, 0.02, 0.04, 0.03, 0.05, 0.04, 0.06, 0.09, 0.08, 0.14, 0.22, 0.41, 0.68, 0.94, 1.12, 0.86, 0.62, 0.38, 0.24, 0.14, 0.09, 0.06, 0.04]

const SPANS = [
  { name: "POST /checkout", svc: "checkout-api", start: 0, dur: 100, depth: 0, tone: "#c96442" },
  { name: "auth.verify", svc: "auth-svc", start: 1, dur: 4, depth: 1, tone: "#629987" },
  { name: "cart.load", svc: "checkout-api", start: 6, dur: 8, depth: 1, tone: "#c96442" },
  { name: "SELECT cart_items", svc: "postgres", start: 7, dur: 6, depth: 2, tone: "#98801f" },
  { name: "pricing.getMany", svc: "pricing-svc", start: 15, dur: 62, depth: 1, tone: "#827dbd", slow: true },
  { name: "GET /prices ×14", svc: "pricing-svc", start: 16, dur: 58, depth: 2, tone: "#827dbd", slow: true },
  { name: "tax.rulesFor", svc: "pricing-svc", start: 78, dur: 12, depth: 1, tone: "#827dbd" },
  { name: "order.persist", svc: "checkout-api", start: 91, dur: 8, depth: 1, tone: "#c96442" },
]

const ALERTS = [
  { sev: "critical", title: "checkout-api p99 above 300ms", who: "on-call: platform", when: "14m", state: "firing" },
  { sev: "warning", title: "postgres-primary connection saturation 78%", who: "on-call: data", when: "31m", state: "firing" },
  { sev: "warning", title: "search-cluster indexing lag > 60s", who: "on-call: search", when: "2h", state: "acknowledged" },
  { sev: "info", title: "checkout-api deploy v4.2.0", who: "rina@", when: "3h", state: "resolved" },
]

const sevStyle = {
  critical: ["#cf2055", "bg-[#fceaef]", "text-[#a81a44]"],
  warning: ["#c5621b", "bg-[#fbeee3]", "text-[#8f4413]"],
  info: ["#629987", "bg-[#e6efec]", "text-[#3f6f60]"],
}

function Sparkline({ points, color, height = 44, fill = true }) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1
  const w = 240
  const step = w / (points.length - 1)
  const d = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${(height - ((p - min) / range) * (height - 4) - 2).toFixed(1)}`)
    .join(" ")
  return (
    <svg viewBox={`0 0 ${w} ${height}`} className="w-full" style={{ height }} preserveAspectRatio="none" aria-hidden>
      {fill && <path d={`${d} L${w},${height} L0,${height} Z`} fill={color} opacity="0.08" />}
      <path d={d} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Observability() {
  const [range, setRange] = useState("1h")
  const [svc, setSvc] = useState("checkout-api")
  const [expanded, setExpanded] = useState(true)

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <header className="flex h-[56px] shrink-0 items-center gap-5 border-b border-[var(--color-line)] px-5">
        <div className="flex shrink-0 items-center gap-2">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
            <rect width="32" height="32" rx="8" fill="#141413" />
            <path d="M6 16h4l3-7 5 14 3-7h5" fill="none" stroke="#c96442" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Cadence</span>
        </div>
        <nav className="flex items-center gap-0.5">
          {["Services", "Traces", "Alerts", "Logs"].map((n, i) => (
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
            {["15m", "1h", "6h", "24h"].map((r) => (
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
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 py-[6px] text-[12px] text-[var(--color-muted)]">
            <span className="pulse-dot h-[6px] w-[6px] rounded-full bg-[var(--color-clay)]" /> Live
          </span>
        </div>
      </header>

      <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
        <div className="mx-auto max-w-[1120px]">
          {/* incident banner */}
          <div className="mb-4 flex flex-wrap items-center gap-3 rounded-xl border border-[#f0d9c6] bg-[#fdf5ee] px-4 py-3">
            <Icon name="alert" className="h-[18px] w-[18px] shrink-0 text-[#c5621b]" />
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-medium text-[#8f4413]">
                checkout-api is degraded — p99 up 4.8× since the v4.2.0 deploy
              </p>
              <p className="text-[12px] text-[#a05a2a]">
                Started 14 minutes ago · 2 alerts firing · error budget 62% consumed this window
              </p>
            </div>
            <button className="h-8 shrink-0 rounded-lg bg-[var(--color-ink)] px-3 text-[12.5px] font-medium text-white hover:bg-black">
              Open incident
            </button>
          </div>

          {/* golden signals */}
          <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Throughput", "13.7k", "req/s", "#629987", LATENCY.map((v) => 200 - v)],
              ["p99 latency", "386ms", "+4.8×", "#c5621b", LATENCY],
              ["Error rate", "0.31%", "+0.29pt", "#cf2055", ERRORS],
              ["Saturation", "78%", "pg pool", "#98801f", LATENCY.map((v) => v * 0.6 + 30)],
            ].map(([label, value, sub, tone, series]) => (
              <div key={label} className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                <div className="px-4 pt-3.5">
                  <p className="text-[11.5px] text-[var(--color-faint)]">{label}</p>
                  <div className="mt-0.5 flex items-baseline gap-2">
                    <p className="font-serif text-[24px] font-medium leading-none tracking-[-0.015em]">{value}</p>
                    <span className="text-[11.5px] font-medium" style={{ color: tone }}>
                      {sub}
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <Sparkline points={series} color={tone} />
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-4">
              {/* services */}
              <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                <div className="border-b border-[var(--color-line-2)] px-4 py-3">
                  <h2 className="text-[13px] font-medium">Services</h2>
                </div>
                <div className="scroll-thin overflow-x-auto">
                  <table className="w-full min-w-[620px]">
                    <thead>
                      <tr className="border-b border-[var(--color-line-2)]">
                        {["Service", "req/s", "p50", "p99", "Errors", "Saturation", ""].map((h) => (
                          <th
                            key={h}
                            className="px-3 py-2 text-left text-[10.5px] font-medium tracking-wide text-[var(--color-faint)] first:pl-4"
                          >
                            {h.toUpperCase()}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {SERVICES.map((s) => {
                        const [bg, fg, dot] = stateStyle[s.state]
                        return (
                          <tr
                            key={s.name}
                            onClick={() => setSvc(s.name)}
                            className={`cursor-pointer border-b border-[var(--color-line-2)] last:border-0 ${
                              svc === s.name ? "bg-[var(--color-clay-soft)]" : "hover:bg-[var(--color-sunk)]"
                            }`}
                          >
                            <td className="py-2.5 pl-4 pr-3">
                              <span className="flex items-center gap-2">
                                <span style={{ color: s.tone }}>
                                  <Icon name={s.icon} className="h-[15px] w-[15px]" />
                                </span>
                                <span className="font-mono text-[12px]">{s.name}</span>
                              </span>
                            </td>
                            <td className="px-3 py-2.5 font-mono text-[12px] text-[var(--color-muted)]">
                              {s.rps.toLocaleString()}
                            </td>
                            <td className="px-3 py-2.5 font-mono text-[12px] text-[var(--color-muted)]">{s.p50}ms</td>
                            <td className="px-3 py-2.5 font-mono text-[12px]" style={{ color: s.p99 > 200 ? "#c5621b" : "var(--color-muted)" }}>
                              {s.p99}ms
                            </td>
                            <td className="px-3 py-2.5 font-mono text-[12px]" style={{ color: s.err > 0.1 ? "#cf2055" : "var(--color-muted)" }}>
                              {s.err}%
                            </td>
                            <td className="px-3 py-2.5">
                              <span className="flex items-center gap-2">
                                <span className="h-[5px] w-[46px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                                  <span
                                    className="block h-full rounded-full"
                                    style={{ width: `${s.sat}%`, background: s.sat > 70 ? "#c5621b" : s.tone }}
                                  />
                                </span>
                                <span className="font-mono text-[11px] text-[var(--color-faint)]">{s.sat}%</span>
                              </span>
                            </td>
                            <td className="px-3 py-2.5 text-right">
                              <span className={`rounded-full px-2 py-[3px] text-[10.5px] font-medium ${bg} ${fg}`}>
                                {s.state}
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* trace waterfall */}
              <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                <button
                  onClick={() => setExpanded((e) => !e)}
                  className="flex w-full items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3 text-left"
                >
                  <Icon
                    name="chevronRight"
                    className={`h-3.5 w-3.5 text-[var(--color-faint)] transition-transform ${expanded ? "rotate-90" : ""}`}
                  />
                  <h2 className="text-[13px] font-medium">Slowest trace</h2>
                  <span className="font-mono text-[11px] text-[var(--color-faint)]">trace_9f2ab41c · 1,412ms</span>
                  <span className="ml-auto rounded-full bg-[var(--color-ochre-soft)] px-2 py-[3px] text-[10.5px] font-medium text-[#8f4413]">
                    p99.9
                  </span>
                </button>
                {expanded && (
                  <div className="p-4">
                    {SPANS.map((sp, i) => (
                      <div key={i} className="group mb-[6px] flex items-center gap-3 last:mb-0">
                        <span
                          className="w-[170px] shrink-0 truncate font-mono text-[11.5px]"
                          style={{ paddingLeft: sp.depth * 12, color: sp.slow ? "#c5621b" : "var(--color-ink-2)" }}
                        >
                          {sp.name}
                        </span>
                        <span className="relative h-[18px] min-w-0 flex-1 rounded bg-[var(--color-sunk)]">
                          <span
                            className="absolute inset-y-0 rounded transition-opacity group-hover:opacity-100"
                            style={{
                              left: `${sp.start}%`,
                              width: `${sp.dur}%`,
                              background: sp.tone,
                              opacity: sp.slow ? 1 : 0.7,
                            }}
                          />
                        </span>
                        <span className="w-[54px] shrink-0 text-right font-mono text-[11px] text-[var(--color-faint)]">
                          {Math.round(sp.dur * 14.12)}ms
                        </span>
                      </div>
                    ))}
                    <p className="mt-3 border-t border-[var(--color-line-2)] pt-3 text-[12px] leading-[1.6] text-[var(--color-muted)]">
                      <strong className="font-medium text-[var(--color-ink)]">62% of this trace</strong> is fourteen
                      sequential calls to <code className="font-mono text-[11.5px]">GET /prices</code>. Batching them
                      collapses the fan-out into one round trip.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* alerts */}
            <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white lg:sticky lg:top-0 lg:self-start">
              <div className="flex items-center justify-between border-b border-[var(--color-line-2)] px-4 py-3">
                <h2 className="text-[13px] font-medium">Alerts</h2>
                <span className="text-[11.5px] text-[var(--color-faint)]">2 firing</span>
              </div>
              {ALERTS.map((a, i) => {
                const [dot, bg, fg] = sevStyle[a.sev]
                return (
                  <div
                    key={a.title}
                    className={`px-4 py-3 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""} ${
                      a.state === "resolved" ? "opacity-55" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-[7px] w-[7px] rounded-full ${a.state === "firing" ? "pulse-dot" : ""}`}
                        style={{ background: dot }}
                      />
                      <span className={`rounded-full px-1.5 py-[1px] text-[10px] font-medium ${bg} ${fg}`}>
                        {a.sev}
                      </span>
                      <span className="ml-auto text-[10.5px] text-[var(--color-faint)]">{a.when}</span>
                    </div>
                    <p className="mt-1.5 text-[12.5px] font-medium leading-[1.45]">{a.title}</p>
                    <p className="mt-0.5 text-[11px] text-[var(--color-faint)]">
                      {a.who} · {a.state}
                    </p>
                  </div>
                )
              })}
              <div className="border-t border-[var(--color-line-2)] p-3">
                <button className="h-8 w-full rounded-lg border border-[var(--color-line)] text-[12.5px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)]">
                  View all alerts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
