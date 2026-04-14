const programs = [
  {
    tag: "01",
    name: "Foundation",
    body: "Master clean movement patterns, build durable strength, and rebuild endurance with progressive low-impact blocks.",
    meta: "45 min · 3×/week",
  },
  {
    tag: "02",
    name: "Performance",
    body: "Power, conditioning, and Olympic-style lifting cycles built to move measurable weekly progress.",
    meta: "60 min · 4×/week",
  },
  {
    tag: "03",
    name: "Athlete+",
    body: "Personalised blocks with sports nutrition coaching, VO2 testing, and structured recovery planning.",
    meta: "75 min · 5×/week",
  },
  {
    tag: "04",
    name: "Recovery Lab",
    body: "Mobility flows, sauna, contrast therapy, and guided breathwork to keep your nervous system primed.",
    meta: "30 min · Unlimited",
  },
]

const coaches = [
  { name: "Mira Chen", role: "Head of Performance", cert: "NSCA-CSCS · 9 yrs", hue: "from-orange-500 to-rose-500" },
  { name: "Dante Okafor", role: "Strength & Power", cert: "USAW L2 · 11 yrs", hue: "from-amber-400 to-orange-600" },
  { name: "Lia Vasquez", role: "HIIT & Conditioning", cert: "NASM-CPT · 6 yrs", hue: "from-rose-500 to-purple-600" },
  { name: "Jun Park", role: "Mobility & Recovery", cert: "FRC · 8 yrs", hue: "from-lime-400 to-emerald-500" },
]

const schedule = [
  { day: "MON", slot: "06:30", title: "HIIT Fusion", coach: "Lia", spots: "4 left" },
  { day: "MON", slot: "12:00", title: "Strength Circuit", coach: "Dante", spots: "9 left" },
  { day: "TUE", slot: "07:00", title: "Performance Lab", coach: "Mira", spots: "2 left" },
  { day: "WED", slot: "18:30", title: "Olympic Lifting", coach: "Dante", spots: "6 left" },
  { day: "THU", slot: "06:30", title: "Mobility Flow", coach: "Jun", spots: "Open" },
  { day: "FRI", slot: "12:00", title: "Metcon 45", coach: "Lia", spots: "3 left" },
]

const pricing = [
  {
    name: "Drop-In",
    price: "$39",
    cadence: "/ month",
    blurb: "Eight classes a month for explorers finding their cadence.",
    perks: ["8 classes / month", "Studio app access", "Intro onboarding"],
  },
  {
    name: "Unlimited",
    price: "$89",
    cadence: "/ month",
    blurb: "All access for members who live at the studio.",
    perks: [
      "Unlimited classes",
      "Sauna + contrast therapy",
      "Priority booking",
      "Nutrition starter plan",
    ],
    featured: true,
  },
  {
    name: "Pro Coaching",
    price: "$149",
    cadence: "/ month",
    blurb: "Unlimited with private coaching check-ins each month.",
    perks: [
      "Everything in Unlimited",
      "Monthly 1:1 coaching",
      "Custom programming",
      "Body composition scans",
    ],
  },
]

const faqs = [
  {
    q: "What should I bring to my first class?",
    a: "Just yourself, training clothes, and a reusable water bottle. We provide towels, chalk, lifting belts, and a spare change of socks.",
  },
  {
    q: "Do I need prior experience?",
    a: "No. Every program has on-ramp progressions — our coaches scale movements in real time so beginners and national-level athletes train together safely.",
  },
  {
    q: "How does the 7-day trial work?",
    a: "Your trial unlocks any class on the schedule plus a 20-minute onboarding session with a coach. No card on file, no auto-renew.",
  },
  {
    q: "Is there parking or bike storage?",
    a: "Yes — covered bike racks at the entrance and two hours of validated street parking on Franklin Ave.",
  },
]

const marquee = [
  "Strength",
  "HIIT",
  "Olympic Lifting",
  "Mobility",
  "Recovery",
  "Metcon",
  "Zone 2",
  "Sauna",
  "Nutrition",
  "Breathwork",
]

