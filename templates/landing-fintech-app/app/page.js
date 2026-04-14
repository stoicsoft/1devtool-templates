const features = [
  {
    icon: "sparkles",
    title: "Instant reconciliation",
    body: "Match thousands of incoming and outgoing transfers in seconds with ML-assisted matching rules.",
  },
  {
    icon: "workflow",
    title: "Policy automation",
    body: "Approval chains, spend limits, and risk checks routed through a visual workflow builder.",
  },
  {
    icon: "chart",
    title: "Board-ready reporting",
    body: "Pre-built dashboards for investor updates, audit prep, and rolling 18-month forecasts.",
  },
  {
    icon: "globe",
    title: "Multi-entity & FX",
    body: "Consolidate USD, EUR, GBP, and 32 more currencies with automated intercompany netting.",
  },
  {
    icon: "lock",
    title: "Bank-grade security",
    body: "SOC 2 Type II, ISO 27001, and hardware-key enforcement across your entire workspace.",
  },
  {
    icon: "layers",
    title: "API-first platform",
    body: "Connect payroll, billing, and custom tooling via our REST and event-driven APIs.",
  },
]

const logos = ["Parallel", "Orbital", "Lumen", "Tessera", "Northwind", "Axiom"]

const tickers = [
  { sym: "BALANCE", val: "$12,480,210.33", d: "+1.2%", up: true },
  { sym: "RUNWAY", val: "31 mo", d: "+0.4", up: true },
  { sym: "MRR", val: "$1.82M", d: "+6.8%", up: true },
  { sym: "BURN", val: "$412k / mo", d: "−3.1%", up: true },
  { sym: "AR / AP", val: "$840k / $612k", d: "+18%", up: true },
  { sym: "UPTIME", val: "99.998%", d: "30d", up: true },
]

const testimonials = [
  {
    q: "Vaulta shaved six days off our monthly close and our auditors actually smiled.",
    a: "Sana Iyer",
    r: "VP Finance, Lumen",
  },
  {
    q: "We moved $1.4B through Vaulta last year. Zero reconciliation incidents.",
    a: "Mateo Álvarez",
    r: "Treasurer, Orbital",
  },
  {
    q: "Our FP&A team finally owns the runway model instead of patching spreadsheets.",
    a: "Priya Ramaswamy",
    r: "CFO, Parallel",
  },
]

const pricing = [
  {
    name: "Core",
    price: "$49",
    cadence: "/ user / month",
    body: "For early-stage ops teams consolidating their first bank stack.",
    perks: ["Up to 5 bank accounts", "Automated reconciliation", "Standard reports", "Email support"],
  },
  {
    name: "Growth",
    price: "$129",
    cadence: "/ user / month",
    body: "For high-velocity finance teams scaling across entities.",
    perks: [
      "Unlimited bank accounts",
      "Workflow builder + approvals",
      "FX & multi-entity",
      "Audit log + SOC 2 bundle",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "tailored",
    body: "For global groups with custody, treasury, and compliance requirements.",
    perks: [
      "Dedicated customer engineer",
      "Custom SSO + SCIM",
      "On-prem data residency",
      "Uptime SLA",
      "Security review support",
    ],
  },
]

const faqs = [
  {
    q: "How long does implementation take?",
    a: "Most teams are live in under 10 business days. Our onboarding engineer handles the bank connections, chart-of-accounts mapping, and user provisioning.",
  },
  {
    q: "Which banks do you connect to?",
    a: "We connect directly to 180+ institutions via bank-native APIs, plus every major aggregator. If your bank isn't listed, we'll build the connector.",
  },
  {
    q: "Is our data secure?",
    a: "Yes. Vaulta is SOC 2 Type II and ISO 27001 certified. All data is encrypted at rest with AES-256 and in transit with TLS 1.3, with hardware-key enforcement across admin roles.",
  },
  {
    q: "Can we use Vaulta alongside existing ERP?",
    a: "Absolutely. Native integrations cover NetSuite, Xero, QuickBooks, and Sage Intacct, and our API lets you pipe entries into bespoke systems.",
  },
]

function Logo() {
  return (
    <svg viewBox="0 0 28 28" className="h-6 w-6" aria-hidden>
      <path d="M4 6h20M4 14h20M4 22h12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

function Icon({ name, className = "h-5 w-5" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "sparkles") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M6 18l3-3M15 9l3-3"/></svg>)
  if (name === "workflow") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="3" width="7" height="5" rx="1.2"/><rect x="14" y="3" width="7" height="5" rx="1.2"/><rect x="8" y="16" width="8" height="5" rx="1.2"/><path d="M7 8v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8"/><path d="M12 13v3"/></svg>)
  if (name === "chart") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 4v16h16"/><path d="M7 14l3-3 3 3 5-6"/></svg>)
  if (name === "globe") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>)
  if (name === "lock") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>)
  if (name === "layers") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 18l9 5 9-5"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "trend") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>)
  if (name === "shield") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3 4 6v6c0 5 3.5 8.6 8 9 4.5-.4 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>)
  if (name === "zap") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>)
  if (name === "pin") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="10" r="3"/><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/></svg>)
  return null
}

