const appNav = [
  { icon: "inbox", label: "Inbox", count: 12 },
  { icon: "issues", label: "Issues", active: true },
  { icon: "pr", label: "Pull requests", count: 4 },
  { icon: "templates", label: "Templates" },
  { icon: "insights", label: "Insights" },
  { icon: "docs", label: "Docs" },
  { icon: "automations", label: "Automations" },
  { icon: "settings", label: "Settings" },
]

const views = [
  { name: "Active issues", count: 68, active: true },
  { name: "My issues", count: 14 },
  { name: "All issues", count: 412 },
  { name: "Triage", count: 9 },
  { name: "Recently closed", count: 31 },
]

const teams = [
  { name: "Engineering", color: "#5b5bd6", short: "ENG", count: 47 },
  { name: "Templates", color: "#059669", short: "TPL", count: 23 },
  { name: "Platform", color: "#0284c7", short: "PLT", count: 18 },
  { name: "Design", color: "#7c3aed", short: "DSG", count: 11 },
  { name: "Growth", color: "#d97706", short: "GRW", count: 6 },
]

const privateLists = [
  { name: "Up next" },
  { name: "Reading list" },
  { name: "Roadmap — Q2" },
]

const kpis = [
  { label: "Open issues", value: "68", delta: "+4", dir: "up", spark: [18, 22, 20, 28, 26, 32, 30, 34, 36, 38, 40, 42] },
  { label: "P0 bugs", value: "3", delta: "-2", dir: "down", tone: "good", spark: [9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3] },
  { label: "Cycle velocity", value: "42 pts", delta: "+6%", dir: "up", spark: [20, 24, 22, 28, 30, 34, 32, 36, 38, 40, 42, 44] },
  { label: "WIP", value: "17", delta: "+1", dir: "up", spark: [11, 13, 12, 14, 15, 14, 16, 16, 15, 17, 17, 17] },
]

const issues = [
  {
    id: "ENG-1482",
    title: "Flaky test: `templates/blog-minimal` fails on Node 22 in CI",
    status: "in_progress", priority: "urgent",
    assignee: { name: "Sana Iyer", hue: "#5b5bd6" },
    labels: [{ name: "ci", color: "#5b5bd6" }, { name: "bug", color: "#e11d48" }],
    due: "Apr 18", updated: "2m", selected: true,
  },
  {
    id: "ENG-1481",
    title: "Pre-signed upload URLs expire mid-publish for > 40 MB bundles",
    status: "in_progress", priority: "high",
    assignee: { name: "Kavi Patel", hue: "#059669" },
    labels: [{ name: "api", color: "#0284c7" }, { name: "publish", color: "#7c3aed" }],
    due: "Apr 19", updated: "14m",
  },
  {
    id: "TPL-309",
    title: "Add `dashboard-admin-console` to the templates registry",
    status: "in_review", priority: "high",
    assignee: { name: "Marcus Lee", hue: "#d97706" },
    labels: [{ name: "registry", color: "#059669" }, { name: "template", color: "#5b5bd6" }],
    due: "Apr 16", updated: "37m",
  },
  {
    id: "ENG-1479",
    title: "Rate limiter swallows 429 on the edge runtime (Vercel fn)",
    status: "todo", priority: "urgent",
    assignee: { name: "Amara Reyes", hue: "#7c3aed" },
    labels: [{ name: "edge", color: "#d97706" }, { name: "bug", color: "#e11d48" }],
    due: "Apr 17", updated: "1h",
  },
  {
    id: "PLT-221",
    title: "Postgres read replica promotion runbook — missing step 4",
    status: "backlog", priority: "medium",
    assignee: { name: "Ren Okafor", hue: "#0284c7" },
    labels: [{ name: "runbook", color: "#6b7280" }],
    due: "Apr 22", updated: "2h",
  },
  {
    id: "ENG-1476",
    title: "CLI: `1dt new` should default to the user's last-used framework",
    status: "in_progress", priority: "medium",
    assignee: { name: "Sana Iyer", hue: "#5b5bd6" },
    labels: [{ name: "cli", color: "#5b5bd6" }, { name: "dx", color: "#059669" }],
    due: "Apr 24", updated: "3h",
  },
  {
    id: "DSG-088",
    title: "Empty states for the templates gallery feel cold — refresh copy",
    status: "todo", priority: "low",
    assignee: { name: "Iris Tan", hue: "#7c3aed" },
    labels: [{ name: "copy", color: "#7c3aed" }, { name: "ux", color: "#5b5bd6" }],
    due: "Apr 28", updated: "5h",
  },
  {
    id: "GRW-044",
    title: "Instrument referral attribution on `1devtool.com/new`",
    status: "in_review", priority: "medium",
    assignee: { name: "Dani Rhee", hue: "#d97706" },
    labels: [{ name: "analytics", color: "#0284c7" }],
    due: "Apr 21", updated: "6h",
  },
  {
    id: "TPL-307",
    title: "Template README generator strips code fences in multi-line examples",
    status: "in_progress", priority: "high",
    assignee: { name: "Marcus Lee", hue: "#d97706" },
    labels: [{ name: "template", color: "#5b5bd6" }, { name: "bug", color: "#e11d48" }],
    due: "Apr 18", updated: "7h",
  },
  {
    id: "ENG-1470",
    title: "Migrate logger to OpenTelemetry — drop custom span wrapper",
    status: "backlog", priority: "low",
    assignee: { name: "Kavi Patel", hue: "#059669" },
    labels: [{ name: "obs", color: "#6b7280" }, { name: "chore", color: "#6b7280" }],
    due: "May 02", updated: "1d",
  },
  {
    id: "PLT-219",
    title: "S3 lifecycle policy: archive build artifacts older than 30d",
    status: "done", priority: "low",
    assignee: { name: "Ren Okafor", hue: "#0284c7" },
    labels: [{ name: "infra", color: "#0284c7" }],
    due: "Apr 14", updated: "1d",
  },
  {
    id: "ENG-1468",
    title: "Sidebar keyboard nav skips collapsed sections on ArrowDown",
    status: "done", priority: "medium",
    assignee: { name: "Amara Reyes", hue: "#7c3aed" },
    labels: [{ name: "a11y", color: "#059669" }, { name: "ui", color: "#5b5bd6" }],
    due: "Apr 13", updated: "2d",
  },
]

