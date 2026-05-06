"use client"

import { useState } from "react"

const member = {
  id: "USR-4412", name: "Elena Voss", email: "elena.voss@acme.co", role: "Admin", roleColor: "#dc2626",
  status: "active", mfa: "TOTP", sso: "Okta", lastActive: "2m", joined: "Jan 15, 2023",
  teams: ["Engineering", "Security"], department: "Engineering", location: "Berlin, DE",
  bio: "Senior platform engineer leading identity and access initiatives."
}

const activity = [
  { action: "Logged in from Chrome on macOS", time: "2 minutes ago" },
  { action: "Updated MFA settings to TOTP", time: "3 days ago" },
  { action: "Promoted Marcus Chen to Editor", time: "1 week ago" },
  { action: "Joined Security team", time: "2 weeks ago" },
  { action: "Accepted terms of service v3.2", time: "1 month ago" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "users") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M7 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/><path d="M17 11a4 4 0 0 1 3 3.87V21"/></svg>)
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>)
  if (name === "shield") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>)
  if (name === "activity") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>)
  if (name === "edit") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>)
  if (name === "lock") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>)
  if (name === "impersonate") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>)
  return null
}

function Avatar({ name, hue = "#059669", size = 20 }) {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("")
  return <span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white" style={{ background: hue, width: size, height: size, fontSize: size * 0.42 }}>{initials}</span>
}

export default function MemberDetail() {
  const [editOpen, setEditOpen] = useState(false)

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
            <a href="/" className="hover:text-[var(--color-ink)]">Overview</a><Icon name="chevron-right" className="h-3 w-3" />
            <a href="/members" className="hover:text-[var(--color-ink)]">Directory</a><Icon name="chevron-right" className="h-3 w-3" />
            <span className="font-semibold text-[var(--color-ink)]">{member.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setEditOpen(true)} className="inline-flex h-8 items-center gap-1.5 rounded-md border border-[var(--color-line)] px-2.5 text-[12.5px] font-medium text-gray-700 hover:bg-[var(--color-bg-2)]"><Icon name="edit" className="h-3.5 w-3.5" /><span className="hidden sm:inline">Edit</span></button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-md border border-[var(--color-line)] px-2.5 text-[12.5px] font-medium text-gray-700 hover:bg-[var(--color-bg-2)]"><Icon name="impersonate" className="h-3.5 w-3.5" /><span className="hidden sm:inline">Impersonate</span></button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-md bg-rose-600 px-2.5 text-[12.5px] font-medium text-white hover:bg-rose-700"><Icon name="lock" className="h-3.5 w-3.5" /><span className="hidden sm:inline">Deactivate</span></button>
          </div>
        </div>

        <div className="scroll-thin flex-1 overflow-y-auto p-4">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-start gap-4 mb-6">
              <Avatar name={member.name} hue={member.roleColor} size={64} />
              <div className="flex-1">
                <h1 className="text-[18px] font-semibold">{member.name}</h1>
                <p className="text-[13px] text-gray-500">{member.email}</p>
                <p className="text-[12.5px] text-gray-600 mt-1">{member.bio}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: "#d1fae5", color: "#065f46" }}><span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />{member.status}</span>
                  <span className="inline-flex items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-1.5 py-0.5 text-[10.5px] font-medium text-gray-700"><span className="h-1.5 w-1.5 rounded-full" style={{ background: member.roleColor }} />{member.role}</span>
                  <span className="text-[11px] text-gray-500 px-1">{member.department}</span>
                  <span className="text-[11px] text-gray-500 px-1">{member.location}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
                <h3 className="text-[12px] font-semibold uppercase tracking-wider text-gray-500 mb-3">Security</h3>
                <div className="space-y-2 text-[12.5px]">
                  <div className="flex justify-between"><span className="text-gray-500">MFA</span><span className="font-medium">{member.mfa}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">SSO provider</span><span className="font-medium">{member.sso}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Last active</span><span className="font-medium">{member.lastActive}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Joined</span><span className="font-medium">{member.joined}</span></div>
                </div>
              </div>
              <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
                <h3 className="text-[12px] font-semibold uppercase tracking-wider text-gray-500 mb-3">Teams</h3>
                <div className="flex flex-wrap gap-2">
                  {member.teams.map((t) => (
                    <span key={t} className="rounded-full bg-[var(--color-bg-2)] px-2.5 py-1 text-[11px] font-medium text-gray-700">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
              <h3 className="text-[12px] font-semibold uppercase tracking-wider text-gray-500 mb-3">Activity timeline</h3>
              <div className="space-y-3">
                {activity.map((a, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-indigo)] shrink-0" />
                    <div><p className="text-[12.5px]">{a.action}</p><p className="text-[11px] text-gray-400">{a.time}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {editOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setEditOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-4">Edit {member.name}</h2>
            <div className="space-y-3">
              <div><label className="text-[12px] font-medium text-gray-600">Role</label><select defaultValue={member.role} className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Viewer</option><option>Editor</option><option>Admin</option><option>Guest</option></select></div>
              <div><label className="text-[12px] font-medium text-gray-600">Department</label><input defaultValue={member.department} className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px]" /></div>
              <div><label className="text-[12px] font-medium text-gray-600">Location</label><input defaultValue={member.location} className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px]" /></div>
              <div className="flex items-center gap-2"><input type="checkbox" defaultChecked className="h-4 w-4 accent-[var(--color-indigo)]" /><span className="text-[12.5px]">Require MFA</span></div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setEditOpen(false)} className="h-8 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-gray-600 hover:bg-[var(--color-bg-2)]">Cancel</button>
              <button onClick={() => setEditOpen(false)} className="h-8 rounded-md bg-[var(--color-indigo)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-indigo-2)]">Save changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
