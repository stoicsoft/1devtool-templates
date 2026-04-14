const listings = [
  { name: "Casa do Fig", loc: "Alentejo, Portugal", type: "Farmhouse", beds: 4, baths: 3, area: "312 m²", price: "€680,000", photo: "photo-1", feats: ["Olive grove", "Outdoor kitchen", "3 acres"] },
  { name: "Villa d&apos;Oliva", loc: "Andalucía, Spain", type: "Villa", beds: 5, baths: 4, area: "420 m²", price: "€1,240,000", photo: "photo-3", feats: ["Private pool", "Sea view", "Restored 2024"] },
  { name: "Quinta Branca", loc: "Comporta, Portugal", type: "Beach house", beds: 3, baths: 2, area: "180 m²", price: "€890,000", photo: "photo-2", feats: ["5 min to beach", "Pine forest", "Architect-designed"] },
  { name: "Mas Provençal", loc: "Luberon, France", type: "Mas", beds: 4, baths: 3, area: "268 m²", price: "€920,000", photo: "photo-4", feats: ["Vineyard view", "Original tomettes", "Lavender garden"] },
  { name: "Cortijo del Sol", loc: "Ronda, Spain", type: "Cortijo", beds: 6, baths: 4, area: "540 m²", price: "€1,560,000", photo: "photo-5", feats: ["45 hectares", "Horse stables", "Stream on property"] },
  { name: "Casa Dois Montes", loc: "Douro, Portugal", type: "Vintner home", beds: 3, baths: 2, area: "210 m²", price: "€540,000", photo: "photo-6", feats: ["River view", "Small vineyard", "Stone walls"] },
]

const services = [
  { t: "Find the one", b: "We tour every home ourselves. You see 8 pre-filtered matches, not 800 tabs." },
  { t: "Negotiate", b: "Local notaries, language, and registry in Iberian countries — handled end to end." },
  { t: "Restore", b: "Our design partners can manage restoration, from planning to the final curtain rod." },
  { t: "Move in", b: "Visa support, furniture sourcing, and a 90-day concierge so the first months feel easy." },
]

const stories = [
  { q: "Casa made us say yes to a farmhouse we'd have walked past ourselves. Two years in, it was the best move we've made.", a: "The Hasebe family · Moved from Tokyo, 2024" },
  { q: "We described a feeling, not a spec. They found a village we hadn't heard of and a house that felt like ours within a week.", a: "Marina & Luc · Moved from Antwerp, 2023" },
]

const stats = [
  { k: "84", v: "Homes brokered across Iberia" },
  { k: "11 yrs", v: "Local presence · Lisbon & Seville" },
  { k: "100%", v: "Homes visited by our team first" },
  { k: "0", v: "Pressure, ever" },
]

const faqs = [
  { q: "Are you a licensed estate agent?", a: "Yes — licensed under AMI 14821 in Portugal and ICAH-3421 in Spain. We also partner with registered notaries in every region we operate in." },
  { q: "How do you charge?", a: "A flat 2.5% buyer-side fee, paid on close. No fees if we don't find something that fits. You'll see a full breakdown before the second viewing." },
  { q: "What if I'm not ready yet?", a: "Most of our buyers spend six to twelve months with us before buying. The search conversations are free — join when you're ready, pause when you aren't." },
  { q: "Do you handle rentals?", a: "No. Casa is buy-only. We can recommend trusted long-term rental partners in each region." },
]

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      <path d="M4 14 16 4l12 10v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V14Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 28v-8h6v8" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "pin") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="10" r="3"/><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/></svg>)
  if (name === "bed") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 18v-7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7M3 18h18M3 15h18"/></svg>)
  if (name === "bath") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 13h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z"/><path d="M7 13V7a3 3 0 0 1 6 0"/></svg>)
  if (name === "square") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 3v18"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>)
  if (name === "sparkle") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="m12 3 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z"/></svg>)
  return null
}

