"use client"

import { useState } from "react"

export function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    library: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />,
    play: <path d="m7 4 12 8-12 8Z" />,
    history: <path d="M3 12a9 9 0 1 0 3-6.7L3 8m0-5v5h5M12 7v5l3.5 2" />,
    tag: (
      <>
        <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8Z" />
        <circle cx="7" cy="7" r="1.2" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
    copy: (
      <>
        <rect x="9" y="9" width="12" height="12" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
      </>
    ),
    check: <path d="m5 13 4 4L19 7" />,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    chevronRight: <path d="m9 6 6 6-6 6" />,
    branch: (
      <>
        <circle cx="6" cy="5" r="2.4" />
        <circle cx="6" cy="19" r="2.4" />
        <circle cx="18" cy="12" r="2.4" />
        <path d="M6 7.4v9.2M8.4 5h4a3 3 0 0 1 3 3v1.6M8.4 19h4a3 3 0 0 0 3-3v-1.6" />
      </>
    ),
    star: <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8Z" />,
    edit: <path d="M11 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6M18.4 2.6a2 2 0 0 1 2.8 2.8L12 14.6l-4 1 1-4Z" />,
    trash: <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6" />,
    sliders: <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />,
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
      <path d="M10 9h5.5a4.5 4.5 0 0 1 0 9H13v5h-3V9Zm3 2.6v3.8h2.5a1.9 1.9 0 0 0 0-3.8H13Z" fill="#c96442" />
    </svg>
  )
}

const NAV = [
  { href: "/", label: "Library", icon: "library" },
  { href: "/editor", label: "Editor", icon: "edit" },
  { href: "/runs", label: "Test runs", icon: "play" },
]

export function Shell({ active, title, subtitle, actions, children, wide }) {
  const [open, setOpen] = useState(true)
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <aside
        className={`hidden shrink-0 flex-col border-r border-[var(--color-line)] transition-all md:flex ${
          open ? "w-[212px]" : "w-14"
        }`}
      >
        <button onClick={() => setOpen((o) => !o)} className={`flex items-center gap-2 px-3 py-3 ${open ? "" : "justify-center"}`}>
          <Logo />
          {open && <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Prose</span>}
        </button>
        <nav className={open ? "flex-1 px-2" : "flex flex-1 flex-col items-center gap-1"}>
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
                        on ? "bg-[var(--color-hover)] font-medium" : "text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"
                      }`
                    : `grid h-9 w-9 place-items-center rounded-lg ${
                        on ? "bg-[var(--color-hover)]" : "text-[var(--color-faint)] hover:bg-[var(--color-sunk)]"
                      }`
                }
              >
                <Icon name={n.icon} className="h-[17px] w-[17px] text-[var(--color-faint)]" />
                {open && n.label}
              </a>
            )
          })}
        </nav>
        <div className="border-t border-[var(--color-line)] p-2">
          <div className="flex items-center gap-2.5 px-1.5 py-1.5">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#827dbd] text-[11px] font-medium text-white">
              TS
            </span>
            {open && (
              <span className="min-w-0">
                <span className="block truncate text-[12.5px] font-medium leading-tight">Theo Sandoval</span>
                <span className="block truncate text-[10.5px] leading-tight text-[var(--color-faint)]">Editor</span>
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
        <div className={`scroll-thin min-h-0 flex-1 overflow-y-auto ${wide ? "" : "px-5 py-5"}`}>{children}</div>
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

export function Tag({ children, tone = "#87867f" }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-2 py-[2px] text-[10.5px] font-medium"
      style={{ background: `${tone}1a`, color: tone }}
    >
      {children}
    </span>
  )
}
