const site = {
  brand: "StoicSoft",
  domain: "stoicsoft.com",
  statusUrl: "status.stoicsoft.com",
  appUrl: "https://stoicsoft.com",
  year: 2026,
}

const regions = [
  { code: "IAD", city: "Virginia", country: "US", status: "ok", p50: 38, p99: 124, reqSec: 4821 },
  { code: "SFO", city: "San Francisco", country: "US", status: "ok", p50: 42, p99: 118, reqSec: 3976 },
  { code: "ORD", city: "Chicago", country: "US", status: "ok", p50: 47, p99: 132, reqSec: 2108 },
  { code: "FRA", city: "Frankfurt", country: "DE", status: "ok", p50: 31, p99: 108, reqSec: 3614 },
  { code: "AMS", city: "Amsterdam", country: "NL", status: "ok", p50: 34, p99: 112, reqSec: 2440 },
  { code: "LHR", city: "London", country: "UK", status: "ok", p50: 36, p99: 116, reqSec: 3112 },
  { code: "SGP", city: "Singapore", country: "SG", status: "degraded", p50: 78, p99: 312, reqSec: 1840 },
  { code: "TYO", city: "Tokyo", country: "JP", status: "ok", p50: 58, p99: 184, reqSec: 1226 },
  { code: "SYD", city: "Sydney", country: "AU", status: "ok", p50: 64, p99: 196, reqSec: 814 },
  { code: "GRU", city: "São Paulo", country: "BR", status: "ok", p50: 71, p99: 224, reqSec: 612 },
  { code: "JNB", city: "Johannesburg", country: "ZA", status: "maint", p50: 92, p99: 280, reqSec: 186 },
  { code: "BOM", city: "Mumbai", country: "IN", status: "ok", p50: 68, p99: 212, reqSec: 1034 },
]

const services = [
  { name: "api.stoicsoft.com", tone: "ok", uptime: 99.998, spark: [72, 78, 74, 82, 80, 85, 79, 83, 84, 82, 86, 82, 84, 86] },
  { name: "edge.stoicsoft.com", tone: "ok", uptime: 100.0, spark: [82, 84, 86, 82, 88, 84, 90, 88, 86, 90, 92, 88, 90, 92] },
  { name: "auth.stoicsoft.com", tone: "ok", uptime: 99.999, spark: [82, 80, 84, 86, 82, 88, 84, 82, 86, 88, 90, 88, 86, 84] },
  { name: "db-primary (us-east-1)", tone: "ok", uptime: 99.996, spark: [62, 68, 70, 66, 72, 74, 76, 72, 74, 78, 80, 76, 78, 80] },
  { name: "queue.stoicsoft.com", tone: "warn", uptime: 99.982, spark: [88, 86, 90, 62, 48, 34, 42, 58, 70, 82, 84, 86, 88, 90] },
  { name: "webhooks.stoicsoft.com", tone: "ok", uptime: 99.991, spark: [78, 80, 82, 86, 84, 88, 86, 84, 86, 88, 86, 84, 88, 90] },
]

const apiMethods = [
  { method: "GET", path: "/v1/projects", calls: "142.8k", p50: 18, p99: 62, err: "0.01%" },
  { method: "POST", path: "/v1/projects", calls: "3.41k", p50: 41, p99: 128, err: "0.04%" },
  { method: "GET", path: "/v1/deployments/:id", calls: "88.2k", p50: 22, p99: 74, err: "0.02%" },
  { method: "POST", path: "/v1/deployments", calls: "2.06k", p50: 196, p99: 412, err: "0.12%" },
  { method: "DELETE", path: "/v1/sessions/:id", calls: "18.7k", p50: 14, p99: 48, err: "0.00%" },
]

