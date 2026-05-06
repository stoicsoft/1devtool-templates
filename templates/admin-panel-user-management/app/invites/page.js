"use client"

import { useState } from "react"

const invites = [
  { email: "priya.nair@acme.co", role: "Viewer", team: "Product", sent: "2h ago", expires: "5 days", status: "pending" },
  { email: "david.osei@acme.co", role: "Viewer", team: "Engineering", sent: "1d ago", expires: "4 days", status: "pending" },
  { email: "tom.reed@acme.co", role: "Editor", team: "Design", sent: "2d ago", expires: "3 days", status: "pending" },
  { email: "sarah.kim@acme.co", role: "Admin", team: "Security", sent: "3d ago", expires: "2 days", status: "expiring" },
  { email: "james.wu@acme.co", role: "Guest", team: "Sales", sent: "5d ago", expires: "Expired", status: "expired" },
  { email: "lisa.martinez@acme.co", role: "Editor", team: "Marketing", sent: "1w ago", expires: "Expired", status: "expired" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "users") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M7 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/><path d="M17 11a4 4 0 0 1 3 3.87V21"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>)
  if (name === "shield") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>)
  if (name === "activity") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>)
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "refresh") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>)
  if (name === "trash") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>)
  return null
}

function StatusPill({ status }) {
  const map = {
    pending: { bg: "#dbeafe", fg: "#1e40af", label: "Pending" },
    expiring: { bg: "#fef3c7", fg: "#92400e", label: "Expiring soon" },
    expired: { bg: "#f3f4f6", fg: "#4b5563", label: "Expired" },
  }
  const s = map[status]
  return <span className="inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: s.bg, color: s.fg }}>{s.label}</span>
}

export default function InvitesPage() {
  const [inviteOpen, setInviteOpen] = useState(false)

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg"><svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#111827"/><circle cx="16" cy="13" r="5" fill="#059669"/><path d="M7 26c0-6 4-9 9-9s9 3 9 9" fill="#059669"/></svg></a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/members" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Directory"><Icon name="users" className="h-[18px] w-[18px]" /></a>
          <a href="/invites" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-indigo-soft)] text-[var(--color-indigo)] relative" title="Invites"><Icon name="mail" className="h-[18px] w-[18px]" /><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-[var(--color-indigo)] px-1 text-[9px] font-semibold text-white">12</span></a>
          <a href="/roles" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Roles"><Icon name="shield" className="h-[18px] w-[18px]" /></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Activity"><Icon name="activity" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white bg-[#111827]" style={{ width: 28, height: 28, fontSize: 11.76 }}>AG</span></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
            <a href="/" className="hover:text-[var(--color-ink)]">Overview</a><Icon name="chevron-right" className="h-3 w-3" />
            <span className="font-semibold text-[var(--color-ink)]">Invites</span>
          </div>
          <button onClick={() => setInviteOpen(true)} className="inline-flex h-8 items-center gap-1.5 rounded-md bg-[var(--color-indigo)] px-2.5 text-[12.5px] font-medium text-white hover:bg-[var(--color-indigo-2)]"><Icon name="plus" className="h-3.5 w-3.5" /> New invite</button>
        </div>
        <div className="scroll-thin flex-1 overflow-y-auto p-4">
          <div className="rounded-lg border border-[var(--color-line)] bg-white overflow-hidden">
            <div className="grid grid-cols-1fr_80px_80px_80px_80px_96px gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
              <span>Email</span><span>Role</span><span>Team</span><span>Sent</span><span>Expires</span><span className="text-right">Status</span>
            </div>
            {invites.map((inv) => (
              <div key={inv.email} className="row-zebra grid grid-cols-1fr_80px_80px_80px_80px_96px gap-3 items-center border-b border-[var(--color-line-2)] px-4 py-2 text-[12.5px]">
                <span className="font-medium">{inv.email}</span>
                <span>{inv.role}</span>
                <span>{inv.team}</span>
                <span className="text-gray-500">{inv.sent}</span>
                <span className="text-gray-500">{inv.expires}</span>
                <span className="text-right"><StatusPill status={inv.status} /></span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {inviteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setInviteOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-4">Send new invite</h2>
            <div className="space-y-3">
              <div><label className="text-[12px] font-medium text-gray-600">Email address</label><input type="email" placeholder="colleague@company.com" className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] focus:border-[var(--color-indigo-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-soft)]" /></div>
              <div><label className="text-[12px] font-medium text-gray-600">Role</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Viewer</option><option>Editor</option><option>Admin</option><option>Guest</option></select></div>
              <div><label className="text-[12px] font-medium text-gray-600">Team</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Engineering</option><option>Product</option><option>Design</option><option>Marketing</option><option>Sales</option></select></div>
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
