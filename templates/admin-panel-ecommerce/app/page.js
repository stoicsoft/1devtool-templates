"use client"

import { useState } from "react"

const kpis = [
  { label: "Total Revenue", value: "$48,294", delta: "+12.5%", dir: "up", color: "#ea580c" },
  { label: "Orders Today", value: "142", delta: "+8", dir: "up", color: "#2563eb" },
  { label: "Avg Order Value", value: "$84.50", delta: "+3.2%", dir: "up", color: "#059669" },
  { label: "Conversion Rate", value: "3.8%", delta: "-0.4%", dir: "down", color: "#dc2626" },
]

const recentOrders = [
  { id: "ORD-9281", customer: "Liam Carter", email: "liam.carter@email.com", items: 3, total: 156.00, status: "shipped", date: "2m ago" },
  { id: "ORD-9280", customer: "Sophia Nguyen", email: "sophia.n@email.com", items: 1, total: 49.99, status: "pending", date: "14m ago" },
  { id: "ORD-9279", customer: "Marcus Chen", email: "marcus.chen@email.com", items: 5, total: 312.50, status: "processing", date: "32m ago" },
  { id: "ORD-9278", customer: "Emma Watson", email: "emma.w@email.com", items: 2, total: 89.00, status: "delivered", date: "1h ago" },
  { id: "ORD-9277", customer: "Noah Patel", email: "noah.patel@email.com", items: 1, total: 24.99, status: "cancelled", date: "2h ago" },
  { id: "ORD-9276", customer: "Olivia Rossi", email: "olivia.r@email.com", items: 4, total: 198.00, status: "shipped", date: "3h ago" },
]

const topProducts = [
  { name: "Wireless Headphones", sku: "WH-001", sold: 482, revenue: 24058, stock: 124 },
  { name: "Leather Wallet", sku: "LW-042", sold: 356, revenue: 10680, stock: 89 },
  { name: "Ceramic Mug Set", sku: "CM-112", sold: 298, revenue: 5960, stock: 12 },
  { name: "Running Shoes", sku: "RS-009", sold: 245, revenue: 31850, stock: 45 },
  { name: "Canvas Backpack", sku: "CB-033", sold: 198, revenue: 9900, stock: 67 },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "orders") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>)
  if (name === "products") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>)
  if (name === "customers") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M7 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/><path d="M17 11a4 4 0 0 1 3 3.87V21"/></svg>)
  if (name === "analytics") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 19V5M5 12l7-7 7 7"/></svg>)
  if (name === "arrow-down") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M19 12l-7 7-7-7"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>)
  if (name === "bell") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M6 8a6 6 0 0 1 12 0c0 5 2 7 2 7H4s2-2 2-7ZM10 20a2 2 0 0 0 4 0"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "download") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>)
  if (name === "more") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="5" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="19" r="1.5" fill="currentColor"/></svg>)
  if (name === "package") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>)
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

