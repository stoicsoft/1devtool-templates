"use client"

import { useState } from "react"

const projects = [
  { id: "PRJ-1024", name: "Orbit Web Redesign", owner: "Elena Voss", hue: "#dc2626", status: "on-track", progress: 78, due: "Aug 14" },
  { id: "PRJ-1023", name: "API Platform v2", owner: "Marcus Chen", hue: "#2563eb", status: "on-track", progress: 64, due: "Sep 02" },
  { id: "PRJ-1022", name: "Design System 3.0", owner: "Leila Park", hue: "#db2777", status: "at-risk", progress: 45, due: "Aug 21" },
  { id: "PRJ-1021", name: "Mobile App Launch", owner: "Jonas Keller", hue: "#7c3aed", status: "delayed", progress: 32, due: "Jul 30" },
  { id: "PRJ-1020", name: "Security Audit Q3", owner: "Sofia Rossi", hue: "#059669", status: "on-track", progress: 91, due: "Aug 07" },
  { id: "PRJ-1019", name: "Customer Dashboard", owner: "Omar Farooq", hue: "#0891b2", status: "at-risk", progress: 52, due: "Sep 15" },
  { id: "PRJ-1018", name: "Internal Tools", owner: "Elena Voss", hue: "#dc2626", status: "on-track", progress: 85, due: "Aug 28" },
  { id: "PRJ-1017", name: "Data Migration", owner: "Marcus Chen", hue: "#2563eb", status: "delayed", progress: 18, due: "Oct 01" },
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
  return null
}

function Avatar({ name, hue = "#7c3aed", size = 20 }) {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("")
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white"
      style={{ background: hue, width: size, height: size, fontSize: size * 0.42 }}>{initials}</span>
  )
}

function StatusPill({ status }) {
  const map = {
    "on-track": { dot: "#059669", bg: "#d1fae5", fg: "#065f46", label: "On track" },
    "at-risk": { dot: "#d97706", bg: "#fef3c7", fg: "#92400e", label: "At risk" },
    delayed: { dot: "#dc2626", bg: "#fee2e2", fg: "#991b1b", label: "Delayed" },
  }
  const s = map[status]
  return <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: s.bg, color: s.fg }}><span className="h-1.5 w-1.5 rounded-full" style={{ background: s.dot }} />{s.label}</span>
}

export default function ProjectsPage() {
  const [projectOpen, setProjectOpen] = useState(false)

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg"><svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="6" y="7" width="9" height="18" rx="2" fill="#7c3aed"/><rect x="17" y="12" width="9" height="13" rx="2" fill="#ddd6fe"/></svg></a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/projects" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-accent-soft)] text-[var(--color-accent)]" title="Projects"><Icon name="folder" className="h-[18px] w-[18px]" /></a>
          <a href="/tasks" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Tasks"><Icon name="check-square" className="h-[18px] w-[18px]" /></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Team"><Icon name="users" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Timeline"><Icon name="calendar" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><Avatar name="Ari Gomez" hue="#111827" size={28} /></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
            <a href="/" className="hover:text-[var(--color-ink)]">Overview</a><Icon name="chevron-right" className="h-3 w-3" /><span className="font-semibold text-[var(--color-ink)]">Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Icon name="search" className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search projects..." className="h-8 w-56 rounded-md border border-[var(--color-line)] bg-[var(--color-bg-2)] pl-7 pr-3 text-[12.5px] placeholder:text-gray-400 focus:border-[var(--color-accent-ring)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" />
            </div>
            <button onClick={() => setProjectOpen(true)} className="inline-flex h-8 items-center gap-1.5 rounded-md bg-[var(--color-accent)] px-2.5 text-[12.5px] font-medium text-white hover:bg-[var(--color-accent-2)]"><Icon name="plus" className="h-3.5 w-3.5" /><span className="hidden sm:inline">New project</span></button>
          </div>
        </div>

        <div className="scroll-thin flex-1 overflow-y-auto">
          <div className="grid grid-cols-[28px_80px_1fr_100px_80px_80px_80px_48px] items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
            <span><input type="checkbox" className="h-3.5 w-3.5 accent-[var(--color-accent)]" /></span>
            <span>ID</span><span>Project</span><span>Owner</span><span className="text-center">Status</span><span>Progress</span><span>Due</span><span></span>
          </div>
          {projects.map((it) => (
            <div key={it.id} className="row-zebra group grid grid-cols-[28px_80px_1fr_100px_80px_80px_80px_48px] items-center gap-3 border-b border-[var(--color-line-2)] px-4 text-[12.5px] hover:bg-[var(--color-bg-2)]">
              <span><input type="checkbox" className="h-3.5 w-3.5 accent-[var(--color-accent)]" /></span>
              <span className="font-mono text-[11.5px] text-gray-500">{it.id}</span>
              <span className="font-medium text-[var(--color-ink)] truncate">{it.name}</span>
              <span className="flex items-center gap-1.5"><Avatar name={it.owner} hue={it.hue} size={18} /><span className="truncate">{it.owner}</span></span>
              <span className="flex justify-center"><StatusPill status={it.status} /></span>
              <span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 rounded-full bg-[var(--color-bg-3)] overflow-hidden"><div className="h-full rounded-full" style={{ width: it.progress+"%", background: it.status === "delayed" ? "#dc2626" : it.status === "at-risk" ? "#d97706" : "#059669" }} /></div>
                  <span className="text-[11px] text-gray-500">{it.progress}%</span>
                </div>
              </span>
              <span className="font-mono text-[11px] text-gray-500">{it.due}</span>
              <span className="flex justify-end">
                <div className="relative group/action">
                  <button className="text-gray-400 hover:text-[var(--color-ink)]"><Icon name="more" className="h-4 w-4" /></button>
                  <div className="absolute right-0 top-full z-20 hidden w-36 rounded-lg border border-[var(--color-line)] bg-white py-1 shadow-lg group-hover/action:block">
                    <button className="block w-full text-left px-3 py-1.5 text-[12px] hover:bg-[var(--color-bg-2)]">View details</button>
                    <button className="block w-full text-left px-3 py-1.5 text-[12px] hover:bg-[var(--color-bg-2)]">Edit project</button>
                    <button className="block w-full text-left px-3 py-1.5 text-[12px] text-rose-600 hover:bg-[var(--color-bg-2)]">Archive</button>
                  </div>
                </div>
              </span>
            </div>
          ))}
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
