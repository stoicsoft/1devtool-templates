const site = {
  brand: "1DevTool",
  domain: "1devtool.com",
  statusUrl: "status.1devtool.com",
  appUrl: "https://1devtool.com",
  year: 2026,
}

const services = [
  { name: "Registry API", uptime: 99.998, latency: 42, pattern: pattern(60, []) },
  { name: "Template CDN", uptime: 100.0, latency: 18, pattern: pattern(60, []) },
  { name: "Web dashboard", uptime: 99.994, latency: 86, pattern: pattern(60, [{ day: 8, state: "degraded" }]) },
  { name: "Desktop app sync", uptime: 99.987, latency: 124, pattern: pattern(60, [{ day: 22, state: "degraded" }, { day: 23, state: "degraded" }]) },
  { name: "Previews service", uptime: 100.0, latency: 38, pattern: pattern(60, []) },
  { name: "Auth & sessions", uptime: 99.999, latency: 31, pattern: pattern(60, []) },
  { name: "Billing (Stripe)", uptime: 99.992, latency: 64, pattern: pattern(60, [{ day: 41, state: "outage" }]) },
  { name: "Docs & guides", uptime: 100.0, latency: 22, pattern: pattern(60, []) },
]

function pattern(days, anomalies) {
  const map = new Map(anomalies.map((a) => [a.day, a.state]))
  return Array.from({ length: days }, (_, i) => map.get(i) || "ok")
}

const incidents = [
  {
    date: "Apr 14, 2026",
    title: "Elevated latency on Desktop app sync",
    severity: "minor",
    body: "A background reindex job saturated one database replica. Sync latency returned to baseline after we failed over to a standby.",
    duration: "38 min",
  },
  {
    date: "Apr 9, 2026",
    title: "Stripe Checkout intermittent failures",
    severity: "major",
    body: "Upstream billing provider reported elevated checkout failures. We queued new subscriptions during the window; no data was lost.",
    duration: "1 hr 06 min",
  },
  {
    date: "Apr 1, 2026",
    title: "Template CDN maintenance — rolling upgrade",
    severity: "maintenance",
    body: "Planned edge upgrade across 14 regions. No visible customer impact.",
    duration: "22 min",
  },
  {
    date: "Mar 24, 2026",
    title: "GitHub OAuth slow sign-in",
    severity: "minor",
    body: "GitHub identity service reported increased response times. We switched the fallback to email-link sign-in automatically.",
    duration: "47 min",
  },
]

function Mark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 12.5l2.6 2.6L16 9.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Dot({ tone = "ok" }) {
  const bg = {
    ok: "bg-[var(--color-ok)]",
    warn: "bg-[var(--color-warn)]",
    alert: "bg-[var(--color-alert)]",
    maint: "bg-[var(--color-maint)]",
  }[tone]
  return <span className={`h-1.5 w-1.5 rounded-full ${bg}`} />
}

function UptimeBar({ pattern: p }) {
  return (
    <div className="bar-track">
      {p.map((s, i) => (
        <span key={i} className={s === "ok" ? "" : s} title={`day ${60 - i}`} />
      ))}
    </div>
  )
}

