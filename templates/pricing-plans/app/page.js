"use client"

import { Fragment, useMemo, useState } from "react"

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    monthly: 0,
    yearly: 0,
    blurb: "For trying the thing out properly, not for three days.",
    cta: "Start free",
    seatsIncluded: 1,
    perSeat: 0,
    limits: "5,000 events / month",
    features: ["1 project", "5,000 events per month", "7-day retention", "Community support"],
  },
  {
    id: "team",
    name: "Team",
    monthly: 29,
    yearly: 24,
    blurb: "The plan most teams stay on for years.",
    cta: "Start 14-day trial",
    featured: true,
    seatsIncluded: 5,
    perSeat: 8,
    limits: "250,000 events / month",
    features: [
      "Unlimited projects",
      "250,000 events per month",
      "90-day retention",
      "Slack and PagerDuty alerts",
      "SSO via Google and Okta",
      "Email support, next business day",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    monthly: 99,
    yearly: 82,
    blurb: "When the bill stops being the interesting number.",
    cta: "Start 14-day trial",
    seatsIncluded: 20,
    perSeat: 6,
    limits: "2M events / month",
    features: [
      "Everything in Team",
      "2,000,000 events per month",
      "1-year retention",
      "SCIM provisioning and audit log",
      "Custom data residency",
      "Shared Slack channel",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthly: null,
    yearly: null,
    blurb: "Procurement, DPAs, and a name you can email at 2am.",
    cta: "Talk to sales",
    seatsIncluded: null,
    perSeat: 0,
    limits: "Unmetered",
    features: [
      "Everything in Scale",
      "Unmetered events",
      "Custom retention",
      "Self-hosted or VPC deployment",
      "99.99% uptime SLA",
      "Named support engineer",
    ],
  },
]

const MATRIX = [
  {
    group: "Usage",
    rows: [
      ["Projects", "1", "Unlimited", "Unlimited", "Unlimited"],
      ["Events per month", "5,000", "250,000", "2,000,000", "Unmetered"],
      ["Data retention", "7 days", "90 days", "1 year", "Custom"],
      ["Seats included", "1", "5", "20", "Custom"],
    ],
  },
  {
    group: "Collaboration",
    rows: [
      ["Shared dashboards", true, true, true, true],
      ["Slack & PagerDuty alerts", false, true, true, true],
      ["Scheduled reports", false, true, true, true],
      ["Shared Slack channel", false, false, true, true],
    ],
  },
  {
    group: "Security & compliance",
    rows: [
      ["SSO (Google, Okta)", false, true, true, true],
      ["SCIM provisioning", false, false, true, true],
      ["Audit log", false, false, true, true],
      ["Custom data residency", false, false, true, true],
      ["Self-hosted deployment", false, false, false, true],
      ["Signed DPA and BAA", false, false, true, true],
    ],
  },
  {
    group: "Support",
    rows: [
      ["Community forum", true, true, true, true],
      ["Email support", false, "Next business day", "4 hours", "1 hour"],
      ["Uptime SLA", false, false, "99.9%", "99.99%"],
      ["Named support engineer", false, false, false, true],
    ],
  },
]

const FAQ = [
  ["What counts as an event?", "One ingested record — a page view, a log line, a span. Retries and dropped payloads are not counted, and neither are events rejected by your own filters."],
  ["What happens if I go over?", "Nothing breaks. We keep ingesting and bill the overage at $0.40 per thousand events, then email you. You can set a hard cap in settings if you would rather be throttled than charged."],
  ["Can I change plans mid-cycle?", "Yes, in both directions. Upgrades are prorated immediately; downgrades take effect at the next renewal so you keep what you already paid for."],
  ["Do you offer discounts?", "Yearly billing is roughly two months free. We also discount 50% for registered non-profits and accredited academic research groups — just email us from an institutional address."],
]

function Check({ on }) {
  return on ? (
    <svg viewBox="0 0 24 24" className="mx-auto h-4 w-4 text-[var(--color-mineral)]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 13 4 4L19 7" />
    </svg>
  ) : (
    <span className="mx-auto block h-px w-3 bg-[var(--color-line)]" />
  )
}

export default function Pricing() {
  const [yearly, setYearly] = useState(true)
  const [seats, setSeats] = useState(12)
  const [events, setEvents] = useState(400)
  const [openFaq, setOpenFaq] = useState(0)

  const recommended = useMemo(() => {
    if (events <= 5 && seats <= 1) return PLANS[0]
    if (events <= 250 && seats <= 40) return PLANS[1]
    if (events <= 2000) return PLANS[2]
    return PLANS[3]
  }, [events, seats])

  const estimate = useMemo(() => {
    const p = recommended
    if (p.monthly === null) return null
    const rate = yearly ? p.yearly : p.monthly
    const extraSeats = Math.max(0, seats - (p.seatsIncluded ?? 0))
    return rate + extraSeats * p.perSeat
  }, [recommended, seats, yearly])

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <header className="border-b border-[var(--color-line)]">
        <div className="mx-auto flex h-[68px] max-w-[1180px] items-center gap-8 px-6">
          <a href="#" className="flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
              <rect width="32" height="32" rx="9" fill="#141413" />
              <path d="M8 22V10h3v9h7v3H8Z" fill="#c96442" />
              <circle cx="22" cy="12" r="3" fill="#629987" />
            </svg>
            <span className="font-serif text-[19px] font-medium tracking-[-0.012em]">Ledgerline</span>
          </a>
          <nav className="ml-auto hidden items-center gap-6 md:flex">
            {["Product", "Docs", "Customers", "Pricing"].map((n) => (
              <a key={n} href="#" className="text-[14px] text-[var(--color-muted)] hover:text-[var(--color-ink)]">
                {n}
              </a>
            ))}
          </nav>
          <a href="#" className="rounded-full bg-[var(--color-ink)] px-4 py-2 text-[13.5px] font-medium text-white hover:bg-black">
            Start free
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-[1180px] px-6 pt-16 pb-10 text-center">
        <span className="eyebrow">Pricing</span>
        <h1 className="display mx-auto mt-4 max-w-[17ch] text-[44px] sm:text-[56px]">
          Pay for what you ingest, not what you might
        </h1>
        <p className="mx-auto mt-5 max-w-[58ch] text-[16.5px] leading-[1.7] text-[var(--color-muted)]">
          Every plan includes the full product. The paid tiers buy you retention, seats, and someone to email — not
          features held back to force an upgrade.
        </p>

        <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-[var(--color-line)] bg-white p-1">
          {[
            ["Monthly", false],
            ["Yearly", true],
          ].map(([label, val]) => (
            <button
              key={label}
              onClick={() => setYearly(val)}
              className={`rounded-full px-4 py-1.5 text-[13.5px] font-medium transition-colors ${
                yearly === val ? "bg-[var(--color-ink)] text-white" : "text-[var(--color-muted)]"
              }`}
            >
              {label}
              {val && (
                <span className={`ml-1.5 text-[11.5px] ${yearly ? "text-white/60" : "text-[var(--color-clay)]"}`}>
                  −17%
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-6 pb-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => (
            <div
              key={p.id}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                p.featured
                  ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                  : "border-[var(--color-line)] bg-white"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-[var(--color-clay)] px-2.5 py-1 text-[11px] font-medium text-white">
                  Most popular
                </span>
              )}
              <h2 className="font-serif text-[21px] font-medium tracking-[-0.012em]">{p.name}</h2>
              <p className={`mt-1 min-h-[40px] text-[13px] leading-[1.55] ${p.featured ? "text-white/70" : "text-[var(--color-muted)]"}`}>
                {p.blurb}
              </p>

              <div className="mt-5 flex items-baseline gap-1.5">
                {p.monthly === null ? (
                  <span className="font-serif text-[32px] font-medium tracking-[-0.02em]">Custom</span>
                ) : (
                  <>
                    <span className="font-serif text-[38px] font-medium tracking-[-0.02em]">
                      ${yearly ? p.yearly : p.monthly}
                    </span>
                    <span className={`text-[13px] ${p.featured ? "text-white/60" : "text-[var(--color-faint)]"}`}>
                      / month
                    </span>
                  </>
                )}
              </div>
              {p.perSeat > 0 && (
                <p className={`mt-1 text-[11.5px] ${p.featured ? "text-white/50" : "text-[var(--color-faint)]"}`}>
                  ${p.perSeat} per extra seat · {p.seatsIncluded} included
                </p>
              )}

              <a
                href="#"
                className={`mt-5 rounded-full py-2.5 text-center text-[14px] font-medium transition-colors ${
                  p.featured
                    ? "bg-[var(--color-clay)] text-white hover:bg-[var(--color-clay-2)]"
                    : "border border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white"
                }`}
              >
                {p.cta}
              </a>

              <ul className="mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[13.5px] leading-[1.5]">
                    <svg
                      viewBox="0 0 24 24"
                      className="mt-[3px] h-3.5 w-3.5 shrink-0"
                      fill="none"
                      stroke={p.featured ? "#c96442" : "#629987"}
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                    <span className={p.featured ? "text-white/85" : "text-[var(--color-ink-3)]"}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* calculator */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-ivory-2)]">
        <div className="mx-auto max-w-[880px] px-6 py-16">
          <div className="text-center">
            <span className="eyebrow">Estimate</span>
            <h2 className="display mt-3 text-[32px] sm:text-[38px]">What would this cost us?</h2>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-[minmax(0,1fr)_260px]">
            <div className="space-y-7">
              <div>
                <div className="flex items-baseline justify-between">
                  <label className="text-[14px] font-medium">Seats</label>
                  <span className="font-mono text-[13px] text-[var(--color-muted)]">{seats}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={80}
                  value={seats}
                  onChange={(e) => setSeats(Number(e.target.value))}
                  className="mt-2 h-1 w-full cursor-pointer appearance-none rounded-full bg-[var(--color-line)] accent-[var(--color-clay)]"
                />
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <label className="text-[14px] font-medium">Events per month</label>
                  <span className="font-mono text-[13px] text-[var(--color-muted)]">
                    {events >= 1000 ? `${(events / 1000).toFixed(1)}M` : `${events}k`}
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={3000}
                  step={5}
                  value={events}
                  onChange={(e) => setEvents(Number(e.target.value))}
                  className="mt-2 h-1 w-full cursor-pointer appearance-none rounded-full bg-[var(--color-line)] accent-[var(--color-clay)]"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--color-line)] bg-white p-5 text-center">
              <p className="eyebrow">Recommended</p>
              <p className="mt-2 font-serif text-[24px] font-medium tracking-[-0.014em]">{recommended.name}</p>
              {estimate === null ? (
                <p className="mt-3 text-[14px] text-[var(--color-muted)]">Let&apos;s scope it together.</p>
              ) : (
                <>
                  <p className="mt-3 font-serif text-[36px] font-medium tracking-[-0.02em]">${estimate}</p>
                  <p className="text-[12px] text-[var(--color-faint)]">
                    per month, billed {yearly ? "yearly" : "monthly"}
                  </p>
                </>
              )}
              <a
                href="#"
                className="mt-5 block rounded-full bg-[var(--color-clay)] py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[var(--color-clay-2)]"
              >
                {recommended.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* comparison */}
      <section className="mx-auto max-w-[1180px] px-6 py-16">
        <div className="text-center">
          <span className="eyebrow">Compare</span>
          <h2 className="display mt-3 text-[32px] sm:text-[38px]">Everything, side by side</h2>
        </div>

        <div className="scroll-thin mt-10 overflow-x-auto rounded-2xl border border-[var(--color-line)] bg-white">
          <table className="w-full min-w-[760px]">
            <thead>
              <tr className="border-b border-[var(--color-line)]">
                <th className="px-5 py-3.5 text-left text-[11.5px] font-medium tracking-wide text-[var(--color-faint)]">
                  FEATURE
                </th>
                {PLANS.map((p) => (
                  <th key={p.id} className="px-4 py-3.5 text-center text-[13.5px] font-medium">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MATRIX.map((g) => (
                <Fragment key={g.group}>
                  <tr className="bg-[var(--color-ivory-2)]">
                    <td
                      colSpan={5}
                      className="px-5 py-2 text-[11.5px] font-medium tracking-wide text-[var(--color-faint)]"
                    >
                      {g.group.toUpperCase()}
                    </td>
                  </tr>
                  {g.rows.map((row) => (
                    <tr key={row[0]} className="border-b border-[var(--color-line-2)] last:border-0">
                      <td className="px-5 py-3 text-[13.5px] text-[var(--color-ink-3)]">{row[0]}</td>
                      {row.slice(1).map((cell, i) => (
                        <td key={i} className="px-4 py-3 text-center text-[13px] text-[var(--color-muted)]">
                          {typeof cell === "boolean" ? <Check on={cell} /> : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* faq */}
      <section className="mx-auto max-w-[760px] px-6 pb-20">
        <div className="text-center">
          <span className="eyebrow">Questions</span>
          <h2 className="display mt-3 text-[32px] sm:text-[38px]">Before you commit</h2>
        </div>
        <div className="mt-10 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {FAQ.map(([q, a], i) => (
            <div key={q}>
              <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="flex w-full items-center gap-4 py-5 text-left">
                <span className="flex-1 font-serif text-[18px] font-medium tracking-[-0.008em]">{q}</span>
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[var(--color-line)] transition-transform ${
                    openFaq === i ? "rotate-45 border-[var(--color-clay)] text-[var(--color-clay)]" : ""
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              {openFaq === i && (
                <p className="-mt-1 max-w-[64ch] pb-6 text-[15px] leading-[1.75] text-[var(--color-muted)]">{a}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-[var(--color-ink)] px-8 py-12 text-center text-white">
          <h3 className="display text-[28px]">Still not sure which one?</h3>
          <p className="mx-auto mt-3 max-w-[46ch] text-[15px] leading-[1.7] text-white/70">
            Start on Team. If the numbers say Scale after a month, we will move you and credit the difference.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#" className="rounded-full bg-[var(--color-clay)] px-6 py-2.5 text-[14.5px] font-medium hover:bg-[var(--color-clay-2)]">
              Start 14-day trial
            </a>
            <a href="#" className="rounded-full border border-white/25 px-6 py-2.5 text-[14.5px] font-medium hover:bg-white/10">
              Talk to sales
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3 px-6 py-8 text-[12.5px] text-[var(--color-faint)]">
          <span>© 2026 Ledgerline</span>
          <span className="flex gap-5">
            {["Privacy", "Terms", "Security", "Status"].map((l) => (
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
