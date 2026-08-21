"use client"

export function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    home: <path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />,
    key: (
      <>
        <circle cx="7.5" cy="15.5" r="3.5" />
        <path d="m10 13 8-8 3 3-2 2-2-2-2 2 2 2-3 3" />
      </>
    ),
    chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    card: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </>
    ),
    gauge: <path d="M12 21a9 9 0 1 1 9-9M12 12l5-3" />,
    plus: <path d="M12 5v14M5 12h14" />,
    copy: (
      <>
        <rect x="9" y="9" width="12" height="12" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
      </>
    ),
    check: <path d="m5 13 4 4L19 7" />,
    eye: (
      <>
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    eyeOff: <path d="M10.6 6.2A9.9 9.9 0 0 1 12 6c6.4 0 10 6 10 6a17 17 0 0 1-3 3.6M6.6 6.7A17 17 0 0 0 2 12s3.6 6 10 6a10 10 0 0 0 4.2-.9M2 2l20 20M9.9 9.9a3 3 0 0 0 4.2 4.2" />,
    trash: <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6" />,
    warn: <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01" />,
    book: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />,
    chevronRight: <path d="m9 6 6 6-6 6" />,
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7Z" />,
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
      <path d="M16 8.5 22 12v8l-6 3.5L10 20v-8l6-3.5Zm0 3.1L12.6 13.6v4.8L16 20.4l3.4-2V13.6L16 11.6Z" fill="#c96442" />
    </svg>
  )
}

const NAV = [
  { href: "/", label: "Overview", icon: "home" },
  { href: "/keys", label: "API keys", icon: "key" },
  { href: "/limits", label: "Rate limits", icon: "gauge" },
  { href: "/billing", label: "Billing", icon: "card" },
]

export function Shell({ active, title, subtitle, actions, children }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <aside className="hidden w-[212px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
        <a href="/" className="flex items-center gap-2 px-3.5 py-3.5">
          <Logo />
          <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Kestrel</span>
        </a>

        <div className="px-2.5 pb-3">
          <button className="flex w-full items-center gap-2 rounded-lg border border-[var(--color-line)] bg-white px-2.5 py-1.5 text-left">
            <span className="grid h-5 w-5 place-items-center rounded bg-[var(--color-mineral)] text-[9px] font-medium text-white">
              NW
            </span>
            <span className="min-w-0 flex-1 truncate text-[12.5px]">Northwind</span>
            <Icon name="chevronRight" className="h-3 w-3 rotate-90 text-[var(--color-faint)]" />
          </button>
        </div>

        <nav className="flex-1 px-2">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`mb-[2px] flex items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-[13.5px] transition-colors ${
                active === n.href
                  ? "bg-[var(--color-hover)] font-medium text-[var(--color-ink)]"
                  : "text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"
              }`}
            >
              <Icon name={n.icon} className="h-[17px] w-[17px] text-[var(--color-faint)]" />
              {n.label}
            </a>
          ))}
        </nav>

        <div className="p-2.5">
          <a
            href="#"
            className="flex items-center gap-2 rounded-lg bg-[var(--color-ivory)] px-2.5 py-2 text-[12.5px] text-[var(--color-ink-2)] hover:bg-[var(--color-hover)]"
          >
            <Icon name="book" className="h-4 w-4 text-[var(--color-clay)]" />
            Documentation
          </a>
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
        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto max-w-[900px]">{children}</div>
        </div>
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
