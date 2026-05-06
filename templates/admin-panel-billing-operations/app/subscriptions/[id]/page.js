"use client"

import { useState } from "react"

const sub = {
  id: "SUB-8821", customer: "Vertex Labs", plan: "Business", planColor: "#0ea5e9", amount: "$349/mo",
  status: "active", health: "healthy", method: "Visa ending in 4242", nextCharge: "May 14, 2026",
  startDate: "Mar 12, 2024", mrr: "$349", totalBilled: "$4,188", currency: "USD",
}

const billingHistory = [
  { id: "INV-4421", date: "Apr 14, 2026", amount: "$349", status: "paid" },
  { id: "INV-4389", date: "Mar 14, 2026", amount: "$349", status: "paid" },
  { id: "INV-4352", date: "Feb 14, 2026", amount: "$349", status: "paid" },
  { id: "INV-4310", date: "Jan 14, 2026", amount: "$349", status: "paid" },
  { id: "INV-4278", date: "Dec 14, 2025", amount: "$349", status: "refunded" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "credit") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 19V5M5 12l7-7 7 7"/></svg>)
  if (name === "arrow-down") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M19 12l-7 7-7-7"/></svg>)
  if (name === "pause") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>)
  if (name === "cancel") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>)
  if (name === "refresh") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>)
  return null
}

export default function SubscriptionDetail() {
  const [refundOpen, setRefundOpen] = useState(false)

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg"><svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#0f172a"/><rect x="8" y="12" width="16" height="10" rx="2" fill="#4f46e5"/><path d="M11 16h10M11 19h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg></a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/subscriptions" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]" title="Subscriptions"><Icon name="credit" className="h-[18px] w-[18px]" /></a>
          <a href="/invoices" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)] relative" title="Invoices"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-[var(--color-indigo)] px-1 text-[9px] font-semibold text-white">48</span></a>
          <a href="/disputes" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)] relative" title="Disputes"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-rose-500 px-1 text-[9px] font-semibold text-white">5</span></a>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white bg-[#0f172a]" style={{ width: 28, height: 28, fontSize: 11.76 }}>AS</span></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
            <a href="/" className="hover:text-[var(--color-ink)]">Overview</a><Icon name="chevron-right" className="h-3 w-3" />
            <a href="/subscriptions" className="hover:text-[var(--color-ink)]">Subscriptions</a><Icon name="chevron-right" className="h-3 w-3" />
            <span className="font-semibold text-[var(--color-ink)]">{sub.customer}</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-md border border-[var(--color-line)] px-2.5 text-[12.5px] font-medium text-gray-700 hover:bg-[var(--color-bg-2)]"><Icon name="pause" className="h-3.5 w-3.5" /><span className="hidden sm:inline">Pause</span></button>
            <button onClick={() => setRefundOpen(true)} className="inline-flex h-8 items-center gap-1.5 rounded-md border border-[var(--color-line)] px-2.5 text-[12.5px] font-medium text-gray-700 hover:bg-[var(--color-bg-2)]"><Icon name="refresh" className="h-3.5 w-3.5" /><span className="hidden sm:inline">Refund</span></button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-md bg-rose-600 px-2.5 text-[12.5px] font-medium text-white hover:bg-rose-700"><Icon name="cancel" className="h-3.5 w-3.5" /><span className="hidden sm:inline">Cancel</span></button>
          </div>
        </div>

        <div className="scroll-thin flex-1 overflow-y-auto p-4">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4 mb-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-[18px] font-semibold">{sub.customer}</h1>
                  <p className="text-[13px] text-gray-500">{sub.id}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: "#d1fae5", color: "#065f46" }}><span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />{sub.status}</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[12.5px]">
                <div><p className="text-gray-500">Plan</p><p className="font-semibold">{sub.plan}</p></div>
                <div><p className="text-gray-500">Amount</p><p className="font-semibold">{sub.amount}</p></div>
                <div><p className="text-gray-500">MRR</p><p className="font-semibold">{sub.mrr}</p></div>
                <div><p className="text-gray-500">Total billed</p><p className="font-semibold">{sub.totalBilled}</p></div>
                <div><p className="text-gray-500">Payment method</p><p className="font-semibold">{sub.method}</p></div>
                <div><p className="text-gray-500">Start date</p><p className="font-semibold">{sub.startDate}</p></div>
                <div><p className="text-gray-500">Next charge</p><p className="font-semibold">{sub.nextCharge}</p></div>
                <div><p className="text-gray-500">Currency</p><p className="font-semibold">{sub.currency}</p></div>
              </div>
            </div>

            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
              <h2 className="text-[13px] font-semibold mb-3">Billing history</h2>
              <div className="space-y-1">
                {billingHistory.map((inv) => (
                  <div key={inv.id} className="flex items-center justify-between rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px]">
                    <span className="font-mono text-[11px] text-gray-500">{inv.id}</span>
                    <span>{inv.date}</span>
                    <span className="font-medium">{inv.amount}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${inv.status === 'paid' ? 'bg-emerald-50 text-emerald-700' : inv.status === 'refunded' ? 'bg-amber-50 text-amber-700' : 'bg-rose-50 text-rose-700'}`}>{inv.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {refundOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setRefundOpen(false)}>
          <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-2">Issue refund</h2>
            <p className="text-[12.5px] text-gray-600 mb-3">Refund {sub.customer} for their most recent charge?</p>
            <div className="mb-3"><label className="text-[12px] font-medium text-gray-600">Refund amount</label><input defaultValue="349.00" className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px]" /></div>
            <div className="mb-3"><label className="text-[12px] font-medium text-gray-600">Reason</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Customer request</option><option>Duplicate charge</option><option>Fraudulent</option><option>Other</option></select></div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setRefundOpen(false)} className="h-8 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-gray-600 hover:bg-[var(--color-bg-2)]">Cancel</button>
              <button onClick={() => setRefundOpen(false)} className="h-8 rounded-md bg-rose-600 px-3 text-[12.5px] font-medium text-white hover:bg-rose-700">Refund $349</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
