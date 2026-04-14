const featured = {
  kicker: "Cover story",
  title: "The slow software essay",
  dek: "On building the kind of product that deepens with years rather than shipping for the quarterly review. A long letter from a studio that quit the roadmap and took up gardening.",
  author: "Clara Figueira",
  date: "April 13, 2026",
  read: "18 min read",
  art: "art-sunset",
}

const leadStories = [
  { cat: "Craft", art: "art-moss", title: "A field guide to paper", dek: "Why the 120gsm cream stock in our Field notebook was worth a six-month search across the mills of northern Portugal.", author: "Ricardo Santos", read: "9 min" },
  { cat: "Software", art: "art-ink", title: "Pricing as a moral question", dek: "What a decade of indie launches taught us about charging honestly — and the day we raised our prices and apologised to no one.", author: "Jonas Park", read: "12 min" },
  { cat: "Places", art: "art-dune", title: "Notes from Évora, quietly", dek: "A week of living in a 16th-century whitewashed flat, reading Pessoa, and not opening the laptop until the espresso cooled.", author: "Mei Wong", read: "7 min" },
]

const columns = [
  { cat: "Letters", title: "Why I deleted my analytics dashboard", excerpt: "The inbox is a better pulse than any real-time chart — if you trust the people in it.", author: "Priya Kapoor", read: "6 min" },
  { cat: "Diaries", title: "A year of reading only one book per month", excerpt: "On the small liberation of refusing to be efficient about literature.", author: "Amara Reyes", read: "8 min" },
  { cat: "Practice", title: "The quiet meeting", excerpt: "A single rule changed the tone of our studio weeks — and what it asked of each of us in return.", author: "Dante Okafor", read: "5 min" },
  { cat: "Reviews", title: "Three notebooks, one long winter", excerpt: "A side-by-side review of the cloth-bound objects we&apos;ve lived with since November.", author: "Wren Holloway", read: "11 min" },
]

const categories = ["Craft", "Software", "Places", "Letters", "Diaries", "Practice", "Reviews", "Studio notes"]

const sidebar = [
  { title: "On the editor&apos;s desk", items: [
    "A new short from the Lisbon mail",
    "We&apos;re hiring one editor · part-time",
    "Field & Form at Shipped /2026",
  ]},
  { title: "Most read this quarter", items: [
    "The slow software essay",
    "A field guide to paper",
    "Pricing as a moral question",
    "Why I deleted my analytics",
  ]},
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "clock") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>)
  if (name === "rss") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1.4"/></svg>)
  return null
}

