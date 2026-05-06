"use client"

import { useState } from "react"

const subscriptions = [
  { id: "SUB-8821", customer: "Vertex Labs", plan: "Business", planColor: "#0ea5e9", amount: "$349/mo", status: "active", health: "healthy", method: "Visa ·••• 4242", nextCharge: "May 14" },
  { id: "SUB-8819", customer: "Nebula AI", plan: "Growth", planColor: "#4f46e5", amount: "$129/mo", status: "active", health: "healthy", method: "Amex ·••• 1001", nextCharge: "May 14" },
  { id: "SUB-8812", customer: "Draftboard Inc", plan: "Starter", planColor: "#64748b", amount: "$29/mo", status: "past_due", health: "at_risk", method: "Visa ·••• 8899", nextCharge: "May 02" },
  { id: "SUB-8805", customer: "Pacific Data", plan: "Enterprise", planColor: "#f59e0b", amount: "$1,200/mo", status: "active", health: "healthy", method: "Wire", nextCharge: "May 20" },
  { id: "SUB-8798", customer: "Catalyst CRM", plan: "Growth", planColor: "#4f46e5", amount: "$129/mo", status: "trialing", health: "healthy", method: "Mastercard ·••• 5533", nextCharge: "May 18" },
  { id: "SUB-8791", customer: "Orbit Finance", plan: "Business", planColor: "#0ea5e9", amount: "$349/mo", status: "past_due", health: "failed", method: "Visa ·••• 1102", nextCharge: "Apr 30" },
  { id: "SUB-8784", customer: "Signal FM", plan: "Growth", planColor: "#4f46e5", amount: "$129/mo", status: "active", health: "healthy", method: "Amex ·••• 7733", nextCharge: "May 16" },
  { id: "SUB-8776", customer: "Compass IO", plan: "Enterprise", planColor: "#f59e0b", amount: "$1,200/mo", status: "paused", health: "at_risk", method: "Wire", nextCharge: "Jun 01" },
  { id: "SUB-8765", customer: "Thread Analytics", plan: "Starter", planColor: "#64748b", amount: "$29/mo", status: "active", health: "healthy", method: "Visa ·••• 9981", nextCharge: "May 12" },
  { id: "SUB-8754", customer: "Northstar Cloud", plan: "Business", planColor: "#0ea5e9", amount: "$349/mo", status: "active", health: "healthy", method: "Mastercard ·••• 4421", nextCharge: "May 15" },
  { id: "SUB-8741", customer: "Launchpad Studio", plan: "Growth", planColor: "#4f46e5", amount: "$129/mo", status: "cancelled", health: "churned", method: "Visa ·••• 3310", nextCharge: "—" },
  { id: "SUB-8733", customer: "Hexa Security", plan: "Enterprise", planColor: "#f59e0b", amount: "$1,200/mo", status: "active", health: "healthy", method: "Wire", nextCharge: "May 22" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "credit") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>)
  if (name === "file") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>)
  if (name === "alert") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>)
  if (name === "tag") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><path d="M7 7h.01"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>)
  if (name === "more") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="5" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="19" r="1.5" fill="currentColor"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  return null
}

function StatusPill({ status }) {
  const map = {
    active: { dot: "#10b981", label: "Active", bg: "#d1fae5", fg: "#065f46" },
    trialing: { dot: "#4f46e5", label: "Trialing", bg: "#e0e7ff", fg: "#3730a3" },
    past_due: { dot: "#ef4444", label: "Past due", bg: "#fee2e2", fg: "#991b1b" },
    paused: { dot: "#f59e0b", label: "Paused", bg: "#fef3c7", fg: "#92400e" },
    cancelled: { dot: "#9ca3af", label: "Cancelled", bg: "#f3f4f6", fg: "#4b5563" },
  }
  const s = map[status]
  return <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: s.bg, color: s.fg }}><span className="h-1.5 w-1.5 rounded-full" style={{ background: s.dot }} />{s.label}</span>
}

function HealthBadge({ health }) {
  const map = {
    healthy: { label: "Healthy", color: "#10b981", bg: "#d1fae5" },
    at_risk: { label: "At risk", color: "#f59e0b", bg: "#fef3c7" },
    failed: { label: "Failed", color: "#ef4444", bg: "#fee2e2" },
    churned: { label: "Churned", color: "#9ca3af", bg: "#f3f4f6" },
  }
  const h = map[health]
  return <span className="inline-flex items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-1.5 py-0.5 text-[10.5px] font-medium text-gray-700"><span className="h-1.5 w-1.5 rounded-full" style={{ background: h.color }} />{h.label}</span>
}

function RoleBadge({ name, color }) {
  return <span className="inline-flex items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-1.5 py-0.5 text-[10.5px] font-medium text-gray-700"><span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />{name}</span>
}