const activityToday = [
  { who: "Sana Iyer", hue: "#5b5bd6", verb: "moved", obj: "ENG-1482", tail: "to In progress", time: "2m" },
  { who: "Kavi Patel", hue: "#059669", verb: "commented on", obj: "ENG-1481", time: "14m" },
  { who: "CI · GitHub", hue: "#0b0d12", verb: "failed", obj: "templates-suite #4812", tail: "on main", time: "28m", tone: "bad" },
  { who: "Marcus Lee", hue: "#d97706", verb: "opened PR", obj: "#842", tail: "dashboard-admin-console", time: "37m" },
  { who: "Amara Reyes", hue: "#7c3aed", verb: "assigned", obj: "ENG-1479", tail: "to herself", time: "1h" },
  { who: "Iris Tan", hue: "#7c3aed", verb: "labeled", obj: "DSG-088", tail: "copy, ux", time: "5h" },
]

const activityYesterday = [
  { who: "Dani Rhee", hue: "#d97706", verb: "closed", obj: "GRW-043", tail: "as completed", time: "Mon 6:12p", tone: "good" },
  { who: "Ren Okafor", hue: "#0284c7", verb: "shipped", obj: "PLT-219", tail: "to production", time: "Mon 4:48p", tone: "good" },
  { who: "1DevTool bot", hue: "#5b5bd6", verb: "auto-archived", obj: "12 stale issues", time: "Mon 3:00p" },
  { who: "Sana Iyer", hue: "#5b5bd6", verb: "merged PR", obj: "#839", tail: "into main", time: "Mon 2:07p" },
]

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
      <rect x="3" y="3" width="26" height="26" rx="7" fill="#5b5bd6" />
      <path d="M10 11v10M10 11h5a4 4 0 0 1 0 8h-5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="22" cy="20" r="1.6" fill="#fff" />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
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
  return null
}

function Avatar({ name, hue = "#5b5bd6", size = 20 }) {
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
  const color = tone === "good" ? "#059669" : tone === "bad" ? "#e11d48" : "#5b5bd6"
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-7 w-[92px]" aria-hidden>
      <path d={path} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`${path} L${w},${h} L0,${h} Z`} fill={color} opacity="0.08" />
    </svg>
  )
}

