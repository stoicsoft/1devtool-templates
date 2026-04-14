const features = [
  {
    icon: "sparkles",
    title: "Answers with evidence",
    body: "Every response cites the docs, calls, and tickets it drew from — click any line to open the source.",
  },
  {
    icon: "graph",
    title: "Live metric recall",
    body: "Plug into Segment, Looker, or a warehouse and ask for a chart. Aether builds it in the reply.",
  },
  {
    icon: "inbox",
    title: "Zero-config ingest",
    body: "Notion, Linear, Slack, Gmail, and 48 more sources sync every 60 seconds, deltas only.",
  },
  {
    icon: "shield",
    title: "Enterprise guardrails",
    body: "Role-based retrieval, per-namespace encryption, SOC 2 Type II, and SSO with SCIM from day one.",
  },
  {
    icon: "branch",
    title: "Multi-agent workflows",
    body: "Chain research, drafting, and review into named workflows your whole team can trigger.",
  },
  {
    icon: "keyboard",
    title: "Built for keyboards",
    body: "Command bar, fuzzy doc jump, cited blocks, vim-style shortcuts — ship faster than the tab switch.",
  },
]

const steps = [
  { n: "01", t: "Connect", body: "Authorize your stack once — 50+ native integrations. No agents to install." },
  { n: "02", t: "Retrieve", body: "Aether builds a semantic graph across your org and keeps it warm in real time." },
  { n: "03", t: "Answer", body: "Ask in plain English. Get a sourced reply you can paste straight into a doc." },
  { n: "04", t: "Automate", body: "Turn repeat prompts into named workflows. Share them with the team." },
]

const testimonials = [
  {
    q: "Aether compressed my Monday prep from two hours to twenty minutes. The citations are the only reason the exec team trusts it.",
    a: "Priya K.",
    r: "Chief of Staff, StoicSoft",
  },
  {
    q: "We replaced three internal search tools the week we rolled it out. Onboarding took an afternoon.",
    a: "Marcus Lee",
    r: "VP Engineering, 1DevTool",
  },
  {
    q: "Our on-call runbook queries used to live in four wikis. Now they live in one thread.",
    a: "Nadia R.",
    r: "Head of Reliability, ServerCompass",
  },
]

const pricing = [
  {
    name: "Starter",
    price: "Free",
    cadence: "forever · 1 workspace",
    body: "For makers wiring up their first five sources.",
    perks: ["500 queries / month", "5 integrations", "Community support"],
  },
  {
    name: "Team",
    price: "$22",
    cadence: "/ seat / month",
    body: "For growing teams who want shared prompts and workflows.",
    perks: [
      "Unlimited queries",
      "All integrations",
      "Shared workflows",
      "Audit log",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "tailored · from 50 seats",
    body: "For organizations with custom retrieval and compliance needs.",
    perks: [
      "Role-based retrieval",
      "Custom models + VPC",
      "SSO + SCIM + DLP",
      "Dedicated success engineer",
    ],
  },
]

const faqs = [
  { q: "How is Aether different from enterprise search?", a: "Enterprise search returns documents; Aether returns decisions. Every answer is grounded in the exact lines of content it pulled, with a timeline of when they changed." },
  { q: "Do you train on our data?", a: "No. Your content never enters model training corpora. We use retrieval-augmented generation with per-tenant vector namespaces." },
  { q: "What about compliance?", a: "Aether is SOC 2 Type II, ISO 27001, and GDPR compliant. EU data residency is available on the Team plan and above." },
  { q: "Which models power Aether?", a: "A routed mix of frontier models with automatic fallback. Enterprises can pin to specific providers or bring their own." },
]

function Icon({ name, className = "h-5 w-5" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "sparkles") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M6 18l3-3M15 9l3-3"/></svg>)
  if (name === "graph") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 4v16h16"/><path d="M7 14l3-3 3 3 5-6"/></svg>)
  if (name === "inbox") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 13h4l2 3h6l2-3h4"/><path d="M3 13 6 5h12l3 8v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6Z"/></svg>)
  if (name === "shield") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3 4 6v6c0 5 3.5 8.6 8 9 4.5-.4 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>)
  if (name === "branch") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="12" r="2"/><path d="M6 7v10M8 12h8"/></svg>)
  if (name === "keyboard") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h.01M18 14h.01M10 14h4"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "star") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="m12 2 3 7 7 .6-5.3 4.6L18 22l-6-3.8L6 22l1.3-7.8L2 9.6 9 9l3-7Z"/></svg>)
  if (name === "play") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 4v16l14-8-14-8Z"/></svg>)
  return null
}