export default function SubscriptionsPage() {
  const [upgradeOpen, setUpgradeOpen] = useState(false)
  const [selectedSub, setSelectedSub] = useState(null)

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg"><svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#0f172a"/><rect x="8" y="12" width="16" height="10" rx="2" fill="#4f46e5"/><path d="M11 16h10M11 19h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg></a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/subscriptions" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]" title="Subscriptions"><Icon name="credit" className="h-[18px] w-[18px]" /></a>
          <a href="/invoices" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)] relative" title="Invoices"><Icon name="file" className="h-[18px] w-[18px]" /><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-[var(--color-indigo)] px-1 text-[9px] font-semibold text-white">48</span></a>
          <a href="/disputes" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)] relative" title="Disputes"><Icon name="alert" className="h-[18px] w-[18px]" /><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-rose-500 px-1 text-[9px] font-semibold text-white">5</span></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Plans"><Icon name="tag" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white bg-[#0f172a]" style={{ width: 28, height: 28, fontSize: 11.76 }}>AS</span></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
            <a href="/" className="hover:text-[var(--color-ink)]">Overview</a><Icon name="chevron-right" className="h-3 w-3" /><span className="font-semibold text-[var(--color-ink)]">Subscriptions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Icon name="search" className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search subscriptions..." className="h-8 w-56 rounded-md border border-[var(--color-line)] bg-[var(--color-bg-2)] pl-7 pr-3 text-[12.5px] placeholder:text-gray-400 focus:border-[var(--color-indigo-ring)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-soft)]" />
            </div>
          </div>
        </div>
        <div className="scroll-thin flex-1 overflow-y-auto">
          <div className="grid grid-cols-[28px_80px_1fr_80px_90px_80px_80px_72px_48px] items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
            <span><input type="checkbox" className="h-3.5 w-3.5 accent-[var(--color-indigo)]" /></span>
            <span>ID</span><span>Customer</span><span>Plan</span><span className="text-center">Status</span><span className="hidden md:block text-center">Health</span><span className="hidden lg:block">Method</span><span>Next charge</span><span></span>
          </div>
          {subscriptions.map((it) => (
            <div key={it.id} className="row-zebra group grid grid-cols-[28px_80px_1fr_80px_90px_80px_80px_72px_48px] items-center gap-3 border-b border-[var(--color-line-2)] px-4 text-[12.5px] hover:bg-[var(--color-bg-2)]">
              <span><input type="checkbox" className="h-3.5 w-3.5 accent-[var(--color-indigo)]" /></span>
              <span className="font-mono text-[11.5px] text-gray-500">{it.id}</span>
              <a href={`/subscriptions/${it.id}`} className="truncate font-medium text-[var(--color-ink)] hover:underline">{it.customer}</a>
              <span><RoleBadge name={it.plan} color={it.planColor} /></span>
              <span className="flex justify-center"><StatusPill status={it.status} /></span>
              <span className="hidden md:block flex justify-center"><HealthBadge health={it.health} /></span>
              <span className="hidden lg:block font-mono text-[11px] text-gray-600">{it.method}</span>
              <span className="font-mono text-[11px] text-gray-500">{it.nextCharge}</span>
              <span className="flex justify-end">
                <div className="relative group/action">
                  <button className="text-gray-400 hover:text-[var(--color-ink)]"><Icon name="more" className="h-4 w-4" /></button>
                  <div className="absolute right-0 top-full z-20 hidden w-36 rounded-lg border border-[var(--color-line)] bg-white py-1 shadow-lg group-hover/action:block">
                    <a href={`/subscriptions/${it.id}`} className="block px-3 py-1.5 text-[12px] hover:bg-[var(--color-bg-2)]">View details</a>
                    <button onClick={() => { setSelectedSub(it); setUpgradeOpen(true); }} className="block w-full text-left px-3 py-1.5 text-[12px] hover:bg-[var(--color-bg-2)]">Change plan</button>
                  </div>
                </div>
              </span>
            </div>
          ))}
        </div>
      </main>

      {upgradeOpen && selectedSub && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setUpgradeOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-4">Change plan — {selectedSub.customer}</h2>
            <p className="text-[12.5px] text-gray-600 mb-3">Current: <strong>{selectedSub.plan}</strong> ({selectedSub.amount})</p>
            <div className="space-y-2 mb-4">
              {["Starter ($29/mo)", "Growth ($129/mo)", "Business ($349/mo)", "Enterprise ($1,200/mo)"].map((plan) => (
                <label key={plan} className="flex items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] cursor-pointer hover:bg-[var(--color-bg-2)]">
                  <input type="radio" name="plan" className="h-4 w-4 accent-[var(--color-indigo)]" defaultChecked={plan.includes(selectedSub.plan)} />
                  <span>{plan}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setUpgradeOpen(false)} className="h-8 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-gray-600 hover:bg-[var(--color-bg-2)]">Cancel</button>
              <button onClick={() => setUpgradeOpen(false)} className="h-8 rounded-md bg-[var(--color-indigo)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-indigo-2)]">Confirm change</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
