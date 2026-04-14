import Link from "next/link"

const features = [
  { slug: "a-week-in-evora", n: "No. 142", title: "A week in Évora, in quiet light", date: "Apr 13, 2026", loc: "Évora · PT", shots: 18, art: "ph-3", size: "md:col-span-7 md:row-span-2" },
  { slug: "madrilenos-off-the-plaza", n: "No. 141", title: "Madrileños, off the plaza", date: "Apr 06, 2026", loc: "Madrid · ES", shots: 12, art: "ph-6", size: "md:col-span-5" },
  { slug: "low-tide-long-exposure", n: "No. 140", title: "Low tide, long exposure", date: "Mar 30, 2026", loc: "Comporta · PT", shots: 9, art: "ph-11", size: "md:col-span-5" },
]

const grid = [
  { n: "139", t: "Rooftops at six", art: "ph-8" },
  { n: "138", t: "Atelier Santos", art: "ph-5" },
  { n: "137", t: "Café da manhã", art: "ph-1" },
  { n: "136", t: "Tejo in fog", art: "ph-4" },
  { n: "135", t: "The backroom printer", art: "ph-7" },
  { n: "134", t: "Olive grove at four", art: "ph-9" },
  { n: "133", t: "Red walls, Lisboa", art: "ph-10" },
  { n: "132", t: "A Sunday studio", art: "ph-2" },
  { n: "131", t: "Portrait of Mira", art: "ph-12" },
]

const archive = [
  { y: "2026", c: 14 },
  { y: "2025", c: 52 },
  { y: "2024", c: 51 },
  { y: "2023", c: 48 },
  { y: "2022", c: 42 },
  { y: "2021", c: 35 },
]

const equipment = [
  { k: "Bodies", v: "Leica M11 · Fuji GFX 100S" },
  { k: "Lenses", v: "35 Summilux · 50 APO · GF 63" },
  { k: "Film", v: "Portra 400 · TRI-X 400" },
  { k: "Printing", v: "Epson SC-P900 · Hahnemühle cotton rag" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "grid") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>)
  if (name === "list") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 7h16M4 12h16M4 17h16"/></svg>)
  if (name === "camera") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13" r="4"/><path d="M9 7l2-3h2l2 3"/></svg>)
  if (name === "pin") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="10" r="3"/><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/></svg>)
  if (name === "instagram") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>)
  return null
}

