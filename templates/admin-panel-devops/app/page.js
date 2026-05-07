"use client"

import { useState } from "react"

const kpis = [
  { label: "System Uptime", value: "99.97%", delta: "+0.02%", dir: "up", color: "#059669" },
  { label: "Active Services", value: "24", delta: "+2", dir: "up", color: "#0891b2" },
  { label: "Pending Alerts", value: "3", delta: "-1", dir: "down", color: "#dc2626" },
  { label: "Last Deploy", value: "4m", delta: "ago", dir: "up", color: "#6b7280" },
]

const services = [
  { name: "API Gateway", status: "healthy", uptime: "99.99%", region: "us-east-1", latency: "24ms" },
  { name: "Auth Service", status: "healthy", uptime: "99.98%", region: "us-east-1", latency: "18ms" },
  { name: "Database Primary", status: "healthy", uptime: "100%", region: "us-east-1", latency: "8ms" },
  { name: "Database Replica", status: "warning", uptime: "99.95%", region: "us-west-2", latency: "112ms" },
  { name: "Cache Cluster", status: "healthy", uptime: "99.99%", region: "us-east-1", latency: "2ms" },
  { name: "Queue Worker", status: "healthy", uptime: "99.97%", region: "us-east-1", latency: "45ms" },
  { name: "Blob Storage", status: "healthy", uptime: "100%", region: "global", latency: "31ms" },
  { name: "Search Index", status: "critical", uptime: "98.12%", region: "eu-west-1", latency: "5.2s" },
]

const deployments = [
  { id: "dep-8a2f", commit: "a3f9c2d", message: "Fix connection pool timeout", env: "production", status: "success", time: "4m ago", author: "Maya Chen" },
  { id: "dep-8a2e", commit: "b7e1d4a", message: "Add rate limiting middleware", env: "production", status: "success", time: "1h ago", author: "Jonas Keller" },
  { id: "dep-8a2d", commit: "c2f8e1b", message: "Update dependency versions", env: "staging", status: "success", time: "3h ago", author: "Priya Nair" },
  { id: "dep-8a2c", commit: "d9a4c7e", message: "Rollback search index config", env: "production", status: "rolled back", time: "5h ago", author: "System" },
  { id: "dep-8a2b", commit: "e1b5f3a", message: "Deploy new caching layer", env: "production", status: "success", time: "8h ago", author: "Leila Park" },
]

const alerts = [
  { id: "ALT-1042", severity: "critical", message: "Search index latency > 5s", service: "Search Index", time: "2m ago" },
  { id: "ALT-1041", severity: "warning", message: "DB replica lag > 30s", service: "Database Replica", time: "15m ago" },
  { id: "ALT-1040", severity: "warning", message: "High memory usage on worker-3", service: "Queue Worker", time: "42m ago" },
  { id: "ALT-1039", severity: "info", message: "SSL cert expires in 14 days", service: "API Gateway", time: "2h ago" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "panel") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></svg>)
  if (name === "server") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="2" y="3" width="20" height="6" rx="2"/><rect x="2" y="11" width="20" height="6" rx="2"/><rect x="2" y="19" width="20" height="2" rx="1"/><path d="M6 6h.01"/><path d="M6 14h.01"/></svg>)
  if (name === "rocket") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>)
  if (name === "bell") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M6 8a6 6 0 0 1 12 0c0 5 2 7 2 7H4s2-2 2-7ZM10 20a2 2 0 0 0 4 0"/></svg>)
  if (name === "file-text") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 19V5M5 12l7-7 7 7"/></svg>)
  if (name === "arrow-down") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M19 12l-7 7-7-7"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>)
  if (name === "chevron-right") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "x") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>)
  if (name === "more") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="5" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="19" r="1.5" fill="currentColor"/></svg>)
  if (name === "refresh") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21.5 2v6h-6"/><path d="M2.5 22v-6h6"/><path d="M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/></svg>)
  if (name === "alert-circle") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>)
  if (name === "alert-triangle") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>)
  if (name === "info") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>)
  if (name === "play") return (<svg viewBox="0 0 24 24" className={className} {...c}><polygon points="5 3 19 12 5 21 5 3"/></svg>)
  if (name === "external-link") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>)
  if (name === "terminal") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m4 17 6-6-6-6"/><path d="M12 19h8"/></svg>)
  if (name === "cloud") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19"/><path d="M19.5 19a4 4 0 0 0 .5-7.972 7 7 0 0 0-13.46-1.234A5.5 5.5 0 0 0 4.5 19"/></svg>)
  return null
}

function Avatar({ name, hue = "#0891b2", size = 20 }) {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("")
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white"
      style={{ background: hue, width: size, height: size, fontSize: size * 0.42 }}>
      {initials}
    </span>
  )
}

function StatusDot({ status }) {
  const map = {
    healthy: { color: "#059669", bg: "#d1fae5", label: "Healthy" },
    warning: { color: "#d97706", bg: "#fef3c7", label: "Warning" },
    critical: { color: "#dc2626", bg: "#fee2e2", label: "Critical" },
  }
  const s = map[status] || map.healthy
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: s.bg, color: s.color }}>
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.color }} />{s.label}
    </span>
  )
}

