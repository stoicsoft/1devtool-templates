"use client"

import { useState } from "react"

/* ---------------------------------------------------------------- icons */

export function Icon({ name, className = "h-4 w-4" }) {
  const s = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  }
  const paths = {
    plus: <path d="M12 5v14M5 12h14" />,
    chat: <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />,
    folder: <path d="M4 20a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2Z" />,
    sparkle: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />,
    artifact: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 9v11" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
    send: <path d="M4 12h14m0 0-5-5m5 5-5 5" />,
    attach: <path d="M21.4 11.05 12.3 20.2a5.5 5.5 0 0 1-7.8-7.8l9.2-9.15a3.67 3.67 0 1 1 5.2 5.2l-9.2 9.15a1.83 1.83 0 0 1-2.6-2.6l8.5-8.45" />,
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
      </>
    ),
    copy: (
      <>
        <rect x="9" y="9" width="12" height="12" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
      </>
    ),
    refresh: <path d="M21 12a9 9 0 1 1-2.6-6.4M21 3v6h-6" />,
    thumbUp: <path d="M7 21h9.3a2 2 0 0 0 2-1.7l1.3-8A2 2 0 0 0 17.6 9H14l.6-3.9a1.9 1.9 0 0 0-3.5-1.4L7 9M7 21V9M7 21H4V9h3" />,
    check: <path d="m5 13 4 4L19 7" />,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    chevronRight: <path d="m9 6 6 6-6 6" />,
    code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />,
    doc: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M9 15h6M9 11h3" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
      </>
    ),
    dots: (
      <>
        <circle cx="5" cy="12" r="1.3" fill="currentColor" />
        <circle cx="12" cy="12" r="1.3" fill="currentColor" />
        <circle cx="19" cy="12" r="1.3" fill="currentColor" />
      </>
    ),
    panel: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M9 4v16" />
      </>
    ),
    star: <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8Z" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {paths[name] ?? null}
    </svg>
  )
}

/* --------------------------------------------------------------- pieces */

export function Logo({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="8" fill="#141413" />
      <path
        d="M11 21.5 15.1 10h2l4.1 11.5h-2.2l-.95-2.8h-4.05l-.95 2.8H11Zm3.6-4.6h2.9L16.05 12.6 14.6 16.9Z"
        fill="#c96442"
      />
    </svg>
  )
}

export function Avatar({ initials, tone = "#141413", size = 26 }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white"
      style={{ width: size, height: size, background: tone, fontSize: size * 0.42 }}
    >
      {initials}
    </span>
  )
}

