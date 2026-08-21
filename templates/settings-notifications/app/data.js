export function Icon({ name, className = "h-4 w-4", style }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
        <path d="M10.3 21a2 2 0 0 0 3.4 0" />
      </>
    ),
    sliders: <path d="M4 8h16M4 16h16M9 5v6M15 13v6" />,
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    shield: <path d="M12 2.5 20 6v6c0 4.6-3.2 8.5-8 9.5-4.8-1-8-4.9-8-9.5V6l8-3.5Z" />,
    card: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </>
    ),
    team: (
      <>
        <circle cx="9" cy="8" r="3.4" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 5.2a3.4 3.4 0 0 1 0 6.6M18 14.4a6.5 6.5 0 0 1 3.5 5.6" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    phone: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <path d="M11 18h2" />
      </>
    ),
    slack: <path d="M9 3a1.6 1.6 0 1 1 0 3.2H7.4V4.6A1.6 1.6 0 0 1 9 3ZM3 15a1.6 1.6 0 1 1 3.2 0v1.6H4.6A1.6 1.6 0 0 1 3 15ZM15 21a1.6 1.6 0 1 1 0-3.2h1.6V19.4A1.6 1.6 0 0 1 15 21ZM21 9a1.6 1.6 0 1 1-3.2 0V7.4H19.4A1.6 1.6 0 0 1 21 9ZM9 9h6v6H9z" />,
    chat: <path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12Z" />,
    check: <path d="m5 13 4 4L19 7" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    moon: <path d="M20 15A8 8 0 1 1 9 4a6 6 0 0 0 11 11Z" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
      </>
    ),
    chevron: <path d="m6 9 6 6 6-6" />,
    plug: <path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-10 0V8ZM12 16v6" />,
    back: <path d="M19 12H5m0 0 6 6m-6-6 6-6" />,
    send: <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />,
    arrow: <path d="M9 6l6 6-6 6" />,
    x: <path d="M18 6 6 18M6 6l12 12" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

export const CHANNELS = [
  { key: "email", label: "Email", desc: "alex@orbit.io", icon: "mail", connected: true, tone: "#c96442",
    endpoints: [["alex@orbit.io", "Primary · verified", true], ["alex.rivera@work.co", "Backup", false]],
    stats: [["Last delivery", "2m ago"], ["Sent (30d)", "312"], ["Failure rate", "0.3%"]],
    deliveries: [["Mention from Sam Cole", "2m ago", "delivered"], ["Weekly digest", "Mon 8:30 AM", "delivered"], ["Invoice INV-2043", "Dec 1", "delivered"], ["Deploy finished · api", "Yesterday", "delivered"], ["Password changed", "3 days ago", "bounced"]] },
  { key: "push", label: "Push", desc: "2 devices", icon: "phone", connected: true, tone: "#629987",
    endpoints: [["iPhone 15 Pro", "iOS 18.2 · active", true], ["MacBook Pro", "macOS · active", true]],
    stats: [["Last delivery", "12m ago"], ["Sent (30d)", "1,204"], ["Failure rate", "1.1%"]],
    deliveries: [["Comment on Roadmap", "12m ago", "delivered"], ["Assigned: LP-330", "1h ago", "delivered"], ["Mention from Rk", "3h ago", "delivered"], ["Deploy started", "Yesterday", "delivered"]] },
  { key: "slack", label: "Slack", desc: "#alerts · orbit", icon: "slack", connected: true, tone: "#827dbd",
    endpoints: [["#alerts", "orbit workspace", true], ["@alex", "Direct messages", true]],
    stats: [["Last delivery", "5m ago"], ["Sent (30d)", "486"], ["Failure rate", "0%"]],
    deliveries: [["Status change · LP-311", "5m ago", "delivered"], ["Deploy finished · web", "38m ago", "delivered"], ["Comment on Search", "2h ago", "delivered"]] },
  { key: "sms", label: "SMS", desc: "Not connected", icon: "chat", connected: false, tone: "#98801f",
    endpoints: [], stats: [["Last delivery", "—"], ["Sent (30d)", "0"], ["Failure rate", "—"]], deliveries: [] },
]

export const EVENTS = [
  ["Mentions & replies", "When someone @mentions or replies to you", { email: 1, push: 1, slack: 1, sms: 0 }],
  ["Assigned to you", "Work assigned or reassigned to you", { email: 1, push: 1, slack: 0, sms: 0 }],
  ["Comments", "New comments on items you follow", { email: 0, push: 1, slack: 1, sms: 0 }],
  ["Status changes", "When an item you own changes status", { email: 0, push: 0, slack: 1, sms: 0 }],
  ["Deploys", "Production deploy started or finished", { email: 1, push: 0, slack: 1, sms: 1 }],
  ["Billing & invoices", "Payment receipts and failures", { email: 1, push: 0, slack: 0, sms: 0 }],
  ["Weekly digest", "Monday summary of your workspace", { email: 1, push: 0, slack: 0, sms: 0 }],
]

export function Toggle({ on, onClick, tone = "#c96442" }) {
  return (
    <button
      onClick={onClick}
      className="relative h-[20px] w-[34px] shrink-0 rounded-full transition-colors"
      style={{ background: on ? tone : "#dcdad3" }}
    >
      <span className={`absolute top-[2px] h-[16px] w-[16px] rounded-full bg-white shadow-sm transition-all ${on ? "left-[16px]" : "left-[2px]"}`} />
    </button>
  )
}

export function Sidebar({ active = "Notifications" }) {
  const items = [
    ["Profile", "user"],
    ["Notifications", "bell"],
    ["Preferences", "sliders"],
    ["Security", "shield"],
    ["Billing", "card"],
    ["Members", "team"],
  ]
  return (
    <aside className="hidden w-[208px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
      <a href="/" className="flex items-center gap-2 px-3.5 py-3.5">
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
          <rect width="32" height="32" rx="8" fill="#141413" />
          <path d="M16 7a5 5 0 0 0-5 5c0 5-2 6-2 6h14s-2-1-2-6a5 5 0 0 0-5-5Z" fill="none" stroke="#c96442" strokeWidth="2" strokeLinejoin="round" />
          <path d="M14.5 24a2 2 0 0 0 3 0" fill="none" stroke="#629987" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Settings</span>
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
      <div className="flex items-center gap-2.5 border-t border-[var(--color-line)] px-3.5 py-3">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-plum-soft)] text-[12px] font-semibold text-[var(--color-plum)]">AR</span>
        <div className="min-w-0">
          <p className="truncate text-[12.5px] font-medium">Alex Rivera</p>
          <p className="truncate text-[10.5px] text-[var(--color-faint)]">Orbit workspace</p>
        </div>
      </div>
    </aside>
  )
}
