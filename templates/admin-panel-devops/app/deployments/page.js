"use client"

import { useState } from "react"

const deployments = [
  { id: "dep-8a2f", commit: "a3f9c2d", message: "Fix connection pool timeout", env: "production", status: "success", time: "4m ago", author: "Maya Chen", duration: "3m 12s", services: ["API Gateway", "Auth Service"] },
  { id: "dep-8a2e", commit: "b7e1d4a", message: "Add rate limiting middleware", env: "production", status: "success", time: "1h ago", author: "Jonas Keller", duration: "2m 45s", services: ["API Gateway"] },
  { id: "dep-8a2d", commit: "c2f8e1b", message: "Update dependency versions", env: "staging", status: "success", time: "3h ago", author: "Priya Nair", duration: "5m 08s", services: ["All services"] },
  { id: "dep-8a2c", commit: "d9a4c7e", message: "Rollback search index config", env: "production", status: "rolled back", time: "5h ago", author: "System", duration: "1m 20s", services: ["Search Index"] },
  { id: "dep-8a2b", commit: "e1b5f3a", message: "Deploy new caching layer", env: "production", status: "success", time: "8h ago", author: "Leila Park", duration: "4m 33s", services: ["Cache Cluster"] },
  { id: "dep-8a2a", commit: "f3c6d8e", message: "Enable WebSocket compression", env: "production", status: "success", time: "12h ago", author: "Elena Voss", duration: "2m 18s", services: ["API Gateway", "Queue Worker"] },
  { id: "dep-8a29", commit: "g7h2i1j", message: "Scale worker pool to 12 nodes", env: "production", status: "success", time: "1d ago", author: "Omar Farooq", duration: "6m 02s", services: ["Queue Worker"] },
  { id: "dep-8a28", commit: "k4l5m6n", message: "Patch security vulnerability CVE-2024", env: "production", status: "success", time: "1d ago", author: "System", duration: "8m 45s", services: ["All services"] },
  { id: "dep-8a27", commit: "o7p8q9r", message: "Add new analytics pipeline stage", env: "staging", status: "failed", time: "2d ago", author: "Sofia Rossi", duration: "1m 05s", services: ["Analytics Pipeline"] },
  { id: "dep-8a26", commit: "s1t2u3v", message: "Update SSL certificates", env: "production", status: "success", time: "3d ago", author: "David Osei", duration: "2m 50s", services: ["API Gateway", "CDN Edge"] },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "server") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="2" y="3" width="20" height="6" rx="2"/><rect x="2" y="11" width="20" height="6" rx="2"/><rect x="2" y="19" width="20" height="2" rx="1"/><path d="M6 6h.01"/><path d="M6 14h.01"/></svg>)
  if (name === "rocket") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>)
  if (name === "bell") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M6 8a6 6 0 0 1 12 0c0 5 2 7 2 7H4s2-2 2-7ZM10 20a2 2 0 0 0 4 0"/></svg>)
  if (name === "file-text") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "x") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>)
  if (name === "refresh") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21.5 2v6h-6"/><path d="M2.5 22v-6h6"/><path d="M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/></svg>)
  if (name === "git-commit") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="3"/><path d="M3 12h6"/><path d="M15 12h6"/></svg>)
  if (name === "clock") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>)
  return null
}

function Avatar({ name, hue = "#0891b2", size = 20 }) {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("")
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white"
      style={{ background: hue, width: size, height: size, fontSize: size * 0.42 }}>{initials}</span>
  )
}

function StatusPill({ status }) {
  if (status === "success") {
    return <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: "#d1fae5", color: "#065f46" }}><span className="h-1.5 w-1.5 rounded-full" style={{ background: "#059669" }} />Success</span>
  }
  if (status === "rolled back") {
    return <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: "#fef3c7", color: "#92400e" }}><span className="h-1.5 w-1.5 rounded-full" style={{ background: "#d97706" }} />Rolled back</span>
  }
  if (status === "failed") {
    return <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: "#fee2e2", color: "#991b1b" }}><span className="h-1.5 w-1.5 rounded-full" style={{ background: "#dc2626" }} />Failed</span>
  }
  return <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: "#f3f4f6", color: "#4b5563" }}>{status}</span>
}