function Plate({ className, caption, sub }) {
  return (
    <figure className={`relative overflow-hidden ${className} hover-scale`}>
      <div className="absolute inset-0 grain mix-blend-overlay opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 text-white/90">
        {caption && <span className="font-serif text-xl italic">{caption}</span>}
        {sub && <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">{sub}</span>}
      </figcaption>
    </figure>
  )
}

export default function Home() {
  return (
    <div className="relative bg-[#0a0a0a] text-[#f0ece4]">
      <div className="pointer-events-none fixed inset-0 grain opacity-30" />

      {/* Nav */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <span className="font-serif text-2xl italic">Elena Faro</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-[#7a7a7a] md:inline">— photo journal</span>
          </a>
          <nav className="hidden items-center gap-7 font-mono text-xs uppercase tracking-[0.22em] text-[#bebebe] md:flex">
            <Link href="/posts" className="underline-grow">Feed</Link>
            <Link href="/posts" className="underline-grow">Archive</Link>
            <Link href="/about" className="underline-grow">About</Link>
            <Link href="/prints" className="underline-grow">Prints</Link>
            <a href="mailto:elena@elenafaro.photo" className="underline-grow">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="grid h-8 w-8 place-items-center rounded-full border border-[#262626] text-[#7a7a7a] hover:border-[#e4c290] hover:text-[#e4c290]">
              <Icon name="grid" className="h-3.5 w-3.5" />
            </button>
            <a href="#subscribe" className="inline-flex items-center gap-1.5 rounded-full border border-[#262626] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#bebebe] hover:border-[#e4c290] hover:text-[#e4c290]">
              <Icon name="mail" className="h-3.5 w-3.5" /> Sunday feed
            </a>
          </div>
        </div>
      </header>

      {/* Hero statement */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#7a7a7a]">
            <Icon name="pin" className="mr-2 inline h-3 w-3" /> Lisbon &amp; Madrid · since 2019
          </p>
          <h1 className="font-serif mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] italic leading-[1.05] tracking-tight">
            A working photo journal. Street, studio, and field work — <span className="text-[#e4c290]">published Sundays.</span>
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#bebebe]">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e4c290]" /> 142 features published</span>
            <span className="text-[#262626]">·</span>
            <span>No. 142 · Apr 13, 2026</span>
            <span className="text-[#262626]">·</span>
            <Link href="/about" className="underline-grow">About Elena</Link>
          </div>
        </div>
      </section>

      {/* Feature mosaic */}
      <section id="feed" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid gap-3 md:auto-rows-[280px] md:grid-cols-12">
            {features.map((f, i) => (
              <Link key={f.n} href={`/posts/${f.slug}`} className={`group relative ${f.size || "md:col-span-6"}`}>
                <div className={`absolute inset-0 ${f.art}`} />
                <div className="absolute inset-0 grain mix-blend-overlay opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">{f.n}</span>
                    <span className="flex items-center gap-1 rounded-full border border-white/25 bg-black/25 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white/80 backdrop-blur">
                      <Icon name="camera" className="h-3 w-3" /> {f.shots} plates
                    </span>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">{f.loc} · {f.date}</p>
                    <h2 className="font-serif mt-2 text-3xl italic leading-tight text-white md:text-5xl">{f.title}</h2>
                    <p className="mt-3 inline-flex items-center gap-1 text-sm text-white/70 underline-grow">
                      Open the feature <Icon name="arrow-up" className="h-3.5 w-3.5" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Plate grid */}
      <section id="archive" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="flex items-end justify-between border-b border-[#262626] pb-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#7a7a7a]">Recent plates</p>
              <h2 className="font-serif mt-2 text-4xl italic">From the last nine Sundays.</h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#7a7a7a]">
              <button className="grid h-8 w-8 place-items-center rounded-full border border-[#e4c290] text-[#e4c290]">
                <Icon name="grid" className="h-3.5 w-3.5" />
              </button>
              <button className="grid h-8 w-8 place-items-center rounded-full border border-[#262626] hover:border-[#e4c290]">
                <Icon name="list" className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3">
            {grid.map((p) => (
              <Plate key={p.n} className={`${p.art} aspect-[4/5]`} caption={p.t} sub={`No. ${p.n}`} />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center">
            <Link href="/posts" className="inline-flex items-center gap-2 rounded-full border border-[#262626] px-5 py-3 font-mono text-xs uppercase tracking-[0.22em] text-[#bebebe] hover:border-[#e4c290] hover:text-[#e4c290]">
              Open the full archive <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About / Process */}
      <section id="about" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm ph-3">
              <div className="absolute inset-0 grain mix-blend-overlay opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent" />
              <p className="absolute bottom-4 left-4 font-serif text-xl italic text-white">— self-portrait, 2025</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#7a7a7a]">About</p>
              <h2 className="font-serif mt-3 text-5xl italic leading-[1.02] md:text-6xl">
                Photographs made slowly, <span className="text-[#e4c290]">on purpose.</span>
              </h2>
              <div className="mt-6 space-y-5 text-[#bebebe] leading-relaxed">
                <p>
                  Elena Faro is a photographer working between Lisbon and Madrid. This journal collects one new
                  feature each Sunday — usually fourteen to twenty frames from the week, sometimes a single
                  plate that took a month to arrive.
                </p>
                <p>
                  The site is hand-coded (StoicSoft template · blog-photography) so every plate loads quickly
                  and the type stays out of the way. No ads, no tracking beyond anonymous counts, no AI-written
                  captions. If it says something, Elena wrote it.
                </p>
              </div>

              <dl className="mt-10 grid grid-cols-2 gap-3 text-sm">
                {equipment.map((e) => (
                  <div key={e.k} className="rounded-md border border-[#262626] bg-[#121212] p-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#7a7a7a]">{e.k}</dt>
                    <dd className="mt-1.5 text-[#f0ece4]">{e.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Prints */}
      <section id="prints" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-sm border border-[#262626] bg-[#121212] p-10 md:p-14">
            <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#e4c290]">Prints · edition of 25</p>
                <h2 className="font-serif mt-3 text-5xl italic leading-[1.02] md:text-6xl">
                  Signed, numbered, <span className="text-[#e4c290]">cotton rag.</span>
                </h2>
                <p className="mt-5 max-w-lg text-[#bebebe]">
                  A small selection of plates are printed on Hahnemühle Photo Rag in an edition of twenty-five.
                  Each print is signed, numbered, and shipped in a tube, anywhere in the EU and the US.
                </p>
                <Link href="/prints" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e4c290] px-5 py-3 text-sm font-semibold text-[#0a0a0a] hover:bg-white">
                  Browse the print shop <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {["ph-3", "ph-10", "ph-12", "ph-8"].map((a) => (
                  <div key={a} className={`relative aspect-square overflow-hidden ${a}`}>
                    <div className="absolute inset-0 grain mix-blend-overlay opacity-40" />
                    <span className="absolute bottom-2 left-2 font-mono text-[10px] uppercase tracking-widest text-white/70">edition · 25</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe + Archive years */}
      <section id="subscribe" className="relative z-10 border-t border-[#262626]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#e4c290]">Sunday feed</p>
              <h2 className="font-serif mt-3 text-4xl italic leading-[1.02] md:text-5xl">
                One new feature. Every Sunday. <span className="text-[#e4c290]">In your inbox.</span>
              </h2>
              <p className="mt-5 max-w-lg text-[#bebebe]">
                Fifteen to twenty plates with a short essay, delivered at 09:00 WET. No other emails, ever.
                2,840 readers currently on the list.
              </p>
              <form className="mt-8 flex max-w-md items-center gap-2 rounded-full border border-[#262626] bg-[#121212] p-1">
                <input type="email" placeholder="you@studio.com" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-[#7a7a7a]" />
                <button className="inline-flex items-center gap-1.5 rounded-full bg-[#e4c290] px-4 py-2 text-xs font-semibold text-[#0a0a0a] hover:bg-white">
                  Subscribe <Icon name="arrow" className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>

            <aside>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#7a7a7a]">Archive by year</p>
              <ul className="mt-4 divide-y divide-[#262626] border-t border-b border-[#262626]">
                {archive.map((a) => (
                  <li key={a.y} className="flex items-center justify-between py-3">
                    <a href="#" className="font-serif text-2xl italic underline-grow">{a.y}</a>
                    <span className="font-mono text-xs text-[#7a7a7a]">{a.c} features</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#262626]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-10">
          <div>
            <p className="font-serif text-xl italic">Elena Faro · photo journal</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#7a7a7a]">Lisbon &amp; Madrid · since 2019</p>
          </div>
          <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.22em] text-[#bebebe]">
            <a href="#" className="flex items-center gap-1.5 underline-grow"><Icon name="instagram" className="h-3.5 w-3.5" /> Instagram</a>
            <a href="#" className="underline-grow">Are.na</a>
            <a href="mailto:elena@elenafaro.photo" className="flex items-center gap-1.5 underline-grow"><Icon name="mail" className="h-3.5 w-3.5" /> Email</a>
            <a href="#" className="underline-grow">RSS</a>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#7a7a7a]">
            © {new Date().getFullYear()} · Template by StoicSoft
          </p>
        </div>
      </footer>
    </div>
  )
}
