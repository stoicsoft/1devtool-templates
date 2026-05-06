// StoicSoft — Quiet software
// Minimal project dashboard. Single-file, server-rendered.

const team = [
  { id: "sk", name: "Sana Kapoor", tone: "#fecaca" },
  { id: "ml", name: "Marcus Lee", tone: "#bfdbfe" },
  { id: "ar", name: "Amara Reyes", tone: "#bbf7d0" },
  { id: "kp", name: "Kavi Patel", tone: "#fde68a" },
  { id: "jn", name: "Jin Nakamura", tone: "#ddd6fe" },
  { id: "ro", name: "Rhea O'Connor", tone: "#fbcfe8" },
]

const byId = Object.fromEntries(team.map((t) => [t.id, t]))

const labels = {
  api:     { t: "api",     bg: "#eef2ff", fg: "#4338ca" },
  design:  { t: "design",  bg: "#fdf2f8", fg: "#be185d" },
  infra:   { t: "infra",   bg: "#f0fdf4", fg: "#047857" },
  bug:     { t: "bug",     bg: "#fef2f2", fg: "#b91c1c" },
  growth:  { t: "growth",  bg: "#fffbeb", fg: "#b45309" },
  docs:    { t: "docs",    bg: "#f5f3ff", fg: "#6d28d9" },
  mobile:  { t: "mobile",  bg: "#ecfeff", fg: "#0e7490" },
  polish:  { t: "polish",  bg: "#f8fafc", fg: "#475569" },
}

const columns = [
  {
    key: "backlog",
    title: "Backlog",
    tasks: [
      {
        id: "STOIC-412",
        title: "Rework empty-state illustrations for Inbox views",
        priority: "low",
        assignee: "ar",
        due: "May 2",
        labels: ["design", "polish"],
        comments: 2,
        attachments: 0,
      },
      {
        id: "STOIC-418",
        title: "Audit slow queries on the activity feed (>800ms p95)",
        priority: "med",
        assignee: "ml",
        due: "May 4",
        labels: ["infra", "bug"],
        comments: 4,
        attachments: 1,
      },
      {
        id: "STOIC-421",
        title: "Investigate SAML SCIM deprovisioning edge case",
        priority: "high",
        assignee: "kp",
        due: "May 6",
        labels: ["api"],
        comments: 1,
        attachments: 0,
      },
      {
        id: "STOIC-427",
        title: "Draft migration guide for workspace-scoped tokens",
        priority: "low",
        assignee: "jn",
        due: "May 9",
        labels: ["docs"],
        comments: 0,
        attachments: 2,
      },
    ],
  },
  {
    key: "in-progress",
    title: "In progress",
    tasks: [
      {
        id: "STOIC-401",
        title: "Ship real-time presence on the shared board view",
        priority: "urgent",
        assignee: "sk",
        due: "Apr 18",
        labels: ["api", "design"],
        comments: 12,
        attachments: 3,
        pinned: true,
      },
      {
        id: "STOIC-404",
        title: "Replace websocket reconnect with exponential backoff",
        priority: "high",
        assignee: "ml",
        due: "Apr 20",
        labels: ["infra", "bug"],
        comments: 6,
        attachments: 0,
      },
      {
        id: "STOIC-406",
        title: "Mobile: keyboard-aware compose bar for task comments",
        priority: "med",
        assignee: "ro",
        due: "Apr 22",
        labels: ["mobile", "design"],
        comments: 3,
        attachments: 1,
      },
      {
        id: "STOIC-409",
        title: "Add keyboard shortcut hints to the command palette",
        priority: "low",
        assignee: "jn",
        due: "Apr 24",
        labels: ["polish"],
        comments: 2,
        attachments: 0,
      },
    ],
  },
  {
    key: "in-review",
    title: "In review",
    tasks: [
      {
        id: "STOIC-388",
        title: "REST: paginate /v1/projects/:id/members with keyset cursor",
        priority: "high",
        assignee: "kp",
        due: "Apr 16",
        labels: ["api"],
        comments: 5,
        attachments: 0,
      },
      {
        id: "STOIC-392",
        title: "Kanban drag handle: 2px hit-target on trackpads",
        priority: "med",
        assignee: "ar",
        due: "Apr 17",
        labels: ["design", "bug"],
        comments: 8,
        attachments: 2,
      },
      {
        id: "STOIC-395",
        title: "Public roadmap page: SEO meta + OG image generator",
        priority: "med",
        assignee: "jn",
        due: "Apr 18",
        labels: ["growth"],
        comments: 1,
        attachments: 1,
      },
    ],
  },
  {
    key: "done",
    title: "Done",
    tasks: [
      {
        id: "STOIC-360",
        title: "Workspace settings: transfer ownership flow",
        priority: "high",
        assignee: "sk",
        due: "Apr 10",
        labels: ["api"],
        comments: 9,
        attachments: 0,
        done: true,
      },
      {
        id: "STOIC-371",
        title: "Editor: paste-as-task for markdown checklists",
        priority: "med",
        assignee: "ro",
        due: "Apr 11",
        labels: ["polish", "design"],
        comments: 4,
        attachments: 1,
        done: true,
      },
      {
        id: "STOIC-379",
        title: "Remove legacy /v0 notifications endpoint",
        priority: "low",
        assignee: "ml",
        due: "Apr 12",
        labels: ["api", "infra"],
        comments: 2,
        attachments: 0,
        done: true,
      },
      {
        id: "STOIC-384",
        title: "Onboarding tour: pause when user opens a task",
        priority: "low",
        assignee: "ar",
        due: "Apr 13",
        labels: ["growth", "polish"],
        comments: 3,
        attachments: 0,
        done: true,
      },
    ],
  },
]

