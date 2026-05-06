"use client"

import { useState } from "react"

const event = {
  id: "EVT-99201", severity: "critical", actor: "root@prod-db-01",
  action: "ALTER TABLE users DROP COLUMN ssn", resource: "prod-db-01/users",
  policy: "DATA-03", time: "May 06, 2026 13:42:07 UTC", ip: "10.0.4.22",
  session: "sess_8f3a9c2e", raw: '{"type":"ddl","table":"users","column":"ssn","operation":"drop"}',
}

const related = [
  { id: "EVT-99199", action: "SELECT * FROM users WHERE ssn IS NOT NULL", time: "2m before" },
  { id: "EVT-99200", action: "GRANT root@prod-db-01 ALL PRIVILEGES", time: "30s before" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "stream") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 6h16M4 10h12M4 14h16M4 18h10"/></svg>)
  if (name === "shield-check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  return null
}

export default function EventDetail() {
  const [remediateOpen, setRemediateOpen] = useState(false)

  return (
    <div className="flex h-screen w-screen bg-[var(--color-bg)] text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg"><svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#1c1917"/><path d="M16 7 25 12v8c0 5.5-4 9.5-9 11-5-1.5-9-5.5-9-11v-8l9-5Z" fill="#ea580c"/><path d="M12 16l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg></a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/events" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]" title="Event stream"><Icon name="stream" className="h-[18px] w-[18px]" /></a>
          <a href="/policies" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Policies"><Icon name="shield-check" className="h-[18px] w-[18px]" /></a>
          <a href="/evidence" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Evidence"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg></a>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white bg-[#1c1917]" style={{ width: 28, height: 28, fontSize: 11.76 }}>RP</span></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
            <a href="/" className="hover:text-[var(--color-ink)]">Overview</a><Icon name="chevron-right" className="h-3 w-3" />
            <a href="/events" className="hover:text-[var(--color-ink)]">Events</a><Icon name="chevron-right" className="h-3 w-3" />
            <span className="font-semibold text-[var(--color-ink)]">{event.id}</span>
          </div>
          <button onClick={() => setRemediateOpen(true)} className="inline-flex h-8 items-center gap-1.5 rounded-md bg-[var(--color-indigo)] px-2.5 text-[12.5px] font-medium text-white hover:bg-[var(--color-indigo-2)]"><Icon name="check" className="h-3.5 w-3.5" /> Mark remediated</button>
        </div>

        <div className="scroll-thin flex-1 overflow-y-auto p-4">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4 mb-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-[18px] font-semibold">{event.id}</h1>
                  <p className="text-[13px] text-gray-500">{event.time}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: "#fee2e2", color: "#991b1b" }}><span className="h-1.5 w-1.5 rounded-full bg-[#dc2626]" />Critical</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[12.5px]">
                <div><p className="text-gray-500">Actor</p><p className="font-semibold font-mono">{event.actor}</p></div>
                <div><p className="text-gray-500">Resource</p><p className="font-semibold font-mono">{event.resource}</p></div>
                <div><p className="text-gray-500">Policy</p><p className="font-semibold font-mono">{event.policy}</p></div>
                <div><p className="text-gray-500">IP address</p><p className="font-semibold">{event.ip}</p></div>
                <div><p className="text-gray-500">Session</p><p className="font-semibold font-mono">{event.session}</p></div>
                <div><p className="text-gray-500">Status</p><p className="font-semibold text-amber-600">Open</p></div>
              </div>
            </div>

            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4 mb-4">
              <h2 className="text-[13px] font-semibold mb-3">Raw payload</h2>
              <pre className="rounded-md bg-[var(--color-bg-2)] p-3 text-[11px] font-mono overflow-x-auto">{event.raw}</pre>
            </div>

            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
              <h2 className="text-[13px] font-semibold mb-3">Related events</h2>
              <div className="space-y-2">
                {related.map((r) => (
                  <a key={r.id} href={`/events/${r.id}`} className="flex items-center justify-between rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]">
                    <span className="font-mono text-[11px] text-gray-500">{r.id}</span>
                    <span className="flex-1 px-3 truncate">{r.action}</span>
                    <span className="text-[11px] text-gray-400">{r.time}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {remediateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setRemediateOpen(false)}>
          <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-2">Mark as remediated</h2>
            <p className="text-[12.5px] text-gray-600 mb-3">Confirm that {event.id} has been addressed and documented.</p>
            <div className="mb-3"><label className="text-[12px] font-medium text-gray-600">Remediation notes</label><textarea className="mt-1 h-16 w-full rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px]" placeholder="Describe the remediation steps taken..." /></div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setRemediateOpen(false)} className="h-8 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-gray-600 hover:bg-[var(--color-bg-2)]">Cancel</button>
              <button onClick={() => setRemediateOpen(false)} className="h-8 rounded-md bg-[var(--color-indigo)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-indigo-2)]">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
