"use client"

import { useState } from "react"

export function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    runs: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m10 8 5 4-5 4Z" />
      </>
    ),
    tools: <path d="M14.7 6.3a4 4 0 0 1 5 5l-9.2 9.2a2.1 2.1 0 0 1-3-3l9.2-9.2a4 4 0 0 1-2-2ZM6.3 6.3l3.4 3.4" />,
    key: (
      <>
        <circle cx="7.5" cy="15.5" r="3.5" />
        <path d="m10 13 8-8 3 3-2 2-2-2-2 2 2 2-3 3" />
      </>
    ),
    logs: <path d="M4 6h16M4 12h16M4 18h10" />,
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="m5 13 4 4L19 7" />,
    x: <path d="M18 6 6 18M6 6l12 12" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    chevronRight: <path d="m9 6 6 6-6 6" />,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
    code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />,
    doc: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
      </>
    ),
    db: (
      <>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </>
    ),
    terminal: <path d="m5 8 4 4-4 4M13 16h6" />,
    retry: <path d="M21 12a9 9 0 1 1-2.6-6.4M21 3v6h-6" />,
    stop: <rect x="6" y="6" width="12" height="12" rx="2" />,
    alert: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v5M12 16h.01" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

export function Logo({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="8" fill="#141413" />
      <circle cx="16" cy="16" r="7" fill="none" stroke="#c96442" strokeWidth="2" />
      <circle cx="16" cy="16" r="2.4" fill="#c96442" />
    </svg>
  )
}

const NAV = [
  { href: "/", label: "Overview", icon: "activity" },
  { href: "/runs", label: "Runs", icon: "runs", badge: "3" },
  { href: "/tools", label: "Tools", icon: "tools" },
  { href: "/logs", label: "Logs", icon: "logs" },
]

export function Status({ value }) {
  const map = {
    succeeded: ["bg-[#e6f4ea]", "text-[#177c31]", "#1e9f3c"],
    running: ["bg-[#f7ece7]", "text-[#b0522f]", "#c96442"],
    failed: ["bg-[#fceaef]", "text-[#a81a44]", "#cf2055"],
    queued: ["bg-[#f0efec]", "text-[#5e5d59]", "#87867f"],
    cancelled: ["bg-[#f5f1e0]", "text-[#7a6614]", "#98801f"],
  }
  const [bg, fg, dot] = map[value] ?? map.queued
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[11px] font-medium ${bg} ${fg}`}>
      <span
        className={`h-[6px] w-[6px] rounded-full ${value === "running" ? "pulse-dot" : ""}`}
        style={{ background: dot }}
      />
      {value}
    </span>
  )
}

export function Shell({ active, title, subtitle, actions, children }) {
  const [open, setOpen] = useState(true)
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <aside
        className={`hidden shrink-0 flex-col border-r border-[var(--color-line)] bg-[var(--color-page)] transition-all md:flex ${
          open ? "w-[220px]" : "w-14"
        }`}
      >
        <button
          onClick={() => setOpen((o) => !o)}
          className={`flex items-center gap-2 px-3 py-3 ${open ? "" : "justify-center"}`}
        >
          <Logo />
          {open && <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Relay</span>}
        </button>

        <nav className={`flex-1 ${open ? "px-2" : "flex flex-col items-center gap-1 px-0"}`}>
          {NAV.map((n) => {
            const on = active === n.href
            return (
              <a
                key={n.href}
                href={n.href}
                title={n.label}
                className={
                  open
                    ? `mb-[2px] flex items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-[13.5px] transition-colors ${
                        on
                          ? "bg-[var(--color-hover)] font-medium text-[var(--color-ink)]"
                          : "text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"
                      }`
                    : `grid h-9 w-9 place-items-center rounded-lg ${
                        on ? "bg-[var(--color-hover)] text-[var(--color-ink)]" : "text-[var(--color-faint)] hover:bg-[var(--color-sunk)]"
                      }`
                }
              >
                <Icon name={n.icon} className="h-[17px] w-[17px] shrink-0 text-[var(--color-faint)]" />
                {open && (
                  <>
                    <span className="flex-1">{n.label}</span>
                    {n.badge && (
                      <span className="rounded-full bg-[var(--color-clay-soft)] px-1.5 text-[10.5px] font-medium text-[var(--color-clay-2)]">
                        {n.badge}
                      </span>
                    )}
                  </>
                )}
              </a>
            )
          })}
        </nav>

        <div className={`border-t border-[var(--color-line)] p-2 ${open ? "" : "flex justify-center"}`}>
          <div className={`flex items-center gap-2.5 rounded-lg px-1.5 py-1.5 ${open ? "" : "px-0"}`}>
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#629987] text-[11px] font-medium text-white">
              OA
            </span>
            {open && (
              <span className="min-w-0">
                <span className="block truncate text-[12.5px] font-medium leading-tight">Orbit AI</span>
                <span className="block truncate text-[10.5px] leading-tight text-[var(--color-faint)]">
                  Production
                </span>
              </span>
            )}
          </div>
        </div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center justify-between border-b border-[var(--color-line)] px-5">
          <div className="min-w-0">
            <h1 className="truncate font-serif text-[17px] font-medium tracking-[-0.01em]">{title}</h1>
            {subtitle && <p className="truncate text-[11.5px] text-[var(--color-faint)]">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-2">{actions}</div>
        </header>
        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">{children}</div>
      </main>
    </div>
  )
}

export function Button({ children, variant = "primary", className = "", href, ...rest }) {
  const styles = {
    primary: "bg-[var(--color-clay)] text-white hover:bg-[var(--color-clay-2)]",
    dark: "bg-[var(--color-ink)] text-white hover:bg-black",
    outline: "border border-[var(--color-line)] bg-white text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]",
    ghost: "text-[var(--color-muted)] hover:bg-[var(--color-sunk)]",
  }
  const Tag = href ? "a" : "button"
  return (
    <Tag
      href={href}
      className={`inline-flex h-8 items-center gap-1.5 rounded-lg px-3 text-[12.5px] font-medium transition-colors ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function Card({ children, className = "" }) {
  return <div className={`rounded-xl border border-[var(--color-line)] bg-white ${className}`}>{children}</div>
}
