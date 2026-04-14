const features = [
  {
    tag: "01",
    name: "Live dashboards",
    body: "Cohort retention, funnels, and revenue ledgers rebuild themselves every 12 seconds without a warehouse job.",
  },
  {
    tag: "02",
    name: "Journey replay",
    body: "Replay every touch a cohort has taken — from first ad click to expansion deal — as a timeline, not a dump.",
  },
  {
    tag: "03",
    name: "AI readouts",
    body: "Each dashboard ships a plain-English summary that flags anomalies worth a Slack ping.",
  },
  {
    tag: "04",
    name: "Warehouse-native",
    body: "Point at Snowflake, BigQuery, or Postgres — Algora models events in place with zero sync drift.",
  },
]

const logos = ["Mercantile", "Northlight", "Helium", "Parable", "Cartograph", "Union Works", "Bivouac"]

const metrics = [
  { label: "Teams shipping weekly", value: "1,800+" },
  { label: "Events indexed / day", value: "42B" },
  { label: "Avg. query p95", value: "180ms" },
  { label: "Warehouse connectors", value: "36" },
]

const stories = [
  {
    quote:
      "We replaced three dashboards and two BI seats in a week. The AI readout flagged a pricing regression before our CFO opened Slack.",
    name: "Priya Madan",
    role: "Head of Growth, Northlight",
  },
  {
    quote:
      "The journey replay is the first analytics product our PMs actually click into. We stopped arguing about funnels.",
    name: "Felix Armand",
    role: "CPO, Cartograph",
  },
  {
    quote:
      "Algora plugged into Snowflake in forty minutes. Our finance team wrote SQL on day two and nothing broke.",
    name: "Adaeze Okolie",
    role: "VP Data, Helium",
  },
]

