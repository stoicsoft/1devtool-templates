export function Icon({ name, className = "h-4 w-4", style }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    board: <path d="M4 4h6v16H4zM14 4h6v10h-6z" />,
    inbox: <path d="M4 13h4l2 3h4l2-3h4M4 13 6 5h12l2 8v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Z" />,
    stack: <path d="M12 3 3 8l9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" />,
    map: <path d="m9 4-6 2v14l6-2 6 2 6-2V4l-6 2-6-2ZM9 4v14M15 6v14" />,
    team: (
      <>
        <circle cx="9" cy="8" r="3.4" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 5.2a3.4 3.4 0 0 1 0 6.6M18 14.4a6.5 6.5 0 0 1 3.5 5.6" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.2-3.2" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    down: <path d="m6 9 6 6 6-6" />,
    back: <path d="M19 12H5m0 0 6 6m-6-6 6-6" />,
    filter: <path d="M3 5h18l-7 8v5l-4 2v-7L3 5Z" />,
    comment: <path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12Z" />,
    check: <path d="M9 11l3 3 8-8M4 13h4" />,
    check2: <path d="m5 13 4 4L19 7" />,
    dots: <path d="M5 12h.01M12 12h.01M19 12h.01" />,
    branch: (
      <>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="8" r="2.5" />
        <path d="M6 8.5v7M18 10.5c0 4-4 3-9 4" />
      </>
    ),
    flag: <path d="M5 21V4M5 4h13l-2.5 4L18 12H5" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

export function Avatar({ n, c, size = 22 }) {
  return <span className="grid shrink-0 place-items-center rounded-full font-semibold text-white" style={{ background: c, height: size, width: size, fontSize: size * 0.42 }}>{n}</span>
}

export const PRIO = { urgent: "#cf2055", high: "#c5621b", medium: "#98801f", low: "#87867f" }
export const PRIO_LABEL = { urgent: "Urgent", high: "High", medium: "Medium", low: "Low" }
export const LABELS = { Bug: "#cf2055", Feature: "#629987", Design: "#827dbd", Infra: "#98801f", Docs: "#87867f", API: "#c96442" }
export const WHO = { EV: ["Elena Voss", "#827dbd"], RK: ["Rahul Khan", "#629987"], JP: ["Jordan Park", "#c96442"], MD: ["Mara Díaz", "#cf2055"], LC: ["Lin Chen", "#98801f"], AS: ["Amir Shah", "#827dbd"] }

export const COLUMNS = [
  { name: "Backlog", dot: "#87867f", cards: [
    { key: "LP-341", title: "Rework empty states across the app", prio: "low", labels: ["Design"], who: ["EV", "#827dbd"] },
    { key: "LP-338", title: "Investigate slow cold starts on EU region", prio: "medium", labels: ["Infra"], who: ["RK", "#629987"] },
    { key: "LP-336", title: "Add keyboard shortcuts help modal", prio: "low", labels: ["Feature"], who: ["JP", "#c96442"] },
  ] },
  { name: "To do", dot: "#c5621b", cards: [
    { key: "LP-330", title: "SSO login fails for Okta group mapping", prio: "urgent", labels: ["Bug", "API"], who: ["MD", "#cf2055"], sub: [0, 3] },
    { key: "LP-329", title: "Bulk export to CSV for reports", prio: "high", labels: ["Feature"], who: ["LC", "#98801f"] },
    { key: "LP-327", title: "Document webhook retry semantics", prio: "low", labels: ["Docs"], who: ["AS", "#827dbd"] },
  ] },
  { name: "In progress", dot: "#c96442", cards: [
    { key: "LP-318", title: "Rebuild the settings navigation", prio: "high", labels: ["Design", "Feature"], who: ["EV", "#827dbd"], sub: [4, 6], branch: true },
    { key: "LP-322", title: "Rate-limit the public search endpoint", prio: "urgent", labels: ["Infra", "API"], who: ["RK", "#629987"], sub: [2, 4], branch: true },
  ] },
  { name: "In review", dot: "#827dbd", cards: [
    { key: "LP-311", title: "Fix timezone drift in digest scheduler", prio: "high", labels: ["Bug"], who: ["JP", "#c96442"], comments: 5, branch: true },
    { key: "LP-309", title: "Onboarding wizard: connect-data step", prio: "medium", labels: ["Feature"], who: ["MD", "#cf2055"], comments: 2, branch: true },
  ] },
  { name: "Done", dot: "#1e9f3c", cards: [
    { key: "LP-301", title: "Add faithfulness score to RAG answers", prio: "medium", labels: ["Feature"], who: ["LC", "#98801f"], done: true },
    { key: "LP-298", title: "Migrate previews to WebP", prio: "low", labels: ["Infra"], who: ["AS", "#827dbd"], done: true },
    { key: "LP-295", title: "Dark mode audit for auth screens", prio: "low", labels: ["Design"], who: ["EV", "#827dbd"], done: true },
  ] },
]

const DETAILS = {
  "LP-318": {
    desc:
      "The settings area has grown organically and the left nav no longer scales. We're rebuilding it into grouped sections with a search field and keyboard navigation.\n\nScope: Profile, Notifications, Security, Billing, and Members. Out of scope: the admin console, which keeps its own shell.",
    checklist: [
      ["Audit every existing settings route", true],
      ["Design grouped nav (Figma)", true],
      ["Build the nav shell component", true],
      ["Wire up section routing", true],
      ["Add ⌘K search over settings", false],
      ["Dark-mode pass", false],
    ],
    activity: [
      ["EV", "moved this from To do to In progress", "3 days ago"],
      ["EV", "opened branch feat/settings-nav", "3 days ago"],
      ["JP", "commented: let's keep the Members tab admin-gated", "2 days ago"],
      ["EV", "checked off “Build the nav shell component”", "6 hours ago"],
    ],
  },
}

export function findIssue(key) {
  for (const col of COLUMNS) {
    const card = col.cards.find((c) => c.key === key)
    if (card) return { ...card, status: col.name, statusDot: col.dot, ...(DETAILS[key] || {}) }
  }
  const c = COLUMNS[2].cards[0]
  return { ...c, status: COLUMNS[2].name, statusDot: COLUMNS[2].dot, ...DETAILS[c.key] }
}

export function Sidebar({ active = "Board" }) {
  return (
    <aside className="hidden w-[188px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
      <a href="/" className="flex items-center gap-2 px-3.5 py-3.5">
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
          <rect width="32" height="32" rx="8" fill="#141413" />
          <rect x="7" y="7" width="5.5" height="14" rx="1.5" fill="none" stroke="#c96442" strokeWidth="2" />
          <rect x="15.5" y="7" width="5.5" height="9" rx="1.5" fill="none" stroke="#629987" strokeWidth="2" />
          <rect x="7" y="7" width="5.5" height="7" rx="1.5" fill="#c96442" />
        </svg>
        <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Loop</span>
      </a>
      <nav className="flex-1 px-2">
        {[
          ["Board", "board"],
          ["My issues", "inbox"],
          ["Backlog", "stack"],
          ["Roadmap", "map"],
          ["Members", "team"],
        ].map(([label, icon]) => (
          <a key={label} href="/" className={`mb-[2px] flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-left text-[13.5px] transition-colors ${active === label ? "bg-[var(--color-hover)] font-medium" : "text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"}`}>
            <Icon name={icon} className="h-[17px] w-[17px] text-[var(--color-faint)]" />
            {label}
          </a>
        ))}
        <p className="mt-5 px-2.5 pb-1.5 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">SPRINTS</p>
        {[["Sprint 24", true], ["Sprint 23", false], ["Sprint 22", false]].map(([label, on]) => (
          <a key={label} href="/" className={`mb-[2px] flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[6px] text-left text-[12.5px] ${on ? "font-medium" : "text-[var(--color-muted)] hover:bg-[var(--color-sunk)]"}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${on ? "bg-[var(--color-clay)]" : "bg-[var(--color-line)]"}`} /> {label}
          </a>
        ))}
      </nav>
      <div className="p-2.5">
        <div className="rounded-lg bg-[var(--color-ivory)] p-2.5">
          <p className="text-[11px] font-medium">Sprint 24 progress</p>
          <div className="mt-1.5 h-[5px] overflow-hidden rounded-full bg-white">
            <div className="h-full w-[38%] rounded-full bg-[var(--color-mineral)]" />
          </div>
          <p className="mt-1 text-[10.5px] text-[var(--color-muted)]">5 of 13 done · 4 days left</p>
        </div>
      </div>
    </aside>
  )
}
