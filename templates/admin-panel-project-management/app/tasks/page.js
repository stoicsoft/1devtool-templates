"use client"

import { useState } from "react"

const tasks = [
  { id: "TSK-841", title: "Update onboarding flow", project: "Orbit Web", assignee: "Elena Voss", hue: "#dc2626", priority: "high", status: "in-progress", due: "Aug 07" },
  { id: "TSK-840", title: "API rate limiting middleware", project: "Platform", assignee: "Marcus Chen", hue: "#2563eb", priority: "high", status: "in-progress", due: "Aug 08" },
  { id: "TSK-839", title: "Design system audit", project: "DesignOps", assignee: "Leila Park", hue: "#db2777", priority: "medium", status: "todo", due: "Aug 10" },
  { id: "TSK-838", title: "Q3 roadmap review", project: "Product", assignee: "Jonas Keller", hue: "#7c3aed", priority: "medium", status: "todo", due: "Aug 12" },
  { id: "TSK-837", title: "Security patch deploy", project: "Platform", assignee: "Sofia Rossi", hue: "#059669", priority: "high", status: "done", due: "Aug 05" },
  { id: "TSK-836", title: "Customer feedback analysis", project: "Product", assignee: "Omar Farooq", hue: "#0891b2", priority: "low", status: "todo", due: "Aug 14" },
  { id: "TSK-835", title: "Mobile navigation refactor", project: "Orbit Web", assignee: "Elena Voss", hue: "#dc2626", priority: "medium", status: "in-progress", due: "Aug 09" },
  { id: "TSK-834", title: "Database indexing optimization", project: "Platform", assignee: "Marcus Chen", hue: "#2563eb", priority: "low", status: "todo", due: "Aug 16" },
  { id: "TSK-833", title: "Icon library update", project: "DesignOps", assignee: "Leila Park", hue: "#db2777", priority: "low", status: "done", due: "Aug 03" },
  { id: "TSK-832", title: "SLA dashboard widget", project: "Customer Dashboard", assignee: "Omar Farooq", hue: "#0891b2", priority: "medium", status: "in-progress", due: "Aug 11" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "folder") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>)
  if (name === "check-square") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>)
  if (name === "users") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M7 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/><path d="M17 11a4 4 0 0 1 3 3.87V21"/></svg>)
  if (name === "calendar") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "filter") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 5h18l-7 9v5l-4 2v-7L3 5Z"/></svg>)
  if (name === "more") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="5" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="19" r="1.5" fill="currentColor"/></svg>)
  if (name === "clock") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>)
  return null
}

function Avatar({ name, hue = "#7c3aed", size = 20 }) {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("")
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white"
      style={{ background: hue, width: size, height: size, fontSize: size * 0.42 }}>{initials}</span>
  )
}

function TaskStatusPill({ status }) {
  const map = {
    todo: { bg: "#f3f4f6", fg: "#4b5563", label: "To do" },
    "in-progress": { bg: "#ede9fe", fg: "#5b21b6", label: "In progress" },
    done: { bg: "#d1fae5", fg: "#065f46", label: "Done" },
  }
  const s = map[status]
  return <span className="inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: s.bg, color: s.fg }}>{s.label}</span>
}

function PriorityPill({ priority }) {
  const map = {
    high: { bg: "#fee2e2", fg: "#991b1b", label: "High" },
    medium: { bg: "#fef3c7", fg: "#92400e", label: "Medium" },
    low: { bg: "#dbeafe", fg: "#1e40af", label: "Low" },
  }
  const s = map[priority]
  return <span className="inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: s.bg, color: s.fg }}>{s.label}</span>
}

