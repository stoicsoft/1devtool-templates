export function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
      <rect x="3" y="3" width="26" height="26" rx="7" fill="#5b5bd6" />
      <path d="M10 11v10M10 11h5a4 4 0 0 1 0 8h-5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="22" cy="20" r="1.6" fill="#fff" />
    </svg>
  )
}

export function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "inbox") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 13h5l1 3h6l1-3h5"/><path d="M5 6h14l2 7v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5l2-7Z"/></svg>)
  if (name === "issues") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>)
  if (name === "pr") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M6 8.5v7M15.5 18H9M18 15.5V9a3 3 0 0 0-3-3h-2m0 0 2-2m-2 2 2 2"/></svg>)
  if (name === "templates") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>)
  if (name === "insights") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 4v16h16"/><path d="M7 14l3-3 3 3 5-6"/></svg>)
  if (name === "docs") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 3h8l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5M9 13h7M9 17h5"/></svg>)
  if (name === "automations") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="3.5"/></svg>)
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
  if (name === "priority-urgent") return (<svg viewBox="0 0 24 24" className={className} fill="#e11d48" stroke="none"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v5M12 16v.01" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>)
  if (name === "priority-high") return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 14l3-3M5 18l6-6M5 22l9-9"/></svg>)
  if (name === "priority-medium") return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 16l3-3M5 20l6-6"/></svg>)
  if (name === "priority-low") return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 20l3-3"/></svg>)
  if (name === "circle") return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="7"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "kbd-cmd") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M9 9V7a2 2 0 1 0-2 2h10a2 2 0 1 0-2-2v2m0 0v6m0 0v2a2 2 0 1 0 2-2H7a2 2 0 1 0 2 2v-2m0-6h6"/></svg>)
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "bell") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M6 8a6 6 0 0 1 12 0c0 5 2 7 2 7H4s2-2 2-7ZM10 20a2 2 0 0 0 4 0"/></svg>)
  if (name === "help") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.9.4-1.5 1-1.5 2.2M12 17.5v.01"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 19V5M5 12l7-7 7 7"/></svg>)
  if (name === "arrow-down") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M19 12l-7 7-7-7"/></svg>)
  if (name === "user") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>)
  if (name === "shield") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>)
  if (name === "lock") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>)
  if (name === "key") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 3-5.5 5.5M15 3l6 6"/></svg>)
  if (name === "clock") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>)
  if (name === "check-circle") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/></svg>)
  if (name === "x-circle") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/></svg>)
  if (name === "more") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>)
  return null
}

export function Avatar({ name, hue = "#5b5bd6", size = 20 }) {
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

export function Spark({ points, tone = "indigo" }) {
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
  const color = tone === "good" ? "#059669" : tone === "bad" ? "#e11d48" : "#5b5bd6"
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-7 w-[92px]" aria-hidden>
      <path d={path} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`${path} L${w},${h} L0,${h} Z`} fill={color} opacity="0.08" />
    </svg>
  )
}

export function StatusPill({ status }) {
  const map = {
    backlog: { dot: "#9ca3af", label: "Backlog", bg: "#f5f6f8", fg: "#4b5563" },
    todo: { dot: "#6b7280", label: "Todo", bg: "#f5f6f8", fg: "#374151" },
    in_progress: { dot: "#d97706", label: "In progress", bg: "#fef3c7", fg: "#92400e" },
    in_review: { dot: "#5b5bd6", label: "In review", bg: "#eef0ff", fg: "#3730a3" },
    done: { dot: "#059669", label: "Done", bg: "#d1fae5", fg: "#065f46" },
    active: { dot: "#059669", label: "Active", bg: "#d1fae5", fg: "#065f46" },
    suspended: { dot: "#e11d48", label: "Suspended", bg: "#ffe4e6", fg: "#9f1239" },
    pending: { dot: "#d97706", label: "Pending", bg: "#fef3c7", fg: "#92400e" },
    enforced: { dot: "#059669", label: "Enforced", bg: "#d1fae5", fg: "#065f46" },
    draft: { dot: "#6b7280", label: "Draft", bg: "#f5f6f8", fg: "#374151" },
  }
  const s = map[status]
  if (!s) return null
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

export function Priority({ level }) {
  if (level === "urgent") return <span className="text-rose-600" title="Urgent"><Icon name="priority-urgent" className="h-3.5 w-3.5" /></span>
  if (level === "high") return <span className="text-gray-700" title="High"><Icon name="priority-high" className="h-3.5 w-3.5" /></span>
  if (level === "medium") return <span className="text-gray-500" title="Medium"><Icon name="priority-medium" className="h-3.5 w-3.5" /></span>
  return <span className="text-gray-400" title="Low"><Icon name="priority-low" className="h-3.5 w-3.5" /></span>
}

export function Label({ name, color }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-1.5 py-0.5 text-[10.5px] font-medium text-gray-700">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
      {name}
    </span>
  )
}

