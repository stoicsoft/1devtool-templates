export function Icon({ name, className = "h-4 w-4", style }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    logo: <path d="M9 20a3 3 0 0 0 6 0M9 20V9a3 3 0 0 1 6 0M17 12a3 3 0 0 1 6 0v11" />,
    check: <path d="m5 13 4 4L19 7" />,
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
    api: <path d="M8 3 3 8l5 5M16 3l5 5-5 5M14 3l-4 18" />,
    seat: (
      <>
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5 20a7 7 0 0 1 14 0" />
      </>
    ),
    disk: (
      <>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
      </>
    ),
    arrow: <path d="M5 12h14m0 0-6-6m6 6-6 6" />,
    spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />,
    back: <path d="M19 12H5m0 0 6 6m-6-6 6-6" />,
    minus: <path d="M5 12h14" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

export const PLANS = [
  { id: "starter", name: "Starter", base: 0, inc: { calls: 20000, seats: 3, gb: 5 }, tone: "#629987",
    tagline: "For side projects and evaluation.",
    features: ["Community support", "1 project", "7-day log retention"],
    detailFeatures: [
      ["Core", ["1 project", "20k API calls / mo included", "3 team seats", "5 GB storage", "7-day log retention"]],
      ["Support", ["Community forum", "Docs & guides"]],
      ["Security", ["TLS everywhere", "SOC 2 report on request"]],
    ] },
  { id: "growth", name: "Growth", base: 49, inc: { calls: 500000, seats: 10, gb: 100 }, tone: "#c96442",
    tagline: "For growing teams shipping to production.",
    features: ["Email support", "Unlimited projects", "30-day retention", "Usage alerts"],
    detailFeatures: [
      ["Core", ["Unlimited projects", "500k API calls / mo included", "10 team seats", "100 GB storage", "30-day log retention", "Usage alerts & budgets"]],
      ["Support", ["Email support · 1 business day", "Onboarding guide"]],
      ["Security", ["SAML SSO add-on", "Role-based access", "Audit trail (30 days)"]],
    ] },
  { id: "scale", name: "Scale", base: 199, inc: { calls: 3000000, seats: 40, gb: 1000 }, tone: "#827dbd",
    tagline: "For companies that need scale and controls.",
    features: ["Priority support + SLA", "SSO / SAML", "1-year retention", "Audit log", "Dedicated region"],
    detailFeatures: [
      ["Core", ["Everything in Growth", "3M API calls / mo included", "40 team seats", "1 TB storage", "1-year log retention"]],
      ["Support", ["Priority support + 99.9% SLA", "Dedicated success manager", "Slack Connect channel"]],
      ["Security", ["SSO / SAML included", "SCIM provisioning", "Full audit log", "Dedicated region", "Custom DPA"]],
    ] },
]

export const RATE = { calls: 1.5 / 10000, seats: 9, gb: 0.4 } // overage rates

export function costFor(plan, u) {
  const over =
    Math.max(0, u.calls - plan.inc.calls) * RATE.calls +
    Math.max(0, u.seats - plan.inc.seats) * RATE.seats +
    Math.max(0, u.gb - plan.inc.gb) * RATE.gb
  return plan.base + over
}

export const fmt = (n) => (n >= 1000000 ? `${(n / 1000000).toFixed(n % 1000000 ? 1 : 0)}M` : n >= 1000 ? `${Math.round(n / 1000)}k` : `${n}`)

export const FAQ = [
  ["When am I charged for overages?", "Usage above your plan's included amounts is metered and added to your next monthly invoice. You can set budget alerts to avoid surprises."],
  ["Can I switch plans later?", "Yes — upgrades apply immediately and are prorated. Downgrades take effect at your next renewal."],
  ["Do you offer annual billing?", "Annual billing saves 20% versus paying monthly and is invoiced once for the year."],
]

export function Nav() {
  return (
    <nav className="mx-auto flex h-[60px] max-w-[1120px] items-center gap-2 px-6">
      <a href="/" className="flex items-center gap-2">
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
          <rect width="32" height="32" rx="8" fill="#141413" />
          <path d="M9 20a3 3 0 0 0 6 0M9 20V9a3 3 0 0 1 6 0M17 12a3 3 0 0 1 6 0v11" fill="none" stroke="#c96442" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="9" r="1.4" fill="#629987" />
        </svg>
        <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Relay</span>
      </a>
      <div className="ml-6 hidden items-center gap-6 text-[13.5px] text-[var(--color-ink-2)] md:flex">
        {["Product", "Docs", "Customers", "Pricing"].map((l) => (
          <a key={l} href="/" className={`hover:text-[var(--color-ink)] ${l === "Pricing" ? "font-medium text-[var(--color-ink)]" : ""}`}>{l}</a>
        ))}
      </div>
      <div className="ml-auto flex items-center gap-2.5">
        <a className="hidden text-[13.5px] font-medium text-[var(--color-ink-2)] hover:text-[var(--color-ink)] sm:inline">Sign in</a>
        <a className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-ink)] px-3 text-[12.5px] font-medium text-white hover:bg-black">
          Start free <Icon name="arrow" className="h-3.5 w-3.5" />
        </a>
      </div>
    </nav>
  )
}
