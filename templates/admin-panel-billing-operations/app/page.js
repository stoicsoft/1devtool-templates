const appNav = [
  { icon: "panel", label: "Overview" },
  { icon: "credit", label: "Subscriptions", count: 312, active: true },
  { icon: "file", label: "Invoices", count: 48 },
  { icon: "alert", label: "Disputes", count: 5 },
  { icon: "tag", label: "Plans" },
  { icon: "percent", label: "Coupons" },
  { icon: "settings", label: "Settings" },
]

const views = [
  { name: "All subscriptions", count: 312, active: true },
  { name: "Failed charges", count: 18 },
  { name: "Trials ending", count: 24 },
  { name: "Annual plans", count: 89 },
  { name: "Paused", count: 11 },
  { name: "Cancelled", count: 43 },
]

const teams = [
  { name: "Starter", color: "#64748b", short: "S", count: 124 },
  { name: "Growth", color: "#4f46e5", short: "G", count: 98 },
  { name: "Business", color: "#0ea5e9", short: "B", count: 67 },
  { name: "Enterprise", color: "#f59e0b", short: "E", count: 23 },
]

const privateLists = [
  { name: "Retry queue - May" },
  { name: "Q2 churn analysis" },
  { name: "Enterprise renewals" },
]

const kpis = [
  { label: "MRR", value: "$48.2k", delta: "+4.2%", dir: "up", spark: [38, 39, 40, 40, 41, 42, 43, 44, 45, 46, 47, 48.2] },
  { label: "Failed charges", value: "18", delta: "-5", dir: "down", tone: "good", spark: [32, 31, 30, 29, 28, 27, 25, 24, 22, 21, 20, 18] },
  { label: "Active subs", value: "312", delta: "+14", dir: "up", spark: [260, 265, 268, 272, 275, 280, 285, 290, 295, 300, 306, 312] },
  { label: "Collection rate", value: "97.4%", delta: "+1.1%", dir: "up", spark: [92, 92.5, 93, 93.5, 94, 94.5, 95, 95.5, 96, 96.5, 97, 97.4] },
]

const subscriptions = [
  {
    id: "SUB-8821",
    customer: "Vertex Labs",
    plan: "Business",
    planColor: "#0ea5e9",
    amount: "$349/mo",
    status: "active",
    health: "healthy",
    method: "Visa ·••• 4242",
    nextCharge: "May 14",
    selected: true,
  },
  {
    id: "SUB-8819",
    customer: "Nebula AI",
    plan: "Growth",
    planColor: "#4f46e5",
    amount: "$129/mo",
    status: "active",
    health: "healthy",
    method: "Amex ·••• 1001",
    nextCharge: "May 14",
  },
  {
    id: "SUB-8812",
    customer: "Draftboard Inc",
    plan: "Starter",
    planColor: "#64748b",
    amount: "$29/mo",
    status: "past_due",
    health: "at_risk",
    method: "Visa ·••• 8899",
    nextCharge: "May 02",
  },
  {
    id: "SUB-8805",
    customer: "Pacific Data",
    plan: "Enterprise",
    planColor: "#f59e0b",
    amount: "$1,200/mo",
    status: "active",
    health: "healthy",
    method: "Wire",
    nextCharge: "May 20",
  },
  {
    id: "SUB-8798",
    customer: "Catalyst CRM",
    plan: "Growth",
    planColor: "#4f46e5",
    amount: "$129/mo",
    status: "trialing",
    health: "healthy",
    method: "Mastercard ·••• 5533",
    nextCharge: "May 18",
  },
  {
    id: "SUB-8791",
    customer: "Orbit Finance",
    plan: "Business",
    planColor: "#0ea5e9",
    amount: "$349/mo",
    status: "past_due",
    health: "failed",
    method: "Visa ·••• 1102",
    nextCharge: "Apr 30",
  },
  {
    id: "SUB-8784",
    customer: "Signal FM",
    plan: "Growth",
    planColor: "#4f46e5",
    amount: "$129/mo",
    status: "active",
    health: "healthy",
    method: "Amex ·••• 7733",
    nextCharge: "May 16",
  },
  {
    id: "SUB-8776",
    customer: "Compass IO",
    plan: "Enterprise",
    planColor: "#f59e0b",
    amount: "$1,200/mo",
    status: "paused",
    health: "at_risk",
    method: "Wire",
    nextCharge: "Jun 01",
  },
  {
    id: "SUB-8765",
    customer: "Thread Analytics",
    plan: "Starter",
    planColor: "#64748b",
    amount: "$29/mo",
    status: "active",
    health: "healthy",
    method: "Visa ·••• 9981",
    nextCharge: "May 12",
  },
  {
    id: "SUB-8754",
    customer: "Northstar Cloud",
    plan: "Business",
    planColor: "#0ea5e9",
    amount: "$349/mo",
    status: "active",
    health: "healthy",
    method: "Mastercard ·••• 4421",
    nextCharge: "May 15",
  },
  {
    id: "SUB-8741",
    customer: "Launchpad Studio",
    plan: "Growth",
    planColor: "#4f46e5",
    amount: "$129/mo",
    status: "cancelled",
    health: "churned",
    method: "Visa ·••• 3310",
    nextCharge: "—",
  },
  {
    id: "SUB-8733",
    customer: "Hexa Security",
    plan: "Enterprise",
    planColor: "#f59e0b",
    amount: "$1,200/mo",
    status: "active",
    health: "healthy",
    method: "Wire",
    nextCharge: "May 22",
  },
]

