"use client"

export function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    play: <path d="m7 4 12 8-12 8Z" />,
    split: <path d="M12 3v18M3 7h5M3 12h5M3 17h5M16 7h5M16 12h5M16 17h5" />,
    compare: (
      <>
        <rect x="3" y="4" width="7" height="16" rx="1.5" />
        <rect x="14" y="4" width="7" height="16" rx="1.5" />
      </>
    ),
    chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="m5 13 4 4L19 7" />,
    copy: (
      <>
        <rect x="9" y="9" width="12" height="12" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
      </>
    ),
    reset: <path d="M21 12a9 9 0 1 1-2.6-6.4M21 3v6h-6" />,
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7Z" />,
    coin: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15 9.5a3 3 0 0 0-3-1.5c-1.7 0-3 .9-3 2s1.3 2 3 2 3 .9 3 2-1.3 2-3 2a3 3 0 0 1-3-1.5M12 6v12" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    chevronDown: <path d="m6 9 6 6 6-6" />,
    star: <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8Z" />,
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
      <path d="M9 22V10h3l4 7 4-7h3v12h-2.8v-7.4L16.8 20h-1.6l-3.4-5.4V22H9Z" fill="#c96442" />
    </svg>
  )
}

const NAV = [
  { href: "/", label: "Playground", icon: "split" },
  { href: "/compare", label: "Comparisons", icon: "compare" },
  { href: "/usage", label: "Usage", icon: "chart" },
]

export function TopBar({ active, actions }) {
  return (
    <header className="flex h-[56px] shrink-0 items-center gap-5 border-b border-[var(--color-line)] px-5">
      <a href="/" className="flex shrink-0 items-center gap-2">
        <Logo />
        <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Meridian</span>
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
      className={`inline-flex h-8 items-center gap-1.5 rounded-lg px-3 text-[12.5px] font-medium transition-colors disabled:opacity-40 ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function Card({ children, className = "" }) {
  return <div className={`rounded-xl border border-[var(--color-line)] bg-white ${className}`}>{children}</div>
}

export const MODELS = [
  { id: "meridian-4-opus", short: "Opus", tone: "#c96442", inCost: 15, outCost: 75, ctx: "200k" },
  { id: "meridian-4-sonnet", short: "Sonnet", tone: "#629987", inCost: 3, outCost: 15, ctx: "200k" },
  { id: "meridian-4-haiku", short: "Haiku", tone: "#827dbd", inCost: 0.8, outCost: 4, ctx: "200k" },
  { id: "meridian-3-sonnet", short: "3 Sonnet", tone: "#98801f", inCost: 3, outCost: 15, ctx: "180k" },
]
