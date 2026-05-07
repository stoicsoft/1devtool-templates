"use client"

import { useState } from "react"

const products = [
  { id: "PRD-001", name: "Wireless Headphones", sku: "WH-001", price: 49.99, stock: 124, category: "Electronics", status: "active", sales: 482 },
  { id: "PRD-002", name: "Leather Wallet", sku: "LW-042", price: 29.99, stock: 89, category: "Accessories", status: "active", sales: 356 },
  { id: "PRD-003", name: "Ceramic Mug Set", sku: "CM-112", price: 19.99, stock: 12, category: "Home", status: "active", sales: 298 },
  { id: "PRD-004", name: "Running Shoes", sku: "RS-009", price: 129.99, stock: 45, category: "Footwear", status: "active", sales: 245 },
  { id: "PRD-005", name: "Canvas Backpack", sku: "CB-033", price: 49.99, stock: 67, category: "Accessories", status: "active", sales: 198 },
  { id: "PRD-006", name: "Stainless Water Bottle", sku: "WB-017", price: 24.99, stock: 0, category: "Home", status: "out_of_stock", sales: 156 },
  { id: "PRD-007", name: "Bluetooth Speaker", sku: "BS-008", price: 79.99, stock: 34, category: "Electronics", status: "active", sales: 134 },
  { id: "PRD-008", name: "Yoga Mat", sku: "YM-021", price: 34.99, stock: 78, category: "Fitness", status: "active", sales: 112 },
  { id: "PRD-009", name: "Sunglasses", sku: "SG-055", price: 89.99, stock: 23, category: "Accessories", status: "low_stock", sales: 98 },
  { id: "PRD-010", name: "Smart Watch", sku: "SW-003", price: 199.99, stock: 15, category: "Electronics", status: "low_stock", sales: 87 },
  { id: "PRD-011", name: "Gym Towel Set", sku: "GT-029", price: 14.99, stock: 156, category: "Fitness", status: "active", sales: 76 },
  { id: "PRD-012", name: "Travel Pillow", sku: "TP-041", price: 22.99, stock: 0, category: "Travel", status: "out_of_stock", sales: 54 },
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
  if (name === "grid") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>)
  if (name === "list") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg>)
  if (name === "box") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>)
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
    active: { dot: "#059669", label: "Active", bg: "#d1fae5", fg: "#065f46" },
    low_stock: { dot: "#d97706", label: "Low Stock", bg: "#fef3c7", fg: "#92400e" },
    out_of_stock: { dot: "#dc2626", label: "Out of Stock", bg: "#fee2e2", fg: "#991b1b" },
  }
  const s = map[status]
  return <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: s.bg, color: s.fg }}><span className="h-1.5 w-1.5 rounded-full" style={{ background: s.dot }} />{s.label}</span>
}

