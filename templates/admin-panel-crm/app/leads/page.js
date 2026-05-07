"use client"

import { useState } from "react"

const leads = [
  { name: "Elena Voss", company: "Vertex Labs", email: "elena@vertexlabs.io", status: "Qualified", source: "Website", value: "$45,000", owner: "Sarah Chen" },
  { name: "Marcus Reid", company: "Nebula AI", email: "marcus@nebula.ai", status: "Contacted", source: "LinkedIn", value: "$28,000", owner: "Leila Park" },
  { name: "Priya Nair", company: "Pacific Data", email: "priya@pacificdata.com", status: "New", source: "Referral", value: "$62,000", owner: "Sarah Chen" },
  { name: "Jonas Keller", company: "Draftboard Inc", email: "jonas@draftboard.co", status: "Lost", source: "Outbound", value: "$12,000", owner: "Marcus Reid" },
  { name: "Omar Farooq", company: "Orbit Finance", email: "omar@orbitfinance.com", status: "Qualified", source: "Event", value: "$89,000", owner: "Leila Park" },
  { name: "Ari Gomez", company: "Nova Systems", email: "ari@novasys.tech", status: "Contacted", source: "Website", value: "$34,000", owner: "Sarah Chen" },
  { name: "Lina Cho", company: "Atlas Cloud", email: "lina@atlascloud.io", status: "New", source: "LinkedIn", value: "$51,000", owner: "Marcus Reid" },
  { name: "David Park", company: "Flux Analytics", email: "david@fluxanalytics.com", status: "Qualified", source: "Referral", value: "$73,000", owner: "Leila Park" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "users") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M7 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/><path d="M17 11a4 4 0 0 1 3 3.87V21"/></svg>)
  if (name === "target") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>)
  if (name === "dollar") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>)
  if (name === "check-circle") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "filter") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>)
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

function StatusBadge({ status }) {
  const styles = {
    New: "bg-[var(--color-accent-soft)] text-[var(--color-accent)]",
    Contacted: "bg-amber-50 text-amber-700",
    Qualified: "bg-emerald-50 text-emerald-700",
    Lost: "bg-gray-100 text-gray-600",
  }
  return (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium ${styles[status] || styles.New}`}>
      {status}
    </span>
  )
}

function SourceBadge({ source }) {
  const colors = {
    Website: "#2563eb",
    LinkedIn: "#0a66c2",
    Referral: "#059669",
    Event: "#7c3aed",
    Outbound: "#d97706",
  }
  return (
    <span className="inline-flex items-center gap-1 text-[12px] text-gray-600">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: colors[source] || "#9ca3af" }} />
      {source}
    </span>
  )
}

export default function LeadsPage() {
  const [search, setSearch] = useState("")
  const [filterStatus, setFilterStatus] = useState("All")

  const filtered = leads.filter((l) => {
    const matchesSearch = l.name.toLowerCase().includes(search.toLowerCase()) || l.company.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = filterStatus === "All" || l.status === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
          <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#111827"/><circle cx="12" cy="11" r="3" fill="#2563eb"/><path d="M6 25c0-4 2.7-6.5 6-6.5s6 2.5 6 6.5" fill="#2563eb"/><circle cx="21" cy="12" r="2.5" fill="#3b82f6"/><path d="M16 25c0-3.3 2.2-5.5 5-5.5s5 2.2 5 5.5" fill="#3b82f6"/></svg>
        </a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/leads" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-accent-soft)] text-[var(--color-accent)] relative" title="Leads"><Icon name="target" className="h-[18px] w-[18px]" /><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-[var(--color-accent)] px-1 text-[9px] font-semibold text-white">28</span></a>
          <a href="/deals" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Deals"><Icon name="dollar" className="h-[18px] w-[18px]" /></a>
          <a href="#" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Contacts"><Icon name="users" className="h-[18px] w-[18px]" /></a>
          <a href="#" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Tasks"><Icon name="check-circle" className="h-[18px] w-[18px]" /></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><Avatar name="Alex Kim" hue="#111827" size={28} /></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <h1 className="text-[15px] font-semibold">Leads</h1>
          <div className="flex items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-md bg-[var(--color-accent)] px-2.5 text-[12.5px] font-medium text-white hover:bg-[var(--color-accent-2)]"><Icon name="plus" className="h-3.5 w-3.5" /> Add lead</button>
          </div>
        </div>

        <div className="scroll-thin flex-1 overflow-y-auto p-4">
          {/* Filters */}
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1 max-w-sm">
              <Icon name="search" className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search leads..." className="h-9 w-full rounded-md border border-[var(--color-line)] pl-9 pr-3 text-[12.5px] focus:border-[var(--color-accent-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" />
            </div>
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="h-9 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white">
              <option>All</option>
              <option>New</option>
              <option>Contacted</option>
              <option>Qualified</option>
              <option>Lost</option>
            </select>
          </div>

          {/* Table */}
          <div className="rounded-lg border border-[var(--color-line)] bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[var(--color-line)] bg-[var(--color-bg-2)]">
                    <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500">Lead</th>
                    <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500">Status</th>
                    <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500">Source</th>
                    <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500 text-right">Value</th>
                    <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500">Owner</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((l, i) => (
                    <tr key={i} className="border-b border-[var(--color-line)] last:border-0 hover:bg-[var(--color-bg-2)]">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <Avatar name={l.name} hue={["#2563eb", "#059669", "#7c3aed", "#d97706", "#dc2626"][i % 5]} size={28} />
                          <div>
                            <p className="text-[12.5px] font-medium">{l.name}</p>
                            <p className="text-[11px] text-gray-400">{l.company}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3"><StatusBadge status={l.status} /></td>
                      <td className="px-4 py-3"><SourceBadge source={l.source} /></td>
                      <td className="px-4 py-3 text-right font-mono text-[12.5px] font-medium">{l.value}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Avatar name={l.owner} hue="#111827" size={20} />
                          <span className="text-[12px]">{l.owner}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {filtered.length === 0 && (
            <div className="mt-8 text-center text-gray-400 text-[13px]">No leads match your filters.</div>
          )}
        </div>
      </main>
    </div>
  )
}
