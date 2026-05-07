"use client"

import { useState } from "react"

const orders = [
  { id: "ORD-9281", customer: "Liam Carter", email: "liam.carter@email.com", items: 3, total: 156.00, status: "shipped", method: "Standard", date: "Today, 2:04 PM" },
  { id: "ORD-9280", customer: "Sophia Nguyen", email: "sophia.n@email.com", items: 1, total: 49.99, status: "pending", method: "Express", date: "Today, 1:50 PM" },
  { id: "ORD-9279", customer: "Marcus Chen", email: "marcus.chen@email.com", items: 5, total: 312.50, status: "processing", method: "Standard", date: "Today, 1:32 PM" },
  { id: "ORD-9278", customer: "Emma Watson", email: "emma.w@email.com", items: 2, total: 89.00, status: "delivered", method: "Express", date: "Today, 12:15 PM" },
  { id: "ORD-9277", customer: "Noah Patel", email: "noah.patel@email.com", items: 1, total: 24.99, status: "cancelled", method: "Standard", date: "Today, 11:42 AM" },
  { id: "ORD-9276", customer: "Olivia Rossi", email: "olivia.r@email.com", items: 4, total: 198.00, status: "shipped", method: "Overnight", date: "Today, 10:08 AM" },
  { id: "ORD-9275", customer: "James Kim", email: "james.kim@email.com", items: 2, total: 74.00, status: "pending", method: "Standard", date: "Today, 9:30 AM" },
  { id: "ORD-9274", customer: "Ava Lindgren", email: "ava.l@email.com", items: 6, total: 445.00, status: "processing", method: "Express", date: "Today, 8:55 AM" },
  { id: "ORD-9273", customer: "Ethan Brooks", email: "ethan.b@email.com", items: 1, total: 129.00, status: "delivered", method: "Standard", date: "Yesterday" },
  { id: "ORD-9272", customer: "Mia Tanaka", email: "mia.t@email.com", items: 3, total: 210.00, status: "shipped", method: "Standard", date: "Yesterday" },
  { id: "ORD-9271", customer: "Lucas Silva", email: "lucas.s@email.com", items: 2, total: 67.50, status: "pending", method: "Overnight", date: "Yesterday" },
  { id: "ORD-9270", customer: "Isabella Moore", email: "isabella.m@email.com", items: 1, total: 39.99, status: "cancelled", method: "Standard", date: "May 5" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "orders") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>)
  if (name === "products") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>)
  if (name === "customers") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M7 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/><path d="M17 11a4 4 0 0 1 3 3.87V21"/></svg>)
  if (name === "analytics") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>)
  if (name === "filter") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 5h18l-7 9v5l-4 2v-7L3 5Z"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "more") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="5" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="19" r="1.5" fill="currentColor"/></svg>)
  if (name === "truck") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.4a2 2 0 0 0-.88-1.66l-3.24-2.16A2 2 0 0 0 16.76 9H14v8h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>)
  return null
}

function Avatar({ name, hue = "#ea580c", size = 20 }) {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("")
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white"
      style={{ background: hue, width: size, height: size, fontSize: size * 0.42 }}>
      {initials}
    </span>
  )
}

function StatusPill({ status }) {
  const map = {
    pending: { dot: "#d97706", label: "Pending", bg: "#fef3c7", fg: "#92400e" },
    processing: { dot: "#2563eb", label: "Processing", bg: "#dbeafe", fg: "#1e40af" },
    shipped: { dot: "#7c3aed", label: "Shipped", bg: "#ede9fe", fg: "#5b21b6" },
    delivered: { dot: "#059669", label: "Delivered", bg: "#d1fae5", fg: "#065f46" },
    cancelled: { dot: "#dc2626", label: "Cancelled", bg: "#fee2e2", fg: "#991b1b" },
  }
  const s = map[status]
  return <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: s.bg, color: s.fg }}><span className="h-1.5 w-1.5 rounded-full" style={{ background: s.dot }} />{s.label}</span>
}

