const appNav = [
  { icon: "panel", label: "Overview" },
  { icon: "stream", label: "Event stream", count: 12403, active: true },
  { icon: "shield-check", label: "Policies" },
  { icon: "archive", label: "Evidence" },
  { icon: "clipboard", label: "Review queue", count: 8 },
  { icon: "settings", label: "Settings" },
]

const views = [
  { name: "All events", count: 12403, active: true },
  { name: "Violations", count: 34 },
  { name: "High severity", count: 12 },
  { name: "Data access", count: 892 },
  { name: "Auth events", count: 4102 },
  { name: "Config changes", count: 567 },
]

const teams = [
  { name: "SOC 2", color: "#ea580c", short: "S", count: 4120 },
  { name: "GDPR", color: "#0891b2", short: "G", count: 2891 },
  { name: "ISO 27001", color: "#16a34a", short: "I", count: 3567 },
  { name: "HIPAA", color: "#9333ea", short: "H", count: 1825 },
]

const privateLists = [
  { name: "Q2 attestation prep" },
  { name: "Vendor risk review" },
  { name: "Retention audit - 2024" },
]

const kpis = [
  { label: "Events today", value: "12.4k", delta: "+8%", dir: "up", spark: [8, 8.5, 9, 9.2, 9.5, 10, 10.5, 11, 11.5, 11.8, 12, 12.4] },
  { label: "Violations open", value: "34", delta: "-6", dir: "down", tone: "good", spark: [58, 55, 53, 52, 50, 48, 46, 44, 42, 40, 38, 34] },
  { label: "Coverage score", value: "91%", delta: "+3%", dir: "up", spark: [78, 79, 80, 81, 82, 83, 85, 86, 87, 88, 89, 91] },
  { label: "Retention days", value: "255", delta: "+15", dir: "up", spark: [180, 190, 200, 210, 215, 220, 225, 230, 235, 240, 248, 255] },
]

const events = [
  {
    id: "EVT-99201",
    severity: "critical",
    actor: "root@prod-db-01",
    action: "ALTER TABLE users DROP COLUMN ssn",
    resource: "prod-db-01/users",
    policy: "DATA-03",
    time: "2m",
    selected: true,
  },
  {
    id: "EVT-99188",
    severity: "high",
    actor: "svc-ci-deploy",
    action: "MODIFIED iam.policy",
    resource: "aws:iam::prod",
    policy: "IAM-07",
    time: "8m",
  },
  {
    id: "EVT-99172",
    severity: "medium",
    actor: "leila.park",
    action: "DOWNLOADED customer_export.csv",
    resource: "s3://exports/",
    policy: "DATA-01",
    time: "14m",
  },
  {
    id: "EVT-99155",
    severity: "low",
    actor: "system",
    action: "ROTATED tls-cert.api.acme.co",
    resource: "cert-manager",
    policy: "INFRA-12",
    time: "22m",
  },
  {
    id: "EVT-99134",
    severity: "high",
    actor: "omar.farooq",
    action: "GRANTED admin to guest-account",
    resource: "authz/roles",
    policy: "IAM-02",
    time: "31m",
  },
  {
    id: "EVT-99112",
    severity: "medium",
    actor: "system",
    action: "BACKUP FAILED prod-db-01",
    resource: "rds:prod-db-01",
    policy: "BCP-04",
    time: "45m",
  },
  {
    id: "EVT-99098",
    severity: "critical",
    actor: "unknown-ip-185.22.x.x",
    action: "FAILED LOGIN x47 admin@acme.co",
    resource: "sso.acme.co",
    policy: "SEC-01",
    time: "1h",
  },
  {
    id: "EVT-99081",
    severity: "low",
    actor: "priya.nair",
    action: "ACCEPTED terms-of-service v3.2",
    resource: "legal/attestations",
    policy: "COMP-01",
    time: "1h",
  },
  {
    id: "EVT-99064",
    severity: "medium",
    actor: "svc-logging",
    action: "DELETED 14d old logs from staging",
    resource: "s3://logs-staging/",
    policy: "RET-03",
    time: "2h",
  },
  {
    id: "EVT-99041",
    severity: "high",
    actor: "elena.voss",
    action: "DISABLED mfa.requirement",
    resource: "authz/policies",
    policy: "IAM-05",
    time: "3h",
  },
  {
    id: "EVT-99022",
    severity: "low",
    actor: "system",
    action: "SCHEDULED quarterly access review",
    resource: "compliance/reviews",
    policy: "COMP-02",
    time: "4h",
  },
  {
    id: "EVT-99001",
    severity: "medium",
    actor: "marcus.chen",
    action: "EXPORTED audit_trail_Q1.csv",
    resource: "s3://evidence/",
    policy: "DATA-02",
    time: "5h",
  },
]

