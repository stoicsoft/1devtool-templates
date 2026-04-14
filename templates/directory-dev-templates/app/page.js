import Link from "next/link"
import { getAllItems, getCategories, getHero, getStats } from "../lib/items"

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "terminal") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/></svg>)
  if (name === "star") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="m12 2 3 7 7 .6-5.3 4.6L18 22l-6-3.8L6 22l1.3-7.8L2 9.6 9 9l3-7Z"/></svg>)
  if (name === "download") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  return null
}

export default function Home() {
  const hero = getHero()
  const items = getAllItems()
  const categories = getCategories()
  const stats = getStats()
  const featured = items.filter((i) => i.status === "Featured").slice(0, 2)

  return (
    <div className="relative bg-[#fbfaf7] text-[#11131a]">
      <div className="pointer-events-none fixed inset-0 grid-paper" />

      {/* Nav */}
      <header className="relative z-20 border-b border-[#11131a]/10 bg-[#fbfaf7]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-mono text-sm">
            <span className="rounded-md bg-[#11131a] px-2 py-1 font-semibold text-[#d4ff3d]">$ {hero.name.toLowerCase()}</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-[#11131a]/80 md:flex">
            <Link href="/" className="hover:text-[#ff4d26]">./registry</Link>
            <a href="#categories" className="hover:text-[#ff4d26]">./categories</a>
            <Link href="/about" className="hover:text-[#ff4d26]">./about</Link>
            <Link href="/submit" className="hover:text-[#ff4d26]">./submit</Link>
          </nav>
          <Link href="/submit" className="group inline-flex items-center gap-1.5 rounded-lg bg-[#11131a] px-4 py-2 text-sm font-medium text-[#fbfaf7] hover:bg-[#ff4d26]">
            <Icon name="plus" className="h-4 w-4" /> Submit a starter
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24">
          <div className="grid items-start gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#11131a]/15 bg-white px-3 py-1 text-xs font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d26]" />
                {hero.totalCount} starters · MIT license
              </span>
              <h1 className="mt-6 text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[1] tracking-tight">
                {hero.tagline.split("production-grade")[0]}
                <span className="text-[#ff4d26]">production-grade</span>
                {hero.tagline.split("production-grade")[1]}.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[#11131a]/70">{hero.description}</p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-lg border border-[#11131a]/15 bg-[#11131a] px-4 py-3 font-mono text-sm text-[#fbfaf7]">
                  <span className="text-[#d4ff3d]">$</span>
                  <span>npx 1devtool@latest create</span>
                </div>
                <Link href="#all" className="inline-flex items-center gap-2 rounded-lg border border-[#11131a]/20 bg-white px-4 py-3 text-sm font-medium hover:bg-[#11131a] hover:text-[#fbfaf7]">
                  Browse all <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-2 font-mono text-xs text-[#11131a]/60">
                <Icon name="terminal" className="h-3.5 w-3.5" /> paste into your terminal
              </div>
            </div>

            <div className="rounded-2xl border border-[#11131a]/15 bg-white p-5">
              <p className="font-mono text-xs text-[#11131a]/60">Search the registry</p>
              <div className="mt-3 flex items-center gap-2 rounded-lg border border-[#11131a]/15 bg-[#fbfaf7] px-3 py-2.5">
                <Icon name="search" className="h-4 w-4 text-[#11131a]/50" />
                <input placeholder="landing, saas, blog..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#11131a]/40" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-xs">
                {stats.map((s) => (
                  <div key={s.v} className="rounded-lg border border-[#11131a]/10 bg-[#fbfaf7] px-3 py-2">
                    <p className="text-lg font-bold">{s.k}</p>
                    <p className="text-[#11131a]/60">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#11131a]/50">./categories</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[{ id: "all", label: "All", count: hero.totalCount }, ...categories].map((c, i) => (
              <button key={c.id} className={`inline-flex items-center gap-2 rounded-md border px-3.5 py-1.5 font-mono text-xs transition ${
                i === 0 ? "border-[#11131a] bg-[#11131a] text-[#fbfaf7]" : "border-[#11131a]/15 bg-white hover:border-[#11131a]"
              }`}>
                {c.label}
                <span className={i === 0 ? "text-[#d4ff3d]" : "text-[#11131a]/50"}>{c.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#ff4d26]">Featured this week</p>
              <h2 className="mt-2 text-3xl font-bold">Starters we&rsquo;re pinning today</h2>
            </div>
            <Link href="#all" className="text-sm font-mono text-[#11131a]/60 hover:text-[#ff4d26]">all starters →</Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {featured.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="card-hover group block overflow-hidden rounded-2xl border border-[#11131a]/15 bg-white">
                <div className="border-b border-[#11131a]/10 bg-[#11131a] px-5 py-2.5 font-mono text-xs text-[#d4ff3d]">
                  $ 1devtool create {item.slug}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold group-hover:text-[#ff4d26]">{item.name}</h3>
                    <span className="rounded-md bg-[#ff4d26]/10 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#ff4d26]">Featured</span>
                  </div>
                  <p className="mt-2 text-sm text-[#11131a]/70">{item.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-[#11131a]/80">{item.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-[#11131a]/10 pt-4 font-mono text-xs text-[#11131a]/60">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1"><Icon name="star" className="h-3 w-3 text-[#ff4d26]" /> {item.stars}</span>
                      <span className="flex items-center gap-1"><Icon name="download" className="h-3 w-3" /> {item.clones}</span>
                    </div>
                    <span className="text-[#11131a]/50">{item.version}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All starters list */}
      <section id="all" className="relative z-10 border-t border-[#11131a]/10">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#ff4d26]">./all-starters</p>
              <h2 className="mt-2 text-3xl font-bold">{items.length} starters in the registry</h2>
            </div>
            <span className="font-mono text-xs text-[#11131a]/50">sorted by pin weight</span>
          </div>
          <ul className="mt-8 divide-y divide-[#11131a]/10 rounded-2xl border border-[#11131a]/15 bg-white">
            {items.map((item) => (
              <li key={item.slug}>
                <Link href={`/${item.slug}`} className="group grid grid-cols-[1fr_auto] items-center gap-4 px-6 py-5 hover:bg-[#fbfaf7] md:grid-cols-[auto_1.6fr_1fr_auto]">
                  <span className="hidden rounded-md bg-[#11131a]/5 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-[#11131a]/60 md:inline-block">{item.category}</span>
                  <div>
                    <p className="font-mono text-sm font-semibold group-hover:text-[#ff4d26]">{item.name}</p>
                    <p className="mt-1 text-xs text-[#11131a]/60">{item.tagline}</p>
                  </div>
                  <div className="hidden items-center gap-4 font-mono text-xs text-[#11131a]/60 md:flex">
                    <span className="flex items-center gap-1"><Icon name="star" className="h-3 w-3 text-[#ff4d26]" /> {item.stars}</span>
                    <span className="flex items-center gap-1"><Icon name="download" className="h-3 w-3" /> {item.clones}</span>
                    <span>{item.version}</span>
                  </div>
                  <Icon name="arrow" className="h-4 w-4 text-[#11131a]/40 transition group-hover:translate-x-1 group-hover:text-[#ff4d26]" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-2xl bg-[#11131a] p-10 text-[#fbfaf7] md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#d4ff3d]">Submit</p>
                <h2 className="mt-3 text-4xl font-bold leading-[1.05]">Built a starter worth <span className="text-[#ff4d26]">cloning?</span></h2>
                <p className="mt-4 max-w-lg text-[#fbfaf7]/75">
                  Point us at a public repo with a <code className="font-mono text-[#d4ff3d]">1devtool.json</code> manifest. We review for quality, not hype.
                </p>
              </div>
              <Link href="/submit" className="inline-flex items-center justify-between gap-3 rounded-xl bg-[#d4ff3d] px-5 py-4 font-mono text-sm font-semibold text-[#11131a] hover:bg-[#ff4d26] hover:text-[#fbfaf7]">
                <span className="text-lg">Submit a starter</span>
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#11131a]/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 font-mono text-xs text-[#11131a]/55">
          <span>© {new Date().getFullYear()} {hero.name} · A StoicSoft / 1DevTool registry.</span>
          <div className="flex gap-5">
            <Link href="/about" className="hover:text-[#ff4d26]">about</Link>
            <Link href="/submit" className="hover:text-[#ff4d26]">submit</Link>
            <a href="#" className="hover:text-[#ff4d26]">github</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