function PhotoFrame({ photo, alt }) {
  return (
    <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${photo}`}>
      <div className="absolute inset-0 paper-noise mix-blend-overlay opacity-40" />
      <div className="absolute inset-0 sun" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white/90">
        <span className="font-serif text-xl italic">{alt}</span>
        <span className="rounded-full border border-white/40 bg-white/15 px-2 py-0.5 text-[10px] uppercase tracking-widest backdrop-blur">Casa selection</span>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative bg-[#faf7f1] text-[#1c1a15]">
      <div className="pointer-events-none fixed inset-0 paper-noise opacity-40" />

      {/* Nav */}
      <header className="relative z-20 border-b border-[#d4ccb9]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 font-serif text-2xl italic">
            <span className="text-[#b3593a]"><Logo /></span>
            Casa
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[#1c1a15]/80 md:flex">
            <a href="#listings" className="underline-grow">Homes</a>
            <a href="#regions" className="underline-grow">Regions</a>
            <a href="#services" className="underline-grow">How we work</a>
            <a href="#stories" className="underline-grow">Stories</a>
          </nav>
          <a href="#connect" className="group inline-flex items-center gap-2 rounded-full bg-[#1c1a15] px-4 py-2 text-sm text-[#faf7f1] transition hover:bg-[#b3593a]">
            Start a search <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-24">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#6f6a5c]">
            <span className="h-px w-10 bg-[#6f6a5c]" />
            Quiet homes · Iberian countryside · since 2015
          </div>

          <div className="mt-8 grid gap-10 md:grid-cols-[1.15fr_1fr]">
            <h1 className="font-serif text-[clamp(3rem,8.5vw,8rem)] leading-[0.92] tracking-tight">
              Homes with <em className="italic text-[#b3593a]">the bones</em>
              <br />to last <em className="italic">two more</em> lifetimes.
            </h1>

            <div>
              <p className="max-w-md text-lg leading-relaxed text-[#1c1a15]/80">
                Casa is a small brokerage for restored farmhouses, villas, and vineyard homes across Portugal
                and Spain. We tour every home, negotiate the quiet deals, and help you move in.
              </p>

              <form className="mt-8 rounded-3xl border border-[#d4ccb9] bg-white/60 p-4">
                <p className="font-serif text-base italic text-[#6f6a5c]">What are you looking for?</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
                  <select className="rounded-xl border border-[#d4ccb9] bg-white px-4 py-3 text-sm outline-none focus:border-[#b3593a]">
                    <option>Region — Iberia (anywhere)</option>
                    <option>Alentejo</option><option>Comporta</option><option>Douro</option>
                    <option>Andalucía</option><option>Luberon</option>
                  </select>
                  <select className="rounded-xl border border-[#d4ccb9] bg-white px-4 py-3 text-sm outline-none focus:border-[#b3593a]">
                    <option>Type — any</option>
                    <option>Farmhouse</option><option>Villa</option><option>Vintner home</option>
                    <option>Beach house</option><option>Cortijo</option>
                  </select>
                  <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#b3593a] px-5 text-sm font-semibold text-[#faf7f1] hover:bg-[#9a4329]">
                    <Icon name="search" className="h-4 w-4" /> Browse
                  </button>
                </div>
                <p className="mt-3 text-xs text-[#6f6a5c]">
                  Or{" "}
                  <a href="#connect" className="underline-grow text-[#b3593a]">book a 20-minute call</a>{" "}
                  and we&apos;ll bring the list to you.
                </p>
              </form>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[#d4ccb9] pt-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.v}>
                <p className="font-serif text-4xl italic">{s.k}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#6f6a5c]">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section id="listings" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#6f6a5c]">Currently on Casa</p>
              <h2 className="font-serif mt-3 text-5xl leading-[1.02] md:text-6xl">Six homes we&apos;re quietly in love with.</h2>
            </div>
            <div className="flex gap-2">
              {["All", "Portugal", "Spain", "France"].map((c, i) => (
                <button key={c} className={`rounded-full border px-4 py-2 text-xs font-medium ${
                  i === 0 ? "border-[#1c1a15] bg-[#1c1a15] text-[#faf7f1]" : "border-[#d4ccb9] hover:border-[#1c1a15]"
                }`}>{c}</button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((l) => (
              <article key={l.name} className="group">
                <PhotoFrame photo={l.photo} alt={l.name.replaceAll('&apos;', "'")} />
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-2 text-xs text-[#6f6a5c]">
                      <Icon name="pin" className="h-3.5 w-3.5" /> {l.loc}
                    </p>
                    <span className="rounded-full border border-[#d4ccb9] px-2 py-0.5 text-[10px] uppercase tracking-widest text-[#6f6a5c]">{l.type}</span>
                  </div>
                  <h3 className="font-serif mt-2 text-3xl italic" dangerouslySetInnerHTML={{__html: l.name.replaceAll('&apos;', "'")}} />
                  <div className="mt-3 flex items-center gap-4 text-xs text-[#6f6a5c]">
                    <span className="flex items-center gap-1"><Icon name="bed" className="h-3.5 w-3.5" /> {l.beds}</span>
                    <span className="flex items-center gap-1"><Icon name="bath" className="h-3.5 w-3.5" /> {l.baths}</span>
                    <span className="flex items-center gap-1"><Icon name="square" className="h-3.5 w-3.5" /> {l.area}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-[#d4ccb9] pt-3">
                    <p className="font-serif text-2xl">{l.price}</p>
                    <a href="#" className="inline-flex items-center gap-1 text-sm underline-grow">View home <Icon name="arrow-up" className="h-4 w-4" /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-[#1c1a15]/20 px-5 py-3 text-sm hover:bg-[#1c1a15] hover:text-[#faf7f1]">
              See all 42 homes <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section id="regions" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-4 md:grid-cols-[1.2fr_1fr_1fr] md:grid-rows-2">
            <div className="md:row-span-2 rounded-3xl bg-[#ece7db] p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-[#6f6a5c]">Regions</p>
              <h3 className="font-serif mt-4 text-5xl leading-[1.02]">
                Five quiet corners <em className="italic text-[#b3593a]">we know well.</em>
              </h3>
              <p className="mt-5 text-[#1c1a15]/75">
                We don&apos;t broker in cities. The homes we find sit in villages, valleys, and quiet stretches
                of coast — places where your neighbours are olive trees.
              </p>
              <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm underline-grow">
                How we chose these regions <Icon name="arrow-up" className="h-4 w-4" />
              </a>
            </div>

            {[
              { r: "Alentejo, PT", n: "18 homes", photo: "photo-2" },
              { r: "Comporta, PT", n: "9 homes", photo: "photo-4" },
              { r: "Douro, PT", n: "7 homes", photo: "photo-5" },
              { r: "Andalucía, ES", n: "6 homes", photo: "photo-1" },
            ].map((r) => (
              <article key={r.r} className={`relative overflow-hidden rounded-3xl ${r.photo} min-h-[200px] group`}>
                <div className="absolute inset-0 paper-noise mix-blend-overlay opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6 text-white">
                  <p className="font-serif text-3xl italic">{r.r}</p>
                  <p className="mt-1 text-sm text-white/85">{r.n} on the list</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#6f6a5c]">How we work</p>
              <h2 className="font-serif mt-3 text-5xl leading-[1.02] md:text-6xl">
                Four quiet <em className="italic text-[#b3593a]">chapters.</em>
              </h2>
              <p className="mt-5 max-w-md text-[#1c1a15]/75">
                From the first conversation to the morning you wake up in the new kitchen. We stay in for all
                of it — at a flat, honest fee.
              </p>
            </div>

            <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {services.map((s, i) => (
                <li key={s.t} className="rounded-3xl border border-[#d4ccb9] bg-white/60 p-6">
                  <p className="font-serif text-3xl italic text-[#b3593a]">{String(i + 1).padStart(2, "0")}</p>
                  <p className="font-serif mt-3 text-2xl">{s.t}</p>
                  <p className="mt-2 text-sm text-[#1c1a15]/75">{s.b.replaceAll("'", "&rsquo;")}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section id="stories" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-[36px] bg-[#1c1a15] p-10 text-[#faf7f1] md:p-14">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#d4ad7c]">
              <Icon name="sparkle" className="h-4 w-4" /> People who moved in
            </div>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {stories.map((s) => (
                <figure key={s.a}>
                  <blockquote className="font-serif text-3xl italic leading-snug md:text-4xl" dangerouslySetInnerHTML={{__html: `&ldquo;${s.q.replaceAll("'", "&rsquo;")}&rdquo;`}} />
                  <figcaption className="mt-6 text-sm text-[#d4ccb9]">— {s.a}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Connect */}
      <section id="connect" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#6f6a5c]">Start a conversation</p>
              <h2 className="font-serif mt-3 text-5xl leading-[1.02] md:text-6xl">
                Tell us what <em className="italic text-[#b3593a]">home</em> means to you.
              </h2>
              <p className="mt-5 max-w-md text-[#1c1a15]/75">
                We read every message and reply within two business days. If we&apos;re not the right fit,
                we&apos;ll tell you — and pass along someone who is.
              </p>

              <form className="mt-8 space-y-3 rounded-3xl border border-[#d4ccb9] bg-white/60 p-5">
                <input type="text" placeholder="Your name" className="w-full rounded-xl border border-[#d4ccb9] bg-white px-4 py-3 text-sm outline-none focus:border-[#b3593a]" />
                <input type="email" placeholder="Email" className="w-full rounded-xl border border-[#d4ccb9] bg-white px-4 py-3 text-sm outline-none focus:border-[#b3593a]" />
                <textarea rows="4" placeholder="The kind of home you&apos;re imagining..." className="w-full rounded-xl border border-[#d4ccb9] bg-white px-4 py-3 text-sm outline-none focus:border-[#b3593a]" />
                <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#b3593a] px-5 py-3 text-sm font-semibold text-[#faf7f1] hover:bg-[#9a4329]">
                  Send — no pressure <Icon name="arrow" className="h-4 w-4" />
                </button>
              </form>
            </div>

            <div className="rounded-3xl border border-[#d4ccb9] bg-[#ece7db] p-6">
              <p className="font-serif text-2xl italic">Frequent questions</p>
              <div className="mt-4 divide-y divide-[#d4ccb9]">
                {faqs.map((f) => (
                  <details key={f.q} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                      {f.q}
                      <span className="ml-4 grid h-7 w-7 place-items-center rounded-full border border-[#1c1a15]/15 text-[#1c1a15]/50 transition group-open:rotate-45 group-open:border-[#b3593a] group-open:text-[#b3593a]">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-[#1c1a15]/75" dangerouslySetInnerHTML={{__html: f.a.replaceAll("'", "&rsquo;")}} />
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#d4ccb9] bg-[#ece7db]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 font-serif text-2xl italic">
              <span className="text-[#b3593a]"><Logo /></span> Casa
            </a>
            <p className="mt-4 max-w-sm text-sm text-[#1c1a15]/75">
              An independent brokerage operating in Portugal, Spain, and southern France. A StoicSoft
              studio project, since 2015. Licensed AMI 14821.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f6a5c]">Find</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#listings" className="underline-grow">Homes</a></li>
              <li><a href="#regions" className="underline-grow">Regions</a></li>
              <li><a href="#services" className="underline-grow">How we work</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f6a5c]">Offices</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Lisbon · Travessa do Carmo 21</li>
              <li>Seville · Calle Betis 42</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f6a5c]">Reach us</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="mailto:hello@casa.studio" className="underline-grow">hello@casa.studio</a></li>
              <li><a href="#" className="underline-grow">+351 21 391 4821</a></li>
              <li><a href="#" className="underline-grow">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#d4ccb9]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-[#6f6a5c]">
            <span>© {new Date().getFullYear()} Casa · A StoicSoft studio.</span>
            <span className="font-serif italic">Licensed AMI 14821 · ICAH-3421</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