const activityToday = [
  { who: "System", hue: "#0f172a", verb: "retried", obj: "SUB-8812", tail: "payment — failed again", time: "3m", tone: "bad" },
  { who: "Amara Singh", hue: "#4f46e5", verb: "upgraded", obj: "Vertex Labs", tail: "Growth → Business", time: "12m", tone: "good" },
  { who: "System", hue: "#0f172a", verb: "charged", obj: "SUB-8821", tail: "$349 — succeeded", time: "18m", tone: "good" },
  { who: "Tom Reed", hue: "#0ea5e9", verb: "opened dispute", obj: "SUB-8791", tail: "chargeback $349", time: "34m", tone: "bad" },
  { who: "System", hue: "#0f172a", verb: "sent trial ending", obj: "Catalyst CRM", tail: "in 6 days", time: "1h" },
  { who: "Lena Park", hue: "#f59e0b", verb: "applied coupon", obj: "WELCOME20", tail: "to 3 new subs", time: "2h", tone: "good" },
]

const activityYesterday = [
  { who: "System", hue: "#0f172a", verb: "auto-paused", obj: "Compass IO", tail: "after 3 failed retries", time: "Tue 11:04p", tone: "bad" },
  { who: "Amara Singh", hue: "#4f46e5", verb: "refunded", obj: "Launchpad Studio", tail: "prorated $64", time: "Tue 4:22p", tone: "good" },
  { who: "System", hue: "#0f172a", verb: "collected", obj: "$14,220", tail: "across 41 invoices", time: "Tue 3:00p", tone: "good" },
  { who: "Tom Reed", hue: "#0ea5e9", verb: "updated plan", obj: "Enterprise tier", tail: "new seat pricing", time: "Tue 1:15p" },
]

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
      <rect x="3" y="3" width="26" height="26" rx="7" fill="#0f172a" />
      <rect x="8" y="12" width="16" height="10" rx="2" fill="#4f46e5" />
      <path d="M11 16h10M11 19h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "credit") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>)
  if (name === "file") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>)
  if (name === "alert") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>)
  if (name === "tag") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><path d="M7 7h.01"/></svg>)
  if (name === "percent") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M19 5 5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>)
  if (name === "settings") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "chevron-down") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m6 9 6 6 6-6"/></svg>)
  if (name === "filter") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 5h18l-7 9v5l-4 2v-7L3 5Z"/></svg>)
  if (name === "sort") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 4v16m0 0-3-3m3 3 3-3M17 20V4m0 0-3 3m3-3 3 3"/></svg>)
  if (name === "list") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>)
  if (name === "board") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="5" height="16" rx="1"/><rect x="10" y="4" width="5" height="10" rx="1"/><rect x="17" y="4" width="4" height="13" rx="1"/></svg>)
  if (name === "timeline") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 6h18M3 12h12M3 18h18"/><circle cx="17" cy="6" r="1.5" fill="currentColor"/><circle cx="11" cy="12" r="1.5" fill="currentColor"/><circle cx="20" cy="18" r="1.5" fill="currentColor"/></svg>)
  if (name === "bell") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M6 8a6 6 0 0 1 12 0c0 5 2 7 2 7H4s2-2 2-7ZM10 20a2 2 0 0 0 4 0"/></svg>)
  if (name === "help") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.9.4-1.5 1-1.5 2.2M12 17.5v.01"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 19V5M5 12l7-7 7 7"/></svg>)
  if (name === "arrow-down") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M19 12l-7 7-7-7"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "more") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="5" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="19" r="1.5" fill="currentColor"/></svg>)
  return null
}

