"use client"

import { useState } from "react"

const kpis = [
  { label: "MRR", value: "$48.2k", delta: "+4.2%", dir: "up", color: "#4f46e5" },
  { label: "Active subs", value: "312", delta: "+14", dir: "up", color: "#10b981" },
  { label: "Collection rate", value: "97.4%", delta: "+1.1%", dir: "up", color: "#0ea5e9" },
  { label: "Failed charges", value: "18", delta: "-5", dir: "down", color: "#ef4444" },
]

const recentTransactions = [
  { customer: "Vertex Labs", amount: "$349", status: "succeeded", time: "2m ago" },
  { customer: "Nebula AI", amount: "$129", status: "succeeded", time: "5m ago" },
  { customer: "Draftboard Inc", amount: "$29", status: "failed", time: "12m ago" },
  { customer: "Pacific Data", amount: "$1,200", status: "succeeded", time: "18m ago" },
  { customer: "Orbit Finance", amount: "$349", status: "disputed", time: "34m ago" },
]

const revenueData = [38, 39, 40, 40, 41, 42, 43, 44, 45, 46, 47, 48.2]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "credit") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>)
  if (name === "file") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>)
  if (name === "alert") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>)
  if (name === "tag") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><path d="M7 7h.01"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 19V5M5 12l7-7 7 7"/></svg>)
  if (name === "arrow-down") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M19 12l-7 7-7-7"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  return null
}

function Spark({ points, color = "#4f46e5" }) {
  const max = Math.max(...points), min = Math.min(...points), range = max - min || 1
  const w = 200, h = 48, step = w / (points.length - 1)
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${(h - ((p - min) / range) * h).toFixed(1)}`).join(" ")
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-12 w-full" aria-hidden>
      <path d={path} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d={`${path} L${w},${h} L0,${h} Z`} fill={color} opacity="0.06" />
    </svg>
  )
}

export default function BillingDashboard() {
  const [invoiceOpen, setInvoiceOpen] = useState(false)

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]">
          <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#0f172a"/><rect x="8" y="12" width="16" height="10" rx="2" fill="#4f46e5"/><path d="M11 16h10M11 19h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/subscriptions" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Subscriptions"><Icon name="credit" className="h-[18px] w-[18px]" /></a>
          <a href="/invoices" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)] relative" title="Invoices"><Icon name="file" className="h-[18px] w-[18px]" /><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-[var(--color-indigo)] px-1 text-[9px] font-semibold text-white">48</span></a>
          <a href="/disputes" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)] relative" title="Disputes"><Icon name="alert" className="h-[18px] w-[18px]" /><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-rose-500 px-1 text-[9px] font-semibold text-white">5</span></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Plans"><Icon name="tag" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white bg-[#0f172a]" style={{ width: 28, height: 28, fontSize: 11.76 }}>AS</span></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <h1 className="text-[15px] font-semibold">Overview</h1>
          <div className="flex items-center gap-2">
            <button onClick={() => setInvoiceOpen(true)} className="inline-flex h-8 items-center gap-1.5 rounded-md bg-[var(--color-indigo)] px-2.5 text-[12.5px] font-medium text-white hover:bg-[var(--color-indigo-2)]"><Icon name="plus" className="h-3.5 w-3.5" /> Create invoice</button>
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
                <h2 className="text-[13px] font-semibold">MRR Trend</h2>
                <span className="text-[11px] text-gray-500">Last 12 months</span>
              </div>
              <Spark points={revenueData} color="#4f46e5" />
            </div>
            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
              <h2 className="text-[13px] font-semibold mb-3">Quick actions</h2>
              <div className="space-y-2">
                <a href="/subscriptions" className="flex items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="credit" className="h-4 w-4 text-[var(--color-indigo)]" /><span className="flex-1">View subscriptions</span><Icon name="chevron-right" className="h-3 w-3 text-gray-400" /></a>
                <a href="/invoices" className="flex items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="file" className="h-4 w-4 text-[var(--color-indigo)]" /><span className="flex-1">Manage invoices</span><Icon name="chevron-right" className="h-3 w-3 text-gray-400" /></a>
                <a href="/disputes" className="flex items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="alert" className="h-4 w-4 text-rose-500" /><span className="flex-1">Review disputes</span><Icon name="chevron-right" className="h-3 w-3 text-gray-400" /></a>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
            <h2 className="text-[13px] font-semibold mb-3">Recent transactions</h2>
            <div className="space-y-2">
              {recentTransactions.map((t, i) => (
                <div key={i} className="flex items-center justify-between rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px]">
                  <span className="font-medium">{t.customer}</span>
                  <span className="font-mono">{t.amount}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${t.status === 'succeeded' ? 'bg-emerald-50 text-emerald-700' : t.status === 'failed' ? 'bg-rose-50 text-rose-700' : 'bg-amber-50 text-amber-700'}`}>{t.status}</span>
                  <span className="text-gray-400">{t.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {invoiceOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setInvoiceOpen(false)}>
          <div className="w-full max-w-lg rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-4">Create invoice</h2>
            <div className="space-y-3">
              <div><label className="text-[12px] font-medium text-gray-600">Customer</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Vertex Labs</option><option>Nebula AI</option><option>Pacific Data</option><option>Orbit Finance</option></select></div>
              <div className="grid grid-cols-3 gap-2"><div className="col-span-2"><label className="text-[12px] font-medium text-gray-600">Description</label><input className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px]" placeholder="Professional services" /></div><div><label className="text-[12px] font-medium text-gray-600">Amount</label><input className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px]" placeholder="0.00" /></div></div>
              <div className="grid grid-cols-3 gap-2"><div><label className="text-[12px] font-medium text-gray-600">Qty</label><input className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px]" defaultValue="1" /></div><div><label className="text-[12px] font-medium text-gray-600">Tax</label><input className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px]" defaultValue="0%" /></div><div><label className="text-[12px] font-medium text-gray-600">Total</label><div className="mt-1 h-9 flex items-center px-3 text-[12.5px] font-semibold">$0.00</div></div></div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setInvoiceOpen(false)} className="h-8 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-gray-600 hover:bg-[var(--color-bg-2)]">Cancel</button>
              <button onClick={() => setInvoiceOpen(false)} className="h-8 rounded-md bg-[var(--color-indigo)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-indigo-2)]">Create invoice</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
