const services = [
  { name: "api.servercompass.app", region: "sfo", ms: 84, up: 99.998, bars: [72, 88, 91, 84, 90, 88, 93, 90, 87, 91, 94, 92], status: "ok" },
  { name: "dash.1devtool.com", region: "fra", ms: 132, up: 99.982, bars: [80, 72, 64, 58, 70, 68, 74, 82, 88, 76, 70, 78], status: "ok" },
  { name: "cdn.stoicsoft.com", region: "sgp", ms: 41, up: 100.0, bars: [92, 95, 94, 96, 93, 97, 95, 94, 96, 98, 95, 97], status: "ok" },
  { name: "checkout.aether.app", region: "nyc", ms: 212, up: 99.72, bars: [88, 80, 60, 40, 55, 62, 20, 10, 55, 80, 90, 86], status: "degraded" },
  { name: "auth.routine.app", region: "lax", ms: 98, up: 99.991, bars: [85, 82, 86, 90, 92, 88, 85, 89, 94, 93, 91, 90], status: "ok" },
]

const features = [
  { icon: "pulse", title: "Synthetic probes worldwide", body: "One-click probes from 34 regions. HTTP, TCP, ICMP, and browser-level checks with screenshots on failure." },
  { icon: "shield", title: "SSL, DNS & domain expiry", body: "Watch cert chains, CAA records, DNS drift, and registrar expiry from one page. No more weekend surprises." },
  { icon: "alert", title: "Alerts on-call can act on", body: "Rich runbooks, stacked context, and correlated incidents. Not a firehose — a signal." },
  { icon: "chart", title: "Real-user monitoring", body: "Core Web Vitals, custom events, and session replay linked to each synthetic probe failure." },
  { icon: "api", title: "API-first platform", body: "Every screen is backed by a documented REST + webhooks API. Pipe checks into Terraform, Pulumi, or your CI." },
  { icon: "globe", title: "Status pages people read", body: "Branded public pages, Slack-native subscriber updates, and a cleanly-written incident voice guide." },
]

const stats = [
  { k: "142", v: "Global probe regions" },
  { k: "99.998%", v: "Self-reported uptime · 12 mo" },
  { k: "14 ms", v: "Median probe overhead" },
  { k: "8.6k", v: "Teams on ServerCompass" },
]

const steps = [
  { n: "01", t: "Import endpoints", body: "Paste a URL list, import from Terraform, or pull from Kubernetes Ingress. All in two minutes." },
  { n: "02", t: "Choose probe shape", body: "HTTP status, JSON assertions, browser flows, SSL chain, DNS drift — one rule, all shapes." },
  { n: "03", t: "Route alerts", body: "Slack, PagerDuty, Opsgenie, webhook. Quiet hours, escalation policies, follow-the-sun rotations." },
  { n: "04", t: "Publish status", body: "One-click branded status page, subscriber updates, and a post-mortem template that writes itself." },
]

const testimonials = [
  { q: "We swapped four monitoring vendors for ServerCompass. Our on-call stops guessing — every alert lands with a runbook and a screenshot.", a: "Sana Iyer", r: "Head of SRE, 1DevTool" },
  { q: "The synthetic + RUM combo caught a region-specific TLS handshake regression 14 minutes before Cloudflare posted the incident.", a: "Marcus Lee", r: "Platform lead, Routine" },
  { q: "The status page editor is the best in the category. Our customers actually read our updates now.", a: "Amara Reyes", r: "Product, Aether" },
]

