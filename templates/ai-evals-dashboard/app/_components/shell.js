"use client"

export function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    gauge: <path d="M12 21a9 9 0 1 1 9-9M12 12l5-3" />,
    suite: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9h10M7 13h6" />
      </>
    ),
    flask: <path d="M9 3h6M10 3v6.5L4.8 18A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-3L14 9.5V3M7.5 15h9" />,
    trend: <path d="M22 7 13.5 15.5 8.5 10.5 2 17M22 7h-6M22 7v6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="m5 13 4 4L19 7" />,
    x: <path d="M18 6 6 18M6 6l12 12" />,
    warn: <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01" />,
    chevronRight: <path d="m9 6 6 6-6 6" />,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    filter: <path d="M3 4h18l-7 8v7l-4 2v-9Z" />,
    play: <path d="m7 4 12 8-12 8Z" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
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
      <path d="M8 22 13 9h2.4l5 13h-2.9l-1-2.9h-4.8L10.8 22H8Zm3.6-5.3h3.4l-1.7-4.9-1.7 4.9Z" fill="#c96442" />
      <circle cx="23" cy="10" r="2.4" fill="#629987" />
    </svg>
  )
}

const NAV = [
  { href: "/", label: "Scorecard", icon: "gauge" },
  { href: "/suites", label: "Suites", icon: "suite" },
  { href: "/regressions", label: "Regressions", icon: "trend", badge: "4" },
]

export function TopBar({ active, actions }) {
  return (
    <header className="flex h-[56px] shrink-0 items-center gap-5 border-b border-[var(--color-line)] px-5">
      <a href="/" className="flex shrink-0 items-center gap-2">
        <Logo />
        <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Assay</span>
      </a>
      <nav className="flex items-center gap-0.5">
        {NAV.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] transition-colors ${
              active === n.href
                ? "bg-[var(--color-hover)] font-medium text-[var(--color-ink)]"
                : "text-[var(--color-muted)] hover:bg-[var(--color-sunk)]"
            }`}
          >
            {n.label}
            {n.badge && (
              <span className="rounded-full bg-[var(--color-berry-soft)] px-1.5 text-[10px] font-medium text-[#a81a44]">
                {n.badge}
              </span>
            )}
          </a>
        ))}
      </nav>
      <div className="ml-auto flex items-center gap-2">{actions}</div>
    </header>
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

export function scoreTone(v) {
  if (v >= 0.9) return "#1e9f3c"
  if (v >= 0.8) return "#98801f"
  if (v >= 0.7) return "#c5621b"
  return "#cf2055"
}
