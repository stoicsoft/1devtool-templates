export function Icon({ name, className = "h-4 w-4", style }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    calendar: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4" />
      </>
    ),
    video: (
      <>
        <rect x="2" y="6" width="14" height="12" rx="2" />
        <path d="m16 10 6-3v10l-6-3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    contacts: (
      <>
        <circle cx="9" cy="8" r="3.4" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 5.2a3.4 3.4 0 0 1 0 6.6M18 14.4a6.5 6.5 0 0 1 3.5 5.6" />
      </>
    ),
    cog: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </>
    ),
    left: <path d="m15 6-6 6 6 6" />,
    right: <path d="m9 6 6 6-6 6" />,
    down: <path d="m6 9 6 6 6-6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    pin: (
      <>
        <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    back: <path d="M19 12H5m0 0 6 6m-6-6 6-6" />,
    edit: <path d="M4 20h4L18 10l-4-4L4 16v4ZM13 5l4 4" />,
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
        <path d="M10.3 21a2 2 0 0 0 3.4 0" />
      </>
    ),
    link: <path d="M9 15l6-6M10 6l1-1a4 4 0 0 1 6 6l-1 1M14 18l-1 1a4 4 0 0 1-6-6l1-1" />,
    check: <path d="m5 13 4 4L19 7" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

export const DAYS = [
  ["Mon", 17], ["Tue", 18], ["Wed", 19], ["Thu", 20], ["Fri", 21], ["Sat", 22], ["Sun", 23],
]
export const DAYNAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
export const TODAY = 2
export const H0 = 8, H1 = 20, HH = 50
export const HOURS = Array.from({ length: H1 - H0 }, (_, i) => H0 + i)

export const TONES = { clay: "#c96442", mineral: "#629987", plum: "#827dbd", olive: "#98801f", berry: "#cf2055", ochre: "#c5621b" }
export const soft = (hex) => `${hex}1f`

export const EVENTS = [
  { id: "e1", d: 2, s: 14, e: 15, t: "Customer sync · Northwind", sub: "Zoom", c: "plum",
    loc: "Zoom", join: "zoom.us/j/8421-north", organizer: "You",
    attendees: [["You", "#c96442"], ["Maya Chen", "#629987"], ["Raj Kapoor", "#827dbd"], ["Ivy Sun", "#98801f"]],
    desc: "Quarterly check-in with Northwind. Walk through the new dashboards, gather feedback on the API, and confirm the renewal timeline.",
    agenda: ["Adoption metrics since launch", "API v2 feedback", "Renewal & expansion", "Open questions"] },
  { id: "e2", d: 0, s: 9, e: 9.5, t: "Standup", sub: "Zoom", c: "clay", loc: "Zoom", organizer: "R. Okoro",
    attendees: [["You", "#c96442"], ["R. Okoro", "#629987"], ["L. Chen", "#827dbd"]], desc: "Daily team standup — blockers and plan for the day." },
  { id: "e3", d: 0, s: 11, e: 12, t: "Design review", sub: "Figma", c: "plum", loc: "Figma", organizer: "E. Voss",
    attendees: [["You", "#c96442"], ["E. Voss", "#827dbd"]], desc: "Review the settings navigation redesign." },
  { id: "e4", d: 0, s: 15, e: 15.5, t: "1:1 · Sam", sub: "Room 4", c: "mineral", loc: "Room 4", organizer: "You",
    attendees: [["You", "#c96442"], ["Sam Ito", "#629987"]], desc: "Weekly 1:1." },
  { id: "e5", d: 1, s: 10, e: 11, t: "Roadmap sync", sub: "Meet", c: "olive", loc: "Google Meet", organizer: "M. Diaz",
    attendees: [["You", "#c96442"], ["M. Diaz", "#cf2055"]], desc: "Align on next-quarter roadmap." },
  { id: "e6", d: 1, s: 13, e: 14, t: "Interview · Backend", sub: "Zoom", c: "clay", loc: "Zoom", organizer: "Recruiting",
    attendees: [["You", "#c96442"], ["Candidate", "#87867f"]], desc: "Backend engineer — systems round." },
  { id: "e7", d: 2, s: 9, e: 9.5, t: "Standup", sub: "Zoom", c: "clay", loc: "Zoom", organizer: "R. Okoro",
    attendees: [["You", "#c96442"], ["R. Okoro", "#629987"]], desc: "Daily team standup." },
  { id: "e8", d: 2, s: 10, e: 12, t: "Focus: retrieval", sub: "Heads-down", c: "mineral", loc: "Focus block", organizer: "You",
    attendees: [["You", "#c96442"]], desc: "Heads-down block — retrieval quality work." },
  { id: "e9", d: 2, s: 12.5, e: 13, t: "Lunch", sub: "", c: "ochre", loc: "—", organizer: "You", attendees: [["You", "#c96442"]], desc: "Lunch." },
  { id: "e10", d: 2, s: 16, e: 16.5, t: "Design crit", sub: "Room 2", c: "berry", loc: "Room 2", organizer: "E. Voss",
    attendees: [["You", "#c96442"], ["E. Voss", "#827dbd"]], desc: "Design critique." },
  { id: "e11", d: 3, s: 9, e: 9.5, t: "Standup", sub: "Zoom", c: "clay", loc: "Zoom", organizer: "R. Okoro",
    attendees: [["You", "#c96442"]], desc: "Daily team standup." },
  { id: "e12", d: 3, s: 10, e: 12.5, t: "Deep work", sub: "Heads-down", c: "mineral", loc: "Focus block", organizer: "You",
    attendees: [["You", "#c96442"]], desc: "Heads-down block." },
  { id: "e13", d: 3, s: 15, e: 16.5, t: "Sprint planning", sub: "Room 1", c: "olive", loc: "Room 1", organizer: "M. Diaz",
    attendees: [["You", "#c96442"], ["M. Diaz", "#cf2055"]], desc: "Plan the next sprint." },
  { id: "e14", d: 4, s: 11, e: 12, t: "Demo day", sub: "All hands", c: "clay", loc: "Main hall", organizer: "Team",
    attendees: [["You", "#c96442"]], desc: "Sprint demos, all-hands." },
  { id: "e15", d: 4, s: 15, e: 16, t: "Retro", sub: "Room 3", c: "plum", loc: "Room 3", organizer: "L. Chen",
    attendees: [["You", "#c96442"], ["L. Chen", "#827dbd"]], desc: "Sprint retrospective." },
  { id: "e16", d: 6, s: 17, e: 18, t: "Release prep", sub: "On-call", c: "olive", loc: "—", organizer: "You",
    attendees: [["You", "#c96442"]], desc: "Cut the release, verify staging." },
]

