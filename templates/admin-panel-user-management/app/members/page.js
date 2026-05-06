"use client"

import { useState } from "react"

const members = [
  { id: "USR-4412", name: "Elena Voss", email: "elena.voss@acme.co", role: "Admin", roleColor: "#dc2626", status: "active", mfa: "TOTP", sso: "Okta", lastActive: "2m" },
  { id: "USR-4409", name: "Marcus Chen", email: "marcus.chen@acme.co", role: "Editor", roleColor: "#2563eb", status: "active", mfa: "WebAuthn", sso: "Okta", lastActive: "5m" },
  { id: "USR-4401", name: "Priya Nair", email: "priya.nair@acme.co", role: "Viewer", roleColor: "#059669", status: "invited", mfa: "—", sso: "—", lastActive: "—" },
  { id: "USR-4398", name: "Jonas Keller", email: "jonas.keller@acme.co", role: "Editor", roleColor: "#2563eb", status: "active", mfa: "TOTP", sso: "Okta", lastActive: "14m" },
  { id: "USR-4385", name: "Leila Park", email: "leila.park@acme.co", role: "Admin", roleColor: "#dc2626", status: "active", mfa: "WebAuthn", sso: "Okta", lastActive: "22m" },
  { id: "USR-4372", name: "Omar Farooq", email: "omar.farooq@acme.co", role: "Guest", roleColor: "#ca8a04", status: "deactivated", mfa: "—", sso: "—", lastActive: "2d" },
  { id: "USR-4361", name: "Sofia Rossi", email: "sofia.rossi@acme.co", role: "Editor", roleColor: "#2563eb", status: "active", mfa: "TOTP", sso: "Google", lastActive: "1h" },
  { id: "USR-4350", name: "David Osei", email: "david.osei@acme.co", role: "Viewer", roleColor: "#059669", status: "invited", mfa: "—", sso: "—", lastActive: "—" },
  { id: "USR-4344", name: "Yuki Tanaka", email: "yuki.tanaka@acme.co", role: "Editor", roleColor: "#2563eb", status: "active", mfa: "WebAuthn", sso: "Okta", lastActive: "3h" },
  { id: "USR-4331", name: "Ava Lindgren", email: "ava.lindgren@acme.co", role: "Admin", roleColor: "#dc2626", status: "active", mfa: "TOTP", sso: "Okta", lastActive: "4h" },
  { id: "USR-4320", name: "Kenji Sato", email: "kenji.sato@acme.co", role: "Guest", roleColor: "#ca8a04", status: "active", mfa: "SMS", sso: "Google", lastActive: "6h" },
  { id: "USR-4311", name: "Nadia Ibrahim", email: "nadia.ibrahim@acme.co", role: "Viewer", roleColor: "#059669", status: "deactivated", mfa: "—", sso: "—", lastActive: "5d" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "users") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M7 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/><path d="M17 11a4 4 0 0 1 3 3.87V21"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>)
  if (name === "shield") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>)
  if (name === "activity") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>)
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  if (name === "filter") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 5h18l-7 9v5l-4 2v-7L3 5Z"/></svg>)
  if (name === "more") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="5" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="19" r="1.5" fill="currentColor"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  return null
}

function Avatar({ name, hue = "#059669", size = 20 }) {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("")
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white"
      style={{ background: hue, width: size, height: size, fontSize: size * 0.42 }}>{initials}</span>
  )
}

function StatusPill({ status }) {
  const map = {
    active: { dot: "#059669", label: "Active", bg: "#d1fae5", fg: "#065f46" },
    invited: { dot: "#2563eb", label: "Invited", bg: "#dbeafe", fg: "#1e40af" },
    deactivated: { dot: "#9ca3af", label: "Deactivated", bg: "#f3f4f6", fg: "#4b5563" },
  }
  const s = map[status]
  return <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: s.bg, color: s.fg }}><span className="h-1.5 w-1.5 rounded-full" style={{ background: s.dot }} />{s.label}</span>
}

function RoleBadge({ name, color }) {
  return <span className="inline-flex items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-1.5 py-0.5 text-[10.5px] font-medium text-gray-700"><span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />{name}</span>
}

