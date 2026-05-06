const appNav = [
  { icon: "panel", label: "Overview" },
  { icon: "users", label: "Directory", count: 184, active: true },
  { icon: "mail", label: "Invites", count: 12 },
  { icon: "shield", label: "Roles" },
  { icon: "groups", label: "Groups" },
  { icon: "activity", label: "Activity" },
  { icon: "settings", label: "Settings" },
]

const views = [
  { name: "All members", count: 184, active: true },
  { name: "Pending invites", count: 12 },
  { name: "Active now", count: 67 },
  { name: "Admins", count: 18 },
  { name: "Guests", count: 34 },
  { name: "Deactivated", count: 9 },
]

const teams = [
  { name: "Engineering", color: "#2563eb", short: "ENG", count: 62 },
  { name: "Product", color: "#7c3aed", short: "PRD", count: 28 },
  { name: "Design", color: "#db2777", short: "DSN", count: 19 },
  { name: "Marketing", color: "#ea580c", short: "MKT", count: 24 },
  { name: "Sales", color: "#059669", short: "SAL", count: 31 },
]

const privateLists = [
  { name: "Onboarding cohort - May" },
  { name: "SSO migration exceptions" },
  { name: "Quarterly access review" },
]

const kpis = [
  { label: "Total members", value: "184", delta: "+7", dir: "up", spark: [160, 162, 163, 165, 166, 168, 170, 172, 175, 178, 181, 184] },
  { label: "Pending invites", value: "12", delta: "-3", dir: "down", tone: "good", spark: [22, 21, 20, 20, 19, 18, 17, 16, 15, 14, 13, 12] },
  { label: "Active sessions", value: "67", delta: "+12", dir: "up", spark: [42, 44, 45, 47, 48, 50, 52, 55, 58, 61, 64, 67] },
  { label: "Roles assigned", value: "241", delta: "+9", dir: "up", spark: [210, 212, 214, 216, 218, 220, 223, 226, 229, 232, 236, 241] },
]

const members = [
  {
    id: "USR-4412",
    name: "Elena Voss",
    email: "elena.voss@acme.co",
    role: "Admin",
    roleColor: "#dc2626",
    status: "active",
    mfa: "TOTP",
    sso: "Okta",
    lastActive: "2m",
    selected: true,
  },
  {
    id: "USR-4409",
    name: "Marcus Chen",
    email: "marcus.chen@acme.co",
    role: "Editor",
    roleColor: "#2563eb",
    status: "active",
    mfa: "WebAuthn",
    sso: "Okta",
    lastActive: "5m",
  },
  {
    id: "USR-4401",
    name: "Priya Nair",
    email: "priya.nair@acme.co",
    role: "Viewer",
    roleColor: "#059669",
    status: "invited",
    mfa: "—",
    sso: "—",
    lastActive: "—",
  },
  {
    id: "USR-4398",
    name: "Jonas Keller",
    email: "jonas.keller@acme.co",
    role: "Editor",
    roleColor: "#2563eb",
    status: "active",
    mfa: "TOTP",
    sso: "Okta",
    lastActive: "14m",
  },
  {
    id: "USR-4385",
    name: "Leila Park",
    email: "leila.park@acme.co",
    role: "Admin",
    roleColor: "#dc2626",
    status: "active",
    mfa: "WebAuthn",
    sso: "Okta",
    lastActive: "22m",
  },
  {
    id: "USR-4372",
    name: "Omar Farooq",
    email: "omar.farooq@acme.co",
    role: "Guest",
    roleColor: "#ca8a04",
    status: "deactivated",
    mfa: "—",
    sso: "—",
    lastActive: "2d",
  },
  {
    id: "USR-4361",
    name: "Sofia Rossi",
    email: "sofia.rossi@acme.co",
    role: "Editor",
    roleColor: "#2563eb",
    status: "active",
    mfa: "TOTP",
    sso: "Google",
    lastActive: "1h",
  },
  {
    id: "USR-4350",
    name: "David Osei",
    email: "david.osei@acme.co",
    role: "Viewer",
    roleColor: "#059669",
    status: "invited",
    mfa: "—",
    sso: "—",
    lastActive: "—",
  },
  {
    id: "USR-4344",
    name: "Yuki Tanaka",
    email: "yuki.tanaka@acme.co",
    role: "Editor",
    roleColor: "#2563eb",
    status: "active",
    mfa: "WebAuthn",
    sso: "Okta",
    lastActive: "3h",
  },
  {
    id: "USR-4331",
    name: "Ava Lindgren",
    email: "ava.lindgren@acme.co",
    role: "Admin",
    roleColor: "#dc2626",
    status: "active",
    mfa: "TOTP",
    sso: "Okta",
    lastActive: "4h",
  },
  {
    id: "USR-4320",
    name: "Kenji Sato",
    email: "kenji.sato@acme.co",
    role: "Guest",
    roleColor: "#ca8a04",
    status: "active",
    mfa: "SMS",
    sso: "Google",
    lastActive: "6h",
  },
  {
    id: "USR-4311",
    name: "Nadia Ibrahim",
    email: "nadia.ibrahim@acme.co",
    role: "Viewer",
    roleColor: "#059669",
    status: "deactivated",
    mfa: "—",
    sso: "—",
    lastActive: "5d",
  },
]

