import Link from "next/link"
import { getAllItems, getCategories, getHero, getStats } from "../lib/items"

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "star") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="m12 2 3 7 7 .6-5.3 4.6L18 22l-6-3.8L6 22l1.3-7.8L2 9.6 9 9l3-7Z"/></svg>)
  if (name === "spark") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M6 18l3-3M15 9l3-3"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  return null
}

function ItemCard({ item }) {
  return (
    <Link href={`/${item.slug}`} className="card-hover group block rounded-2xl border border-[#242630] bg-[#0f1016] p-5">
      <div className="flex items-start gap-4">
        <div className={`relative grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${item.hue}`}>
          <span className="font-serif text-2xl italic text-[#0a0b10]">{item.name[0]}</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="truncate text-lg font-semibold transition group-hover:text-[#3ee0a5]">{item.name}</h3>
            {item.status === "Featured" && (
              <span className="shrink-0 rounded-full border border-[#d4ff3d]/30 bg-[#d4ff3d]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#d4ff3d]">Featured</span>
            )}
            {item.status === "New" && (
              <span className="shrink-0 rounded-full border border-[#3ee0a5]/30 bg-[#3ee0a5]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#3ee0a5]">New</span>
            )}
            {item.status === "Popular" && (
              <span className="shrink-0 rounded-full border border-[#ff6547]/30 bg-[#ff6547]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#ff6547]">Popular</span>
            )}
          </div>
          <p className="mt-1 text-xs text-[#a7abb7]">{item.tagline}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[#a7abb7]" dangerouslySetInnerHTML={{ __html: item.description }} />
      <div className="mt-5 flex items-center justify-between border-t border-[#242630] pt-4 text-xs text-[#a7abb7]">
        <div className="flex flex-wrap gap-1.5">
          {item.tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono">#{t}</span>
          ))}
        </div>
        <span className="shrink-0 font-semibold text-[#3ee0a5]">{item.pricing}</span>
      </div>
    </Link>
  )
}