function DashboardMock() {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#111627]/90 to-[#0a0e1a]/90 p-4 shadow-[0_40px_120px_-40px_rgba(76,141,255,0.45)] backdrop-blur">
      <div className="flex items-center gap-2 px-2 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-4 font-mono text-xs text-white/40">vaulta.app / treasury</span>
      </div>
      <div className="grid gap-3 md:grid-cols-[220px_1fr]">
        <aside className="rounded-2xl border border-white/5 bg-black/40 p-3 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-white/80">Workspace</span>
            <span className="font-mono text-[10px] text-white/40">Parallel Inc</span>
          </div>
          <ul className="mt-3 space-y-1 text-white/60">
            {[
              ["Overview", true],
              ["Accounts", false],
              ["Payments", false],
              ["Reconcile", false],
              ["Forecasts", false],
              ["Reports", false],
            ].map(([label, active]) => (
              <li
                key={label}
                className={`flex items-center justify-between rounded-lg px-2.5 py-2 ${
                  active ? "bg-white/10 text-white" : "hover:bg-white/5"
                }`}
              >
                <span>{label}</span>
                {active && <span className="h-1.5 w-1.5 rounded-full bg-[#7dd3fc]" />}
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.03] p-3">
            <p className="text-[10px] uppercase tracking-widest text-white/40">Net cash</p>
            <p className="font-serif mt-1 text-xl text-white">$12.48M</p>
            <p className="mt-1 text-[10px] text-emerald-400">+1.2% vs last week</p>
          </div>
        </aside>
        <div className="rounded-2xl border border-white/5 bg-black/40 p-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/40">Treasury overview</p>
              <p className="font-serif mt-1 text-3xl text-white">Runway 31 months</p>
            </div>
            <div className="flex gap-1 text-[10px]">
              {["1W", "1M", "3M", "1Y", "ALL"].map((t, i) => (
                <span
                  key={t}
                  className={`rounded-md px-2 py-1 ${
                    i === 2 ? "bg-[#4c8dff]/20 text-[#7dd3fc]" : "text-white/40"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Chart */}
          <div className="relative mt-4 h-40 rounded-xl border border-white/5 bg-gradient-to-b from-[#4c8dff]/10 to-transparent p-3">
            <div className="absolute inset-x-3 bottom-3 top-3 flex items-end justify-between">
              {[42, 55, 48, 63, 58, 72, 69, 82, 78, 88, 92, 86].map((h, i) => (
                <div
                  key={i}
                  className="bar w-[5%] rounded-sm bg-gradient-to-t from-[#4c8dff] to-[#7dd3fc]"
                  style={{ height: `${h}%`, animationDelay: `${i * 60}ms` }}
                />
              ))}
            </div>
            <div className="absolute inset-x-3 bottom-3 top-3">
              <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="h-full w-full">
                <path
                  d="M0 34 L10 28 L20 30 L30 22 L40 24 L50 18 L60 16 L70 10 L80 12 L90 6 L100 8"
                  fill="none"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="0.6"
                />
              </svg>
            </div>
          </div>

          {/* Rows */}
          <div className="mt-4 grid gap-2">
            {[
              { s: "Wire · JPM ops", a: "+$82,400.00", t: "10:42", tag: "AR", ok: true },
              { s: "ACH · Payroll run", a: "−$412,910.00", t: "09:15", tag: "AP", ok: true },
              { s: "FX netting · USD→EUR", a: "€104,221.14", t: "08:02", tag: "FX", ok: true },
            ].map((r) => (
              <div
                key={r.s}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2 text-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-[#4c8dff]/20 text-[10px] font-semibold text-[#7dd3fc]">
                    {r.tag}
                  </span>
                  <div>
                    <p className="text-white/90">{r.s}</p>
                    <p className="text-white/40 font-mono">{r.t}</p>
                  </div>
                </div>
                <span className="font-mono text-emerald-400">{r.a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#05070d] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[860px] aurora" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />

      {/* Nav */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#7dd3fc] to-[#4c8dff] text-[#05070d]">
              <Logo />
            </span>
            Vaulta
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#platform" className="hover:text-white">Platform</a>
            <a href="#stats" className="hover:text-white">Metrics</a>
            <a href="#security" className="hover:text-white">Security</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#login" className="hidden rounded-full px-4 py-2 text-sm text-white/80 hover:text-white md:inline">
              Sign in
            </a>
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7dd3fc] to-[#4c8dff] px-4 py-2 text-sm font-semibold text-[#05070d] transition hover:opacity-90"
            >
              Book demo <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 text-center md:pt-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="ping absolute inline-flex h-full w-full rounded-full bg-[#7dd3fc]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7dd3fc]" />
            </span>
            New · Instant FX netting, now live in 34 currencies
          </span>
          <h1 className="font-serif mx-auto mt-6 max-w-4xl text-[clamp(2.8rem,6.5vw,5.5rem)] leading-[1.02] tracking-tight">
            The <em className="text-[#7dd3fc] not-italic">financial OS</em>
            <br className="hidden sm:block" /> for modern treasury.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Consolidate every account, automate reconciliation, and forecast runway with confidence — all from a
            single operator-grade surface.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7dd3fc] to-[#4c8dff] px-6 py-3.5 text-sm font-semibold text-[#05070d] shadow-[0_20px_60px_-20px_rgba(76,141,255,0.6)] transition hover:opacity-90"
            >
              Start free for 30 days
              <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#platform"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm font-medium text-white/90 transition hover:border-white/50 hover:bg-white/5"
            >
              Tour the platform
            </a>
          </div>
          <p className="mt-5 text-xs text-white/50">
            Free 30-day trial. No card required. Cancel anytime.
          </p>

          {/* Dashboard */}
          <div className="mx-auto mt-16 max-w-6xl">
            <DashboardMock />
          </div>
        </div>

        {/* Ticker */}
        <div className="relative border-y border-white/10 bg-black/40 backdrop-blur">
          <div className="flex animate-ticker whitespace-nowrap gap-10 py-3 font-mono text-xs">
            {[...tickers, ...tickers].map((t, i) => (
              <span key={i} className="flex items-center gap-3 text-white/70">
                <span className="text-white/40">{t.sym}</span>
                <span className="text-white">{t.val}</span>
                <span className={t.up ? "text-emerald-400" : "text-rose-400"}>{t.d}</span>
                <span className="text-white/20">|</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Logo row */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-center text-xs uppercase tracking-[0.22em] text-white/50">
            Trusted by finance teams at
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-6">
            {logos.map((l) => (
              <div key={l} className="text-center font-serif text-xl tracking-tight text-white/50 transition hover:text-white">
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section id="platform" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#7dd3fc]">Platform</p>
              <h2 className="font-serif mt-3 max-w-2xl text-4xl leading-[1.05] md:text-5xl">
                One surface. Every account. Zero spreadsheet tabs.
              </h2>
            </div>
            <p className="max-w-md text-white/60">
              Vaulta replaces twelve tools and thirty tabs with a single operator console tuned for finance
              teams who move fast without breaking books.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 transition hover:border-white/25"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#4c8dff]/0 blur-3xl transition group-hover:bg-[#4c8dff]/30" />
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#7dd3fc]/20 to-[#4c8dff]/10 text-[#7dd3fc]">
                  <Icon name={f.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/60">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bento showcase */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-4 md:grid-cols-6 md:grid-rows-2">
            <div className="shine md:col-span-4 rounded-3xl border border-white/10 bg-gradient-to-br from-[#4c8dff]/20 via-[#111627] to-[#0a0e1a] p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-[#7dd3fc]">Real-time cash</p>
              <h3 className="font-serif mt-3 text-3xl md:text-4xl">
                See balances move across every bank — live.
              </h3>
              <p className="mt-4 max-w-md text-white/70">
                Sub-minute sync with 180+ institutions. No overnight batches, no stale snapshots.
              </p>
              <div className="mt-6 flex items-end gap-2">
                {[30, 45, 55, 48, 65, 72, 80, 68, 92, 84, 96].map((h, i) => (
                  <div
                    key={i}
                    className="bar rounded-t-md bg-gradient-to-t from-[#4c8dff] to-[#7dd3fc]"
                    style={{ height: `${h}px`, width: 22, animationDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
            </div>

            <div className="md:col-span-2 rounded-3xl border border-white/10 bg-[#111627] p-6">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.22em] text-white/50">Auto reconciliation</p>
                <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                  98.4% match
                </span>
              </div>
              <h3 className="font-serif mt-3 text-2xl">Rules that teach themselves.</h3>
              <ul className="mt-5 space-y-2 text-sm text-white/70">
                {[
                  "Payroll · matched 412/412",
                  "AR wires · matched 189/189",
                  "Corp cards · matched 1,204/1,212",
                ].map((r) => (
                  <li key={r} className="flex items-center justify-between rounded-xl bg-black/30 px-3 py-2">
                    <span>{r}</span>
                    <Icon name="check" className="h-4 w-4 text-emerald-300" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 rounded-3xl border border-white/10 bg-[#111627] p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-white/50">Forecast confidence</p>
              <h3 className="font-serif mt-3 text-2xl">Runway you can defend.</h3>
              <div className="mt-5">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-4xl">31</span>
                  <span className="text-sm text-white/50">months</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#7dd3fc] to-[#4c8dff]" />
                </div>
                <p className="mt-3 text-xs text-white/50">P50 scenario · refreshed every 15 min</p>
              </div>
            </div>

            <div className="md:col-span-4 rounded-3xl border border-white/10 bg-[#111627] p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-white/50">Workflows</p>
              <h3 className="font-serif mt-3 text-2xl md:text-3xl">
                Design approval flows that mirror your org chart.
              </h3>
              <div className="mt-6 grid grid-cols-4 gap-2 text-[11px] font-medium">
                {[
                  { t: "Request", c: "border-white/15 bg-white/5" },
                  { t: "Policy check", c: "border-[#7dd3fc]/40 bg-[#7dd3fc]/10 text-[#7dd3fc]" },
                  { t: "CFO sign-off", c: "border-amber-400/40 bg-amber-400/10 text-amber-200" },
                  { t: "Bank send", c: "border-emerald-400/40 bg-emerald-400/10 text-emerald-200" },
                ].map((s, i) => (
                  <div key={s.t} className="relative">
                    <div className={`rounded-xl border ${s.c} px-3 py-3`}>
                      <span className="opacity-60">0{i + 1}</span>
                      <p className="mt-1">{s.t}</p>
                    </div>
                    {i < 3 && (
                      <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-white/30 md:block">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="relative z-10 border-y border-white/5 bg-black/30">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-4">
          {[
            { k: "$8.4B", v: "Annualized payment volume" },
            { k: "99.998%", v: "Platform uptime, trailing 12 months" },
            { k: "4.2×", v: "Faster monthly close on average" },
            { k: "180+", v: "Bank connectors worldwide" },
          ].map((s) => (
            <div key={s.v} className="border-l border-white/10 pl-6">
              <p className="font-serif text-5xl text-white">{s.k}</p>
              <p className="mt-2 text-sm text-white/60">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section id="security" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#7dd3fc]">Security</p>
              <h2 className="font-serif mt-3 text-4xl leading-[1.05] md:text-5xl">
                Built to the spec your CISO asked for — before they asked.
              </h2>
              <p className="mt-5 max-w-lg text-white/60">
                SOC 2 Type II, ISO 27001, and PCI DSS in production. Hardware-key enforced admin roles, tenant
                isolation, and immutable audit trails by default.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#05070d] transition hover:bg-[#7dd3fc]"
                >
                  <Icon name="shield" className="h-4 w-4" /> Security overview
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
                >
                  Trust report <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { t: "SOC 2 Type II", d: "Annual audit · latest 2026" },
                { t: "ISO 27001", d: "Certified · statement of applicability on request" },
                { t: "PCI DSS L1", d: "Payment card handling" },
                { t: "GDPR · DPA", d: "EU data residency available" },
                { t: "SSO + SCIM", d: "Okta, Entra, Google" },
                { t: "Hardware keys", d: "WebAuthn enforced on admin" },
              ].map((b) => (
                <div
                  key={b.t}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/30"
                >
                  <div className="flex items-center gap-2 text-[#7dd3fc]">
                    <Icon name="shield" className="h-4 w-4" />
                    <p className="text-sm font-semibold text-white">{b.t}</p>
                  </div>
                  <p className="mt-2 text-xs text-white/50">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#7dd3fc]">Customers</p>
            <h2 className="font-serif mt-3 text-4xl md:text-5xl">Finance teams ship faster with Vaulta.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.a}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-7"
              >
                <Icon name="trend" className="h-6 w-6 text-[#7dd3fc]" />
                <p className="font-serif mt-5 text-xl leading-snug text-white/90">&ldquo;{t.q}&rdquo;</p>
                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#7dd3fc] to-[#4c8dff] font-semibold text-[#05070d]">
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
            <p className="text-xs uppercase tracking-[0.22em] text-[#7dd3fc]">Pricing</p>
            <h2 className="font-serif mt-3 text-4xl md:text-5xl">Scale with your finance team.</h2>
            <p className="mt-5 text-white/60">
              Pricing per seat. Unlimited connected accounts on every paid plan. Switch tiers any time.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pricing.map((p) => (
              <article
                key={p.name}
                className={`relative flex flex-col rounded-3xl border p-8 transition ${
                  p.featured
                    ? "border-[#4c8dff] bg-gradient-to-b from-[#4c8dff]/10 to-white/[0.02] shadow-[0_30px_80px_-40px_rgba(76,141,255,0.6)]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/25"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-[#7dd3fc] to-[#4c8dff] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#05070d]">
                    Most chosen
                  </span>
                )}
                <p className="text-lg font-semibold">{p.name}</p>
                <p className="mt-1 text-sm text-white/60">{p.body}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-serif text-5xl">{p.price}</span>
                  <span className="text-sm text-white/50">{p.cadence}</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm text-white/80">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-[#7dd3fc]" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    p.featured
                      ? "bg-gradient-to-r from-[#7dd3fc] to-[#4c8dff] text-[#05070d] hover:opacity-90"
                      : "border border-white/20 text-white hover:border-white hover:bg-white hover:text-[#05070d]"
                  }`}
                >
                  {p.name === "Enterprise" ? "Talk to sales" : `Start with ${p.name}`}
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#7dd3fc]">FAQ</p>
              <h2 className="font-serif mt-3 text-4xl md:text-5xl">Answers, from the team.</h2>
              <p className="mt-5 text-white/60">
                Still curious? Book time with a treasury engineer — no pitch deck, just questions and honest
                numbers.
              </p>
            </div>
            <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.02]">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                    {f.q}
                    <span className="ml-4 grid h-7 w-7 place-items-center rounded-full border border-white/15 text-white/50 transition group-open:rotate-45 group-open:border-[#7dd3fc] group-open:text-[#7dd3fc]">
                      +
                    </span>
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
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 p-10 md:p-16">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(700px circle at 15% 0%, rgba(125,211,252,0.28), transparent 55%), radial-gradient(700px circle at 85% 100%, rgba(76,141,255,0.28), transparent 55%), #0a0e1a",
              }}
            />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="font-serif text-4xl leading-[1.05] md:text-6xl">
                  Close faster. <em className="text-[#7dd3fc] not-italic">Forecast sharper.</em>
                </h2>
                <p className="mt-5 max-w-lg text-white/70">
                  Book a 20-minute demo with a treasury engineer. We&apos;ll mirror your bank stack live and show
                  you close day one.
                </p>
              </div>
              <form className="flex w-full flex-col gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full flex-1 rounded-xl bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:ring-2 focus:ring-[#4c8dff]/40"
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7dd3fc] to-[#4c8dff] px-5 py-3 text-sm font-semibold text-[#05070d] transition hover:opacity-90"
                >
                  Book demo <Icon name="arrow" className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 text-lg font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#7dd3fc] to-[#4c8dff] text-[#05070d]">
                <Logo />
              </span>
              Vaulta
            </a>
            <p className="mt-4 max-w-sm text-sm text-white/50">
              Vaulta Financial OS — secure infrastructure for modern money movement. Made in SF &amp; NYC.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-white/50">
              <Icon name="pin" className="h-4 w-4" />
              548 Market St, San Francisco
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#platform" className="hover:text-white">Platform</a></li>
              <li><a href="#stats" className="hover:text-white">Metrics</a></li>
              <li><a href="#security" className="hover:text-white">Security</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Resources</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Changelog</a></li>
              <li><a href="#" className="hover:text-white">Docs</a></li>
              <li><a href="#" className="hover:text-white">API</a></li>
              <li><a href="#" className="hover:text-white">Status</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers · hiring</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-white/40">
            <span>© {new Date().getFullYear()} Vaulta, Inc. All rights reserved.</span>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">DPA</a>
              <a href="#" className="hover:text-white">Sub-processors</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
