import Link from "next/link"

export function Icon({ name, className = "h-4 w-4", style }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    check: <path d="m5 13 4 4L19 7" />,
    building: (
      <>
        <path d="M4 21V6l8-3 8 3v15" />
        <path d="M9 21v-5h6v5M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01" />
      </>
    ),
    team: (
      <>
        <circle cx="9" cy="8" r="3.4" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 5.2a3.4 3.4 0 0 1 0 6.6M18 14.4a6.5 6.5 0 0 1 3.5 5.6" />
      </>
    ),
    plug: <path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-10 0V8ZM12 16v6" />,
    sliders: <path d="M4 8h16M4 16h16M9 5v6M15 13v6" />,
    rocket: <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M9 13l6-6a6 6 0 0 1 6-6 6 6 0 0 1-6 6l-6 6-3-3ZM14 8h.01" />,
    db: (
      <>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </>
    ),
    card: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </>
    ),
    flow: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <path d="M10 6.5h5A2.5 2.5 0 0 1 17.5 9v5" />
      </>
    ),
    chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    file: (
      <>
        <path d="M6 2h8l4 4v16H6z" />
        <path d="M14 2v4h4" />
      </>
    ),
    webhook: <path d="M8 10a4 4 0 1 1 5 4l-2.5 4M15 15a4 4 0 1 1-3 6H8M9 15a4 4 0 1 1 7-2" />,
    back: <path d="M19 12H5m0 0 6 6m-6-6 6-6" />,
    next: <path d="M5 12h14m0 0-6-6m6 6-6 6" />,
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
        <path d="M10.3 21a2 2 0 0 0 3.4 0" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" />
      </>
    ),
    moon: <path d="M20 15A8 8 0 1 1 9 4a6 6 0 0 0 11 11Z" />,
    monitor: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

// label, sub, icon, slug, href
export const STEPS = [
  ["Create workspace", "Name & region", "building", "workspace", "/setup/workspace"],
  ["Invite your team", "3 members added", "team", "team", "/setup/team"],
  ["Connect data", "Pick a source", "plug", "connect", "/"],
  ["Preferences", "Defaults & alerts", "sliders", "preferences", "/setup/preferences"],
  ["Launch", "You're all set", "rocket", "launch", "/setup/launch"],
]

export const SOURCES = [
  { id: "pg", name: "PostgreSQL", desc: "Sync tables directly", icon: "db", tone: "#629987" },
  { id: "stripe", name: "Stripe", desc: "Payments & subscriptions", icon: "card", tone: "#827dbd" },
  { id: "segment", name: "Segment", desc: "Event streams", icon: "flow", tone: "#c96442" },
  { id: "bq", name: "BigQuery", desc: "Warehouse tables", icon: "chart", tone: "#98801f" },
  { id: "csv", name: "CSV upload", desc: "One-off import", icon: "file", tone: "#c5621b" },
  { id: "webhook", name: "Webhook", desc: "Push custom events", icon: "webhook", tone: "#5e5d59" },
]

export function StepPanel({ current }) {
  return (
    <aside className="hidden w-[336px] shrink-0 flex-col bg-[#141413] px-7 py-7 text-white lg:flex">
      <Link href="/" className="flex items-center gap-2">
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
          <rect width="32" height="32" rx="8" fill="#1f1e1d" />
          <path d="M16 6l3.4 6.9 7.6 1.1-5.5 5.3 1.3 7.5L16 24.8 9.2 26.8l1.3-7.5L5 14l7.6-1.1L16 6Z" fill="none" stroke="#c96442" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
        <span className="font-serif text-[19px] font-medium tracking-[-0.01em]">Pilot</span>
      </Link>

      <h1 className="mt-9 font-serif text-[26px] font-medium leading-[1.2] tracking-[-0.01em]">
        Let's get your<br />workspace ready
      </h1>
      <p className="mt-2 text-[13px] leading-[1.6] text-white/55">A few quick steps and you'll be live. You can change any of this later.</p>

      <nav className="mt-8 flex-1">
        {STEPS.map(([label, sub, icon, slug, href], i) => {
          const done = i < current
          const isCurrent = i === current
          return (
            <Link key={label} href={href} className="flex gap-3.5 group">
              <div className="flex flex-col items-center">
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${done ? "bg-[var(--color-clay)] text-white" : isCurrent ? "bg-white/10 text-white ring-2 ring-[var(--color-clay)]" : "bg-white/8 text-white/40 group-hover:bg-white/15"}`}>
                  {done ? <Icon name="check" className="h-4 w-4" /> : <Icon name={icon} className="h-4 w-4" />}
                </span>
                {i < STEPS.length - 1 && <span className={`my-1 w-[2px] flex-1 rounded-full ${done ? "bg-[var(--color-clay)]/60" : "bg-white/10"}`} />}
              </div>
              <div className={`pb-6 pt-1 ${i === STEPS.length - 1 ? "pb-0" : ""}`}>
                <p className={`text-[13.5px] font-medium ${isCurrent ? "text-white" : done ? "text-white/80" : "text-white/45 group-hover:text-white/70"}`}>{label}</p>
                <p className={`text-[11.5px] ${isCurrent ? "text-[var(--color-clay)]" : "text-white/35"}`}>{sub}</p>
              </div>
            </Link>
          )
        })}
      </nav>

      <div className="flex items-center gap-2 text-[11.5px] text-white/40">
        <Icon name="lock" className="h-3.5 w-3.5" /> Your data is encrypted in transit and at rest.
      </div>
    </aside>
  )
}
