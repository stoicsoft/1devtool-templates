"use client"

import { useState } from "react"

const events = [
  { id: "EVT-99201", severity: "critical", actor: "root@prod-db-01", action: "ALTER TABLE users DROP COLUMN ssn", resource: "prod-db-01/users", policy: "DATA-03", time: "2m" },
  { id: "EVT-99188", severity: "high", actor: "svc-ci-deploy", action: "MODIFIED iam.policy", resource: "aws:iam::prod", policy: "IAM-07", time: "8m" },
  { id: "EVT-99172", severity: "medium", actor: "leila.park", action: "DOWNLOADED customer_export.csv", resource: "s3://exports/", policy: "DATA-01", time: "14m" },
  { id: "EVT-99155", severity: "low", actor: "system", action: "ROTATED tls-cert.api.acme.co", resource: "cert-manager", policy: "INFRA-12", time: "22m" },
  { id: "EVT-99134", severity: "high", actor: "omar.farooq", action: "GRANTED admin to guest-account", resource: "authz/roles", policy: "IAM-02", time: "31m" },
  { id: "EVT-99112", severity: "medium", actor: "system", action: "BACKUP FAILED prod-db-01", resource: "rds:prod-db-01", policy: "BCP-04", time: "45m" },
  { id: "EVT-99098", severity: "critical", actor: "unknown-ip-185.22.x.x", action: "FAILED LOGIN x47 admin@acme.co", resource: "sso.acme.co", policy: "SEC-01", time: "1h" },
  { id: "EVT-99081", severity: "low", actor: "priya.nair", action: "ACCEPTED terms-of-service v3.2", resource: "legal/attestations", policy: "COMP-01", time: "1h" },
  { id: "EVT-99064", severity: "medium", actor: "svc-logging", action: "DELETED 14d old logs from staging", resource: "s3://logs-staging/", policy: "RET-03", time: "2h" },
  { id: "EVT-99041", severity: "high", actor: "elena.voss", action: "DISABLED mfa.requirement", resource: "authz/policies", policy: "IAM-05", time: "3h" },
  { id: "EVT-99022", severity: "low", actor: "system", action: "SCHEDULED quarterly access review", resource: "compliance/reviews", policy: "COMP-02", time: "4h" },
  { id: "EVT-99001", severity: "medium", actor: "marcus.chen", action: "EXPORTED audit_trail_Q1.csv", resource: "s3://evidence/", policy: "DATA-02", time: "5h" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "stream") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 6h16M4 10h12M4 14h16M4 18h10"/></svg>)
  if (name === "shield-check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>)
  if (name === "archive") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>)
  if (name === "clipboard") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>)
  if (name === "more") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="5" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="19" r="1.5" fill="currentColor"/></svg>)
  return null
}

function SeverityPill({ severity }) {
  const map = {
    critical: { dot: "#dc2626", label: "Critical", bg: "#fee2e2", fg: "#991b1b" },
    high: { dot: "#ea580c", label: "High", bg: "#ffedd5", fg: "#9a3412" },
    medium: { dot: "#ca8a04", label: "Medium", bg: "#fef9c3", fg: "#854d0e" },
    low: { dot: "#16a34a", label: "Low", bg: "#dcfce7", fg: "#166534" },
  }
  const s = map[severity]
  return <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: s.bg, color: s.fg }}><span className="h-1.5 w-1.5 rounded-full" style={{ background: s.dot }} />{s.label}</span>
}

function PolicyBadge({ name }) {
  return <span className="inline-flex items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-1.5 py-0.5 text-[10.5px] font-medium text-gray-700 font-mono">{name}</span>
}