const pricing = [
  {
    name: "Starter",
    price: "$0",
    cadence: "free forever",
    blurb: "For teams sketching their first telemetry story.",
    perks: ["2M events / month", "3 seats", "Community Slack", "7-day history"],
  },
  {
    name: "Team",
    price: "$480",
    cadence: "per month",
    blurb: "The default for product, growth, and finance squads.",
    perks: [
      "40M events / month",
      "Unlimited seats",
      "AI readouts",
      "Warehouse sync",
      "Priority response",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    cadence: "annual",
    blurb: "Regulated teams with SSO, audit, and data residency.",
    perks: [
      "Unlimited events",
      "SOC 2 + HIPAA",
      "VPC deploys",
      "Named CSM",
      "Custom SLA",
    ],
  },
]

const faqs = [
  {
    q: "How does pricing work past the trial?",
    a: "You pay for events you index, never for seats. Read-only stakeholders are free and we round event counts down every month.",
  },
  {
    q: "Do you support our warehouse?",
    a: "Snowflake, BigQuery, Databricks, Redshift, and Postgres are first-class. DuckDB and ClickHouse are in beta; ask us for a preview.",
  },
  {
    q: "Is the AI readout safe to send customers?",
    a: "Readouts run on a private model that never leaves your tenant. You can mute specific metrics or approve each readout before publish.",
  },
  {
    q: "Can we replace our BI tool?",
    a: "For 80% of teams, yes. Algora does dashboards, cohorts, and notebooks. For stored procedures and row-level governance we pair with dbt + Hex.",
  },
]

function Logo() {
  return (
    <svg viewBox="0 0 28 28" className="h-6 w-6" aria-hidden>
      <circle cx="14" cy="14" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M5 18c4-2 7-8 11-8s7 4 7 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function Icon({ name, className = "h-5 w-5" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...s}><path d="M5 12h14M13 6l6 6-6 6" /></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...s}><path d="m5 12 5 5 9-11" /></svg>)
  if (name === "spark") return (<svg viewBox="0 0 24 24" className={className} {...s}><path d="M12 2v4M12 18v4M4 12h4M16 12h4M6 6l2.8 2.8M15.2 15.2 18 18M18 6l-2.8 2.8M8.8 15.2 6 18" /></svg>)
  if (name === "bolt") return (<svg viewBox="0 0 24 24" className={className} {...s}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>)
  if (name === "shield") return (<svg viewBox="0 0 24 24" className={className} {...s}><path d="M12 3 4 6v6c0 5 3.5 8.6 8 9 4.5-.4 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>)
  if (name === "lock") return (<svg viewBox="0 0 24 24" className={className} {...s}><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>)
  return null
}

function SparkChart() {
  return (
    <svg viewBox="0 0 320 120" className="h-full w-full">
      <defs>
        <linearGradient id="gA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c6bff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7c6bff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="gB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34e5d5" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#34e5d5" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 95 C 20 80, 40 88, 60 70 S 100 40, 130 52 190 85, 220 60 270 30, 320 42 L320 120 L0 120 Z"
        fill="url(#gA)"
      />
      <path
        d="M0 95 C 20 80, 40 88, 60 70 S 100 40, 130 52 190 85, 220 60 270 30, 320 42"
        fill="none"
        stroke="#7c6bff"
        strokeWidth="2"
      />
      <path
        d="M0 110 C 25 100, 55 95, 85 92 S 140 70, 175 78 235 92, 270 68 310 55, 320 58 L320 120 L0 120 Z"
        fill="url(#gB)"
      />
      <path
        d="M0 110 C 25 100, 55 95, 85 92 S 140 70, 175 78 235 92, 270 68 310 55, 320 58"
        fill="none"
        stroke="#34e5d5"
        strokeWidth="2"
      />
    </svg>
  )
}

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#05060b] text-[#e7ecff]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] aurora" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] grid-bg" />

      {/* Nav */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#7c6bff] to-[#34e5d5] text-[#05060b]">
              <Logo />
            </span>
            Algora
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#product" className="hover:text-white">Product</a>
            <a href="#customers" className="hover:text-white">Customers</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#changelog" className="hover:text-white">Changelog</a>
            <a href="#docs" className="hover:text-white">Docs</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#login" className="hidden rounded-full px-4 py-2 text-sm text-white/80 hover:text-white md:inline">
              Sign in
            </a>
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#05060b] transition hover:bg-[#e7ff6a]"
            >
              Start free
              <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-14 md:pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/70 backdrop-blur">
              <span className="dot-pulse h-1.5 w-1.5 rounded-full bg-[#34e5d5]" />
              New · AI readouts shipping this Tuesday
            </span>
            <h1 className="mt-6 text-[clamp(2.75rem,6.5vw,5.5rem)] font-semibold leading-[0.98] tracking-tight">
              Data that tells the <span className="serif italic text-[#34e5d5]">story</span>
              <br className="hidden sm:block" /> before you ask.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Algora rebuilds dashboards, cohorts, and finance readouts from your warehouse every twelve
              seconds — then explains what changed in plain English.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7c6bff] to-[#34e5d5] px-6 py-3.5 text-sm font-semibold text-[#05060b] shadow-[0_20px_60px_-20px_rgba(124,107,255,0.8)] transition hover:brightness-110"
              >
                Start free — no card
                <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#product"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm font-medium text-white/90 transition hover:border-white/50 hover:bg-white/5"
              >
                See a live demo
              </a>
            </div>
          </div>

          {/* Dashboard mock */}
          <div className="relative mt-16">
            <div className="absolute inset-x-8 -top-4 h-10 rounded-t-3xl bg-white/5 blur-xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 shadow-[0_40px_120px_-40px_rgba(124,107,255,0.45)] backdrop-blur">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff7ab5]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e7ff6a]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#34e5d5]" />
                  <span className="ml-2 rounded-md bg-white/5 px-2 py-1 font-mono text-white/70">app.algora.co/growth</span>
                </div>
                <span className="hidden text-[11px] text-white/50 md:inline">Last sync · 8 seconds ago</span>
              </div>

              <div className="mt-4 grid gap-4 p-4 md:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/50">MRR this week</p>
                      <p className="mt-1 text-3xl font-semibold">$1,284,902</p>
                    </div>
                    <span className="rounded-full border border-[#e7ff6a]/30 bg-[#e7ff6a]/10 px-2 py-1 text-xs font-semibold text-[#e7ff6a]">
                      +4.8%
                    </span>
                  </div>
                  <div className="mt-4 h-36">
                    <SparkChart />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-white/50">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">AI readout</p>
                    <p className="mt-2 text-sm text-white/80">
                      Expansion revenue led the bump (+$42k); churn held at 2.1%. A seven-seat deal at
                      Cartograph upgraded on Wednesday after a 12-day pilot.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-white/60">
                      <span className="rounded-full border border-white/10 px-2 py-0.5">Expansion</span>
                      <span className="rounded-full border border-white/10 px-2 py-0.5">Net retention 118%</span>
                      <span className="rounded-full border border-white/10 px-2 py-0.5">Pilot converted</span>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">Anomalies</p>
                    <ul className="mt-2 space-y-2 text-sm text-white/80">
                      <li className="flex items-center justify-between">
                        <span>Signup → Activated</span>
                        <span className="text-[#ff7ab5]">-6.1% ▼</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Onboarding / Step 3</span>
                        <span className="text-[#e7ff6a]">+11.4% ▲</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Checkout / Stripe webhook lag</span>
                        <span className="text-[#34e5d5]">resolved</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo marquee */}
        <div className="relative border-y border-white/10 bg-black/40 py-6 backdrop-blur">
          <div className="mx-auto mb-4 max-w-7xl px-6 text-center text-xs uppercase tracking-[0.22em] text-white/50">
            Trusted by product and finance teams at
          </div>
          <div className="flex animate-marquee whitespace-nowrap gap-16 text-xl font-medium text-white/40">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="flex items-center gap-16">
                <span>{l}</span>
                <span className="text-[#7c6bff]">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="product" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#34e5d5]">What&apos;s inside</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-[1.05] md:text-5xl">
                A warehouse-native stack, explained by an <span className="serif italic">analyst</span>.
              </h2>
            </div>
            <p className="max-w-md text-white/60">
              Four primitives that cover 80% of what BI tools promise — in a tenth of the setup, and with a
              narrator.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <article
                key={f.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 transition hover:border-white/25"
              >
                <div className="absolute -right-6 -top-8 h-32 w-32 rounded-full bg-[#7c6bff]/0 blur-3xl transition group-hover:bg-[#7c6bff]/40" />
                <p className="text-5xl font-semibold text-white/10">{f.tag}</p>
                <h3 className="mt-4 text-2xl font-semibold">{f.name}</h3>
                <p className="mt-3 text-sm text-white/65">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Split feature */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#7c6bff] via-[#6b6dff] to-[#34e5d5] text-[#05060b]">
            <div className="grid items-center gap-10 p-8 md:grid-cols-2 md:p-14">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-black/60">Warehouse-native by design</p>
                <h3 className="mt-4 text-4xl font-semibold leading-[1.05] md:text-5xl">
                  Your data stays where it is — Algora reads from Snowflake in under forty minutes.
                </h3>
                <p className="mt-5 max-w-lg text-black/80">
                  Point us at a role, pick the schemas that matter, and we model events in place. No ETL,
                  no warehouse bills, no midnight sync failures.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-[#05060b] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110">
                    Connect a warehouse <Icon name="arrow" className="h-4 w-4" />
                  </a>
                  <a href="#docs" className="inline-flex items-center gap-2 rounded-full border border-black/30 px-5 py-3 text-sm font-semibold text-[#05060b] transition hover:bg-black/10">
                    Read the docs
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-3xl border border-black/20 bg-[#05060b]/90 p-5 font-mono text-xs leading-relaxed text-[#e7ecff]">
                  <p className="text-white/50">$ algora connect</p>
                  <p className="mt-2"><span className="text-[#e7ff6a]">?</span> Which warehouse? <span className="text-[#34e5d5]">Snowflake</span></p>
                  <p><span className="text-[#e7ff6a]">?</span> Role &amp; schema? <span className="text-[#34e5d5]">ANALYST / EVENTS</span></p>
                  <p><span className="text-[#e7ff6a]">✓</span> Connected · 2,134 tables</p>
                  <p><span className="text-[#e7ff6a]">✓</span> Modeling <span className="text-[#ff7ab5]">signup</span>, <span className="text-[#ff7ab5]">activate</span>, <span className="text-[#ff7ab5]">upgrade</span></p>
                  <p><span className="text-[#e7ff6a]">✓</span> Dashboard ready · <span className="underline">app.algora.co/onboarding</span></p>
                  <p className="mt-2 text-white/50">Next sync in 12s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-4 md:p-10">
            {metrics.map((m) => (
              <div key={m.label} className="px-2">
                <p className="text-3xl font-semibold md:text-4xl">{m.value}</p>
                <p className="mt-1 text-sm text-white/55">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section id="customers" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-[#ff7ab5]">Customer stories</p>
            <h2 className="mt-3 text-4xl font-semibold leading-[1.05] md:text-5xl">
              Teams sleep better after they pipe events through us.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {stories.map((s, i) => (
              <figure
                key={i}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6"
              >
                <blockquote className="serif text-xl leading-snug text-white/90">&ldquo;{s.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#7c6bff] to-[#34e5d5] text-[#05060b] font-semibold">
                    {s.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{s.name}</p>
                    <p className="text-xs text-white/55">{s.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#e7ff6a]">Pricing</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-[1.05] md:text-5xl">
                Pay for events — never for seats.
              </h2>
            </div>
            <p className="max-w-md text-white/60">
              Stakeholders read, analysts write, and finance exports. We bill on the events you index, so
              growing your audience never costs more.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {pricing.map((p) => (
              <article
                key={p.name}
                className={
                  "relative overflow-hidden rounded-3xl border p-6 transition " +
                  (p.featured
                    ? "border-[#34e5d5]/40 bg-gradient-to-b from-[#7c6bff]/20 to-[#34e5d5]/10 shadow-[0_30px_80px_-30px_rgba(52,229,213,0.45)]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/25")
                }
              >
                {p.featured ? (
                  <span className="absolute right-4 top-4 rounded-full border border-[#e7ff6a]/40 bg-[#e7ff6a]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#e7ff6a]">
                    Most loved
                  </span>
                ) : null}
                <p className="text-xs uppercase tracking-[0.22em] text-white/55">{p.name}</p>
                <p className="mt-3 text-4xl font-semibold">
                  {p.price}
                  <span className="ml-1 text-sm font-normal text-white/55">/ {p.cadence}</span>
                </p>
                <p className="mt-2 max-w-sm text-sm text-white/60">{p.blurb}</p>
                <ul className="mt-6 space-y-2 text-sm text-white/80">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-[#e7ff6a]" /> {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={
                    "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition " +
                    (p.featured
                      ? "bg-white text-[#05060b] hover:bg-[#e7ff6a]"
                      : "border border-white/20 text-white hover:bg-white/5")
                  }
                >
                  {p.featured ? "Start Team" : p.name === "Starter" ? "Start free" : "Contact us"}
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-[#34e5d5]">Frequently asked</p>
          <h2 className="mt-3 text-4xl font-semibold leading-[1.05] md:text-5xl">The short answers.</h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                  {f.q}
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 text-white/60 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-white/65">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-10 md:p-16">
            <div className="pointer-events-none absolute inset-0 aurora" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h3 className="text-4xl font-semibold leading-[1.05] md:text-6xl">
                  Ship your first <span className="serif italic text-[#34e5d5]">readout</span> this afternoon.
                </h3>
                <p className="mt-4 max-w-xl text-white/65">
                  Free forever for 2M events, no credit card, no mandatory demo. Your finance team will be
                  writing SQL by the second coffee.
                </p>
              </div>
              <form className="grid gap-3 rounded-3xl border border-white/15 bg-black/40 p-5 backdrop-blur">
                <label className="text-xs uppercase tracking-[0.22em] text-white/55">Work email</label>
                <input
                  type="email"
                  placeholder="alex@northlight.co"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#7c6bff] focus:outline-none"
                />
                <button className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7c6bff] to-[#34e5d5] px-5 py-3 text-sm font-semibold text-[#05060b] transition hover:brightness-110">
                  Create workspace <Icon name="arrow" className="h-4 w-4" />
                </button>
                <p className="text-[11px] text-white/45">SOC 2 Type II · HIPAA ready · Data residency in US / EU.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-10 md:grid-cols-[1.2fr_repeat(3,1fr)]">
            <div>
              <div className="flex items-center gap-2 text-lg font-semibold">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#7c6bff] to-[#34e5d5] text-[#05060b]">
                  <Logo />
                </span>
                Algora
              </div>
              <p className="mt-4 max-w-sm text-sm text-white/55">
                The warehouse-native analytics stack for product, growth, and finance teams.
              </p>
            </div>
            <FooterCol title="Product" items={["Dashboards", "AI readouts", "Journeys", "Integrations"]} />
            <FooterCol title="Company" items={["About", "Careers", "Press", "Security"]} />
            <FooterCol title="Resources" items={["Docs", "Changelog", "Status", "Contact"]} />
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/45">
            <p>© 2026 Algora Labs · Built in Brooklyn &amp; Lisbon.</p>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5"><Icon name="shield" className="h-3.5 w-3.5" /> SOC 2 II</span>
              <span className="inline-flex items-center gap-1.5"><Icon name="lock" className="h-3.5 w-3.5" /> HIPAA</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.22em] text-white/55">{title}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="hover:text-white">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
