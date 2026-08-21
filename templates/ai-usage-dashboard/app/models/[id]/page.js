"use client"

import { use } from "react"
import Link from "next/link"
import { Icon, MODELS, TOTAL_COST, DAYS, SERIES, LIMITS, KEYS, Sidebar } from "../../data"

export default function ModelDetail({ params }) {
  const { id } = use(params)
  const m = MODELS.find((x) => x.key === id) || MODELS[0]
  const series = SERIES[m.key] || SERIES["sonnet-4"]
  const maxV = Math.max(...series)
  const limits = LIMITS.filter((l) => l[0] === m.key)

  const W = 660, H = 200, padL = 34, padR = 8, padT = 12, padB = 22
  const plotH = H - padT - padB
  const bw = (W - padL - padR) / DAYS

  const TILES = [
    ["Spend · 30d", `$${m.cost.toLocaleString()}`, "coin", m.color, `${Math.round((m.cost / TOTAL_COST) * 100)}% of total`],
    ["Requests", m.req, "bolt", "#827dbd", "past 30 days"],
    ["Avg latency", m.latency, "gauge", "#629987", `p95 ${m.p95}`],
    ["Error rate", m.errRate, "limit", "#98801f", "5xx + timeouts"],
  ]

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="Models" />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <Link href="/" className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-[13px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]">
            <Icon name="back" className="h-4 w-4" /> Usage
          </Link>
          <span className="text-[var(--color-line)]">/</span>
          <span className="inline-flex items-center gap-2 font-mono text-[14px] font-medium">
            <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: m.color }} /> {m.key}
          </span>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="download" className="h-3.5 w-3.5" /> Export
            </button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-ink)] px-3 text-[12.5px] font-medium text-white hover:bg-black">Set limits</button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto max-w-[1080px]">
            <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {TILES.map(([label, val, icon, tone, sub]) => (
                <div key={label} className="rounded-xl border border-[var(--color-line)] bg-white p-3.5">
                  <div className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-lg" style={{ background: `${tone}18` }}>
                      <Icon name={icon} className="h-4 w-4" style={{ color: tone }} />
                    </span>
                    <span className="text-[11.5px] text-[var(--color-muted)]">{label}</span>
                  </div>
                  <p className="mt-2 font-serif text-[22px] font-medium tracking-[-0.01em]">{val}</p>
                  <p className="mt-0.5 text-[10.5px] text-[var(--color-faint)]">{sub}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
              {/* spend trend */}
              <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                  <h2 className="text-[13px] font-medium">Daily spend</h2>
                  <span className="font-mono text-[11px] text-[var(--color-faint)]">{m.key}</span>
                  <span className="ml-auto text-[11px] text-[var(--color-faint)]">last 30 days · $</span>
                </div>
                <div className="px-3 py-3">
                  <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-hidden>
                    {[0, 0.5, 1].map((f) => {
                      const g = Math.round(maxV * f)
                      const yy = padT + plotH - f * plotH
                      return (
                        <g key={f}>
                          <line x1={padL} x2={W - padR} y1={yy} y2={yy} stroke="#f1f0ec" strokeWidth="1" />
                          <text x={padL - 5} y={yy + 3} fontSize="8.5" textAnchor="end" fill="#a5a49d" fontFamily="JetBrains Mono, monospace">${g}</text>
                        </g>
                      )
                    })}
                    {series.map((v, i) => {
                      const h = (v / maxV) * plotH
                      const x = padL + bw * i + bw * 0.16
                      return <rect key={i} x={x} y={padT + plotH - h} width={bw * 0.68} height={h} fill={m.color} rx="0.8" />
                    })}
                    {["30d ago", "20d", "10d", "today"].map((lab, i) => (
                      <text key={lab} x={padL + (i / 3) * (W - padL - padR)} y={H - 6} fontSize="8.5" textAnchor={i === 3 ? "end" : i === 0 ? "start" : "middle"} fill="#a5a49d" fontFamily="JetBrains Mono, monospace">{lab}</text>
                    ))}
                  </svg>
                </div>
                <div className="grid grid-cols-3 gap-px border-t border-[var(--color-line-2)] bg-[var(--color-line-2)]">
                  {[["Input tokens", m.tin], ["Output tokens", m.tout], ["Requests", m.req]].map(([k, v]) => (
                    <div key={k} className="bg-white px-4 py-3">
                      <p className="text-[10.5px] text-[var(--color-faint)]">{k}</p>
                      <p className="mt-0.5 font-mono text-[14px] font-medium">{v}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* right rail */}
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border border-[var(--color-line)] bg-white p-4">
                  <h2 className="text-[13px] font-medium">Rate limits</h2>
                  <p className="mt-0.5 text-[11px] text-[var(--color-faint)]">current / limit (per 1k)</p>
                  <div className="mt-3 space-y-3">
                    {(limits.length ? limits : LIMITS.slice(0, 2)).map(([model, kind, cur, lim, tone], i) => {
                      const pct = (cur / lim) * 100
                      const hot = pct > 80
                      return (
                        <div key={i}>
                          <div className="mb-1 flex items-baseline justify-between text-[11.5px]">
                            <span className="font-mono">{kind}</span>
                            <span className="font-mono" style={{ color: hot ? "#a81a44" : "var(--color-muted)" }}>{cur}k / {lim}k</span>
                          </div>
                          <div className="h-[6px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                            <div className="h-full rounded-full" style={{ width: `${pct}%`, background: hot ? "#cf2055" : m.color }} />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                  <div className="px-4 py-3">
                    <h2 className="text-[13px] font-medium">Keys using {m.key}</h2>
                  </div>
                  {KEYS.map(([name, mask, pct, tone]) => (
                    <div key={name} className="flex items-center gap-2.5 border-t border-[var(--color-line-2)] px-4 py-2.5">
                      <span className="h-2 w-2 rounded-full" style={{ background: tone }} />
                      <div className="min-w-0">
                        <p className="text-[12px] font-medium">{name}</p>
                        <p className="font-mono text-[10px] text-[var(--color-faint)]">{mask}</p>
                      </div>
                      <span className="ml-auto font-mono text-[12px] text-[var(--color-muted)]">{pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