function Logo() {
  return (
    <svg viewBox="0 0 28 28" className="h-6 w-6" aria-hidden>
      <path
        d="M3 14 L9 6 L13 14 L17 10 L21 18 L25 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Icon({ name, className = "h-5 w-5" }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "spark") return (<svg viewBox="0 0 24 24" className={className} {...common}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8"/></svg>)
  if (name === "bolt") return (<svg viewBox="0 0 24 24" className={className} {...common}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>)
  if (name === "heart") return (<svg viewBox="0 0 24 24" className={className} {...common}><path d="M20.8 8.6a5.4 5.4 0 0 0-9.3-2.1 5.4 5.4 0 0 0-9.3 4 5.4 5.4 0 0 0 1.6 3.8l7.7 7.7 7.7-7.7a5.4 5.4 0 0 0 1.6-5.7Z"/></svg>)
  if (name === "shield") return (<svg viewBox="0 0 24 24" className={className} {...common}><path d="M12 3 4 6v6c0 5 3.5 8.6 8 9 4.5-.4 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...common}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "play") return (<svg viewBox="0 0 24 24" className={className} {...common}><path d="M7 4v16l14-8-14-8Z"/></svg>)
  if (name === "star") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="m12 2 3 7 7 .6-5.3 4.6L18 22l-6-3.8L6 22l1.3-7.8L2 9.6 9 9l3-7Z"/></svg>)
  return null
}

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#08080a] text-[#f7f3ec]">
      <div className="pointer-events-none absolute inset-0 glow-ember" />
      <div className="pointer-events-none absolute inset-0 noise opacity-60 mix-blend-overlay" />

      {/* Nav */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#ff4d26] to-[#ff9353] text-[#1a0e0a]">
              <Logo />
            </span>
            PulseFit
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#programs" className="hover:text-white">Programs</a>
            <a href="#schedule" className="hover:text-white">Schedule</a>
            <a href="#coaches" className="hover:text-white">Coaches</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#login" className="hidden rounded-full px-4 py-2 text-sm text-white/80 hover:text-white md:inline">
              Member login
            </a>
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0f0f12] transition hover:bg-[#d7ff4d]"
            >
              Book 7-day trial
              <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="grid items-start gap-12 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                <span className="dot-pulse h-1.5 w-1.5 rounded-full bg-[#ff4d26]" />
                Winter cycle enrolling · Brooklyn
              </span>
              <h1 className="font-display mt-6 text-[clamp(3rem,7vw,6.25rem)] font-bold leading-[0.95]">
                Train with <span className="text-[#ff9353]">cinematic</span> <br className="hidden sm:block" /> energy and elite coaching.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/70">
                Boutique strength, conditioning, and recovery sessions programmed by coaches who&apos;ve built
                national-team athletes and weekend warriors alike.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#pricing"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff4d26] to-[#ff9353] px-6 py-3.5 text-sm font-semibold text-[#1a0e0a] shadow-[0_20px_60px_-20px_rgba(255,77,38,0.7)] transition hover:from-[#ff5e3a] hover:to-[#ffa36c]"
                >
                  Start 7-day trial
                  <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#programs"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm font-medium text-white/90 transition hover:border-white/50 hover:bg-white/5"
                >
                  <Icon name="play" className="h-4 w-4" />
                  Watch the tour
                </a>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 text-sm text-white/60">
                <div>
                  <p className="font-display text-2xl font-bold text-white">1.2k+</p>
                  <p>Active members</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-white">42</p>
                  <p>Coaches &amp; specialists</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-white">4.97</p>
                  <p className="flex items-center gap-1">
                    <Icon name="star" className="h-3.5 w-3.5 text-[#ff9353]" /> 930 reviews
                  </p>
                </div>
              </div>
            </div>

            {/* Schedule card */}
            <aside className="relative">
              <div className="absolute inset-0 -translate-x-4 translate-y-6 rounded-3xl bg-[#ff4d26]/20 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 backdrop-blur">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">Today · Tue 14 Apr</p>
                  <span className="rounded-full border border-[#d7ff4d]/30 bg-[#d7ff4d]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#d7ff4d]">
                    live
                  </span>
                </div>

                <h3 className="font-display mt-3 text-2xl font-bold">5 sessions left today</h3>

                <ul className="mt-5 space-y-2">
                  {[
                    { t: "06:30", n: "HIIT Fusion", c: "Lia V.", left: "2 spots" },
                    { t: "09:00", n: "Strength Circuit", c: "Dante O.", left: "7 spots" },
                    { t: "12:00", n: "Performance Lab", c: "Mira C.", left: "1 spot" },
                    { t: "18:30", n: "Olympic Lifting", c: "Dante O.", left: "4 spots" },
                    { t: "20:00", n: "Recovery Mobility", c: "Jun P.", left: "Open" },
                  ].map((s) => (
                    <li
                      key={s.t + s.n}
                      className="flex items-center gap-3 rounded-2xl border border-white/5 bg-black/30 px-3 py-3 transition hover:border-white/20"
                    >
                      <span className="font-display grid h-10 w-12 place-items-center rounded-xl bg-white/[0.06] text-sm font-semibold text-white/80">
                        {s.t}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">{s.n}</p>
                        <p className="text-xs text-white/50">with {s.c}</p>
                      </div>
                      <span className="text-xs text-[#ff9353]">{s.left}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#schedule"
                  className="mt-5 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#0f0f12] transition hover:bg-[#d7ff4d]"
                >
                  Reserve a spot
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </aside>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-white/10 bg-black/40 py-5 backdrop-blur">
          <div className="flex animate-marquee whitespace-nowrap gap-12 font-display text-2xl font-semibold tracking-tight text-white/60 md:text-3xl">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="flex items-center gap-12">
                <span className="hover:text-white">{m}</span>
                <span className="text-[#ff4d26]">●</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#ff9353]">Our programs</p>
              <h2 className="font-display mt-3 max-w-2xl text-4xl font-bold leading-[1.05] md:text-5xl">
                Structured cycles for every intensity level.
              </h2>
            </div>
            <p className="max-w-md text-white/60">
              Every program blends strength, conditioning, and recovery — programmed in four-week blocks so you
              see measurable change, not guesswork.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((p, i) => (
              <article
                key={p.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition hover:border-white/30"
              >
                <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-[#ff4d26]/0 blur-3xl transition group-hover:bg-[#ff4d26]/40" />
                <p className="font-display text-5xl font-bold text-white/10">{p.tag}</p>
                <h3 className="font-display mt-4 text-2xl font-semibold">{p.name}</h3>
                <p className="mt-3 text-sm text-white/60">{p.body}</p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/50">
                  <span>{p.meta}</span>
                  <a href="#schedule" className="inline-flex items-center gap-1 text-white/80 hover:text-[#ff9353]">
                    Explore <Icon name="arrow" className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Big split feature */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#ff4d26] via-[#ff6d3d] to-[#ff9353] text-[#1a0e0a]">
            <div className="grid items-center gap-10 p-8 md:grid-cols-2 md:p-14">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#1a0e0a]/70">Coach-led. Data-backed.</p>
                <h3 className="font-display mt-4 text-4xl font-bold leading-[1.05] md:text-5xl">
                  Every session runs on live metrics so nothing is wasted.
                </h3>
                <p className="mt-5 max-w-lg text-[#1a0e0a]/80">
                  Heart-rate zones on the big screen, velocity bars on the platforms, a nutrition dashboard in
                  the studio app — your coach always sees what works.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-2 rounded-full bg-[#1a0e0a] px-5 py-3 text-sm font-semibold text-[#ffede2] transition hover:bg-black"
                  >
                    Claim a trial pass <Icon name="arrow" className="h-4 w-4" />
                  </a>
                  <a
                    href="#coaches"
                    className="inline-flex items-center gap-2 rounded-full border border-[#1a0e0a]/20 px-5 py-3 text-sm font-semibold text-[#1a0e0a]/80 transition hover:bg-[#1a0e0a]/10"
                  >
                    Meet the coaches
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { k: "Heart rate", v: "162 bpm", z: "Z4 · 68%" },
                  { k: "Bar velocity", v: "0.78 m/s", z: "Intent · green" },
                  { k: "Calories", v: "412", z: "Session total" },
                  { k: "Recovery score", v: "94", z: "Ready to train" },
                ].map((m) => (
                  <div
                    key={m.k}
                    className="rounded-2xl border border-[#1a0e0a]/10 bg-[#fff1e4] p-4 shadow-[0_10px_30px_-10px_rgba(26,14,10,0.3)]"
                  >
                    <p className="text-[11px] uppercase tracking-widest text-[#1a0e0a]/50">{m.k}</p>
                    <p className="font-display mt-2 text-2xl font-bold">{m.v}</p>
                    <p className="mt-1 text-xs text-[#1a0e0a]/60">{m.z}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#ff9353]">This week · Apr 14–20</p>
              <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">Book a session that matches your rhythm.</h2>
            </div>
            <div className="flex gap-2">
              {["All", "Strength", "HIIT", "Recovery"].map((c, i) => (
                <button
                  key={c}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                    i === 0
                      ? "border-white bg-white text-[#0f0f12]"
                      : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
            <div className="hidden grid-cols-[80px_120px_1fr_160px_120px] bg-white/[0.04] px-6 py-4 text-xs uppercase tracking-wider text-white/50 md:grid">
              <span>Day</span>
              <span>Time</span>
              <span>Class</span>
              <span>Coach</span>
              <span className="text-right">Availability</span>
            </div>
            <ul className="divide-y divide-white/5">
              {schedule.map((s) => (
                <li
                  key={s.day + s.slot + s.title}
                  className="grid grid-cols-2 items-center gap-2 px-6 py-5 transition hover:bg-white/[0.03] md:grid-cols-[80px_120px_1fr_160px_120px]"
                >
                  <span className="font-display text-sm font-semibold text-[#ff9353]">{s.day}</span>
                  <span className="font-display text-base font-semibold">{s.slot}</span>
                  <span className="col-span-2 text-sm text-white/80 md:col-span-1">{s.title}</span>
                  <span className="text-sm text-white/50">Coach {s.coach}</span>
                  <span className="text-right text-xs text-white/70">{s.spots}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section id="coaches" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#ff9353]">The team</p>
            <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">Coaches who&apos;ve done the work.</h2>
            <p className="mt-5 text-white/60">
              Combined, our team brings 60+ years of coaching across national champions, everyday athletes, and
              post-rehab clients. They&apos;ll meet you exactly where you are.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coaches.map((c) => (
              <article
                key={c.name}
                className="group rounded-3xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/25"
              >
                <div
                  className={`aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br ${c.hue} relative`}
                >
                  <div className="absolute inset-0 mix-blend-overlay opacity-60 noise" />
                  <span className="font-display absolute bottom-4 left-4 text-6xl font-bold text-white/90">
                    {c.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="font-display text-lg font-semibold">{c.name}</p>
                    <p className="text-xs text-white/50">{c.role}</p>
                  </div>
                  <Icon name="arrow" className="h-4 w-4 text-white/40 transition group-hover:-rotate-45 group-hover:text-white" />
                </div>
                <p className="mt-3 text-xs text-white/40">{c.cert}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-10">
              <div className="flex text-[#ff9353]">
                {[...Array(5)].map((_, i) => <Icon key={i} name="star" className="h-5 w-5" />)}
              </div>
              <p className="font-display mt-6 text-2xl font-medium leading-snug md:text-3xl">
                &ldquo;I&apos;ve trained at five studios in Brooklyn. PulseFit is the only one where the programming
                felt built for me. Ten weeks in, my deadlift is up 55 pounds and I actually sleep well again.&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[#ff4d26] to-[#ff9353] font-display font-bold text-[#1a0e0a]">
                  AR
                </span>
                <div>
                  <p className="font-semibold">Amara Reyes</p>
                  <p className="text-xs text-white/50">Creative director · Member since 2024</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                { q: "Retention jumped 2x since switching our team over to their corporate plan.", a: "Theo Imai · Ops at Loop" },
                { q: "The recovery lab is a cheat code for anyone over 35.", a: "Priya Shah · Marathon coach" },
              ].map((t) => (
                <div key={t.a} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                  <div className="flex text-[#ff9353]">
                    {[...Array(5)].map((_, i) => <Icon key={i} name="star" className="h-4 w-4" />)}
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-white/80">&ldquo;{t.q}&rdquo;</p>
                  <p className="mt-4 text-xs text-white/50">{t.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-[#ff9353]">Membership</p>
            <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">Simple plans. No contracts.</h2>
            <p className="mt-5 text-white/60">
              Every membership includes free guest passes, app access, and unlimited recovery sessions. Pause
              any time with 7 days notice.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pricing.map((p) => (
              <article
                key={p.name}
                className={`relative flex flex-col rounded-3xl border p-8 transition ${
                  p.featured
                    ? "border-[#ff4d26] bg-gradient-to-b from-[#ff4d26]/10 to-white/[0.02] shadow-[0_30px_80px_-40px_rgba(255,77,38,0.5)]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/25"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-[#ff4d26] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a0e0a]">
                    Most popular
                  </span>
                )}
                <p className="font-display text-lg font-semibold">{p.name}</p>
                <p className="mt-1 text-sm text-white/60">{p.blurb}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold">{p.price}</span>
                  <span className="text-sm text-white/50">{p.cadence}</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm text-white/80">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-[#ff9353]" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    p.featured
                      ? "bg-gradient-to-r from-[#ff4d26] to-[#ff9353] text-[#1a0e0a] hover:opacity-90"
                      : "border border-white/20 text-white hover:border-white hover:bg-white hover:text-[#0f0f12]"
                  }`}
                >
                  Choose {p.name}
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
              <p className="text-xs uppercase tracking-[0.22em] text-[#ff9353]">Questions</p>
              <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">You asked, we answered.</h2>
              <p className="mt-5 text-white/60">
                Still have questions? Swing by the studio — coffee&apos;s on us.
              </p>
            </div>
            <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.02]">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                    {f.q}
                    <span className="ml-4 grid h-7 w-7 place-items-center rounded-full border border-white/15 text-white/50 transition group-open:rotate-45 group-open:border-[#ff9353] group-open:text-[#ff9353]">
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
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0f0f12] p-10 md:p-16">
            <div className="pointer-events-none absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(500px circle at 85% 20%, rgba(255,77,38,0.35), transparent 55%), radial-gradient(500px circle at 15% 90%, rgba(215,255,77,0.18), transparent 55%)",
              }}
            />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-6xl">
                  Your first session is <span className="text-[#ff9353]">on us.</span>
                </h2>
                <p className="mt-5 max-w-lg text-white/70">
                  Bring a friend. Bring doubts. We&apos;ll handle the rest — a 20-minute onboarding, a coach-led
                  class, and a plan for the week ahead.
                </p>
              </div>
              <form className="flex w-full flex-col gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="you@studio.com"
                  className="w-full flex-1 rounded-xl bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:ring-2 focus:ring-[#ff4d26]/40"
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff4d26] to-[#ff9353] px-5 py-3 text-sm font-semibold text-[#1a0e0a] transition hover:opacity-90"
                >
                  Reserve my trial <Icon name="arrow" className="h-4 w-4" />
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
            <a href="#" className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#ff4d26] to-[#ff9353] text-[#1a0e0a]">
                <Logo />
              </span>
              PulseFit
            </a>
            <p className="mt-4 max-w-sm text-sm text-white/50">
              A cinematic strength and conditioning studio in Brooklyn, open 5am to 10pm, seven days a week.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Studio</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#programs" className="hover:text-white">Programs</a></li>
              <li><a href="#schedule" className="hover:text-white">Schedule</a></li>
              <li><a href="#coaches" className="hover:text-white">Coaches</a></li>
              <li><a href="#pricing" className="hover:text-white">Membership</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Corporate plans</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Visit</p>
            <p className="mt-3 text-sm text-white/70">
              128 Franklin Ave<br />
              Brooklyn, NY 11205
            </p>
            <p className="mt-3 text-sm text-white/70">hello@pulsefit.studio</p>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-white/40">
            <span>© {new Date().getFullYear()} PulseFit Studio. All rights reserved.</span>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