function SeverityBadge({ severity }) {
  const map = {
    critical: { dot: "#dc2626", bg: "#fee2e2", fg: "#991b1b" },
    warning: { dot: "#d97706", bg: "#fef3c7", fg: "#92400e" },
    info: { dot: "#2563eb", bg: "#dbeafe", fg: "#1e40af" },
  }
  const s = map[severity] || map.info
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: s.bg, color: s.fg }}>
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.dot }} />{severity.charAt(0).toUpperCase() + severity.slice(1)}
    </span>
  )
}

function DeployStatus({ status }) {
  if (status === "success") {
    return <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#059669]"><Icon name="check" className="h-3 w-3" />Success</span>
  }
  if (status === "rolled back") {
    return <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#d97706]"><Icon name="refresh" className="h-3 w-3" />Rolled back</span>
  }
  return <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-500">{status}</span>
}

export default function Home() {
  const [ackOpen, setAckOpen] = useState(false)
  const [ackAlert, setAckAlert] = useState(null)
  const [deployOpen, setDeployOpen] = useState(false)

  const openAck = (alert) => { setAckAlert(alert); setAckOpen(true) }

  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      {/* Sidebar */}
      <aside className="hidden md:flex w-16 shrink-0 flex-col items-center border-r border-[var(--color-line)] bg-[var(--color-bg-2)] py-3">
        <a href="/" className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
          <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
            <rect x="3" y="3" width="26" height="26" rx="7" fill="#111827"/>
            <rect x="7" y="7" width="18" height="5" rx="2" fill="#0891b2"/>
            <circle cx="9.5" cy="9.5" r="1" fill="#111827"/>
            <rect x="7" y="13.5" width="18" height="5" rx="2" fill="#0891b2"/>
            <circle cx="9.5" cy="16" r="1" fill="#111827"/>
            <rect x="7" y="20" width="18" height="5" rx="2" fill="#0891b2" opacity="0.7"/>
          </svg>
        </a>
        <div className="mt-1 flex flex-1 flex-col items-center gap-1">
          <a href="/" className="grid h-9 w-9 place-items-center rounded-md text-[13px] bg-[var(--color-accent-soft)] text-[var(--color-accent)]" title="Overview"><Icon name="panel" className="h-[18px] w-[18px]" /></a>
          <a href="/services" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Services"><Icon name="server" className="h-[18px] w-[18px]" /></a>
          <a href="/deployments" className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Deployments"><Icon name="rocket" className="h-[18px] w-[18px]" /></a>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)] relative" title="Alerts"><Icon name="bell" className="h-[18px] w-[18px]" /><span className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-[var(--color-rose)] px-1 text-[9px] font-semibold text-white">3</span></button>
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Logs"><Icon name="file-text" className="h-[18px] w-[18px]" /></button>
        </div>
        <div className="flex flex-col items-center gap-1 pb-1">
          <button className="grid h-9 w-9 place-items-center rounded-md text-[13px] text-gray-500 hover:bg-[var(--color-bg-3)] hover:text-[var(--color-ink)]" title="Settings"><svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg></button>
          <Avatar name="Dev Ops" hue="#111827" size={28} />
        </div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        {/* Header */}
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--color-line)] bg-white px-4">
          <h1 className="text-[15px] font-semibold">Overview</h1>
          <div className="flex items-center gap-2">
            <button onClick={() => setDeployOpen(true)} className="inline-flex h-8 items-center gap-1.5 rounded-md bg-[var(--color-accent)] px-2.5 text-[12.5px] font-medium text-white hover:bg-[var(--color-accent-2)]"><Icon name="rocket" className="h-3.5 w-3.5" /> Deploy</button>
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
                    {k.delta !== "ago" && <Icon name={k.dir === "up" ? "arrow-up" : "arrow-down"} className="h-3 w-3" />}{k.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Service Health Grid */}
            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-[13px] font-semibold">Service Health</h2>
                <a href="/services" className="text-[11px] font-medium text-[var(--color-accent)] hover:underline">View all</a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.slice(0, 6).map((s) => (
                  <div key={s.name} className="rounded-md border border-[var(--color-line)] px-3 py-2.5 hover:bg-[var(--color-bg-2)]">
                    <div className="flex items-center justify-between">
                      <span className="text-[12.5px] font-medium">{s.name}</span>
                      <StatusDot status={s.status} />
                    </div>
                    <div className="mt-1.5 flex items-center gap-2 text-[11px] text-gray-500">
                      <span className="font-mono">{s.uptime}</span>
                      <span className="text-[var(--color-line)]">|</span>
                      <span className="font-mono">{s.latency}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
              <h2 className="text-[13px] font-semibold mb-3">Quick actions</h2>
              <div className="space-y-2">
                <a href="/services" className="flex items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="server" className="h-4 w-4 text-[var(--color-accent)]" /><span className="flex-1">View all services</span><Icon name="chevron-right" className="h-3 w-3 text-gray-400" /></a>
                <a href="/deployments" className="flex items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="rocket" className="h-4 w-4 text-[var(--color-accent)]" /><span className="flex-1">Deployment history</span><Icon name="chevron-right" className="h-3 w-3 text-gray-400" /></a>
                <button className="flex w-full items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="refresh" className="h-4 w-4 text-[var(--color-accent)]" /><span className="flex-1">Restart all services</span></button>
                <button className="flex w-full items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] hover:bg-[var(--color-bg-2)]"><Icon name="terminal" className="h-4 w-4 text-[var(--color-accent)]" /><span className="flex-1">Open incident runbook</span></button>
              </div>
            </div>

            {/* Active Alerts */}
            <div className="rounded-lg border border-[var(--color-line)] bg-white p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-[13px] font-semibold">Active Alerts</h2>
                <span className="text-[11px] text-gray-500">{alerts.length} open</span>
              </div>
              <div className="space-y-2.5">
                {alerts.map((a) => (
                  <div key={a.id} className="flex items-start gap-2">
                    {a.severity === "critical" && <Icon name="alert-circle" className="h-4 w-4 text-[var(--color-rose)] shrink-0 mt-0.5" />}
                    {a.severity === "warning" && <Icon name="alert-triangle" className="h-4 w-4 text-[var(--color-amber)] shrink-0 mt-0.5" />}
                    {a.severity === "info" && <Icon name="info" className="h-4 w-4 text-[var(--color-sky)] shrink-0 mt-0.5" />}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[12px] font-medium truncate">{a.message}</span>
                      </div>
                      <div className="mt-0.5 flex items-center gap-1.5">
                        <SeverityBadge severity={a.severity} />
                        <span className="text-[11px] text-gray-400">{a.time}</span>
                      </div>
                    </div>
                    <button onClick={() => openAck(a)} className="text-[11px] font-medium text-[var(--color-accent)] hover:underline shrink-0">Ack</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Deployments */}
          <div className="mt-4 rounded-lg border border-[var(--color-line)] bg-white p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-[13px] font-semibold">Recent Deployments</h2>
              <a href="/deployments" className="text-[11px] font-medium text-[var(--color-accent)] hover:underline">View all</a>
            </div>
            <div className="space-y-0">
              {deployments.map((d) => (
                <div key={d.id} className="flex items-center gap-3 border-b border-[var(--color-line-2)] py-2.5 last:border-0">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--color-bg-2)]">
                    <Icon name="rocket" className="h-4 w-4 text-[var(--color-accent)]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[12.5px] font-medium">{d.message}</span>
                      <span className="rounded-md bg-[var(--color-bg-3)] px-1.5 py-0.5 font-mono text-[10.5px] text-gray-500">{d.commit}</span>
                    </div>
                    <div className="mt-0.5 flex items-center gap-2 text-[11px] text-gray-500">
                      <span>{d.author}</span>
                      <span className="text-[var(--color-line)]">|</span>
                      <span>{d.time}</span>
                      <span className="text-[var(--color-line)]">|</span>
                      <span className="font-mono text-[10.5px]">{d.env}</span>
                    </div>
                  </div>
                  <DeployStatus status={d.status} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Acknowledge Alert Modal */}
      {ackOpen && ackAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setAckOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-1">Acknowledge Alert</h2>
            <p className="text-[12.5px] text-gray-500 mb-4">{ackAlert.id} &mdash; {ackAlert.message}</p>
            <div className="space-y-3">
              <div><label className="text-[12px] font-medium text-gray-600">Note (optional)</label><textarea placeholder="What action was taken..." className="mt-1 h-16 w-full rounded-md border border-[var(--color-line)] px-3 py-2 text-[12.5px] focus:border-[var(--color-accent-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" /></div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setAckOpen(false)} className="h-8 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-gray-600 hover:bg-[var(--color-bg-2)]">Cancel</button>
              <button onClick={() => setAckOpen(false)} className="h-8 rounded-md bg-[var(--color-accent)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-accent-2)]">Acknowledge</button>
            </div>
          </div>
        </div>
      )}

      {/* Deploy Modal */}
      {deployOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setDeployOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-[15px] font-semibold mb-4">Trigger Deployment</h2>
            <div className="space-y-3">
              <div><label className="text-[12px] font-medium text-gray-600">Environment</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>Production</option><option>Staging</option></select></div>
              <div><label className="text-[12px] font-medium text-gray-600">Commit / Branch</label><input type="text" placeholder="main / a3f9c2d" className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] focus:border-[var(--color-accent-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)]" /></div>
              <div><label className="text-[12px] font-medium text-gray-600">Services</label><select className="mt-1 h-9 w-full rounded-md border border-[var(--color-line)] px-3 text-[12.5px] bg-white"><option>All services</option><option>API Gateway</option><option>Auth Service</option><option>Database</option><option>Cache Cluster</option></select></div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setDeployOpen(false)} className="h-8 rounded-md border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-gray-600 hover:bg-[var(--color-bg-2)]">Cancel</button>
              <button onClick={() => setDeployOpen(false)} className="h-8 rounded-md bg-[var(--color-accent)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-accent-2)]">Start deploy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
