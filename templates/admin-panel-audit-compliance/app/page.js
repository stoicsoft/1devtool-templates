"use client"

import { useState } from "react"

const kpis = [
  { label: "Events today", value: "12.4k", delta: "+8%", dir: "up", color: "#ea580c" },
  { label: "Violations open", value: "34", delta: "-6", dir: "down", color: "#16a34a" },
  { label: "Coverage score", value: "91%", delta: "+3%", dir: "up", color: "#0891b2" },
  { label: "Retention days", value: "255", delta: "+15", dir: "up", color: "#9333ea" },
]

const criticalEvents = [
  { id: "EVT-99201", severity: "critical", actor: "root@prod-db-01", action: "ALTER TABLE users DROP COLUMN ssn", time: "2m ago" },
  { id: "EVT-99188", severity: "high", actor: "svc-ci-deploy", action: "MODIFIED iam.policy", time: "8m ago" },
  { id: "EVT-99098", severity: "critical", actor: "unknown-ip-185.22.x.x", action: "FAILED LOGIN x47 admin@acme.co", time: "1h ago" },
  { id: "EVT-99041", severity: "high", actor: "elena.voss", action: "DISABLED mfa.requirement", time: "3h ago" },
]

const frameworks = [
  { name: "SOC 2", score: 94, color: "#ea580c" },
  { name: "GDPR", score: 88, color: "#0891b2" },
  { name: "ISO 27001", score: 91, color: "#16a34a" },
  { name: "HIPAA", score: 82, color: "#9333ea" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "stream") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 6h16M4 10h12M4 14h16M4 18h10"/></svg>)
  if (name === "shield-check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>)
  if (name === "archive") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>)
  if (name === "clipboard") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 19V5M5 12l7-7 7 7"/></svg>)
  if (name === "arrow-down") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M19 12l-7 7-7-7"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "scan") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/></svg>)
  return null
}

function SeverityDot({ severity }) {
  const color = severity === "critical" ? "#dc2626" : severity === "high" ? "#ea580c" : "#ca8a04"
  return <span className="h-2 w-2 rounded-full shrink-0" style={{ background: color }} />
}

export default function AuditDashboard() {
  const [exportOpen, setExportOpen] = useState(false)

  return (
    <div className="flex h-screen w-screen bg-[var(--color-bg)] text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]">
          <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#1c1917"/><path d="M16 7 25 12v8c0 5.5-4 9.5-9 11-5-1.5-9-5.5-9-11v-8l9-5Z" fill="#ea580c"/><path d="M12 16l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
        </a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/events" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Event stream"><Icon name="stream" className="h-[18px] w-[18px]" /></a>
          <a href="/policies" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Policies"><Icon name="shield-check" className="h-[18px] w-[18px]" /></a>
          <a href="/evidence" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Evidence"><Icon name="archive" className="h-[18px] w-[18px]" /></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Review queue"><Icon name="clipboard" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white bg-[#1c1917]" style={{ width: 28, height: 28, fontSize: 11.76 }}>RP</span></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <h1 className="text-[15px] font-semibold">Overview</h1>
          <div className="flex items-center gap-2">
            <button onClick={() => setExportOpen(true)} className="inline-flex h-8 items-center gap-1.5 rounded-md bg-[var(--color-indigo)] px-2.5 text-[12.5px] font-medium text-white hover:bg-[var(--color-indigo-2)]"><Icon name="plus" className="h-3.5 w-3.5" /> Export evidence</button>
          </div>
        </div>

        <div className="scroll-thin flex-1 overflow-y-auto p-4">
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
            <div className="lg:col-span-2 rounded-lg border border-[var(--color-line)] bg-white p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-[13px] font-semibold">Critical events</h2>
                <a href="/events" className="text-[11px] font-medium text-[var(--color-indigo)] hover:underline">View all</a>
              </div>
              <div className="space-y-2">
                {criticalEvents.map((evt) => (
                  <a key={evt.id} href={`/events/${evt.id}`} className="flex items-center gap-3 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]">
                    <SeverityDot severity={evt.severity} />
                    <span className="font-mono text-[11px] text-gray-500 shrink-0">{evt.id}</span>
                    <span className="font-mono text-[11px] text-gray-600 shrink-0 hidden sm:inline">{evt.actor}</span>
                    <span className="flex-1 truncate">{evt.action}</span>
                    <span className="text-[11px] text-gray-400 shrink-0">{evt.time}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
              <h2 className="text-[13px] font-semibold mb-3">Quick actions</h2>
              <div className="space-y-2">
                <a href="/events" className="flex items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="stream" className="h-4 w-4 text-[var(--color-indigo)]" /><span className="flex-1">View event stream</span><Icon name="chevron-right" className="h-3 w-3 text-gray-400" /></a>
                <a href="/policies" className="flex items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="shield-check" className="h-4 w-4 text-[var(--color-indigo)]" /><span className="flex-1">Review policies</span><Icon name="chevron-right" className="h-3 w-3 text-gray-400" /></a>
                <a href="/evidence" className="flex items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="archive" className="h-4 w-4 text-[var(--color-indigo)]" /><span className="flex-1">Manage evidence</span><Icon name="chevron-right" className="h-3 w-3 text-gray-400" /></a>
                <button className="flex w-full items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="scan" className="h-4 w-4 text-[var(--color-indigo)]" /><span className="flex-1">Run policy scan</span></button>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
            <h2 className="text-[13px] font-semibold mb-3">Framework compliance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {frameworks.map((f) => (
                <div key={f.name} className="rounded-lg border border-[var(--color-line)] p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[12.5px] font-semibold">{f.name}</span>
                    <span className="text-[11px] font-medium" style={{ color: f.color }}>{f.score}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--color-bg-3)] overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: f.score + "%", background: f.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {exportOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setExportOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-4">Export evidence</h2>
            <div className="space-y-3">
              <div><label className="text-[12px] font-medium text-gray-600">Framework</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>SOC 2</option><option>GDPR</option><option>ISO 27001</option><option>HIPAA</option></select></div>
              <div className="grid grid-cols-2 gap-2"><div><label className="text-[12px] font-medium text-gray-600">From</label><input type="date" className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px]" /></div><div><label className="text-[12px] font-medium text-gray-600">To</label><input type="date" className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px]" /></div></div>
              <div><label className="text-[12px] font-medium text-gray-600">Format</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>ZIP (PDF + CSV)</option><option>JSON</option><option>CSV only</option></select></div>
              <div className="flex items-center gap-2"><input type="checkbox" className="h-4 w-4 accent-[var(--color-indigo)]" /><span className="text-[12.5px]">Include attachments</span></div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setExportOpen(false)} className="h-8 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-gray-600 hover:bg-[var(--color-bg-2)]">Cancel</button>
              <button onClick={() => setExportOpen(false)} className="h-8 rounded-md bg-[var(--color-indigo)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-indigo-2)]">Generate export</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