export default function MembersPage() {
  const [inviteOpen, setInviteOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [editMember, setEditMember] = useState(null)
  const [deactivateOpen, setDeactivateOpen] = useState(false)
  const [deactivateMember, setDeactivateMember] = useState(null)

  const openEdit = (m) => { setEditMember(m); setEditOpen(true) }
  const openDeactivate = (m) => { setDeactivateMember(m); setDeactivateOpen(true) }

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg"><svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#111827"/><circle cx="16" cy="13" r="5" fill="#059669"/><path d="M7 26c0-6 4-9 9-9s9 3 9 9" fill="#059669"/></svg></a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/members" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]" title="Directory"><Icon name="users" className="h-[18px] w-[18px]" /></a>
          <a href="/invites" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)] relative" title="Invites"><Icon name="mail" className="h-[18px] w-[18px]" /><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-[var(--color-indigo)] px-1 text-[9px] font-semibold text-white">12</span></a>
          <a href="/roles" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Roles"><Icon name="shield" className="h-[18px] w-[18px]" /></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Activity"><Icon name="activity" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><Avatar name="Ari Gomez" hue="#111827" size={28} /></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
            <a href="/" className="hover:text-[var(--color-ink)]">Overview</a><Icon name="chevron-right" className="h-3 w-3" /><span className="font-semibold text-[var(--color-ink)]">Directory</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Icon name="search" className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search members..." className="h-8 w-56 rounded-md border border-[var(--color-line)] bg-[var(--color-bg-2)] pl-7 pr-3 text-[12.5px] placeholder:text-gray-400 focus:border-[var(--color-indigo-ring)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-soft)]" />
            </div>
            <button onClick={() => setInviteOpen(true)} className="inline-flex h-8 items-center gap-1.5 rounded-md bg-[var(--color-indigo)] px-2.5 text-[12.5px] font-medium text-white hover:bg-[var(--color-indigo-2)]"><Icon name="plus" className="h-3.5 w-3.5" /><span className="hidden sm:inline">Invite member</span></button>
          </div>
        </div>

        <div className="scroll-thin flex-1 overflow-y-auto">
          <div className="grid grid-cols-[28px_80px_1fr_80px_80px_72px_72px_48px] items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
            <span><input type="checkbox" className="h-3.5 w-3.5 accent-[var(--color-indigo)]" /></span>
            <span>ID</span><span>Member</span><span>Role</span><span className="text-center">Status</span><span className="hidden md:block">MFA</span><span>Last active</span><span></span>
          </div>
          {members.map((it) => (
            <div key={it.id} className="row-zebra group grid grid-cols-[28px_80px_1fr_80px_80px_72px_72px_48px] items-center gap-3 border-b border-[var(--color-line-2)] px-4 text-[12.5px] hover:bg-[var(--color-bg-2)]">
              <span><input type="checkbox" className="h-3.5 w-3.5 accent-[var(--color-indigo)]" /></span>
              <span className="font-mono text-[11.5px] text-gray-500">{it.id}</span>
              <a href={`/members/${it.id}`} className="truncate hover:underline"><span className="font-medium text-[var(--color-ink)] block">{it.name}</span><span className="text-[11px] text-gray-500">{it.email}</span></a>
              <span><RoleBadge name={it.role} color={it.roleColor} /></span>
              <span className="flex justify-center"><StatusPill status={it.status} /></span>
              <span className="hidden md:block font-mono text-[11px] text-gray-600">{it.mfa}</span>
              <span className="font-mono text-[11px] text-gray-500">{it.lastActive}</span>
              <span className="flex justify-end">
                <div className="relative group/action">
                  <button className="text-gray-400 hover:text-[var(--color-ink)]"><Icon name="more" className="h-4 w-4" /></button>
                  <div className="absolute right-0 top-full z-20 hidden w-36 rounded-lg border border-[var(--color-line)] bg-white py-1 shadow-lg group-hover/action:block">
                    <a href={`/members/${it.id}`} className="block px-3 py-1.5 text-[12px] hover:bg-[var(--color-bg-2)]">View profile</a>
                    <button onClick={() => openEdit(it)} className="block w-full text-left px-3 py-1.5 text-[12px] hover:bg-[var(--color-bg-2)]">Edit member</button>
                    <button onClick={() => openDeactivate(it)} className="block w-full text-left px-3 py-1.5 text-[12px] text-rose-600 hover:bg-[var(--color-bg-2)]">Deactivate</button>
                  </div>
                </div>
              </span>
            </div>
          ))}
        </div>
      </main>

      {/* Invite Modal */}
      {inviteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setInviteOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-4">Invite new member</h2>
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

      {/* Edit Modal */}
      {editOpen && editMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setEditOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-4">Edit {editMember.name}</h2>
            <div className="space-y-3">
              <div><label className="text-[12px] font-medium text-gray-600">Role</label><select defaultValue={editMember.role} className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Viewer</option><option>Editor</option><option>Admin</option><option>Guest</option></select></div>
              <div><label className="text-[12px] font-medium text-gray-600">Team</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Engineering</option><option>Product</option><option>Design</option><option>Marketing</option><option>Sales</option></select></div>
              <div className="flex items-center gap-2"><input type="checkbox" defaultChecked={editMember.mfa !== "—"} className="h-4 w-4 accent-[var(--color-indigo)]" /><span className="text-[12.5px]">Require MFA</span></div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setEditOpen(false)} className="h-8 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-gray-600 hover:bg-[var(--color-bg-2)]">Cancel</button>
              <button onClick={() => setEditOpen(false)} className="h-8 rounded-md bg-[var(--color-indigo)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-indigo-2)]">Save changes</button>
            </div>
          </div>
        </div>
      )}

      {/* Deactivate Modal */}
      {deactivateOpen && deactivateMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setDeactivateOpen(false)}>
          <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-2 text-rose-600">Deactivate member</h2>
            <p className="text-[12.5px] text-gray-600 mb-4">Are you sure you want to deactivate <strong>{deactivateMember.name}</strong>? They will lose access immediately.</p>
            <div className="mb-4"><label className="text-[12px] font-medium text-gray-600">Reason (optional)</label><textarea className="mt-1 h-16 w-full rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] focus:border-[var(--color-indigo-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-soft)]" /></div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setDeactivateOpen(false)} className="h-8 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-gray-600 hover:bg-[var(--color-bg-2)]">Cancel</button>
              <button onClick={() => setDeactivateOpen(false)} className="h-8 rounded-md bg-rose-600 px-3 text-[12.5px] font-medium text-white hover:bg-rose-700">Deactivate</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