const activityToday = [
  { who: "Elena Voss", hue: "#dc2626", verb: "promoted", obj: "Marcus Chen", tail: "to Editor", time: "2m", tone: "good" },
  { who: "System", hue: "#111827", verb: "sent invite to", obj: "Priya Nair", tail: "for Product team", time: "8m" },
  { who: "Jonas Keller", hue: "#2563eb", verb: "enabled", obj: "WebAuthn", tail: "on primary device", time: "14m", tone: "good" },
  { who: "Leila Park", hue: "#dc2626", verb: "deactivated", obj: "Omar Farooq", tail: "after offboarding", time: "22m", tone: "bad" },
  { who: "Sofia Rossi", hue: "#2563eb", verb: "joined", obj: "Design group", tail: "via self-serve", time: "1h" },
  { who: "System", hue: "#111827", verb: "auto-locked", obj: "3 dormant accounts", tail: "after 90 days", time: "2h", tone: "bad" },
]

const activityYesterday = [
  { who: "Ava Lindgren", hue: "#dc2626", verb: "exported", obj: "member directory", tail: "for compliance audit", time: "Tue 5:30p", tone: "good" },
  { who: "David Osei", hue: "#059669", verb: "accepted invite", obj: "—", tail: "and completed onboarding", time: "Tue 4:12p", tone: "good" },
  { who: "System", hue: "#111827", verb: "rotated", obj: "12 expired session tokens", tail: "across all regions", time: "Tue 3:00p" },
  { who: "Yuki Tanaka", hue: "#2563eb", verb: "switched SSO", obj: "Google → Okta", tail: "for unified access", time: "Tue 1:45p", tone: "good" },
]

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
      <rect x="3" y="3" width="26" height="26" rx="7" fill="#111827" />
      <circle cx="16" cy="13" r="5" fill="#059669" />
      <path d="M7 26c0-6 4-9 9-9s9 3 9 9" fill="#059669" />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "users") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M7 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/><path d="M17 11a4 4 0 0 1 3 3.87V21"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>)
  if (name === "shield") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>)
  if (name === "groups") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>)
  if (name === "activity") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>)
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

function Avatar({ name, hue = "#059669", size = 20 }) {
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
  const color = tone === "good" ? "#059669" : tone === "bad" ? "#dc2626" : "#059669"
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-7 w-[92px]" aria-hidden>
      <path d={path} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`${path} L${w},${h} L0,${h} Z`} fill={color} opacity="0.08" />
    </svg>
  )
}