export default function Home() {
  const hero = getHero()
  const items = getAllItems()
  const categories = getCategories()
  const stats = getStats()
  const featured = items.filter((i) => i.status === "Featured")
  const rest = items.filter((i) => i.status !== "Featured")

  return (
    <div className="relative overflow-hidden bg-[#0a0b10] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] glow-bg" />
      <div className="pointer-events-none absolute inset-0 dotgrid opacity-60" />

      {/* Nav */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#3ee0a5] to-[#d4ff3d] text-[#0a0b10]">
              <Icon name="star" className="h-4 w-4" />
            </span>
            {hero.name}
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            <Link href="/" className="hover:text-white">Directory</Link>
            <a href="#categories" className="hover:text-white">Categories</a>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/submit" className="hover:text-white">Submit</Link>
          </nav>
          <Link href="/submit" className="group inline-flex items-center gap-1.5 rounded-full bg-[#3ee0a5] px-4 py-2 text-sm font-semibold text-[#0a0b10] transition hover:bg-[#d4ff3d]">
            <Icon name="plus" className="h-4 w-4" /> Submit a tool
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-10 text-center md:pt-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3ee0a5]" />
            {hero.totalCount} tools · updated every Wednesday
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
            {hero.tagline.split("operators actually use")[0]}
            <span className="font-serif italic text-[#3ee0a5]">operators actually use</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">{hero.description}</p>

          <div className="mx-auto mt-8 max-w-2xl">
            <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-[#0f1016] px-4 py-3 shadow-[0_20px_60px_-30px_rgba(62,224,165,0.35)]">
              <Icon name="search" className="h-4 w-4 text-white/50" />
              <input placeholder="Search by name, tag, or category..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/40" />
              <kbd className="hidden rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-white/60 md:inline">⌘K</kbd>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-12">
          <div className="grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-[#0f1016]/80 p-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.v} className="border-l-2 border-[#3ee0a5]/30 pl-4">
                <p className="text-3xl font-semibold">{s.k}</p>
                <p className="mt-1 text-xs text-white/60">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-[#3ee0a5]">Categories</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[{ id: "all", label: "All", count: hero.totalCount }, ...categories].map((c, i) => (
              <button key={c.id} className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                i === 0 ? "border-[#3ee0a5] bg-[#3ee0a5] text-[#0a0b10]" : "border-white/15 bg-white/[0.02] text-white/70 hover:border-[#3ee0a5]/60 hover:text-white"
              }`}>
                {c.label}
                <span className={i === 0 ? "text-[#0a0b10]/70" : "text-white/40"}>{c.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#d4ff3d]">Featured</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Editor&rsquo;s picks this week</h2>
            </div>
            <span className="hidden text-xs text-white/50 md:inline">Updated Apr 14 · {featured.length} featured</span>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featured.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="card-hover group relative block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-7">
                <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${item.hue} opacity-20 blur-3xl transition group-hover:opacity-40`} />
                <div className="relative flex items-start gap-5">
                  <div className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${item.hue}`}>
                    <span className="font-serif text-3xl italic text-[#0a0b10]">{item.name[0]}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-semibold">{item.name}</h3>
                      <span className="rounded-full border border-[#d4ff3d]/30 bg-[#d4ff3d]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#d4ff3d]">Featured</span>
                    </div>
                    <p className="mt-1 text-sm text-white/70">{item.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/80" dangerouslySetInnerHTML={{ __html: item.description }} />
                    <div className="mt-5 flex items-center gap-3 text-xs text-white/60">
                      <span className="font-semibold text-[#3ee0a5]">{item.pricing}</span>
                      <span>·</span>
                      <span>{item.users}</span>
                      <span>·</span>
                      <span>since {item.launched}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All items grid */}
      <section className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#3ee0a5]">All tools</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{items.length} of {hero.totalCount} listed</h2>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-white/50">Sort by</span>
              <select className="rounded-md border border-white/10 bg-[#0f1016] px-2 py-1 text-white/80">
                <option>Curator score</option>
                <option>Most used</option>
                <option>Newest</option>
                <option>Price ↑</option>
              </select>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((item) => (
              <ItemCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Submit CTA */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-10 md:p-14"
               style={{ background: "radial-gradient(700px circle at 15% 0%, rgba(62,224,165,0.24), transparent 55%), radial-gradient(700px circle at 85% 100%, rgba(212,255,61,0.18), transparent 55%), #0f1016" }}>
            <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#d4ff3d]">Submit</p>
                <h2 className="mt-3 font-serif text-4xl italic leading-[1.05] md:text-5xl">
                  Running something worth <span className="text-[#3ee0a5]">telling the team about?</span>
                </h2>
                <p className="mt-4 max-w-lg text-white/70">
                  We list only tools we&rsquo;d recommend to someone over coffee. Free to submit. Usually reviewed within a week.
                </p>
              </div>
              <Link href="/submit" className="group inline-flex items-center justify-between rounded-2xl border border-[#3ee0a5]/40 bg-[#3ee0a5] px-6 py-5 text-sm font-semibold text-[#0a0b10] transition hover:bg-[#d4ff3d]">
                <span className="text-xl">Submit your tool</span>
                <Icon name="arrow" className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#3ee0a5] to-[#d4ff3d] text-[#0a0b10]">
                <Icon name="star" className="h-4 w-4" />
              </span>
              {hero.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/55">
              A StoicSoft studio directory. Curated weekly by the same team that ships ServerCompass, Aether, and 1DevTool.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Directory</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-[#3ee0a5]">All tools</Link></li>
              <li><a href="#categories" className="hover:text-[#3ee0a5]">Categories</a></li>
              <li><Link href="/submit" className="hover:text-[#3ee0a5]">Submit</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Studio</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-[#3ee0a5]">StoicSoft</a></li>
              <li><a href="#" className="hover:text-[#3ee0a5]">ServerCompass</a></li>
              <li><a href="#" className="hover:text-[#3ee0a5]">1DevTool</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="mailto:hello@stackpicks.directory" className="hover:text-[#3ee0a5]">hello@stackpicks.directory</a></li>
              <li><Link href="/about" className="hover:text-[#3ee0a5]">About the curators</Link></li>
              <li><a href="#" className="hover:text-[#3ee0a5]">RSS feed</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-white/40">
            <span>© {new Date().getFullYear()} {hero.name} · A StoicSoft directory.</span>
            <span>Never sponsored.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
