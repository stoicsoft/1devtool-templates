const site = {
  brand: "ServerCompass",
  domain: "servercompass.app",
  statusUrl: "status.servercompass.app",
  appUrl: "https://servercompass.app",
  tagline: "Infrastructure monitoring for humans",
  year: 2026,
}

const componentGroups = [
  {
    name: "Core API",
    items: [
      { name: "Public REST API", region: "global", uptime: 99.998, pattern: buildPattern(90, []) },
      { name: "GraphQL Gateway", region: "global", uptime: 99.994, pattern: buildPattern(90, [{ day: 12, state: "degraded" }]) },
      { name: "Webhooks dispatcher", region: "global", uptime: 99.989, pattern: buildPattern(90, [{ day: 34, state: "degraded" }, { day: 35, state: "degraded" }]) },
    ],
  },
  {
    name: "Probe network",
    items: [
      { name: "North America probes", region: "nyc · sfo · ord", uptime: 100.0, pattern: buildPattern(90, []) },
      { name: "Europe probes", region: "fra · ams · lhr", uptime: 99.996, pattern: buildPattern(90, [{ day: 61, state: "degraded" }]) },
      { name: "Asia Pacific probes", region: "sgp · tyo · syd", uptime: 99.961, pattern: buildPattern(90, [{ day: 18, state: "outage" }, { day: 19, state: "degraded" }]) },
      { name: "South America probes", region: "gru · scl", uptime: 99.981, pattern: buildPattern(90, [{ day: 44, state: "maint" }]) },
    ],
  },
  {
    name: "Dashboard & Console",
    items: [
      { name: "app.servercompass.app", region: "global", uptime: 100.0, pattern: buildPattern(90, []) },
      { name: "Authentication (SSO)", region: "global", uptime: 99.999, pattern: buildPattern(90, []) },
      { name: "Billing portal", region: "global", uptime: 99.992, pattern: buildPattern(90, [{ day: 71, state: "maint" }]) },
    ],
  },
  {
    name: "Third-party integrations",
    items: [
      { name: "Slack notifications", region: "global", uptime: 99.987, pattern: buildPattern(90, [{ day: 7, state: "degraded" }]) },
      { name: "PagerDuty routing", region: "global", uptime: 99.998, pattern: buildPattern(90, []) },
      { name: "Datadog export", region: "global", uptime: 99.973, pattern: buildPattern(90, [{ day: 52, state: "degraded" }, { day: 53, state: "degraded" }]) },
      { name: "Terraform provider", region: "global", uptime: 100.0, pattern: buildPattern(90, []) },
    ],
  },
]

function buildPattern(days, anomalies) {
  const map = new Map(anomalies.map((a) => [a.day, a.state]))
  return Array.from({ length: days }, (_, i) => map.get(i) || "ok")
}

const pastIncidents = [
  {
    date: "Apr 13, 2026",
    entries: [
      {
        title: "Elevated webhook delivery latency",
        severity: "minor",
        state: "resolved",
        duration: "42 min",
        timeline: [
          { at: "16:38 UTC", label: "Resolved", body: "Webhook delivery has returned to baseline for 20 minutes. We'll publish a postmortem within 72 hours." },
          { at: "16:21 UTC", label: "Monitoring", body: "Backpressure is draining. p95 delivery time is back under 900ms." },
          { at: "15:56 UTC", label: "Identified", body: "A Kafka partition rebalance triggered by a rolling deploy is causing the queue to back up. Rolling back the deploy now." },
        ],
      },
    ],
  },
  {
    date: "Apr 10, 2026",
    entries: [
      {
        title: "Partial outage · Asia Pacific probes (SGP)",
        severity: "major",
        state: "resolved",
        duration: "1 hr 18 min",
        timeline: [
          { at: "04:06 UTC", label: "Resolved", body: "All Singapore probes are reporting healthy. Backfill of missed checks completed; customers will not be charged for this window." },
          { at: "03:40 UTC", label: "Monitoring", body: "Traffic has been routed to a secondary rack. Probes are recovering." },
          { at: "02:48 UTC", label: "Investigating", body: "Our SGP probe fleet lost connectivity following an upstream transit provider outage. We are re-routing to the TYO region while we wait for upstream recovery." },
        ],
      },
    ],
  },
  {
    date: "Apr 6, 2026",
    entries: [
      {
        title: "Datadog export delivery delay",
        severity: "minor",
        state: "resolved",
        duration: "2 hr 11 min",
      },
    ],
  },
  {
    date: "Apr 2, 2026",
    entries: [
      {
        title: "Scheduled maintenance · Billing portal",
        severity: "maintenance",
        state: "completed",
        duration: "26 min",
      },
    ],
  },
]

