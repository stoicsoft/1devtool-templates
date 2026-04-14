import Link from "next/link"
import { getAllItems, getCategories, getHero, getStats } from "../lib/items"

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>)
  if (name === "rss") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1.4"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  return null
}

export default function Home() {
  const hero = getHero()
  const items = getAllItems()
  const categories = getCategories()
  const stats = getStats()
  const featured = items.filter((i) => i.status === "Featured")
  const rest = items.filter((i) => i.status !== "Featured")

  return (
    <div className="relative bg-[#f7f1e3] text-[#131110]">
      <div className="pointer-events-none fixed inset-0 paper-tex opacity-40" />

      <header className="relative z-20 border-b border-[#d8cdb6]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#75695a]">
          <span>Vol. III · Spring 2026</span>
          <Link href="/" className="font-serif text-base italic normal-case tracking-normal text-[#131110]">{hero.name}</Link>
          <span>{hero.totalCount} titles</span>
        </div>
        <div className="rule h-px" />
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
          <nav className="flex gap-5 text-xs uppercase tracking-[0.18em] text-[#2c2622]">
            <Link href="/" className="underline-grow">Current</Link>
            <a href="#categories" className="underline-grow">Categories</a>
            <Link href="/about" className="underline-grow">About</Link>
          </nav>
          <Link href="/submit" className="inline-flex items-center gap-1.5 rounded-full bg-[#131110] px-4 py-2 text-xs uppercase tracking-widest text-[#f7f1e3] hover:bg-[#a04023]">
            <Icon name="plus" className="h-3.5 w-3.5" /> Submit a title
          </Link>
        </div>
        <div className="rule h-px" />
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-[#a04023]">The StoicSoft newsstand</p>
          <h1 className="font-serif mt-4 text-[clamp(3rem,7.5vw,6.5rem)] leading-[0.95]">
            A quiet reading list <em className="italic text-[#a04023]">of newsletters</em> worth keeping.
          </h1>
          <p className="font-serif mx-auto mt-6 max-w-2xl text-2xl italic text-[#2c2622]" dangerouslySetInnerHTML={{ __html: hero.description }} />

          <div className="mx-auto mt-10 max-w-xl">
            <div className="flex items-center gap-2 rounded-full border border-[#d8cdb6] bg-white/80 px-4 py-3">
              <Icon name="search" className="h-4 w-4 text-[#75695a]" />
              <input placeholder="Search by name, cadence, or topic..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#75695a]/70" />
              <kbd className="hidden rounded bg-[#f7f1e3] px-1.5 py-0.5 font-mono text-[10px] text-[#75695a] md:inline">⌘K</kbd>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.v} className="rounded-2xl border border-[#d8cdb6] bg-white/60 p-5 text-left">
                <p className="font-serif text-3xl">{s.k}</p>
                <p className="mt-1 text-xs text-[#75695a]">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rule h-px mx-auto max-w-6xl" />
      </section>

      <section id="categories" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-serif text-sm italic text-[#75695a]">Shelves —</span>
            {[{ id: "all", label: "Everything", count: hero.totalCount }, ...categories].map((c, i) => (
              <button key={c.id} className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                i === 0 ? "border-[#131110] bg-[#131110] text-[#f7f1e3]" : "border-[#d8cdb6] bg-white/50 hover:border-[#131110]"
              }`}>
                <span dangerouslySetInnerHTML={{ __html: c.label }} />
                <span className={i === 0 ? "text-[#f7f1e3]/60" : "text-[#75695a]"}>{c.count}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="rule h-px mx-auto max-w-6xl" />
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-xs uppercase tracking-[0.22em] text-[#a04023]">Currently featured</p>
          <h2 className="font-serif mt-3 text-4xl">Two from our shelf this month.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featured.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="card-hover group block overflow-hidden rounded-3xl border border-[#d8cdb6] bg-white/70">
                <div className={`relative h-32 bg-gradient-to-br ${item.hue}`}>
                  <div className="absolute inset-0 paper-tex mix-blend-overlay opacity-40" />
                  <p className="absolute bottom-4 left-6 font-serif text-3xl italic text-white/95">{item.name}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-[#a04023]/30 bg-[#a04023]/10 px-2 py-0.5 text-[10px] uppercase tracking-widest text-[#a04023]">Featured</span>
                    <span className="text-xs text-[#75695a]">since {item.since}</span>
                  </div>
                  <p className="font-serif mt-3 text-xl italic">{item.tagline.replace("&amp;", "&")}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#2c2622]/85" dangerouslySetInnerHTML={{ __html: item.description }} />
                  <div className="rule mt-4 h-px" />
                  <div className="mt-4 flex items-center justify-between text-xs text-[#75695a]">
                    <span>{item.cadence.replace("&apos;", "'")}</span>
                    <span>{item.readers} readers</span>
                    <span className="font-semibold text-[#a04023]">{item.pricing}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="rule h-px mx-auto max-w-6xl" />
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-xs uppercase tracking-[0.22em] text-[#a04023]">All titles</p>
          <h2 className="font-serif mt-3 text-4xl">Everyone on the stand.</h2>

          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {rest.map((item) => (
              <li key={item.slug}>
                <Link href={`/${item.slug}`} className="card-hover group flex items-start gap-4 rounded-2xl border border-[#d8cdb6] bg-white/60 p-5">
                  <div className={`h-16 w-16 shrink-0 rounded-xl bg-gradient-to-br ${item.hue}`}>
                    <div className="paper-tex h-full w-full mix-blend-overlay opacity-40" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif truncate text-2xl italic">{item.name}</h3>
                      {item.status === "New" && <span className="rounded-full border border-emerald-600/30 bg-emerald-50 px-1.5 py-0.5 text-[9px] uppercase tracking-widest text-emerald-700">New</span>}
                    </div>
                    <p className="mt-0.5 text-sm text-[#75695a]">{item.tagline.replaceAll("&amp;", "&").replaceAll("&apos;", "&rsquo;").replaceAll("&rsquo;", "'")}</p>
                    <p className="mt-3 text-xs text-[#2c2622]/70" dangerouslySetInnerHTML={{ __html: item.description }} />
                    <div className="mt-3 flex items-center justify-between border-t border-[#d8cdb6] pt-2 text-[11px] text-[#75695a]">
                      <span>{item.cadence.replace("&apos;", "'")}</span>
                      <span>{item.readers} readers</span>
                      <span className="font-semibold text-[#a04023]">{item.pricing}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-[32px] bg-[#131110] p-10 text-[#f7f1e3] md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#c69c3f]">Submit</p>
                <h2 className="font-serif mt-3 text-5xl leading-[1.02]">Writing a newsletter <em className="italic text-[#c69c3f]">you&rsquo;d read yourself?</em></h2>
                <p className="mt-4 max-w-lg text-[#f7f1e3]/75">
                  We read 12 issues before adding a title. Free submission, honest reply either way.
                </p>
              </div>
              <Link href="/submit" className="inline-flex items-center justify-between rounded-2xl bg-[#c69c3f] px-6 py-4 text-sm font-semibold text-[#131110] hover:bg-[#a04023] hover:text-[#f7f1e3]">
                <span className="font-serif text-xl italic">Submit a newsletter</span>
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#d8cdb6]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs text-[#75695a]">
          <span>© {new Date().getFullYear()} {hero.name} · A StoicSoft newsstand.</span>
          <div className="flex gap-4">
            <Link href="/about" className="underline-grow">About</Link>
            <Link href="/submit" className="underline-grow">Submit</Link>
            <a href="#" className="flex items-center gap-1.5 underline-grow"><Icon name="rss" className="h-3 w-3" /> Every feed</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
