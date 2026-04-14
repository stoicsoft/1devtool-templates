const speakers = [
  { name: "Priya Kapoor", role: "Chief of Staff · StoicSoft", talk: "Running an indie studio with the discipline of a fund", hue: "from-[#d4ff3d] to-[#63b6ff]" },
  { name: "Jonas Park", role: "Founder · Routine", talk: "Pricing as product design", hue: "from-[#ff6547] to-[#c8a8ff]" },
  { name: "Amara Reyes", role: "Product · Aether", talk: "Shipping AI tools without a model team", hue: "from-[#c8a8ff] to-[#d4ff3d]" },
  { name: "Dante Okafor", role: "Engineer · 1DevTool", talk: "What I learned writing 62 starter templates", hue: "from-[#63b6ff] to-[#ff6547]" },
  { name: "Mei Wong", role: "Indie dev · Quill", talk: "From $0 to $40k MRR, solo and quietly", hue: "from-[#d4ff3d] to-[#ff6547]" },
  { name: "Wren Holloway", role: "Writer · The Margin", talk: "Writing that compounds: a year of Sunday notes", hue: "from-[#ff6547] to-[#d4ff3d]" },
  { name: "Diego Martín", role: "CTO · Tessera", talk: "When a side project becomes a business you can&apos;t quit", hue: "from-[#63b6ff] to-[#c8a8ff]" },
  { name: "Nadia Reyes", role: "Ops · ServerCompass", talk: "Customer support as your best roadmap", hue: "from-[#c8a8ff] to-[#ff6547]" },
]

const schedule = [
  { day: 1, items: [
    { t: "09:00", k: "Opening & coffee", s: "Kickoff", kind: "break" },
    { t: "09:30", k: "Running an indie studio with the discipline of a fund", s: "Priya Kapoor", kind: "talk" },
    { t: "10:15", k: "Pricing as product design", s: "Jonas Park", kind: "talk" },
    { t: "11:00", k: "Morning break", s: "Roof terrace", kind: "break" },
    { t: "11:30", k: "Writing that compounds", s: "Wren Holloway", kind: "talk" },
    { t: "12:15", k: "Long lunch · Chef&apos;s menu", s: "Jardim das Amoreiras", kind: "break" },
    { t: "14:00", k: "Shipping AI tools without a model team", s: "Amara Reyes", kind: "talk" },
    { t: "15:00", k: "Workshop · Pricing page audits", s: "Jonas Park · 20 seats", kind: "workshop" },
    { t: "17:30", k: "Cocktails · Day one", s: "Rooftop — all welcome", kind: "break" },
  ]},
  { day: 2, items: [
    { t: "09:30", k: "From $0 to $40k MRR, solo", s: "Mei Wong", kind: "talk" },
    { t: "10:15", k: "62 starter templates, one lesson", s: "Dante Okafor", kind: "talk" },
    { t: "11:00", k: "Morning break", s: "Roof terrace", kind: "break" },
    { t: "11:30", k: "Customer support as your best roadmap", s: "Nadia Reyes", kind: "talk" },
    { t: "12:15", k: "Long lunch · Family-style", s: "Jardim das Amoreiras", kind: "break" },
    { t: "14:00", k: "When a side project becomes a business", s: "Diego Martín", kind: "talk" },
    { t: "15:00", k: "Open studio · Office hours with speakers", s: "All day two attendees", kind: "workshop" },
    { t: "17:00", k: "Closing note", s: "Priya Kapoor", kind: "talk" },
    { t: "17:30", k: "Afterparty", s: "Rooftop — venue sponsored by StoicSoft", kind: "break" },
  ]},
]

const sponsors = [
  { name: "StoicSoft", tier: "Host" },
  { name: "1DevTool", tier: "Platinum" },
  { name: "ServerCompass", tier: "Platinum" },
  { name: "Aether", tier: "Gold" },
  { name: "Routine", tier: "Gold" },
  { name: "Tessera", tier: "Silver" },
  { name: "Parallel", tier: "Silver" },
  { name: "Orbit", tier: "Silver" },
]

const tickets = [
  { name: "Day Pass", price: "€180", body: "Single-day access · Choose Thursday or Friday.", perks: ["One full day of talks", "Morning & lunch", "Networking terrace"] },
  { name: "Full Conference", price: "€340", body: "Both days · Every talk, every workshop, every meal.", perks: ["Both days of talks", "Workshop access (first 20)", "Rooftop afterparty", "Signed print from the studio"], featured: true },
  { name: "Studio Pack", price: "€1,450", body: "Five full-conference passes for your team.", perks: ["5 full conference tickets", "Private intro to speakers", "Reserved team seating", "Group photo at the close"] },
]

