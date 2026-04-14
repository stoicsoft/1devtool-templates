const trips = [
  { name: "Along the Alentejo", days: 8, where: "Portugal", month: "May 2026", price: "€3,240", photo: "photo-portugal", spots: "4 seats left", tag: "Signature" },
  { name: "The High Atlas", days: 10, where: "Morocco", month: "Oct 2026", price: "€3,890", photo: "photo-morocco", spots: "6 seats", tag: "Slow" },
  { name: "Tohoku in Autumn", days: 12, where: "Japan", month: "Nov 2026", price: "€5,640", photo: "photo-japan", spots: "2 seats left", tag: "Harvest" },
  { name: "Georgia, quietly", days: 9, where: "Caucasus", month: "Jun 2026", price: "€2,980", photo: "photo-georgia", spots: "Sold out", tag: "Sold out" },
  { name: "West Fjords", days: 8, where: "Iceland", month: "Aug 2026", price: "€4,210", photo: "photo-iceland", spots: "5 seats", tag: "New" },
  { name: "Sacred Valley", days: 11, where: "Peru", month: "Apr 2027", price: "€4,460", photo: "photo-peru", spots: "Early access", tag: "Opens soon" },
]

const itinerary = [
  { day: "Day 1", t: "Arrive in Évora", b: "A welcome dinner on a patio, an hour with our local guide Tiago, and no further plans for the evening." },
  { day: "Day 2", t: "The cork forests", b: "A three-hour slow walk through working cork forests with a third-generation harvester, followed by lunch at his family&apos;s farmhouse." },
  { day: "Day 3", t: "Open studio day", b: "A free day in Évora. Optional: a private pottery lesson or a rural bike ride. We help plan, we don&apos;t push." },
  { day: "Day 4", t: "Down to Monsaraz", b: "A late-morning drive, a long lunch, and an afternoon by the lake. The kind of day you want the whole trip to be." },
]

const highlights = [
  { t: "Fourteen travellers. No more.", b: "Every trip is capped at fourteen. The group dinner still fits around one table." },
  { t: "Local guides we&apos;ve walked with.", b: "Not freelancers off a marketplace. People our team has worked with for years, usually the name in their village." },
  { t: "Real rest days.", b: "Every itinerary has an unplanned day. We don&apos;t pretend that &lsquo;leisure&rsquo; can be scheduled." },
  { t: "Zero commission", b: "We book hotels and guides directly. Any discount we negotiate shows up as a lower trip price, not margin." },
]

const reviews = [
  { q: "The first trip of my life where I felt the organisers genuinely loved the country they were showing me.", a: "Mei W. · Along the Alentejo, 2025" },
  { q: "Wayfound&apos;s definition of a rest day ruined all other trips for me.", a: "Theo P. · Tohoku, 2024" },
  { q: "Fourteen travellers, and by day four we were one unit.", a: "Priya R. · The High Atlas, 2025" },
]

const stats = [
  { k: "84", v: "Trips run since 2018" },
  { k: "14", v: "Travellers per departure, maximum" },
  { k: "4.97", v: "Review average · 612 ratings" },
  { k: "72%", v: "Of travellers return for a second trip" },
]

const faqs = [
  { q: "Are flights included?", a: "No. We organise everything from your arrival airport to the return, but the international flight is yours to book. Most travellers join us from North America, Europe, and Japan." },
  { q: "What&apos;s the pace like?", a: "Genuinely slow. Most days have one anchor activity and a long, unrushed meal. Every trip has at least one completely unplanned day." },
  { q: "How physical are the trips?", a: "Varies by destination. Along the Alentejo is gentle walking; the High Atlas involves a few hours hiking at altitude. Every trip page has a plain-language &ldquo;what to expect&rdquo; section." },
  { q: "Solo travellers welcome?", a: "Absolutely — about a third of every group is solo. We don&apos;t add a single-supplement on most trips, and our rooms are chosen to make single travellers feel at home." },
]

