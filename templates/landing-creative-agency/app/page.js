const projects = [
  {
    name: "Nova Bio",
    tag: "Healthcare",
    meta: "Rebrand · Launch site · 2026",
    blurb: "A calmer healthtech identity built for clinicians, patients, and investors.",
    hue: "from-[#e85c2c]/80 via-[#f3a26a]/70 to-[#f6e3c8]",
    span: "md:col-span-4 md:row-span-2",
  },
  {
    name: "Orbit Labs",
    tag: "B2B SaaS",
    meta: "Identity · Sales site",
    blurb: "Systems-thinking identity and a conversion-first marketing site.",
    hue: "from-[#2a2723] via-[#3a3f22] to-[#66604f]",
    span: "md:col-span-2",
  },
  {
    name: "Lumen Studio",
    tag: "Portfolio",
    meta: "Web experience",
    blurb: "An editorial portfolio platform with a weekly update rhythm.",
    hue: "from-[#d9cfb8] via-[#efe7d4] to-[#f6f1e6]",
    span: "md:col-span-2",
  },
  {
    name: "Parallel",
    tag: "Fintech",
    meta: "Launch campaign",
    blurb: "A product film, microsite, and launch-day choreography.",
    hue: "from-[#0f1220] via-[#1a2242] to-[#e85c2c]",
    span: "md:col-span-3",
  },
  {
    name: "Kiln Studio",
    tag: "Consumer",
    meta: "Brand system",
    blurb: "An independent coffee roaster with a packaging system that scales.",
    hue: "from-[#f6e3c8] via-[#e8c79a] to-[#b07d4a]",
    span: "md:col-span-3",
  },
]

const services = [
  {
    n: "01",
    t: "Brand systems",
    body: "Positioning, voice, and visual rules that scale across product, marketing, and hiring.",
    chips: ["Naming", "Identity", "Guidelines", "Motion"],
  },
  {
    n: "02",
    t: "Web experiences",
    body: "Editorial sites and product landings built for conversion, not decoration.",
    chips: ["Art direction", "Framer build", "CMS", "SEO"],
  },
  {
    n: "03",
    t: "Launch campaigns",
    body: "Films, microsites, and launch-week choreography that lands a story.",
    chips: ["Film", "Microsite", "Social kit", "PR assets"],
  },
  {
    n: "04",
    t: "Growth creative",
    body: "Campaign concepts and adaptations that keep every surface on brand.",
    chips: ["Ads", "Landers", "Lifecycle", "A/B sprints"],
  },
]

const process = [
  {
    n: "01",
    t: "Listen",
    body: "Two weeks inside your team — reading research, talking to customers, finding the thread nobody else has pulled.",
  },
  {
    n: "02",
    t: "Sketch",
    body: "Three visual directions, each defensible. You choose one; we don&apos;t vote. Then we push it.",
  },
  {
    n: "03",
    t: "Build",
    body: "We ship the system and the site together, so the brand never renders cleaner in Figma than in production.",
  },
  {
    n: "04",
    t: "Grow",
    body: "A 90-day launch plan, creative on-call, and monthly reviews that keep the work sharp.",
  },
]

const clients = [
  "Parallel", "Orbital", "Lumen", "Tessera", "Northwind",
  "Axiom", "Kiln", "Nova Bio", "Quarter", "Meridian",
]

const testimonials = [
  {
    q: "Northframe rewrote our positioning in three weeks and the sales deck stopped needing apologies.",
    a: "Priya R.",
    r: "CEO, Parallel",
  },
  {
    q: "They made us look five years ahead of where we actually are. Investors noticed first.",
    a: "Mateo A.",
    r: "Founder, Orbit",
  },
  {
    q: "Still the best launch day of my career, and we&apos;ve been shipping with them for three years.",
    a: "Sana I.",
    r: "CMO, Lumen",
  },
]

function Star() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden>
      <path
        d="M20 2c1.5 7.5 8.5 14.5 16 16-7.5 1.5-14.5 8.5-16 16-1.5-7.5-8.5-14.5-16-16C11.5 16.5 18.5 9.5 20 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "play") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 4v16l14-8-14-8Z"/></svg>)
  return null
}