const scheduledMaintenance = [
  {
    title: "Database read-replica upgrade (EU)",
    window: "Thu, Apr 18 · 02:00 – 03:00 UTC",
    impact: "No customer-facing downtime expected. EU users may see a 15-second read delay during failover.",
    components: ["GraphQL Gateway", "Europe probes"],
  },
  {
    title: "Edge TLS certificate rotation",
    window: "Sat, Apr 20 · 09:00 – 09:30 UTC",
    impact: "We will briefly drain connections from edge nodes. Customers pinning legacy TLS 1.0 may see handshake failures.",
    components: ["Public REST API", "Webhooks dispatcher"],
  },
]

const metrics = [
  { k: "99.996%", v: "Uptime · last 90 days" },
  { k: "4", v: "Incidents resolved this month" },
  { k: "142", v: "Global probe regions" },
  { k: "< 14 ms", v: "Median probe overhead" },
]

const subscribeOptions = [
  { icon: "mail", title: "Email", body: "Incident, maintenance, and post-mortem emails." },
  { icon: "slack", title: "Slack", body: "Post updates directly into an #alerts channel." },
  { icon: "rss", title: "RSS / Atom", body: "Wire updates into your own dashboards." },
  { icon: "webhook", title: "Webhooks", body: "JSON payloads for every state change." },
]

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M16 6v10l7 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>)
  if (name === "slack") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="10" width="7" height="4" rx="2"/><rect x="14" y="10" width="7" height="4" rx="2"/><rect x="10" y="3" width="4" height="7" rx="2"/><rect x="10" y="14" width="4" height="7" rx="2"/></svg>)
  if (name === "rss") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1.5" fill="currentColor" stroke="none"/></svg>)
  if (name === "webhook") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><circle cx="12" cy="6" r="3"/><path d="M9 18h6"/><path d="m10 8-4 7"/><path d="m14 8 4 7"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "clock") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>)
  if (name === "calendar") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>)
  return null
}

