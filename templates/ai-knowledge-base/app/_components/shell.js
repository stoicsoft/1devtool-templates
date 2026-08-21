"use client"

export function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    book: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />,
    source: (
      <>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
    chunk: (
      <>
        <rect x="3" y="4" width="18" height="5" rx="1.5" />
        <rect x="3" y="12" width="18" height="8" rx="1.5" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="m5 13 4 4L19 7" />,
    upload: <path d="M12 16V4m0 0L7 9m5-5 5 5M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />,
    refresh: <path d="M21 12a9 9 0 1 1-2.6-6.4M21 3v6h-6" />,
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
    slack: <path d="M9 3a2 2 0 1 0 0 4h2V5a2 2 0 0 0-2-2ZM15 21a2 2 0 1 0 0-4h-2v2a2 2 0 0 0 2 2ZM3 15a2 2 0 1 0 4 0v-2H5a2 2 0 0 0-2 2ZM21 9a2 2 0 1 0-4 0v2h2a2 2 0 0 0 2-2ZM9 21a2 2 0 0 0 2-2v-6H9a2 2 0 0 0 0 4M15 3a2 2 0 0 0-2 2v6h2a2 2 0 0 0 0-4" />,
    github: <path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.5 2.1 5.5 2.4 5.5 2.4a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 8.8c0 4.7 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3V21" />,
    chevronRight: <path d="m9 6 6 6-6 6" />,
    spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />,
    warn: <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01" />,
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
      <path d="M10 9h4.5a4 4 0 0 1 2.8 6.9A4.2 4.2 0 0 1 15.6 23H10V9Zm2.9 2.5v3h1.5a1.5 1.5 0 0 0 0-3h-1.5Zm0 5.4v3.6h2.2a1.8 1.8 0 0 0 0-3.6h-2.2Z" fill="#c96442" />
    </svg>
  )
}

const NAV = [
  { href: "/", label: "Sources", icon: "source" },
  { href: "/chunks", label: "Chunks", icon: "chunk" },
  { href: "/retrieval", label: "Retrieval", icon: "search" },
]

export function Shell({ active, title, subtitle, actions, children }) {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <header className="flex h-[56px] shrink-0 items-center gap-5 border-b border-[var(--color-line)] px-5">
        <a href="/" className="flex shrink-0 items-center gap-2">
          <Logo />
          <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Bramble</span>
        </a>
        <nav className="flex items-center gap-0.5">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`rounded-lg px-2.5 py-1.5 text-[13px] transition-colors ${
                active === n.href
                  ? "bg-[var(--color-hover)] font-medium text-[var(--color-ink)]"
                  : "text-[var(--color-muted)] hover:bg-[var(--color-sunk)]"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">{actions}</div>
      </header>

      <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-6">
        <div className="mx-auto max-w-[1040px]">
          {title && (
            <div className="mb-5">
              <h1 className="font-serif text-[26px] font-medium tracking-[-0.015em]">{title}</h1>
              {subtitle && <p className="mt-1 text-[13.5px] text-[var(--color-muted)]">{subtitle}</p>}
            </div>
          )}
          {children}
        </div>
      </div>
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