function CoverArt({ className, label }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div className="absolute inset-0 paper-tex mix-blend-overlay opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      {label && (
        <div className="absolute bottom-3 left-3 rounded-full border border-white/40 bg-black/10 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-white backdrop-blur">
          {label}
        </div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative bg-[#f5efe2] text-[#141210]">
      <div className="pointer-events-none fixed inset-0 paper-tex opacity-40" />

      {/* Masthead */}
      <header className="relative z-20 border-b border-[#d5c9b0]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#6c6354]">
          <p>Volume IX · Issue 34</p>
          <p className="font-display text-sm italic normal-case tracking-normal text-[#141210]">Spring, 2026</p>
          <p>Lisbon · a quarterly</p>
        </div>
        <div className="rule h-px" />

        <div className="mx-auto max-w-6xl px-6 py-10 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#b24224]">A StoicSoft studio magazine</p>
          <h1 className="font-display mt-3 text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
            Field <span className="italic">&amp; Form</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-display text-xl italic text-[#3a3329]">
            A quarterly on craft, software, and the slow shape of a life that builds things.
          </p>
        </div>

        <div className="rule h-px" />
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
          <nav className="flex flex-wrap gap-5 text-xs uppercase tracking-[0.18em] text-[#3a3329]">
            {["Current issue", "Archive", "Craft", "Software", "Places", "Letters", "About"].map((n) => (
              <a key={n} href="#" className="underline-grow hover:text-[#b24224]">{n}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button className="grid h-8 w-8 place-items-center rounded-full border border-[#d5c9b0] text-[#6c6354] hover:border-[#141210] hover:text-[#141210]">
              <Icon name="search" className="h-4 w-4" />
            </button>
            <a href="#subscribe" className="inline-flex items-center gap-2 rounded-full bg-[#141210] px-4 py-2 text-xs uppercase tracking-widest text-[#f5efe2] hover:bg-[#b24224]">
              Subscribe <Icon name="arrow" className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <div className="rule h-px" />
      </header>

      {/* Featured cover story */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <article className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
            <div className="order-2 md:order-1">
              <p className="text-xs uppercase tracking-[0.22em] text-[#b24224]">{featured.kicker}</p>
              <h2 className="font-display mt-4 text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[1] tracking-tight">
                {featured.title.split(" ").map((w, i) => i === 1 ? <em key={i} className="italic text-[#b24224]">{w} </em> : w + " ")}
              </h2>
              <p className="font-display mt-5 text-2xl italic leading-snug text-[#3a3329]">
                {featured.dek}
              </p>
              <div className="mt-6 flex items-center gap-4 text-xs text-[#6c6354]">
                <span>by <span className="font-semibold text-[#141210]">{featured.author}</span></span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1"><Icon name="clock" className="h-3.5 w-3.5" /> {featured.read}</span>
              </div>

              <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#b24224] px-6 py-3 text-sm font-semibold text-[#f5efe2] transition hover:bg-[#8b2e15]">
                Read the essay <Icon name="arrow-up" className="h-4 w-4" />
              </a>
            </div>

            <CoverArt className={`${featured.art} order-1 aspect-[4/5] md:order-2`} label="Cover art · spring" />
          </article>
        </div>

        <div className="rule h-px mx-6 md:mx-auto max-w-6xl" />
      </section>

      {/* Categories bar */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em]">
            <span className="text-[#6c6354]">Categories</span>
            {categories.map((c) => (
              <a key={c} href="#" className="rounded-full border border-[#d5c9b0] bg-white/50 px-3 py-1.5 hover:border-[#141210] hover:bg-[#141210] hover:text-[#f5efe2]">{c}</a>
            ))}
          </div>
        </div>
        <div className="rule h-px mx-6 md:mx-auto max-w-6xl" />
      </section>

      {/* Lead stories — three columns */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {leadStories.map((s) => (
              <article key={s.title} className="group">
                <CoverArt className={`${s.art} aspect-[4/3]`} label={s.cat} />
                <h3 className="font-display mt-5 text-3xl leading-tight">{s.title}</h3>
                <p className="font-display mt-2 text-lg italic text-[#3a3329]/90" dangerouslySetInnerHTML={{__html: s.dek.replaceAll("'", "&rsquo;")}} />
                <div className="mt-4 flex items-center justify-between text-xs text-[#6c6354]">
                  <span>by {s.author}</span>
                  <span className="flex items-center gap-1"><Icon name="clock" className="h-3 w-3" /> {s.read}</span>
                </div>
                <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm text-[#b24224] underline-grow">
                  Read <Icon name="arrow-up" className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="rule h-px mx-6 md:mx-auto max-w-6xl" />
      </section>

      {/* Excerpt block */}
      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#b24224]">From this issue</p>
          <p className="font-display dropcap mt-6 text-lg leading-relaxed text-[#2c2821]">
            There is a strange satisfaction in choosing a piece of paper that costs ten cents more than the
            next one up the shelf, and finding, after a year of daily writing, that the decision still pays
            you back in small ways — a page that holds ink without bleeding, a spine that lies flat at every
            spread, a book that you open on a quiet morning and think, briefly, that it was the correct kind
            of thing to make. That pleasure is what this issue is about.
          </p>
          <p className="mt-6 text-base text-[#2c2821]/80">
            <a href="#" className="underline-grow text-[#b24224]">Continue reading &ldquo;A field guide to paper&rdquo; →</a>
          </p>
        </div>

        <div className="rule h-px mx-6 md:mx-auto max-w-6xl" />
      </section>

      {/* Columns grid + sidebar */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#b24224]">Columns</p>
              <h2 className="font-display mt-3 text-5xl leading-[1.02]">From the quarterly desks.</h2>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {columns.map((c) => (
                  <article key={c.title} className="border-t border-[#d5c9b0] pt-6">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#6c6354]">{c.cat}</p>
                    <h3 className="font-display mt-3 text-2xl leading-tight">{c.title}</h3>
                    <p className="mt-2 text-[#2c2821]/80" dangerouslySetInnerHTML={{__html: c.excerpt.replaceAll("'", "&rsquo;")}} />
                    <div className="mt-4 flex items-center justify-between text-xs text-[#6c6354]">
                      <span>{c.author}</span>
                      <span>{c.read}</span>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-12 flex items-center justify-between">
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-[#141210]/15 px-5 py-3 text-sm hover:bg-[#141210] hover:text-[#f5efe2]">
                  Browse the full archive <Icon name="arrow" className="h-4 w-4" />
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-[#6c6354] hover:text-[#b24224]">
                  <Icon name="rss" className="h-4 w-4" /> RSS feed
                </a>
              </div>
            </div>

            <aside className="space-y-8">
              {sidebar.map((s) => (
                <div key={s.title} className="rounded-2xl border border-[#d5c9b0] bg-white/50 p-5">
                  <p className="font-display text-xl italic" dangerouslySetInnerHTML={{__html: s.title.replaceAll("'", "&rsquo;")}} />
                  <div className="rule mt-3 h-px" />
                  <ul className="mt-4 space-y-2 text-sm">
                    {s.items.map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b24224]" />
                        <a href="#" className="underline-grow" dangerouslySetInnerHTML={{__html: i.replaceAll("'", "&rsquo;")}} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="rounded-2xl border border-[#d5c9b0] bg-[#ebe2ce] p-5">
                <p className="font-display text-xl italic">A note from the editor</p>
                <div className="rule mt-3 h-px" />
                <p className="mt-4 text-sm text-[#2c2821]/85">
                  Field &amp; Form is a one-year reading list disguised as a quarterly. Thank you to the 3,140
                  subscribers keeping it going — a small magazine with a small light, still on.
                </p>
                <p className="mt-4 text-sm font-display italic text-[#b24224]">— Clara, editor</p>
              </div>
            </aside>
          </div>
        </div>

        <div className="rule h-px mx-6 md:mx-auto max-w-6xl" />
      </section>

      {/* Subscribe */}
      <section id="subscribe" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-[32px] border border-[#d5c9b0] bg-[#141210] p-10 text-[#f5efe2] md:p-14">
            <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#c69c3f]">Subscribe — free</p>
                <h2 className="font-display mt-3 text-5xl leading-[1.02] md:text-6xl">
                  Quarterly, in <em className="italic text-[#c69c3f]">your inbox.</em>
                </h2>
                <p className="mt-5 max-w-md text-[#f5efe2]/75">
                  Four issues a year, a Friday note between. No ads, no sponsorships — just long reads from a
                  small magazine kept alive by 3,140 readers.
                </p>
              </div>
              <form className="rounded-2xl border border-white/15 bg-white/[0.04] p-5">
                <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-black/40 px-4 py-3">
                  <Icon name="mail" className="h-4 w-4 text-white/50" />
                  <input type="email" placeholder="reader@studio.com" className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/40" />
                </div>
                <button type="button" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#c69c3f] px-5 py-3 text-sm font-semibold text-[#141210] hover:bg-[#b24224] hover:text-[#f5efe2]">
                  Subscribe <Icon name="arrow" className="h-4 w-4" />
                </button>
                <p className="mt-3 text-center text-xs text-white/60">No spam. One click to leave.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Colophon */}
      <footer className="relative z-10 border-t border-[#d5c9b0] bg-[#ebe2ce]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl italic">Field &amp; Form</p>
            <p className="mt-4 max-w-sm text-sm text-[#2c2821]/75">
              A quarterly digital magazine from the StoicSoft studio. Written in Lisbon, set in Fraunces and
              Inter, delivered with care.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6c6354]">Issue</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="underline-grow">Current</a></li>
              <li><a href="#" className="underline-grow">Archive</a></li>
              <li><a href="#" className="underline-grow">Print editions</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6c6354]">Sections</p>
            <ul className="mt-3 space-y-2 text-sm">
              {categories.slice(0, 4).map((c) => <li key={c}><a href="#" className="underline-grow">{c}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6c6354]">Colophon</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="underline-grow">Masthead</a></li>
              <li><a href="#" className="underline-grow">Contribute</a></li>
              <li><a href="mailto:editor@fieldandform.press" className="underline-grow">editor@fieldandform.press</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#d5c9b0]">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-[#6c6354]">
            <span>© {new Date().getFullYear()} Field &amp; Form · A StoicSoft studio publication.</span>
            <span className="font-display italic">ISSN 2916-4821 · Lisbon</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