export default function OrdersPage() {
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")

  const filtered = orders.filter((o) => {
    if (filter !== "all" && o.status !== filter) return false
    if (search) {
      const q = search.toLowerCase()
      return o.id.toLowerCase().includes(q) || o.customer.toLowerCase().includes(q) || o.email.toLowerCase().includes(q)
    }
    return true
  })

  const statusCounts = { all: orders.length, pending: orders.filter(o => o.status === "pending").length, processing: orders.filter(o => o.status === "processing").length, shipped: orders.filter(o => o.status === "shipped").length, delivered: orders.filter(o => o.status === "delivered").length, cancelled: orders.filter(o => o.status === "cancelled").length }

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg"><svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#111827"/><path d="M10 10h12l-1 10H11L10 10z" fill="#ea580c"/><circle cx="13" cy="23" r="1.5" fill="#ea580c"/><circle cx="19" cy="23" r="1.5" fill="#ea580c"/></svg></a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/orders" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-accent-soft)] text-[var(--color-accent)] relative" title="Orders"><Icon name="orders" className="h-[18px] w-[18px]" /><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-[var(--color-accent)] px-1 text-[9px] font-semibold text-white">12</span></a>
          <a href="/products" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Products"><Icon name="products" className="h-[18px] w-[18px]" /></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Customers"><Icon name="customers" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Analytics"><Icon name="analytics" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><Avatar name="Ari Gomez" hue="#111827" size={28} /></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
            <a href="/" className="hover:text-[var(--color-ink)]">Overview</a><Icon name="chevron-right" className="h-3 w-3" /><span className="font-semibold text-[var(--color-ink)]">Orders</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Icon name="search" className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search orders..." value={search} onChange={(e) => setSearch(e.target.value)} className="h-8 w-56 rounded-md border border-[var(--color-line)] bg-[var(--color-bg-2)] pl-7 pr-3 text-[12.5px] placeholder:text-gray-400 focus:border-[var(--color-accent-ring)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" />
            </div>
          </div>
        </div>

        <div className="scroll-thin flex-1 overflow-y-auto">
          {/* Filters */}
          <div className="flex items-center gap-1 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2">
            {["all", "pending", "processing", "shipped", "delivered", "cancelled"].map((s) => (
              <button key={s} onClick={() => setFilter(s)} className={`rounded-md px-2.5 py-1 text-[11.5px] font-medium capitalize transition ${filter === s ? 'bg-[var(--color-accent)] text-white' : 'text-gray-600 hover:bg-white hover:text-[var(--color-ink)]'}`}>
                {s} {statusCounts[s] > 0 && <span className={`ml-0.5 text-[10px] ${filter === s ? 'text-white/80' : 'text-gray-400'}`}>({statusCounts[s]})</span>}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="grid grid-cols-[28px_90px_1fr_60px_72px_90px_80px_72px_48px] items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
            <span><input type="checkbox" className="h-3.5 w-3.5 accent-[var(--color-accent)]" /></span>
            <span>Order</span><span>Customer</span><span className="text-right">Items</span><span className="text-right">Total</span><span>Status</span><span>Method</span><span>Date</span><span></span>
          </div>
          {filtered.map((o) => (
            <div key={o.id} className="row-zebra group grid grid-cols-[28px_90px_1fr_60px_72px_90px_80px_72px_48px] items-center gap-3 border-b border-[var(--color-line-2)] px-4 text-[12.5px] hover:bg-[var(--color-bg-2)]">
              <span><input type="checkbox" className="h-3.5 w-3.5 accent-[var(--color-accent)]" /></span>
              <span className="font-mono text-[11.5px] text-gray-500">{o.id}</span>
              <div className="flex items-center gap-2 min-w-0">
                <Avatar name={o.customer} hue={["#ea580c","#2563eb","#059669","#7c3aed","#dc2626","#0891b2"][o.id.charCodeAt(o.id.length-1) % 6]} size={22} />
                <div className="min-w-0">
                  <span className="font-medium text-[var(--color-ink)] block truncate">{o.customer}</span>
                  <span className="text-[11px] text-gray-500 block truncate">{o.email}</span>
                </div>
              </div>
              <span className="text-right">{o.items}</span>
              <span className="text-right font-medium">${o.total.toFixed(2)}</span>
              <span><StatusPill status={o.status} /></span>
              <span className="text-[11.5px] text-gray-600">{o.method}</span>
              <span className="text-[11.5px] text-gray-500">{o.date}</span>
              <span className="flex justify-end">
                <div className="relative group/action">
                  <button className="text-gray-400 hover:text-[var(--color-ink)]"><Icon name="more" className="h-4 w-4" /></button>
                  <div className="absolute right-0 top-full z-20 hidden w-36 rounded-lg border border-[var(--color-line)] bg-white py-1 shadow-lg group-hover/action:block">
                    <button className="block w-full text-left px-3 py-1.5 text-[12px] hover:bg-[var(--color-bg-2)]">View details</button>
                    <button className="block w-full text-left px-3 py-1.5 text-[12px] hover:bg-[var(--color-bg-2)]">Update status</button>
                    <button className="block w-full text-left px-3 py-1.5 text-[12px] text-rose-600 hover:bg-[var(--color-bg-2)]">Cancel order</button>
                  </div>
                </div>
              </span>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="px-4 py-12 text-center text-[12.5px] text-gray-500">No orders match your filters.</div>
          )}
        </div>
      </main>
    </div>
  )
}