export default function DeploymentsPage() {
  const [filter, setFilter] = useState("")

  const filtered = deployments.filter((d) =>
    d.message.toLowerCase().includes(filter.toLowerCase()) ||
    d.commit.toLowerCase().includes(filter.toLowerCase()) ||
    d.author.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg"><svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="26" height="26" rx="7" fill="#111827"/><rect x="7" y="7" width="18" height="5" rx="2" fill="#0891b2"/><circle cx="9.5" cy="9.5" r="1" fill="#111827"/><rect x="7" y="13.5" width="18" height="5" rx="2" fill="#0891b2"/><circle cx="9.5" cy="16" r="1" fill="#111827"/><rect x="7" y="20" width="18" height="5" rx="2" fill="#0891b2" opacity="0.7"/></svg></a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/services" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Services"><Icon name="server" className="h-[18px] w-[18px]" /></a>
          <a href="/deployments" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-accent-soft)] text-[var(--color-accent)]" title="Deployments"><Icon name="rocket" className="h-[18px] w-[18px]" /></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)] relative" title="Alerts"><Icon name="bell" className="h-[18px] w-[18px]" /><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-[var(--color-rose)] px-1 text-[9px] font-semibold text-white">3</span></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Logs"><Icon name="file-text" className="h-[18px] w-[18px]" /></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1">
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
          <Avatar name="Dev Ops" hue="#111827" size={28} />
        </div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
            <a href="/" className="hover:text-[var(--color-ink)]">Overview</a><Icon name="chevron-right" className="h-3 w-3" /><span className="font-semibold text-[var(--color-ink)]">Deployments</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Icon name="search" className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Search deployments..." className="h-8 w-56 rounded-md border border-[var(--color-line)] bg-[var(--color-bg-2)] pl-7 pr-3 text-[12.5px] placeholder:text-gray-400 focus:border-[var(--color-accent-ring)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" />
            </div>
          </div>
        </div>

        <div className="scroll-thin flex-1 overflow-y-auto">
          <div className="grid grid-cols-[100px_1fr_72px_72px_72px_80px_48px] items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
            <span>Commit</span><span>Message</span><span className="text-center">Env</span><span className="hidden md:block text-right">Duration</span><span className="hidden md:block text-right">Status</span><span>Time</span><span></span>
          </div>
          {filtered.map((it) => (
            <div key={it.id} className="row-zebra group grid grid-cols-[100px_1fr_72px_72px_72px_80px_48px] items-center gap-3 border-b border-[var(--color-line-2)] px-4 text-[12.5px] hover:bg-[var(--color-bg-2)]">
              <span className="flex items-center gap-1.5 py-2.5">
                <Icon name="git-commit" className="h-3.5 w-3.5 text-gray-400" />
                <span className="font-mono text-[11px] text-gray-600">{it.commit}</span>
              </span>
              <div className="min-w-0">
                <span className="font-medium text-[var(--color-ink)] block truncate">{it.message}</span>
                <span className="text-[11px] text-gray-500">{it.services.join(", ")}</span>
              </div>
              <span className="text-center">
                <span className={`inline-flex rounded-md px-1.5 py-0.5 font-mono text-[10.5px] ${it.env === "production" ? "bg-[var(--color-accent-soft)] text-[var(--color-accent)]" : "bg-[var(--color-bg-3)] text-gray-600"}`}>{it.env}</span>
              </span>
              <span className="hidden md:block text-right font-mono text-[11px] text-gray-600">{it.duration}</span>
              <span className="hidden md:block text-right"><StatusPill status={it.status} /></span>
              <span className="text-[11px] text-gray-500">{it.time}</span>
              <span className="flex justify-end">
                <Avatar name={it.author} hue={it.author === "System" ? "#111827" : "#0891b2"} size={22} />
              </span>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="px-4 py-8 text-center text-[12.5px] text-gray-500">No deployments match your search.</div>
          )}
        </div>
      </main>
    </div>
  )
}