const incidents = [
  {
    title: "SGP region: elevated p99 on queue service",
    severity: "minor",
    state: "investigating",
    opened: "14m ago",
    body: "Queue workers in SGP are draining slowly. Customer jobs are queued but not dropped. We are scaling up workers and inspecting a noisy-neighbor pod.",
    region: "SGP",
  },
  {
    title: "Scheduled: JNB rack swap",
    severity: "maintenance",
    state: "in progress",
    opened: "Started 1h ago · ends 02:00 UTC",
    body: "Rolling rack replacement. Traffic is temporarily routed to FRA.",
    region: "JNB",
  },
  {
    title: "db-primary failover · us-east-1",
    severity: "minor",
    state: "resolved",
    opened: "Apr 12, 16:44 UTC · 12 min",
    body: "Primary replica experienced IOPS saturation. Promoted standby, no data loss.",
    region: "IAD",
  },
  {
    title: "Edge certificate rotation",
    severity: "maintenance",
    state: "completed",
    opened: "Apr 10, 09:00 UTC · 14 min",
    body: "Rotated TLS certificates across 12 edge regions.",
    region: "Global",
  },
]

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <rect x="3" y="3" width="26" height="26" rx="7" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M11 20V12l5 5 5-5v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "terminal") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/></svg>)
  if (name === "globe") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>)
  if (name === "rss") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1.5" fill="currentColor" stroke="none"/></svg>)
  if (name === "lock") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  return null
}

function StatusDot({ state }) {
  const bg = { ok: "bg-[var(--color-ok)]", degraded: "bg-[var(--color-warn)]", warn: "bg-[var(--color-warn)]", outage: "bg-[var(--color-alert)]", maint: "bg-[var(--color-maint)]" }[state] || "bg-[var(--color-subtle)]"
  const pulse = state === "ok" ? "pulse-live" : ""
  return <span className={`relative inline-flex h-2 w-2 rounded-full ${bg} ${pulse}`} />
}

function MethodPill({ method }) {
  const cls = {
    GET: "text-[var(--color-ok)] border-[var(--color-ok)]/40 bg-[var(--color-ok)]/10",
    POST: "text-[var(--color-maint)] border-[var(--color-maint)]/40 bg-[var(--color-maint)]/10",
    DELETE: "text-[var(--color-alert)] border-[var(--color-alert)]/40 bg-[var(--color-alert)]/10",
    PUT: "text-[var(--color-warn)] border-[var(--color-warn)]/40 bg-[var(--color-warn)]/10",
  }[method] || "text-[var(--color-subtle)] border-[var(--color-line-2)]"
  return (
    <span className={`inline-block w-[62px] rounded-sm border px-1.5 py-0.5 text-center font-mono text-[10px] font-semibold tracking-wider ${cls}`}>
      {method}
    </span>
  )
}

