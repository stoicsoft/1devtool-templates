import Link from "next/link"
import { getAllItems, getCategories, getHero, getStats } from "../lib/items"

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  if (name === "sparkle") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="m12 3 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z"/></svg>)
  return null
}

const statusChip = (s) =>
  s === "Featured" ? "border-orange-300 bg-orange-50 text-orange-700"
  : s === "New" ? "border-emerald-300 bg-emerald-50 text-emerald-700"
  : s === "Popular" ? "border-violet-300 bg-violet-50 text-violet-700"
  : "border-amber-300 bg-amber-50 text-amber-700"

export default function Home() {
  const hero = getHero()
  const items = getAllItems()
  const categories = getCategories()
  const stats = getStats()
  const featured = items.filter((i) => i.status === "Featured")
  const rest = items.filter((i) => i.status !== "Featured")

  return (
    <div className="relative bg-[#fbfaf7] text-[#16141f]">
      <div className="pointer-events-none fixed inset-0 shelf-bg" />

      <header className="relative z-20 border-b border-black/5 bg-[#fbfaf7]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-display text-xl italic">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-orange-500 to-violet-500 text-white">
              <Icon name="sparkle" className="h-4 w-4" />
            </span>
            {hero.name}
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-black/70 md:flex">
            <Link href="/" className="hover:text-orange-600">Shelf</Link>
            <a href="#categories" className="hover:text-orange-600">Categories</a>
            <Link href="/about" className="hover:text-orange-600">About</Link>
            <Link href="/submit" className="hover:text-orange-600">Submit</Link>
          </nav>
          <Link href="/submit" className="inline-flex items-center gap-1.5 rounded-lg bg-[#16141f] px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600">
            <Icon name="plus" className="h-4 w-4" /> Add to shelf
          </Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-10 md:pt-20">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-600">The shelf</p>
              <h1 className="font-display mt-4 text-[clamp(2.8rem,6.5vw,5.5rem)] leading-[0.98] tracking-tight">
                {hero.tagline.split("fonts")[0]}
                <em className="italic text-orange-600">fonts</em>, icons, <em className="italic text-violet-500">objects</em>.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-black/70" dangerouslySetInnerHTML={{ __html: hero.description }} />
              <div className="mt-8 flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm">
                <Icon name="search" className="h-4 w-4 text-black/45" />
                <input placeholder="Fonts, icons, colors, objects..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-black/40" />
                <kbd className="hidden rounded border border-black/10 bg-black/5 px-1.5 py-0.5 font-mono text-[10px] text-black/60 md:inline">⌘K</kbd>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.v} className="rounded-2xl border border-black/8 bg-white p-5">
                  <p className="font-display text-4xl italic text-orange-600">{s.k}</p>
                  <p className="mt-1 text-xs text-black/60">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {[{ id: "all", label: "All shelves", count: hero.totalCount }, ...categories].map((c, i) => (
              <button key={c.id} className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                i === 0 ? "border-orange-600 bg-orange-600 text-white" : "border-black/10 bg-white hover:border-orange-400"
              }`}>
                <span dangerouslySetInnerHTML={{ __html: c.label }} />
                <span className={i === 0 ? "text-white/70" : "text-black/45"}>{c.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-600">Featured</p>
          <h2 className="font-display mt-2 text-4xl italic">Front of the shelf.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featured.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="card-hover group block overflow-hidden rounded-3xl border border-black/10 bg-white">
                <div className={`relative aspect-[5/2] bg-gradient-to-br ${item.hue}`}>
                  <div className="absolute inset-6 flex flex-col justify-between text-white">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em]">{item.category}</span>
                    <div>
                      <span className="font-display text-5xl italic">{item.name}</span>
                      <p className="mt-2 max-w-xl text-sm text-white/85">{item.tagline.replace("&amp;", "&")}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-black/75 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }} />
                  <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.slice(0, 3).map((t) => <span key={t} className="rounded-md bg-black/5 px-2 py-0.5 font-mono text-[10px]">#{t}</span>)}
                    </div>
                    <span className="text-sm font-semibold text-orange-600">{item.pricing}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-600">All material</p>
              <h2 className="font-display mt-2 text-4xl italic">Everything we keep within reach.</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="card-hover group block overflow-hidden rounded-2xl border border-black/10 bg-white">
                <div className={`relative aspect-[5/3] bg-gradient-to-br ${item.hue} flex items-center justify-center`}>
                  <span className="font-display text-5xl italic text-white/90">{item.name.split(" ").slice(0, 2).join(" ")}</span>
                  {item.status && (
                    <span className={`absolute right-3 top-3 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest backdrop-blur bg-white/70 ${statusChip(item.status)}`}>
                      <span dangerouslySetInnerHTML={{ __html: item.status }} />
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold transition group-hover:text-orange-600">{item.name}</h3>
                    <span className="text-xs font-semibold text-orange-600">{item.pricing}</span>
                  </div>
                  <p className="mt-1 text-xs text-black/55">{item.tagline.replace("&amp;", "&")}</p>
                  <p className="mt-4 text-sm leading-relaxed text-black/70">{item.description}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-3 text-xs text-black/50">
                    <span>{item.source}</span>
                    <span>Used in {item.used}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-[32px] border border-black/10 bg-white p-10 md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-orange-600">Suggest something</p>
                <h2 className="font-display mt-3 text-5xl italic leading-[1.02]">
                  Using something we should <em className="text-violet-500">pin next?</em>
                </h2>
                <p className="mt-4 max-w-lg text-black/70">
                  The shelf grows with suggestions from the community. We review submissions on Monday mornings over coffee.
                </p>
              </div>
              <Link href="/submit" className="inline-flex items-center justify-between gap-3 rounded-2xl bg-orange-500 px-6 py-4 text-sm font-semibold text-white hover:bg-orange-600">
                <span className="font-display text-xl italic">Suggest a resource</span>
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs text-black/50">
          <span>© {new Date().getFullYear()} {hero.name} · A StoicSoft design shelf.</span>
          <div className="flex gap-5">
            <Link href="/about" className="hover:text-orange-600">About</Link>
            <Link href="/submit" className="hover:text-orange-600">Submit</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
