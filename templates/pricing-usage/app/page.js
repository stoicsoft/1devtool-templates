"use client"

import { useState } from "react"
import Link from "next/link"
import { Icon, PLANS, costFor, fmt, Nav } from "./data"

export default function Pricing() {
  const [annual, setAnnual] = useState(true)
  const [u, setU] = useState({ calls: 900000, seats: 14, gb: 240 })

  const priced = PLANS.map((p) => ({ ...p, cost: costFor(p, u) }))
  const recommended = priced.reduce((a, b) => (b.cost < a.cost ? b : a))
  const disc = annual ? 0.8 : 1

  const SLIDERS = [
    { key: "calls", label: "Monthly API calls", icon: "api", min: 0, max: 3000000, step: 50000 },
    { key: "seats", label: "Team seats", icon: "seat", min: 1, max: 60, step: 1 },
    { key: "gb", label: "Storage (GB)", icon: "disk", min: 0, max: 2000, step: 20 },
  ]

  return (
    <div className="min-h-screen w-screen bg-[var(--color-page)] text-[var(--color-ink)]">
      <Nav />

      <div className="mx-auto max-w-[1120px] px-6 pb-10">
        {/* heading */}
        <div className="pt-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-white px-3 py-1 text-[12px] font-medium text-[var(--color-muted)]">
            <Icon name="bolt" className="h-3.5 w-3.5 text-[var(--color-clay)]" /> Pay only for what you use
          </span>
          <h1 className="mt-4 font-serif text-[36px] font-medium leading-[1.1] tracking-[-0.02em]">Pricing that scales with you</h1>
          <p className="mx-auto mt-2.5 max-w-[520px] text-[14.5px] leading-[1.6] text-[var(--color-muted)]">
            Move the sliders to estimate your monthly bill. We automatically pick the cheapest plan for your usage.
          </p>
          <div className="mt-5 inline-flex items-center rounded-full border border-[var(--color-line)] bg-white p-1">
            {[["monthly", "Monthly"], ["annual", "Annual −20%"]].map(([k, l]) => (
              <button
                key={k}
                onClick={() => setAnnual(k === "annual")}
                className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-colors ${(k === "annual") === annual ? "bg-[var(--color-ink)] text-white" : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* calculator */}
        <div className="mt-7 grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="rounded-2xl border border-[var(--color-line)] bg-white p-5">
            <h2 className="text-[13.5px] font-medium">Estimate your usage</h2>
            <div className="mt-4 space-y-5">
              {SLIDERS.map((sl) => (
                <div key={sl.key}>
                  <div className="mb-2 flex items-center gap-2">
                    <Icon name={sl.icon} className="h-4 w-4 text-[var(--color-faint)]" />
                    <span className="text-[13px]">{sl.label}</span>
                    <span className="ml-auto rounded-md bg-[var(--color-sunk)] px-2 py-0.5 font-mono text-[12.5px] font-medium">
                      {sl.key === "calls" ? fmt(u.calls) : sl.key === "gb" ? `${fmt(u.gb)} GB` : u.seats}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={sl.min}
                    max={sl.max}
                    step={sl.step}
                    value={u[sl.key]}
                    onChange={(e) => setU((s) => ({ ...s, [sl.key]: Number(e.target.value) }))}
                    className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[var(--color-sunk)] accent-[#c96442]"
                    style={{ accentColor: "#c96442" }}
                  />
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl bg-[var(--color-ivory-2)] p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11.5px] text-[var(--color-muted)]">Recommended plan</p>
                  <p className="font-serif text-[18px] font-medium" style={{ color: recommended.tone }}>{recommended.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11.5px] text-[var(--color-muted)]">Estimated {annual ? "monthly (billed yearly)" : "monthly"}</p>
                  <p className="font-serif text-[30px] font-medium tracking-[-0.01em]">
                    ${(recommended.cost * disc).toFixed(0)}
                    <span className="text-[15px] text-[var(--color-faint)]">/mo</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* breakdown */}
          <div className="rounded-2xl border border-[var(--color-line)] bg-white p-5">
            <h2 className="text-[13.5px] font-medium">Cost by plan</h2>
            <p className="mt-0.5 text-[11.5px] text-[var(--color-muted)]">For your selected usage</p>
            <div className="mt-3.5 space-y-2">
              {priced.map((p) => {
                const rec = p.id === recommended.id
                return (
                  <Link
                    key={p.id}
                    href={`/plans/${p.id}`}
                    className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 ${rec ? "border-transparent" : "border-[var(--color-line)] hover:border-[var(--color-faint)]"}`}
                    style={rec ? { background: `${p.tone}12`, boxShadow: `inset 0 0 0 1.5px ${p.tone}` } : undefined}
                  >
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.tone }} />
                    <span className="text-[13px] font-medium">{p.name}</span>
                    {rec && <span className="rounded-full bg-white px-1.5 py-[1px] text-[9.5px] font-semibold" style={{ color: p.tone }}>BEST</span>}
                    <span className="ml-auto font-mono text-[14px] font-medium">${(p.cost * disc).toFixed(0)}</span>
                  </Link>
                )
              })}
            </div>
            <p className="mt-3 text-[11px] leading-[1.55] text-[var(--color-faint)]">
              Overage billed at $1.50 / 10k calls, $9 / seat, $0.40 / GB beyond plan includes.
            </p>
          </div>
        </div>

        {/* plan cards */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {priced.map((p) => {
            const rec = p.id === recommended.id
            return (
              <Link
                key={p.id}
                href={`/plans/${p.id}`}
                className={`relative block rounded-2xl border bg-white p-5 transition-shadow ${rec ? "border-transparent" : "border-[var(--color-line)] hover:shadow-[0_6px_20px_-12px_rgba(20,20,19,0.18)]"}`}
                style={rec ? { boxShadow: `0 0 0 1.5px ${p.tone}, 0 10px 26px rgba(20,20,19,0.08)` } : undefined}
              >
                {rec && (
                  <span className="absolute -top-2.5 left-5 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold text-white" style={{ background: p.tone }}>
                    <Icon name="spark" className="h-3 w-3" /> Recommended
                  </span>
                )}
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.tone }} />
                  <h3 className="text-[15px] font-medium">{p.name}</h3>
                </div>
                <p className="mt-3 font-serif text-[30px] font-medium tracking-[-0.01em]">
                  ${(p.base * disc).toFixed(0)}<span className="text-[14px] text-[var(--color-faint)]">/mo base</span>
                </p>
                <p className="mt-1 text-[11.5px] text-[var(--color-muted)]">
                  Includes {fmt(p.inc.calls)} calls · {p.inc.seats} seats · {fmt(p.inc.gb)} GB
                </p>
                <span
                  className={`mt-4 flex h-9 w-full items-center justify-center rounded-lg text-[13px] font-medium ${rec ? "text-white" : "border border-[var(--color-line)] text-[var(--color-ink)]"}`}
                  style={rec ? { background: p.tone } : undefined}
                >
                  {p.base === 0 ? "Start free" : `Choose ${p.name}`}
                </span>
                <ul className="mt-4 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[12.5px] text-[var(--color-ink-2)]">
                      <Icon name="check" className="h-3.5 w-3.5 shrink-0" style={{ color: p.tone }} /> {f}
                    </li>
                  ))}
                </ul>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
