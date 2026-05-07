"use client"

import { useState } from "react"

const kpis = [
  { label: "Active Projects", value: "14", delta: "+2", dir: "up", color: "#7c3aed" },
  { label: "Tasks Done", value: "312", delta: "+28", dir: "up", color: "#059669" },
  { label: "Team Velocity", value: "47", delta: "+5", dir: "up", color: "#2563eb" },
  { label: "Overdue Tasks", value: "8", delta: "-3", dir: "down", color: "#dc2626" },
]

const projectStatus = [
  { name: "On track", count: 8, color: "#059669" },
  { name: "At risk", count: 4, color: "#d97706" },
  { name: "Delayed", count: 2, color: "#dc2626" },
]

const recentTasks = [
  { title: "Update onboarding flow", project: "Orbit Web", assignee: "Elena Voss", hue: "#dc2626", due: "Today", status: "in-progress" },
  { title: "API rate limiting", project: "Platform", assignee: "Marcus Chen", hue: "#2563eb", due: "Tomorrow", status: "in-progress" },
  { title: "Design system audit", project: "DesignOps", assignee: "Leila Park", hue: "#db2777", due: "2 days", status: "todo" },
  { title: "Q3 roadmap review", project: "Product", assignee: "Jonas Keller", hue: "#7c3aed", due: "3 days", status: "todo" },
  { title: "Security patch deploy", project: "Platform", assignee: "Sofia Rossi", hue: "#059669", due: "1 day", status: "done" },
]

const teamWorkload = [
  { name: "Elena Voss", hue: "#dc2626", tasks: 8, capacity: 10 },
  { name: "Marcus Chen", hue: "#2563eb", tasks: 9, capacity: 10 },
  { name: "Leila Park", hue: "#db2777", tasks: 5, capacity: 10 },
  { name: "Jonas Keller", hue: "#7c3aed", tasks: 6, capacity: 10 },
  { name: "Sofia Rossi", hue: "#059669", tasks: 7, capacity: 10 },
  { name: "Omar Farooq", hue: "#0891b2", tasks: 4, capacity: 10 },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "folder") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>)
  if (name === "check-square") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>)
  if (name === "users") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M7 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/><path d="M17 11a4 4 0 0 1 3 3.87V21"/></svg>)
  if (name === "calendar") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 19V5M5 12l7-7 7 7"/></svg>)
  if (name === "arrow-down") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M19 12l-7 7-7-7"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>)
  if (name === "bell") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M6 8a6 6 0 0 1 12 0c0 5 2 7 2 7H4s2-2 2-7ZM10 20a2 2 0 0 0 4 0"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "clock") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>)
  if (name === "download") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>)
  return null
}

