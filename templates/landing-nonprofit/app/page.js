const programs = [
  { n: "01", t: "Replanting", b: "Native cork oak, Portuguese pine, and arbutus on post-fire slopes. We plant in autumn so saplings establish before summer." },
  { n: "02", t: "Watering crews", b: "Volunteer crews carry water through the first two summers — the make-or-break window for a sapling." },
  { n: "03", t: "Soil restoration", b: "Cover crops, mulch, and quiet patience. We don&apos;t replant a slope until the soil can hold a root system." },
  { n: "04", t: "Long-term monitoring", b: "Each parcel is logged, photographed, and surveyed annually for ten years. Public dashboards, in plain language." },
]

const stats = [
  { k: "412", v: "Hectares restored since 2020" },
  { k: "184k", v: "Saplings planted by volunteers" },
  { k: "78%", v: "Year-three survival rate (industry: 50%)" },
  { k: "€1.42", v: "Median cost per surviving sapling" },
]

const stories = [
  { v: "Serra do Caldeirão, PT", year: "2021 fire scar · replanted 2022", t: "&ldquo;The first valley we returned to. Cork oaks are now waist-high; the soil holds water again after the spring rains.&rdquo;", a: "Tomás Carvalho · Crew lead" },
  { v: "Sierra de Aracena, ES", year: "2023 fire scar · replanting now", t: "&ldquo;Forty-two volunteers across two weekends. The valley smelled of pine resin again by month four.&rdquo;", a: "Lucía Romero · Crew lead" },
  { v: "Vale do Côa, PT", year: "2019 fire scar · monitored", t: "&ldquo;The data we collect here goes back six years. Year five is when a forest decides whether it&apos;s coming back.&rdquo;", a: "Ana Vilar · Field ecologist" },
]

const supporters = [
  "StoicSoft", "Ribeiro Bindery", "Aether", "Casa", "Wayfound", "1DevTool", "ServerCompass", "Câmara de Évora",
]

const board = [
  { name: "Maria-Inês Coelho", role: "Founder · Director" },
  { name: "Diogo Almeida", role: "Treasurer" },
  { name: "Helena Ribeiro", role: "Forest ecologist" },
  { name: "Pablo Soto", role: "Community lead · Spain" },
]

const faqs = [
  { q: "Where does my donation go?", a: "Eighty-four cents of every euro reaches the field. The remaining sixteen cover legal, monitoring, and the small staff that keeps the volunteer crews safe and supplied." },
  { q: "Can I volunteer?", a: "Yes. Most replanting weekends are open to volunteers — we provide tools, training, and lunch. No experience needed; the work is physical but the pace is human." },
  { q: "Do you accept corporate donations?", a: "Yes, but with conditions: no greenwashing. We don&apos;t sell carbon offsets and we&apos;ll publish your contribution alongside everyone else&apos;s. Our partner brief is on the supporters page." },
  { q: "Is Open Roots a charity?", a: "Yes. We&apos;re registered as an Associação Sem Fins Lucrativos in Portugal (NIPC 514982103) and an Asociación in Spain. Annual financials are published every March." },
]

function Mark() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      <path d="M16 28V12M16 12c0-4 4-7 8-6-1 5-4 8-8 8ZM16 16c0-3-3-5-7-4 1 4 4 6 7 6Z" fill="currentColor" />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "leaf") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21 3c0 11-7 18-18 18 0-11 7-18 18-18Z"/><path d="M8 16c3-3 8-8 12-12"/></svg>)
  if (name === "heart") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M20.8 8.6a5.4 5.4 0 0 0-9.3-2.1 5.4 5.4 0 0 0-9.3 4 5.4 5.4 0 0 0 1.6 3.8l7.7 7.7 7.7-7.7a5.4 5.4 0 0 0 1.6-5.7Z"/></svg>)
  if (name === "pin") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="10" r="3"/><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/></svg>)
  if (name === "users") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5M15 20c0-2 2-4 4-4"/></svg>)
  if (name === "tree") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 22V12M8 12c-2-2-3-5 0-7 1-2 5-2 6 0 3 2 2 5 0 7M9 12h6"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  return null
}

