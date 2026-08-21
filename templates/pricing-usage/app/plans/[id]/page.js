"use client"

import { use } from "react"
import Link from "next/link"
import { Icon, PLANS, fmt, FAQ, Nav } from "../../data"

export default function PlanDetail({ params }) {
  const { id } = use(params)
  const p = PLANS.find((x) => x.id === id) || PLANS[1]
  const others = PLANS.filter((x) => x.id !== p.id)

  const INCLUDED = [
    ["Monthly API calls", fmt(p.inc.calls), "api", "$1.50 / 10k over"],
    ["Team seats", `${p.inc.seats}`, "seat", "$9 / seat over"],
    ["Storage", `${fmt(p.inc.gb)} GB`, "disk", "$0.40 / GB over"],
  ]

  return (
    <div className="min-h-screen w-screen bg-[var(--color-page)] text-[var(--color-ink)]">
      <Nav />

      <div className="mx-auto max-w-[1000px] px-6 pb-12">
        <Link href="/" className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)]">
          <Icon name="back" className="h-4 w-4" /> All plans
        </Link>

        {/* hero */}
        <div className="mt-4 grid gap-6 rounded-2xl border border-[var(--color-line)] bg-white p-7 md:grid-cols-[minmax(0,1fr)_260px] md:items-center"
          style={{ boxShadow: `0 0 0 1.5px ${p.tone}22` }}>
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11.5px] font-medium" style={{ background: `${p.tone}18`, color: p.tone }}>
              <span className="h-2 w-2 rounded-full" style={{ background: p.tone }} /> {p.name} plan
            </span>
            <h1 className="mt-3 font-serif text-[34px] font-medium leading-[1.1] tracking-[-0.02em]">{p.name}</h1>
            <p className="mt-2 max-w-[440px] text-[14.5px] leading-[1.6] text-[var(--color-muted)]">{p.tagline}</p>
          </div>
          <div className="rounded-xl bg-[var(--color-ivory-2)] p-5 text-center">
            <p className="font-serif text-[38px] font-medium tracking-[-0.02em]">
              ${p.base}<span className="text-[16px] text-[var(--color-faint)]">/mo</span>
            </p>
            <p className="text-[11.5px] text-[var(--color-muted)]">base · billed annually (−20%)</p>
            <button className="mt-3 h-10 w-full rounded-lg text-[13.5px] font-medium text-white" style={{ background: p.tone }}>
              {p.base === 0 ? "Start free" : `Choose ${p.name}`}
            </button>
            <p className="mt-2 text-[11px] text-[var(--color-faint)]">No credit card required to start.</p>
          </div>
        </div>

        {/* included usage */}
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {INCLUDED.map(([label, val, icon, over]) => (
            <div key={label} className="rounded-2xl border border-[var(--color-line)] bg-white p-5">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg" style={{ background: `${p.tone}14` }}>
                  <Icon name={icon} className="h-4 w-4" style={{ color: p.tone }} />
                </span>
                <span className="text-[12px] text-[var(--color-muted)]">{label}</span>
              </div>
              <p className="mt-2.5 font-serif text-[24px] font-medium tracking-[-0.01em]">{val}<span className="text-[13px] text-[var(--color-faint)]"> included</span></p>
              <p className="mt-1 text-[11px] text-[var(--color-faint)]">{over}</p>
            </div>
          ))}
        </div>

        {/* features */}
        <div className="mt-4 rounded-2xl border border-[var(--color-line)] bg-white p-6">
          <h2 className="font-serif text-[18px] font-medium tracking-[-0.01em]">What's included</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            {p.detailFeatures.map(([group, items]) => (
              <div key={group}>
                <p className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">{group.toUpperCase()}</p>
                <ul className="mt-2.5 space-y-2">
                  {items.map((f) => (
                    <li key={f} className="flex gap-2 text-[12.5px] leading-[1.5] text-[var(--color-ink-2)]">
                      <Icon name="check" className="mt-[2px] h-3.5 w-3.5 shrink-0" style={{ color: p.tone }} /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* faq + other plans */}
        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="rounded-2xl border border-[var(--color-line)] bg-white p-6">
            <h2 className="font-serif text-[18px] font-medium tracking-[-0.01em]">Questions</h2>
            <div className="mt-3 divide-y divide-[var(--color-line-2)]">
              {FAQ.map(([q, a]) => (
                <div key={q} className="py-3">
                  <p className="text-[13.5px] font-medium">{q}</p>
                  <p className="mt-1 text-[12.5px] leading-[1.6] text-[var(--color-muted)]">{a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--color-line)] bg-white p-5">
            <p className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">OTHER PLANS</p>
            <div className="mt-2.5 space-y-2">
              {others.map((o) => (
                <Link key={o.id} href={`/plans/${o.id}`} className="flex items-center gap-2.5 rounded-xl border border-[var(--color-line)] px-3 py-2.5 hover:border-[var(--color-faint)]">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: o.tone }} />
                  <span className="text-[13px] font-medium">{o.name}</span>
                  <span className="ml-auto font-mono text-[12.5px] text-[var(--color-muted)]">${o.base}/mo</span>
                  <Icon name="arrow" className="h-3.5 w-3.5 text-[var(--color-faint)]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
