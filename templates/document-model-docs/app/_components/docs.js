"use client"

import { useState } from "react"

export function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
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
    chevronRight: <path d="m9 6 6 6-6 6" />,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    external: <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />,
    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5M12 8h.01" />
      </>
    ),
    warn: <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

export function Mark({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="9" fill="#141413" />
      <path d="M9 9h5a7 7 0 0 1 0 14H9V9Zm2.9 2.7v8.6H14a4.3 4.3 0 0 0 0-8.6h-2.1Z" fill="#c96442" />
    </svg>
  )
}

export const SIDEBAR = [
  {
    group: "Getting started",
    items: [
      ["Introduction", "/"],
      ["Quickstart", "/"],
      ["Authentication", "/"],
      ["Rate limits", "/"],
    ],
  },
  {
    group: "Core concepts",
    items: [
      ["Messages", "/"],
      ["System prompts", "/"],
      ["Streaming", "/"],
      ["Token counting", "/"],
    ],
  },
  {
    group: "Capabilities",
    items: [
      ["Tool use", "/tool-use"],
      ["Structured output", "/"],
      ["Vision", "/"],
      ["Prompt caching", "/"],
    ],
  },
  {
    group: "Reference",
    items: [
      ["API reference", "/"],
      ["Models", "/"],
      ["Errors", "/"],
      ["Changelog", "/"],
    ],
  },
]

export function Shell({ current, children, toc }) {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState("")

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[rgba(240,238,230,0.9)] backdrop-blur-md">
        <div className="mx-auto flex h-[60px] max-w-[1280px] items-center gap-4 px-5">
          <button onClick={() => setOpen((o) => !o)} className="lg:hidden">
            <Icon name="menu" className="h-5 w-5" />
          </button>
          <a href="/" className="flex shrink-0 items-center gap-2.5">
            <Mark />
            <span className="font-serif text-[18px] font-medium tracking-[-0.012em]">Halcyon</span>
            <span className="rounded-full bg-[var(--color-ivory-3)] px-2 py-[2px] font-mono text-[10.5px] text-[var(--color-muted)]">
              docs
            </span>
          </a>

          <div className="relative ml-auto hidden sm:block">
            <Icon
              name="search"
              className="pointer-events-none absolute left-3 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-[var(--color-faint)]"
            />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search docs"
              className="h-9 w-[220px] rounded-full border border-[var(--color-line)] bg-white pl-9 pr-12 text-[13px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
            />
            <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded border border-[var(--color-line)] bg-[var(--color-ivory-2)] px-1.5 font-mono text-[10px] text-[var(--color-faint)]">
              /
            </kbd>
          </div>

          <nav className="hidden items-center gap-5 md:flex">
            {["API", "Cookbook", "Status"].map((n) => (
              <a key={n} href="#" className="text-[13.5px] text-[var(--color-muted)] hover:text-[var(--color-ink)]">
                {n}
              </a>
            ))}
          </nav>
          <a
            href="#"
            className="rounded-full bg-[var(--color-ink)] px-3.5 py-1.5 text-[13px] font-medium text-white hover:bg-black"
          >
            Console
          </a>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1280px] gap-8 px-5">
        <aside
          className={`${
            open ? "block" : "hidden"
          } w-[220px] shrink-0 py-8 lg:block`}
        >
          <div className="sticky top-[84px] max-h-[calc(100vh-110px)] overflow-y-auto scroll-thin pr-2">
            {SIDEBAR.map((g) => (
              <div key={g.group} className="mb-6">
                <p className="mb-2 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
                  {g.group.toUpperCase()}
                </p>
                <ul className="space-y-[1px] border-l border-[var(--color-line)]">
                  {g.items.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className={`-ml-px block border-l-2 py-[5px] pl-3 text-[13.5px] transition-colors ${
                          current === label
                            ? "border-[var(--color-clay)] font-medium text-[var(--color-ink)]"
                            : "border-transparent text-[var(--color-muted)] hover:border-[var(--color-line)] hover:text-[var(--color-ink)]"
                        }`}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        <main className="min-w-0 flex-1 py-10">{children}</main>

        {toc && (
          <aside className="hidden w-[180px] shrink-0 py-10 xl:block">
            <div className="sticky top-[84px]">
              <p className="mb-2.5 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">ON THIS PAGE</p>
              <ul className="space-y-1.5">
                {toc.map(([id, label]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="block text-[12.5px] leading-[1.45] text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}

export function Code({ code, lang = "python", tabs }) {
  const [tab, setTab] = useState(0)
  const [copied, setCopied] = useState(false)
  const body = tabs ? tabs[tab][1] : code
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
      <div className="flex items-center gap-1 border-b border-[var(--color-line)] bg-[var(--color-ivory-2)] px-2.5 py-1.5">
        {tabs ? (
          tabs.map(([label], i) => (
            <button
              key={label}
              onClick={() => setTab(i)}
              className={`rounded-md px-2.5 py-1 font-mono text-[11.5px] transition-colors ${
                tab === i ? "bg-white text-[var(--color-ink)]" : "text-[var(--color-faint)] hover:text-[var(--color-ink)]"
              }`}
            >
              {label}
            </button>
          ))
        ) : (
          <span className="px-1 font-mono text-[11.5px] text-[var(--color-faint)]">{lang}</span>
        )}
        <button
          onClick={() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 1400)
          }}
          className="ml-auto inline-flex items-center gap-1 px-2 py-1 text-[11.5px] text-[var(--color-faint)] hover:text-[var(--color-ink)]"
        >
          <Icon name={copied ? "check" : "copy"} className="h-3 w-3" />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="scroll-thin overflow-x-auto px-4 py-3.5 font-mono text-[12.5px] leading-[1.75] text-[var(--color-ink-3)]">
        {body}
      </pre>
    </div>
  )
}

export function Callout({ kind = "info", title, children }) {
  const map = {
    info: ["#629987", "#dfeae6", "info"],
    warn: ["#c5621b", "#fbeee3", "warn"],
  }
  const [tone, bg, icon] = map[kind]
  return (
    <div className="my-5 flex gap-3 rounded-xl border px-4 py-3.5" style={{ borderColor: `${tone}44`, background: bg }}>
      <Icon name={icon} className="mt-[2px] h-[17px] w-[17px] shrink-0" />
      <div>
        {title && <p className="text-[13.5px] font-medium">{title}</p>}
        <div className="text-[14px] leading-[1.7] text-[var(--color-ink-3)]">{children}</div>
      </div>
    </div>
  )
}
