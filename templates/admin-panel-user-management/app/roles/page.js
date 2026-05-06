"use client"

import { useState } from "react"

const roles = [
  {
    name: "Admin", color: "#dc2626", count: 18,
    description: "Full access to all resources and settings.",
    permissions: [
      { name: "Manage members", enabled: true },
      { name: "Manage billing", enabled: true },
      { name: "View audit logs", enabled: true },
      { name: "Change organization settings", enabled: true },
      { name: "Delete organization", enabled: true },
    ]
  },
  {
    name: "Editor", color: "#2563eb", count: 64,
    description: "Can create and edit content, manage projects.",
    permissions: [
      { name: "Manage members", enabled: false },
      { name: "Manage billing", enabled: false },
      { name: "View audit logs", enabled: true },
      { name: "Change organization settings", enabled: false },
      { name: "Delete organization", enabled: false },
    ]
  },
  {
    name: "Viewer", color: "#059669", count: 89,
    description: "Read-only access to resources and reports.",
    permissions: [
      { name: "Manage members", enabled: false },
      { name: "Manage billing", enabled: false },
      { name: "View audit logs", enabled: false },
      { name: "Change organization settings", enabled: false },
      { name: "Delete organization", enabled: false },
    ]
  },
  {
    name: "Guest", color: "#ca8a04", count: 14,
    description: "Limited access to specific shared resources.",
    permissions: [
      { name: "Manage members", enabled: false },
      { name: "Manage billing", enabled: false },
      { name: "View audit logs", enabled: false },
      { name: "Change organization settings", enabled: false },
      { name: "Delete organization", enabled: false },
    ]
  },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "users") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M7 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/><path d="M17 11a4 4 0 0 1 3 3.87V21"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>)
  if (name === "shield") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>)
  if (name === "activity") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>)
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "x") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>)
  return null
}

export default function RolesPage() {
  const [selectedRole, setSelectedRole] = useState(roles[0])

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg"><svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#111827"/><circle cx="16" cy="13" r="5" fill="#059669"/><path d="M7 26c0-6 4-9 9-9s9 3 9 9" fill="#059669"/></svg></a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/members" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Directory"><Icon name="users" className="h-[18px] w-[18px]" /></a>
          <a href="/invites" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)] relative" title="Invites"><Icon name="mail" className="h-[18px] w-[18px]" /><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-[var(--color-indigo)] px-1 text-[9px] font-semibold text-white">12</span></a>
          <a href="/roles" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]" title="Roles"><Icon name="shield" className="h-[18px] w-[18px]" /></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Activity"><Icon name="activity" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white bg-[#111827]" style={{ width: 28, height: 28, fontSize: 11.76 }}>AG</span></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
            <a href="/" className="hover:text-[var(--color-ink)]">Overview</a><Icon name="chevron-right" className="h-3 w-3" />
            <span className="font-semibold text-[var(--color-ink)]">Roles</span>
          </div>
        </div>
        <div className="scroll-thin flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl">
            <div className="space-y-2">
              {roles.map((r) => (
                <button key={r.name} onClick={() => setSelectedRole(r)} className={`w-full rounded-lg border p-3 text-left transition ${selectedRole.name === r.name ? 'border-[var(--color-indigo)] bg-[var(--color-indigo-soft)]' : 'border-[var(--color-line)] bg-white hover:bg-[var(--color-bg-2)]'}`}>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: r.color }} />
                    <span className="text-[13px] font-semibold">{r.name}</span>
                    <span className="ml-auto text-[11px] text-gray-500">{r.count} members</span>
                  </div>
                  <p className="mt-1 text-[11px] text-gray-500">{r.description}</p>
                </button>
              ))}
            </div>
            <div className="lg:col-span-2 rounded-lg border border-[var(--color-line)] bg-white p-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-3 w-3 rounded-full" style={{ background: selectedRole.color }} />
                <h2 className="text-[15px] font-semibold">{selectedRole.name}</h2>
                <span className="text-[11px] text-gray-500">({selectedRole.count} members)</span>
              </div>
              <p className="text-[12.5px] text-gray-600 mb-4">{selectedRole.description}</p>
              <h3 className="text-[12px] font-semibold uppercase tracking-wider text-gray-500 mb-2">Permissions</h3>
              <div className="space-y-1">
                {selectedRole.permissions.map((p) => (
                  <div key={p.name} className="flex items-center justify-between rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px]">
                    <span>{p.name}</span>
                    {p.enabled ? <Icon name="check" className="h-4 w-4 text-[var(--color-indigo)]" /> : <Icon name="x" className="h-4 w-4 text-gray-300" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