const faqs = [
  { q: "How is ServerCompass different from Pingdom or Checkly?", a: "We combine synthetic probes, RUM, and certificate / DNS monitoring under one model — so correlated incidents show as a single alert instead of three. Our pricing also doesn't penalize you for adding regions." },
  { q: "Can I monitor internal services?", a: "Yes. Our agent runs in your VPC in under 10 minutes and signs every probe with a tenant-scoped key. No holes in your firewall." },
  { q: "Is there an API?", a: "Every screen is backed by the same public REST + webhook API. A Terraform provider and Pulumi package are maintained by our team." },
  { q: "What about the EU?", a: "EU data residency is available on the Growth plan. Our Frankfurt and Amsterdam probe regions never transit customer data outside the EU." },
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

function Icon({ name, className = "h-5 w-5" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "pulse") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>)
  if (name === "shield") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3 4 6v6c0 5 3.5 8.6 8 9 4.5-.4 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>)
  if (name === "alert") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3 2 21h20L12 3ZM12 10v5M12 18v.01"/></svg>)
  if (name === "chart") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 4v16h16"/><path d="M7 14l3-3 3 3 5-6"/></svg>)
  if (name === "api") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M7 11h.01M7 13h.01M11 11h3M11 13h6"/></svg>)
  if (name === "globe") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "star") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="m12 2 3 7 7 .6-5.3 4.6L18 22l-6-3.8L6 22l1.3-7.8L2 9.6 9 9l3-7Z"/></svg>)
  return null
}