function SeverityTag({ severity }) {
  const m = {
    minor: { label: "Minor", cls: "text-[var(--color-warn)] bg-[var(--color-warn)]/10" },
    major: { label: "Major", cls: "text-[var(--color-alert)] bg-[var(--color-alert)]/10" },
    maintenance: { label: "Maintenance", cls: "text-[var(--color-maint)] bg-[var(--color-maint)]/10" },
  }[severity]
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] ${m.cls}`}>
      {m.label}
    </span>
  )
}

function Header() {
  return (
    <header className="border-b border-[var(--color-line)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2 text-[var(--color-ink)]">
          <Mark />
          <span className="font-semibold tracking-tight">{site.brand}</span>
          <span className="font-mono text-xs text-[var(--color-subtle)]">/ status</span>
        </a>
        <nav className="flex items-center gap-5 text-sm text-[var(--color-muted)]">
          <a href="#incidents" className="hover:text-[var(--color-ink)]">History</a>
          <a href="#subscribe" className="hover:text-[var(--color-ink)]">Subscribe</a>
          <a href={site.appUrl} className="hidden items-center gap-1 rounded-md border border-[var(--color-line)] bg-[var(--color-paper)] px-3 py-1.5 text-[13px] font-medium text-[var(--color-ink)] hover:border-[var(--color-ink)] md:inline-flex">
            {site.domain} ↗
          </a>
        </nav>
      </div>
    </header>
  )
}

function Banner() {
  return (
    <section className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
          <span className="flex h-2 w-2">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-ok)]" />
          </span>
          Live · checked 8 seconds ago
        </div>
        <h1 className="mt-6 text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight">
          All systems normal.
        </h1>
        <p className="mt-4 max-w-xl text-[15px] text-[var(--color-muted)]">
          Current uptime is 99.996% across the last 60 days. {site.brand} publishes every incident here, including minor ones, within 15 minutes of detection.
        </p>
        <dl className="mt-10 grid max-w-xl grid-cols-3 gap-8 border-t border-[var(--color-line)] pt-8">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">Uptime 60d</dt>
            <dd className="mt-1 text-xl font-semibold">99.996%</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">Avg latency</dt>
            <dd className="mt-1 text-xl font-semibold">52 ms</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">Incidents · 30d</dt>
            <dd className="mt-1 text-xl font-semibold">2</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Services
          </h2>
          <p className="font-mono text-[11px] text-[var(--color-subtle)]">60-day uptime</p>
        </div>
        <ul className="divide-y divide-[var(--color-line)]">
          {services.map((s) => (
            <li key={s.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-6 py-4">
              <div className="flex items-center gap-3">
                <Dot tone={s.pattern.some((p) => p === "outage") ? "alert" : s.pattern.some((p) => p === "degraded") ? "warn" : "ok"} />
                <div>
                  <p className="text-[15px] font-medium">{s.name}</p>
                  <p className="font-mono text-[11px] text-[var(--color-subtle)]">
                    {s.latency} ms · operational
                  </p>
                </div>
              </div>
              <div className="hidden w-[420px] md:block">
                <UptimeBar pattern={s.pattern} />
              </div>
              <p className="font-mono text-sm tabular-nums text-[var(--color-ink)]">
                {s.uptime.toFixed(3)}%
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Incidents() {
  return (
    <section id="incidents" className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Recent incidents
          </h2>
          <a href="#" className="font-mono text-[11px] text-[var(--color-muted)] hover:text-[var(--color-ink)]">
            Archive →
          </a>
        </div>
        <ol className="space-y-8">
          {incidents.map((i) => (
            <li key={i.title} className="grid gap-3 border-t border-[var(--color-line)] pt-6 md:grid-cols-[160px_1fr]">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {i.date}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-[17px] font-semibold tracking-tight">{i.title}</h3>
                  <SeverityTag severity={i.severity} />
                  <span className="font-mono text-[11px] text-[var(--color-subtle)]">
                    resolved · {i.duration}
                  </span>
                </div>
                <p className="mt-2 max-w-2xl text-sm text-[var(--color-muted)]">{i.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Subscribe() {
  return (
    <section id="subscribe" className="border-b border-[var(--color-line)] bg-[var(--color-paper-2)]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Get notified</h2>
            <p className="mt-3 max-w-md text-[15px] text-[var(--color-muted)]">
              One email when a {site.brand} component changes state, never any marketing. Unsubscribe is a single click.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="you@team.com"
              className="flex-1 rounded-md border border-[var(--color-line)] bg-white px-4 py-2.5 text-[15px] placeholder-[var(--color-subtle)] outline-none focus:border-[var(--color-ink)]"
            />
            <button
              type="button"
              className="rounded-md bg-[var(--color-ink)] px-5 py-2.5 text-[15px] font-medium text-white hover:bg-black"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          <span>Also available:</span>
          <a href="#" className="hover:text-[var(--color-ink)]">Slack</a>
          <a href="#" className="hover:text-[var(--color-ink)]">RSS</a>
          <a href="#" className="hover:text-[var(--color-ink)]">Atom</a>
          <a href="#" className="hover:text-[var(--color-ink)]">Webhook</a>
          <a href="#" className="hover:text-[var(--color-ink)]">SMS</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Mark />
          <span className="font-semibold tracking-tight">{site.brand}</span>
          <span className="font-mono text-xs text-[var(--color-subtle)]">· {site.statusUrl}</span>
        </div>
        <nav className="flex flex-wrap gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          <a href="#" className="hover:text-[var(--color-ink)]">Status API</a>
          <a href="#" className="hover:text-[var(--color-ink)]">Postmortems</a>
          <a href="#" className="hover:text-[var(--color-ink)]">Security</a>
          <a href="#" className="hover:text-[var(--color-ink)]">Docs</a>
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
    <main>
      <Header />
      <Banner />
      <Services />
      <Incidents />
      <Subscribe />
      <Footer />
    </main>
  )
}