function Avatar({ name, hue = "#7c3aed", size = 20 }) {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("")
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white"
      style={{ background: hue, width: size, height: size, fontSize: size * 0.42 }}>
      {initials}
    </span>
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

export default function Home() {
  const [projectOpen, setProjectOpen] = useState(false)

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
          <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="6" y="7" width="9" height="18" rx="2" fill="#7c3aed"/><rect x="17" y="12" width="9" height="13" rx="2" fill="#ddd6fe"/></svg>
        </a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-accent-soft)] text-[var(--color-accent)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/projects" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Projects"><Icon name="folder" className="h-[18px] w-[18px]" /></a>
          <a href="/tasks" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Tasks"><Icon name="check-square" className="h-[18px] w-[18px]" /></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Team"><Icon name="users" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Timeline"><Icon name="calendar" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><Avatar name="Ari Gomez" hue="#111827" size={28} /></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <h1 className="text-[15px] font-semibold">Overview</h1>
          <div className="flex items-center gap-2">
            <button onClick={() => setProjectOpen(true)} className="inline-flex h-8 items-center gap-1.5 rounded-md bg-[var(--color-accent)] px-2.5 text-[12.5px] font-medium text-white hover:bg-[var(--color-accent-2)]"><Icon name="plus" className="h-3.5 w-3.5" /> New project</button>
          </div>
        </div>

        <div className="scroll-thin flex-1 overflow-y-auto p-4">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-lg border border-[var(--color-line)] bg-white p-4">
                <p className="text-[11px] uppercase tracking-wider text-gray-500">{k.label}</p>
                <div className="mt-2 flex items-end justify-between">
                  <p className="text-[22px] font-semibold leading-none">{k.value}</p>
                  <span className="inline-flex items-center gap-0.5 text-[11px] font-medium" style={{ color: k.color }}>
                    <Icon name={k.dir === "up" ? "arrow-up" : "arrow-down"} className="h-3 w-3" />{k.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Project Status Breakdown */}
            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
              <h2 className="text-[13px] font-semibold mb-3">Project status</h2>
              <div className="space-y-3">
                {projectStatus.map((p) => (
                  <div key={p.name} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full shrink-0" style={{ background: p.color }} />
                    <span className="flex-1 text-[12.5px]">{p.name}</span>
                    <span className="text-[12px] font-semibold">{p.count}</span>
                    <div className="w-20 h-1.5 rounded-full bg-[var(--color-bg-3)] overflow-hidden"><div className="h-full rounded-full" style={{ width: (p.count/14*100)+"%", background: p.color }} /></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
              <h2 className="text-[13px] font-semibold mb-3">Quick actions</h2>
              <div className="space-y-2">
                <a href="/projects" className="flex items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="folder" className="h-4 w-4 text-[var(--color-accent)]" /><span className="flex-1">View all projects</span><Icon name="chevron-right" className="h-3 w-3 text-gray-400" /></a>
                <a href="/tasks" className="flex items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="check-square" className="h-4 w-4 text-[var(--color-accent)]" /><span className="flex-1">Open task board</span><Icon name="chevron-right" className="h-3 w-3 text-gray-400" /></a>
                <button className="flex w-full items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="users" className="h-4 w-4 text-[var(--color-accent)]" /><span className="flex-1">Assign team members</span></button>
                <button className="flex w-full items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="download" className="h-4 w-4 text-[var(--color-accent)]" /><span className="flex-1">Export project report</span></button>
              </div>
            </div>

            {/* Recent Tasks */}
            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
              <h2 className="text-[13px] font-semibold mb-3">Recent tasks</h2>
              <div className="space-y-3">
                {recentTasks.map((t, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Avatar name={t.assignee} hue={t.hue} size={22} />
                    <div className="min-w-0 flex-1">
                      <p className="text-[12px] leading-snug font-medium truncate">{t.title}</p>
                      <p className="text-[11px] text-gray-500">{t.project} · <span className="inline-flex items-center gap-1"><Icon name="clock" className="h-3 w-3" />{t.due}</span></p>
                    </div>
                    <TaskStatusPill status={t.status} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Workload */}
          <div className="mt-4 rounded-lg border border-[var(--color-line)] bg-white p-4">
            <h2 className="text-[13px] font-semibold mb-3">Team workload</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {teamWorkload.map((m) => (
                <div key={m.name} className="flex items-center gap-3 rounded-md border border-[var(--color-line)] px-3 py-2.5">
                  <Avatar name={m.name} hue={m.hue} size={28} />
                  <div className="min-w-0 flex-1">
                    <p className="text-[12.5px] font-medium">{m.name}</p>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-[var(--color-bg-3)] overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: (m.tasks/m.capacity*100)+"%", background: m.hue }} />
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-gray-500">{m.tasks}/{m.capacity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* New Project Modal */}
      {projectOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setProjectOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-4">New project</h2>
            <div className="space-y-3">
              <div><label className="text-[12px] font-medium text-gray-600">Project name</label><input type="text" placeholder="e.g. Q4 Marketing Campaign" className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] focus:border-[var(--color-accent-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" /></div>
              <div><label className="text-[12px] font-medium text-gray-600">Owner</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Elena Voss</option><option>Marcus Chen</option><option>Leila Park</option><option>Jonas Keller</option><option>Sofia Rossi</option></select></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-[12px] font-medium text-gray-600">Start date</label><input type="date" className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] focus:border-[var(--color-accent-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" /></div>
                <div><label className="text-[12px] font-medium text-gray-600">Due date</label><input type="date" className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] focus:border-[var(--color-accent-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" /></div>
              </div>
              <div><label className="text-[12px] font-medium text-gray-600">Description</label><textarea placeholder="What is this project about?" className="mt-1 h-20 w-full rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] focus:border-[var(--color-accent-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" /></div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setProjectOpen(false)} className="h-8 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-gray-600 hover:bg-[var(--color-bg-2)]">Cancel</button>
              <button onClick={() => setProjectOpen(false)} className="h-8 rounded-md bg-[var(--color-accent)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-accent-2)]">Create project</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