function StatusPill({ status }) {
  const map = {
    active: { dot: "#059669", label: "Active", bg: "#d1fae5", fg: "#065f46" },
    invited: { dot: "#2563eb", label: "Invited", bg: "#dbeafe", fg: "#1e40af" },
    deactivated: { dot: "#9ca3af", label: "Deactivated", bg: "#f3f4f6", fg: "#4b5563" },
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
          <Avatar name="Ari Gomez" hue="#111827" size={28} />
        </div>
      </aside>

      {/* Left panel */}
      <aside className="hidden lg:flex w-60 shrink-0 flex-col border-r border-[var(--color-line)] bg-[var(--color-bg-2)]">
        {/* Workspace switcher */}
        <div className="flex items-center justify-between border-b border-[var(--color-line)] px-3 py-2.5">
          <button className="flex min-w-0 items-center gap-2 rounded-md px-1.5 py-1 text-left hover:bg-[var(--color-bg-3)]">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-[var(--color-ink)] text-[11px] font-semibold text-white">O</span>
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold leading-tight">Orbit Platform</p>
              <p className="truncate text-[10.5px] text-gray-500">People Ops · 184 members</p>
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
                      <Icon name="users" className="h-3.5 w-3.5 opacity-70" />
                      {v.name}
                    </span>
                    <span className={"text-[11px] " + (v.active ? "text-[var(--color-indigo)]" : "text-gray-400")}>{v.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Teams */}
          <div className="mb-3">
            <div className="flex items-center justify-between px-1.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
              <span className="flex items-center gap-1"><Icon name="chevron-down" className="h-3 w-3" /> Teams</span>
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
                    <Icon name="panel" className="h-3.5 w-3.5 opacity-60" />
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Try */}
          <div className="mt-4 rounded-lg border border-dashed border-[var(--color-line)] bg-white p-3">
            <p className="text-[11px] font-semibold text-[var(--color-ink)]">Bulk invite</p>
            <p className="mt-0.5 text-[11px] leading-snug text-gray-500">Upload a CSV to invite multiple team members and auto-assign roles and groups.</p>
            <button className="mt-2 inline-flex items-center gap-1 rounded-md bg-[var(--color-ink)] px-2 py-1 text-[11px] font-medium text-white">
              <span className="font-mono">Upload CSV</span>
            </button>
          </div>
        </div>

        <div className="border-t border-[var(--color-line)] px-3 py-2 text-[10.5px] text-gray-500">
          Orbit Platform · <a href="https://example.com" className="hover:text-[var(--color-ink)]">People handbook</a>
        </div>
      </aside>

      {/* Main column */}
      <main className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <div className="flex h-12 shrink-0 items-center gap-3 border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex min-w-0 items-center gap-1.5 text-[13px] text-gray-500">
            <span className="font-medium text-gray-700">Orbit</span>
            <Icon name="chevron-right" className="h-3 w-3 text-gray-300" />
            <span>People Ops</span>
            <Icon name="chevron-right" className="h-3 w-3 text-gray-300" />
            <span className="font-semibold text-[var(--color-ink)]">Directory</span>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Icon name="search" className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search members, roles, groups..."
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
              <Icon name="plus" className="h-3.5 w-3.5" /> <span className="hidden sm:inline">Invite member</span>
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
            Role: <span className="font-semibold">All</span>
            <button className="grid h-4 w-4 place-items-center rounded hover:bg-white/60">×</button>
          </span>
          <span className="inline-flex h-7 items-center gap-1.5 rounded-md bg-[var(--color-indigo-soft)] pl-1.5 pr-1 text-[12px] font-medium text-[var(--color-indigo)] shrink-0">
            Team: <span className="font-semibold">Engineering</span>
            <button className="grid h-4 w-4 place-items-center rounded hover:bg-white/60">×</button>
          </span>
          <button className="inline-flex h-7 items-center gap-1 rounded-md border border-dashed border-[var(--color-line)] px-2 text-[12px] text-gray-500 hover:bg-[var(--color-bg-2)] shrink-0">
            <Icon name="plus" className="h-3 w-3" /> Add filter
          </button>

          <div className="ml-auto flex items-center gap-2 shrink-0">
            <button className="inline-flex h-7 items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-2 text-[12px] text-gray-700 hover:bg-[var(--color-bg-2)]">
              <Icon name="sort" className="h-3 w-3" /> Last active
            </button>
            <div className="inline-flex h-7 items-center rounded-md border border-[var(--color-line)] bg-white p-0.5 text-[12px]">
              <button className="flex h-6 items-center gap-1 rounded-[4px] bg-[var(--color-bg-3)] px-2 font-medium text-[var(--color-ink)]">
                <Icon name="list" className="h-3 w-3" /> List
              </button>
              <button className="flex h-6 items-center gap-1 px-2 text-gray-500 hover:text-[var(--color-ink)]">
                <Icon name="board" className="h-3 w-3" /> Grid
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
              <div className="sticky top-0 z-10 grid grid-cols-[28px_80px_1fr_80px_60px_60px_80px_72px_48px] items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
                <span><input type="checkbox" className="h-3.5 w-3.5 accent-[var(--color-indigo)]" readOnly /></span>
                <span>ID</span>
                <span>Member</span>
                <span>Role</span>
                <span className="text-center">Status</span>
                <span className="hidden md:block text-center">MFA</span>
                <span className="hidden lg:block text-center">SSO</span>
                <span>Last active</span>
                <span className="text-right"></span>
              </div>

              {members.map((it) => (
                <div
                  key={it.id}
                  className={
                    "row-zebra group grid grid-cols-[28px_80px_1fr_80px_60px_60px_80px_72px_48px] items-center gap-3 border-b border-[var(--color-line-2)] px-4 text-[12.5px] " +
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
                  <span className="truncate">
                    <span className="font-medium text-[var(--color-ink)] block">{it.name}</span>
                    <span className="text-[11px] text-gray-500">{it.email}</span>
                  </span>
                  <span><RoleBadge name={it.role} color={it.roleColor} /></span>
                  <span className="flex justify-center"><StatusPill status={it.status} /></span>
                  <span className="hidden md:block text-center font-mono text-[11px] text-gray-600">{it.mfa}</span>
                  <span className="hidden lg:block text-center font-mono text-[11px] text-gray-600">{it.sso}</span>
                  <span className="font-mono text-[11px] text-gray-500">{it.lastActive}</span>
                  <span className="flex justify-end"><button className="text-gray-400 hover:text-[var(--color-ink)]"><Icon name="more" className="h-4 w-4" /></button></span>
                </div>
              ))}

              {/* Footer hint */}
              <div className="flex items-center justify-between px-4 py-2 text-[11px] text-gray-500">
                <span>12 of 184 members</span>
                <span className="font-mono hidden sm:inline">press <kbd className="rounded border border-[var(--color-line)] bg-white px-1 py-[1px]">I</kbd> to invite</span>
              </div>
            </div>
          </section>

          {/* Right activity rail */}
          <aside className="hidden xl:flex w-80 shrink-0 flex-col border-l border-[var(--color-line)] bg-white">
            <div className="flex h-11 shrink-0 items-center justify-between border-b border-[var(--color-line)] px-3">
              <p className="text-[13px] font-semibold">Recent activity</p>
              <div className="flex items-center gap-1">
                <button className="grid h-7 w-7 place-items-center rounded-md text-gray-500 hover:bg-[var(--color-bg-2)]" title="Filter"><Icon name="filter" className="h-[14px] w-[14px]" /></button>
                <button className="grid h-7 w-7 place-items-center rounded-md text-gray-500 hover:bg-[var(--color-bg-2)]" title="Hide panel"><Icon name="panel" className="h-[14px] w-[14px]" /></button>
              </div>
            </div>

            {/* chip row */}
            <div className="flex shrink-0 items-center gap-1.5 border-b border-[var(--color-line)] px-3 py-2 text-[11.5px]">
              <button className="rounded-full bg-[var(--color-ink)] px-2 py-[3px] font-medium text-white">All</button>
              <button className="rounded-full border border-[var(--color-line)] px-2 py-[3px] text-gray-600 hover:bg-[var(--color-bg-2)]">Invites</button>
              <button className="rounded-full border border-[var(--color-line)] px-2 py-[3px] text-gray-600 hover:bg-[var(--color-bg-2)]">Roles</button>
              <button className="rounded-full border border-[var(--color-line)] px-2 py-[3px] text-gray-600 hover:bg-[var(--color-bg-2)]">Security</button>
            </div>

            <div className="scroll-thin min-h-0 flex-1 overflow-y-auto">
              <ActivityGroup title="Today" items={activityToday} />
              <ActivityGroup title="Yesterday" items={activityYesterday} />

              <div className="px-3 py-4">
                <div className="rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-2)] p-3">
                  <p className="text-[11.5px] font-semibold">Weekly snapshot</p>
                  <p className="mt-0.5 text-[11.5px] leading-snug text-gray-500">
                    7 invites sent · 4 onboarded · 3 roles changed · 2 accounts locked this week.
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
