"use client"

import { useState } from "react"
import Link from "next/link"
import { Icon, MODELS, TOTAL_COST, DAYS, SERIES, MAXDAY, LIMITS, KEYS, Sidebar } from "./data"

export default function Usage() {
  const [range, setRange] = useState("30d")
  const W = 640, H = 220, padL = 34, padR = 8, padT = 12, padB = 22
  const plotH = H - padT - padB
  const bw = (W - padL - padR) / DAYS
  const KPIS = [
    ["Total tokens", "140.1M", "+12%", true, "tokens", "#629987"],
    ["Spend (30d)", `$${(TOTAL_COST / 1000).toFixed(1)}k`, "+8%", false, "coin", "#c96442"],
    ["Requests", "2.71M", "+21%", true, "bolt", "#827dbd"],
    ["Avg latency", "820ms", "−4%", true, "gauge", "#98801f"],
  ]

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="Usage" />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <h1 className="font-serif text-[17px] font-medium tracking-[-0.01em]">Usage</h1>
          <div className="ml-auto flex items-center gap-2">
            <div className="flex items-center rounded-lg border border-[var(--color-line)] bg-white p-0.5">
              {["7d", "30d", "90d"].map((r) => (
                <button key={r} onClick={() => setRange(r)} className={`rounded-md px-2.5 py-1 text-[12px] font-medium ${range === r ? "bg-[var(--color-ink)] text-white" : "text-[var(--color-muted)] hover:bg-[var(--color-sunk)]"}`}>{r}</button>
              ))}
            </div>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="download" className="h-3.5 w-3.5" /> Export
            </button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {KPIS.map(([label, val, delta, good, icon, tone]) => (
                <div key={label} className="rounded-xl border border-[var(--color-line)] bg-white p-3.5">
                  <div className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-lg" style={{ background: `${tone}18` }}>
                      <Icon name={icon} className="h-4 w-4" style={{ color: tone }} />
                    </span>
                    <span className="text-[11.5px] text-[var(--color-muted)]">{label}</span>
                  </div>
                  <div className="mt-2 flex items-end justify-between">
                    <p className="font-serif text-[23px] font-medium tracking-[-0.01em]">{val}</p>
                    <span className={`mb-1 inline-flex items-center gap-0.5 rounded-full px-1.5 py-[2px] text-[10.5px] font-medium ${good ? "bg-[#e6f4ea] text-[#177c31]" : "bg-[#fbeee3] text-[#9a4a12]"}`}>
                      {delta}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
              {/* spend chart */}
              <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                  <h2 className="text-[13px] font-medium">Daily spend by model</h2>
                  <div className="ml-auto flex flex-wrap items-center gap-x-3 gap-y-1">
                    {MODELS.map((m) => (
                      <span key={m.key} className="inline-flex items-center gap-1.5 font-mono text-[10.5px] text-[var(--color-muted)]">
                        <span className="h-[8px] w-[8px] rounded-[2px]" style={{ background: m.color }} /> {m.key}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-3 py-3">
                  <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-hidden>
                    {[0, 100, 200, 300].map((g) => {
                      const y = padT + plotH - (g / MAXDAY) * plotH
                      return (
                        <g key={g}>
                          <line x1={padL} x2={W - padR} y1={y} y2={y} stroke="#f1f0ec" strokeWidth="1" />
                          <text x={padL - 5} y={y + 3} fontSize="8.5" textAnchor="end" fill="#a5a49d" fontFamily="JetBrains Mono, monospace">${g}</text>
                        </g>
                      )
                    })}
                    {Array.from({ length: DAYS }, (_, i) => {
                      let acc = 0
                      const x = padL + bw * i + bw * 0.16
                      const w = bw * 0.68
                      return (
                        <g key={i}>
                          {MODELS.map((m) => {
                            const v = SERIES[m.key][i]
                            const h = (v / MAXDAY) * plotH
                            const yTop = padT + plotH - acc - h
                            acc += h
                            return <rect key={m.key} x={x} y={yTop} width={w} height={h} fill={m.color} rx="0.6" />
                          })}
                        </g>
                      )
                    })}
                    {["30d ago", "20d", "10d", "today"].map((lab, i) => (
                      <text key={lab} x={padL + (i / 3) * (W - padL - padR)} y={H - 6} fontSize="8.5" textAnchor={i === 3 ? "end" : i === 0 ? "start" : "middle"} fill="#a5a49d" fontFamily="JetBrains Mono, monospace">{lab}</text>
                    ))}
                  </svg>
                </div>
              </div>

              {/* rate limits + keys */}
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border border-[var(--color-line)] bg-white p-4">
                  <h2 className="text-[13px] font-medium">Rate limits</h2>
                  <p className="mt-0.5 text-[11px] text-[var(--color-faint)]">current / limit (per 1k)</p>
                  <div className="mt-3 space-y-3">
                    {LIMITS.map(([model, kind, cur, lim, tone], i) => {
                      const pct = (cur / lim) * 100
                      const hot = pct > 80
                      return (
                        <div key={i}>
                          <div className="mb-1 flex items-baseline justify-between text-[11.5px]">
                            <span className="font-mono">{model} <span className="text-[var(--color-faint)]">{kind}</span></span>
                            <span className="font-mono" style={{ color: hot ? "#a81a44" : "var(--color-muted)" }}>{cur}k / {lim}k</span>
                          </div>
                          <div className="h-[6px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                            <div className="h-full rounded-full" style={{ width: `${pct}%`, background: hot ? "#cf2055" : tone }} />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                  <div className="px-4 py-3">
                    <h2 className="text-[13px] font-medium">Top API keys</h2>
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

            {/* models table */}
            <div className="mt-4 overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
              <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                <h2 className="text-[13px] font-medium">Cost by model</h2>
                <span className="ml-auto text-[11.5px] text-[var(--color-faint)]">click a model for details</span>
              </div>
              <div className="scroll-thin overflow-x-auto">
                <table className="w-full min-w-[680px]">
                  <thead>
                    <tr className="border-b border-[var(--color-line-2)]">
                      {["Model", "Requests", "Input tokens", "Output tokens", "Cost", "Share"].map((h) => (
                        <th key={h} className="px-3 py-2.5 text-left text-[10.5px] font-medium tracking-wide text-[var(--color-faint)] first:pl-4">{h.toUpperCase()}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {MODELS.map((m) => (
                      <tr key={m.key} className="group border-b border-[var(--color-line-2)] last:border-0 hover:bg-[var(--color-sunk)]">
                        <td className="p-0">
                          <Link href={`/models/${m.key}`} className="flex items-center gap-2 py-2.5 pl-4 pr-3 font-mono text-[12.5px] font-medium">
                            <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: m.color }} /> {m.key}
                            <Icon name="arrow" className="h-3.5 w-3.5 text-[var(--color-faint)] opacity-0 transition-opacity group-hover:opacity-100" />
                          </Link>
                        </td>
                        <td className="px-3 py-2.5 font-mono text-[12px] text-[var(--color-muted)]">{m.req}</td>
                        <td className="px-3 py-2.5 font-mono text-[12px] text-[var(--color-muted)]">{m.tin}</td>
                        <td className="px-3 py-2.5 font-mono text-[12px] text-[var(--color-muted)]">{m.tout}</td>
                        <td className="px-3 py-2.5 font-mono text-[12.5px] font-medium">${m.cost.toLocaleString()}</td>
                        <td className="px-3 py-2.5">
                          <div className="flex items-center gap-2">
                            <span className="h-[6px] w-[90px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                              <span className="block h-full rounded-full" style={{ width: `${(m.cost / TOTAL_COST) * 100}%`, background: m.color }} />
                            </span>
                            <span className="font-mono text-[11px] text-[var(--color-faint)]">{Math.round((m.cost / TOTAL_COST) * 100)}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