const activityToday = [
  { who: "System", hue: "#1c1917", verb: "detected", obj: "2 critical violations", tail: "in prod-db-01", time: "2m", tone: "bad" },
  { who: "Elena Voss", hue: "#ea580c", verb: "exported", obj: "SOC 2 evidence", tail: "Type II package", time: "18m", tone: "good" },
  { who: "System", hue: "#1c1917", verb: "auto-remediated", obj: "IAM-07 drift", tail: "reverted policy change", time: "25m", tone: "good" },
  { who: "Leila Park", hue: "#0891b2", verb: "assigned", obj: "EVT-99134", tail: "to Omar for review", time: "31m" },
  { who: "System", hue: "#1c1917", verb: "flagged", obj: "47 brute-force attempts", tail: "from 185.22.x.x", time: "1h", tone: "bad" },
  { who: "Marcus Chen", hue: "#16a34a", verb: "approved", obj: "retention extension", tail: "to 270 days", time: "2h", tone: "good" },
]

const activityYesterday = [
  { who: "System", hue: "#1c1917", verb: "completed", obj: "Q2 policy scan", tail: "91% coverage achieved", time: "Tue 11:30p", tone: "good" },
  { who: "Priya Nair", hue: "#9333ea", verb: "submitted", obj: "vendor risk assessment", tail: "for Hexa Security", time: "Tue 4:15p", tone: "good" },
  { who: "System", hue: "#1c1917", verb: "purged", obj: "3.2M expired logs", tail: "per RET-03 schedule", time: "Tue 3:00p" },
  { who: "Omar Farooq", hue: "#ea580c", verb: "closed", obj: "EVT-98912", tail: "after evidence upload", time: "Tue 1:20p", tone: "good" },
]

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
      <rect x="3" y="3" width="26" height="26" rx="7" fill="#1c1917" />
      <path d="M16 7 25 12v8c0 5.5-4 9.5-9 11-5-1.5-9-5.5-9-11v-8l9-5Z" fill="#ea580c" />
      <path d="M12 16l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "stream") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 6h16M4 10h12M4 14h16M4 18h10"/></svg>)
  if (name === "shield-check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>)
  if (name === "archive") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>)
  if (name === "clipboard") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>)
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

function Avatar({ name, hue = "#ea580c", size = 20 }) {
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
      return (i === 0 ? "M" : "L") + x.toFixed(1) + "," + y.toFixed(1)
    })
    .join(" ")
  const color = tone === "good" ? "#16a34a" : tone === "bad" ? "#dc2626" : "#ea580c"
  return (
    <svg viewBox={"0 0 " + w + " " + h} className="h-7 w-[92px]" aria-hidden>
      <path d={path} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d={path + " L" + w + "," + h + " L0," + h + " Z"} fill={color} opacity="0.08" />
    </svg>
  )
}

function SeverityPill({ severity }) {
  const map = {
    critical: { dot: "#dc2626", label: "Critical", bg: "#fee2e2", fg: "#991b1b" },
    high: { dot: "#ea580c", label: "High", bg: "#ffedd5", fg: "#9a3412" },
    medium: { dot: "#ca8a04", label: "Medium", bg: "#fef9c3", fg: "#854d0e" },
    low: { dot: "#16a34a", label: "Low", bg: "#dcfce7", fg: "#166534" },
  }
  const s = map[severity]
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

function PolicyBadge({ name }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-1.5 py-0.5 text-[10.5px] font-medium text-gray-700 font-mono">
      {name}
    </span>
  )
}