function Logo() {
  return (
    <svg viewBox="0 0 28 28" className="h-6 w-6" aria-hidden>
      <path d="M14 3 4 23h20L14 3Z" fill="currentColor" />
      <path d="M14 11v8M10 19h8" stroke="#06070a" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

function ChatMock() {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-4 shadow-[0_40px_120px_-40px_rgba(106,227,199,0.45)] glass">
      <div className="flex items-center justify-between border-b border-white/5 px-2 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
          <span className="ml-3 font-mono text-xs text-white/40">aether.app / workspace</span>
        </div>
        <span className="font-mono text-[10px] text-white/30">⌘K</span>
      </div>

      <div className="grid gap-3 p-3 md:grid-cols-[200px_1fr]">
        <aside className="hidden md:block rounded-2xl border border-white/5 bg-black/30 p-3 text-xs">
          <p className="text-[10px] uppercase tracking-widest text-white/40">Spaces</p>
          <ul className="mt-3 space-y-1 text-white/70">
            {["Company", "Product", "GTM", "Hiring", "Engineering"].map((s, i) => (
              <li key={s} className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 ${i === 1 ? "bg-white/10 text-white" : "hover:bg-white/5"}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${i === 1 ? "bg-[#6ae3c7]" : "bg-white/20"}`} />
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[10px] uppercase tracking-widest text-white/40">Workflows</p>
          <ul className="mt-3 space-y-1 text-white/60">
            <li className="rounded-lg bg-white/[0.03] px-2.5 py-1.5">Exec digest</li>
            <li className="px-2.5 py-1.5">Release notes</li>
            <li className="px-2.5 py-1.5">On-call brief</li>
          </ul>
        </aside>

        <div className="rounded-2xl border border-white/5 bg-black/30 p-4 fade-step">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[#7c8cff] to-[#6ae3c7] text-[10px] font-bold text-[#06070a]">P</span>
            <div>
              <p className="text-sm text-white/90">
                What changed in the Q1 roadmap and who owns the new items?
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-3">
            <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-[#6ae3c7] to-[#a88bff] text-[#06070a]">
              <Icon name="sparkles" className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <p className="text-sm leading-relaxed text-white/85">
                Three items shifted since last Monday. The billing revamp moved from Q1 to Q2; the mobile app
                enters beta the week of May 5; the SSO rollout is still on track.
              </p>

              <div className="mt-3 space-y-2">
                {[
                  { t: "Billing revamp → Q2", o: "Owner: Anya · moved 3d ago", cite: "Linear #ROAD-284" },
                  { t: "Mobile beta · week of May 5", o: "Owner: Rafa · confirmed today", cite: "Notion / Mobile brief" },
                  { t: "SSO rollout · on track", o: "Owner: Kavi · shipping Apr 28", cite: "GitHub PR #1284" },
                ].map((r) => (
                  <div key={r.t} className="rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{r.t}</p>
                      <span className="font-mono text-[10px] text-[#6ae3c7]">{r.cite}</span>
                    </div>
                    <p className="mt-0.5 text-[11px] text-white/50">{r.o}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 text-[11px] text-white/40">
                <span className="grid h-6 w-6 place-items-center rounded-md bg-white/[0.04]">4</span>
                sources · 1.2s · confidence 0.92
                <span className="caret ml-2 inline-block h-3 w-1.5 bg-[#6ae3c7]/80" />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-black/50 px-3 py-2">
            <Icon name="sparkles" className="h-4 w-4 text-white/50" />
            <input
              defaultValue="Draft the weekly exec digest"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/40"
              readOnly
            />
            <span className="font-mono text-[10px] text-white/40">↵</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#06070a] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[820px] aura" />
      <div className="pointer-events-none absolute inset-0 dotgrid opacity-[0.35]" />

      {/* Nav */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="text-[#6ae3c7]"><Logo /></span>
            Aether
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#product" className="hover:text-white">Product</a>
            <a href="#workflow" className="hover:text-white">Workflows</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#customers" className="hover:text-white">Customers</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#" className="hidden rounded-full px-4 py-2 text-sm text-white/80 hover:text-white md:inline">
              Sign in
            </a>
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#06070a] transition hover:bg-[#6ae3c7]"
            >
              Try free <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-16 text-center md:pt-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6ae3c7]" />
            v3 · Now with multi-agent workflows
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-[clamp(2.6rem,6vw,5.25rem)] font-semibold leading-[1.02] tracking-tight">
            The AI workspace{" "}
            <span className="bg-gradient-to-r from-[#6ae3c7] via-[#7c8cff] to-[#a88bff] bg-clip-text text-transparent">
              for operators
            </span>{" "}
            who ship.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Aether turns your scattered docs, calls, and metrics into one searchable surface. Draft decisions
            faster — with evidence your team can audit.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6ae3c7] via-[#7c8cff] to-[#a88bff] px-6 py-3.5 text-sm font-semibold text-[#06070a] shadow-[0_20px_60px_-20px_rgba(124,140,255,0.5)] transition hover:opacity-90"
            >
              Start free · No card
              <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#product"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm font-medium text-white/90 transition hover:border-white/50 hover:bg-white/5"
            >
              <Icon name="play" className="h-4 w-4" /> Watch 90-second demo
            </a>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <ChatMock />
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/40">
            Loved by operators at
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-white/40">
            {["StoicSoft", "1DevTool", "ServerCompass", "Parallel Labs", "Orbital", "Tessera"].map((n) => (
              <span key={n} className="text-base font-semibold tracking-tight transition hover:text-white">{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="product" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#6ae3c7]">Product</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-[1.05] md:text-5xl">
                One surface. Every source. Real answers.
              </h2>
            </div>
            <p className="max-w-md text-white/60">
              Aether lives next to your work — not on top of it. Every answer pulls from the exact line of
              content it cites, so your team can trust and extend the reply.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 transition hover:border-white/25"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#7c8cff]/0 blur-3xl transition group-hover:bg-[#7c8cff]/30" />
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#6ae3c7]/20 to-[#7c8cff]/10 text-[#6ae3c7]">
                  <Icon name={f.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/60">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow / How */}
      <section id="workflow" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0b0d12] p-10 md:p-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(600px circle at 80% 0%, rgba(106,227,199,0.22), transparent 55%), radial-gradient(600px circle at 10% 100%, rgba(168,139,255,0.22), transparent 55%)",
              }}
            />
            <div className="relative grid gap-12 md:grid-cols-[1fr_1.4fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#a88bff]">How it works</p>
                <h2 className="mt-3 text-4xl font-semibold leading-[1.05] md:text-5xl">
                  Four steps. Ten minutes.
                </h2>
                <p className="mt-5 max-w-md text-white/70">
                  Wire Aether into the tools you already use. You&apos;ll get the first useful answer before
                  you&apos;ve finished onboarding the team.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 p-4">
                    <p className="text-3xl font-semibold">10 min</p>
                    <p className="text-xs uppercase tracking-wider text-white/50">Setup</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 p-4">
                    <p className="text-3xl font-semibold">50+</p>
                    <p className="text-xs uppercase tracking-wider text-white/50">Integrations</p>
                  </div>
                </div>
              </div>

              <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {steps.map((s) => (
                  <li
                    key={s.n}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/30"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#6ae3c7]">{s.n}</span>
                      <Icon name="arrow" className="h-4 w-4 text-white/30 transition group-hover:translate-x-0.5 group-hover:text-white" />
                    </div>
                    <p className="mt-4 text-lg font-semibold">{s.t}</p>
                    <p className="mt-1 text-sm text-white/60">{s.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative z-10 border-y border-white/5 bg-black/30">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-4">
          {[
            { k: "1.8M", v: "Answers grounded and cited each week" },
            { k: "< 1.4s", v: "Median response across 50+ sources" },
            { k: "98.2%", v: "Citation accuracy in blind audits" },
            { k: "42 hrs", v: "Median time saved per operator / month" },
          ].map((s) => (
            <div key={s.v} className="border-l border-white/10 pl-6">
              <p className="text-5xl font-semibold text-white">{s.k}</p>
              <p className="mt-2 text-sm text-white/60">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="customers" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#6ae3c7]">Customers</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Operators run their Monday on Aether.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.a}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-7"
              >
                <div className="flex text-[#6ae3c7]">
                  {[...Array(5)].map((_, i) => <Icon key={i} name="star" className="h-4 w-4" />)}
                </div>
                <p className="mt-5 text-lg leading-snug text-white/90">&ldquo;{t.q}&rdquo;</p>
                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#6ae3c7] to-[#7c8cff] font-semibold text-[#06070a]">
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
            <p className="text-xs uppercase tracking-[0.22em] text-[#6ae3c7]">Pricing</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Free to start. Honest when you scale.</h2>
            <p className="mt-5 text-white/60">
              No per-query markups. Unlimited integrations on every paid plan.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pricing.map((p) => (
              <article
                key={p.name}
                className={`relative flex flex-col rounded-3xl border p-8 transition ${
                  p.featured
                    ? "border-[#6ae3c7] bg-gradient-to-b from-[#6ae3c7]/10 to-white/[0.02] shadow-[0_30px_80px_-40px_rgba(106,227,199,0.55)]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/25"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-[#6ae3c7] to-[#7c8cff] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#06070a]">
                    Most chosen
                  </span>
                )}
                <p className="text-lg font-semibold">{p.name}</p>
                <p className="mt-1 text-sm text-white/60">{p.body}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-semibold">{p.price}</span>
                  <span className="text-sm text-white/50">{p.cadence}</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm text-white/80">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-[#6ae3c7]" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    p.featured
                      ? "bg-gradient-to-r from-[#6ae3c7] to-[#7c8cff] text-[#06070a] hover:opacity-90"
                      : "border border-white/20 text-white hover:border-white hover:bg-white hover:text-[#06070a]"
                  }`}
                >
                  {p.name === "Enterprise" ? "Talk to us" : `Start with ${p.name}`}
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
              <p className="text-xs uppercase tracking-[0.22em] text-[#6ae3c7]">FAQ</p>
              <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Common questions.</h2>
            </div>
            <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.02]">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                    {f.q}
                    <span className="ml-4 grid h-7 w-7 place-items-center rounded-full border border-white/15 text-white/50 transition group-open:rotate-45 group-open:border-[#6ae3c7] group-open:text-[#6ae3c7]">+</span>
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
                  "radial-gradient(700px circle at 15% 0%, rgba(106,227,199,0.28), transparent 55%), radial-gradient(700px circle at 85% 100%, rgba(168,139,255,0.32), transparent 55%), #0b0d12",
              }}
            />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-4xl font-semibold leading-[1.05] md:text-6xl">
                  Your team&apos;s second brain.
                  <br />
                  <span className="bg-gradient-to-r from-[#6ae3c7] to-[#a88bff] bg-clip-text text-transparent">
                    Finally caught up.
                  </span>
                </h2>
                <p className="mt-5 max-w-lg text-white/70">
                  Start free today. Import three tools in five minutes and let Monday write itself.
                </p>
              </div>
              <form className="flex w-full flex-col gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full flex-1 rounded-xl bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:ring-2 focus:ring-[#6ae3c7]/40"
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6ae3c7] to-[#a88bff] px-5 py-3 text-sm font-semibold text-[#06070a] transition hover:opacity-90"
                >
                  Get access <Icon name="arrow" className="h-4 w-4" />
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
              <span className="text-[#6ae3c7]"><Logo /></span>
              Aether
            </a>
            <p className="mt-4 max-w-sm text-sm text-white/50">
              A StoicSoft product · Built in SF &amp; Berlin. Aether is the AI workspace our own teams use to
              ship ServerCompass and 1DevTool.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#product" className="hover:text-white">Features</a></li>
              <li><a href="#workflow" className="hover:text-white">Workflows</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">About StoicSoft</a></li>
              <li><a href="#" className="hover:text-white">1DevTool</a></li>
              <li><a href="#" className="hover:text-white">ServerCompass</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Resources</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Docs</a></li>
              <li><a href="#" className="hover:text-white">API</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
              <li><a href="#" className="hover:text-white">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-white/40">
            <span>© {new Date().getFullYear()} StoicSoft, Inc. All rights reserved.</span>
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
