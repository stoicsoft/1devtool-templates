const features = [
  { icon: "spark", title: "Build a daily ritual", body: "Stack three small habits and let Halo nudge you at the right time of day." },
  { icon: "heart", title: "Pair with a partner", body: "Invite one person to see your streaks. Just one — that&apos;s the whole social network." },
  { icon: "moon", title: "Quiet hours", body: "Halo never pings during sleep, focus, or your weekly retreat blocks. Earnest by default." },
  { icon: "chart", title: "Soft streaks", body: "Miss a day? Your streak doesn&apos;t reset. Halo learns your rhythm — life happens." },
  { icon: "shield", title: "Offline-first", body: "Everything works without a connection. Sync runs end-to-end encrypted when you&apos;re online." },
  { icon: "globe", title: "Privacy-respecting", body: "No ads, no trackers, no behaviour selling. Just a $4 / month app you can trust." },
]

const habits = [
  { name: "Read for 20 min", time: "07:00", streak: 14, color: "bg-[#ff8666]" },
  { name: "Cold shower", time: "07:30", streak: 6, color: "bg-[#7e3bff]" },
  { name: "Walk the dog", time: "08:15", streak: 41, color: "bg-[#44e3b8]" },
  { name: "Write 200 words", time: "21:00", streak: 22, color: "bg-[#ffc24c]" },
]

const reviews = [
  { q: "First habit app I haven&apos;t deleted within a month. Soft streaks were the unlock for me.", a: "Mei W.", r: "iOS · 5 stars" },
  { q: "My partner and I built a morning rhythm together. Halo&apos;s the only shared surface we actually keep checking.", a: "Theo P.", r: "Android · 5 stars" },
  { q: "Quiet hours are a small thing that says everything about how the team thinks about your attention.", a: "Anya G.", r: "iOS · 5 stars" },
  { q: "$4/mo for an app that respects me. I&apos;ll pay forever.", a: "Jonas K.", r: "iOS · 5 stars" },
]

const stats = [
  { k: "4.9", v: "App Store · 18.4k reviews" },
  { k: "180k", v: "Daily rituals tracked" },
  { k: "63 d", v: "Median streak length" },
  { k: "$0", v: "Spent on user data" },
]

const faqs = [
  { q: "How is Halo different from other habit apps?", a: "Halo doesn&apos;t gamify. No badges, no leaderboards, no streak shaming. It&apos;s a soft, well-designed nudge — built around the idea that habits stick when they fit your life, not when an app yells at you." },
  { q: "Is there a free version?", a: "Yes — Halo is free for up to three habits. Premium is $4/month or $32/year and unlocks unlimited habits, partner sync, and quiet hours." },
  { q: "Where is my data stored?", a: "On your device. We sync across your devices via end-to-end encryption. We can&apos;t see your habits even if we wanted to." },
  { q: "Who makes Halo?", a: "Halo is a StoicSoft product, built by the same team behind ServerCompass and 1DevTool. Two designers, one engineer." },
]

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      <defs>
        <linearGradient id="halo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7e3bff" />
          <stop offset="100%" stopColor="#ff5fb1" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="9" fill="none" stroke="url(#halo-grad)" strokeWidth="3" />
      <circle cx="16" cy="16" r="4" fill="url(#halo-grad)" />
    </svg>
  )
}

