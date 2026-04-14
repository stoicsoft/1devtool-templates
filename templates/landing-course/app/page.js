const curriculum = [
  { n: "Week 1", t: "Finding the right thing to build", b: "Customer interviews, demand tests, and the two spreadsheets that save you six months. Live on Monday; async for the rest of the week." },
  { n: "Week 2", t: "Scoping the v1 that ships", b: "Cutting scope without cutting spirit. A framework we use at StoicSoft to decide what stays out of the first launch." },
  { n: "Week 3", t: "Landing page & positioning", b: "Writing a landing page that doesn&apos;t sound like AI wrote it. Peer-review your draft with the cohort; we edit live on Friday." },
  { n: "Week 4", t: "Pricing without flinching", b: "Value pricing, anchors, trials, refunds. We walk through StoicSoft&apos;s own pricing history — including the mistakes." },
  { n: "Week 5", t: "Launching to your first 100", b: "Activation plans that don&apos;t rely on Product Hunt. Email, PR, friends-and-family, and the quiet launches that outperform." },
  { n: "Week 6", t: "Operating for the long run", b: "Pipeline, metrics, customer support as feature input, and the weekly cadence that keeps a one-person studio steady." },
]

const instructors = [
  { name: "Clara Figueira", role: "Designer · StoicSoft studio", bio: "Runs design across StoicSoft products. Previously shipped Quill and Aether Journal.", hue: "from-[#ff7a49] to-[#c9b3ff]" },
  { name: "Dante Okafor", role: "Engineer · 1DevTool", bio: "Built and maintains the 1DevTool registry. 11 years building Next.js apps in production.", hue: "from-[#c9ff5e] to-[#6ec3ff]" },
]

const outcomes = [
  { k: "84%", v: "Ship a public v1 by end of cohort" },
  { k: "€3.2k", v: "Median MRR within 90 days of shipping" },
  { k: "4.96", v: "Alumni rating · 412 graduates" },
  { k: "1,840", v: "Students across 14 cohorts since 2022" },
]

const graduates = [
  { q: "I sat on a project for two years. The Shipcraft cohort shipped it in six weeks — the pricing module alone paid for the course ten times over in the first quarter.", a: "Priya Kapoor", r: "Built Routine · cohort 12" },
  { q: "Dante re-wrote my landing page live on Friday of week three. I still read it and it still converts at 9%.", a: "Wren Holloway", r: "Built Fieldbook · cohort 10" },
  { q: "The Slack stayed alive a year after the cohort ended. Most of my closest founder friends came out of this community.", a: "Mei Wong", r: "Built Tide · cohort 8" },
]

const what = [
  "6 weeks of live Monday sessions (90 min, EU + US friendly)",
  "Office hours every Wednesday — bring your work in progress",
  "Peer review on Friday · your cohort critiques your landing, pricing, onboarding",
  "Private Slack with instructors + alumni (now 1,840 builders)",
  "Lifetime access to recordings, slides, and the workbook",
  "One StoicSoft template of your choice — a €300 value, on us",
]

const faqs = [
  { q: "Who is this for?", a: "Software builders planning their first independent launch, or folks whose side project has stalled and needs a shove. You don&apos;t need a technical co-founder or a business background — you just need a thing you want to ship." },
  { q: "What&apos;s the time commitment?", a: "Roughly 8 hours a week: one 90-minute live session, one 60-minute office hours, plus work on your own project. Evening and weekend-friendly by design." },
  { q: "Is it live or recorded?", a: "Both. Every live session is recorded and indexed. Timezones: live sessions alternate between 18:00 CET and 12:00 CET so both EU and US attendees can make most of them." },
  { q: "Refund policy?", a: "Full refund if you drop within the first two weeks, no questions. After that, a 50% refund if you&apos;ve attended fewer than three live sessions. We&apos;ve refunded exactly 18 students out of 1,840." },
]

const partners = [
  "StoicSoft", "1DevTool", "ServerCompass", "Aether", "The Margin", "Signal FM",
]

function Mark() {
  return (
    <svg viewBox="0 0 36 36" className="h-9 w-9" aria-hidden>
      <circle cx="18" cy="18" r="16" fill="#14121f" />
      <path d="M10 24 L26 10 M18 24 L26 16 M22 24 L26 20" stroke="#c9ff5e" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "play") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="M7 4v16l14-8z"/></svg>)
  if (name === "cal") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 9h18"/></svg>)
  if (name === "users") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5M15 20c0-2 2-4 4-4"/></svg>)
  if (name === "spark") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="m12 2 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z"/></svg>)
  return null
}