export const AGENDA = EVENTS.filter((e) => e.d === TODAY).sort((a, b) => a.s - b.s)

export const fmtH = (h) => {
  const hr = Math.floor(h), m = Math.round((h - hr) * 60)
  const ap = hr >= 12 ? "PM" : "AM"
  const h12 = hr % 12 === 0 ? 12 : hr % 12
  return `${h12}${m ? ":" + String(m).padStart(2, "0") : ""} ${ap}`
}

export function Sidebar() {
  return (
    <aside className="hidden w-[212px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
      <a href="/" className="flex items-center gap-2 px-3.5 py-3.5">
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
          <rect width="32" height="32" rx="8" fill="#141413" />
          <rect x="7" y="8" width="18" height="17" rx="2.5" fill="none" stroke="#c96442" strokeWidth="2" />
          <path d="M7 13h18M12 6v4M20 6v4" fill="none" stroke="#c96442" strokeWidth="2" strokeLinecap="round" />
          <rect x="11" y="16" width="4" height="4" rx="1" fill="#629987" />
        </svg>
        <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Slate</span>
      </a>
      <nav className="px-2">
        {[
          ["Calendar", "calendar", true],
          ["Meetings", "video", false],
          ["Availability", "clock", false],
          ["Contacts", "contacts", false],
          ["Settings", "cog", false],
        ].map(([label, icon, on]) => (
          <a key={label} href="/" className={`mb-[2px] flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-left text-[13.5px] transition-colors ${on ? "bg-[var(--color-hover)] font-medium" : "text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"}`}>
            <Icon name={icon} className="h-[17px] w-[17px] text-[var(--color-faint)]" />
            {label}
          </a>
        ))}
      </nav>
      <div className="min-h-0 flex-1 overflow-y-auto px-3.5 py-4 scroll-thin">
        <p className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">TODAY · WED 19</p>
        <div className="mt-2.5 space-y-2">
          {AGENDA.map((e) => (
            <a key={e.id} href={`/events/${e.id}`} className="flex gap-2.5 rounded-lg -mx-1 px-1 py-0.5 hover:bg-[var(--color-sunk)]">
              <span className="mt-1 h-full w-[3px] shrink-0 rounded-full" style={{ background: TONES[e.c] }} />
              <div className="min-w-0 pb-1">
                <p className="truncate text-[12.5px] font-medium">{e.t}</p>
                <p className="text-[10.5px] text-[var(--color-faint)]">{fmtH(e.s)} – {fmtH(e.e)}{e.sub ? ` · ${e.sub}` : ""}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-[var(--color-line)] p-3">
        <div className="flex items-center gap-2 text-[11.5px] text-[var(--color-muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-mineral)]" /> 3 calendars synced
        </div>
      </div>
    </aside>
  )
}
