import Link from "next/link"

export function Icon({ name, className = "h-4 w-4", style }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    doc: (
      <>
        <path d="M6 2h8l4 4v16H6z" />
        <path d="M14 2v4h4M9 12h6M9 16h6" />
      </>
    ),
    folder: <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />,
    hash: <path d="M9 4 7 20M17 4l-2 16M5 9h14M4 15h14" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.2-3.2" />
      </>
    ),
    check: <path d="m5 13 4 4L19 7" />,
    back: <path d="M19 12H5m0 0 6 6m-6-6 6-6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    git: (
      <>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="8" r="2.5" />
        <path d="M6 8.5v7M18 10.5c0 4-4 3-9 4" />
      </>
    ),
    link: <path d="M9 15l6-6M10 6l1-1a4 4 0 0 1 6 6l-1 1M14 18l-1 1a4 4 0 0 1-6-6l1-1" />,
    edit: <path d="M4 20h4L18 10l-4-4L4 16v4ZM13 5l4 4" />,
    share: (
      <>
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="m8.2 10.8 7.6-4.6M8.2 13.2l7.6 4.6" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

export const STATUS = {
  Accepted: { bg: "#e6f4ea", fg: "#177c31" },
  Draft: { bg: "#f0efec", fg: "#5e5d59" },
  "In review": { bg: "#eceaf5", fg: "#5b569b" },
}

export const RFCS = [
  { id: "016", code: "RFC-016", title: "Short-lived auth tokens", status: "Accepted", author: "J. Park", updated: "Jul 2, 2026", group: "Platform" },
  { id: "017", code: "RFC-017", title: "Token-bucket rate limiting", status: "Accepted", author: "R. Okoro", updated: "Jul 28, 2026", group: "Platform" },
  { id: "018", code: "RFC-018", title: "Unified event ingestion pipeline", status: "Accepted", author: "Rina Kapoor", updated: "Aug 14, 2026", group: "Platform" },
  { id: "019", code: "RFC-019", title: "Multi-region failover", status: "Draft", author: "A. Singh", updated: "Aug 18, 2026", group: "Platform" },
  { id: "014", code: "RFC-014", title: "Sharing & permission model", status: "Accepted", author: "M. Diaz", updated: "Jun 11, 2026", group: "Product" },
  { id: "015", code: "RFC-015", title: "Audit log retention", status: "In review", author: "L. Chen", updated: "Aug 6, 2026", group: "Product" },
]

export const TOC = ["Summary", "Motivation", "Design", "Decision matrix", "Rollout plan", "Open questions"]

export function findRfc(id) {
  return RFCS.find((r) => r.id === id) || RFCS.find((r) => r.id === "018")
}

export function Tree({ activeId }) {
  const groups = [...new Set(RFCS.map((r) => r.group))]
  return (
    <aside className="hidden w-[236px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
      <Link href="/" className="flex items-center gap-2 px-4 py-3.5">
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
          <rect width="32" height="32" rx="8" fill="#141413" />
          <path d="M10 6h8l5 5v15H10z" fill="none" stroke="#c96442" strokeWidth="2" strokeLinejoin="round" />
          <path d="M18 6v5h5M13 16h6M13 20h6" fill="none" stroke="#629987" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="font-serif text-[17px] font-medium tracking-[-0.01em]">Foundry Docs</span>
      </Link>
      <div className="px-3 pb-2">
        <div className="flex items-center gap-2 rounded-lg border border-[var(--color-line)] bg-white px-2.5 py-1.5">
          <Icon name="search" className="h-3.5 w-3.5 text-[var(--color-faint)]" />
          <span className="text-[12px] text-[var(--color-faint)]">Search RFCs…</span>
          <span className="ml-auto rounded border border-[var(--color-line)] px-1 font-mono text-[9.5px] text-[var(--color-faint)]">⌘K</span>
        </div>
      </div>
      <nav className="scroll-thin min-h-0 flex-1 overflow-y-auto px-2 pb-3">
        {groups.map((g) => (
          <div key={g} className="mb-3">
            <p className="flex items-center gap-1.5 px-2 py-1 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
              <Icon name="folder" className="h-3.5 w-3.5" /> {g.toUpperCase()}
            </p>
            {RFCS.filter((r) => r.group === g).map((r) => (
              <Link key={r.id} href={`/rfc/${r.id}`} className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-[6px] text-left text-[12.5px] transition-colors ${activeId === r.id ? "bg-[var(--color-hover)] font-medium" : "text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"}`}>
                <Icon name="doc" className="h-[15px] w-[15px] text-[var(--color-faint)]" />
                <span className="truncate">{r.code} · {r.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  )
}