function SeverityPill({ severity }) {
  const m = {
    minor: { bg: "bg-[var(--color-warn-soft)]", fg: "text-[var(--color-warn)]", label: "Minor" },
    major: { bg: "bg-[var(--color-alert-soft)]", fg: "text-[var(--color-alert)]", label: "Major" },
    maintenance: { bg: "bg-[var(--color-maint-soft)]", fg: "text-[var(--color-maint)]", label: "Maintenance" },
  }[severity] || { bg: "bg-slate-100", fg: "text-slate-600", label: severity }
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em] ${m.bg} ${m.fg}`}>
      {m.label}
    </span>
  )
}

function StateBadge({ state }) {
  const s = {
    resolved: "text-[var(--color-ok)]",
    completed: "text-[var(--color-maint)]",
    monitoring: "text-[var(--color-warn)]",
    investigating: "text-[var(--color-alert)]",
  }[state] || "text-[var(--color-muted)]"
  return <span className={`font-mono text-xs font-semibold uppercase tracking-[0.18em] ${s}`}>{state}</span>
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-line)] bg-[var(--color-paper)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5 text-[var(--color-ink)]">
          <Logo />
          <div className="leading-tight">
            <p className="font-semibold tracking-tight">{site.brand}</p>
            <p className="font-mono text-[11px] text-[var(--color-muted)]">{site.statusUrl}</p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#current" className="text-[var(--color-muted)] hover:text-[var(--color-ink)]">Current status</a>
          <a href="#history" className="text-[var(--color-muted)] hover:text-[var(--color-ink)]">Incident history</a>
          <a href="#maintenance" className="text-[var(--color-muted)] hover:text-[var(--color-ink)]">Maintenance</a>
          <a href="#subscribe" className="text-[var(--color-muted)] hover:text-[var(--color-ink)]">Subscribe</a>
        </nav>
        <a
          href={site.appUrl}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#1f2940]"
        >
          Open dashboard
          <Icon name="arrow" className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  )
}

function StatusBanner() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-ok-soft)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <span className="pulse-ok relative flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-ok)]">
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-ok)]">Current status</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
              All systems operational
            </h1>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Last checked 14 seconds ago · <span className="font-mono">{site.statusUrl}</span>
            </p>
          </div>
        </div>
        <a
          href="#subscribe"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-ok)]/40 bg-white px-4 py-2 text-sm font-medium text-[var(--color-ok)] transition hover:border-[var(--color-ok)]"
        >
          <Icon name="rss" className="h-3.5 w-3.5" />
          Subscribe to updates
        </a>
      </div>
    </section>
  )
}

function MetricsStrip() {
  return (
    <section className="border-b border-[var(--color-line)]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-[var(--color-line)] md:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.v} className="bg-[var(--color-paper)] px-6 py-6">
            <p className="text-2xl font-semibold text-[var(--color-ink)]">{m.k}</p>
            <p className="mt-1 text-xs text-[var(--color-muted)]">{m.v}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function UptimeBars({ pattern }) {
  return (
    <div className="uptime-grid mt-3">
      {pattern.map((state, i) => (
        <span key={i} className={state === "ok" ? "" : state} title={`Day ${90 - i}: ${state}`} />
      ))}
    </div>
  )
}

function ComponentGroup({ group }) {
  return (
    <div className="rounded-2xl border border-[var(--color-line)] bg-white">
      <div className="flex items-center justify-between border-b border-[var(--color-line)] px-5 py-3.5">
        <h3 className="font-semibold tracking-tight text-[var(--color-ink)]">{group.name}</h3>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ok)]">
          All operational
        </span>
      </div>
      <ul className="divide-y divide-[var(--color-line)]">
        {group.items.map((item) => (
          <li key={item.name} className="px-5 py-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="flex items-center gap-2 font-medium text-[var(--color-ink)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-ok)]" />
                  {item.name}
                </p>
                <p className="font-mono text-[11px] text-[var(--color-muted)]">
                  region · {item.region}
                </p>
              </div>
              <div className="text-right">
                <p className="font-mono text-sm text-[var(--color-ink)]">{item.uptime.toFixed(3)}%</p>
                <p className="font-mono text-[11px] text-[var(--color-muted)]">uptime · 90d</p>
              </div>
            </div>
            <UptimeBars pattern={item.pattern} />
            <div className="mt-2 flex justify-between font-mono text-[10px] text-[var(--color-muted)]">
              <span>90 days ago</span>
              <span>Today</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function CurrentStatus() {
  return (
    <section id="current" className="py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Components</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
              Real-time status by service
            </h2>
          </div>
          <div className="hidden items-center gap-4 font-mono text-[11px] text-[var(--color-muted)] md:flex">
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-[var(--color-ok)]" /> Operational</span>
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-[var(--color-warn)]" /> Degraded</span>
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-[var(--color-alert)]" /> Outage</span>
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-[var(--color-maint)]" /> Maintenance</span>
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {componentGroups.map((g) => (
            <ComponentGroup key={g.name} group={g} />
          ))}
        </div>
      </div>
    </section>
  )
}

function IncidentEntry({ entry }) {
  return (
    <article className="rounded-2xl border border-[var(--color-line)] bg-white p-6">
      <header className="flex flex-wrap items-center gap-3">
        <SeverityPill severity={entry.severity} />
        <StateBadge state={entry.state} />
        <span className="font-mono text-xs text-[var(--color-muted)]">
          Duration · {entry.duration}
        </span>
      </header>
      <h4 className="mt-3 text-lg font-semibold tracking-tight text-[var(--color-ink)]">
        {entry.title}
      </h4>
      {entry.timeline && (
        <ol className="mt-4 space-y-4 border-l border-[var(--color-line)] pl-5">
          {entry.timeline.map((t) => (
            <li key={t.at} className="relative">
              <span className="absolute -left-[25px] top-1.5 h-2 w-2 rounded-full bg-[var(--color-ink)]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {t.at} · {t.label}
              </p>
              <p className="mt-1 text-sm text-[var(--color-ink)]">{t.body}</p>
            </li>
          ))}
        </ol>
      )}
    </article>
  )
}

function IncidentHistory() {
  return (
    <section id="history" className="border-t border-[var(--color-line)] bg-white/60 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">History</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
              Incidents — last 30 days
            </h2>
          </div>
          <a href="#" className="hidden items-center gap-1.5 font-mono text-xs text-[var(--color-muted)] hover:text-[var(--color-ink)] md:inline-flex">
            Full archive
            <Icon name="arrow" className="h-3 w-3" />
          </a>
        </div>
        <div className="space-y-10">
          {pastIncidents.map((day) => (
            <div key={day.date} className="grid gap-4 md:grid-cols-[200px_1fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {day.date}
                </p>
              </div>
              <div className="space-y-3">
                {day.entries.map((entry) => (
                  <IncidentEntry key={entry.title} entry={entry} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MaintenanceList() {
  return (
    <section id="maintenance" className="border-t border-[var(--color-line)] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Upcoming</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
          Scheduled maintenance
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {scheduledMaintenance.map((m) => (
            <article key={m.title} className="rounded-2xl border border-[var(--color-line)] bg-white p-6">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-maint)]">
                <Icon name="calendar" className="h-3.5 w-3.5" />
                {m.window}
              </div>
              <h4 className="mt-3 text-lg font-semibold tracking-tight text-[var(--color-ink)]">{m.title}</h4>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{m.impact}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {m.components.map((c) => (
                  <span key={c} className="rounded-full bg-[var(--color-maint-soft)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-maint)]">
                    {c}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SubscribePanel() {
  return (
    <section id="subscribe" className="border-t border-[var(--color-line)] bg-[var(--color-ink)] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/50">Stay informed</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Subscribe to status updates
            </h2>
            <p className="mt-3 max-w-md text-sm text-white/70">
              Get notified the moment a component changes state. Unsubscribe one click, per channel, per component.
            </p>
            <form className="mt-6 flex max-w-md items-stretch gap-2 rounded-full bg-white/5 p-1.5 ring-1 ring-white/10">
              <input
                type="email"
                placeholder="you@work.com"
                className="flex-1 bg-transparent px-4 text-sm text-white placeholder-white/40 outline-none"
              />
              <button
                type="button"
                className="rounded-full bg-[var(--color-ok)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-white"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 font-mono text-[11px] text-white/40">
              You can unsubscribe any time. We never share your email.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {subscribeOptions.map((o) => (
              <div key={o.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center gap-2 text-white/80">
                  <Icon name={o.icon} className="h-4 w-4" />
                  <p className="font-medium">{o.title}</p>
                </div>
                <p className="mt-2 text-sm text-white/60">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-paper)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 text-[var(--color-ink)]">
          <Logo />
          <div className="leading-tight">
            <p className="font-semibold">{site.brand}</p>
            <p className="font-mono text-[11px] text-[var(--color-muted)]">{site.tagline}</p>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          <a href="#" className="hover:text-[var(--color-ink)]">Privacy</a>
          <a href="#" className="hover:text-[var(--color-ink)]">Terms</a>
          <a href="#" className="hover:text-[var(--color-ink)]">Security</a>
          <a href="#" className="hover:text-[var(--color-ink)]">Status API</a>
          <a href="#" className="hover:text-[var(--color-ink)]">RSS feed</a>
        </nav>
        <p className="font-mono text-[11px] text-[var(--color-muted)]">
          © {site.year} {site.brand} · {site.domain}
        </p>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <StatusBanner />
      <MetricsStrip />
      <CurrentStatus />
      <IncidentHistory />
      <MaintenanceList />
      <SubscribePanel />
      <Footer />
    </main>
  )
}
