import Link from "next/link"
import { getAllItems, getCategories, getHero, getStats } from "../lib/items"

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "play") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="M7 4v16l14-8z"/></svg>)
  if (name === "mic") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/></svg>)
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
    <div className="relative bg-[#07060a] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[800px] aura-podcast" />
      <div className="pointer-events-none fixed inset-0 dotgrid opacity-60" />

      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#8b6fff] to-[#ff5ab7] text-white">
              <Icon name="mic" className="h-4 w-4" />
            </span>
            {hero.name}
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            <Link href="/" className="hover:text-[#e7ff7b]">Shows</Link>
            <a href="#categories" className="hover:text-[#e7ff7b]">Categories</a>
            <Link href="/about" className="hover:text-[#e7ff7b]">About</Link>
            <Link href="/submit" className="hover:text-[#e7ff7b]">Submit</Link>
          </nav>
          <Link href="/submit" className="inline-flex items-center gap-1.5 rounded-full bg-[#e7ff7b] px-4 py-2 text-sm font-semibold text-[#07060a] hover:bg-white">
            <Icon name="plus" className="h-4 w-4" /> Submit a show
          </Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-10 md:pt-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70">
            <span className="eq flex h-3 items-end gap-[2px]">
              <span className="w-0.5 h-full bg-[#e7ff7b]" />
              <span className="w-0.5 h-full bg-[#e7ff7b]" />
              <span className="w-0.5 h-full bg-[#e7ff7b]" />
              <span className="w-0.5 h-full bg-[#e7ff7b]" />
              <span className="w-0.5 h-full bg-[#e7ff7b]" />
            </span>
            {hero.totalCount} shows · rotated weekly
          </span>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,6.5vw,5.5rem)] font-semibold leading-[1.02] tracking-tight">
            {hero.tagline.split("tech podcasts")[0]}
            <span className="font-serif italic text-[#e7ff7b]">tech podcasts</span>
            {hero.tagline.split("tech podcasts")[1]}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70" dangerouslySetInnerHTML={{ __html: hero.description }} />

          <div className="mt-10 grid items-center gap-6 md:grid-cols-[1.3fr_1fr]">
            <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-3 backdrop-blur">
              <Icon name="search" className="h-4 w-4 text-white/45" />
              <input placeholder="Search by name, host, or topic..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/40" />
              <a href="#" className="flex items-center gap-1 text-xs text-white/60 hover:text-[#e7ff7b]"><Icon name="rss" className="h-3 w-3" /> OPML</a>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.v} className="border-l-2 border-[#e7ff7b]/40 pl-3">
                  <p className="text-2xl font-semibold">{s.k}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-widest text-white/50">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-[0.18em] text-white/50">Categories</span>
            {[{ id: "all", label: "All shows", count: hero.totalCount }, ...categories].map((c, i) => (
              <button key={c.id} className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                i === 0 ? "border-[#e7ff7b] bg-[#e7ff7b] text-[#07060a]" : "border-white/10 bg-white/[0.03] hover:border-[#e7ff7b]/40"
              }`}>
                <span dangerouslySetInnerHTML={{ __html: c.label }} />
                <span className={i === 0 ? "text-[#07060a]/60" : "text-white/50"}>{c.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-xs uppercase tracking-[0.22em] text-[#e7ff7b]">Featured</p>
          <h2 className="mt-2 text-3xl font-semibold">Always in our rotation</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featured.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="card-hover group block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-6">
                <div className="flex items-start gap-4">
                  <div className={`relative grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br ${item.hue}`}>
                    <span className="font-serif text-3xl italic text-white">{item.name[0]}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate text-xl font-semibold group-hover:text-[#e7ff7b]">{item.name.replaceAll("&amp;", "&")}</h3>
                      <span className="rounded-full border border-[#e7ff7b]/30 bg-[#e7ff7b]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#e7ff7b]">Featured</span>
                    </div>
                    <p className="mt-1 text-sm text-white/65">{item.tagline.replaceAll("&amp;", "&").replaceAll("&apos;", "&rsquo;").replaceAll("&rsquo;", "'")}</p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-white/50">{item.cadence.replace("&apos;", "'")} · {item.length}</p>
                  </div>
                  <button className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#e7ff7b] text-[#07060a] hover:scale-105 transition">
                    <Icon name="play" className="h-5 w-5" />
                  </button>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/75" dangerouslySetInnerHTML={{ __html: item.description }} />
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/55">
                  <span>{item.episodes} episodes · since {item.since}</span>
                  <span className="text-[#e7ff7b] font-semibold">{item.pricing}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-xs uppercase tracking-[0.22em] text-[#8b6fff]">Rotation</p>
          <h2 className="mt-2 text-3xl font-semibold">All {items.length} shows on the band.</h2>

          <ul className="mt-8 space-y-3">
            {rest.map((item) => (
              <li key={item.slug}>
                <Link href={`/${item.slug}`} className="card-hover group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                  <div className={`grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${item.hue}`}>
                    <span className="font-serif text-2xl italic text-white">{item.name[0]}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate text-lg font-semibold group-hover:text-[#e7ff7b]">{item.name.replaceAll("&amp;", "&")}</h3>
                      {item.status === "New" && <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-emerald-300">New</span>}
                      {item.status === "Popular" && <span className="rounded-full border border-[#ff5ab7]/30 bg-[#ff5ab7]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#ff5ab7]">Popular</span>}
                    </div>
                    <p className="mt-0.5 text-xs text-white/65">{item.tagline.replaceAll("&amp;", "&").replaceAll("&apos;", "&rsquo;")}</p>
                    <p className="mt-2 hidden text-xs text-white/70 md:block" dangerouslySetInnerHTML={{ __html: item.description }} />
                    <div className="mt-2 flex items-center gap-3 font-mono text-[10px] text-white/50">
                      <span>{item.cadence.replace("&apos;", "'")}</span>
                      <span>·</span>
                      <span>{item.length}</span>
                      <span>·</span>
                      <span>{item.episodes} eps</span>
                    </div>
                  </div>
                  <button className="hidden h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 text-white/70 transition group-hover:grid group-hover:border-[#e7ff7b] group-hover:bg-[#e7ff7b] group-hover:text-[#07060a] md:grid">
                    <Icon name="play" className="h-4 w-4" />
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 p-10 md:p-14"
               style={{ background: "radial-gradient(700px circle at 15% 0%, rgba(139,111,255,0.35), transparent 55%), radial-gradient(700px circle at 85% 100%, rgba(231,255,123,0.18), transparent 55%), #0e0c14" }}>
            <div className="grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#e7ff7b]">Submit a show</p>
                <h2 className="mt-3 font-serif text-5xl italic leading-[1.02]">Hosting a show <span className="text-[#e7ff7b]">worth our Wednesday walk?</span></h2>
                <p className="mt-4 max-w-lg text-white/80">
                  We listen to three episodes before adding. Free submission, honest reply either way.
                </p>
              </div>
              <Link href="/submit" className="inline-flex items-center justify-between gap-3 rounded-2xl bg-[#e7ff7b] px-6 py-4 text-sm font-semibold text-[#07060a] hover:bg-white">
                <span className="text-lg">Submit a show</span>
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs text-white/50">
          <span>© {new Date().getFullYear()} {hero.name} · A StoicSoft listening list.</span>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-[#e7ff7b]">About</Link>
            <Link href="/submit" className="hover:text-[#e7ff7b]">Submit</Link>
            <a href="#" className="flex items-center gap-1 hover:text-[#e7ff7b]"><Icon name="rss" className="h-3 w-3" /> OPML</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
