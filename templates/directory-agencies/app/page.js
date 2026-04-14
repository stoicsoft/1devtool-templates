import Link from "next/link"
import { getAllItems, getCategories, getHero, getStats } from "../lib/items"

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "pin") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="10" r="3"/><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/></svg>)
  if (name === "users") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5M15 20c0-2 2-4 4-4"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  return null
}

export default function Home() {
  const hero = getHero()
  const items = getAllItems()
  const categories = getCategories()
  const stats = getStats()
  const featured = items.filter((i) => i.status === "Featured")

  return (
    <div className="relative bg-[#0d1426] text-[#f3ede0]">

      <header className="relative z-20">
        <div className="deco h-px" />
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-sm border border-[#c4a059]/40 font-serif text-lg italic text-[#c4a059]">A</span>
            <div>
              <p className="font-serif text-xl italic">{hero.name}</p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#8d9bb5]">Studios &amp; ateliers · est. 2024</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-[#e8dfc8]/80 md:flex">
            <Link href="/" className="gold-underline">Directory</Link>
            <a href="#categories" className="gold-underline">Practices</a>
            <Link href="/about" className="gold-underline">About</Link>
            <Link href="/submit" className="gold-underline">Submit</Link>
          </nav>
          <Link href="/submit" className="inline-flex items-center gap-1.5 rounded-sm border border-[#c4a059] bg-[#c4a059]/10 px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#c4a059] hover:bg-[#c4a059] hover:text-[#0d1426]">
            <Icon name="plus" className="h-3.5 w-3.5" /> Submit a studio
          </Link>
        </div>
        <div className="deco h-px" />
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#c4a059]">
            <span className="h-px w-10 bg-[#c4a059]" />
            A StoicSoft hire-list
          </p>
          <h1 className="font-serif mt-8 text-[clamp(2.6rem,7vw,6.5rem)] leading-[1] tracking-tight">
            Studios we&rsquo;d <em className="italic text-[#c4a059]">hire</em>
            <br />ourselves.
          </h1>
          <p className="font-serif mt-6 max-w-2xl text-2xl italic leading-snug text-[#e8dfc8]" dangerouslySetInnerHTML={{ __html: hero.description }} />

          <div className="mt-10 grid gap-6 md:grid-cols-[1.4fr_1fr]">
            <div className="flex items-center gap-2 rounded-sm border border-[#2a3758] bg-[#14203a] px-4 py-3">
              <Icon name="search" className="h-4 w-4 text-[#8d9bb5]" />
              <input placeholder="Search by practice, location, or studio name..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#8d9bb5]/70" />
              <kbd className="hidden rounded border border-[#8d9bb5]/30 bg-[#0d1426] px-1.5 py-0.5 font-mono text-[10px] text-[#8d9bb5] md:inline">⌘K</kbd>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.v} className="border-l border-[#c4a059]/40 pl-3">
                  <p className="font-serif text-2xl italic text-[#c4a059]">{s.k}</p>
                  <p className="mt-0.5 text-xs text-[#8d9bb5]">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="deco h-px" />
      </section>

      <section id="categories" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <p className="text-xs uppercase tracking-[0.28em] text-[#c4a059]">Practices</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[{ id: "all", label: "Every studio", count: hero.totalCount }, ...categories].map((c, i) => (
              <button key={c.id} className={`inline-flex items-center gap-1.5 rounded-sm border px-3.5 py-1.5 text-xs font-medium transition ${
                i === 0 ? "border-[#c4a059] bg-[#c4a059] text-[#0d1426]" : "border-[#2a3758] bg-[#14203a] hover:border-[#c4a059]/60"
              }`}>
                <span dangerouslySetInnerHTML={{ __html: c.label }} />
                <span className={i === 0 ? "text-[#0d1426]/70" : "text-[#8d9bb5]"}>{c.count}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="deco h-px" />
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-xs uppercase tracking-[0.28em] text-[#c4a059]">Featured · this quarter</p>
          <h2 className="font-serif mt-3 text-4xl italic">Three studios in our rotation.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featured.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="card-hover group block rounded-sm border border-[#2a3758] bg-[#14203a] p-7">
                <div className="flex items-start gap-4">
                  <div className={`grid h-16 w-16 shrink-0 place-items-center rounded-sm bg-gradient-to-br ${item.hue}`}>
                    <span className="font-serif text-3xl italic text-[#0d1426]">{item.name[0]}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-2xl italic">{item.name.replace("&amp;", "&")}</h3>
                      <span className="rounded-sm border border-[#c4a059]/40 bg-[#c4a059]/10 px-2 py-0.5 text-[10px] uppercase tracking-widest text-[#c4a059]">Featured</span>
                    </div>
                    <p className="mt-1 text-sm text-[#e8dfc8]/75">{item.tagline.replace("&amp;", "&")}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-[#e8dfc8]/80" dangerouslySetInnerHTML={{ __html: item.description }} />
                <div className="deco mt-5 h-px" />
                <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-[#8d9bb5]">
                  <div><p className="text-[#c4a059]">Rate</p><p>{item.rate.replace("&amp;", "&")}</p></div>
                  <div><p className="text-[#c4a059]">Team</p><p>{item.size}</p></div>
                  <div><p className="text-[#c4a059]">Based</p><p>{item.location}</p></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="deco h-px" />
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-xs uppercase tracking-[0.28em] text-[#c4a059]">All studios</p>
          <h2 className="font-serif mt-3 text-4xl italic">{items.length} on the directory.</h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="card-hover group block rounded-sm border border-[#2a3758] bg-[#14203a] p-5">
                <div className="flex items-start gap-3">
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-sm bg-gradient-to-br ${item.hue}`}>
                    <span className="font-serif text-xl italic text-[#0d1426]">{item.name[0]}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif truncate text-lg italic">{item.name.replace("&amp;", "&")}</h3>
                    <p className="mt-0.5 truncate text-xs text-[#8d9bb5]">{item.tagline.replace("&amp;", "&")}</p>
                  </div>
                </div>
                <p className="mt-4 line-clamp-2 text-xs text-[#e8dfc8]/75" dangerouslySetInnerHTML={{ __html: item.description }} />
                <div className="mt-4 flex items-center justify-between text-[10px] text-[#8d9bb5]">
                  <span className="flex items-center gap-1"><Icon name="pin" className="h-3 w-3" /> {item.location}</span>
                  <span className="flex items-center gap-1"><Icon name="users" className="h-3 w-3" /> {item.size}</span>
                  <span className="text-[#c4a059]">{item.rate.split(" · ")[0]}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-sm border border-[#c4a059]/30 bg-gradient-to-br from-[#14203a] to-[#0d1426] p-10 md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#c4a059]">Add your studio</p>
                <h2 className="font-serif mt-3 text-5xl italic leading-[1.02]">A studio worth <em className="text-[#c4a059]">recommending?</em></h2>
                <p className="mt-4 max-w-lg text-[#e8dfc8]/80">
                  We add studios we&rsquo;ve hired, partnered with, or watched ship over time. Submission is free and stays free.
                </p>
              </div>
              <Link href="/submit" className="inline-flex items-center justify-between rounded-sm border border-[#c4a059] bg-[#c4a059] px-6 py-4 text-sm font-semibold uppercase tracking-widest text-[#0d1426] hover:bg-[#d9ba72]">
                <span className="font-serif text-xl italic normal-case tracking-normal">Submit a studio</span>
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10">
        <div className="deco h-px" />
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs text-[#8d9bb5]">
          <span>© {new Date().getFullYear()} {hero.name} · A StoicSoft directory.</span>
          <span className="font-serif italic">Set in Playfair Display</span>
        </div>
      </footer>
    </div>
  )
}