function Icon({ name, className = "h-5 w-5" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "spark") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M6 18l3-3M15 9l3-3"/></svg>)
  if (name === "heart") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M20.8 8.6a5.4 5.4 0 0 0-9.3-2.1 5.4 5.4 0 0 0-9.3 4 5.4 5.4 0 0 0 1.6 3.8l7.7 7.7 7.7-7.7a5.4 5.4 0 0 0 1.6-5.7Z"/></svg>)
  if (name === "moon") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21 13a9 9 0 1 1-10-10 7 7 0 0 0 10 10Z"/></svg>)
  if (name === "chart") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 4v16h16"/><path d="M7 14l3-3 3 3 5-6"/></svg>)
  if (name === "shield") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3 4 6v6c0 5 3.5 8.6 8 9 4.5-.4 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>)
  if (name === "globe") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "star") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="m12 2 3 7 7 .6-5.3 4.6L18 22l-6-3.8L6 22l1.3-7.8L2 9.6 9 9l3-7Z"/></svg>)
  if (name === "apple") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="M16.4 1.6c0 1.6-.6 3-1.7 4-.9.9-2.3 1.6-3.5 1.6-.2-1.5.5-3 1.5-4 1-1 2.5-1.6 3.7-1.6Zm3.6 17c-.7 1.5-1 2.2-1.8 3.5-1.2 1.7-2.8 3.9-4.9 3.9-1.8 0-2.3-1.2-4.7-1.2-2.5 0-3 1.2-4.8 1.2-2 0-3.6-2-4.8-3.7C-.4 18 .9 11.7 4.9 11c1.4-.2 2.7.5 4 .5 1.4 0 2.2-.5 3.8-.6 1.4 0 2.9.4 4 1.5-3.5 2-3 7 .3 7.6Z"/></svg>)
  if (name === "play-store") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="M3 2.4 14.4 12 3 21.6c-.5-.3-.8-.8-.8-1.4V3.8c0-.6.3-1.1.8-1.4Zm10.5 8.4L4.4 1.7c.4-.1.8 0 1.2.2L17 8l-3.5 2.8Zm0 2.4L17 16l-11.4 6.1c-.4.2-.8.3-1.2.2l9.1-9.1Zm5.6-1.2-3.4-1.9 3.4-1.9c.7-.4 1.4.1 1.4.9v2c0 .8-.7 1.3-1.4.9Z"/></svg>)
  return null
}

