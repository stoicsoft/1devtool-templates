export function Icon({ name, className = "h-4 w-4", style }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    pulse: <path d="M3 12h4l2.5 7 4-14 2.5 7H21" />,
    revenue: <path d="M7 21l5-6 4 3 8-9M20 9h4v4" />,
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20a6 6 0 0 1 12 0M16 6a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6" />
      </>
    ),
    layers: <path d="M12 3 3 8l9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" />,
    invoice: (
      <>
        <path d="M6 2h9l4 4v16l-2.5-1.5L14 21l-2.5-1.5L9 21l-2.5-1.5L4 21V4a2 2 0 0 1 2-2Z" />
        <path d="M8 8h6M8 12h8M8 16h5" />
      </>
    ),
    cog: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </>
    ),
    up: <path d="m6 15 6-6 6 6" />,
    down: <path d="m6 9 6 6 6-6" />,
    calendar: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4" />
      </>
    ),
    download: <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />,
    arrow: <path d="M5 12h14m0 0-6-6m6 6-6 6" />,
    back: <path d="M19 12H5m0 0 6 6m-6-6 6-6" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
        <path d="M15 9h4a1 1 0 0 1 1 1v11M8 8h.01M11 8h.01M8 12h.01M11 12h.01M8 16h.01M11 16h.01" />
      </>
    ),
    check: <path d="m5 13 4 4L19 7" />,
    seat: (
      <>
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5 20a7 7 0 0 1 14 0" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
export const NEW = [7.2, 8.1, 6.9, 9.4, 8.8, 10.2, 9.1, 11.4, 10.8, 9.6, 12.1, 11.2]
export const EXP = [3.1, 3.8, 2.9, 4.2, 3.6, 4.8, 4.1, 5.2, 4.6, 4.3, 5.6, 5.1]
export const CON = [1.2, 1.6, 1.1, 1.8, 1.4, 2.0, 1.6, 2.2, 1.9, 1.7, 2.4, 2.1]
export const CHN = [2.8, 3.2, 2.6, 3.4, 3.0, 3.6, 3.1, 3.8, 3.3, 3.5, 4.0, 3.6]

export const C = { new: "#629987", exp: "#827dbd", con: "#c5621b", chn: "#cf2055" }

export const PLANS = [
  ["Enterprise", 71.2, "#c96442"],
  ["Pro", 41.8, "#629987"],
  ["Starter", 15.4, "#827dbd"],
]
export const PLAN_TOTAL = PLANS.reduce((a, [, v]) => a + v, 0)

export const ACCOUNTS = [
  { id: "northwind", name: "Northwind Traders", plan: "Enterprise", mrr: 8.4, delta: 0.6, seats: 48, since: "Mar 2024", health: "healthy", owner: "Dana Lee",
    trend: [5.2, 5.8, 6.1, 6.6, 7.0, 7.2, 7.6, 7.8, 8.0, 8.1, 8.2, 8.4],
    invoices: [["INV-2043", "Dec 1", 8400, "paid"], ["INV-1994", "Nov 1", 8200, "paid"], ["INV-1946", "Oct 1", 8000, "paid"], ["INV-1901", "Sep 1", 8000, "paid"]],
    contacts: [["Priya Nair", "Billing owner", "PN", "#c96442"], ["Sam Cole", "Workspace admin", "SC", "#629987"], ["Alex Kim", "Technical lead", "AK", "#827dbd"]] },
  { id: "contoso", name: "Contoso Cloud", plan: "Enterprise", mrr: 6.2, delta: 0.0, seats: 36, since: "Jul 2024", health: "at risk", owner: "Dana Lee",
    trend: [4.4, 4.8, 5.2, 5.6, 5.9, 6.1, 6.3, 6.4, 6.4, 6.3, 6.2, 6.2],
    invoices: [["INV-2044", "Dec 1", 6200, "paid"], ["INV-1995", "Nov 1", 6200, "paid"], ["INV-1947", "Oct 1", 6300, "paid"]],
    contacts: [["Lena Ford", "Billing owner", "LF", "#629987"], ["Ravi Shah", "Admin", "RS", "#827dbd"]] },
  { id: "fabrikam", name: "Fabrikam Labs", plan: "Pro", mrr: 3.9, delta: 0.4, seats: 14, since: "Jan 2025", health: "healthy", owner: "Marco Diaz",
    trend: [2.1, 2.3, 2.6, 2.8, 3.0, 3.2, 3.3, 3.5, 3.6, 3.7, 3.8, 3.9],
    invoices: [["INV-2045", "Dec 1", 3900, "paid"], ["INV-1996", "Nov 1", 3500, "paid"], ["INV-1948", "Oct 1", 3500, "paid"]],
    contacts: [["Joan Pike", "Billing owner", "JP", "#98801f"], ["Tomás Rey", "Admin", "TR", "#c96442"]] },
  { id: "tailspin", name: "Tailspin Toys", plan: "Pro", mrr: 3.1, delta: -0.3, seats: 11, since: "Nov 2024", health: "at risk", owner: "Marco Diaz",
    trend: [3.6, 3.6, 3.5, 3.5, 3.4, 3.4, 3.3, 3.3, 3.2, 3.2, 3.4, 3.1],
    invoices: [["INV-2046", "Dec 1", 3100, "paid"], ["INV-1997", "Nov 1", 3400, "paid"], ["INV-1949", "Oct 1", 3400, "failed"]],
    contacts: [["Ivy Nash", "Billing owner", "IN", "#827dbd"], ["Owen Bell", "Admin", "OB", "#629987"]] },
  { id: "proseware", name: "Proseware Inc.", plan: "Starter", mrr: 1.8, delta: 0.2, seats: 6, since: "Apr 2025", health: "healthy", owner: "Marco Diaz",
    trend: [0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.6, 1.7, 1.7, 1.8],
    invoices: [["INV-2047", "Dec 1", 1800, "paid"], ["INV-1998", "Nov 1", 1600, "paid"]],
    contacts: [["Cara Voss", "Billing owner", "CV", "#c5621b"]] },
]

export const HEALTH = {
  healthy: { bg: "#e6f4ea", fg: "#177c31", dot: "#1e9f3c" },
  "at risk": { bg: "#fbeee3", fg: "#9a4a12", dot: "#c5621b" },
  churning: { bg: "#fceaef", fg: "#a81a44", dot: "#cf2055" },
}

export function Sidebar({ active = "Revenue" }) {
  const items = [
    ["Revenue", "revenue"],
    ["Customers", "users"],
    ["Subscriptions", "layers"],
    ["Invoices", "invoice"],
    ["Settings", "cog"],
  ]
  return (
    <aside className="hidden w-[200px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
      <a href="/" className="flex items-center gap-2 px-3.5 py-3.5">
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
          <rect width="32" height="32" rx="8" fill="#141413" />
          <path d="M7 21l5-6 4 3 8-9" fill="none" stroke="#c96442" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 9h4v4" fill="none" stroke="#629987" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Meridian</span>
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
          <p className="text-[11px] font-medium">Collected this month</p>
          <p className="mt-0.5 font-mono text-[17px] font-medium tracking-tight">$121.8k</p>
          <p className="mt-1 text-[10.5px] text-[var(--color-muted)]">$6.6k pending · 2 failed</p>
        </div>
      </div>
    </aside>
  )
}