const activity = [
  { who: "sk", verb: "moved", target: "STOIC-401", detail: "Real-time presence on shared board view", to: "In progress", when: "12m ago" },
  { who: "ml", verb: "commented on", target: "STOIC-404", detail: "Exponential backoff for websocket reconnect", when: "34m ago" },
  { who: "kp", verb: "opened a review on", target: "STOIC-388", detail: "Keyset cursor for project members API", when: "1h ago" },
  { who: "ar", verb: "closed", target: "STOIC-384", detail: "Onboarding tour: pause on task open", when: "3h ago" },
  { who: "jn", verb: "added a label to", target: "STOIC-395", detail: "OG image generator for roadmap", when: "5h ago" },
  { who: "ro", verb: "attached a file to", target: "STOIC-392", detail: "Drag handle hit-target fix", when: "yesterday" },
]

// ---------- Icons ----------
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }

function Logo({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="#0a0a0a" />
      <path d="M8 15.5c1.2.8 2.6 1.2 4 1.2 3 0 4.5-1.4 4.5-3.1 0-3.6-7.5-1.9-7.5-4.7 0-1.4 1.3-2.4 3.6-2.4 1.4 0 2.6.3 3.6.9"
        fill="none" stroke="#fafafa" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  if (name === "search")   return (<svg viewBox="0 0 24 24" className={className} {...stroke}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>)
  if (name === "inbox")    return (<svg viewBox="0 0 24 24" className={className} {...stroke}><path d="M3 13h5l2 3h4l2-3h5"/><path d="M5 5h14l2 8v6H3v-6l2-8Z"/></svg>)
  if (name === "board")    return (<svg viewBox="0 0 24 24" className={className} {...stroke}><rect x="3" y="4" width="6" height="16" rx="1.5"/><rect x="11" y="4" width="6" height="10" rx="1.5"/><rect x="19" y="4" width="2" height="6" rx="1"/></svg>)
  if (name === "table")    return (<svg viewBox="0 0 24 24" className={className} {...stroke}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16"/></svg>)
  if (name === "timeline") return (<svg viewBox="0 0 24 24" className={className} {...stroke}><path d="M3 7h8M13 12h6M7 17h10"/></svg>)
  if (name === "filter")   return (<svg viewBox="0 0 24 24" className={className} {...stroke}><path d="M4 5h16l-6 8v6l-4-2v-4L4 5Z"/></svg>)
  if (name === "sort")     return (<svg viewBox="0 0 24 24" className={className} {...stroke}><path d="M7 4v16m0 0-3-3m3 3 3-3M17 20V4m0 0-3 3m3-3 3 3"/></svg>)
  if (name === "group")    return (<svg viewBox="0 0 24 24" className={className} {...stroke}><rect x="3" y="4" width="8" height="7" rx="1.5"/><rect x="13" y="4" width="8" height="7" rx="1.5"/><rect x="8" y="13" width="8" height="7" rx="1.5"/></svg>)
  if (name === "plus")     return (<svg viewBox="0 0 24 24" className={className} {...stroke}><path d="M12 5v14M5 12h14"/></svg>)
  if (name === "more")     return (<svg viewBox="0 0 24 24" className={className} {...stroke}><circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/></svg>)
  if (name === "comment")  return (<svg viewBox="0 0 24 24" className={className} {...stroke}><path d="M4 5h16v11H8l-4 4V5Z"/></svg>)
  if (name === "paper")    return (<svg viewBox="0 0 24 24" className={className} {...stroke}><path d="M15 5 9 11a3 3 0 0 0 4 4l7-7a5 5 0 0 0-7-7L5 10a7 7 0 0 0 10 10l6-6"/></svg>)
  if (name === "calendar") return (<svg viewBox="0 0 24 24" className={className} {...stroke}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>)
  if (name === "bell")     return (<svg viewBox="0 0 24 24" className={className} {...stroke}><path d="M6 16V11a6 6 0 1 1 12 0v5l2 3H4l2-3Z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>)
  if (name === "chevron")  return (<svg viewBox="0 0 24 24" className={className} {...stroke}><path d="m6 9 6 6 6-6"/></svg>)
  if (name === "pin")      return (<svg viewBox="0 0 24 24" className={className} {...stroke}><path d="m14 3 7 7-2 1-6 6-1 5-8-8 5-1 6-6 1-2z"/></svg>)
  if (name === "check")    return (<svg viewBox="0 0 24 24" className={className} {...stroke}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "link")     return (<svg viewBox="0 0 24 24" className={className} {...stroke}><path d="M10 14a5 5 0 0 1 0-7l3-3a5 5 0 0 1 7 7l-2 2"/><path d="M14 10a5 5 0 0 1 0 7l-3 3a5 5 0 0 1-7-7l2-2"/></svg>)
  return null
}

function PriorityIcon({ p, className = "h-3.5 w-3.5" }) {
  if (p === "urgent") {
    return (
      <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] bg-[#fef2f2] text-[var(--color-rose)]" title="Urgent">
        <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M12 3 2 21h20L12 3Zm0 6v5m0 3v.01"/></svg>
      </span>
    )
  }
  if (p === "high") {
    return (
      <span className="inline-flex h-4 w-4 items-end gap-[1.5px]" title="High">
        <span className="w-[3px] h-1.5 rounded-sm bg-[var(--color-ink)]" />
        <span className="w-[3px] h-2.5 rounded-sm bg-[var(--color-ink)]" />
        <span className="w-[3px] h-3.5 rounded-sm bg-[var(--color-ink)]" />
      </span>
    )
  }
  if (p === "med") {
    return (
      <span className="inline-flex h-4 w-4 items-end gap-[1.5px]" title="Medium">
        <span className="w-[3px] h-1.5 rounded-sm bg-[var(--color-ink)]" />
        <span className="w-[3px] h-2.5 rounded-sm bg-[var(--color-ink)]" />
        <span className="w-[3px] h-3.5 rounded-sm bg-[var(--color-line)]" />
      </span>
    )
  }
  return (
    <span className="inline-flex h-4 w-4 items-end gap-[1.5px]" title="Low">
      <span className="w-[3px] h-1.5 rounded-sm bg-[var(--color-ink)]" />
      <span className="w-[3px] h-2.5 rounded-sm bg-[var(--color-line)]" />
      <span className="w-[3px] h-3.5 rounded-sm bg-[var(--color-line)]" />
    </span>
  )
}

function Avatar({ id, size = "sm", ring = false }) {
  const m = byId[id]
  if (!m) return null
  const initials = m.name.split(" ").map((s) => s[0]).slice(0, 2).join("")
  const dims = size === "xs" ? "h-5 w-5 text-[9px]" : size === "md" ? "h-7 w-7 text-[11px]" : "h-6 w-6 text-[10px]"
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full font-medium text-[var(--color-ink)] ${dims} ${ring ? "ring-2 ring-[var(--color-card)]" : ""}`}
      style={{ background: m.tone }}
      title={m.name}
    >
      {initials}
    </span>
  )
}

function Pill({ label }) {
  const l = labels[label]
  if (!l) return null
  return (
    <span className="inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-medium"
      style={{ background: l.bg, color: l.fg }}>
      {l.t}
    </span>
  )
}

function TaskCard({ task }) {
  return (
    <article
      className={`task-card group relative rounded-lg border bg-[var(--color-card)] p-3 ${
        task.pinned ? "border-[var(--color-accent)] shadow-[0_0_0_3px_rgba(79,70,229,0.08)]" : "border-[var(--color-line)]"
      }`}
    >
      {task.pinned && (
        <span className="absolute -top-2 left-3 inline-flex items-center gap-1 rounded-full bg-[var(--color-accent)] px-2 py-0.5 text-[10px] font-medium text-white">
          <Icon name="pin" className="h-3 w-3" />
          Pinned
        </span>
      )}

      <div className="flex items-start gap-2">
        <PriorityIcon p={task.priority} />
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[10px] text-[var(--color-faint)]">{task.id}</p>
          <p className={`mt-0.5 line-clamp-2 text-sm leading-snug ${task.done ? "text-[var(--color-muted)] line-through" : "text-[var(--color-ink)]"}`}>
            {task.title}
          </p>
        </div>
        <button className="invisible rounded-md p-1 text-[var(--color-faint)] hover:bg-[var(--color-line-2)] group-hover:visible" aria-label="More">
          <Icon name="more" />
        </button>
      </div>

      {task.labels?.length > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-1">
          {task.labels.map((l) => <Pill key={l} label={l} />)}
        </div>
      )}

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px] text-[var(--color-muted)]">
          <span className="inline-flex items-center gap-1 rounded-md border border-[var(--color-line)] bg-[var(--color-paper)] px-1.5 py-0.5">
            <Icon name="calendar" className="h-3 w-3" />
            {task.due}
          </span>
          {task.comments > 0 && (
            <span className="inline-flex items-center gap-1">
              <Icon name="comment" className="h-3.5 w-3.5" />
              {task.comments}
            </span>
          )}
          {task.attachments > 0 && (
            <span className="inline-flex items-center gap-1">
              <Icon name="paper" className="h-3.5 w-3.5" />
              {task.attachments}
            </span>
          )}
        </div>
        <Avatar id={task.assignee} />
      </div>
    </article>
  )
}

function Column({ col }) {
  const headDot =
    col.key === "backlog" ? "#a3a3a3" :
    col.key === "in-progress" ? "#4f46e5" :
    col.key === "in-review" ? "#d97706" : "#059669"

  return (
    <section className="flex w-[310px] shrink-0 flex-col rounded-xl bg-[var(--color-line-2)]/40 p-2">
      <header className="flex items-center justify-between px-1.5 pt-1.5 pb-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ background: headDot }} />
          <h3 className="text-sm font-medium text-[var(--color-ink)]">{col.title}</h3>
          <span className="font-mono text-xs text-[var(--color-faint)]">{col.tasks.length}</span>
        </div>
        <div className="flex items-center gap-0.5">
          <button className="rounded-md p-1 text-[var(--color-muted)] hover:bg-[var(--color-card)] hover:text-[var(--color-ink)]" aria-label="Add">
            <Icon name="plus" />
          </button>
          <button className="rounded-md p-1 text-[var(--color-muted)] hover:bg-[var(--color-card)] hover:text-[var(--color-ink)]" aria-label="More">
            <Icon name="more" />
          </button>
        </div>
      </header>

      <div className="flex flex-col gap-2">
        {col.tasks.map((t) => <TaskCard key={t.id} task={t} />)}
        <button className="mt-1 flex items-center gap-1.5 rounded-lg px-2 py-2 text-[12px] text-[var(--color-muted)] hover:bg-[var(--color-card)] hover:text-[var(--color-ink)]">
          <Icon name="plus" className="h-3.5 w-3.5" />
          Add task
        </button>
      </div>
    </section>
  )
}

// ---------- Page ----------
export default function Home() {
  const totalTasks = columns.reduce((n, c) => n + c.tasks.length, 0)
  const doneTasks = columns.find((c) => c.key === "done").tasks.length
  const pct = Math.round((doneTasks / totalTasks) * 100)

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-[var(--color-line)] bg-[var(--color-paper)]/85 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-5">
          <a href="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-[15px] font-semibold tracking-tight">StoicSoft</span>
            <span className="hidden text-xs text-[var(--color-faint)] sm:inline">· Quiet software</span>
          </a>

          <nav className="ml-4 hidden items-center gap-1 text-sm md:flex">
            <a className="rounded-md bg-[var(--color-line-2)] px-2.5 py-1 text-[var(--color-ink)]" href="#">Projects</a>
            <a className="rounded-md px-2.5 py-1 text-[var(--color-muted)] hover:bg-[var(--color-line-2)] hover:text-[var(--color-ink)]" href="#">Inbox</a>
            <a className="rounded-md px-2.5 py-1 text-[var(--color-muted)] hover:bg-[var(--color-line-2)] hover:text-[var(--color-ink)]" href="#">Views</a>
            <a className="rounded-md px-2.5 py-1 text-[var(--color-muted)] hover:bg-[var(--color-line-2)] hover:text-[var(--color-ink)]" href="#">Settings</a>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-md border border-[var(--color-line)] bg-[var(--color-card)] px-2.5 py-1.5 text-xs text-[var(--color-muted)] md:flex">
              <Icon name="search" className="h-3.5 w-3.5" />
              <span>Search or jump to…</span>
              <kbd className="font-mono rounded border border-[var(--color-line)] bg-[var(--color-paper)] px-1 text-[10px]">⌘K</kbd>
            </div>
            <button className="relative rounded-md p-1.5 text-[var(--color-muted)] hover:bg-[var(--color-line-2)] hover:text-[var(--color-ink)]" aria-label="Notifications">
              <Icon name="bell" />
              <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            </button>
            <Avatar id="sk" size="md" />
          </div>
        </div>
      </header>

      {/* Project header */}
      <section className="mx-auto max-w-[1400px] px-5 pt-7">
        <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
          <a href="#" className="hover:text-[var(--color-ink)]">Personal</a>
          <Icon name="chevron" className="h-3 w-3 -rotate-90 text-[var(--color-faint)]" />
          <span className="text-[var(--color-ink)]">Spring release</span>
        </div>

        <div className="mt-3 flex flex-wrap items-start justify-between gap-6">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-[28px] font-semibold leading-tight tracking-tight">Spring release</h1>
              <button
                className="rounded-md p-1 text-[var(--color-faint)] hover:bg-[var(--color-line-2)] hover:text-[var(--color-ink)]"
                aria-label="Edit title"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" {...stroke}><path d="M4 20h4l10-10-4-4L4 16v4Z"/></svg>
              </button>
              <span className="ml-1 inline-flex items-center gap-1 rounded-full border border-[var(--color-line)] bg-[var(--color-card)] px-2 py-0.5 text-[11px] text-[var(--color-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] pulse-soft" />
                on track
              </span>
            </div>
            <p className="mt-1.5 max-w-xl text-sm text-[var(--color-muted)]">
              The April cycle — presence, board polish, and the last of the v0 API retirements.
              Ships May 2.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
              <span>Owner</span>
              <div className="flex items-center gap-1.5 text-[var(--color-ink)]">
                <Avatar id="sk" size="xs" />
                <span>Sana K.</span>
              </div>
            </div>
            <div className="text-xs text-[var(--color-muted)]">
              <p>Created</p>
              <p className="mt-0.5 text-[var(--color-ink)]">Mar 28, 2026</p>
            </div>
            <div className="w-44">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--color-muted)]">Progress</span>
                <span className="font-mono text-[var(--color-ink)]">{pct}%</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-line-2)]">
                <div className="h-full rounded-full bg-[var(--color-ink)]" style={{ width: `${pct}%` }} />
              </div>
              <p className="mt-1 font-mono text-[10px] text-[var(--color-faint)]">{doneTasks} / {totalTasks} tasks</p>
            </div>
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {team.slice(0, 5).map((m) => <Avatar key={m.id} id={m.id} size="md" ring />)}
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--color-card)] bg-[var(--color-line-2)] text-[10px] font-medium text-[var(--color-muted)]">
                  +4
                </span>
              </div>
              <button className="ml-2 inline-flex h-7 items-center gap-1 rounded-md bg-[var(--color-accent)] px-2.5 text-xs font-medium text-white hover:opacity-90">
                <Icon name="plus" className="h-3 w-3" />
                Invite
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Toolbar */}
      <section className="mx-auto mt-6 max-w-[1400px] px-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-line)] pb-3">
          <div className="inline-flex items-center rounded-md border border-[var(--color-line)] bg-[var(--color-card)] p-0.5 text-xs">
            <button className="inline-flex items-center gap-1.5 rounded-[5px] bg-[var(--color-ink)] px-2.5 py-1 text-white">
              <Icon name="board" className="h-3.5 w-3.5" />
              Board
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-[5px] px-2.5 py-1 text-[var(--color-muted)] hover:text-[var(--color-ink)]">
              <Icon name="table" className="h-3.5 w-3.5" />
              Table
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-[5px] px-2.5 py-1 text-[var(--color-muted)] hover:text-[var(--color-ink)]">
              <Icon name="timeline" className="h-3.5 w-3.5" />
              Timeline
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <button className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-line)] bg-[var(--color-card)] px-2.5 py-1.5 text-[var(--color-ink-2)] hover:text-[var(--color-ink)]">
              <Icon name="filter" className="h-3.5 w-3.5" />
              Filter
              <span className="inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--color-accent-soft)] px-1 font-mono text-[10px] text-[var(--color-accent)]">2</span>
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-line)] bg-[var(--color-card)] px-2.5 py-1.5 text-[var(--color-ink-2)] hover:text-[var(--color-ink)]">
              <Icon name="sort" className="h-3.5 w-3.5" />
              Sort
              <span className="text-[var(--color-faint)]">· Priority</span>
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-line)] bg-[var(--color-card)] px-2.5 py-1.5 text-[var(--color-ink-2)] hover:text-[var(--color-ink)]">
              <Icon name="group" className="h-3.5 w-3.5" />
              Group by
              <span className="text-[var(--color-faint)]">· Status</span>
            </button>
            <span className="hidden h-5 w-px bg-[var(--color-line)] sm:block" />
            <span className="hidden items-center gap-1.5 text-[var(--color-muted)] sm:inline-flex">
              <kbd className="font-mono rounded border border-[var(--color-line)] bg-[var(--color-card)] px-1 py-0.5 text-[10px]">⌘K</kbd>
              jump to anything
            </span>
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="mx-auto max-w-[1400px] px-5">
        <div className="board-scroll mt-4 flex gap-3 overflow-x-auto pb-4">
          {columns.map((c) => <Column key={c.key} col={c} />)}
          <button className="flex h-10 w-[310px] shrink-0 items-center justify-center gap-1.5 rounded-xl border border-dashed border-[var(--color-line)] text-xs text-[var(--color-muted)] hover:border-[var(--color-faint)] hover:text-[var(--color-ink)]">
            <Icon name="plus" className="h-3.5 w-3.5" />
            Add column
          </button>
        </div>
      </section>

      {/* Recent activity */}
      <section className="mx-auto mt-8 max-w-[1400px] px-5 pb-12">
        <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-card)]">
          <header className="flex items-center justify-between border-b border-[var(--color-line)] px-4 py-3">
            <div>
              <h2 className="text-sm font-medium text-[var(--color-ink)]">Recent activity</h2>
              <p className="text-xs text-[var(--color-muted)]">Last 24 hours · Spring release</p>
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-xs text-[var(--color-muted)] hover:text-[var(--color-ink)]">
              View all
              <Icon name="chevron" className="h-3 w-3 -rotate-90" />
            </a>
          </header>
          <ul className="divide-y divide-[var(--color-line-2)]">
            {activity.map((a, i) => {
              const who = byId[a.who]
              return (
                <li key={i} className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-[var(--color-paper)]">
                  <Avatar id={a.who} size="sm" />
                  <p className="min-w-0 flex-1 truncate text-[var(--color-ink-2)]">
                    <span className="font-medium text-[var(--color-ink)]">{who.name}</span>{" "}
                    <span className="text-[var(--color-muted)]">{a.verb}</span>{" "}
                    <a href="#" className="font-mono text-xs text-[var(--color-accent)] hover:underline">{a.target}</a>{" "}
                    <span className="text-[var(--color-ink-2)]">· {a.detail}</span>
                    {a.to && <span className="text-[var(--color-muted)]"> → {a.to}</span>}
                  </p>
                  <span className="shrink-0 font-mono text-[11px] text-[var(--color-faint)]">{a.when}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-[var(--color-muted)]">
          <div className="flex items-center gap-3">
            <span>© 2026 StoicSoft</span>
            <span className="text-[var(--color-faint)]">·</span>
            <a href="https://stoicsoft.com" className="hover:text-[var(--color-ink)]">stoicsoft.com</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[var(--color-ink)]">Privacy</a>
            <a href="#" className="hover:text-[var(--color-ink)]">Terms</a>
            <a href="#" className="hover:text-[var(--color-ink)]">Changelog</a>
            <span className="font-mono text-[10px] text-[var(--color-faint)]">v4.2.0</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