function Avatar({ name, hue = "#4f46e5", size = 20 }) {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("")
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white"
      style={{ background: hue, width: size, height: size, fontSize: size * 0.42 }}
    >
      {initials}
    </span>
  )
}

function Spark({ points, tone = "indigo" }) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1
  const w = 92
  const h = 28
  const step = w / (points.length - 1)
  const path = points
    .map((p, i) => {
      const x = i * step
      const y = h - ((p - min) / range) * h
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(" ")
  const color = tone === "good" ? "#10b981" : tone === "bad" ? "#ef4444" : "#4f46e5"
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-7 w-[92px]" aria-hidden>
      <path d={path} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`${path} L${w},${h} L0,${h} Z`} fill={color} opacity="0.08" />
    </svg>
  )
}

function StatusPill({ status }) {
  const map = {
    active: { dot: "#10b981", label: "Active", bg: "#d1fae5", fg: "#065f46" },
    trialing: { dot: "#4f46e5", label: "Trialing", bg: "#e0e7ff", fg: "#3730a3" },
    past_due: { dot: "#ef4444", label: "Past due", bg: "#fee2e2", fg: "#991b1b" },
    paused: { dot: "#f59e0b", label: "Paused", bg: "#fef3c7", fg: "#92400e" },
    cancelled: { dot: "#9ca3af", label: "Cancelled", bg: "#f3f4f6", fg: "#4b5563" },
  }
  const s = map[status]
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium"
      style={{ background: s.bg, color: s.fg }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.dot }} />
      {s.label}
    </span>
  )
}

function RoleBadge({ name, color }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-1.5 py-0.5 text-[10.5px] font-medium text-gray-700">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
      {name}
    </span>
  )
}

function HealthBadge({ health }) {
  const map = {
    healthy: { label: "Healthy", color: "#10b981", bg: "#d1fae5" },
    at_risk: { label: "At risk", color: "#f59e0b", bg: "#fef3c7" },
    failed: { label: "Failed", color: "#ef4444", bg: "#fee2e2" },
    churned: { label: "Churned", color: "#9ca3af", bg: "#f3f4f6" },
  }
  const h = map[health]
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-1.5 py-0.5 text-[10.5px] font-medium text-gray-700">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: h.color }} />
      {h.label}
    </span>
  )
}