export default function Home() {
  return (
    <div className="relative bg-[#fbf7ea] text-[#14121f]">
      <div className="pointer-events-none fixed inset-0 paper-noise opacity-40" />

      {/* Nav */}
      <header className="relative z-20 border-b border-[#14121f]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2">
            <Mark />
            <span className="font-display text-2xl font-bold">Shipcraft</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-[#14121f]/80 md:flex">
            <a href="#curriculum" className="underline-grow">Curriculum</a>
            <a href="#instructors" className="underline-grow">Instructors</a>
            <a href="#outcomes" className="underline-grow">Outcomes</a>
            <a href="#enroll" className="underline-grow">Enrol</a>
          </nav>
          <a href="#enroll" className="group inline-flex items-center gap-2 rounded-full bg-[#14121f] px-4 py-2 text-sm font-semibold text-[#fbf7ea] transition hover:bg-[#ff7a49]">
            Enrol · Cohort 15 <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#14121f]/60">
            <span className="flex items-center gap-2 rounded-full border border-[#14121f]/15 bg-[#c9ff5e]/30 px-3 py-1 text-[#14121f]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#14121f]" />
              Cohort 15 · starts May 5, 2026 · 18 of 42 seats left
            </span>
            <span className="flex items-center gap-2"><Icon name="cal" className="h-3.5 w-3.5" /> 6 weeks</span>
            <span className="flex items-center gap-2"><Icon name="users" className="h-3.5 w-3.5" /> 42 students, max</span>
          </div>

          <h1 className="font-display mt-8 text-[clamp(3rem,9vw,9rem)] font-bold leading-[0.9]">
            Ship an indie <span className="bg-gradient-to-r from-[#ff7a49] via-[#c9b3ff] to-[#6ec3ff] bg-clip-text text-transparent">software product</span> — in six weeks.
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-[1.3fr_1fr]">
            <p className="max-w-2xl text-xl leading-relaxed text-[#14121f]/80">
              Shipcraft is a six-week cohort-based course for builders who want to launch — not study. You
              bring the idea and the evenings; we bring the framework, the edits, and the peer group that keeps
              you honest.
            </p>

            <div className="space-y-3">
              <a href="#enroll" className="group inline-flex w-full items-center justify-between gap-2 rounded-2xl bg-[#14121f] px-6 py-5 text-sm font-semibold text-[#fbf7ea] transition hover:bg-[#ff7a49]">
                <span className="font-display text-2xl font-bold">Enrol · €980</span>
                <Icon name="arrow" className="h-5 w-5 transition group-hover:translate-x-0.5" />
              </a>
              <a href="#curriculum" className="inline-flex w-full items-center justify-between gap-2 rounded-2xl border border-[#14121f]/15 bg-white/60 px-6 py-5 text-sm font-semibold transition hover:border-[#14121f]">
                <span className="font-display text-xl font-bold">See the curriculum</span>
                <Icon name="arrow" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-[#14121f]/10 pt-8 md:grid-cols-4">
            {outcomes.map((s) => (
              <div key={s.v}>
                <p className="font-display text-5xl font-bold">{s.k}</p>
                <p className="mt-1 text-sm text-[#14121f]/60">{s.v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden border-y border-[#14121f]/10 bg-[#14121f] py-4 text-[#fbf7ea]">
          <div className="flex marquee gap-10 whitespace-nowrap font-display text-2xl font-bold italic">
            {["6 weeks", "42 seats", "1,840 graduates", "14 cohorts", "84% ship rate", "€980 · one-time", "No subscriptions", "Taught by operators"].concat([
              "6 weeks", "42 seats", "1,840 graduates", "14 cohorts", "84% ship rate", "€980 · one-time", "No subscriptions", "Taught by operators",
            ]).map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="text-[#c9ff5e]">✦</span>
                <span>{t}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#ff7a49]">Curriculum</p>
              <h2 className="font-display mt-3 text-5xl font-bold leading-[1.02] md:text-7xl">Six weeks, <em className="italic">honestly</em> planned.</h2>
            </div>
            <p className="max-w-sm text-[#14121f]/75">
              Each week pairs a live Monday session with async workbook exercises and a Friday peer review. No
              fluff; every minute earns its place.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {curriculum.map((c, i) => (
              <article key={c.n} className={`group rounded-3xl border p-6 transition hover:border-[#14121f] ${
                i === 0 ? "border-[#14121f] bg-[#14121f] text-[#fbf7ea]" : "border-[#14121f]/15 bg-white/60"
              }`}>
                <p className={`font-mono text-xs ${i === 0 ? "text-[#c9ff5e]" : "text-[#ff7a49]"}`}>{c.n}</p>
                <p className="font-display mt-3 text-2xl font-bold">{c.t}</p>
                <p className={`mt-3 text-sm ${i === 0 ? "text-[#fbf7ea]/80" : "text-[#14121f]/75"}`} dangerouslySetInnerHTML={{__html: c.b.replaceAll("'", "&rsquo;")}} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-[36px] bg-[#c9ff5e] p-10 md:p-14">
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#14121f]/70">What&apos;s included</p>
                <h2 className="font-display mt-3 text-5xl font-bold leading-[1.02] md:text-6xl">
                  Everything you need. <em className="italic">None of the fluff.</em>
                </h2>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {what.map((w) => (
                  <li key={w} className="flex items-start gap-3 rounded-2xl bg-[#14121f] p-4 text-sm text-[#fbf7ea]">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-[#c9ff5e]" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section id="instructors" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#ff7a49]">Your instructors</p>
              <h2 className="font-display mt-3 text-5xl font-bold leading-[1.02] md:text-6xl">
                People who still <em className="italic">ship</em> every week.
              </h2>
              <p className="mt-6 max-w-md text-[#14121f]/75">
                Both instructors work full-time on independent software at StoicSoft. They teach what they&apos;ve
                done last month, not what worked in 2017.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {instructors.map((i) => (
                <article key={i.name} className="rounded-3xl border border-[#14121f]/15 bg-white/60 p-5">
                  <div className={`relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br ${i.hue}`}>
                    <div className="absolute inset-0 paper-noise mix-blend-overlay opacity-40" />
                    <span className="absolute bottom-4 left-4 font-display text-6xl font-bold text-[#14121f]">{i.name.split(" ").map((n) => n[0]).join("")}</span>
                  </div>
                  <p className="font-display mt-4 text-2xl font-bold">{i.name}</p>
                  <p className="text-sm text-[#ff7a49]">{i.role}</p>
                  <p className="mt-3 text-sm text-[#14121f]/75">{i.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes / Graduates */}
      <section id="outcomes" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#ff7a49]">Graduate stories</p>
            <h2 className="font-display mt-3 text-5xl font-bold leading-[1.02] md:text-7xl">
              They <em className="italic">shipped.</em>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {graduates.map((g, i) => (
              <article key={g.a} className={`rounded-3xl border p-7 ${
                i === 1 ? "border-[#14121f] bg-[#14121f] text-[#fbf7ea]" : "border-[#14121f]/15 bg-white/60"
              }`}>
                <Icon name="spark" className={`h-6 w-6 ${i === 1 ? "text-[#c9ff5e]" : "text-[#ff7a49]"}`} />
                <blockquote className="font-display mt-4 text-xl font-medium leading-snug" dangerouslySetInnerHTML={{__html: `&ldquo;${g.q.replaceAll("'", "&rsquo;")}&rdquo;`}} />
                <figcaption className={`mt-6 flex items-center gap-3 border-t pt-4 text-sm ${i === 1 ? "border-[#fbf7ea]/10" : "border-[#14121f]/10"}`}>
                  <span className={`grid h-9 w-9 place-items-center rounded-full font-display text-sm font-bold ${
                    i === 1 ? "bg-[#c9ff5e] text-[#14121f]" : "bg-[#14121f] text-[#fbf7ea]"
                  }`}>{g.a.split(" ").map((n) => n[0]).join("")}</span>
                  <div>
                    <p className="font-semibold">{g.a}</p>
                    <p className={`text-xs ${i === 1 ? "text-[#fbf7ea]/65" : "text-[#14121f]/60"}`}>{g.r}</p>
                  </div>
                </figcaption>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="#" className="inline-flex items-center gap-2 text-sm underline-grow">
              Read all 212 graduate stories <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Enrol */}
      <section id="enroll" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-[36px] bg-[#14121f] p-10 text-[#fbf7ea] md:p-14">
            <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#c9ff5e]">Enrol — Cohort 15</p>
                <h2 className="font-display mt-3 text-5xl font-bold leading-[1.02] md:text-7xl">
                  Starts <span className="text-[#ff7a49]">May 5.</span>
                  <br />Ships by <em className="italic text-[#c9ff5e]">June 13.</em>
                </h2>
                <p className="mt-6 max-w-md text-[#fbf7ea]/75">
                  Six weeks of live sessions, peer review, and a cohort that will keep texting you a year from
                  now. One time, €980. No subscriptions, no upsells, no add-ons.
                </p>

                <ul className="mt-8 space-y-2 text-sm text-[#fbf7ea]/85">
                  {[
                    "18 of 42 seats remaining",
                    "Two-week full-refund window",
                    "Lifetime access to recordings + workbook",
                    "Payment plans available on request",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 text-[#c9ff5e]" /> {b}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-[#fbf7ea]/15 bg-[#fbf7ea]/[0.04] p-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-6xl font-bold">€980</span>
                  <span className="text-sm text-[#fbf7ea]/60">/ one-time</span>
                </div>
                <p className="mt-2 text-sm text-[#fbf7ea]/70">Includes all sessions, workbook, Slack, and one template from the StoicSoft registry.</p>

                <div className="mt-6 space-y-3">
                  <input type="email" placeholder="you@studio.com" className="w-full rounded-xl border border-[#fbf7ea]/15 bg-[#14121f] px-4 py-3 text-sm outline-none focus:border-[#c9ff5e]" />
                  <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#c9ff5e] px-5 py-3.5 text-sm font-semibold text-[#14121f] hover:bg-[#ff7a49] hover:text-[#fbf7ea]">
                    Enrol now <Icon name="arrow" className="h-4 w-4" />
                  </button>
                  <a href="#" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#fbf7ea]/15 px-5 py-3 text-xs text-[#fbf7ea]/85 hover:border-[#c9ff5e]">
                    <Icon name="play" className="h-3.5 w-3.5" /> Watch an alumni talk first
                  </a>
                </div>

                <div className="mt-6 rounded-xl border border-[#fbf7ea]/10 bg-[#14121f] p-3 text-xs text-[#fbf7ea]/65">
                  Next cohort (#16) opens: <span className="text-[#c9ff5e]">August 25, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <p className="text-center text-xs uppercase tracking-[0.22em] text-[#14121f]/50">
            From the team behind
          </p>
          <div className="mt-10 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
            {partners.map((p) => (
              <div key={p} className="font-display text-center text-xl font-bold text-[#14121f]/50 transition hover:text-[#14121f]">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 pb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#ff7a49]">FAQ</p>
              <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">Common questions.</h2>
            </div>
            <div className="divide-y divide-[#14121f]/10 rounded-3xl border border-[#14121f]/15 bg-white/60">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold">
                    <span dangerouslySetInnerHTML={{__html: f.q.replaceAll("'", "&rsquo;")}} />
                    <span className="ml-4 grid h-7 w-7 place-items-center rounded-full border border-[#14121f]/20 text-[#14121f]/50 transition group-open:rotate-45 group-open:border-[#ff7a49] group-open:text-[#ff7a49]">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#14121f]/75" dangerouslySetInnerHTML={{__html: f.a.replaceAll("'", "&rsquo;")}} />
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#14121f]/10 bg-[#14121f] text-[#fbf7ea]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <Mark />
              <p className="font-display text-2xl font-bold">Shipcraft</p>
            </a>
            <p className="mt-4 max-w-sm text-sm text-[#fbf7ea]/70">
              A six-week cohort course by the StoicSoft studio. Taught out of Lisbon, twice a year, since 2022.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fbf7ea]/50">Course</p>
            <ul className="mt-3 space-y-2 text-sm text-[#fbf7ea]/85">
              <li><a href="#curriculum" className="hover:text-[#c9ff5e]">Curriculum</a></li>
              <li><a href="#instructors" className="hover:text-[#c9ff5e]">Instructors</a></li>
              <li><a href="#outcomes" className="hover:text-[#c9ff5e]">Outcomes</a></li>
              <li><a href="#enroll" className="hover:text-[#c9ff5e]">Enrol</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fbf7ea]/50">Studio</p>
            <ul className="mt-3 space-y-2 text-sm text-[#fbf7ea]/85">
              <li><a href="#" className="hover:text-[#c9ff5e]">StoicSoft</a></li>
              <li><a href="#" className="hover:text-[#c9ff5e]">1DevTool</a></li>
              <li><a href="#" className="hover:text-[#c9ff5e]">ServerCompass</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fbf7ea]/50">Reach us</p>
            <ul className="mt-3 space-y-2 text-sm text-[#fbf7ea]/85">
              <li><a href="mailto:hello@shipcraft.studio" className="hover:text-[#c9ff5e]">hello@shipcraft.studio</a></li>
              <li><a href="#" className="hover:text-[#c9ff5e]">Scholarship brief</a></li>
              <li><a href="#" className="hover:text-[#c9ff5e]">Alumni directory</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#fbf7ea]/10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-[#fbf7ea]/50">
            <span>© {new Date().getFullYear()} Shipcraft · A StoicSoft cohort course.</span>
            <span>Made in Lisbon</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
