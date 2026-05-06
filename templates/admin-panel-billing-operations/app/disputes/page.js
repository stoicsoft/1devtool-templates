"use client"

import { useState } from "react"

const disputes = [
  { id: "DSP-105", customer: "Orbit Finance", amount: "$349", reason: "Product not received", status: "open", opened: "Apr 28, 2026", evidence: "pending" },
  { id: "DSP-104", customer: "Draftboard Inc", amount: "$29", reason: "Duplicate charge", status: "open", opened: "Apr 25, 2026", evidence: "submitted" },
  { id: "DSP-103", customer: "Compass IO", amount: "$1,200", reason: "Subscription cancelled", status: "won", opened: "Mar 12, 2026", evidence: "submitted" },
  { id: "DSP-102", customer: "Launchpad Studio", amount: "$64", reason: "Credit not processed", status: "lost", opened: "Feb 28, 2026", evidence: "submitted" },
  { id: "DSP-101", customer: "Hexa Security", amount: "$1,200", reason: "Fraudulent", status: "won", opened: "Jan 15, 2026", evidence: "submitted" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "credit") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>)
  if (name === "file") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>)
  if (name === "alert") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>)
  if (name === "tag") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><path d="M7 7h.01"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "upload") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/></svg>)
  return null
}

function StatusPill({ status }) {
  const map = {
    open: { bg: "#fee2e2", fg: "#991b1b", label: "Open" },
    won: { bg: "#d1fae5", fg: "#065f46", label: "Won" },
    lost: { bg: "#f3f4f6", fg: "#4b5563", label: "Lost" },
  }
  const s = map[status]
  return <span className="inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: s.bg, color: s.fg }}>{s.label}</span>
}

export default function DisputesPage() {
  const [uploadOpen, setUploadOpen] = useState(false)

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg"><svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#0f172a"/><rect x="8" y="12" width="16" height="10" rx="2" fill="#4f46e5"/><path d="M11 16h10M11 19h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg></a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/subscriptions" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Subscriptions"><Icon name="credit" className="h-[18px] w-[18px]" /></a>
          <a href="/invoices" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)] relative" title="Invoices"><Icon name="file" className="h-[18px] w-[18px]" /><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-[var(--color-indigo)] px-1 text-[9px] font-semibold text-white">48</span></a>
          <a href="/disputes" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-indigo-soft)] text-[var(--color-indigo)] relative" title="Disputes"><Icon name="alert" className="h-[18px] w-[18px]" /><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-rose-500 px-1 text-[9px] font-semibold text-white">5</span></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Plans"><Icon name="tag" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white bg-[#0f172a]" style={{ width: 28, height: 28, fontSize: 11.76 }}>AS</span></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
            <a href="/" className="hover:text-[var(--color-ink)]">Overview</a><Icon name="chevron-right" className="h-3 w-3" /><span className="font-semibold text-[var(--color-ink)]">Disputes</span>
          </div>
        </div>
        <div className="scroll-thin flex-1 overflow-y-auto p-4">
          <div className="rounded-lg border border-[var(--color-line)] bg-white overflow-hidden">
            <div className="grid grid-cols-1fr_1fr_80px_1fr_80px_80px_96px gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
              <span>ID</span><span>Customer</span><span>Amount</span><span>Reason</span><span>Opened</span><span>Evidence</span><span className="text-right">Status</span>
            </div>
            {disputes.map((d) => (
              <div key={d.id} className="row-zebra grid grid-cols-1fr_1fr_80px_1fr_80px_80px_96px gap-3 items-center border-b border-[var(--color-line-2)] px-4 py-2 text-[12.5px]">
                <span className="font-mono text-[11px] text-gray-500">{d.id}</span>
                <span className="font-medium">{d.customer}</span>
                <span className="font-mono">{d.amount}</span>
                <span className="text-gray-600">{d.reason}</span>
                <span className="text-gray-500">{d.opened}</span>
                <span>{d.evidence === "pending" ? <button onClick={() => setUploadOpen(true)} className="text-[11px] font-medium text-[var(--color-indigo)] hover:underline">Upload</button> : <span className="text-[11px] text-gray-500">Submitted</span>}</span>
                <span className="text-right"><StatusPill status={d.status} /></span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {uploadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setUploadOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-4">Submit evidence</h2>
            <p className="text-[12.5px] text-gray-600 mb-3">Upload receipts, delivery confirmations, or communication logs to support your case.</p>
            <div className="rounded-lg border-2 border-dashed border-[var(--color-line)] p-6 text-center mb-3">
              <Icon name="upload" className="h-8 w-8 mx-auto text-gray-400 mb-2" />
              <p className="text-[12.5px] text-gray-500">Drag files here or click to browse</p>
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setUploadOpen(false)} className="h-8 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-gray-600 hover:bg-[var(--color-bg-2)]">Cancel</button>
              <button onClick={() => setUploadOpen(false)} className="h-8 rounded-md bg-[var(--color-indigo)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-indigo-2)]">Submit evidence</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