export default function Home() {
  return (
    <div className="flex h-screen w-screen bg-[var(--color-bg)] text-[var(--color-ink)]">
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
                  {n.count > 999 ? "1k+" : n.count}
                </span>
              ) : null}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center gap-1 pb-1">
          <button className="grid h-9 w-9 place-items-center rounded-md text-gray-500 hover:bg-[var(--color-bg-3)]" title="Help">
            <Icon name="help" />
          </button>
          <Avatar name="Raj Patel" hue="#1c1917" size={28} />
        </div>
      </aside>

      {/* Left panel */}
      <aside className="hidden lg:flex w-60 shrink-0 flex-col border-r border-[var(--color-line)] bg-[var(--color-bg-2)]">
        {/* Workspace switcher */}
        <div className="flex items-center justify-between border-b border-[var(--color-line)] px-3 py-2.5">
          <button className="flex min-w-0 items-center gap-2 rounded-md px-1.5 py-1 text-left hover:bg-[var(--color-bg-3)]">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-[var(--color-ink)] text-[11px] font-semibold text-white">V</span>
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold leading-tight">Vault Compliance</p>
              <p className="truncate text-[10.5px] text-gray-500">Security · 12.4k events</p>
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
                      <Icon name="stream" className="h-3.5 w-3.5 opacity-70" />
                      {v.name}
                    </span>
                    <span className={"text-[11px] " + (v.active ? "text-[var(--color-indigo)]" : "text-gray-400")}>{v.count > 999 ? "12.4k" : v.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Frameworks */}
          <div className="mb-3">
            <div className="flex items-center justify-between px-1.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
              <span className="flex items-center gap-1"><Icon name="chevron-down" className="h-3 w-3" /> Frameworks</span>
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
                    <span className="text-[11px] text-gray-400">{t.count > 999 ? (t.count/1000).toFixed(1)+"k" : t.count}</span>
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
                    <Icon name="clipboard" className="h-3.5 w-3.5 opacity-60" />
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Try */}
          <div className="mt-4 rounded-lg border border-dashed border-[var(--color-line)] bg-white p-3">
            <p className="text-[11px] font-semibold text-[var(--color-ink)]">Export evidence</p>
            <p className="mt-0.5 text-[11px] leading-snug text-gray-500">Generate a signed evidence package for your next auditor review or attestation cycle.</p>
            <button className="mt-2 inline-flex items-center gap-1 rounded-md bg-[var(--color-ink)] px-2 py-1 text-[11px] font-medium text-white">
              <span className="font-mono">Generate ZIP</span>
            </button>
          </div>
        </div>

        <div className="border-t border-[var(--color-line)] px-3 py-2 text-[10.5px] text-gray-500">
          Vault Compliance · <a href="https://example.com" className="hover:text-[var(--color-ink)]">Security handbook</a>
        </div>
      </aside>

      {/* Main column */}
      <main className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <div className="flex h-12 shrink-0 items-center gap-3 border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex min-w-0 items-center gap-1.5 text-[13px] text-gray-500">
            <span className="font-medium text-gray-700">Vault</span>
            <Icon name="chevron-right" className="h-3 w-3 text-gray-300" />
            <span>Security</span>
            <Icon name="chevron-right" className="h-3 w-3 text-gray-300" />
            <span className="font-semibold text-[var(--color-ink)]">Event stream</span>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Icon name="search" className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search events, actors, policies..."
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
              <Icon name="plus" className="h-3.5 w-3.5" /> <span className="hidden sm:inline">New policy</span>
            </button>
          </div>
        </div>

        {/* Filters & view switcher */}
        <div className="flex shrink-0 items-center gap-2 border-b border-[var(--color-line)] bg-white px-4 py-2 overflow-x-auto">
          <button className="inline-flex h-7 items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-2 text-[12px] text-gray-700 hover:bg-[var(--color-bg-2)] shrink-0">
            <Icon name="filter" className="h-3 w-3" /> Filter
          </button>
          <span className="inline-flex h-7 items-center gap-1.5 rounded-md bg-[var(--color-indigo-soft)] pl-1.5 pr-1 text-[12px] font-medium text-[var(--color-indigo)] shrink-0">
            Severity: <span className="font-semibold">Critical, High</span>
            <button className="grid h-4 w-4 place-items-center rounded hover:bg-white/60">×</button>
          </span>
          <span className="inline-flex h-7 items-center gap-1.5 rounded-md bg-[var(--color-indigo-soft)] pl-1.5 pr-1 text-[12px] font-medium text-[var(--color-indigo)] shrink-0">
            Framework: <span className="font-semibold">SOC 2</span>
            <button className="grid h-4 w-4 place-items-center rounded hover:bg-white/60">×</button>
          </span>
          <span className="inline-flex h-7 items-center gap-1.5 rounded-md bg-[var(--color-indigo-soft)] pl-1.5 pr-1 text-[12px] font-medium text-[var(--color-indigo)] shrink-0">
            Action: <span className="font-semibold">Data access</span>
            <button className="grid h-4 w-4 place-items-center rounded hover:bg-white/60">×</button>
          </span>
          <button className="inline-flex h-7 items-center gap-1 rounded-md border border-dashed border-[var(--color-line)] px-2 text-[12px] text-gray-500 hover:bg-[var(--color-bg-2)] shrink-0">
            <Icon name="plus" className="h-3 w-3" /> Add filter
          </button>

          <div className="ml-auto flex items-center gap-2 shrink-0">
            <button className="inline-flex h-7 items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-2 text-[12px] text-gray-700 hover:bg-[var(--color-bg-2)]">
              <Icon name="sort" className="h-3 w-3" /> Time
            </button>
            <div className="inline-flex h-7 items-center rounded-md border border-[var(--color-line)] bg-white p-0.5 text-[12px]">
              <button className="flex h-6 items-center gap-1 rounded-[4px] bg-[var(--color-bg-3)] px-2 font-medium text-[var(--color-ink)]">
                <Icon name="list" className="h-3 w-3" /> List
              </button>
              <button className="flex h-6 items-center gap-1 px-2 text-gray-500 hover:text-[var(--color-ink)]">
                <Icon name="timeline" className="h-3 w-3" /> Timeline
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
              <div className="sticky top-0 z-10 grid grid-cols-[28px_80px_80px_1fr_1fr_60px_80px_72px_48px] items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
                <span><input type="checkbox" className="h-3.5 w-3.5 accent-[var(--color-indigo)]" readOnly /></span>
                <span>ID</span>
                <span>Severity</span>
                <span>Actor</span>
                <span>Action</span>
                <span className="hidden md:block text-center">Policy</span>
                <span className="hidden lg:block">Resource</span>
                <span>Time</span>
                <span className="text-right"></span>
              </div>

              {events.map((it) => (
                <div
                  key={it.id}
                  className={
                    "row-zebra group grid grid-cols-[28px_80px_80px_1fr_1fr_60px_80px_72px_48px] items-center gap-3 border-b border-[var(--color-line-2)] px-4 text-[12.5px] " +
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
                  <span><SeverityPill severity={it.severity} /></span>
                  <span className="truncate font-mono text-[11px] text-[var(--color-ink)]">{it.actor}</span>
                  <span className="truncate text-gray-700">{it.action}</span>
                  <span className="hidden md:block flex justify-center"><PolicyBadge name={it.policy} /></span>
                  <span className="hidden lg:block font-mono text-[11px] text-gray-600">{it.resource}</span>
                  <span className="font-mono text-[11px] text-gray-500">{it.time}</span>
                  <span className="flex justify-end"><button className="text-gray-400 hover:text-[var(--color-ink)]"><Icon name="more" className="h-4 w-4" /></button></span>
                </div>
              ))}

              {/* Footer hint */}
              <div className="flex items-center justify-between px-4 py-2 text-[11px] text-gray-500">
                <span>12 of 12,403 events</span>
                <span className="font-mono hidden sm:inline">press <kbd className="rounded border border-[var(--color-line)] bg-white px-1 py-[1px]">E</kbd> to export</span>
              </div>
            </div>
          </section>

          {/* Right activity rail */}
          <aside className="hidden xl:flex w-80 shrink-0 flex-col border-l border-[var(--color-line)] bg-white">
            <div className="flex h-11 shrink-0 items-center justify-between border-b border-[var(--color-line)] px-3">
              <p className="text-[13px] font-semibold">Security activity</p>
              <div className="flex items-center gap-1">
                <button className="grid h-7 w-7 place-items-center rounded-md text-gray-500 hover:bg-[var(--color-bg-2)]" title="Filter"><Icon name="filter" className="h-[14px] w-[14px]" /></button>
                <button className="grid h-7 w-7 place-items-center rounded-md text-gray-500 hover:bg-[var(--color-bg-2)]" title="Hide panel"><Icon name="panel" className="h-[14px] w-[14px]" /></button>
              </div>
            </div>

            {/* chip row */}
            <div className="flex shrink-0 items-center gap-1.5 border-b border-[var(--color-line)] px-3 py-2 text-[11.5px]">
              <button className="rounded-full bg-[var(--color-ink)] px-2 py-[3px] font-medium text-white">All</button>
              <button className="rounded-full border border-[var(--color-line)] px-2 py-[3px] text-gray-600 hover:bg-[var(--color-bg-2)]">Violations</button>
              <button className="rounded-full border border-[var(--color-line)] px-2 py-[3px] text-gray-600 hover:bg-[var(--color-bg-2)]">Evidence</button>
              <button className="rounded-full border border-[var(--color-line)] px-2 py-[3px] text-gray-600 hover:bg-[var(--color-bg-2)]">Reviews</button>
            </div>

            <div className="scroll-thin min-h-0 flex-1 overflow-y-auto">
              <ActivityGroup title="Today" items={activityToday} />
              <ActivityGroup title="Yesterday" items={activityYesterday} />

              <div className="px-3 py-4">
                <div className="rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-2)] p-3">
                  <p className="text-[11.5px] font-semibold">Weekly snapshot</p>
                  <p className="mt-0.5 text-[11.5px] leading-snug text-gray-500">
                    91% policy coverage · 34 open violations · 2 critical alerts · Q2 attestation on track.
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