function PhoneMock({ accent = "from-[#7e3bff] to-[#ff5fb1]", offset = "" }) {
  return (
    <div className={`relative ${offset}`}>
      <div className={`pointer-events-none absolute -inset-12 rounded-[60px] bg-gradient-to-br ${accent} opacity-20 blur-3xl`} />
      <div className="relative w-[280px] rounded-[44px] border-[10px] border-[#0e0c19] bg-[#0e0c19] shadow-[0_50px_120px_-30px_rgba(126,59,255,0.4)]">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#0e0c19]" />
        <div className="overflow-hidden rounded-[34px] bg-gradient-to-b from-[#fbfafd] to-[#f1ecfb]">
          <div className="px-5 pt-12 pb-6">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-[#0e0c19]/60">9:41</span>
              <div className="flex items-center gap-1 text-[#0e0c19]/60">
                <span className="h-2 w-2 rounded-full bg-[#0e0c19]/70" />
                <span className="h-2 w-3 rounded-sm bg-[#0e0c19]/70" />
                <span className="h-2 w-4 rounded-sm bg-[#0e0c19]/70" />
              </div>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#6b6580]">Tuesday · April</p>
            <h3 className="mt-1 text-3xl font-bold text-[#0e0c19]">Good morning,<br />Mei</h3>

            <div className="mt-5 rounded-2xl bg-gradient-to-br from-[#7e3bff] to-[#ff5fb1] p-4 text-white">
              <p className="text-xs opacity-80">Today&apos;s ritual</p>
              <p className="mt-1 text-2xl font-bold">3 of 4 done</p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-[75%] rounded-full bg-white" />
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              {habits.map((h, i) => (
                <li key={h.name} className="flex items-center gap-3 rounded-2xl border border-[#ece8f4] bg-white p-3">
                  <span className={`grid h-9 w-9 place-items-center rounded-full ${h.color} text-white`}>
                    {i < 3 ? <Icon name="check" className="h-4 w-4" /> : <Icon name="spark" className="h-4 w-4" />}
                  </span>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${i < 3 ? "text-[#6b6580] line-through" : "text-[#0e0c19]"}`}>{h.name}</p>
                    <p className="text-[10px] text-[#6b6580]">{h.time} · streak {h.streak}d</p>
                  </div>
                  {i < 3 && <Icon name="check" className="h-4 w-4 text-[#44e3b8]" />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#fbfafd] text-[#0e0c19]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[820px] aurora-light" />
      <div className="pointer-events-none absolute inset-0 dotgrid opacity-[0.4]" />

      {/* Nav */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <Logo /> Halo
          </a>
          <nav className="hidden items-center gap-7 text-sm text-[#2c2745]/80 md:flex">
            <a href="#features" className="hover:text-[#7e3bff]">Features</a>
            <a href="#preview" className="hover:text-[#7e3bff]">Preview</a>
            <a href="#pricing" className="hover:text-[#7e3bff]">Pricing</a>
            <a href="#faq" className="hover:text-[#7e3bff]">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#" className="hidden items-center gap-1.5 rounded-full bg-[#0e0c19] px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-[#7e3bff] sm:inline-flex">
              <Icon name="apple" className="h-3.5 w-3.5" /> App Store
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#7e3bff] to-[#ff5fb1] px-3.5 py-2 text-xs font-semibold text-white">
              <Icon name="play-store" className="h-3.5 w-3.5" /> Get Halo
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-16 md:pt-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.05fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#7e3bff]/20 bg-[#7e3bff]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#7e3bff]">
                <Icon name="star" className="h-3 w-3" /> 4.9 on App Store · 18k reviews
              </span>
              <h1 className="mt-6 text-[clamp(2.6rem,6.2vw,5.5rem)] font-bold leading-[1.02] tracking-tight">
                Habits that{" "}
                <span className="bg-gradient-to-r from-[#7e3bff] via-[#ff5fb1] to-[#ff8666] bg-clip-text text-transparent">
                  actually stick.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[#2c2745]/80">
                Halo is a soft, social-light habit tracker for iOS and Android. No badges, no streak shaming —
                just well-designed rituals that fit your life.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#" className="group inline-flex items-center gap-2 rounded-2xl bg-[#0e0c19] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#7e3bff]">
                  <Icon name="apple" className="h-5 w-5" />
                  <div className="text-left leading-tight">
                    <p className="text-[10px] font-normal opacity-80">Download on</p>
                    <p>App Store</p>
                  </div>
                </a>
                <a href="#" className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#7e3bff] to-[#ff5fb1] px-5 py-3.5 text-sm font-semibold text-white">
                  <Icon name="play-store" className="h-5 w-5" />
                  <div className="text-left leading-tight">
                    <p className="text-[10px] font-normal opacity-80">Get it on</p>
                    <p>Google Play</p>
                  </div>
                </a>
              </div>

              <div className="mt-10 flex items-center gap-6 text-xs text-[#6b6580]">
                <div className="flex -space-x-2">
                  {["#ff8666", "#7e3bff", "#44e3b8", "#ffc24c"].map((c) => (
                    <span key={c} className="h-7 w-7 rounded-full border-2 border-white" style={{ background: c }} />
                  ))}
                </div>
                <p>Joined by <span className="font-semibold text-[#0e0c19]">62,400 humans</span> tracking a daily ritual.</p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <PhoneMock />
                <span className="absolute -left-12 top-12 h-3 w-3 rounded-full bg-[#7e3bff]">
                  <span className="pulse-ring absolute inset-0 rounded-full bg-[#7e3bff]" />
                </span>
                <span className="absolute -right-6 bottom-32 h-2.5 w-2.5 rounded-full bg-[#ff5fb1]">
                  <span className="pulse-ring absolute inset-0 rounded-full bg-[#ff5fb1]" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-[#ece8f4] bg-white py-5">
          <div className="flex marquee gap-12 whitespace-nowrap text-sm font-semibold text-[#6b6580]">
            {[
              "Featured by Apple · App of the Day",
              "Editor&apos;s Choice on Google Play",
              "Top 10 Health · 2025",
              "Product Hunt · Product of the Week",
              "Wired · Best of the year",
              "Built by StoicSoft",
            ].concat([
              "Featured by Apple · App of the Day",
              "Editor&apos;s Choice on Google Play",
              "Top 10 Health · 2025",
              "Product Hunt · Product of the Week",
              "Wired · Best of the year",
              "Built by StoicSoft",
            ]).map((t, i) => (
              <span key={i} className="flex items-center gap-12">
                <span className="text-[#7e3bff]">●</span>
                <span dangerouslySetInnerHTML={{__html: t.replace('&apos;', "'")}} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7e3bff]">Why Halo</p>
            <h2 className="mt-3 text-4xl font-bold leading-[1.05] md:text-5xl">
              Earnest by default. Designed to be uninstalled if it stops helping.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className="group rounded-3xl border border-[#ece8f4] bg-white/80 p-7 transition hover:border-[#7e3bff]/40 hover:shadow-[0_30px_80px_-40px_rgba(126,59,255,0.4)]">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#7e3bff] to-[#ff5fb1] text-white">
                  <Icon name={f.icon} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-[#6b6580]" dangerouslySetInnerHTML={{__html: f.body.replaceAll('&apos;', "'")}} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Preview band */}
      <section id="preview" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#7e3bff] via-[#ff5fb1] to-[#ff8666] p-10 text-white md:p-14">
            <div className="pointer-events-none absolute inset-0 dotgrid opacity-30" />
            <div className="relative grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">A peek inside</p>
                <h2 className="mt-3 text-4xl font-bold leading-[1.05] md:text-5xl">
                  Quiet hours. Soft streaks. Big design.
                </h2>
                <p className="mt-5 max-w-md text-white/85">
                  Halo is what an app feels like when its only KPI is whether you keep using it because it
                  works — not because it harasses you.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                  {[
                    { k: "Soft streaks", v: "Miss a day, keep your streak" },
                    { k: "Quiet hours", v: "No pings during sleep" },
                    { k: "Partner sync", v: "One trusted person, full transparency" },
                    { k: "Offline-first", v: "Works without service" },
                  ].map((f) => (
                    <div key={f.k} className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                      <p className="font-bold">{f.k}</p>
                      <p className="mt-1 text-xs text-white/80">{f.v}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-6">
                <PhoneMock accent="from-white/30 to-white/10" />
                <div className="hidden md:block float-y">
                  <PhoneMock accent="from-white/40 to-white/10" offset="mt-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 border-y border-[#ece8f4] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v}>
              <p className="bg-gradient-to-r from-[#7e3bff] to-[#ff5fb1] bg-clip-text text-5xl font-bold text-transparent">{s.k}</p>
              <p className="mt-2 text-sm text-[#6b6580]">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7e3bff]">Reviews</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">From the App Store, unedited.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {reviews.map((r) => (
              <article key={r.a} className="rounded-3xl border border-[#ece8f4] bg-white p-7">
                <div className="flex text-[#ffc24c]">
                  {[...Array(5)].map((_, i) => <Icon key={i} name="star" className="h-4 w-4" />)}
                </div>
                <p className="mt-4 text-lg leading-snug" dangerouslySetInnerHTML={{__html: `&ldquo;${r.q.replaceAll('&apos;', "'")}&rdquo;`}} />
                <div className="mt-6 flex items-center gap-3 border-t border-[#ece8f4] pt-5">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#7e3bff] to-[#ff5fb1] text-sm font-bold text-white">{r.a.split(" ").map((n) => n[0]).join("")}</span>
                  <div>
                    <p className="text-sm font-semibold">{r.a}</p>
                    <p className="text-xs text-[#6b6580]">{r.r}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 border-t border-[#ece8f4] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7e3bff]">Pricing</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Free to try. Earnest forever.</h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-[#ece8f4] bg-[#fbfafd] p-8">
              <p className="text-lg font-bold">Free</p>
              <p className="mt-1 text-sm text-[#6b6580]">For folks just starting a daily ritual.</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-sm text-[#6b6580]">forever</span>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {["Up to 3 habits", "Soft streaks", "Daily reminders", "Offline-first sync"].map((p) => (
                  <li key={p} className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 text-[#44e3b8]" /> {p}</li>
                ))}
              </ul>
              <a href="#" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#0e0c19]/15 bg-white px-5 py-3 text-sm font-semibold text-[#0e0c19] hover:bg-[#0e0c19] hover:text-white">
                Get Halo
              </a>
            </article>

            <article className="relative rounded-3xl border-2 border-[#7e3bff] bg-gradient-to-br from-[#7e3bff] to-[#ff5fb1] p-8 text-white shadow-[0_30px_80px_-40px_rgba(126,59,255,0.55)]">
              <span className="absolute -top-3 left-8 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7e3bff]">Most loved</span>
              <p className="text-lg font-bold">Premium</p>
              <p className="mt-1 text-sm text-white/80">Everything Halo can do.</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold">$4</span>
                <span className="text-sm text-white/80">/ month · or $32 / year</span>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {["Unlimited habits", "Partner sync", "Quiet hours", "Insights & rhythms", "End-to-end encryption"].map((p) => (
                  <li key={p} className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 text-white" /> {p}</li>
                ))}
              </ul>
              <a href="#" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#7e3bff] hover:bg-[#fbfafd]">
                Start 14-day trial <Icon name="arrow" className="h-4 w-4" />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7e3bff]">FAQ</p>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">Common questions.</h2>
            </div>
            <div className="divide-y divide-[#ece8f4] rounded-3xl border border-[#ece8f4] bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold">
                    {f.q}
                    <span className="ml-4 grid h-7 w-7 place-items-center rounded-full border border-[#0e0c19]/15 text-[#0e0c19]/50 transition group-open:rotate-45 group-open:border-[#7e3bff] group-open:text-[#7e3bff]">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#6b6580]" dangerouslySetInnerHTML={{__html: f.a.replaceAll('&apos;', "'")}} />
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-[32px] bg-[#0e0c19] p-10 text-white md:p-16">
            <div className="pointer-events-none absolute inset-0"
                 style={{ background: "radial-gradient(700px circle at 80% 0%, rgba(126,59,255,0.4), transparent 55%), radial-gradient(700px circle at 10% 100%, rgba(255,95,177,0.3), transparent 55%)" }} />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-4xl font-bold leading-[1.05] md:text-6xl">
                  Start one habit.<br />
                  <span className="bg-gradient-to-r from-[#7e3bff] to-[#ff8666] bg-clip-text text-transparent">Make it stick.</span>
                </h2>
                <p className="mt-5 max-w-lg text-white/70">
                  14-day free trial. Five-second cancel from settings. We&apos;d rather lose you than nag you.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-[#0e0c19]">
                  <Icon name="apple" className="h-5 w-5" /> Download on App Store
                </a>
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7e3bff] to-[#ff5fb1] px-5 py-3.5 text-sm font-semibold">
                  <Icon name="play-store" className="h-5 w-5" /> Get it on Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#ece8f4] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 text-lg font-bold">
              <Logo /> Halo
            </a>
            <p className="mt-4 max-w-sm text-sm text-[#6b6580]">
              Halo is a StoicSoft app — built by the same team behind ServerCompass and 1DevTool. Two
              designers, one engineer, no investors.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0e0c19]/40">App</p>
            <ul className="mt-3 space-y-2 text-sm text-[#2c2745]/80">
              <li><a href="#features" className="hover:text-[#7e3bff]">Features</a></li>
              <li><a href="#pricing" className="hover:text-[#7e3bff]">Pricing</a></li>
              <li><a href="#" className="hover:text-[#7e3bff]">Changelog</a></li>
              <li><a href="#" className="hover:text-[#7e3bff]">Support</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0e0c19]/40">Studio</p>
            <ul className="mt-3 space-y-2 text-sm text-[#2c2745]/80">
              <li><a href="#" className="hover:text-[#7e3bff]">StoicSoft</a></li>
              <li><a href="#" className="hover:text-[#7e3bff]">ServerCompass</a></li>
              <li><a href="#" className="hover:text-[#7e3bff]">1DevTool</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0e0c19]/40">Connect</p>
            <ul className="mt-3 space-y-2 text-sm text-[#2c2745]/80">
              <li><a href="#" className="hover:text-[#7e3bff]">Twitter</a></li>
              <li><a href="#" className="hover:text-[#7e3bff]">Instagram</a></li>
              <li><a href="mailto:hello@halo.app" className="hover:text-[#7e3bff]">hello@halo.app</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#ece8f4]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-[#6b6580]">
            <span>© {new Date().getFullYear()} StoicSoft, Inc. Halo is a trademark of StoicSoft.</span>
            <div className="flex gap-5">
              <a href="#" className="hover:text-[#7e3bff]">Privacy</a>
              <a href="#" className="hover:text-[#7e3bff]">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