export default function Home() {
  return (
    <div className="relative bg-[#f6f1e6] text-[#111010]">
      <div className="pointer-events-none fixed inset-0 paper-grain opacity-[0.45]" />

      {/* Nav */}
      <header className="relative z-20 border-b border-[#d9cfb8]/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
            <span className="text-[#e85c2c]"><Star /></span>
            Northframe
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[#2a2723]/80 md:flex">
            <a href="#work" className="link-under">Work</a>
            <a href="#services" className="link-under">Services</a>
            <a href="#process" className="link-under">Process</a>
            <a href="#studio" className="link-under">Studio</a>
          </nav>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#111010] px-4 py-2 text-sm font-medium text-[#fffaee] transition hover:bg-[#e85c2c]"
          >
            Start a project
            <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#66604f]">
            <span className="h-px w-8 bg-[#66604f]" />
            Independent studio — est. 2017 · Mexico City / Lisbon
          </div>

          <h1 className="font-display mt-8 text-[clamp(3rem,9vw,9rem)] font-light leading-[0.92] tracking-tight">
            Bold identities.
            <br />
            <span className="italic font-normal text-[#e85c2c]">Editorial</span> websites.
            <br />
            <span className="relative inline-block">
              Launches
              <svg
                viewBox="0 0 280 16"
                preserveAspectRatio="none"
                className="absolute left-0 right-0 -bottom-2 h-3 w-full text-[#e85c2c]"
              >
                <path
                  d="M2 10 Q 70 2 140 8 T 278 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            that land.
          </h1>

          <div className="mt-12 grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <p className="max-w-xl text-lg leading-relaxed text-[#2a2723]/80">
              Northframe is a 12-person studio working on brand strategy, visual direction, and high-performance
              digital experiences. We partner with ambitious founders, cultural institutions, and category-making
              teams.
            </p>
            <div className="flex items-start justify-between gap-6 border-t border-[#d9cfb8]/80 pt-6 md:border-none md:pt-0">
              <div>
                <p className="font-display text-4xl">47</p>
                <p className="text-xs uppercase tracking-wider text-[#66604f]">Launches since 2017</p>
              </div>
              <div>
                <p className="font-display text-4xl">12</p>
                <p className="text-xs uppercase tracking-wider text-[#66604f]">Humans in studio</p>
              </div>
              <div>
                <p className="font-display text-4xl">9.4</p>
                <p className="text-xs uppercase tracking-wider text-[#66604f]">Average NPS</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#111010] px-6 py-3.5 text-sm font-medium text-[#fffaee] transition hover:bg-[#e85c2c]"
            >
              Start a project
              <Icon name="arrow-up" className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-[#111010]/20 px-5 py-3.5 text-sm text-[#2a2723] transition hover:border-[#111010] hover:bg-[#111010] hover:text-[#fffaee]"
            >
              <Icon name="play" className="h-4 w-4" />
              See recent work
            </a>
            <div className="flex items-center gap-3 pl-2 text-xs text-[#66604f]">
              <span className="flex h-2 w-2 rounded-full bg-[#e85c2c]" />
              Two project slots open · Summer &apos;26
            </div>
          </div>
        </div>

        {/* Spinning badge & marquee */}
        <div className="relative overflow-hidden border-y border-[#d9cfb8]/70 bg-[#111010] py-6 text-[#fffaee]">
          <div className="flex animate-run whitespace-nowrap gap-12 font-display text-3xl italic md:text-5xl">
            {[
              "Strategy", "Identity", "Web", "Film",
              "Campaigns", "Editorial", "Motion", "Naming",
            ].concat([
              "Strategy", "Identity", "Web", "Film",
              "Campaigns", "Editorial", "Motion", "Naming",
            ]).map((w, i) => (
              <span key={i} className="flex items-center gap-12">
                <span>{w}</span>
                <span className="text-[#e85c2c]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Work bento */}
      <section id="work" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="marker text-xs uppercase tracking-[0.22em] text-[#66604f]">Selected work</p>
              <h2 className="font-display mt-4 max-w-3xl text-5xl leading-[1.02] md:text-6xl">
                Quiet confidence, <em className="text-[#e85c2c] font-normal">loud</em> results.
              </h2>
            </div>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#2a2723] link-under"
            >
              Full archive
              <Icon name="arrow-up" className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:auto-rows-[220px] md:grid-cols-6">
            {projects.map((p) => (
              <article
                key={p.name}
                className={`group relative overflow-hidden rounded-3xl border border-[#d9cfb8] ${p.span}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.hue}`} />
                <div className="absolute inset-0 paper-grain mix-blend-overlay opacity-70" />
                <div className="relative flex h-full flex-col justify-between p-6 text-[#fffaee]">
                  <div className="flex items-start justify-between">
                    <span className="rounded-full border border-white/30 bg-black/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/90 backdrop-blur">
                      {p.tag}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white/90 transition group-hover:-rotate-45 group-hover:border-white">
                      <Icon name="arrow-up" className="h-4 w-4" />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl leading-tight md:text-4xl">{p.name}</h3>
                    <p className="mt-2 max-w-sm text-sm text-white/85">{p.blurb}</p>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-white/60">{p.meta}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 border-t border-[#d9cfb8]/80">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="marker text-xs uppercase tracking-[0.22em] text-[#66604f]">Services</p>
              <h2 className="font-display mt-4 text-5xl leading-[1.02] md:text-6xl">
                Four practices.<br />
                <em className="text-[#e85c2c] font-normal">One studio.</em>
              </h2>
              <p className="mt-6 max-w-md text-[#2a2723]/75">
                We embed deeply with a small number of clients each quarter. Every engagement starts with
                strategy and ends with something tangible in market.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#111010]/20 px-5 py-3 text-sm font-medium text-[#2a2723] transition hover:bg-[#111010] hover:text-[#fffaee]"
              >
                Request capability deck
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>

            <ul className="divide-y divide-[#d9cfb8]">
              {services.map((s) => (
                <li key={s.n} className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 py-6">
                  <span className="font-display text-3xl text-[#e85c2c] md:text-4xl">{s.n}</span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl">{s.t}</h3>
                    <p className="mt-2 max-w-xl text-[#2a2723]/75">{s.body}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.chips.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-[#111010]/15 bg-[#fffaee] px-3 py-1 text-xs text-[#2a2723]/80"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="mt-2 grid h-10 w-10 place-items-center rounded-full border border-[#111010]/20 text-[#2a2723] transition group-hover:-rotate-45 group-hover:bg-[#111010] group-hover:text-[#fffaee]">
                    <Icon name="arrow-up" className="h-4 w-4" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process / Manifesto */}
      <section id="process" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative overflow-hidden rounded-[36px] border border-[#2a2723]/20 bg-[#111010] p-8 text-[#fffaee] md:p-14">
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-[360px] w-[360px] rounded-full opacity-60 blur-3xl"
              style={{ background: "radial-gradient(circle, #e85c2c, transparent 60%)" }}
            />
            <div className="relative grid gap-12 md:grid-cols-[1fr_1.4fr]">
              <div>
                <p className="marker text-xs uppercase tracking-[0.22em] text-white/60">How we work</p>
                <h2 className="font-display mt-4 text-5xl leading-[1.02] md:text-6xl">
                  A process short <br />
                  on <em className="text-[#ff7d4a] font-normal">theatre</em>.
                </h2>
                <p className="mt-6 max-w-md text-white/70">
                  No 80-page decks, no pretend workshops. Four phases, clear handoffs, one principal designer on
                  your project from kickoff to launch.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 p-4">
                    <p className="font-display text-3xl">6–10 wks</p>
                    <p className="text-xs uppercase tracking-wider text-white/50">Typical engagement</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 p-4">
                    <p className="font-display text-3xl">1 lead</p>
                    <p className="text-xs uppercase tracking-wider text-white/50">Principal designer</p>
                  </div>
                </div>
              </div>

              <ol className="space-y-4">
                {process.map((p) => (
                  <li
                    key={p.n}
                    className="grid grid-cols-[auto_1fr] items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/30"
                  >
                    <span className="font-display text-4xl text-[#ff7d4a]">{p.n}</span>
                    <div>
                      <h3 className="font-display text-2xl">{p.t}</h3>
                      <p className="mt-2 text-white/70">{p.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee of clients */}
      <section className="relative z-10 border-y border-[#d9cfb8]/80">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-center text-xs uppercase tracking-[0.22em] text-[#66604f]">
            Trusted by ambitious teams
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
            {clients.map((c) => (
              <div
                key={c}
                className="font-display text-center text-2xl italic text-[#2a2723]/60 transition hover:text-[#111010]"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="studio" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="marker text-xs uppercase tracking-[0.22em] text-[#66604f]">From our clients</p>
              <h2 className="font-display mt-4 text-5xl leading-[1.02] md:text-6xl">
                Notes we&apos;ve <em className="text-[#e85c2c] font-normal">kept</em>.
              </h2>
              <p className="mt-6 max-w-md text-[#2a2723]/75">
                Most of our work comes from previous clients and their friends. Here&apos;s a small sample of what
                they say about the work after it ships.
              </p>
            </div>
            <div className="grid gap-4">
              {testimonials.map((t, i) => (
                <article
                  key={t.a}
                  className={`rounded-3xl border border-[#d9cfb8] p-7 ${
                    i === 0 ? "bg-[#efe7d4]" : "bg-[#fffaee]"
                  }`}
                >
                  <span className="font-display text-5xl leading-none text-[#e85c2c]">&ldquo;</span>
                  <p className="font-display mt-2 text-2xl leading-snug text-[#111010] md:text-3xl">
                    {t.q}
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-[#d9cfb8] pt-5">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[#111010] font-display text-sm text-[#fffaee]">
                      {t.a.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{t.a}</p>
                      <p className="text-xs text-[#66604f]">{t.r}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#ffd7ac] via-[#ffb987] to-[#e85c2c] p-10 md:p-16">
            <div className="absolute inset-0 paper-grain mix-blend-overlay opacity-70" />
            <div className="relative grid items-end gap-10 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#3a1a0a]/80">Start a project</p>
                <h2 className="font-display mt-4 text-5xl leading-[1.02] text-[#21100a] md:text-7xl">
                  Ready to build <br className="hidden md:block" />
                  your next <em className="font-normal">iconic</em> launch?
                </h2>
                <p className="mt-6 max-w-lg text-[#3a1a0a]/80">
                  Tell us your timeline and goals. We reply within one business day, and we&apos;ll send a small
                  brief on fit before the first call.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:hello@northframe.studio"
                    className="inline-flex items-center gap-2 rounded-full bg-[#111010] px-6 py-3.5 text-sm font-medium text-[#fffaee] transition hover:bg-black"
                  >
                    hello@northframe.studio
                    <Icon name="arrow-up" className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-[#21100a]/30 px-5 py-3.5 text-sm text-[#21100a] transition hover:bg-[#21100a]/10"
                  >
                    Book intro call
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-[#21100a]/20 bg-[#fffaee] p-6 text-[#111010]">
                <p className="text-xs uppercase tracking-[0.22em] text-[#66604f]">Studio hours</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex justify-between border-b border-[#d9cfb8] pb-2">
                    <span>Mexico City</span>
                    <span className="text-[#66604f]">09:00 — 18:00 CT</span>
                  </li>
                  <li className="flex justify-between border-b border-[#d9cfb8] pb-2">
                    <span>Lisbon</span>
                    <span className="text-[#66604f]">09:00 — 18:00 WET</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Async everywhere</span>
                    <span className="text-[#66604f]">24 / 7</span>
                  </li>
                </ul>
                <div className="mt-6 rounded-2xl bg-[#efe7d4] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#66604f]">Average reply time</p>
                  <p className="font-display mt-1 text-3xl">3h 41m</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#d9cfb8]/80 bg-[#efe7d4]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 font-display text-xl font-semibold">
              <span className="text-[#e85c2c]"><Star /></span>
              Northframe
            </a>
            <p className="mt-4 max-w-sm text-sm text-[#2a2723]/75">
              Independent creative studio. We partner with ambitious founders and cultural institutions on
              brand, web, and launch.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#66604f]">Studio</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#work" className="link-under">Work</a></li>
              <li><a href="#services" className="link-under">Services</a></li>
              <li><a href="#process" className="link-under">Process</a></li>
              <li><a href="#" className="link-under">Journal</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#66604f]">Connect</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="mailto:hello@northframe.studio" className="link-under">hello@northframe.studio</a></li>
              <li><a href="#" className="link-under">Instagram</a></li>
              <li><a href="#" className="link-under">Are.na</a></li>
              <li><a href="#" className="link-under">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#66604f]">Studios</p>
            <p className="mt-3 text-sm text-[#2a2723]/80">
              Mexico City · Calle Orizaba 203<br />
              Lisbon · Rua do Alecrim 12
            </p>
          </div>
        </div>
        <div className="border-t border-[#d9cfb8]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-[#66604f]">
            <span>© {new Date().getFullYear()} Northframe Studio. All rights reserved.</span>
            <span>Independent agency, global clients.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
