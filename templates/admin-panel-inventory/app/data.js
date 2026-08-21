export function Icon({ name, className = "h-4 w-4", style }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    grid: <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />,
    box: <path d="M12 3 3 7.5v9L12 21l9-4.5v-9L12 3ZM3 7.5 12 12l9-4.5M12 12v9" />,
    truck: (
      <>
        <path d="M2 6h11v9H2zM13 9h4l3 3v3h-7z" />
        <circle cx="6" cy="18" r="1.6" />
        <circle cx="17" cy="18" r="1.6" />
      </>
    ),
    supplier: (
      <>
        <path d="M3 21V8l6-4 6 4v13" />
        <path d="M15 21V11h6v10M7 9h.01M7 13h.01M11 9h.01M11 13h.01" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.2-3.2" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    slide: <path d="M4 8h16M4 16h16M9 5v6M15 13v6" />,
    warn: <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01" />,
    up: <path d="m6 15 6-6 6 6" />,
    down: <path d="m6 9 6 6 6-6" />,
    cart: (
      <>
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="18" cy="20" r="1.4" />
        <path d="M2 3h3l2.4 12.4a1.6 1.6 0 0 0 1.6 1.3h8.6a1.6 1.6 0 0 0 1.6-1.3L22 7H6" />
      </>
    ),
    back: <path d="M19 12H5m0 0 6 6m-6-6 6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    tag: (
      <>
        <path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9Z" />
        <circle cx="7.5" cy="7.5" r="1.3" />
      </>
    ),
    edit: <path d="M4 20h4L18 10l-4-4L4 16v4ZM13 5l4 4" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

export const CAT = {
  Footwear: "#c96442",
  Apparel: "#629987",
  Accessories: "#827dbd",
  Home: "#98801f",
  Outdoor: "#c5621b",
}

export const PRODUCTS = [
  { sku: "FW-2201", name: "Trail Runner GTX", cat: "Footwear", onHand: 0, committed: 0, reorder: 40, cap: 240, price: 140.0, cost: 68.0, supplier: "Northwind Supply Co.", lead: "7 days",
    byLoc: [["Oakland DC", 0], ["Reno DC", 0], ["Store · SF", 0]], moves: [["Sale", -12, "2h ago", "web #4821"], ["Sale", -8, "5h ago", "web #4817"], ["Transfer out", -20, "Yesterday", "to Reno DC"], ["Receipt", 40, "3 days ago", "PO-1182"]] },
  { sku: "AP-1180", name: "Merino Base Layer", cat: "Apparel", onHand: 38, committed: 30, reorder: 60, cap: 400, price: 62.0, cost: 24.0, supplier: "Cascade Textiles", lead: "10 days",
    byLoc: [["Oakland DC", 22], ["Reno DC", 12], ["Store · SF", 4]], moves: [["Sale", -6, "1h ago", "web #4830"], ["Receipt", 48, "Yesterday", "PO-1179"], ["Sale", -14, "2 days ago", "wholesale"]] },
  { sku: "AC-0442", name: "Alpine Wool Beanie", cat: "Accessories", onHand: 512, committed: 44, reorder: 80, cap: 600, price: 28.0, cost: 9.0, supplier: "Cascade Textiles", lead: "10 days",
    byLoc: [["Oakland DC", 300], ["Reno DC", 160], ["Store · SF", 52]], moves: [["Receipt", 200, "3 days ago", "PO-1170"], ["Sale", -18, "3 days ago", "web #4790"]] },
  { sku: "FW-2208", name: "Summit Approach Shoe", cat: "Footwear", onHand: 74, committed: 18, reorder: 50, cap: 260, price: 175.0, cost: 82.0, supplier: "Northwind Supply Co.", lead: "7 days",
    byLoc: [["Oakland DC", 40], ["Reno DC", 26], ["Store · SF", 8]], moves: [["Sale", -4, "4h ago", "web #4825"], ["Receipt", 60, "2 days ago", "PO-1175"]] },
  { sku: "HM-3310", name: "Enamel Camp Mug", cat: "Home", onHand: 1240, committed: 96, reorder: 150, cap: 1400, price: 22.0, cost: 6.0, supplier: "Ironwood Goods", lead: "14 days",
    byLoc: [["Oakland DC", 800], ["Reno DC", 380], ["Store · SF", 60]], moves: [["Receipt", 500, "Yesterday", "PO-1178"], ["Sale", -32, "Today", "web #4831"]] },
  { sku: "OU-5091", name: "45L Trek Pack", cat: "Outdoor", onHand: 22, committed: 25, reorder: 30, cap: 180, price: 137.0, cost: 61.0, supplier: "Granite Gear Ltd.", lead: "12 days",
    byLoc: [["Oakland DC", 14], ["Reno DC", 8], ["Store · SF", 0]], moves: [["Sale", -3, "2h ago", "web #4829"], ["Backorder", 0, "Today", "web #4832"], ["Sale", -5, "Yesterday", "wholesale"]] },
  { sku: "AP-1204", name: "Ripstop Rain Shell", cat: "Apparel", onHand: 268, committed: 40, reorder: 70, cap: 500, price: 89.0, cost: 34.0, supplier: "Cascade Textiles", lead: "10 days",
    byLoc: [["Oakland DC", 160], ["Reno DC", 84], ["Store · SF", 24]], moves: [["Receipt", 120, "4 days ago", "PO-1168"], ["Sale", -22, "Yesterday", "web #4812"]] },
  { sku: "AC-0468", name: "Carbon Trekking Poles", cat: "Accessories", onHand: 96, committed: 12, reorder: 40, cap: 220, price: 84.0, cost: 31.0, supplier: "Granite Gear Ltd.", lead: "12 days",
    byLoc: [["Oakland DC", 60], ["Reno DC", 30], ["Store · SF", 6]], moves: [["Sale", -2, "6h ago", "web #4828"], ["Receipt", 40, "3 days ago", "PO-1172"]] },
]

export function statusOf(p) {
  const avail = p.onHand - p.committed
  if (p.onHand === 0) return { key: "out", label: "out of stock", bg: "#fceaef", fg: "#a81a44", dot: "#cf2055" }
  if (avail < 0) return { key: "backorder", label: "backorder", bg: "#fbeee3", fg: "#9a4a12", dot: "#c5621b" }
  if (avail <= p.reorder) return { key: "low", label: "low stock", bg: "#f5f1e0", fg: "#6f5c12", dot: "#98801f" }
  return { key: "in", label: "in stock", bg: "#e6f4ea", fg: "#177c31", dot: "#1e9f3c" }
}

export function Sidebar({ active = "Inventory" }) {
  const items = [
    ["Overview", "grid"],
    ["Inventory", "box"],
    ["Purchase orders", "cart"],
    ["Suppliers", "supplier"],
    ["Locations", "pin"],
    ["Reports", "chart"],
  ]
  return (
    <aside className="hidden w-[200px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
      <a href="/" className="flex items-center gap-2 px-3.5 py-3.5">
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
          <rect width="32" height="32" rx="8" fill="#141413" />
          <path d="M8 12.5 16 8l8 4.5v7L16 24l-8-4.5v-7Z" fill="none" stroke="#c96442" strokeWidth="2" strokeLinejoin="round" />
          <path d="M8 12.5 16 17l8-4.5M16 17v7" fill="none" stroke="#629987" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Depot</span>
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
        <div className="rounded-lg border border-[#eadfae] bg-[var(--color-olive-soft)] p-2.5">
          <div className="flex items-center gap-1.5">
            <Icon name="warn" className="h-3.5 w-3.5 text-[#98801f]" />
            <p className="text-[11px] font-medium text-[#6f5c12]">14 need reorder</p>
          </div>
          <p className="mt-1 text-[10.5px] leading-[1.5] text-[#7d6a1f]">3 out of stock · 11 below reorder point across 3 locations.</p>
          <button className="mt-2 h-7 w-full rounded-md bg-[#98801f] text-[11.5px] font-medium text-white hover:bg-[#83700f]">Create purchase order</button>
        </div>
      </div>
    </aside>
  )
}