function Logo() {
  return (
    <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden>
      <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 26c4-10 16-10 20 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="18" r="2" fill="currentColor" />
      <path d="M20 20v6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "pin") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="10" r="3"/><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/></svg>)
  if (name === "cal") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 9h18"/></svg>)
  if (name === "group") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5M15 20c0-2 2-4 4-4"/></svg>)
  if (name === "compass") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="m14 10-6 6 2-6 6-2-2 2Z"/></svg>)
  if (name === "star") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="m12 2 3 7 7 .6-5.3 4.6L18 22l-6-3.8L6 22l1.3-7.8L2 9.6 9 9l3-7Z"/></svg>)
  return null
}

function PostcardPhoto({ photo, label, sub }) {
  return (
    <div className={`relative aspect-[4/5] overflow-hidden rounded-3xl ${photo}`}>
      <div className="absolute inset-0 paper mix-blend-overlay opacity-40" />
      <div className="absolute inset-0 sun-glow" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent" />
      <div className="absolute top-4 left-4 rounded-full border border-white/40 bg-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white backdrop-blur">
        Wayfound postcard
      </div>
      <div className="absolute bottom-4 left-4 right-4 text-white/95">
        <p className="font-display text-3xl">{label}</p>
        <p className="mt-1 text-xs text-white/80">{sub}</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative bg-[#f5ebd9] text-[#1a1714]">
      <div className="pointer-events-none fixed inset-0 paper opacity-45" />

      {/* Nav */}
      <header className="relative z-20 border-b border-[#d5c7aa]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2">
            <span className="text-[#c8643d]"><Logo /></span>
            <span className="font-display text-2xl tracking-tight">Wayfound</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[#1a1714]/80 md:flex">
            <a href="#trips" className="underline-grow">Trips</a>
            <a href="#how" className="underline-grow">How we travel</a>
            <a href="#journal" className="underline-grow">Journal</a>
            <a href="#stories" className="underline-grow">Traveller stories</a>
          </nav>
          <a href="#book" className="group inline-flex items-center gap-2 rounded-full bg-[#1a1714] px-4 py-2 text-sm text-[#f5ebd9] transition hover:bg-[#c8643d]">
            Reserve a seat <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#6a5f4b]">
            <span className="h-px w-10 bg-[#6a5f4b]" />
            Small-group trips · founded 2018 · Lisbon
          </div>

          <div className="mt-8 grid gap-12 md:grid-cols-[1.1fr_1fr]">
            <div>
              <h1 className="font-display text-[clamp(2.8rem,8vw,7.5rem)] leading-[0.95] tracking-tight">
                Trips for people who&apos;d rather <span className="font-serif italic text-[#c8643d]">stay another week.</span>
              </h1>
              <p className="font-serif mt-8 max-w-xl text-2xl italic leading-snug text-[#1a1714]/75">
                Fourteen travellers, eight to twelve days, one unhurried route. Hand-planned by people who have
                walked every mile.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#trips" className="group inline-flex items-center gap-2 rounded-full bg-[#c8643d] px-6 py-3.5 text-sm font-semibold text-[#f5ebd9] transition hover:bg-[#a34a29]">
                  See the 2026 calendar <Icon name="arrow-up" className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a href="#journal" className="inline-flex items-center gap-2 rounded-full border border-[#1a1714]/20 px-5 py-3 text-sm text-[#1a1714] hover:bg-[#1a1714] hover:text-[#f5ebd9]">
                  Read the journal
                </a>
              </div>

              <div className="mt-12 grid grid-cols-4 gap-6 border-t border-[#d5c7aa] pt-6 text-sm">
                {stats.map((s) => (
                  <div key={s.v}>
                    <p className="font-display text-3xl">{s.k}</p>
                    <p className="mt-1 text-xs text-[#6a5f4b]">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <PostcardPhoto photo="photo-portugal" label="Along the Alentejo" sub="8 days · May 2026 · 4 seats left" />
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden border-y border-[#d5c7aa] bg-[#1a1714] py-4 text-[#f5ebd9]">
          <div className="flex marquee gap-10 whitespace-nowrap font-serif text-2xl italic">
            {["Portugal", "Morocco", "Japan", "Georgia", "Iceland", "Peru", "Vietnam · opens 2027", "Norway · returning"].concat([
              "Portugal", "Morocco", "Japan", "Georgia", "Iceland", "Peru", "Vietnam · opens 2027", "Norway · returning",
            ]).map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="text-[#c8643d]">✦</span>
                <span>{t}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trips */}
      <section id="trips" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#6a5f4b]">2026 calendar</p>
              <h2 className="font-display mt-3 text-5xl leading-[1.02] md:text-7xl">Six routes, one <span className="font-serif italic text-[#c8643d]">pace.</span></h2>
            </div>
            <div className="flex gap-2">
              {["All", "Signature", "Slow", "New"].map((c, i) => (
                <button key={c} className={`rounded-full border px-4 py-2 text-xs ${i === 0 ? "border-[#1a1714] bg-[#1a1714] text-[#f5ebd9]" : "border-[#d5c7aa] hover:border-[#1a1714]"}`}>{c}</button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trips.map((t) => (
              <article key={t.name} className="group">
                <PostcardPhoto photo={t.photo} label={t.name} sub={`${t.days} days · ${t.where}`} />
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-[#6a5f4b]">
                    <span className="flex items-center gap-1"><Icon name="cal" className="h-3.5 w-3.5" /> {t.month}</span>
                    <span className="flex items-center gap-1"><Icon name="group" className="h-3.5 w-3.5" /> {t.spots}</span>
                  </div>
                  <span className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-widest ${
                    t.tag === "Sold out" ? "border-[#6a5f4b] bg-[#6a5f4b]/10 text-[#6a5f4b]" :
                    t.tag === "New" ? "border-[#6a733a] bg-[#6a733a]/10 text-[#6a733a]" :
                    "border-[#c8643d] bg-[#c8643d]/10 text-[#c8643d]"
                  }`}>{t.tag}</span>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-[#d5c7aa] pt-3">
                  <p className="font-display text-2xl">{t.price}<span className="text-sm text-[#6a5f4b]"> / person</span></p>
                  <a href="#" className="inline-flex items-center gap-1 text-sm underline-grow">Itinerary <Icon name="arrow-up" className="h-4 w-4" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sample itinerary */}
      <section id="how" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-[36px] bg-[#e8d9ba] p-10 md:p-14">
            <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#6a5f4b]">A day we planned</p>
                <h2 className="font-display mt-3 text-5xl leading-[1.02] md:text-6xl">
                  <span className="font-serif italic text-[#c8643d]">Sample</span> itinerary · Alentejo
                </h2>
                <p className="mt-6 max-w-md text-[#1a1714]/80">
                  Every trip page shows the full, day-by-day route in the same level of detail we&apos;d send
                  our own family. Here are the first four days of our May 2026 Alentejo trip.
                </p>
                <a href="#" className="mt-8 inline-flex items-center gap-2 text-sm underline-grow">
                  See the full 8-day itinerary <Icon name="arrow-up" className="h-4 w-4" />
                </a>
              </div>

              <ol className="space-y-4">
                {itinerary.map((i) => (
                  <li key={i.day} className="rounded-3xl border border-[#d5c7aa] bg-[#f9f4e9] p-5">
                    <p className="text-xs uppercase tracking-widest text-[#c8643d]">{i.day}</p>
                    <p className="font-display mt-2 text-2xl">{i.t}</p>
                    <p className="mt-2 text-sm text-[#1a1714]/75" dangerouslySetInnerHTML={{__html: i.b.replaceAll("'", "&rsquo;").replaceAll('&lsquo;', '&lsquo;').replaceAll('&rsquo;', '&rsquo;')}} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#6a5f4b]">How we travel</p>
            <h2 className="font-display mt-3 text-5xl leading-[1.02] md:text-6xl">
              Four rules we <span className="font-serif italic text-[#c8643d]">don&apos;t break.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {highlights.map((h, i) => (
              <div key={h.t} className="rounded-3xl border border-[#d5c7aa] bg-[#f9f4e9]/60 p-7">
                <p className="font-display text-4xl text-[#c8643d]">{String(i + 1).padStart(2, "0")}</p>
                <p className="font-display mt-3 text-2xl" dangerouslySetInnerHTML={{__html: h.t.replaceAll("'", "&rsquo;")}} />
                <p className="mt-2 text-[#1a1714]/75" dangerouslySetInnerHTML={{__html: h.b.replaceAll("'", "&rsquo;").replaceAll('&lsquo;', '&lsquo;').replaceAll('&rsquo;', '&rsquo;')}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traveller stories */}
      <section id="stories" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-[36px] bg-[#1a1714] p-10 text-[#f5ebd9] md:p-14">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#c8643d]">
              <Icon name="compass" className="h-4 w-4" /> Traveller stories
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.a}>
                  <div className="flex text-[#c8643d]">
                    {[...Array(5)].map((_, i) => <Icon key={i} name="star" className="h-4 w-4" />)}
                  </div>
                  <blockquote className="font-serif mt-5 text-2xl italic leading-snug" dangerouslySetInnerHTML={{__html: `&ldquo;${r.q.replaceAll("'", "&rsquo;")}&rdquo;`}} />
                  <figcaption className="mt-6 text-sm text-[#d5c7aa]">— {r.a}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking / FAQ */}
      <section id="book" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
            <div className="rounded-[36px] bg-gradient-to-br from-[#c8643d] via-[#e8b57a] to-[#f5ebd9] p-10 text-[#1a1714] md:p-14">
              <div className="absolute inset-0 paper mix-blend-overlay opacity-40 rounded-[36px]" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.22em] text-[#3a1a0a]/80">Hold a seat</p>
                <h2 className="font-display mt-3 text-5xl leading-[1.02] md:text-6xl">
                  A deposit holds your spot. <span className="font-serif italic">The rest is easy.</span>
                </h2>
                <p className="mt-5 max-w-md text-[#3a1a0a]/85">
                  €500 holds a seat on any trip. Full payment is due 60 days before departure. Free reschedule
                  up to 90 days out — it happens, we understand.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                  {["€500 refundable deposit", "60-day final balance", "Free 90-day reschedule", "Solo traveller friendly"].map((b) => (
                    <div key={b} className="rounded-2xl border border-[#1a1714]/15 bg-[#1a1714]/5 p-3 text-sm">
                      {b}
                    </div>
                  ))}
                </div>

                <a href="#" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#1a1714] px-6 py-3.5 text-sm font-semibold text-[#f5ebd9] transition hover:bg-black">
                  Reserve a seat <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-[36px] border border-[#d5c7aa] bg-[#f9f4e9] p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-[#6a5f4b]">FAQ</p>
              <h2 className="font-display mt-3 text-4xl">Honest answers.</h2>
              <div className="mt-6 divide-y divide-[#d5c7aa]">
                {faqs.map((f) => (
                  <details key={f.q} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium" dangerouslySetInnerHTML={{__html: f.q.replaceAll('&apos;', '&rsquo;') + '<span class="ml-4 grid h-7 w-7 place-items-center rounded-full border border-[#1a1714]/15 text-[#1a1714]/50 transition group-open:rotate-45 group-open:border-[#c8643d] group-open:text-[#c8643d]">+</span>'}} />
                    <p className="mt-3 text-sm leading-relaxed text-[#1a1714]/75" dangerouslySetInnerHTML={{__html: f.a.replaceAll('&apos;', '&rsquo;').replaceAll('&ldquo;', '&ldquo;').replaceAll('&rdquo;', '&rdquo;')}} />
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#d5c7aa] bg-[#e8d9ba]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="text-[#c8643d]"><Logo /></span>
              <span className="font-display text-2xl">Wayfound</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-[#1a1714]/75">
              A small travel studio from Lisbon, planning fourteen-person trips in Portugal, Morocco, Japan,
              Georgia, Iceland, and Peru. A StoicSoft studio.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6a5f4b]">Plan</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#trips" className="underline-grow">Trips</a></li>
              <li><a href="#how" className="underline-grow">How we travel</a></li>
              <li><a href="#book" className="underline-grow">Book a seat</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6a5f4b]">Studio</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="underline-grow">About</a></li>
              <li><a href="#" className="underline-grow">Guides &amp; hosts</a></li>
              <li><a href="#" className="underline-grow">Journal</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6a5f4b]">Reach us</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="mailto:hello@wayfound.studio" className="underline-grow">hello@wayfound.studio</a></li>
              <li><a href="#" className="underline-grow">+351 21 394 5482</a></li>
              <li><a href="#" className="underline-grow">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#d5c7aa]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-[#6a5f4b]">
            <span>© {new Date().getFullYear()} Wayfound · A StoicSoft studio, based in Lisbon.</span>
            <span className="font-serif italic">ATA licensed · APAVT member</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