const stats = [
  { k: "2 days", v: "Fri 15 & Sat 16 · October 2026" },
  { k: "24", v: "Speakers across 12 indie studios" },
  { k: "280", v: "Seats, not one more" },
  { k: "4th", v: "Edition · Lisbon return" },
]

function Icon({ name, className = "h-5 w-5" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "pin") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="10" r="3"/><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/></svg>)
  if (name === "calendar") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 9h18"/></svg>)
  if (name === "ticket") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 10V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4Z"/><path d="M14 5v14" strokeDasharray="2 2"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "sparkle") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="m12 2 2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7Z"/></svg>)
  return null
}

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#0a0a0a] text-[#f3eede]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] gradient-hero" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />

      {/* Nav */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <span className="relative grid h-10 w-10 place-items-center rounded-full bg-[#d4ff3d] text-[#0a0a0a]">
              <span className="spin-slow absolute inset-[-6px] rounded-full border border-dashed border-[#d4ff3d]/40" />
              <Icon name="sparkle" className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-lg font-bold">Shipped</p>
              <p className="font-serif text-xs italic text-[#f3eede]/60">Lisbon · Oct 15 — 16, 2026</p>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-[#f3eede]/70 md:flex">
            <a href="#speakers" className="hover:text-[#d4ff3d]">Speakers</a>
            <a href="#schedule" className="hover:text-[#d4ff3d]">Schedule</a>
            <a href="#venue" className="hover:text-[#d4ff3d]">Venue</a>
            <a href="#tickets" className="hover:text-[#d4ff3d]">Tickets</a>
          </nav>
          <a href="#tickets" className="group inline-flex items-center gap-2 rounded-full bg-[#d4ff3d] px-4 py-2 text-sm font-bold text-[#0a0a0a] transition hover:bg-[#ff6547] hover:text-[#f3eede]">
            Get a ticket <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#f3eede]/60">
            <span className="flex items-center gap-2 rounded-full border border-[#d4ff3d]/30 bg-[#d4ff3d]/10 px-3 py-1 text-[#d4ff3d]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff3d]" /> 4th edition · 61 days to go
            </span>
            <span className="flex items-center gap-2"><Icon name="pin" className="h-3.5 w-3.5" /> Lisbon, Portugal</span>
            <span className="flex items-center gap-2"><Icon name="calendar" className="h-3.5 w-3.5" /> 15 — 16 October 2026</span>
          </div>

          <h1 className="font-display mt-8 text-[clamp(3rem,10vw,9.5rem)] font-black leading-[0.88] tracking-tight">
            SHIPPED
            <br />
            <span className="text-[#d4ff3d]">/2026</span>
          </h1>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.3fr_1fr]">
            <p className="font-serif max-w-2xl text-2xl italic leading-snug text-[#f3eede]/85">
              Two days of indie founders, solo operators, and small teams talking about the systems, pricing,
              and habits behind the software they ship. No keynotes from VCs. No &ldquo;state of AI.&rdquo;
              Just the craft.
            </p>

            <div className="space-y-3">
              <a href="#tickets" className="group inline-flex w-full items-center justify-between gap-2 rounded-2xl bg-[#d4ff3d] px-6 py-5 text-sm font-bold text-[#0a0a0a] transition hover:bg-[#ff6547] hover:text-[#f3eede]">
                <span className="font-display text-2xl font-black">Get a ticket</span>
                <Icon name="arrow" className="h-6 w-6 transition group-hover:translate-x-0.5" />
              </a>
              <a href="#speakers" className="inline-flex w-full items-center justify-between gap-2 rounded-2xl border border-[#f3eede]/15 px-6 py-5 text-sm hover:border-[#d4ff3d]">
                <span className="font-display text-xl font-bold">See the lineup</span>
                <Icon name="arrow" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-6 border-t border-[#f3eede]/10 pt-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.v}>
                <p className="font-display text-4xl font-bold">{s.k}</p>
                <p className="mt-1 text-sm text-[#f3eede]/60">{s.v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden border-y border-[#f3eede]/10 bg-[#d4ff3d] py-4 text-[#0a0a0a]">
          <div className="flex marquee whitespace-nowrap gap-10 font-display text-3xl font-black italic">
            {["Shipped /2026", "Lisbon · Oct 15 — 16", "280 seats · no more", "Sold out in 2024", "Sold out in 2025", "Will sell out in 2026"].concat([
              "Shipped /2026", "Lisbon · Oct 15 — 16", "280 seats · no more", "Sold out in 2024", "Sold out in 2025", "Will sell out in 2026",
            ]).map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                <span>{t}</span>
                <span className="text-[#ff6547]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section id="speakers" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#d4ff3d]">Speakers · 24 confirmed</p>
              <h2 className="font-display mt-3 text-5xl font-black leading-[1.02] md:text-7xl">
                People who <span className="font-serif italic text-[#ff6547]">actually ship.</span>
              </h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-sm text-[#f3eede]/70 hover:text-[#d4ff3d]">
              All 24 speakers <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {speakers.map((s) => (
              <article key={s.name} className="group rounded-3xl border border-[#f3eede]/10 bg-[#111112] p-4 transition hover:border-[#d4ff3d]/40">
                <div className={`relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${s.hue}`}>
                  <div className="absolute bottom-3 left-3 font-serif text-6xl italic text-[#0a0a0a]/80">{s.name.split(" ").map((n) => n[0]).join("")}</div>
                </div>
                <div className="mt-4">
                  <p className="font-display text-lg font-bold">{s.name}</p>
                  <p className="text-xs text-[#f3eede]/50">{s.role}</p>
                  <p className="font-serif mt-3 text-sm italic leading-snug text-[#f3eede]/85" dangerouslySetInnerHTML={{__html: `&ldquo;${s.talk.replaceAll('&apos;', "'")}&rdquo;`}} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#d4ff3d]">Schedule</p>
            <h2 className="font-display mt-3 text-5xl font-black leading-[1.02] md:text-7xl">
              Two days. <span className="font-serif italic text-[#63b6ff]">Every minute earned.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            {schedule.map((d) => (
              <div key={d.day} className="rounded-3xl border border-[#f3eede]/10 bg-[#111112] p-6">
                <div className="flex items-center justify-between border-b border-[#f3eede]/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#d4ff3d]">Day {d.day}</p>
                    <p className="font-display mt-1 text-2xl font-bold">{d.day === 1 ? "Friday · Oct 15" : "Saturday · Oct 16"}</p>
                  </div>
                  <span className="rounded-full border border-[#f3eede]/15 px-3 py-1 text-xs text-[#f3eede]/70">Jardim das Amoreiras</span>
                </div>
                <ul className="mt-5 space-y-2">
                  {d.items.map((it, i) => (
                    <li key={i} className="grid grid-cols-[60px_1fr_auto] items-start gap-3 rounded-2xl border border-[#f3eede]/5 px-3 py-3 transition hover:border-[#d4ff3d]/30">
                      <span className="font-display text-sm font-bold text-[#d4ff3d]">{it.t}</span>
                      <div>
                        <p className="font-display text-sm font-semibold" dangerouslySetInnerHTML={{__html: it.k.replaceAll('&apos;', "'")}} />
                        <p className="mt-0.5 text-xs text-[#f3eede]/55">{it.s}</p>
                      </div>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] uppercase tracking-widest ${
                        it.kind === "talk" ? "bg-[#d4ff3d]/15 text-[#d4ff3d]" :
                        it.kind === "workshop" ? "bg-[#ff6547]/15 text-[#ff6547]" :
                        "border border-[#f3eede]/10 text-[#f3eede]/50"
                      }`}>{it.kind}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section id="venue" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-[36px] border border-[#f3eede]/10 bg-gradient-to-br from-[#ff6547] via-[#d4ff3d] to-[#63b6ff] p-10 text-[#0a0a0a] md:p-16">
            <div className="relative grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.22em]">The venue</p>
                <h2 className="font-display mt-3 text-5xl font-black leading-[1.02] md:text-7xl">Jardim das Amoreiras.</h2>
                <p className="font-serif mt-5 max-w-lg text-xl italic leading-snug">
                  A 19th-century former printing house in Príncipe Real, restored as a 280-seat auditorium with
                  a rooftop that looks over the river.
                </p>
                <ul className="mt-8 grid grid-cols-2 gap-3 text-sm font-medium">
                  {["Walking distance from Marquês de Pombal metro", "Wheelchair-accessible auditorium & restrooms", "Quiet room for one-on-one calls", "Live-captioned talks", "All meals on-site · dietary preferences honoured", "Childcare available on request"].map((b) => (
                    <li key={b} className="flex items-start gap-2 rounded-xl bg-[#0a0a0a]/10 p-3 backdrop-blur">
                      <Icon name="check" className="mt-0.5 h-4 w-4" /> {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-[#0a0a0a]/15 bg-[#0a0a0a]/15 p-6 backdrop-blur">
                <p className="font-display text-xs uppercase tracking-[0.22em]">Hotel &amp; travel</p>
                <ul className="mt-4 space-y-3 text-sm">
                  {[
                    { k: "The Vintage", v: "5 min walk · conference rate" },
                    { k: "Memmo Príncipe Real", v: "8 min walk" },
                    { k: "Casa Balthazar", v: "12 min walk · small group" },
                    { k: "Lisbon airport", v: "18 min by taxi" },
                  ].map((h) => (
                    <li key={h.k} className="flex items-center justify-between border-b border-[#0a0a0a]/15 pb-2 last:border-b-0 last:pb-0">
                      <span className="font-semibold">{h.k}</span>
                      <span className="opacity-75">{h.v}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0a0a0a] px-4 py-3 text-sm font-semibold text-[#f3eede]">
                  Open travel guide <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tickets */}
      <section id="tickets" className="relative z-10 border-t border-[#f3eede]/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-[#d4ff3d]">Tickets</p>
            <h2 className="font-display mt-3 text-5xl font-black leading-[1.02] md:text-7xl">
              280 seats. <span className="font-serif italic text-[#ff6547]">When they&apos;re gone, they&apos;re gone.</span>
            </h2>
            <p className="mt-5 text-[#f3eede]/70">No corporate tier. No invite-only. Regular price, no surge.</p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {tickets.map((t) => (
              <article key={t.name} className={`relative flex flex-col rounded-3xl border p-8 transition ${
                t.featured ? "border-[#d4ff3d] bg-[#d4ff3d]/5 shadow-[0_30px_80px_-30px_rgba(212,255,61,0.35)]" : "border-[#f3eede]/10 bg-[#111112] hover:border-[#f3eede]/25"
              }`}>
                {t.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-[#d4ff3d] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#0a0a0a]">Most picked</span>
                )}
                <div className="flex items-center gap-2">
                  <Icon name="ticket" className="h-4 w-4 text-[#d4ff3d]" />
                  <p className="font-display text-lg font-bold">{t.name}</p>
                </div>
                <p className="mt-1 text-sm text-[#f3eede]/60">{t.body}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-black">{t.price}</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm text-[#f3eede]/85">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 text-[#d4ff3d]" /> {p}</li>
                  ))}
                </ul>
                <a href="#" className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  t.featured ? "bg-[#d4ff3d] text-[#0a0a0a] hover:bg-[#ff6547] hover:text-[#f3eede]" : "border border-[#f3eede]/20 text-[#f3eede] hover:border-[#d4ff3d] hover:bg-[#d4ff3d] hover:text-[#0a0a0a]"
                }`}>
                  Grab a {t.name.toLowerCase()} <Icon name="arrow" className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="relative z-10 border-t border-[#f3eede]/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-center font-display text-xs uppercase tracking-[0.22em] text-[#f3eede]/50">
            Thanks to the friends who make this conference happen
          </p>
          <div className="mt-10 grid grid-cols-2 items-center gap-6 sm:grid-cols-4">
            {sponsors.map((s) => (
              <div key={s.name} className="rounded-2xl border border-[#f3eede]/10 bg-[#111112] px-4 py-5 text-center">
                <p className="font-display text-xl font-bold">{s.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#d4ff3d]">{s.tier}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#f3eede]/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#d4ff3d] text-[#0a0a0a]">
                <Icon name="sparkle" className="h-4 w-4" />
              </span>
              <div>
                <p className="font-display text-lg font-bold">Shipped</p>
                <p className="font-serif text-xs italic text-[#f3eede]/60">/ 2026</p>
              </div>
            </a>
            <p className="mt-4 max-w-sm text-sm text-[#f3eede]/50">
              Two days of conversations with the people who ship indie software. Hosted by StoicSoft at
              Jardim das Amoreiras · Lisbon.
            </p>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-[0.18em] text-[#f3eede]/40">Event</p>
            <ul className="mt-3 space-y-2 text-sm text-[#f3eede]/70">
              <li><a href="#speakers" className="hover:text-[#d4ff3d]">Speakers</a></li>
              <li><a href="#schedule" className="hover:text-[#d4ff3d]">Schedule</a></li>
              <li><a href="#venue" className="hover:text-[#d4ff3d]">Venue</a></li>
              <li><a href="#tickets" className="hover:text-[#d4ff3d]">Tickets</a></li>
            </ul>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-[0.18em] text-[#f3eede]/40">Past editions</p>
            <ul className="mt-3 space-y-2 text-sm text-[#f3eede]/70">
              <li><a href="#" className="hover:text-[#d4ff3d]">Shipped /2025</a></li>
              <li><a href="#" className="hover:text-[#d4ff3d]">Shipped /2024</a></li>
              <li><a href="#" className="hover:text-[#d4ff3d]">Shipped /2023</a></li>
            </ul>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-[0.18em] text-[#f3eede]/40">Reach us</p>
            <ul className="mt-3 space-y-2 text-sm text-[#f3eede]/70">
              <li><a href="mailto:hello@shippedconf.com" className="hover:text-[#d4ff3d]">hello@shippedconf.com</a></li>
              <li><a href="#" className="hover:text-[#d4ff3d]">Sponsor brief</a></li>
              <li><a href="#" className="hover:text-[#d4ff3d]">StoicSoft</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#f3eede]/10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-[#f3eede]/40">
            <span>© {new Date().getFullYear()} Shipped Conference · A StoicSoft production.</span>
            <span>Code of conduct · Accessibility</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
