export function Icon({ name, className = "h-4 w-4", style }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    cart: (
      <>
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="18" cy="20" r="1.4" />
        <path d="M2 3h3l2.4 12.4a1.6 1.6 0 0 0 1.6 1.3h8.6a1.6 1.6 0 0 0 1.6-1.3L22 7H6" />
      </>
    ),
    tag: (
      <>
        <path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9Z" />
        <circle cx="7.5" cy="7.5" r="1.3" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    truck: (
      <>
        <path d="M2 6h11v9H2zM13 9h4l3 3v3h-7z" />
        <circle cx="6" cy="18" r="1.6" />
        <circle cx="17" cy="18" r="1.6" />
      </>
    ),
    refund: <path d="M3 12a9 9 0 1 0 3-6.7L3 8m0-4v4h4" />,
    chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    dollar: <path d="M12 2v20M17 6.5C17 4.6 14.8 3.5 12 3.5S7 4.6 7 6.5s2 3 5 3.5 5 1.6 5 3.5-2.2 3-5 3-5-1.1-5-3" />,
    box: <path d="M12 3 3 7.5v9L12 21l9-4.5v-9L12 3ZM3 7.5 12 12l9-4.5M12 12v9" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.2-3.2" />
      </>
    ),
    down: <path d="m6 9 6 6 6-6" />,
    download: <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />,
    check: <path d="m5 13 4 4L19 7" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    print: (
      <>
        <path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2" />
        <path d="M6 14h12v7H6z" />
      </>
    ),
    back: <path d="M19 12H5m0 0 6 6m-6-6 6-6" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

export const PAY = {
  paid: { bg: "#e6f4ea", fg: "#177c31", dot: "#1e9f3c" },
  pending: { bg: "#f5f1e0", fg: "#6f5c12", dot: "#98801f" },
  refunded: { bg: "#f0efec", fg: "#5e5d59", dot: "#87867f" },
}
export const FUL = {
  unfulfilled: { bg: "#fbeee3", fg: "#9a4a12", dot: "#c5621b" },
  partial: { bg: "#eceaf5", fg: "#5b569b", dot: "#827dbd" },
  fulfilled: { bg: "#e6f4ea", fg: "#177c31", dot: "#1e9f3c" },
}

export const ORDERS = [
  { id: "3184", name: "Maya Chen", email: "maya@dwell.co", items: 3, total: 248.0, pay: "paid", ful: "unfulfilled", when: "2m ago",
    lines: [["Trail Runner GTX", "Size 9 · Black", 1, 140.0, "#c96442"], ["Alpine Wool Beanie", "Charcoal", 1, 28.0, "#827dbd"], ["Carbon Trekking Poles", "120cm", 1, 52.0, "#629987"]],
    ship: "142 Fell St, San Francisco, CA 94117", method: "Standard · 3–5 days",
    timeline: [["Order placed", "14:58", true], ["Payment captured", "14:58", true], ["Awaiting fulfillment", "—", false]] },
  { id: "3183", name: "Liam O'Brien", email: "liam@fold.io", items: 1, total: 89.0, pay: "paid", ful: "fulfilled", when: "18m ago",
    lines: [["Ripstop Rain Shell", "Medium · Olive", 1, 89.0, "#98801f"]], ship: "5 Dawson Rd, Austin, TX 78701", method: "Express · 2 days",
    timeline: [["Order placed", "14:42", true], ["Payment captured", "14:42", true], ["Fulfilled · UPS", "14:55", true]] },
  { id: "3182", name: "Priya Nair", email: "priya@stack.dev", items: 2, total: 312.0, pay: "pending", ful: "unfulfilled", when: "34m ago",
    lines: [["Summit Approach Shoe", "Size 8", 1, 175.0, "#c96442"], ["45L Trek Pack", "Slate", 1, 137.0, "#629987"]], ship: "88 Kingsway, London, UK", method: "Standard",
    timeline: [["Order placed", "14:26", true], ["Payment pending", "—", false]] },
  { id: "3181", name: "Noah Kim", email: "noah@relay.app", items: 4, total: 176.5, pay: "paid", ful: "partial", when: "1h ago",
    lines: [["Enamel Camp Mug", "×2", 2, 44.0, "#98801f"], ["Merino Base Layer", "Large", 1, 62.0, "#629987"]], ship: "12 Marina Blvd, Seattle, WA", method: "Standard",
    timeline: [["Order placed", "13:52", true], ["Payment captured", "13:52", true], ["1 of 2 shipped", "14:20", true]] },
  { id: "3180", name: "Emma Wilson", email: "emma@noon.co", items: 1, total: 58.0, pay: "refunded", ful: "fulfilled", when: "2h ago",
    lines: [["Alpine Wool Beanie", "×2", 2, 58.0, "#827dbd"]], ship: "9 Pine St, Portland, OR", method: "Standard",
    timeline: [["Order placed", "12:40", true], ["Fulfilled", "12:58", true], ["Refunded", "13:30", true]] },
  { id: "3179", name: "Diego Santos", email: "diego@ember.io", items: 2, total: 204.0, pay: "paid", ful: "fulfilled", when: "3h ago",
    lines: [["Trail Runner GTX", "Size 10", 1, 140.0, "#c96442"], ["Carbon Trekking Poles", "110cm", 1, 64.0, "#629987"]], ship: "70 Rua Augusta, Lisbon, PT", method: "Express",
    timeline: [["Order placed", "11:48", true], ["Fulfilled · DHL", "12:10", true]] },
]

export const STATS = [
  ["Orders today", "184", "cart", "#c96442"],
  ["Revenue today", "$42.9k", "dollar", "#629987"],
  ["To fulfill", "23", "truck", "#c5621b"],
  ["Refund requests", "4", "refund", "#827dbd"],
]

export function orderTotals(o) {
  const subtotal = o.lines.reduce((a, l) => a + l[3] * (l[0].includes("×") ? 1 : 1), 0)
  const shipping = 12.0
  const tax = +(o.total - subtotal - shipping).toFixed(2)
  return { subtotal, shipping, tax }
}

export function Sidebar({ active = "Orders" }) {
  const items = [
    ["Orders", "cart"],
    ["Products", "tag"],
    ["Customers", "user"],
    ["Fulfillment", "truck"],
    ["Refunds", "refund"],
    ["Reports", "chart"],
  ]
  return (
    <aside className="hidden w-[200px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
      <a href="/" className="flex items-center gap-2 px-3.5 py-3.5">
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
          <rect width="32" height="32" rx="8" fill="#141413" />
          <path d="M8 6h3l2 12h9M13 22a1.5 1.5 0 1 0 0 .01M20 22a1.5 1.5 0 1 0 0 .01M11 9h14l-1.6 7H12.6" fill="none" stroke="#c96442" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Ledger</span>
      </a>
      <nav className="flex-1 px-2">
        {items.map(([label, icon]) => (
          <a key={label} href="/" className={`mb-[2px] flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-left text-[13.5px] transition-colors ${active === label ? "bg-[var(--color-hover)] font-medium" : "text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"}`}>
            <Icon name={icon} className="h-[17px] w-[17px] text-[var(--color-faint)]" />
            {label}
          </a>
        ))}
      </nav>
      <div className="p-2.5">
        <div className="rounded-lg bg-[var(--color-ivory)] p-2.5">
          <p className="text-[11px] font-medium">Fulfillment SLA</p>
          <div className="mt-1.5 h-[5px] overflow-hidden rounded-full bg-white">
            <div className="h-full w-[91%] rounded-full bg-[var(--color-mineral)]" />
          </div>
          <p className="mt-1 text-[10.5px] text-[var(--color-muted)]">91% shipped within 24h</p>
        </div>
      </div>
    </aside>
  )
}
