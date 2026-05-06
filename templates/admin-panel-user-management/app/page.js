"use client"

import { useState } from "react"

const kpis = [
  { label: "Total members", value: "184", delta: "+7", dir: "up", color: "#059669" },
  { label: "Active now", value: "67", delta: "+12", dir: "up", color: "#2563eb" },
  { label: "Pending invites", value: "12", delta: "-3", dir: "down", color: "#d97706" },
  { label: "Deactivated", value: "9", delta: "+1", dir: "up", color: "#dc2626" },
]

const recentActivity = [
  { who: "Elena Voss", action: "promoted Marcus Chen to Editor", time: "2m ago", hue: "#dc2626" },
  { who: "System", action: "sent invite to Priya Nair", time: "8m ago", hue: "#111827" },
  { who: "Jonas Keller", action: "enabled WebAuthn on primary device", time: "14m ago", hue: "#2563eb" },
  { who: "Leila Park", action: "deactivated Omar Farooq", time: "22m ago", hue: "#dc2626" },
  { who: "System", action: "auto-locked 3 dormant accounts", time: "2h ago", hue: "#111827" },
]

const teamBreakdown = [
  { name: "Engineering", count: 62, color: "#2563eb" },
  { name: "Product", count: 28, color: "#7c3aed" },
  { name: "Design", count: 19, color: "#db2777" },
  { name: "Marketing", count: 24, color: "#ea580c" },
  { name: "Sales", count: 31, color: "#059669" },
  { name: "Support", count: 20, color: "#0891b2" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "users") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M7 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/><path d="M17 11a4 4 0 0 1 3 3.87V21"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>)
  if (name === "shield") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>)
  if (name === "activity") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 19V5M5 12l7-7 7 7"/></svg>)
  if (name === "arrow-down") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M19 12l-7 7-7-7"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>)
  if (name === "bell") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M6 8a6 6 0 0 1 12 0c0 5 2 7 2 7H4s2-2 2-7ZM10 20a2 2 0 0 0 4 0"/></svg>)
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "file-text") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>)
  if (name === "download") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>)
  return null
}

function Avatar({ name, hue = "#059669", size = 20 }) {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("")
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white"
      style={{ background: hue, width: size, height: size, fontSize: size * 0.42 }}>
      {initials}
    </span>
  )
}

export default function Home() {
  const [inviteOpen, setInviteOpen] = useState(false)

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]">
          <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#111827"/><circle cx="16" cy="13" r="5" fill="#059669"/><path d="M7 26c0-6 4-9 9-9s9 3 9 9" fill="#059669"/></svg>
        </a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/members" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Directory"><Icon name="users" className="h-[18px] w-[18px]" /></a>
          <a href="/invites" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)] relative" title="Invites"><Icon name="mail" className="h-[18px] w-[18px]" /><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-[var(--color-indigo)] px-1 text-[9px] font-semibold text-white">12</span></a>
          <a href="/roles" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Roles"><Icon name="shield" className="h-[18px] w-[18px]" /></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Activity"><Icon name="activity" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><Avatar name="Ari Gomez" hue="#111827" size={28} /></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <h1 className="text-[15px] font-semibold">Overview</h1>
          <div className="flex items-center gap-2">
            <button onClick={() => setInviteOpen(true)} className="inline-flex h-8 items-center gap-1.5 rounded-md bg-[var(--color-indigo)] px-2.5 text-[12.5px] font-medium text-white hover:bg-[var(--color-indigo-2)]"><Icon name="plus" className="h-3.5 w-3.5" /> Invite member</button>
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
            {/* Team Breakdown */}
            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
              <h2 className="text-[13px] font-semibold mb-3">Team breakdown</h2>
              <div className="space-y-3">
                {teamBreakdown.map((t) => (
                  <div key={t.name} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full shrink-0" style={{ background: t.color }} />
                    <span className="flex-1 text-[12.5px]">{t.name}</span>
                    <span className="text-[12px] font-semibold">{t.count}</span>
                    <div className="w-20 h-1.5 rounded-full bg-[var(--color-bg-3)] overflow-hidden"><div className="h-full rounded-full" style={{ width: (t.count/2)+"%", background: t.color }} /></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
              <h2 className="text-[13px] font-semibold mb-3">Quick actions</h2>
              <div className="space-y-2">
                <a href="/members" className="flex items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="users" className="h-4 w-4 text-[var(--color-indigo)]" /><span className="flex-1">View member directory</span><Icon name="chevron-right" className="h-3 w-3 text-gray-400" /></a>
                <a href="/invites" className="flex items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="mail" className="h-4 w-4 text-[var(--color-indigo)]" /><span className="flex-1">Manage pending invites</span><Icon name="chevron-right" className="h-3 w-3 text-gray-400" /></a>
                <a href="/roles" className="flex items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="shield" className="h-4 w-4 text-[var(--color-indigo)]" /><span className="flex-1">Review roles & permissions</span><Icon name="chevron-right" className="h-3 w-3 text-gray-400" /></a>
                <button className="flex w-full items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="download" className="h-4 w-4 text-[var(--color-indigo)]" /><span className="flex-1">Export directory CSV</span></button>
              </div>
            </div>

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
          </div>
        </div>
      </main>

      {/* Invite Member Modal */}
      {inviteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setInviteOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-4">Invite new member</h2>
            <div className="space-y-3">
              <div><label className="text-[12px] font-medium text-gray-600">Email address</label><input type="email" placeholder="colleague@company.com" className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] focus:border-[var(--color-indigo-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-soft)]" /></div>
              <div><label className="text-[12px] font-medium text-gray-600">Role</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Viewer</option><option>Editor</option><option>Admin</option><option>Guest</option></select></div>
              <div><label className="text-[12px] font-medium text-gray-600">Team</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Engineering</option><option>Product</option><option>Design</option><option>Marketing</option><option>Sales</option></select></div>
              <div><label className="text-[12px] font-medium text-gray-600">Message (optional)</label><textarea placeholder="Welcome to the team..." className="mt-1 h-20 w-full rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] focus:border-[var(--color-indigo-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-soft)]" /></div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setInviteOpen(false)} className="h-8 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-gray-600 hover:bg-[var(--color-bg-2)]">Cancel</button>
              <button onClick={() => setInviteOpen(false)} className="h-8 rounded-md bg-[var(--color-indigo)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-indigo-2)]">Send invite</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