function Sparkline({ values, tone = "ok" }) {
  const color = { ok: "text-[var(--color-ok)]", warn: "text-[var(--color-warn)]", alert: "text-[var(--color-alert)]" }[tone]
  return (
    <div className={`spark ${color}`}>
      {values.map((v, i) => (
        <span key={i} style={{ height: `${v}%` }} />
      ))}
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-line)] bg-[var(--color-ink)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5 text-[var(--color-text)]">
          <Logo />
          <div className="leading-tight">
            <p className="font-semibold tracking-tight">{site.brand}</p>
            <p className="font-mono text-[11px] text-[var(--color-subtle)]">{site.statusUrl}</p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-muted)] md:flex">
          <a href="#regions" className="hover:text-[var(--color-text)]">Regions</a>
          <a href="#services" className="hover:text-[var(--color-text)]">Services</a>
          <a href="#api" className="hover:text-[var(--color-text)]">API</a>
          <a href="#incidents" className="hover:text-[var(--color-text)]">Incidents</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden items-center gap-1.5 rounded-md border border-[var(--color-line-2)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)] hover:border-[var(--color-text)] hover:text-[var(--color-text)] md:inline-flex">
            <Icon name="rss" className="h-3 w-3" /> RSS
          </a>
          <a href={site.appUrl} className="inline-flex items-center gap-1.5 rounded-md bg-[var(--color-text)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink)]">
            Dashboard <Icon name="arrow" className="h-3 w-3" />
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="glow relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6 py-14">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
          <StatusDot state="ok" />
          Live · 12 regions · {site.statusUrl}
        </div>
        <div className="mt-5 grid items-end gap-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--color-text)] md:text-5xl">
              Most systems <span className="text-[var(--color-ok)]">operational</span><span className="text-[var(--color-muted)]">.</span>
            </h1>
            <p className="mt-4 max-w-lg text-[15px] text-[var(--color-muted)]">
              1 region reporting degraded performance · 1 scheduled maintenance in progress. All customer requests are being served.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href="#incidents" className="rounded-md border border-[var(--color-line-2)] bg-[var(--color-surface)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text)] hover:border-[var(--color-text)]">
                View 2 active
              </a>
              <a href="#api" className="rounded-md border border-[var(--color-line-2)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)] hover:border-[var(--color-text)] hover:text-[var(--color-text)]">
                <Icon name="terminal" className="mr-1 inline h-3 w-3" /> curl api
              </a>
            </div>
          </div>
          <dl className="grid grid-cols-3 gap-0 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)]">
            {[
              { k: "99.997%", v: "30-day uptime" },
              { k: "24.6k", v: "req/sec global" },
              { k: "42 ms", v: "p50 latency" },
            ].map((s, i) => (
              <div key={s.v} className={`p-5 ${i < 2 ? "border-r border-[var(--color-line)]" : ""}`}>
                <dd className="text-xl font-semibold text-[var(--color-text)]">{s.k}</dd>
                <dt className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-subtle)]">{s.v}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function Regions() {
  return (
    <section id="regions" className="border-b border-[var(--color-line)] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-subtle)]">
              <Icon name="globe" className="mr-1 inline h-3 w-3" /> Edge regions
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Regional health</h2>
          </div>
          <p className="hidden font-mono text-xs text-[var(--color-subtle)] md:block">
            p50 / p99 · requests per second
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)]">
          <div className="grid grid-cols-2 gap-px bg-[var(--color-line)] md:grid-cols-3 lg:grid-cols-4">
            {regions.map((r) => (
              <div key={r.code} className="bg-[var(--color-surface)] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <StatusDot state={r.status} />
                    <span className="font-mono text-xs font-semibold tracking-wider text-[var(--color-text)]">
                      {r.code}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                    {r.country}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{r.city}</p>
                <div className="mt-3 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-[var(--color-muted)]">
                    {r.p50}<span className="text-[var(--color-subtle)]">/{r.p99}</span> ms
                  </span>
                  <span className="text-[var(--color-subtle)]">
                    {r.reqSec.toLocaleString()} rps
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="border-b border-[var(--color-line)] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-subtle)]">Services</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Live request volume</h2>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)]">
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 border-b border-[var(--color-line)] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-subtle)]">
            <span>Service</span>
            <span className="hidden md:block">Last 14 min</span>
            <span>Uptime 30d</span>
            <span>State</span>
          </div>
          {services.map((s) => (
            <div key={s.name} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4 border-b border-[var(--color-line)] px-4 py-3 last:border-b-0">
              <p className="font-mono text-sm text-[var(--color-text)]">{s.name}</p>
              <div className="hidden md:block">
                <Sparkline values={s.spark} tone={s.tone} />
              </div>
              <p className="font-mono text-sm tabular-nums text-[var(--color-muted)]">
                {s.uptime.toFixed(3)}%
              </p>
              <div className="flex items-center gap-1.5">
                <StatusDot state={s.tone === "warn" ? "degraded" : "ok"} />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  {s.tone === "warn" ? "degraded" : "ok"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ApiStats() {
  return (
    <section id="api" className="border-b border-[var(--color-line)] bg-[var(--color-surface)]/40 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-subtle)]">
              <Icon name="terminal" className="mr-1 inline h-3 w-3" /> API endpoints
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Top routes · 24h</h2>
          </div>
          <a href="#" className="hidden items-center gap-1 font-mono text-xs text-[var(--color-muted)] hover:text-[var(--color-text)] md:inline-flex">
            Full metrics <Icon name="arrow" className="h-3 w-3" />
          </a>
        </div>
        <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-ink)]">
          <div className="grid grid-cols-[auto_1fr_auto_auto_auto_auto] gap-4 border-b border-[var(--color-line)] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-subtle)]">
            <span>Method</span>
            <span>Path</span>
            <span>Calls</span>
            <span>p50</span>
            <span>p99</span>
            <span>Err</span>
          </div>
          {apiMethods.map((m) => (
            <div key={m.path} className="grid grid-cols-[auto_1fr_auto_auto_auto_auto] items-center gap-4 border-b border-[var(--color-line)] px-4 py-3 last:border-b-0">
              <MethodPill method={m.method} />
              <span className="font-mono text-sm text-[var(--color-text)]">{m.path}</span>
              <span className="font-mono text-xs text-[var(--color-muted)]">{m.calls}</span>
              <span className="font-mono text-xs tabular-nums text-[var(--color-muted)]">{m.p50}</span>
              <span className="font-mono text-xs tabular-nums text-[var(--color-muted)]">{m.p99}</span>
              <span className="font-mono text-xs text-[var(--color-ok)]">{m.err}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-[var(--color-line)] bg-[var(--color-ink)] p-4 font-mono text-xs text-[var(--color-muted)]">
          <p className="mb-2 text-[var(--color-subtle)]">// Programmatic status</p>
          <p>
            <span className="text-[var(--color-ok)]">curl</span> {" "}
            <span className="text-[var(--color-text)]">-s https://{site.statusUrl}/api/v2/summary.json</span>{" "}
            <span className="text-[var(--color-subtle)]">| jq .status</span>
          </p>
        </div>
      </div>
    </section>
  )
}

function Incidents() {
  return (
    <section id="incidents" className="border-b border-[var(--color-line)] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-subtle)]">Incident feed</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">Active & recent</h2>
        <div className="mt-8 space-y-3">
          {incidents.map((i) => (
            <article key={i.title} className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-sm border border-[var(--color-line-2)] bg-[var(--color-ink)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  {i.region}
                </span>
                <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] ${
                  i.severity === "major" ? "bg-[var(--color-alert)]/10 text-[var(--color-alert)]" :
                  i.severity === "minor" ? "bg-[var(--color-warn)]/10 text-[var(--color-warn)]" :
                  "bg-[var(--color-maint)]/10 text-[var(--color-maint)]"
                }`}>
                  {i.severity}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  {i.state}
                </span>
                <span className="font-mono text-[11px] text-[var(--color-subtle)]">{i.opened}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-[var(--color-text)]">
                {i.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{i.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Subscribe() {
  return (
    <section className="border-b border-[var(--color-line)] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)]">Notifications</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Get paged when {site.brand} does.
              </h2>
              <p className="mt-3 max-w-lg text-[15px] text-[var(--color-muted)]">
                Subscribe by region, by severity, or by component. We post to RSS, Atom, webhooks, PagerDuty, and Opsgenie.
              </p>
            </div>
            <div className="space-y-3">
              <form className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="you@stoicsoft.com"
                  className="flex-1 rounded-md border border-[var(--color-line-2)] bg-[var(--color-ink)] px-4 py-2.5 font-mono text-sm text-[var(--color-text)] placeholder-[var(--color-subtle)] outline-none focus:border-[var(--color-accent)]"
                />
                <button
                  type="button"
                  className="rounded-md bg-[var(--color-text)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] hover:bg-white"
                >
                  Subscribe
                </button>
              </form>
              <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                {["RSS", "Atom", "Webhook", "PagerDuty", "Opsgenie", "Slack"].map((x) => (
                  <span key={x} className="rounded-md border border-[var(--color-line-2)] px-2 py-1 text-[var(--color-muted)]">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <div className="leading-tight">
            <p className="font-semibold text-[var(--color-text)]">{site.brand}</p>
            <p className="font-mono text-[11px] text-[var(--color-subtle)]">{site.statusUrl}</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
          <a href="#" className="hover:text-[var(--color-text)]">Status API</a>
          <a href="#" className="hover:text-[var(--color-text)]">Postmortems</a>
          <a href="#" className="flex items-center gap-1 hover:text-[var(--color-text)]">
            <Icon name="lock" className="h-3 w-3" /> SOC 2
          </a>
          <a href="#" className="hover:text-[var(--color-text)]">Changelog</a>
          <a href="#" className="hover:text-[var(--color-text)]">Engineering</a>
        </nav>
        <p className="font-mono text-[11px] text-[var(--color-subtle)]">
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
      <Hero />
      <Regions />
      <Services />
      <ApiStats />
      <Incidents />
      <Subscribe />
      <Footer />
    </main>
  )
}
