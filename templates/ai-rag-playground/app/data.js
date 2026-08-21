export function Icon({ name, className = "h-4 w-4", style }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    play: <path d="M7 5v14l11-7L7 5Z" />,
    index: <path d="M12 3 3 8l9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" />,
    doc: (
      <>
        <path d="M6 2h8l4 4v16H6z" />
        <path d="M14 2v4h4M9 12h6M9 16h6" />
      </>
    ),
    chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    cog: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.2-3.2" />
      </>
    ),
    spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />,
    check: <path d="m5 13 4 4L19 7" />,
    copy: (
      <>
        <rect x="9" y="9" width="12" height="12" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
      </>
    ),
    up: <path d="m6 15 6-6 6 6" />,
    down: <path d="m6 9 6 6 6-6" />,
    slider: <path d="M4 8h16M4 16h16M9 5v6M15 13v6" />,
    quote: <path d="M7 7H4v6h6V7L7 12M17 7h-3v6h6V7l-3 5" />,
    back: <path d="M19 12H5m0 0 6 6m-6-6 6-6" />,
    arrow: <path d="M5 12h14m0 0-6-6m6 6-6 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

export const ANSWER = [
  { t: "text", v: "Refunds on annual plans are handled as a prorated credit rather than a cash return. When a customer cancels mid-term, the unused portion of the year is calculated to the day and issued as account credit" },
  { t: "cite", n: 1 },
  { t: "text", v: ". Within the first 14 days of a new annual purchase, the plan qualifies for a full cash refund under the money-back guarantee" },
  { t: "cite", n: 2 },
  { t: "text", v: ". Proration uses the daily rate of the plan tier at time of purchase, and any discounts applied to the original invoice are carried through to the credit" },
  { t: "cite", n: 3 },
  { t: "text", v: ". Credits never expire and are applied automatically to the next renewal or upgrade." },
]

export const CHUNKS = [
  { rank: 1, score: 0.912, doc: "billing-policy.md", slug: "billing-policy", loc: "§4.2 Cancellations", cited: true,
    text: "For annual subscriptions cancelled after the guarantee window, the remaining unused days are refunded as non-expiring account credit, computed to the day." },
  { rank: 2, score: 0.884, doc: "refunds-faq.md", slug: "refunds-faq", loc: "Money-back guarantee", cited: true,
    text: "New annual purchases are eligible for a full refund to the original payment method within 14 days, no questions asked." },
  { rank: 3, score: 0.861, doc: "billing-policy.md", slug: "billing-policy", loc: "§4.5 Proration", cited: true,
    text: "Proration is based on the daily rate of the purchased tier. Promotional discounts on the original invoice are preserved in the resulting credit." },
  { rank: 4, score: 0.803, doc: "pricing.md", slug: "pricing", loc: "Annual vs monthly", cited: false,
    text: "Annual plans are billed once for twelve months at a ~17% discount relative to paying month to month." },
  { rank: 5, score: 0.774, doc: "support-macros.md", slug: "support-macros", loc: "Refund reply", cited: false,
    text: "Template: \"I've issued a prorated credit of {amount} to your account — it'll apply automatically on your next invoice.\"" },
  { rank: 6, score: 0.719, doc: "billing-policy.md", slug: "billing-policy", loc: "§4.8 Chargebacks", cited: false,
    text: "Chargebacks initiated before contacting support may suspend the workspace until the dispute is resolved." },
]

export const DOCS = {
  "billing-policy": {
    file: "billing-policy.md", title: "Billing Policy", chunks: 42, tokens: "6.1k", updated: "12 days ago",
    sections: [
      { h: "§4.1 Overview", body: "This document defines how charges, refunds, and credits are applied across monthly and annual subscriptions. It is the source of truth for support and finance." },
      { h: "§4.2 Cancellations", body: "For annual subscriptions cancelled after the guarantee window, the remaining unused days are refunded as non-expiring account credit, computed to the day.", cited: true, loc: "§4.2 Cancellations" },
      { h: "§4.5 Proration", body: "Proration is based on the daily rate of the purchased tier. Promotional discounts on the original invoice are preserved in the resulting credit. Upgrades are prorated immediately; downgrades take effect at the next renewal.", cited: true, loc: "§4.5 Proration" },
      { h: "§4.8 Chargebacks", body: "Chargebacks initiated before contacting support may suspend the workspace until the dispute is resolved. Support can pre-empt most disputes by issuing a credit.", cited: false, loc: "§4.8 Chargebacks" },
    ],
  },
  "refunds-faq": {
    file: "refunds-faq.md", title: "Refunds FAQ", chunks: 18, tokens: "2.4k", updated: "5 days ago",
    sections: [
      { h: "Money-back guarantee", body: "New annual purchases are eligible for a full refund to the original payment method within 14 days, no questions asked.", cited: true, loc: "Money-back guarantee" },
      { h: "How long do refunds take?", body: "Cash refunds settle in 5–10 business days. Account credits are available immediately." },
    ],
  },
  "pricing": {
    file: "pricing.md", title: "Pricing", chunks: 24, tokens: "3.0k", updated: "3 weeks ago",
    sections: [
      { h: "Annual vs monthly", body: "Annual plans are billed once for twelve months at a ~17% discount relative to paying month to month.", cited: true, loc: "Annual vs monthly" },
      { h: "Seats", body: "Additional seats are billed at the plan's per-seat rate and prorated for the remainder of the term." },
    ],
  },
  "support-macros": {
    file: "support-macros.md", title: "Support Macros", chunks: 31, tokens: "4.2k", updated: "2 days ago",
    sections: [
      { h: "Refund reply", body: "Template: \"I've issued a prorated credit of {amount} to your account — it'll apply automatically on your next invoice.\"", cited: true, loc: "Refund reply" },
    ],
  },
}

export function Sidebar({ active = "Playground" }) {
  const items = [
    ["Playground", "play"],
    ["Indexes", "index"],
    ["Documents", "doc"],
    ["Evaluations", "chart"],
    ["Settings", "cog"],
  ]
  return (
    <aside className="hidden w-[200px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
      <a href="/" className="flex items-center gap-2 px-3.5 py-3.5">
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
          <rect width="32" height="32" rx="8" fill="#141413" />
          <circle cx="16" cy="10" r="3" fill="none" stroke="#c96442" strokeWidth="2" />
          <path d="M16 13v10M9 20h14" fill="none" stroke="#629987" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 20a7 4 0 0 0 14 0" fill="none" stroke="#629987" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Anchor</span>
      </a>
      <nav className="flex-1 px-2">
        {items.map(([label, icon]) => (
          <a
            key={label}
            href="/"
            className={`mb-[2px] flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-left text-[13.5px] transition-colors ${
              active === label ? "bg-[var(--color-hover)] font-medium" : "text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"
            }`}
          >
            <Icon name={icon} className="h-[17px] w-[17px] text-[var(--color-faint)]" />
            {label}
          </a>
        ))}
      </nav>
      <div className="p-2.5">
        <div className="rounded-lg bg-[var(--color-ivory)] p-2.5">
          <div className="flex items-center gap-1.5">
            <Icon name="index" className="h-3.5 w-3.5 text-[var(--color-clay)]" />
            <p className="font-mono text-[11.5px] font-medium">support-kb</p>
          </div>
          <p className="mt-1 text-[10.5px] text-[var(--color-muted)]">1,284 chunks · 96 docs</p>
          <p className="text-[10.5px] text-[var(--color-faint)]">embed · voyage-3 · 1024d</p>
        </div>
      </div>
    </aside>
  )
}