function StatusDash() {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-4 shadow-[0_40px_120px_-30px_rgba(62,224,165,0.35)] backdrop-blur">
      <div className="flex items-center justify-between border-b border-white/5 px-2 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
          <span className="ml-3 font-mono text-xs text-white/40">servercompass.app / monitors</span>
        </div>
        <span className="flex items-center gap-2 text-xs text-white/50">
          <span className="relative flex h-2 w-2">
            <span className="pulse-soft absolute inline-flex h-full w-full rounded-full bg-[#3ee0a5]" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3ee0a5]" />
          </span>
          Live · updated 12s ago
        </span>
      </div>

      <div className="grid gap-3 p-3 md:grid-cols-[1fr_280px]">
        <div className="rounded-2xl border border-white/5 bg-black/30 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">All systems</p>
              <p className="mt-1 text-3xl font-semibold">Operational</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-xs text-white/50">uptime · 90d</p>
              <p className="mt-1 text-xl font-semibold text-[#3ee0a5]">99.998%</p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {services.map((s) => {
              const statusColor = s.status === "degraded" ? "#f5c54b" : "#3ee0a5"
              return (
                <div
                  key={s.name}
                  className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: statusColor }} />
                    <div>
                      <p className="font-mono text-sm text-white/90">{s.name}</p>
                      <p className="font-mono text-[10px] text-white/40">region: {s.region} · {s.ms} ms · {s.up}% 30d</p>
                    </div>
                  </div>
                  <div className="status-bar">
                    {s.bars.map((b, i) => (
                      <span
                        key={i}
                        style={{
                          height: `${Math.max(8, b * 0.22)}px`,
                          background: b < 30 ? "#ff6f7a" : b < 60 ? "#f5c54b" : statusColor,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-2xl border border-[#f5c54b]/30 bg-[#f5c54b]/5 p-4">
            <div className="flex items-center gap-2 text-[#f5c54b]">
              <Icon name="alert" className="h-4 w-4" />
              <p className="text-xs uppercase tracking-widest">Active incident</p>
            </div>
            <p className="mt-2 text-sm font-semibold">checkout.aether.app · elevated latency</p>
            <p className="mt-1 text-xs text-white/50">lax region · started 14 min ago</p>
            <div className="mt-3 rounded-lg border border-white/10 bg-black/40 p-2 font-mono text-[10px] text-white/60">
              <p><span className="text-[#3ee0a5]">→</span> runbook: scale checkout replicas +1</p>
              <p><span className="text-[#3ee0a5]">→</span> correlated: CDN cache miss spike</p>
              <p><span className="text-[#3ee0a5]">→</span> ack · @kavi.p · 12:04 UTC</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <p className="text-xs uppercase tracking-widest text-white/40">SSL chain expiry</p>
            <ul className="mt-3 space-y-1.5 text-xs">
              <li className="flex items-center justify-between"><span className="font-mono text-white/70">api.servercompass.app</span><span className="text-[#3ee0a5]">43d</span></li>
              <li className="flex items-center justify-between"><span className="font-mono text-white/70">dash.1devtool.com</span><span className="text-[#3ee0a5]">89d</span></li>
              <li className="flex items-center justify-between"><span className="font-mono text-white/70">cdn.stoicsoft.com</span><span className="text-[#f5c54b]">12d</span></li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <p className="text-xs uppercase tracking-widest text-white/40">Probe regions</p>
            <p className="mt-2 text-2xl font-semibold">34 <span className="text-sm font-normal text-white/50">active</span></p>
            <div className="mt-2 flex flex-wrap gap-1.5 font-mono text-[10px] text-white/60">
              {["sfo", "nyc", "fra", "sgp", "syd", "lax", "ams", "lhr", "gru", "hnd"].map((r) => (
                <span key={r} className="rounded-md bg-white/5 px-1.5 py-0.5">{r}</span>
              ))}
              <span className="rounded-md bg-white/5 px-1.5 py-0.5">+24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#050814] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[820px] beacon" />
      <div className="pointer-events-none absolute inset-0 grid-dots opacity-[0.25]" />

      {/* Nav */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="text-[#3ee0a5]"><Logo /></span>
            ServerCompass
          </a>
          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            <a href="#platform" className="hover:text-white">Platform</a>
            <a href="#workflow" className="hover:text-white">Workflow</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#status" className="hover:text-white">Status</a>
            <a href="#docs" className="hover:text-white">Docs</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#" className="hidden rounded-full px-4 py-2 text-sm text-white/80 hover:text-white md:inline">
              Sign in
            </a>
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3ee0a5] to-[#58a6ff] px-4 py-2 text-sm font-semibold text-[#050814] transition hover:opacity-90"
            >
              Start free <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-16 md:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="pulse-soft absolute inline-flex h-full w-full rounded-full bg-[#3ee0a5]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3ee0a5]" />
              </span>
              <span>status.servercompass.app · all systems operational</span>
            </span>
            <h1 className="mt-6 text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[1.02] tracking-tight">
              Infrastructure monitoring{" "}
              <span className="bg-gradient-to-r from-[#3ee0a5] via-[#58a6ff] to-[#9ad7ff] bg-clip-text text-transparent">
                for humans.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Synthetic probes, real user monitoring, SSL, and DNS — under one roof. ServerCompass ships alerts
              your on-call can actually act on.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3ee0a5] to-[#58a6ff] px-6 py-3.5 text-sm font-semibold text-[#050814] shadow-[0_20px_60px_-20px_rgba(62,224,165,0.5)] transition hover:opacity-90"
              >
                Start 14-day trial
                <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#platform"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm font-medium text-white/90 transition hover:border-white/50 hover:bg-white/5"
              >
                Book 20-minute demo
              </a>
            </div>
            <p className="mt-5 text-xs text-white/50">
              No credit card. 34 probe regions. Slack + PagerDuty + webhook alerts.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-6xl">
            <StatusDash />
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-white/5 bg-black/30 py-4">
          <div className="flex marquee gap-10 whitespace-nowrap font-mono text-xs text-white/50">
            {[
              "api.1devtool.com · 99.998%",
              "checkout.stoicsoft.com · 99.97%",
              "auth.aether.app · 100.00%",
              "docs.servercompass.app · 99.991%",
              "cdn.routine.app · 99.998%",
              "api.tessera.io · 99.982%",
            ].concat([
              "api.1devtool.com · 99.998%",
              "checkout.stoicsoft.com · 99.97%",
              "auth.aether.app · 100.00%",
              "docs.servercompass.app · 99.991%",
              "cdn.routine.app · 99.998%",
              "api.tessera.io · 99.982%",
            ]).map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="text-[#3ee0a5]">●</span>
                <span>{t}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="platform" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#3ee0a5]">Platform</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-[1.05] md:text-5xl">
                A signal, not a firehose.
              </h2>
            </div>
            <p className="max-w-md text-white/60">
              Every alert carries a runbook, a screenshot, and a correlated timeline. Your on-call sees the
              why, not just the what.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 transition hover:border-white/25"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#3ee0a5]/0 blur-3xl transition group-hover:bg-[#3ee0a5]/25" />
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#3ee0a5]/20 to-[#58a6ff]/10 text-[#3ee0a5]">
                  <Icon name={f.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/60">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* World map block */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#11182e] via-[#0a1124] to-[#050814] p-10 md:p-16">
            <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#58a6ff]">Global footprint</p>
                <h2 className="mt-3 text-4xl font-semibold leading-[1.05] md:text-5xl">
                  34 probe regions. Same price.
                </h2>
                <p className="mt-5 max-w-md text-white/70">
                  Competing vendors charge per region. We don&apos;t. Every plan runs probes from every
                  continent, so the first time you find a region-specific bug isn&apos;t from a customer
                  ticket.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-3 text-sm">
                  {[
                    { k: "NA", n: 9 },
                    { k: "EU", n: 8 },
                    { k: "APAC", n: 10 },
                    { k: "LATAM", n: 3 },
                    { k: "AFR", n: 2 },
                    { k: "OCE", n: 2 },
                  ].map((r) => (
                    <div key={r.k} className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                      <p className="font-mono text-xs text-white/40">{r.k}</p>
                      <p className="mt-1 text-2xl font-semibold">{r.n}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="font-mono text-xs text-white/40">live probes · 24h</p>
                <svg viewBox="0 0 400 220" className="mt-3 h-auto w-full">
                  <defs>
                    <radialGradient id="globe" cx="50%" cy="50%">
                      <stop offset="0%" stopColor="#58a6ff" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#58a6ff" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <ellipse cx="200" cy="110" rx="180" ry="95" fill="url(#globe)" />
                  <ellipse cx="200" cy="110" rx="180" ry="95" fill="none" stroke="rgba(255,255,255,0.08)" />
                  <path d="M20 110 Q 200 10 380 110 Q 200 210 20 110 Z" fill="none" stroke="rgba(255,255,255,0.05)" />
                  <path d="M20 110 Q 200 40 380 110" fill="none" stroke="rgba(255,255,255,0.05)" />
                  <path d="M20 110 Q 200 180 380 110" fill="none" stroke="rgba(255,255,255,0.05)" />
                  <line x1="200" y1="15" x2="200" y2="205" stroke="rgba(255,255,255,0.05)" />
                  {[
                    [70, 95, "SFO"], [105, 70, "NYC"], [180, 65, "LHR"],
                    [200, 75, "FRA"], [215, 95, "IST"], [265, 90, "DXB"],
                    [290, 110, "SGP"], [310, 140, "SYD"], [145, 130, "GRU"],
                    [255, 60, "HND"], [40, 140, "HNL"], [335, 80, "SEL"],
                  ].map(([x, y, label]) => (
                    <g key={label}>
                      <circle cx={x} cy={y} r="3" fill="#3ee0a5" />
                      <circle cx={x} cy={y} r="8" fill="none" stroke="#3ee0a5" strokeOpacity="0.3" />
                      <text x={x + 7} y={y - 6} fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,0.6)">{label}</text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3ee0a5]">Workflow</p>
            <h2 className="mt-3 text-4xl font-semibold leading-[1.05] md:text-5xl">
              Instrument in minutes. Sleep through Sunday.
            </h2>
          </div>

          <ol className="mt-14 grid gap-4 md:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                <span className="font-mono text-xs text-[#58a6ff]">{s.n}</span>
                <p className="mt-4 text-lg font-semibold">{s.t}</p>
                <p className="mt-2 text-sm text-white/60">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 border-y border-white/5 bg-black/30">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v} className="border-l border-white/10 pl-6">
              <p className="text-5xl font-semibold text-white">{s.k}</p>
              <p className="mt-2 text-sm text-white/60">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3ee0a5]">Customers</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">On-call engineers sleep better.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <article key={t.a} className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-7">
                <div className="flex text-[#3ee0a5]">
                  {[...Array(5)].map((_, i) => <Icon key={i} name="star" className="h-4 w-4" />)}
                </div>
                <p className="mt-5 text-lg leading-snug text-white/90">&ldquo;{t.q}&rdquo;</p>
                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#3ee0a5] to-[#58a6ff] font-semibold text-[#050814]">
                    {t.a.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{t.a}</p>
                    <p className="text-xs text-white/50">{t.r}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3ee0a5]">Pricing</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Flat per check. No region tax.</h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { name: "Hobby", price: "Free", cadence: "forever · 5 monitors", body: "For side projects and learning.", perks: ["5 monitors", "1-minute granularity", "Email alerts", "7-day retention"] },
              { name: "Team", price: "$29", cadence: "/ month · 30 monitors", body: "For growing products with real on-call.", perks: ["30 monitors", "34 probe regions", "Slack + PagerDuty", "Status pages", "90-day retention"], featured: true },
              { name: "Growth", price: "$149", cadence: "/ month · unlimited", body: "For teams running in multiple regions.", perks: ["Unlimited monitors", "EU data residency", "RUM + session replay", "Terraform provider", "1-year retention"] },
            ].map((p) => (
              <article key={p.name} className={`relative flex flex-col rounded-3xl border p-8 transition ${
                p.featured ? "border-[#3ee0a5] bg-gradient-to-b from-[#3ee0a5]/10 to-white/[0.02] shadow-[0_30px_80px_-40px_rgba(62,224,165,0.55)]" : "border-white/10 bg-white/[0.02] hover:border-white/25"
              }`}>
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-[#3ee0a5] to-[#58a6ff] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#050814]">Most chosen</span>
                )}
                <p className="text-lg font-semibold">{p.name}</p>
                <p className="mt-1 text-sm text-white/60">{p.body}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-semibold">{p.price}</span>
                  <span className="text-sm text-white/50">{p.cadence}</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm text-white/80">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 text-[#3ee0a5]" /> {perk}</li>
                  ))}
                </ul>
                <a href="#" className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  p.featured ? "bg-gradient-to-r from-[#3ee0a5] to-[#58a6ff] text-[#050814] hover:opacity-90" : "border border-white/20 text-white hover:border-white hover:bg-white hover:text-[#050814]"
                }`}>
                  Choose {p.name} <Icon name="arrow" className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#3ee0a5]">FAQ</p>
              <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Common questions.</h2>
            </div>
            <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.02]">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                    {f.q}
                    <span className="ml-4 grid h-7 w-7 place-items-center rounded-full border border-white/15 text-white/50 transition group-open:rotate-45 group-open:border-[#3ee0a5] group-open:text-[#3ee0a5]">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 p-10 md:p-16"
               style={{ background: "radial-gradient(700px circle at 15% 0%, rgba(62,224,165,0.28), transparent 55%), radial-gradient(700px circle at 85% 100%, rgba(88,166,255,0.28), transparent 55%), #0a1124" }}>
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-4xl font-semibold leading-[1.05] md:text-6xl">
                  Stop watching dashboards.<br />
                  <span className="bg-gradient-to-r from-[#3ee0a5] to-[#58a6ff] bg-clip-text text-transparent">Let us watch them.</span>
                </h2>
                <p className="mt-5 max-w-lg text-white/70">
                  Import your first endpoint in two minutes. Your on-call will notice the silence by week two.
                </p>
              </div>
              <form className="flex w-full flex-col gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 sm:flex-row">
                <input type="email" placeholder="api.company.com" className="w-full flex-1 rounded-xl bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:ring-2 focus:ring-[#3ee0a5]/40" />
                <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3ee0a5] to-[#58a6ff] px-5 py-3 text-sm font-semibold text-[#050814] transition hover:opacity-90">
                  Start watching <Icon name="arrow" className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 text-lg font-semibold">
              <span className="text-[#3ee0a5]"><Logo /></span> ServerCompass
            </a>
            <p className="mt-4 max-w-sm text-sm text-white/50">
              A StoicSoft product. Built by the on-call engineers who got tired of their monitoring vendors.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#platform" className="hover:text-white">Platform</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#status" className="hover:text-white">Status</a></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Developers</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">API docs</a></li>
              <li><a href="#" className="hover:text-white">Terraform</a></li>
              <li><a href="#" className="hover:text-white">Webhooks</a></li>
              <li><a href="#" className="hover:text-white">CLI</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">StoicSoft</a></li>
              <li><a href="#" className="hover:text-white">1DevTool</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-white/40">
            <span>© {new Date().getFullYear()} StoicSoft, Inc. ServerCompass is a trademark of StoicSoft.</span>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">DPA</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