function Saplings() {
  const heights = [60, 80, 50, 90, 70, 100, 65, 85, 55, 95, 75, 88, 62, 78, 92, 58, 82, 70]
  return (
    <div className="flex h-32 items-end gap-1.5">
      {heights.map((h, i) => (
        <span key={i} className="grow flex flex-col items-center" style={{ animationDelay: `${i * 60}ms` }}>
          <span className="h-2 w-2 rounded-full bg-[#6a8e51]" />
          <span className="w-[3px] rounded-full bg-[#6b3d1a]" style={{ height: `${h}%` }} />
        </span>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative bg-[#f6f0e3] text-[#1a2017]">
      <div className="pointer-events-none fixed inset-0 paper-tex opacity-40" />

      {/* Nav */}
      <header className="relative z-20 border-b border-[#d2cdb8]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2">
            <span className="text-[#3a5a36]"><Mark /></span>
            <div>
              <p className="font-serif text-xl">Open Roots</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6e7a64]">A reforestation cooperative</p>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[#2c3527]/80 md:flex">
            <a href="#mission" className="underline-grow">Mission</a>
            <a href="#programs" className="underline-grow">Programs</a>
            <a href="#impact" className="underline-grow">Impact</a>
            <a href="#stories" className="underline-grow">Field stories</a>
          </nav>
          <a href="#donate" className="group inline-flex items-center gap-2 rounded-full bg-[#3a5a36] px-4 py-2 text-sm font-semibold text-[#f6f0e3] transition hover:bg-[#a14422]">
            <Icon name="heart" className="h-4 w-4" /> Donate
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#6e7a64]">
            <span className="h-px w-10 bg-[#6e7a64]" />
            Reforesting Iberia · since 2020 · independent &amp; volunteer-led
          </p>

          <div className="mt-8 grid gap-12 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h1 className="font-serif text-[clamp(2.8rem,7.5vw,7rem)] leading-[0.96] tracking-tight">
                Bringing forests back to <em className="italic text-[#a14422]">the valleys that burned.</em>
              </h1>
              <p className="font-serif mt-8 max-w-2xl text-2xl italic leading-snug text-[#2c3527]/85">
                Open Roots is an independent reforestation cooperative replanting native species across
                post-fire valleys in Portugal and Spain. Slowly, with patience, and with the people who live
                there.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#donate" className="group inline-flex items-center gap-2 rounded-full bg-[#3a5a36] px-6 py-3.5 text-sm font-semibold text-[#f6f0e3] transition hover:bg-[#2a4226]">
                  <Icon name="heart" className="h-4 w-4" /> Plant a sapling — €5
                </a>
                <a href="#volunteer" className="inline-flex items-center gap-2 rounded-full border border-[#1a2017]/20 px-5 py-3 text-sm hover:bg-[#1a2017] hover:text-[#f6f0e3]">
                  Join a planting weekend
                </a>
              </div>
            </div>

            <aside className="relative">
              <div className="rounded-3xl border border-[#d2cdb8] bg-gradient-to-b from-[#e9dfc7] to-[#f6f0e3] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#6e7a64]">Live · this season</p>
                <div className="mt-4 flex items-end justify-between">
                  <p className="font-serif text-5xl">12,840</p>
                  <p className="text-xs text-[#6e7a64]">saplings planted<br />since Jan 2026</p>
                </div>
                <Saplings />
                <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#d2cdb8] pt-4 text-xs">
                  <div>
                    <p className="font-serif text-2xl">62</p>
                    <p className="text-[#6e7a64]">volunteer days</p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl">8</p>
                    <p className="text-[#6e7a64]">active valleys</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden border-y border-[#d2cdb8] bg-[#1a2017] py-4 text-[#f6f0e3]">
          <div className="flex marquee gap-10 whitespace-nowrap font-serif text-xl italic">
            {[
              "412 hectares restored",
              "Cork oak · Portuguese pine · arbutus",
              "78% three-year survival",
              "Independent &middot; volunteer-led",
              "€1.42 per surviving sapling",
              "Established in Évora · Portugal",
            ].concat([
              "412 hectares restored",
              "Cork oak · Portuguese pine · arbutus",
              "78% three-year survival",
              "Independent &middot; volunteer-led",
              "€1.42 per surviving sapling",
              "Established in Évora · Portugal",
            ]).map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="text-[#d39c2c]">✦</span>
                <span dangerouslySetInnerHTML={{__html: t}} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#6e7a64]">Mission</p>
              <h2 className="font-serif mt-3 text-5xl leading-[1.05] md:text-6xl">
                A forest takes <em className="italic text-[#a14422]">a generation.</em>
                <br />We&apos;re only at the start.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-[#2c3527]/85">
              <p>
                Open Roots was founded after the 2017 fires in central Portugal. Two ecologists, three
                landowners, and a Saturday spent looking at a slope where 800 hectares of cork forest used to
                be — and asking whether anyone was going to put it back.
              </p>
              <p>
                Five years later, we&apos;re a cooperative of forty-two people across Portugal and Spain. Half
                of us are volunteers; the rest are field ecologists, crew leads, and one quietly excellent
                bookkeeper. We replant native species on post-fire slopes, monitor every parcel for ten years,
                and publish what we find — even when the news isn&apos;t good.
              </p>
              <p className="font-serif text-2xl italic text-[#3a5a36]">
                We&apos;re not in the business of carbon offsets. We&apos;re in the business of forests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section id="impact" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-[36px] bg-[#3a5a36] p-10 text-[#f6f0e3] md:p-14">
            <p className="text-xs uppercase tracking-[0.22em] text-[#d39c2c]">Five-year impact · 2020 — 2025</p>
            <h2 className="font-serif mt-3 text-5xl leading-[1.02] md:text-7xl">
              Numbers we publish <em className="italic text-[#e9dfc7]">in March,</em> every year.
            </h2>

            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.v} className="border-l border-[#f6f0e3]/20 pl-5">
                  <p className="font-serif text-5xl">{s.k}</p>
                  <p className="mt-2 text-sm text-[#f6f0e3]/80">{s.v}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-[#f6f0e3] px-5 py-3 text-sm font-semibold text-[#1a2017] hover:bg-[#d39c2c]">
                Download 2025 impact report <Icon name="arrow-up" className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-[#f6f0e3]/30 px-5 py-3 text-sm text-[#f6f0e3]/90 hover:border-[#f6f0e3]">
                Open the public dashboard
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#6e7a64]">Our programs</p>
            <h2 className="font-serif mt-3 text-5xl leading-[1.05] md:text-6xl">
              Four chapters of <em className="italic text-[#a14422]">slow</em> work.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((p) => (
              <article key={p.n} className="rounded-3xl border border-[#d2cdb8] bg-[#e9dfc7]/50 p-6">
                <p className="font-serif text-3xl text-[#a14422]">{p.n}</p>
                <p className="font-serif mt-3 text-2xl">{p.t}</p>
                <p className="mt-2 text-sm text-[#2c3527]/75" dangerouslySetInnerHTML={{__html: p.b.replaceAll("'", "&rsquo;")}} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Field stories */}
      <section id="stories" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#6e7a64]">Field stories</p>
              <h2 className="font-serif mt-3 text-5xl leading-[1.05] md:text-6xl">From the valleys we work in.</h2>
            </div>
            <a href="#" className="text-sm underline-grow">All field stories <Icon name="arrow" className="ml-1 inline h-4 w-4" /></a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stories.map((s, i) => (
              <article key={s.v} className="overflow-hidden rounded-3xl border border-[#d2cdb8] bg-white/40">
                <div className={`relative aspect-[4/3] ${i === 0 ? "scene-leaf" : i === 1 ? "scene-bark" : "scene-sun"}`}>
                  <div className="absolute inset-0 paper-tex mix-blend-overlay opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/85">{s.year}</p>
                    <p className="font-serif text-2xl italic">{s.v}</p>
                  </div>
                </div>
                <div className="p-6">
                  <blockquote className="font-serif text-lg italic leading-snug text-[#1a2017]" dangerouslySetInnerHTML={{__html: s.t.replaceAll('&apos;', '&rsquo;')}} />
                  <p className="mt-4 text-xs text-[#6e7a64]">— {s.a}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-[36px] border border-[#d2cdb8] bg-[#e9dfc7] p-10 md:p-14">
            <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#6e7a64]">Support a sapling</p>
                <h2 className="font-serif mt-3 text-5xl leading-[1.02] md:text-6xl">
                  Eighty-four cents of every euro <em className="italic text-[#a14422]">reaches the field.</em>
                </h2>
                <p className="mt-6 max-w-md text-[#2c3527]/85">
                  €5 plants and protects a single sapling for ten years. €120 covers a hectare of monitoring.
                  €2,400 sponsors a full valley restoration. We publish where every euro goes — by name, by
                  month, on our public ledger.
                </p>

                <ul className="mt-8 space-y-2 text-sm text-[#2c3527]/85">
                  {[
                    "84% of donations reach the field",
                    "Public ledger updated monthly",
                    "Tax-deductible in PT, ES, and via fiscal sponsorship in the US",
                    "Cancel recurring donations any time, no questions asked",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 text-[#3a5a36]" /> {b}</li>
                  ))}
                </ul>
              </div>

              <form className="rounded-3xl border border-[#d2cdb8] bg-[#f6f0e3] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#6e7a64]">Choose an amount</p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {["€5", "€25", "€60", "€120", "€300", "Other"].map((amt, i) => (
                    <button key={amt} className={`rounded-xl border px-4 py-3 text-sm font-semibold ${
                      i === 1 ? "border-[#3a5a36] bg-[#3a5a36] text-[#f6f0e3]" : "border-[#d2cdb8] bg-white hover:border-[#3a5a36]"
                    }`}>{amt}</button>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-xl border border-[#d2cdb8] bg-white px-3 py-2 text-xs font-semibold">One-time</button>
                  <button className="flex-1 rounded-xl border border-[#3a5a36] bg-[#3a5a36]/10 px-3 py-2 text-xs font-semibold text-[#3a5a36]">Monthly</button>
                </div>

                <input type="email" placeholder="your@email" className="mt-3 w-full rounded-xl border border-[#d2cdb8] bg-white px-4 py-3 text-sm outline-none focus:border-[#3a5a36]" />

                <button type="button" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#3a5a36] px-5 py-3.5 text-sm font-semibold text-[#f6f0e3] hover:bg-[#2a4226]">
                  <Icon name="heart" className="h-4 w-4" /> Plant 25 saplings — €25 / month
                </button>

                <p className="mt-3 text-center text-xs text-[#6e7a64]">
                  Card · SEPA · Apple Pay · iDEAL. Receipt by email.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#6e7a64]">Volunteer</p>
              <h2 className="font-serif mt-3 text-5xl leading-[1.05] md:text-6xl">
                Bring your <em className="italic text-[#a14422]">hands.</em><br />Stay for the long lunch.
              </h2>
              <p className="mt-6 max-w-md text-[#2c3527]/85">
                We run open planting weekends from October through February — the cool, wet window when
                saplings establish best. No experience needed. We supply tools, gloves, and lunch.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                { d: "Oct 24 — 26", v: "Serra do Caldeirão · Portugal", n: "12 / 24 spots", t: "Replanting · cork oak" },
                { d: "Nov 7 — 9", v: "Sierra de Aracena · Spain", n: "18 / 24 spots", t: "Replanting · pine + arbutus" },
                { d: "Nov 21 — 23", v: "Vale do Côa · Portugal", n: "22 / 24 spots", t: "Soil restoration · cover crops" },
                { d: "Dec 12 — 14", v: "Sierra Norte · Spain", n: "8 / 24 spots", t: "Replanting · oak corridor" },
              ].map((w) => (
                <li key={w.d} className="grid grid-cols-[120px_1fr_auto] items-center gap-4 rounded-2xl border border-[#d2cdb8] bg-white/50 p-5">
                  <div>
                    <p className="font-serif text-xl">{w.d}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#6e7a64]">{w.t}</p>
                  </div>
                  <div>
                    <p className="font-semibold flex items-center gap-2"><Icon name="pin" className="h-4 w-4 text-[#3a5a36]" /> {w.v}</p>
                    <p className="mt-1 text-xs text-[#6e7a64] flex items-center gap-2"><Icon name="users" className="h-3.5 w-3.5" /> {w.n}</p>
                  </div>
                  <a href="#" className="inline-flex items-center gap-1 rounded-full bg-[#3a5a36] px-4 py-2 text-xs font-semibold text-[#f6f0e3] hover:bg-[#2a4226]">Sign up <Icon name="arrow" className="h-3.5 w-3.5" /></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Supporters + FAQ */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <p className="text-center text-xs uppercase tracking-[0.22em] text-[#6e7a64]">
            Supported by friends across Iberia
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-4 md:grid-cols-8">
            {supporters.map((s) => (
              <p key={s} className="font-serif text-center text-xl italic text-[#6e7a64] transition hover:text-[#3a5a36]">{s}</p>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-6 pb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#6e7a64]">FAQ</p>
              <h2 className="font-serif mt-3 text-4xl italic md:text-5xl">Honest answers.</h2>
            </div>
            <div className="divide-y divide-[#d2cdb8] rounded-3xl border border-[#d2cdb8] bg-white/40">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                    {f.q}
                    <span className="ml-4 grid h-7 w-7 place-items-center rounded-full border border-[#1a2017]/15 text-[#1a2017]/50 transition group-open:rotate-45 group-open:border-[#3a5a36] group-open:text-[#3a5a36]">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#2c3527]/80" dangerouslySetInnerHTML={{__html: f.a.replaceAll("'", "&rsquo;")}} />
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#d2cdb8] bg-[#e9dfc7]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="text-[#3a5a36]"><Mark /></span>
              <p className="font-serif text-xl">Open Roots</p>
            </a>
            <p className="mt-4 max-w-sm text-sm text-[#2c3527]/80">
              An independent reforestation cooperative working across Portugal and Spain. Registered as a
              non-profit in both countries. Run by ecologists, volunteers, and one excellent bookkeeper.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6e7a64]">Cooperative</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#mission" className="underline-grow">Mission</a></li>
              <li><a href="#programs" className="underline-grow">Programs</a></li>
              <li><a href="#impact" className="underline-grow">Impact</a></li>
              <li><a href="#" className="underline-grow">Annual reports</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6e7a64]">Get involved</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#donate" className="underline-grow">Donate</a></li>
              <li><a href="#volunteer" className="underline-grow">Volunteer</a></li>
              <li><a href="#" className="underline-grow">Corporate brief</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6e7a64]">Reach us</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="mailto:hello@openroots.org" className="underline-grow">hello@openroots.org</a></li>
              <li>Largo do Município 4 · Évora · Portugal</li>
              <li><a href="#" className="underline-grow">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#d2cdb8]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-[#6e7a64]">
            <span>© {new Date().getFullYear()} Open Roots Associação · NIPC 514982103 · ES NIF G87492011</span>
            <span className="font-serif italic">Site donated by StoicSoft</span>
          </div>
        </div>
      </footer>

      {/* Hidden board for screenshot density */}
      <div className="hidden">{board.map((b) => <span key={b.name}>{b.name}</span>)}</div>
    </div>
  )
}
