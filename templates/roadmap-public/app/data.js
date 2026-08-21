export function Icon({ name, className = "h-4 w-4", style }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    up: <path d="m6 15 6-6 6 6" />,
    comment: <path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12Z" />,
    plus: <path d="M12 5v14M5 12h14" />,
    down: <path d="m6 9 6 6 6-6" />,
    back: <path d="M19 12H5m0 0 6 6m-6-6 6-6" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.2-3.2" />
      </>
    ),
    check: <path d="m5 13 4 4L19 7" />,
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
        <path d="M10.3 21a2 2 0 0 0 3.4 0" />
      </>
    ),
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

export const CAT = { Feature: "#629987", Integration: "#827dbd", Mobile: "#c5621b", Bug: "#cf2055", API: "#c96442" }

export const COLUMNS = [
  { name: "Under review", dot: "#98801f", note: "Gathering interest", cards: [
    { id: "a1", title: "Saved views and filters", desc: "Let me pin a filtered board and share the link with my team.", cat: "Feature", votes: 128, comments: 14 },
    { id: "a2", title: "Zapier integration", desc: "Trigger flows when an item changes status.", cat: "Integration", votes: 96, comments: 8 },
    { id: "a3", title: "Bulk edit on the board", desc: "Select multiple cards and change status or assignee at once.", cat: "Feature", votes: 61, comments: 5 },
  ] },
  { name: "Planned", dot: "#c96442", note: "On the near-term list", cards: [
    { id: "b1", title: "Dark mode", desc: "A proper dark theme across the whole app.", cat: "Feature", votes: 342, comments: 41, voted: true },
    { id: "b2", title: "Slack notifications", desc: "Post updates to a channel when items ship.", cat: "Integration", votes: 210, comments: 19 },
    { id: "b3", title: "CSV import", desc: "Bring existing issues in from a spreadsheet.", cat: "Feature", votes: 154, comments: 11 },
  ] },
  { name: "In progress", dot: "#629987", note: "Being built now", cards: [
    { id: "c1", title: "Mobile app (iOS)", desc: "Native app with offline support and push.", cat: "Mobile", votes: 512, comments: 63, voted: true },
    { id: "c2", title: "Public API v2", desc: "Cursor pagination, webhooks, and rate headers.", cat: "API", votes: 288, comments: 27 },
  ] },
]

const DETAILS = {
  c1: {
    body:
      "A first-class native iOS app so you can review, vote, and update items on the go. It ships with offline drafts that sync when you reconnect, push notifications for mentions and status changes, and Face ID lock. Android will follow once the iOS build stabilizes.\n\nWe're building on a shared sync core, so parity with the web app is the goal — not a stripped-down companion.",
    posted: "Opened 3 months ago by Priya N.",
    thread: [
      { who: "Marco A.", c: "#827dbd", when: "2 weeks ago", text: "Offline support is the whole reason I want this. Please make drafts robust on flaky connections." },
      { who: "Team · Rina", c: "#c96442", when: "1 week ago", text: "TestFlight beta goes out next week — reply here if you'd like an invite.", team: true },
      { who: "Dana L.", c: "#629987", when: "4 days ago", text: "Any chance of a widget for today's items? Would love a glanceable view." },
    ],
  },
}

export function findFeature(id) {
  for (const col of COLUMNS) {
    const card = col.cards.find((c) => c.id === id)
    if (card) return { ...card, status: col.name, statusDot: col.dot, ...(DETAILS[id] || {}) }
  }
  const fallback = COLUMNS[2].cards[0]
  return { ...fallback, status: COLUMNS[2].name, statusDot: COLUMNS[2].dot, ...DETAILS[fallback.id] }
}

export const SIMILAR = [
  { id: "b2", title: "Slack notifications", cat: "Integration", votes: 210 },
  { id: "a1", title: "Saved views and filters", cat: "Feature", votes: 128 },
  { id: "c2", title: "Public API v2", cat: "API", votes: 288 },
]

export function Nav() {
  return (
    <nav className="flex h-[58px] shrink-0 items-center gap-2 border-b border-[var(--color-line)] px-6">
      <a href="/" className="flex items-center gap-2">
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
          <rect width="32" height="32" rx="8" fill="#141413" />
          <path d="M16 7l6 8h-4v10h-4V15h-4l6-8Z" fill="none" stroke="#c96442" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Vega</span>
      </a>
      <div className="ml-6 hidden items-center gap-6 text-[13.5px] text-[var(--color-ink-2)] md:flex">
        <a href="/" className="font-medium text-[var(--color-ink)]">Roadmap</a>
        <a className="hover:text-[var(--color-ink)]">Changelog</a>
        <a className="hover:text-[var(--color-ink)]">Feedback</a>
      </div>
      <div className="ml-auto flex items-center gap-2.5">
        <button className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-3.5 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]">
          <Icon name="plus" className="h-4 w-4" /> Give feedback
        </button>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-plum-soft)] text-[11px] font-semibold text-[var(--color-plum)]">MA</span>
      </div>
    </nav>
  )
}