function StatusPill({ status }) {
  const map = {
    backlog: { dot: "#9ca3af", label: "Backlog", bg: "#f5f6f8", fg: "#4b5563" },
    todo: { dot: "#6b7280", label: "Todo", bg: "#f5f6f8", fg: "#374151" },
    in_progress: { dot: "#d97706", label: "In progress", bg: "#fef3c7", fg: "#92400e" },
    in_review: { dot: "#5b5bd6", label: "In review", bg: "#eef0ff", fg: "#3730a3" },
    done: { dot: "#059669", label: "Done", bg: "#d1fae5", fg: "#065f46" },
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

function Priority({ level }) {
  if (level === "urgent") return <span className="text-rose-600" title="Urgent"><Icon name="priority-urgent" className="h-3.5 w-3.5" /></span>
  if (level === "high") return <span className="text-gray-700" title="High"><Icon name="priority-high" className="h-3.5 w-3.5" /></span>
  if (level === "medium") return <span className="text-gray-500" title="Medium"><Icon name="priority-medium" className="h-3.5 w-3.5" /></span>
  return <span className="text-gray-400" title="Low"><Icon name="priority-low" className="h-3.5 w-3.5" /></span>
}

function Label({ name, color }) {
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
      <aside className="flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
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
          <Avatar name="Van Khoa" hue="#0b0d12" size={28} />
        </div>
      </aside>

      {/* Left panel */}
      <aside className="flex w-60 shrink-0 flex-col border-r border-[var(--color-line)] bg-[var(--color-bg-2)]">
        {/* Workspace switcher */}
        <div className="flex items-center justify-between border-b border-[var(--color-line)] px-3 py-2.5">
          <button className="flex min-w-0 items-center gap-2 rounded-md px-1.5 py-1 text-left hover:bg-[var(--color-bg-3)]">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-[var(--color-ink)] text-[11px] font-semibold text-white">A</span>
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold leading-tight">Acme · 1DevTool</p>
              <p className="truncate text-[10.5px] text-gray-500">Growth · 34 members</p>
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
                      <Icon name="issues" className="h-3.5 w-3.5 opacity-70" />
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
                    <Icon name="docs" className="h-3.5 w-3.5 opacity-60" />
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Try */}
          <div className="mt-4 rounded-lg border border-dashed border-[var(--color-line)] bg-white p-3">
            <p className="text-[11px] font-semibold text-[var(--color-ink)]">Ship a template</p>
            <p className="mt-0.5 text-[11px] leading-snug text-gray-500">Publish your Next.js starter to the 1DevTool registry in a single command.</p>
            <button className="mt-2 inline-flex items-center gap-1 rounded-md bg-[var(--color-ink)] px-2 py-1 text-[11px] font-medium text-white">
              <span className="font-mono">1dt publish</span>
            </button>
          </div>
        </div>

        <div className="border-t border-[var(--color-line)] px-3 py-2 text-[10.5px] text-gray-500">
          © 2026 1DevTool · <a href="https://1devtool.com" className="hover:text-[var(--color-ink)]">1devtool.com</a>
        </div>
      </aside>

      {/* Main column */}
      <main className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <div className="flex h-12 shrink-0 items-center gap-3 border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex min-w-0 items-center gap-1.5 text-[13px] text-gray-500">
            <span className="font-medium text-gray-700">Acme</span>
            <Icon name="chevron-right" className="h-3 w-3 text-gray-300" />
            <span>Engineering</span>
            <Icon name="chevron-right" className="h-3 w-3 text-gray-300" />
            <span className="font-semibold text-[var(--color-ink)]">Active issues</span>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <Icon name="search" className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search issues, PRs, templates…"
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
              <Icon name="plus" className="h-3.5 w-3.5" /> New issue
            </button>
          </div>
        </div>

        {/* Filters & view switcher */}
        <div className="flex shrink-0 items-center gap-2 border-b border-[var(--color-line)] bg-white px-4 py-2">
          <button className="inline-flex h-7 items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-2 text-[12px] text-gray-700 hover:bg-[var(--color-bg-2)]">
            <Icon name="filter" className="h-3 w-3" /> Filter
          </button>
          <span className="inline-flex h-7 items-center gap-1.5 rounded-md bg-[var(--color-indigo-soft)] pl-1.5 pr-1 text-[12px] font-medium text-[var(--color-indigo)]">
            Status: <span className="font-semibold">Active</span>
            <button className="grid h-4 w-4 place-items-center rounded hover:bg-white/60">×</button>
          </span>
          <span className="inline-flex h-7 items-center gap-1.5 rounded-md bg-[var(--color-indigo-soft)] pl-1.5 pr-1 text-[12px] font-medium text-[var(--color-indigo)]">
            Priority: <span className="font-semibold">Urgent, High</span>
            <button className="grid h-4 w-4 place-items-center rounded hover:bg-white/60">×</button>
          </span>
          <span className="inline-flex h-7 items-center gap-1.5 rounded-md bg-[var(--color-indigo-soft)] pl-1.5 pr-1 text-[12px] font-medium text-[var(--color-indigo)]">
            Team: <span className="font-semibold">Engineering, Templates</span>
            <button className="grid h-4 w-4 place-items-center rounded hover:bg-white/60">×</button>
          </span>
          <button className="inline-flex h-7 items-center gap-1 rounded-md border border-dashed border-[var(--color-line)] px-2 text-[12px] text-gray-500 hover:bg-[var(--color-bg-2)]">
            <Icon name="plus" className="h-3 w-3" /> Add filter
          </button>

          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-7 items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-2 text-[12px] text-gray-700 hover:bg-[var(--color-bg-2)]">
              <Icon name="sort" className="h-3 w-3" /> Priority
            </button>
            <div className="inline-flex h-7 items-center rounded-md border border-[var(--color-line)] bg-white p-0.5 text-[12px]">
              <button className="flex h-6 items-center gap-1 rounded-[4px] bg-[var(--color-bg-3)] px-2 font-medium text-[var(--color-ink)]">
                <Icon name="list" className="h-3 w-3" /> List
              </button>
              <button className="flex h-6 items-center gap-1 px-2 text-gray-500 hover:text-[var(--color-ink)]">
                <Icon name="board" className="h-3 w-3" /> Board
              </button>
              <button className="flex h-6 items-center gap-1 px-2 text-gray-500 hover:text-[var(--color-ink)]">
                <Icon name="timeline" className="h-3 w-3" /> Timeline
              </button>
            </div>
            <div className="flex -space-x-1.5 pl-1">
              <span className="ring-2 ring-white rounded-full"><Avatar name="Sana Iyer" hue="#5b5bd6" size={22} /></span>
              <span className="ring-2 ring-white rounded-full"><Avatar name="Kavi Patel" hue="#059669" size={22} /></span>
              <span className="ring-2 ring-white rounded-full"><Avatar name="Marcus Lee" hue="#d97706" size={22} /></span>
              <span className="ring-2 ring-white rounded-full"><Avatar name="Amara Reyes" hue="#7c3aed" size={22} /></span>
              <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-[var(--color-bg-3)] text-[10px] font-medium text-gray-600 ring-2 ring-white">+6</span>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="flex min-h-0 flex-1">
          {/* Center */}
          <section className="flex min-w-0 flex-1 flex-col overflow-hidden">
            {/* KPI strip */}
            <div className="grid shrink-0 grid-cols-4 gap-px border-b border-[var(--color-line)] bg-[var(--color-line)]">
              {kpis.map((k) => (
                <div key={k.label} className="bg-white px-4 py-3">
                  <p className="text-[11px] uppercase tracking-wider text-gray-500">{k.label}</p>
                  <div className="mt-1 flex items-end justify-between">
                    <div>
                      <p className="text-[22px] font-semibold leading-none tracking-tight">{k.value}</p>
                      <p className={"mt-1.5 inline-flex items-center gap-0.5 text-[11px] font-medium " + (
                        (k.tone === "good" && k.dir === "down") || (k.tone !== "good" && k.dir === "up" && k.label !== "P0 bugs")
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
              <div className="sticky top-0 z-10 grid grid-cols-[28px_96px_1fr_120px_36px_180px_220px_84px_64px] items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
                <span><input type="checkbox" className="h-3.5 w-3.5 accent-[var(--color-indigo)]" readOnly /></span>
                <span>ID</span>
                <span>Title</span>
                <span>Status</span>
                <span className="text-center">Pri</span>
                <span>Assignee</span>
                <span>Labels</span>
                <span>Due</span>
                <span className="text-right">Updated</span>
              </div>

              {issues.map((it) => (
                <div
                  key={it.id}
                  className={
                    "row-zebra group grid h-[34px] grid-cols-[28px_96px_1fr_120px_36px_180px_220px_84px_64px] items-center gap-3 border-b border-[var(--color-line-2)] px-4 text-[12.5px] " +
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
                  <span className="truncate font-medium text-[var(--color-ink)]">
                    {it.title}
                  </span>
                  <span><StatusPill status={it.status} /></span>
                  <span className="grid place-items-center"><Priority level={it.priority} /></span>
                  <span className="flex items-center gap-1.5 truncate">
                    <Avatar name={it.assignee.name} hue={it.assignee.hue} size={18} />
                    <span className="truncate text-gray-700">{it.assignee.name}</span>
                  </span>
                  <span className="flex items-center gap-1 truncate">
                    {it.labels.map((l) => (
                      <Label key={l.name} name={l.name} color={l.color} />
                    ))}
                  </span>
                  <span className="font-mono text-[11px] text-gray-500">{it.due}</span>
                  <span className="text-right font-mono text-[11px] text-gray-400">{it.updated}</span>
                </div>
              ))}

              {/* Footer hint */}
              <div className="flex items-center justify-between px-4 py-2 text-[11px] text-gray-500">
                <span>12 of 68 issues</span>
                <span className="font-mono">press <kbd className="rounded border border-[var(--color-line)] bg-white px-1 py-[1px]">C</kbd> to create</span>
              </div>
            </div>
          </section>

          {/* Right activity rail */}
          <aside className="flex w-80 shrink-0 flex-col border-l border-[var(--color-line)] bg-white">
            <div className="flex h-11 shrink-0 items-center justify-between border-b border-[var(--color-line)] px-3">
              <p className="text-[13px] font-semibold">Activity</p>
              <div className="flex items-center gap-1">
                <button className="grid h-7 w-7 place-items-center rounded-md text-gray-500 hover:bg-[var(--color-bg-2)]" title="Filter"><Icon name="filter" className="h-[14px] w-[14px]" /></button>
                <button className="grid h-7 w-7 place-items-center rounded-md text-gray-500 hover:bg-[var(--color-bg-2)]" title="Hide panel"><Icon name="panel" className="h-[14px] w-[14px]" /></button>
              </div>
            </div>

            {/* chip row */}
            <div className="flex shrink-0 items-center gap-1.5 border-b border-[var(--color-line)] px-3 py-2 text-[11.5px]">
              <button className="rounded-full bg-[var(--color-ink)] px-2 py-[3px] font-medium text-white">All</button>
              <button className="rounded-full border border-[var(--color-line)] px-2 py-[3px] text-gray-600 hover:bg-[var(--color-bg-2)]">Issues</button>
              <button className="rounded-full border border-[var(--color-line)] px-2 py-[3px] text-gray-600 hover:bg-[var(--color-bg-2)]">PRs</button>
              <button className="rounded-full border border-[var(--color-line)] px-2 py-[3px] text-gray-600 hover:bg-[var(--color-bg-2)]">CI</button>
              <button className="rounded-full border border-[var(--color-line)] px-2 py-[3px] text-gray-600 hover:bg-[var(--color-bg-2)]">Comments</button>
            </div>

            <div className="scroll-thin min-h-0 flex-1 overflow-y-auto">
              <ActivityGroup title="Today" items={activityToday} />
              <ActivityGroup title="Yesterday" items={activityYesterday} />

              <div className="px-3 py-4">
                <div className="rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-2)] p-3">
                  <p className="text-[11.5px] font-semibold">Weekly digest</p>
                  <p className="mt-0.5 text-[11.5px] leading-snug text-gray-500">
                    47 issues closed · 23 PRs merged · 6 templates published to the 1DevTool registry.
                  </p>
                  <a href="#" className="mt-2 inline-flex items-center gap-1 text-[11.5px] font-medium text-[var(--color-indigo)]">
                    Read digest <Icon name="chevron-right" className="h-3 w-3" />
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
