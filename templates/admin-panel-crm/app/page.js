"use client"

import { useState } from "react"

const kpis = [
  { label: "Total Leads", value: "342", delta: "+28", dir: "up", color: "#2563eb" },
  { label: "Pipeline Value", value: "$1.2M", delta: "+12%", dir: "up", color: "#2563eb" },
  { label: "Win Rate", value: "34%", delta: "+2.4%", dir: "up", color: "#059669" },
  { label: "Active Deals", value: "56", delta: "-3", dir: "down", color: "#d97706" },
]

const pipelineStages = [
  { name: "Prospect", count: 84, value: "$320k", color: "#9ca3af" },
  { name: "Qualified", count: 62, value: "$410k", color: "#2563eb" },
  { name: "Proposal", count: 45, value: "$280k", color: "#7c3aed" },
  { name: "Negotiation", count: 28, value: "$190k", color: "#d97706" },
]

const recentActivity = [
  { who: "Sarah Chen", action: "moved Acme Corp to Proposal", time: "2m ago", hue: "#2563eb" },
  { who: "Marcus Reid", action: "called Nova Systems (15 min)", time: "8m ago", hue: "#059669" },
  { who: "System", action: "new lead from website form", time: "14m ago", hue: "#111827" },
  { who: "Leila Park", action: "closed deal with Vertex Labs", time: "32m ago", hue: "#7c3aed" },
  { who: "System", action: "2 follow-up reminders sent", time: "1h ago", hue: "#111827" },
]

const upcomingTasks = [
  { title: "Follow up with Pacific Data", due: "Today", priority: "high" },
  { title: "Send proposal to Nebula AI", due: "Today", priority: "high" },
  { title: "Qualify lead from webinar", due: "Tomorrow", priority: "medium" },
  { title: "Review pipeline with sales team", due: "Tomorrow", priority: "medium" },
  { title: "Call back Draftboard Inc", due: "May 8", priority: "low" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "users") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M7 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/><path d="M17 11a4 4 0 0 1 3 3.87V21"/></svg>)
  if (name === "user") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>)
  if (name === "target") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>)
  if (name === "dollar") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>)
  if (name === "check-circle") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>)
  if (name === "phone") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>)
  if (name === "calendar") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 19V5M5 12l7-7 7 7"/></svg>)
  if (name === "arrow-down") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M19 12l-7 7-7-7"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>)
  if (name === "bell") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M6 8a6 6 0 0 1 12 0c0 5 2 7 2 7H4s2-2 2-7ZM10 20a2 2 0 0 0 4 0"/></svg>)
  if (name === "file-text") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>)
  if (name === "download") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>)
  return null
}

function Avatar({ name, hue = "#2563eb", size = 20 }) {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("")
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white"
      style={{ background: hue, width: size, height: size, fontSize: size * 0.42 }}>
      {initials}
    </span>
  )
}