export function ActivityGroup({ title, items }) {
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

export const appNav = [
  { icon: "panel", label: "Overview", href: "/" },
  { icon: "issues", label: "Users", count: 18, href: "/users" },
  { icon: "pr", label: "Approval queue", count: 7, href: "/" },
  { icon: "templates", label: "Roles", href: "/roles" },
  { icon: "insights", label: "Audit logs", href: "/" },
  { icon: "docs", label: "Runbooks", href: "/" },
  { icon: "automations", label: "Policies", href: "/policies" },
  { icon: "settings", label: "Settings", href: "/" },
]

export function NavRail({ active }) {
  return (
    <aside className="flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
      <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg">
        <Logo />
      </a>
      <div className="mt-1 flex flex-1 flex-col items-center gap-1">
        {appNav.map((n) => (
          <a
            key={n.label}
            href={n.href}
            className={
              "group relative grid h-9 w-9 place-items-center rounded-md text-[13px] transition " +
              (n.label === active
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
          </a>
        ))}
      </div>
      <div className="flex flex-col items-center gap-1 pb-1">
        <button className="grid h-9 w-9 place-items-center rounded-md text-gray-500 hover:bg-[var(--color-bg-3)]" title="Help">
          <Icon name="help" />
        </button>
        <Avatar name="Ari Gomez" hue="#0b0d12" size={28} />
      </div>
    </aside>
  )
}

export function WorkspaceSwitcher() {
  return (
    <div className="flex items-center justify-between border-b border-[var(--color-line)] px-3 py-2.5">
      <button className="flex min-w-0 items-center gap-2 rounded-md px-1.5 py-1 text-left hover:bg-[var(--color-bg-3)]">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-[var(--color-ink)] text-[11px] font-semibold text-white">A</span>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold leading-tight">Northstar Cloud</p>
          <p className="truncate text-[10.5px] text-gray-500">Identity team · 22 admins</p>
        </div>
        <Icon name="chevron-down" className="h-3.5 w-3.5 text-gray-400" />
      </button>
      <button className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-gray-500 hover:bg-[var(--color-bg-3)]" title="Notifications">
        <Icon name="bell" className="h-[15px] w-[15px]" />
      </button>
    </div>
  )
}

export function TopBar({ breadcrumbs, actionLabel = "New policy" }) {
  return (
    <div className="flex h-12 shrink-0 items-center gap-3 border-b border-[var(--color-line)] bg-white px-4">
      <div className="flex min-w-0 items-center gap-1.5 text-[13px] text-gray-500">
        {breadcrumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <Icon name="chevron-right" className="h-3 w-3 text-gray-300" />}
            {i === breadcrumbs.length - 1 ? (
              <span className="font-semibold text-[var(--color-ink)]">{crumb}</span>
            ) : (
              <span className="font-medium text-gray-700">{crumb}</span>
            )}
          </span>
        ))}
      </div>

      <div className="ml-auto flex items-center gap-2">
        <div className="relative">
          <Icon name="search" className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search users, roles, audit logs..."
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
          <Icon name="plus" className="h-3.5 w-3.5" /> {actionLabel}
        </button>
      </div>
    </div>
  )
}