export default function Home() {
  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      {/* Left icon rail */}
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="#" className="mb-3 grid h-9 w-9 place-items-center rounded-lg">
          <Logo />
        </a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          {appNav.map((n) => (
            <button
              key={n.label}
              className={
                "group relative grid h-9 w-9 place-items-center rounded-md text-[13px] transition " +
                (n.active
                  ? "bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]"
                  : "text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]")
              }
              title={n.label}
            >
              <Icon name={n.icon} className="h-[18px] w-[18px]" />
              {n.count ? (
                <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--color-indigo)] px-1 text-[9px] font-semibold text-white">
                  {n.count}
                </span>
              ) : null}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center gap-1 pb-1">
          <button className="grid h-9 w-9 place-items-center rounded-md text-gray-500 hover:bg-[var(--color-bg-3)]" title="Help">
            <Icon name="help" />
          </button>
          <Avatar name="Amara Singh" hue="#0f172a" size={28} />
        </div>
      </aside>

      {/* Left panel */}
      <aside className="hidden lg:flex w-60 shrink-0 flex-col border-r border-[var(--color-line)] bg-[var(--color-bg-2)]">
        {/* Workspace switcher */}
        <div className="flex items-center justify-between border-b border-[var(--color-line)] px-3 py-2.5">
          <button className="flex min-w-0 items-center gap-2 rounded-md px-1.5 py-1 text-left hover:bg-[var(--color-bg-3)]">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-[var(--color-ink)] text-[11px] font-semibold text-white">L</span>
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold leading-tight">Ledger Billing</p>
              <p className="truncate text-[10.5px] text-gray-500">Finance · 312 subs</p>
            </div>
            <Icon name="chevron-down" className="h-3.5 w-3.5 text-gray-400" />
          </button>
          <button className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-gray-500 hover:bg-[var(--color-bg-3)]" title="Notifications">
            <Icon name="bell" className="h-[15px] w-[15px]" />
          </button>
        </div>

        {/* Sidebar scroll area */}
        <div className="scroll-thin flex-1 overflow-y-auto px-2 py-2 text-[13px]">
          {/* Views */}
          <div className="mb-3">
            <div className="flex items-center justify-between px-1.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
              <span className="flex items-center gap-1"><Icon name="chevron-down" className="h-3 w-3" /> Views</span>
              <button className="grid h-5 w-5 place-items-center rounded hover:bg-[var(--color-bg-3)]"><Icon name="plus" className="h-3 w-3" /></button>
            </div>
            <ul>
              {views.map((v) => (
                <li key={v.name}>
                  <button
                    className={
                      "flex w-full items-center justify-between rounded-md px-2 py-[5px] text-left " +
                      (v.active
                        ? "bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]"
                        : "text-gray-700 hover:bg-[var(--color-bg-3)]")
                    }
                  >
                    <span className="flex items-center gap-2 truncate">
                      <Icon name="credit" className="h-3.5 w-3.5 opacity-70" />
                      {v.name}
                    </span>
                    <span className={"text-[11px] " + (v.active ? "text-[var(--color-indigo)]" : "text-gray-400")}>{v.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Plans */}
          <div className="mb-3">
            <div className="flex items-center justify-between px-1.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
              <span className="flex items-center gap-1"><Icon name="chevron-down" className="h-3 w-3" /> Plans</span>
              <button className="grid h-5 w-5 place-items-center rounded hover:bg-[var(--color-bg-3)]"><Icon name="plus" className="h-3 w-3" /></button>
            </div>
            <ul>
              {teams.map((t) => (
                <li key={t.name}>
                  <button className="flex w-full items-center justify-between rounded-md px-2 py-[5px] text-left text-gray-700 hover:bg-[var(--color-bg-3)]">
                    <span className="flex items-center gap-2 truncate">
                      <span className="grid h-4 w-4 place-items-center rounded-[4px] text-[8.5px] font-semibold text-white" style={{ background: t.color }}>
                        {t.short[0]}
                      </span>
                      {t.name}
                    </span>
                    <span className="text-[11px] text-gray-400">{t.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Private */}
          <div className="mb-3">
            <div className="flex items-center justify-between px-1.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
              <span className="flex items-center gap-1"><Icon name="chevron-down" className="h-3 w-3" /> Private</span>
              <button className="grid h-5 w-5 place-items-center rounded hover:bg-[var(--color-bg-3)]"><Icon name="plus" className="h-3 w-3" /></button>
            </div>
            <ul>
              {privateLists.map((p) => (
                <li key={p.name}>
                  <button className="flex w-full items-center gap-2 rounded-md px-2 py-[5px] text-left text-gray-700 hover:bg-[var(--color-bg-3)]">
                    <Icon name="file" className="h-3.5 w-3.5 opacity-60" />
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Try */}
          <div className="mt-4 rounded-lg border border-dashed border-[var(--color-line)] bg-white p-3">
            <p className="text-[11px] font-semibold text-[var(--color-ink)]">Retry failed charges</p>
            <p className="mt-0.5 text-[11px] leading-snug text-gray-500">18 payments need attention. Retry the queue or reach out to customers with expired cards.</p>
            <button className="mt-2 inline-flex items-center gap-1 rounded-md bg-[var(--color-ink)] px-2 py-1 text-[11px] font-medium text-white">
              <span className="font-mono">Run retry</span>
            </button>
          </div>
        </div>

        <div className="border-t border-[var(--color-line)] px-3 py-2 text-[10.5px] text-gray-500">
          Ledger Billing · <a href="https://example.com" className="hover:text-[var(--color-ink)]">Finance docs</a>
        </div>
      </aside>

      {/* Main column */}
      <main className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <div className="flex h-12 shrink-0 items-center gap-3 border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex min-w-0 items-center gap-1.5 text-[13px] text-gray-500">
            <span className="font-medium text-gray-700">Ledger</span>
            <Icon name="chevron-right" className="h-3 w-3 text-gray-300" />
            <span>Finance</span>
            <Icon name="chevron-right" className="h-3 w-3 text-gray-300" />
            <span className="font-semibold text-[var(--color-ink)]">Subscriptions</span>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Icon name="search" className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search customers, invoices, plans..."
                className="h-8 w-72 rounded-md border border-[var(--color-line)] bg-[var(--color-bg-2)] pl-7 pr-14 text-[12.5px] placeholder:text-gray-400 focus:border-[var(--color-indigo-ring)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-soft)]"
              />
              <span className="pointer-events-none absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-0.5 rounded border border-[var(--color-line)] bg-white px-1.5 py-[1px] font-mono text-[10px] text-gray-500">
                <span>⌘</span><span>K</span>
              </span>
            </div>

            <button className="grid h-8 w-8 place-items-center rounded-md border border-[var(--color-line)] bg-white text-gray-600 hover:bg-[var(--color-bg-2)]" title="Toggle panel">
              <Icon name="panel" className="h-[15px] w-[15px]" />
            </button>
            <button className="grid h-8 w-8 place-items-center rounded-md border border-[var(--color-line)] bg-white text-gray-600 hover:bg-[var(--color-bg-2)]" title="Notifications">
              <Icon name="bell" className="h-[15px] w-[15px]" />
            </button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-md bg-[var(--color-indigo)] px-2.5 text-[12.5px] font-medium text-white hover:bg-[var(--color-indigo-2)]">
              <Icon name="plus" className="h-3.5 w-3.5" /> <span className="hidden sm:inline">Create invoice</span>
            </button>
          </div>
        </div>

        {/* Filters & view switcher */}
        <div className="flex shrink-0 items-center gap-2 border-b border-[var(--color-line)] bg-white px-4 py-2 overflow-x-auto">
          <button className="inline-flex h-7 items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-2 text-[12px] text-gray-700 hover:bg-[var(--color-bg-2)] shrink-0">
            <Icon name="filter" className="h-3 w-3" /> Filter
          </button>
          <span className="inline-flex h-7 items-center gap-1.5 rounded-md bg-[var(--color-indigo-soft)] pl-1.5 pr-1 text-[12px] font-medium text-[var(--color-indigo)] shrink-0">
            Status: <span className="font-semibold">Active</span>
            <button className="grid h-4 w-4 place-items-center rounded hover:bg-white/60">×</button>
          </span>
          <span className="inline-flex h-7 items-center gap-1.5 rounded-md bg-[var(--color-indigo-soft)] pl-1.5 pr-1 text-[12px] font-medium text-[var(--color-indigo)] shrink-0">
            Plan: <span className="font-semibold">All</span>
            <button className="grid h-4 w-4 place-items-center rounded hover:bg-white/60">×</button>
          </span>
          <span className="inline-flex h-7 items-center gap-1.5 rounded-md bg-[var(--color-indigo-soft)] pl-1.5 pr-1 text-[12px] font-medium text-[var(--color-indigo)] shrink-0">
            Health: <span className="font-semibold">At risk</span>
            <button className="grid h-4 w-4 place-items-center rounded hover:bg-white/60">×</button>
          </span>
          <button className="inline-flex h-7 items-center gap-1 rounded-md border border-dashed border-[var(--color-line)] px-2 text-[12px] text-gray-500 hover:bg-[var(--color-bg-2)] shrink-0">
            <Icon name="plus" className="h-3 w-3" /> Add filter
          </button>

          <div className="ml-auto flex items-center gap-2 shrink-0">
            <button className="inline-flex h-7 items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-2 text-[12px] text-gray-700 hover:bg-[var(--color-bg-2)]">
              <Icon name="sort" className="h-3 w-3" /> MRR
            </button>
            <div className="inline-flex h-7 items-center rounded-md border border-[var(--color-line)] bg-white p-0.5 text-[12px]">
              <button className="flex h-6 items-center gap-1 rounded-[4px] bg-[var(--color-bg-3)] px-2 font-medium text-[var(--color-ink)]">
                <Icon name="list" className="h-3 w-3" /> List
              </button>
              <button className="flex h-6 items-center gap-1 px-2 text-gray-500 hover:text-[var(--color-ink)]">
                <Icon name="board" className="h-3 w-3" /> Board
              </button>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="flex min-h-0 flex-1">
          {/* Center */}
          <section className="flex min-w-0 flex-1 flex-col overflow-hidden">
            {/* KPI strip */}
            <div className="grid shrink-0 grid-cols-2 md:grid-cols-4 gap-px border-b border-[var(--color-line)] bg-[var(--color-line)]">
              {kpis.map((k) => (
                <div key={k.label} className="bg-white px-4 py-3">
                  <p className="text-[11px] uppercase tracking-wider text-gray-500">{k.label}</p>
                  <div className="mt-1 flex items-end justify-between">
                    <div>
                      <p className="text-[22px] font-semibold leading-none tracking-tight">{k.value}</p>
                      <p className={"mt-1.5 inline-flex items-center gap-0.5 text-[11px] font-medium " + (
                        (k.tone === "good" && k.dir === "down") || (k.tone !== "good" && k.dir === "up")
                          ? "text-emerald-600" : k.tone === "good" ? "text-emerald-600" : "text-amber-600"
                      )}>
                        <Icon name={k.dir === "up" ? "arrow-up" : "arrow-down"} className="h-3 w-3" />
                        {k.delta} <span className="text-gray-400"> · 7d</span>
                      </p>
                    </div>
                    <Spark points={k.spark} tone={k.tone === "good" ? "good" : "indigo"} />
                  </div>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="scroll-thin min-h-0 flex-1 overflow-auto">
              {/* header */}
              <div className="sticky top-0 z-10 grid grid-cols-[28px_80px_1fr_80px_90px_80px_80px_72px_48px] items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
                <span><input type="checkbox" className="h-3.5 w-3.5 accent-[var(--color-indigo)]" readOnly /></span>
                <span>ID</span>
                <span>Customer</span>
                <span>Plan</span>
                <span className="text-center">Status</span>
                <span className="hidden md:block text-center">Health</span>
                <span className="hidden lg:block">Method</span>
                <span>Next charge</span>
                <span className="text-right"></span>
              </div>

              {subscriptions.map((it) => (
                <div
                  key={it.id}
                  className={
                    "row-zebra group grid grid-cols-[28px_80px_1fr_80px_90px_80px_80px_72px_48px] items-center gap-3 border-b border-[var(--color-line-2)] px-4 text-[12.5px] " +
                    (it.selected ? "!bg-[var(--color-indigo-soft)]" : "hover:bg-[var(--color-bg-2)]")
                  }
                >
                  <span>
                    <input
                      type="checkbox"
                      className="h-3.5 w-3.5 accent-[var(--color-indigo)]"
                      defaultChecked={it.selected}
                      readOnly
                    />
                  </span>
                  <span className="font-mono text-[11.5px] text-gray-500">{it.id}</span>
                  <span className="truncate font-medium text-[var(--color-ink)]">{it.customer}</span>
                  <span><RoleBadge name={it.plan} color={it.planColor} /></span>
                  <span className="flex justify-center"><StatusPill status={it.status} /></span>
                  <span className="hidden md:block flex justify-center"><HealthBadge health={it.health} /></span>
                  <span className="hidden lg:block font-mono text-[11px] text-gray-600">{it.method}</span>
                  <span className="font-mono text-[11px] text-gray-500">{it.nextCharge}</span>
                  <span className="flex justify-end"><button className="text-gray-400 hover:text-[var(--color-ink)]"><Icon name="more" className="h-4 w-4" /></button></span>
                </div>
              ))}

              {/* Footer hint */}
              <div className="flex items-center justify-between px-4 py-2 text-[11px] text-gray-500">
                <span>12 of 312 subscriptions</span>
                <span className="font-mono hidden sm:inline">press <kbd className="rounded border border-[var(--color-line)] bg-white px-1 py-[1px]">N</kbd> to create</span>
              </div>
            </div>
          </section>

          {/* Right activity rail */}
          <aside className="hidden xl:flex w-80 shrink-0 flex-col border-l border-[var(--color-line)] bg-white">
            <div className="flex h-11 shrink-0 items-center justify-between border-b border-[var(--color-line)] px-3">
              <p className="text-[13px] font-semibold">Payment activity</p>
              <div className="flex items-center gap-1">
                <button className="grid h-7 w-7 place-items-center rounded-md text-gray-500 hover:bg-[var(--color-bg-2)]" title="Filter"><Icon name="filter" className="h-[14px] w-[14px]" /></button>
                <button className="grid h-7 w-7 place-items-center rounded-md text-gray-500 hover:bg-[var(--color-bg-2)]" title="Hide panel"><Icon name="panel" className="h-[14px] w-[14px]" /></button>
              </div>
            </div>

            {/* chip row */}
            <div className="flex shrink-0 items-center gap-1.5 border-b border-[var(--color-line)] px-3 py-2 text-[11.5px]">
              <button className="rounded-full bg-[var(--color-ink)] px-2 py-[3px] font-medium text-white">All</button>
              <button className="rounded-full border border-[var(--color-line)] px-2 py-[3px] text-gray-600 hover:bg-[var(--color-bg-2)]">Charges</button>
              <button className="rounded-full border border-[var(--color-line)] px-2 py-[3px] text-gray-600 hover:bg-[var(--color-bg-2)]">Disputes</button>
              <button className="rounded-full border border-[var(--color-line)] px-2 py-[3px] text-gray-600 hover:bg-[var(--color-bg-2)]">Refunds</button>
            </div>

            <div className="scroll-thin min-h-0 flex-1 overflow-y-auto">
              <ActivityGroup title="Today" items={activityToday} />
              <ActivityGroup title="Yesterday" items={activityYesterday} />

              <div className="px-3 py-4">
                <div className="rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-2)] p-3">
                  <p className="text-[11.5px] font-semibold">Weekly snapshot</p>
                  <p className="mt-0.5 text-[11.5px] leading-snug text-gray-500">
                    $14,220 collected · 18 retries pending · 2 disputes opened · 97.4% collection rate.
                  </p>
                  <a href="#" className="mt-2 inline-flex items-center gap-1 text-[11.5px] font-medium text-[var(--color-indigo)]">
                    Open report <Icon name="chevron-right" className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

function ActivityGroup({ title, items }) {
  return (
    <div className="border-b border-[var(--color-line-2)] last:border-b-0">
      <p className="sticky top-0 z-[1] bg-white px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
        {title}
      </p>
      <ul>
        {items.map((a, i) => (
          <li
            key={i}
            className="grid grid-cols-[22px_1fr_auto] items-start gap-2 px-3 py-2 hover:bg-[var(--color-bg-2)]"
          >
            <Avatar name={a.who} hue={a.hue} size={22} />
            <div className="min-w-0 text-[12px] leading-snug text-gray-700">
              <span className="font-semibold text-[var(--color-ink)]">{a.who}</span>{" "}
              <span className={a.tone === "bad" ? "text-rose-600" : a.tone === "good" ? "text-emerald-600" : ""}>{a.verb}</span>{" "}
              <span className="font-mono text-[11px] text-[var(--color-ink)]">{a.obj}</span>
              {a.tail ? <span className="text-gray-500"> {a.tail}</span> : null}
            </div>
            <span className="shrink-0 font-mono text-[10.5px] text-gray-400">{a.time}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