export default function Home() {
  const [addLeadOpen, setAddLeadOpen] = useState(false)

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
          <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#111827"/><circle cx="12" cy="11" r="3" fill="#2563eb"/><path d="M6 25c0-4 2.7-6.5 6-6.5s6 2.5 6 6.5" fill="#2563eb"/><circle cx="21" cy="12" r="2.5" fill="#3b82f6"/><path d="M16 25c0-3.3 2.2-5.5 5-5.5s5 2.2 5 5.5" fill="#3b82f6"/></svg>
        </a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-accent-soft)] text-[var(--color-accent)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/leads" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)] relative" title="Leads"><Icon name="target" className="h-[18px] w-[18px]" /><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-[var(--color-accent)] px-1 text-[9px] font-semibold text-white">28</span></a>
          <a href="/deals" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Deals"><Icon name="dollar" className="h-[18px] w-[18px]" /></a>
          <a href="#" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Contacts"><Icon name="users" className="h-[18px] w-[18px]" /></a>
          <a href="#" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Tasks"><Icon name="check-circle" className="h-[18px] w-[18px]" /></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><Avatar name="Alex Kim" hue="#111827" size={28} /></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <h1 className="text-[15px] font-semibold">Overview</h1>
          <div className="flex items-center gap-2">
            <button onClick={() => setAddLeadOpen(true)} className="inline-flex h-8 items-center gap-1.5 rounded-md bg-[var(--color-accent)] px-2.5 text-[12.5px] font-medium text-white hover:bg-[var(--color-accent-2)]"><Icon name="plus" className="h-3.5 w-3.5" /> Add lead</button>
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            {/* Pipeline */}
            <div className="lg:col-span-2 rounded-lg border border-[var(--color-line)] bg-white p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[13px] font-semibold">Sales Pipeline</h2>
                <a href="/deals" className="text-[11px] font-medium text-[var(--color-accent)] hover:underline">View all deals</a>
              </div>
              <div className="space-y-4">
                {pipelineStages.map((s) => (
                  <div key={s.name} className="flex items-center gap-3">
                    <div className="w-24 shrink-0">
                      <p className="text-[12px] font-medium">{s.name}</p>
                      <p className="text-[11px] text-gray-400">{s.count} deals</p>
                    </div>
                    <div className="flex-1 h-2.5 rounded-full bg-[var(--color-bg-3)] overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${(s.count / 84) * 100}%`, background: s.color }} />
                    </div>
                    <span className="text-[12px] font-semibold font-mono w-16 text-right">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
              <h2 className="text-[13px] font-semibold mb-3">Quick actions</h2>
              <div className="space-y-2">
                <a href="/leads" className="flex items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="target" className="h-4 w-4 text-[var(--color-accent)]" /><span className="flex-1">Manage leads</span><Icon name="chevron-right" className="h-3 w-3 text-gray-400" /></a>
                <a href="/deals" className="flex items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="dollar" className="h-4 w-4 text-[var(--color-accent)]" /><span className="flex-1">Review pipeline</span><Icon name="chevron-right" className="h-3 w-3 text-gray-400" /></a>
                <button className="flex w-full items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="phone" className="h-4 w-4 text-[var(--color-accent)]" /><span className="flex-1">Log a call</span></button>
                <button className="flex w-full items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="download" className="h-4 w-4 text-[var(--color-accent)]" /><span className="flex-1">Export report</span></button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Recent Activity */}
            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
              <h2 className="text-[13px] font-semibold mb-3">Recent activity</h2>
              <div className="space-y-3">
                {recentActivity.map((a, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Avatar name={a.who} hue={a.hue} size={22} />
                    <div className="min-w-0 flex-1"><p className="text-[12px] leading-snug"><span className="font-semibold">{a.who}</span> {a.action}</p><p className="text-[11px] text-gray-400">{a.time}</p></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-[13px] font-semibold">Upcoming tasks</h2>
                <span className="text-[11px] text-gray-400">{upcomingTasks.length} pending</span>
              </div>
              <div className="space-y-2">
                {upcomingTasks.map((t, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-md border border-[var(--color-line)] px-3 py-2.5 hover:bg-[var(--color-bg-2)]">
                    <div className={`h-2 w-2 shrink-0 rounded-full ${t.priority === "high" ? "bg-rose-500" : t.priority === "medium" ? "bg-amber-500" : "bg-gray-300"}`} />
                    <div className="min-w-0 flex-1">
                      <p className="text-[12.5px] font-medium truncate">{t.title}</p>
                    </div>
                    <span className={`text-[11px] font-medium shrink-0 ${t.due === "Today" ? "text-rose-600" : "text-gray-400"}`}>{t.due}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add Lead Modal */}
      {addLeadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setAddLeadOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-4">Add new lead</h2>
            <div className="space-y-3">
              <div><label className="text-[12px] font-medium text-gray-600">Full name</label><input type="text" placeholder="Jane Doe" className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] focus:border-[var(--color-accent-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" /></div>
              <div><label className="text-[12px] font-medium text-gray-600">Company</label><input type="text" placeholder="Acme Corp" className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] focus:border-[var(--color-accent-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" /></div>
              <div><label className="text-[12px] font-medium text-gray-600">Email</label><input type="email" placeholder="jane@company.com" className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] focus:border-[var(--color-accent-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" /></div>
              <div className="grid grid-cols-2 gap-2">
                <div><label className="text-[12px] font-medium text-gray-600">Source</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Website</option><option>Referral</option><option>LinkedIn</option><option>Event</option><option>Outbound</option></select></div>
                <div><label className="text-[12px] font-medium text-gray-600">Status</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>New</option><option>Contacted</option><option>Qualified</option><option>Lost</option></select></div>
              </div>
              <div><label className="text-[12px] font-medium text-gray-600">Estimated value</label><input type="text" placeholder="$10,000" className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] focus:border-[var(--color-accent-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" /></div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setAddLeadOpen(false)} className="h-8 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-gray-600 hover:bg-[var(--color-bg-2)]">Cancel</button>
              <button onClick={() => setAddLeadOpen(false)} className="h-8 rounded-md bg-[var(--color-accent)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-accent-2)]">Add lead</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
