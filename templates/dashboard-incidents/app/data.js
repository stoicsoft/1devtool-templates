export function Icon({ name, className = "h-4 w-4", style }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    alert: <path d="M12 4 2 21h20L12 4ZM12 10v5M12 18h.01" />,
    services: <path d="M4 4h7v7H4zM13 13h7v7h-7zM13 4h7v7h-7zM4 13h7v7H4z" />,
    oncall: <path d="M4 5a2 2 0 0 1 2-2h2l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5V18a2 2 0 0 1-2 2A15 15 0 0 1 4 5Z" />,
    book: <path d="M4 4h12a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2V4ZM4 18a2 2 0 0 1 2-2h12" />,
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
        <path d="M10.3 21a2 2 0 0 0 3.4 0" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.1-2.1 2.5-2.5Z" />,
    down: <path d="m6 9 6 6 6-6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="m5 13 4 4L19 7" />,
    search2: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.2-3.2" />
      </>
    ),
    play: <path d="M7 5v14l11-7L7 5Z" />,
    dot: <circle cx="12" cy="12" r="4" />,
    back: <path d="M19 12H5m0 0 6 6m-6-6 6-6" />,
    share: (
      <>
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="m8.2 10.8 7.6-4.6M8.2 13.2l7.6 4.6" />
      </>
    ),
    slack: <path d="M9 3a1.6 1.6 0 1 1 0 3.2H7.4V4.6A1.6 1.6 0 0 1 9 3ZM3 15a1.6 1.6 0 1 1 3.2 0v1.6H4.6A1.6 1.6 0 0 1 3 15ZM15 21a1.6 1.6 0 1 1 0-3.2h1.6V19.4A1.6 1.6 0 0 1 15 21ZM21 9a1.6 1.6 0 1 1-3.2 0V7.4H19.4A1.6 1.6 0 0 1 21 9ZM9 9h6v6H9z" />,
    users: (
      <>
        <circle cx="9" cy="8" r="3.4" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 5.2a3.4 3.4 0 0 1 0 6.6M18 14.4a6.5 6.5 0 0 1 3.5 5.6" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

export const SEV = {
  1: { label: "SEV1", bg: "#fceaef", fg: "#a81a44", dot: "#cf2055" },
  2: { label: "SEV2", bg: "#fbeee3", fg: "#9a4a12", dot: "#c5621b" },
  3: { label: "SEV3", bg: "#f5f1e0", fg: "#6f5c12", dot: "#98801f" },
  4: { label: "SEV4", bg: "#f0efec", fg: "#5e5d59", dot: "#87867f" },
}
export const STATUS = {
  investigating: { fg: "#a81a44", bg: "#fceaef" },
  identified: { fg: "#9a4a12", bg: "#fbeee3" },
  monitoring: { fg: "#2f6d8f", bg: "#e2eef4" },
  resolved: { fg: "#177c31", bg: "#e6f4ea" },
}
export const svcState = { degraded: "#c5621b", operational: "#1e9f3c", down: "#cf2055" }

export const INCIDENTS = [
  { id: "INC-1042", title: "Elevated API error rate", service: "API gateway", sev: 1, status: "identified", dur: "00:23", commander: "J. Park",
    services: [["API gateway", "degraded"], ["Webhooks", "degraded"], ["Dashboard", "operational"]],
    timeline: [
      ["14:02", "detected", "Error rate 8.2% on /v1 — Datadog monitor \"api-5xx\" fired.", "Datadog"],
      ["14:05", "investigating", "Paging on-call. Checking the last two deploys.", "J. Park"],
      ["14:11", "identified", "Bad config in deploy 8f2a. Rolling back now.", "R. Okoro"],
      ["14:18", "update", "Rollback at 60%. Error rate down to 2.1% and falling.", "J. Park"],
    ],
    responders: ["J. Park", "R. Okoro", "A. Singh"] },
  { id: "INC-1041", title: "Checkout latency spike", service: "Payments", sev: 2, status: "monitoring", dur: "01:12", commander: "M. Diaz",
    services: [["Payments", "degraded"], ["Checkout", "operational"]],
    timeline: [
      ["12:48", "detected", "p95 checkout latency crossed 3.5s.", "Grafana"],
      ["12:55", "investigating", "Correlated with a slow query on the ledger DB.", "M. Diaz"],
      ["13:20", "monitoring", "Added an index; latency back under 900ms. Watching.", "M. Diaz"],
    ],
    responders: ["M. Diaz", "R. Okoro"] },
  { id: "INC-1039", title: "Search results stale", service: "Search", sev: 3, status: "investigating", dur: "00:41", commander: "L. Chen",
    services: [["Search", "degraded"]],
    timeline: [
      ["13:30", "detected", "Indexer lag alert — 40 min behind.", "Cron"],
      ["13:38", "investigating", "Checking the indexer worker pool.", "L. Chen"],
    ],
    responders: ["L. Chen"] },
  { id: "INC-1037", title: "Email delivery delayed", service: "Notifications", sev: 3, status: "resolved", dur: "02:04", commander: "P. Novak",
    services: [["Notifications", "operational"]],
    timeline: [
      ["09:10", "detected", "Provider queue backing up.", "PagerDuty"],
      ["09:40", "identified", "Upstream SMTP throttling our IP range.", "P. Novak"],
      ["11:14", "resolved", "Failover to secondary provider; queue drained.", "P. Novak"],
    ],
    responders: ["P. Novak"] },
  { id: "INC-1035", title: "Dashboard 500s (EU region)", service: "Web", sev: 2, status: "resolved", dur: "00:38", commander: "S. Ahmed",
    services: [["Web", "operational"]],
    timeline: [
      ["07:02", "detected", "5xx spike isolated to eu-west-1.", "Datadog"],
      ["07:20", "identified", "Bad cache node; drained from the pool.", "S. Ahmed"],
      ["07:40", "resolved", "Errors cleared after node replacement.", "S. Ahmed"],
    ],
    responders: ["S. Ahmed"] },
]

export const STATS = [
  ["Open incidents", "3", "alert", "#cf2055"],
  ["Mean time to ack", "2m 40s", "bell", "#c5621b"],
  ["Mean time to resolve", "48m", "clock", "#629987"],
  ["Services degraded", "4 / 26", "services", "#98801f"],
]

const AVCOLORS = { "J. Park": "#c96442", "R. Okoro": "#629987", "A. Singh": "#827dbd", "M. Diaz": "#cf2055", "L. Chen": "#98801f", "P. Novak": "#c5621b", "S. Ahmed": "#2f6d8f" }
export function initials(n) { return n.split(" ").map((w) => w[0]).join("").replace(".", "").slice(0, 2) }
export function avColor(n) { return AVCOLORS[n] || "#87867f" }

export function Sidebar({ active = "Incidents" }) {
  const items = [
    ["Incidents", "alert"],
    ["Services", "services"],
    ["On-call", "oncall"],
    ["Postmortems", "book"],
    ["Alerts", "bell"],
  ]
  return (
    <aside className="hidden w-[200px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
      <a href="/" className="flex items-center gap-2 px-3.5 py-3.5">
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
          <rect width="32" height="32" rx="8" fill="#141413" />
          <path d="M16 7v8M16 21h.01" fill="none" stroke="#cf2055" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M16 4 4 25h24L16 4Z" fill="none" stroke="#c96442" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Beacon</span>
      </a>
      <nav className="flex-1 px-2">
        {items.map(([label, icon]) => (
          <a key={label} href="/" className={`mb-[2px] flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-left text-[13.5px] transition-colors ${active === label ? "bg-[var(--color-hover)] font-medium" : "text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"}`}>
            <Icon name={icon} className="h-[17px] w-[17px] text-[var(--color-faint)]" />
            {label}
          </a>
        ))}
      </nav>
      <div className="p-2.5">
        <div className="rounded-lg bg-[var(--color-ivory)] p-2.5">
          <p className="text-[11px] font-medium">On-call now</p>
          <div className="mt-1.5 flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--color-clay-soft)] text-[11px] font-semibold text-[var(--color-clay-2)]">JP</span>
            <div>
              <p className="text-[12px] font-medium">Jordan Park</p>
              <p className="text-[10px] text-[var(--color-faint)]">Platform · until 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