export default function TasksPage() {
  const [taskOpen, setTaskOpen] = useState(false)
  const [filter, setFilter] = useState("all")

  const filtered = filter === "all" ? tasks : tasks.filter((t) => t.status === filter)

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg"><svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="6" y="7" width="9" height="18" rx="2" fill="#7c3aed"/><rect x="17" y="12" width="9" height="13" rx="2" fill="#ddd6fe"/></svg></a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/projects" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Projects"><Icon name="folder" className="h-[18px] w-[18px]" /></a>
          <a href="/tasks" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-accent-soft)] text-[var(--color-accent)]" title="Tasks"><Icon name="check-square" className="h-[18px] w-[18px]" /></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Team"><Icon name="users" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Timeline"><Icon name="calendar" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><Avatar name="Ari Gomez" hue="#111827" size={28} /></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
            <a href="/" className="hover:text-[var(--color-ink)]">Overview</a><Icon name="chevron-right" className="h-3 w-3" /><span className="font-semibold text-[var(--color-ink)]">Tasks</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Icon name="search" className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search tasks..." className="h-8 w-56 rounded-md border border-[var(--color-line)] bg-[var(--color-bg-2)] pl-7 pr-3 text-[12.5px] placeholder:text-gray-400 focus:border-[var(--color-accent-ring)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" />
            </div>
            <button onClick={() => setTaskOpen(true)} className="inline-flex h-8 items-center gap-1.5 rounded-md bg-[var(--color-accent)] px-2.5 text-[12.5px] font-medium text-white hover:bg-[var(--color-accent-2)]"><Icon name="plus" className="h-3.5 w-3.5" /><span className="hidden sm:inline">New task</span></button>
          </div>
        </div>

        <div className="scroll-thin flex-1 overflow-y-auto p-4">
          {/* Board View */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["todo", "in-progress", "done"].map((col) => (
              <div key={col} className="rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-2)] p-3">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[12.5px] font-semibold uppercase tracking-wider text-gray-500">
                    {col === "todo" ? "To do" : col === "in-progress" ? "In progress" : "Done"}
                  </h3>
                  <span className="text-[11px] font-medium text-gray-500">{tasks.filter((t) => t.status === col).length}</span>
                </div>
                <div className="space-y-2">
                  {tasks.filter((t) => t.status === col).map((t) => (
                    <div key={t.id} className="rounded-md border border-[var(--color-line)] bg-white p-3 hover:shadow-sm">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[12.5px] font-medium leading-snug">{t.title}</p>
                        <PriorityPill priority={t.priority} />
                      </div>
                      <p className="text-[11px] text-gray-500 mt-1">{t.project}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Avatar name={t.assignee} hue={t.hue} size={18} />
                          <span className="text-[11px] text-gray-600">{t.assignee}</span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] text-gray-500"><Icon name="clock" className="h-3 w-3" />{t.due}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* List View */}
          <div className="mt-6 rounded-lg border border-[var(--color-line)] bg-white overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--color-line)] bg-[var(--color-bg-2)]">
              <span className="text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">All tasks</span>
              <div className="flex items-center gap-1">
                {["all", "todo", "in-progress", "done"].map((f) => (
                  <button key={f} onClick={() => setFilter(f)} className={`rounded-md px-2 py-0.5 text-[11px] font-medium ${filter === f ? "bg-[var(--color-accent)] text-white" : "text-gray-500 hover:bg-[var(--color-bg-3)]"}`}>
                    {f === "all" ? "All" : f === "in-progress" ? "In progress" : f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-[80px_1fr_100px_100px_80px_80px_80px] items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
              <span>ID</span><span>Task</span><span>Project</span><span>Assignee</span><span className="text-center">Priority</span><span className="text-center">Status</span><span>Due</span>
            </div>
            {filtered.map((t) => (
              <div key={t.id} className="row-zebra grid grid-cols-[80px_1fr_100px_100px_80px_80px_80px] items-center gap-3 border-b border-[var(--color-line-2)] px-4 text-[12.5px]">
                <span className="font-mono text-[11.5px] text-gray-500">{t.id}</span>
                <span className="font-medium text-[var(--color-ink)] truncate">{t.title}</span>
                <span className="text-gray-600 truncate">{t.project}</span>
                <span className="flex items-center gap-1.5"><Avatar name={t.assignee} hue={t.hue} size={18} /><span className="truncate">{t.assignee}</span></span>
                <span className="flex justify-center"><PriorityPill priority={t.priority} /></span>
                <span className="flex justify-center"><TaskStatusPill status={t.status} /></span>
                <span className="font-mono text-[11px] text-gray-500">{t.due}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* New Task Modal */}
      {taskOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setTaskOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-4">New task</h2>
            <div className="space-y-3">
              <div><label className="text-[12px] font-medium text-gray-600">Title</label><input type="text" placeholder="What needs to be done?" className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] focus:border-[var(--color-accent-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" /></div>
              <div><label className="text-[12px] font-medium text-gray-600">Project</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Orbit Web</option><option>Platform</option><option>DesignOps</option><option>Product</option><option>Customer Dashboard</option></select></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-[12px] font-medium text-gray-600">Assignee</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Elena Voss</option><option>Marcus Chen</option><option>Leila Park</option><option>Jonas Keller</option><option>Sofia Rossi</option><option>Omar Farooq</option></select></div>
                <div><label className="text-[12px] font-medium text-gray-600">Due date</label><input type="date" className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] focus:border-[var(--color-accent-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" /></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-[12px] font-medium text-gray-600">Priority</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>High</option><option>Medium</option><option>Low</option></select></div>
                <div><label className="text-[12px] font-medium text-gray-600">Status</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>To do</option><option>In progress</option><option>Done</option></select></div>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setTaskOpen(false)} className="h-8 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-gray-600 hover:bg-[var(--color-bg-2)]">Cancel</button>
              <button onClick={() => setTaskOpen(false)} className="h-8 rounded-md bg-[var(--color-accent)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-accent-2)]">Create task</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