export default function EventsPage() {
  const [investigateOpen, setInvestigateOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <div className="flex h-screen w-screen bg-[var(--color-bg)] text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg"><svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#1c1917"/><path d="M16 7 25 12v8c0 5.5-4 9.5-9 11-5-1.5-9-5.5-9-11v-8l9-5Z" fill="#ea580c"/><path d="M12 16l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg></a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/events" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]" title="Event stream"><Icon name="stream" className="h-[18px] w-[18px]" /></a>
          <a href="/policies" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Policies"><Icon name="shield-check" className="h-[18px] w-[18px]" /></a>
          <a href="/evidence" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Evidence"><Icon name="archive" className="h-[18px] w-[18px]" /></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Review queue"><Icon name="clipboard" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white bg-[#1c1917]" style={{ width: 28, height: 28, fontSize: 11.76 }}>RP</span></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
            <a href="/" className="hover:text-[var(--color-ink)]">Overview</a><Icon name="chevron-right" className="h-3 w-3" /><span className="font-semibold text-[var(--color-ink)]">Event stream</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Icon name="search" className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search events..." className="h-8 w-56 rounded-md border border-[var(--color-line)] bg-[var(--color-bg-2)] pl-7 pr-3 text-[12.5px] placeholder:text-gray-400 focus:border-[var(--color-indigo-ring)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-soft)]" />
            </div>
          </div>
        </div>
        <div className="scroll-thin flex-1 overflow-y-auto">
          <div className="grid grid-cols-[28px_80px_80px_1fr_1fr_60px_80px_72px_48px] items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
            <span><input type="checkbox" className="h-3.5 w-3.5 accent-[var(--color-indigo)]" /></span>
            <span>ID</span><span>Severity</span><span>Actor</span><span>Action</span><span className="hidden md:block text-center">Policy</span><span className="hidden lg:block">Resource</span><span>Time</span><span></span>
          </div>
          {events.map((it) => (
            <div key={it.id} className="row-zebra group grid grid-cols-[28px_80px_80px_1fr_1fr_60px_80px_72px_48px] items-center gap-3 border-b border-[var(--color-line-2)] px-4 text-[12.5px] hover:bg-[var(--color-bg-2)]">
              <span><input type="checkbox" className="h-3.5 w-3.5 accent-[var(--color-indigo)]" /></span>
              <span className="font-mono text-[11.5px] text-gray-500">{it.id}</span>
              <span><SeverityPill severity={it.severity} /></span>
              <span className="truncate font-mono text-[11px] text-[var(--color-ink)]">{it.actor}</span>
              <span className="truncate text-gray-700">{it.action}</span>
              <span className="hidden md:block flex justify-center"><PolicyBadge name={it.policy} /></span>
              <span className="hidden lg:block font-mono text-[11px] text-gray-600">{it.resource}</span>
              <span className="font-mono text-[11px] text-gray-500">{it.time}</span>
              <span className="flex justify-end">
                <div className="relative group/action">
                  <button className="text-gray-400 hover:text-[var(--color-ink)]"><Icon name="more" className="h-4 w-4" /></button>
                  <div className="absolute right-0 top-full z-20 hidden w-36 rounded-lg border border-[var(--color-line)] bg-white py-1 shadow-lg group-hover/action:block">
                    <a href={`/events/${it.id}`} className="block px-3 py-1.5 text-[12px] hover:bg-[var(--color-bg-2)]">View details</a>
                    <button onClick={() => { setSelectedEvent(it); setInvestigateOpen(true); }} className="block w-full text-left px-3 py-1.5 text-[12px] hover:bg-[var(--color-bg-2)]">Investigate</button>
                  </div>
                </div>
              </span>
            </div>
          ))}
        </div>
      </main>

      {investigateOpen && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setInvestigateOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-4">Investigate {selectedEvent.id}</h2>
            <p className="text-[12.5px] text-gray-600 mb-3">{selectedEvent.action} by {selectedEvent.actor}</p>
            <div className="space-y-3">
              <div><label className="text-[12px] font-medium text-gray-600">Assign to</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Elena Voss</option><option>Marcus Chen</option><option>Leila Park</option></select></div>
              <div><label className="text-[12px] font-medium text-gray-600">Priority</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Low</option><option>Medium</option><option>High</option><option>Critical</option></select></div>
              <div><label className="text-[12px] font-medium text-gray-600">Notes</label><textarea className="mt-1 h-20 w-full rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px]" placeholder="Add investigation notes..." /></div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setInvestigateOpen(false)} className="h-8 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-gray-600 hover:bg-[var(--color-bg-2)]">Cancel</button>
              <button onClick={() => setInvestigateOpen(false)} className="h-8 rounded-md bg-[var(--color-indigo)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-indigo-2)]">Create ticket</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
