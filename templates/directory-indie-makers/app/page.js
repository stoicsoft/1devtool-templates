import Link from "next/link"
import { getAllItems, getCategories, getHero, getStats } from "../lib/items"

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>)
  if (name === "pin") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="10" r="3"/><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/></svg>)
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
    <div className="relative bg-[#f5efe2] text-[#141210]">
      <div className="pointer-events-none fixed inset-0 paper-tex opacity-40" />

      {/* Masthead */}
      <header className="relative z-20 border-b border-[#d5c9b0]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#6c6354]">
          <span>Vol. II · Spring 2026</span>
          <Link href="/" className="font-display text-base italic normal-case tracking-normal text-[#141210]">{hero.name}</Link>
          <span>{hero.totalCount} profiles</span>
        </div>
        <div className="rule h-px" />
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
          <nav className="flex flex-wrap gap-5 text-xs uppercase tracking-[0.18em] text-[#3a3329]">
            <Link href="/" className="underline-grow">All</Link>
            <a href="#directory" className="underline-grow">Directory</a>
            <a href="#categories" className="underline-grow">Categories</a>
            <Link href="/about" className="underline-grow">About</Link>
          </nav>
          <Link href="/submit" className="inline-flex items-center gap-1.5 rounded-full bg-[#141210] px-4 py-2 text-xs uppercase tracking-widest text-[#f5efe2] hover:bg-[#b24224]">
            <Icon name="plus" className="h-3.5 w-3.5" /> Submit a profile
          </Link>
        </div>
        <div className="rule h-px" />
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-[#b24224]">A StoicSoft collective</p>
          <h1 className="font-display mt-4 text-[clamp(3rem,7vw,6rem)] leading-[0.96]">
            {hero.tagline.split("one profile")[0]}<br />
            <em className="italic text-[#b24224]">one profile at a time.</em>
          </h1>
          <p className="font-display mx-auto mt-6 max-w-2xl text-2xl italic text-[#3a3329]" dangerouslySetInnerHTML={{ __html: hero.description }} />

          <div className="mx-auto mt-10 max-w-xl">
            <div className="flex items-center gap-2 rounded-full border border-[#d5c9b0] bg-white px-4 py-3">
              <Icon name="search" className="h-4 w-4 text-[#6c6354]" />
              <input placeholder="Search by name, city, or practice..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#6c6354]/70" />
              <kbd className="hidden rounded bg-[#f5efe2] px-1.5 py-0.5 font-mono text-[10px] text-[#6c6354] md:inline">⌘K</kbd>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.v} className="rounded-2xl border border-[#d5c9b0] bg-white/50 p-5">
                <p className="font-display text-3xl">{s.k}</p>
                <p className="mt-1 text-xs text-[#6c6354]">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rule h-px mx-auto max-w-6xl" />
      </section>

      {/* Categories */}
      <section id="categories" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display italic text-sm text-[#6c6354]">Filter —</span>
            {[{ id: "all", label: "Everyone", count: hero.totalCount }, ...categories].map((c, i) => (
              <button key={c.id} className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                i === 0 ? "border-[#141210] bg-[#141210] text-[#f5efe2]" : "border-[#d5c9b0] bg-white/60 hover:border-[#141210]"
              }`}>
                {c.label}
                <span className={i === 0 ? "text-[#f5efe2]/60" : "text-[#6c6354]"}>{c.count}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="rule h-px mx-auto max-w-6xl" />
      </section>

      {/* Featured */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-xs uppercase tracking-[0.22em] text-[#b24224]">Currently featured</p>
          <h2 className="font-display mt-3 text-4xl">The people on this cover.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featured.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="group block">
                <div className={`relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br ${item.hue}`}>
                  <div className="absolute inset-0 paper-tex mix-blend-overlay opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent" />
                  <span className="font-display absolute bottom-4 left-4 text-6xl italic text-white/85">{item.name.split(" ").map((n) => n[0]).join("")}</span>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl italic">{item.name}</h3>
                    <span className="text-xs uppercase tracking-widest text-[#b24224]">Featured</span>
                  </div>
                  <p className="mt-1 text-sm text-[#3a3329]/85">{item.tagline}</p>
                  <p className="mt-3 text-sm text-[#3a3329]/80" dangerouslySetInnerHTML={{ __html: item.description }} />
                  <p className="mt-4 flex items-center gap-2 text-xs text-[#6c6354]">
                    <Icon name="pin" className="h-3.5 w-3.5" /> {item.location}
                    <span>·</span><span>{item.years}</span>
                    <span>·</span><span>{item.products}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="rule h-px mx-auto max-w-6xl" />
      </section>

      {/* Directory list */}
      <section id="directory" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-xs uppercase tracking-[0.22em] text-[#b24224]">All profiles · sorted by recency</p>
          <h2 className="font-display mt-3 text-4xl">Everyone on the roster.</h2>

          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {items.map((item) => (
              <li key={item.slug}>
                <Link href={`/${item.slug}`} className="card-hover group flex items-start gap-4 rounded-2xl border border-[#d5c9b0] bg-white/60 p-5">
                  <div className={`relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br ${item.hue}`}>
                    <span className="font-display text-xl italic text-white/90">{item.name.split(" ").map((n) => n[0]).join("")}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display truncate text-xl italic">{item.name}</h3>
                      {item.status && <span className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-widest ${
                        item.status === "Featured" ? "border-[#b24224]/30 bg-[#b24224]/10 text-[#b24224]" :
                        item.status === "New" ? "border-[#4a6135]/30 bg-[#4a6135]/10 text-[#4a6135]" :
                        "border-[#c69c3f]/30 bg-[#c69c3f]/10 text-[#c69c3f]"
                      }`}>{item.status}</span>}
                    </div>
                    <p className="mt-1 text-xs text-[#6c6354]">{item.tagline}</p>
                    <p className="mt-2 flex items-center gap-2 text-xs text-[#6c6354]">
                      <Icon name="pin" className="h-3 w-3" /> {item.location}
                      <span>·</span><span>{item.years}</span>
                    </p>
                  </div>
                  <Icon name="arrow-up" className="mt-2 h-4 w-4 text-[#6c6354] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#b24224]" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-[32px] bg-[#141210] p-10 text-[#f5efe2] md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#c69c3f]">Join the roster</p>
                <h2 className="font-display mt-3 text-5xl leading-[1.02]">Are you one of <em className="italic text-[#c69c3f]">ours?</em></h2>
                <p className="mt-4 max-w-lg text-[#f5efe2]/75">
                  We add profiles after a long lunch, a long email, or a long-running piece of work we&rsquo;ve seen up close. Submit a profile — we read everything.
                </p>
              </div>
              <Link href="/submit" className="inline-flex items-center justify-between rounded-2xl bg-[#c69c3f] px-6 py-4 text-sm font-semibold text-[#141210] hover:bg-[#b24224] hover:text-[#f5efe2]">
                <span className="font-display text-xl italic">Submit a profile</span>
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#d5c9b0]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs text-[#6c6354]">
          <span>© {new Date().getFullYear()} {hero.name} · A StoicSoft collective directory.</span>
          <span className="font-display italic">Set in Fraunces &amp; Inter</span>
        </div>
      </footer>
    </div>
  )
}
