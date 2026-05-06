"use client"

import { useState } from "react"

const frameworks = [
  { name: "SOC 2", color: "#ea580c", score: 94, policies: 42, passed: 39, failed: 3 },
  { name: "GDPR", color: "#0891b2", score: 88, policies: 36, passed: 32, failed: 4 },
  { name: "ISO 27001", color: "#16a34a", score: 91, policies: 48, passed: 44, failed: 4 },
  { name: "HIPAA", color: "#9333ea", score: 82, policies: 28, passed: 23, failed: 5 },
]

const policies = [
  { id: "DATA-01", name: "Data access logging", framework: "SOC 2", status: "pass", coverage: "100%" },
  { id: "DATA-02", name: "Audit trail export", framework: "SOC 2", status: "pass", coverage: "100%" },
  { id: "DATA-03", name: "Sensitive column protection", framework: "SOC 2", status: "fail", coverage: "67%" },
  { id: "IAM-02", name: "Role separation", framework: "ISO 27001", status: "pass", coverage: "100%" },
  { id: "IAM-05", name: "MFA enforcement", framework: "SOC 2", status: "fail", coverage: "85%" },
  { id: "IAM-07", name: "Policy change approval", framework: "ISO 27001", status: "pass", coverage: "100%" },
  { id: "SEC-01", name: "Brute-force protection", framework: "GDPR", status: "pass", coverage: "100%" },
  { id: "RET-03", name: "Log retention", framework: "HIPAA", status: "pass", coverage: "100%" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "stream") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 6h16M4 10h12M4 14h16M4 18h10"/></svg>)
  if (name === "shield-check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>)
  if (name === "archive") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>)
  if (name === "clipboard") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "x") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>)
  return null
}

function StatusPill({ status }) {
  const s = status === "pass" ? { bg: "#d1fae5", fg: "#065f46", label: "Pass" } : { bg: "#fee2e2", fg: "#991b1b", label: "Fail" }
  return <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: s.bg, color: s.fg }}>{status === "pass" ? <Icon name="check" className="h-3 w-3" /> : <Icon name="x" className="h-3 w-3" />}{s.label}</span>
}

export default function PoliciesPage() {
  const [exceptionOpen, setExceptionOpen] = useState(false)

  return (
    <div className="flex h-screen w-screen bg-[var(--color-bg)] text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg"><svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#1c1917"/><path d="M16 7 25 12v8c0 5.5-4 9.5-9 11-5-1.5-9-5.5-9-11v-8l9-5Z" fill="#ea580c"/><path d="M12 16l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg></a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/events" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Event stream"><Icon name="stream" className="h-[18px] w-[18px]" /></a>
          <a href="/policies" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]" title="Policies"><Icon name="shield-check" className="h-[18px] w-[18px]" /></a>
          <a href="/evidence" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Evidence"><Icon name="archive" className="h-[18px] w-[18px]" /></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Review queue"><Icon name="clipboard" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white bg-[#1c1917]" style={{ width: 28, height: 28, fontSize: 11.76 }}>RP</span></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
            <a href="/" className="hover:text-[var(--color-ink)]">Overview</a><Icon name="chevron-right" className="h-3 w-3" /><span className="font-semibold text-[var(--color-ink)]">Policies</span>
          </div>
          <button onClick={() => setExceptionOpen(true)} className="inline-flex h-8 items-center gap-1.5 rounded-md border border-[var(--color-line)] px-2.5 text-[12.5px] font-medium text-gray-700 hover:bg-[var(--color-bg-2)]">Request exception</button>
        </div>
        <div className="scroll-thin flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {frameworks.map((f) => (
              <div key={f.name} className="rounded-lg border border-[var(--color-line)] bg-white p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12.5px] font-semibold">{f.name}</span>
                  <span className="text-[11px] font-medium" style={{ color: f.color }}>{f.score}%</span>
                </div>
                <div className="h-2 rounded-full bg-[var(--color-bg-3)] overflow-hidden mb-2"><div className="h-full rounded-full" style={{ width: f.score + "%", background: f.color }} /></div>
                <div className="flex justify-between text-[11px] text-gray-500"><span>{f.passed} passed</span><span>{f.failed} failed</span></div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-[var(--color-line)] bg-white overflow-hidden">
            <div className="grid grid-cols-1fr_1fr_80px_80px_80px gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
              <span>Policy</span><span>Name</span><span>Framework</span><span>Coverage</span><span className="text-right">Status</span>
            </div>
            {policies.map((p) => (
              <div key={p.id} className="row-zebra grid grid-cols-1fr_1fr_80px_80px_80px gap-3 items-center border-b border-[var(--color-line-2)] px-4 py-2 text-[12.5px]">
                <span className="font-mono text-[11px] text-gray-500">{p.id}</span>
                <span className="font-medium">{p.name}</span>
                <span>{p.framework}</span>
                <span>{p.coverage}</span>
                <span className="text-right"><StatusPill status={p.status} /></span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {exceptionOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setExceptionOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-4">Request policy exception</h2>
            <div className="space-y-3">
              <div><label className="text-[12px] font-medium text-gray-600">Policy</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>DATA-03 — Sensitive column protection</option><option>IAM-05 — MFA enforcement</option></select></div>
              <div><label className="text-[12px] font-medium text-gray-600">Justification</label><textarea className="mt-1 h-20 w-full rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px]" placeholder="Explain why this exception is needed..." /></div>
              <div><label className="text-[12px] font-medium text-gray-600">Approver</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Elena Voss</option><option>Marcus Chen</option><option>Leila Park</option></select></div>
              <div><label className="text-[12px] font-medium text-gray-600">Expiration</label><input type="date" className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px]" /></div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setExceptionOpen(false)} className="h-8 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-gray-600 hover:bg-[var(--color-bg-2)]">Cancel</button>
              <button onClick={() => setExceptionOpen(false)} className="h-8 rounded-md bg-[var(--color-indigo)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-indigo-2)]">Submit request</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
