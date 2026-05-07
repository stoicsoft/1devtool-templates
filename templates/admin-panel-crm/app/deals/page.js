"use client"

import { useState } from "react"

const pipeline = {
  Prospect: [
    { name: "Acme Corp", value: "$24,000", contact: "Elena Voss", days: 3 },
    { name: "Nebula AI", value: "$18,000", contact: "Marcus Reid", days: 5 },
    { name: "Flux Analytics", value: "$32,000", contact: "David Park", days: 1 },
  ],
  Qualified: [
    { name: "Pacific Data", value: "$62,000", contact: "Priya Nair", days: 8 },
    { name: "Nova Systems", value: "$45,000", contact: "Ari Gomez", days: 12 },
  ],
  Proposal: [
    { name: "Vertex Labs", value: "$89,000", contact: "Sarah Chen", days: 15 },
    { name: "Draftboard Inc", value: "$12,000", contact: "Jonas Keller", days: 20 },
    { name: "Atlas Cloud", value: "$51,000", contact: "Lina Cho", days: 6 },
  ],
  Negotiation: [
    { name: "Orbit Finance", value: "$73,000", contact: "Leila Park", days: 22 },
    { name: "Nexus Group", value: "$34,000", contact: "Marcus Reid", days: 18 },
  ],
}

const stageMeta = {
  Prospect: { color: "#9ca3af", bg: "#f3f4f6" },
  Qualified: { color: "#2563eb", bg: "#dbeafe" },
  Proposal: { color: "#7c3aed", bg: "#ede9fe" },
  Negotiation: { color: "#d97706", bg: "#fef3c7" },
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "users") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M7 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/><path d="M17 11a4 4 0 0 1 3 3.87V21"/></svg>)
  if (name === "target") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>)
  if (name === "dollar") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>)
  if (name === "check-circle") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>)
  if (name === "more") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>)
  return null
}

function Avatar({ name, hue = "#2563eb", size = 20 }) {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("")
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white"
      style={{ background: hue, width: size, height: size, fontSize: size * 0.42 }}>
      {initials}
    </span>
  )
}

export default function DealsPage() {
  const [search, setSearch] = useState("")

  const totalValue = Object.values(pipeline).flat().reduce((sum, d) => sum + parseInt(d.value.replace(/[^0-9]/g, "")), 0)
  const totalDeals = Object.values(pipeline).flat().length

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
          <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#111827"/><circle cx="12" cy="11" r="3" fill="#2563eb"/><path d="M6 25c0-4 2.7-6.5 6-6.5s6 2.5 6 6.5" fill="#2563eb"/><circle cx="21" cy="12" r="2.5" fill="#3b82f6"/><path d="M16 25c0-3.3 2.2-5.5 5-5.5s5 2.2 5 5.5" fill="#3b82f6"/></svg>
        </a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/leads" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)] relative" title="Leads"><Icon name="target" className="h-[18px] w-[18px]" /><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-[var(--color-accent)] px-1 text-[9px] font-semibold text-white">28</span></a>
          <a href="/deals" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-accent-soft)] text-[var(--color-accent)]" title="Deals"><Icon name="dollar" className="h-[18px] w-[18px]" /></a>
          <a href="#" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Contacts"><Icon name="users" className="h-[18px] w-[18px]" /></a>
          <a href="#" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Tasks"><Icon name="check-circle" className="h-[18px] w-[18px]" /></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><Avatar name="Alex Kim" hue="#111827" size={28} /></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex items-center gap-3">
            <h1 className="text-[15px] font-semibold">Deals</h1>
            <span className="text-[11px] text-gray-400">{totalDeals} deals · ${(totalValue / 1000).toFixed(0)}k total</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Icon name="search" className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search deals..." className="h-8 w-48 rounded-md border border-[var(--color-line)] pl-8 pr-3 text-[12.5px] focus:border-[var(--color-accent-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" />
            </div>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-md bg-[var(--color-accent)] px-2.5 text-[12.5px] font-medium text-white hover:bg-[var(--color-accent-2)]"><Icon name="plus" className="h-3.5 w-3.5" /> Add deal</button>
          </div>
        </div>

        <div className="scroll-thin flex-1 overflow-y-auto p-4">
          {/* Pipeline board */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(pipeline).map(([stage, deals]) => {
              const meta = stageMeta[stage]
              const filtered = deals.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()) || d.contact.toLowerCase().includes(search.toLowerCase()))
              const stageValue = deals.reduce((sum, d) => sum + parseInt(d.value.replace(/[^0-9]/g, "")), 0)
              return (
                <div key={stage} className="flex flex-col rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-2)] p-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full" style={{ background: meta.color }} />
                      <span className="text-[12.5px] font-semibold">{stage}</span>
                      <span className="text-[11px] text-gray-400">{filtered.length}</span>
                    </div>
                    <span className="text-[11px] font-medium text-gray-500">${(stageValue / 1000).toFixed(0)}k</span>
                  </div>
                  <div className="space-y-2">
                    {filtered.map((d, i) => (
                      <div key={i} className="rounded-md border border-[var(--color-line)] bg-white p-3 hover:shadow-sm cursor-pointer transition-shadow">
                        <div className="flex items-start justify-between">
                          <p className="text-[12.5px] font-semibold">{d.name}</p>
                          <button className="text-gray-400 hover:text-[var(--color-ink)]"><Icon name="more" className="h-4 w-4" /></button>
                        </div>
                        <p className="mt-1 text-[12px] font-mono font-medium text-[var(--color-accent)]">{d.value}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <Avatar name={d.contact} hue="#111827" size={18} />
                            <span className="text-[11px] text-gray-500">{d.contact}</span>
                          </div>
                          <span className="text-[11px] text-gray-400">{d.days}d</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