export default function Home() {
  const [orderOpen, setOrderOpen] = useState(false)

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
          <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#111827"/><path d="M10 10h12l-1 10H11L10 10z" fill="#ea580c"/><circle cx="13" cy="23" r="1.5" fill="#ea580c"/><circle cx="19" cy="23" r="1.5" fill="#ea580c"/></svg>
        </a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-accent-soft)] text-[var(--color-accent)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/orders" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)] relative" title="Orders"><Icon name="orders" className="h-[18px] w-[18px]" /><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-[var(--color-accent)] px-1 text-[9px] font-semibold text-white">12</span></a>
          <a href="/products" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Products"><Icon name="products" className="h-[18px] w-[18px]" /></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Customers"><Icon name="customers" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Analytics"><Icon name="analytics" className="h-[18px] w-[18px]" /></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1"><Avatar name="Ari Gomez" hue="#111827" size={28} /></div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <h1 className="text-[15px] font-semibold">Overview</h1>
          <div className="flex items-center gap-2">
            <button onClick={() => setOrderOpen(true)} className="inline-flex h-8 items-center gap-1.5 rounded-md bg-[var(--color-accent)] px-2.5 text-[12.5px] font-medium text-white hover:bg-[var(--color-accent-2)]"><Icon name="plus" className="h-3.5 w-3.5" /> New order</button>
          </div>
        </div>

        <div className="scroll-thin flex-1 overflow-y-auto p-4">
          {/* KPI Cards */}
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Recent Orders */}
            <div className="lg:col-span-2 rounded-lg border border-[var(--color-line)] bg-white p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-[13px] font-semibold">Recent orders</h2>
                <a href="/orders" className="text-[11px] font-medium text-[var(--color-accent)] hover:underline">View all</a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-[12.5px]">
                  <thead>
                    <tr className="border-b border-[var(--color-line)] text-left text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
                      <th className="pb-2 pr-3">Order</th>
                      <th className="pb-2 pr-3">Customer</th>
                      <th className="pb-2 pr-3 text-right">Items</th>
                      <th className="pb-2 pr-3 text-right">Total</th>
                      <th className="pb-2 pr-3">Status</th>
                      <th className="pb-2 text-right">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((o) => (
                      <tr key={o.id} className="border-b border-[var(--color-line-2)] hover:bg-[var(--color-bg-2)]">
                        <td className="py-2 pr-3 font-mono text-[11px] text-gray-500">{o.id}</td>
                        <td className="py-2 pr-3">
                          <span className="font-medium text-[var(--color-ink)] block">{o.customer}</span>
                          <span className="text-[11px] text-gray-500">{o.email}</span>
                        </td>
                        <td className="py-2 pr-3 text-right">{o.items}</td>
                        <td className="py-2 pr-3 text-right font-medium">${o.total.toFixed(2)}</td>
                        <td className="py-2 pr-3"><StatusPill status={o.status} /></td>
                        <td className="py-2 text-right font-mono text-[11px] text-gray-500">{o.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top Products */}
            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
              <h2 className="text-[13px] font-semibold mb-3">Top products</h2>
              <div className="space-y-3">
                {topProducts.map((p, i) => (
                  <div key={p.sku} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--color-bg-3)] text-[10px] font-semibold text-gray-500">{i + 1}</span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12.5px] font-medium">{p.name}</p>
                      <p className="text-[11px] text-gray-500">{p.sku} &middot; {p.stock} in stock</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[12px] font-semibold">${p.revenue.toLocaleString()}</p>
                      <p className="text-[11px] text-gray-500">{p.sold} sold</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <a href="/orders" className="flex items-center gap-2 rounded-lg border border-[var(--color-line)] bg-white px-4 py-3 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="orders" className="h-4 w-4 text-[var(--color-accent)]" /><span className="flex-1 font-medium">Manage orders</span><Icon name="chevron-right" className="h-3 w-3 text-gray-400" /></a>
            <a href="/products" className="flex items-center gap-2 rounded-lg border border-[var(--color-line)] bg-white px-4 py-3 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="products" className="h-4 w-4 text-[var(--color-accent)]" /><span className="flex-1 font-medium">Update inventory</span><Icon name="chevron-right" className="h-3 w-3 text-gray-400" /></a>
            <button className="flex items-center gap-2 rounded-lg border border-[var(--color-line)] bg-white px-4 py-3 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="download" className="h-4 w-4 text-[var(--color-accent)]" /><span className="flex-1 font-medium">Export sales report</span></button>
          </div>
        </div>
      </main>

      {/* New Order Modal */}
      {orderOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setOrderOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-4">Create new order</h2>
            <div className="space-y-3">
              <div><label className="text-[12px] font-medium text-gray-600">Customer email</label><input type="email" placeholder="customer@example.com" className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] focus:border-[var(--color-accent-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" /></div>
              <div><label className="text-[12px] font-medium text-gray-600">Product</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Wireless Headphones</option><option>Leather Wallet</option><option>Ceramic Mug Set</option><option>Running Shoes</option><option>Canvas Backpack</option></select></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-[12px] font-medium text-gray-600">Quantity</label><input type="number" defaultValue="1" min="1" className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] focus:border-[var(--color-accent-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" /></div>
                <div><label className="text-[12px] font-medium text-gray-600">Shipping</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Standard</option><option>Express</option><option>Overnight</option></select></div>
              </div>
              <div><label className="text-[12px] font-medium text-gray-600">Notes (optional)</label><textarea placeholder="Order notes..." className="mt-1 h-16 w-full rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] focus:border-[var(--color-accent-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" /></div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setOrderOpen(false)} className="h-8 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-gray-600 hover:bg-[var(--color-bg-2)]">Cancel</button>
              <button onClick={() => setOrderOpen(false)} className="h-8 rounded-md bg-[var(--color-accent)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-accent-2)]">Create order</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