export default function ProductsPage() {
  const [view, setView] = useState("grid")
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")

  const filtered = products.filter((p) => {
    if (filter !== "all" && p.status !== filter) return false
    if (search) {
      const q = search.toLowerCase()
      return p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    }
    return true
  })

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg"><svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#111827"/><path d="M10 10h12l-1 10H11L10 10z" fill="#ea580c"/><circle cx="13" cy="23" r="1.5" fill="#ea580c"/><circle cx="19" cy="23" r="1.5" fill="#ea580c"/></svg></a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/orders" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)] relative" title="Orders"><Icon name="orders" className="h-[18px] w-[18px]" /><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-[var(--color-accent)] px-1 text-[9px] font-semibold text-white">12</span></a>
          <a href="/products" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-accent-soft)] text-[var(--color-accent)]" title="Products"><Icon name="products" className="h-[18px] w-[18px]" /></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Customers"><Icon name="customers" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Analytics"><Icon name="analytics" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><Avatar name="Ari Gomez" hue="#111827" size={28} /></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
            <a href="/" className="hover:text-[var(--color-ink)]">Overview</a><Icon name="chevron-right" className="h-3 w-3" /><span className="font-semibold text-[var(--color-ink)]">Products</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Icon name="search" className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} className="h-8 w-56 rounded-md border border-[var(--color-line)] bg-[var(--color-bg-2)] pl-7 pr-3 text-[12.5px] placeholder:text-gray-400 focus:border-[var(--color-accent-ring)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" />
            </div>
            <div className="hidden sm:flex rounded-md border border-[var(--color-line)] overflow-hidden">
              <button onClick={() => setView("grid")} className={`grid h-8 w-8 place-items-center ${view === "grid" ? 'bg-[var(--color-bg-2)] text-[var(--color-accent)]' : 'text-gray-500 hover:text-[var(--color-ink)]'}`}><Icon name="grid" className="h-4 w-4" /></button>
              <button onClick={() => setView("list")} className={`grid h-8 w-8 place-items-center border-l border-[var(--color-line)] ${view === "list" ? 'bg-[var(--color-bg-2)] text-[var(--color-accent)]' : 'text-gray-500 hover:text-[var(--color-ink)]'}`}><Icon name="list" className="h-4 w-4" /></button>
            </div>
          </div>
        </div>

        <div className="scroll-thin flex-1 overflow-y-auto p-4">
          {/* Filters */}
          <div className="flex items-center gap-2 mb-4">
            {["all", "active", "low_stock", "out_of_stock"].map((s) => (
              <button key={s} onClick={() => setFilter(s)} className={`rounded-md px-2.5 py-1 text-[11.5px] font-medium transition ${filter === s ? 'bg-[var(--color-accent)] text-white' : 'border border-[var(--color-line)] text-gray-600 hover:text-[var(--color-ink)] hover:bg-[var(--color-bg-2)]'}`}>
                {s === "all" ? "All" : s === "low_stock" ? "Low Stock" : s === "out_of_stock" ? "Out of Stock" : "Active"}
              </button>
            ))}
          </div>

          {view === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((p) => (
                <div key={p.id} className="rounded-lg border border-[var(--color-line)] bg-white p-4 hover:shadow-sm transition">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-bg-3)] text-gray-500">
                      <Icon name="box" className="h-5 w-5" />
                    </div>
                    <StatusPill status={p.status} />
                  </div>
                  <h3 className="text-[13px] font-semibold truncate">{p.name}</h3>
                  <p className="text-[11px] text-gray-500 mb-2">{p.sku} &middot; {p.category}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[16px] font-semibold">${p.price.toFixed(2)}</p>
                      <p className="text-[11px] text-gray-500">{p.stock} in stock</p>
                    </div>
                    <span className="text-[11px] text-gray-500">{p.sales} sold</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-[var(--color-line)] bg-white overflow-hidden">
              <div className="grid grid-cols-[1fr_80px_72px_100px_90px_48px] items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
                <span>Product</span><span className="text-right">Price</span><span className="text-right">Stock</span><span>Category</span><span>Status</span><span></span>
              </div>
              {filtered.map((p) => (
                <div key={p.id} className="row-zebra group grid grid-cols-[1fr_80px_72px_100px_90px_48px] items-center gap-3 border-b border-[var(--color-line-2)] px-4 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--color-bg-3)] text-gray-500"><Icon name="box" className="h-4 w-4" /></div>
                    <div className="min-w-0">
                      <span className="font-medium text-[var(--color-ink)] block truncate">{p.name}</span>
                      <span className="text-[11px] text-gray-500 block truncate">{p.sku}</span>
                    </div>
                  </div>
                  <span className="text-right font-medium">${p.price.toFixed(2)}</span>
                  <span className="text-right">{p.stock}</span>
                  <span className="text-[11.5px] text-gray-600">{p.category}</span>
                  <span><StatusPill status={p.status} /></span>
                  <span className="flex justify-end">
                    <div className="relative group/action">
                      <button className="text-gray-400 hover:text-[var(--color-ink)]"><Icon name="more" className="h-4 w-4" /></button>
                      <div className="absolute right-0 top-full z-20 hidden w-36 rounded-lg border border-[var(--color-line)] bg-white py-1 shadow-lg group-hover/action:block">
                        <button className="block w-full text-left px-3 py-1.5 text-[12px] hover:bg-[var(--color-bg-2)]">Edit product</button>
                        <button className="block w-full text-left px-3 py-1.5 text-[12px] hover:bg-[var(--color-bg-2)]">Update stock</button>
                        <button className="block w-full text-left px-3 py-1.5 text-[12px] text-rose-600 hover:bg-[var(--color-bg-2)]">Archive</button>
                      </div>
                    </div>
                  </span>
                </div>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="py-12 text-center text-[12.5px] text-gray-500">No products match your filters.</div>
          )}
        </div>
      </main>
    </div>
  )
}