export function Pill({ children, tone = "neutral" }) {
  const tones = {
    neutral: "bg-[#f0efec] text-[#5e5d59]",
    clay: "bg-[#f7ece7] text-[#b0522f]",
    mineral: "bg-[#e6efec] text-[#3f6f60]",
    plum: "bg-[#eceaf5] text-[#5d58a0]",
    olive: "bg-[#f5f1e0] text-[#7a6614]",
  }
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-[3px] text-[11px] font-medium ${tones[tone]}`}>
      {children}
    </span>
  )
}

/* -------------------------------------------------------------- sidebar */

const nav = [
  { href: "/", label: "New chat", icon: "plus" },
  { href: "/chats", label: "Chats", icon: "chat" },
  { href: "/projects", label: "Projects", icon: "folder" },
  { href: "/artifacts", label: "Artifacts", icon: "artifact" },
]

const recents = [
  { title: "Migration plan for the billing service", when: "2h" },
  { title: "Rewrite onboarding copy, warmer tone", when: "Yesterday" },
  { title: "Compare Postgres partitioning strategies", when: "Yesterday" },
  { title: "Summarize the Q3 research interviews", when: "Mon" },
  { title: "Draft changelog for 4.2 release", when: "Mon" },
  { title: "Why is p99 latency spiking at 14:00?", when: "Sun" },
]

export function Sidebar({ active = "/", collapsed = false, onToggle }) {
  if (collapsed) {
    return (
      <aside className="hidden w-14 shrink-0 flex-col items-center gap-1 border-r border-[var(--color-line)] bg-[var(--color-page)] py-3 md:flex">
        <button onClick={onToggle} className="mb-2 grid h-9 w-9 place-items-center rounded-lg" title="Expand sidebar">
          <Logo />
        </button>
        {nav.map((n) => (
          <a
            key={n.href}
            href={n.href}
            title={n.label}
            className={`grid h-9 w-9 place-items-center rounded-lg transition-colors ${
              active === n.href
                ? "bg-[var(--color-hover)] text-[var(--color-ink)]"
                : "text-[var(--color-faint)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]"
            }`}
          >
            <Icon name={n.icon} className="h-[18px] w-[18px]" />
          </a>
        ))}
        <div className="flex-1" />
        <Avatar initials="RK" size={28} />
      </aside>
    )
  }

  return (
    <aside className="hidden w-[248px] shrink-0 flex-col border-r border-[var(--color-line)] bg-[var(--color-page)] md:flex">
      <div className="flex items-center justify-between px-3 pt-3 pb-2">
        <a href="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-serif text-[19px] font-medium tracking-[-0.01em]">Atlas</span>
        </a>
        <button
          onClick={onToggle}
          className="grid h-7 w-7 place-items-center rounded-md text-[var(--color-faint)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]"
          title="Collapse sidebar"
        >
          <Icon name="panel" className="h-[17px] w-[17px]" />
        </button>
      </div>

      <nav className="px-2 pb-2">
        {nav.map((n) => (
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

      <div className="min-h-0 flex-1 overflow-y-auto px-2 scroll-thin">
        <p className="px-2.5 pt-3 pb-1.5 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">Recents</p>
        {recents.map((r) => (
          <a
            key={r.title}
            href="/"
            className="group mb-[1px] flex items-center gap-2 rounded-lg px-2.5 py-[6px] text-[13px] text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"
          >
            <span className="min-w-0 flex-1 truncate">{r.title}</span>
            <span className="shrink-0 text-[10.5px] text-[var(--color-faint)] opacity-0 group-hover:opacity-100">
              {r.when}
            </span>
          </a>
        ))}
      </div>

      <div className="border-t border-[var(--color-line)] p-2">
        <button className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left hover:bg-[var(--color-sunk)]">
          <Avatar initials="RK" tone="#629987" size={26} />
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[13px] font-medium leading-tight">Rina Kowalski</span>
            <span className="block truncate text-[11px] leading-tight text-[var(--color-faint)]">Team · Pro</span>
          </span>
          <Icon name="chevronDown" className="h-3.5 w-3.5 text-[var(--color-faint)]" />
        </button>
      </div>
    </aside>
  )
}

/* ---------------------------------------------------------------- shell */

export function Shell({ active, title, actions, children, pad = true }) {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active={active} collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[52px] shrink-0 items-center justify-between border-b border-[var(--color-line)] px-4">
          <h1 className="font-serif text-[17px] font-medium tracking-[-0.01em]">{title}</h1>
          <div className="flex items-center gap-2">{actions}</div>
        </header>
        <div className={`min-h-0 flex-1 overflow-y-auto scroll-thin ${pad ? "px-5 py-5" : ""}`}>{children}</div>
      </main>
    </div>
  )
}

export function Button({ children, variant = "primary", className = "", href, ...rest }) {
  const styles = {
    primary: "bg-[var(--color-clay)] text-white hover:bg-[var(--color-clay-2)]",
    dark: "bg-[var(--color-ink)] text-white hover:bg-[#000]",
    ghost: "text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]",
    outline: "border border-[var(--color-line)] bg-white text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]",
  }
  const cls = `inline-flex h-8 items-center gap-1.5 rounded-lg px-3 text-[12.5px] font-medium transition-colors ${styles[variant]} ${className}`
  const Tag = href ? "a" : "button"
  return (
    <Tag className={cls} href={href} {...rest}>
      {children}
    </Tag>
  )
}

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl border border-[var(--color-line)] bg-white ${className}`}>{children}</div>
  )
}
