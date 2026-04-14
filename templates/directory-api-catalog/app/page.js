import Link from "next/link"
import { getAllItems, getCategories, getHero, getStats } from "../lib/items"

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "api") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M7 11h.01M7 13h.01M11 11h3M11 13h6"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  return null
}

const methodColor = (s) => s.startsWith("GET") ? "text-emerald-400" : s.startsWith("POST") ? "text-amber-400" : s.startsWith("PUT") ? "text-sky-400" : s.startsWith("DELETE") ? "text-rose-400" : "text-violet-400"

export default function Home() {
  const hero = getHero()
  const items = getAllItems()
  const categories = getCategories()
  const stats = getStats()
  const featured = items.filter((i) => i.status === "Featured")

  return (
    <div className="relative bg-[#05070d] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[700px] api-glow" />
      <div className="pointer-events-none fixed inset-0 grid-lines" />

      <header className="relative z-20 border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-mono text-sm font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#7dd3fc] to-[#4c8dff] text-[#05070d]">
              <Icon name="api" className="h-4 w-4" />
            </span>
            {hero.name}
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            <Link href="/" className="hover:text-[#7dd3fc]">Catalog</Link>
            <a href="#categories" className="hover:text-[#7dd3fc]">Categories</a>
            <Link href="/about" className="hover:text-[#7dd3fc]">About</Link>
            <Link href="/submit" className="hover:text-[#7dd3fc]">Submit</Link>
          </nav>
          <Link href="/submit" className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#7dd3fc] to-[#4c8dff] px-4 py-2 text-sm font-semibold text-[#05070d] hover:opacity-90">
            <Icon name="plus" className="h-4 w-4" /> Submit an API
          </Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-14 pb-10 md:pt-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7dd3fc]" />
            {hero.totalCount} APIs · reviewed by StoicSoft engineers
          </span>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[1.05] tracking-tight">
            A catalog of APIs{" "}
            <span className="bg-gradient-to-r from-[#7dd3fc] to-[#4c8dff] bg-clip-text text-transparent">we actually integrate.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70" dangerouslySetInnerHTML={{ __html: hero.description }} />

          <div className="mt-10 grid gap-6 md:grid-cols-[1.4fr_1fr]">
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0a0e1a] px-4 py-3">
              <Icon name="search" className="h-4 w-4 text-white/50" />
              <input placeholder="Search by name, category, or endpoint..." className="flex-1 bg-transparent font-mono text-sm outline-none placeholder:text-white/40" />
              <kbd className="hidden rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-white/60 md:inline">⌘K</kbd>
            </div>
            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
              {stats.map((s) => (
                <div key={s.v} className="rounded-xl border border-white/10 bg-[#0a0e1a] px-4 py-2">
                  <p className="text-xl font-semibold">{s.k}</p>
                  <p className="text-white/55">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {[{ id: "all", label: "All endpoints", count: hero.totalCount }, ...categories].map((c, i) => (
              <button key={c.id} className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 font-mono text-xs font-medium transition ${
                i === 0 ? "border-[#7dd3fc] bg-[#7dd3fc] text-[#05070d]" : "border-white/10 bg-white/[0.02] hover:border-[#7dd3fc]/60"
              }`}>
                <span dangerouslySetInnerHTML={{ __html: c.label }} />
                <span className={i === 0 ? "text-[#05070d]/70" : "text-white/40"}>{c.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <p className="font-mono text-xs uppercase tracking-widest text-[#7dd3fc]">Featured · StoicSoft APIs</p>
          <h2 className="mt-2 text-3xl font-semibold">The APIs our own products expose.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {featured.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="card-hover group block overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e1a]">
                <div className="border-b border-white/5 px-5 py-3 font-mono text-xs">
                  <span className={`${methodColor(item.sample)} font-semibold`}>{item.sample.split(" ")[0]}</span>
                  <span className="ml-2 text-white/60">{item.sample.split(" ").slice(1).join(" ")}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${item.hue}`}>
                      <Icon name="api" className="h-5 w-5 text-[#05070d]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold group-hover:text-[#7dd3fc]">{item.name}</h3>
                        <span className="rounded-md border border-[#7dd3fc]/30 bg-[#7dd3fc]/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#7dd3fc]">Featured</span>
                      </div>
                      <p className="mt-1 text-xs text-white/60">{item.tagline}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/75" dangerouslySetInnerHTML={{ __html: item.description }} />
                  <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/5 pt-4 font-mono text-[11px] text-white/60">
                    <div><p className="text-white/40">Auth</p><p className="mt-0.5">{item.auth}</p></div>
                    <div><p className="text-white/40">Rate</p><p className="mt-0.5">{item.rate}</p></div>
                    <div><p className="text-white/40">Pricing</p><p className="mt-0.5 text-[#7dd3fc]">{item.pricing}</p></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#7dd3fc]">All endpoints</p>
              <h2 className="mt-2 text-3xl font-semibold">{items.length} in the catalog</h2>
            </div>
            <span className="font-mono text-xs text-white/50">sorted by integration count</span>
          </div>

          <ul className="mt-8 divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e1a]">
            {items.map((item) => (
              <li key={item.slug}>
                <Link href={`/${item.slug}`} className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4 transition hover:bg-white/[0.03] md:grid-cols-[auto_1.4fr_1fr_auto]">
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${item.hue}`}>
                    <Icon name="api" className="h-4 w-4 text-[#05070d]" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate font-medium transition group-hover:text-[#7dd3fc]">{item.name}</h3>
                      {item.status === "New" && <span className="rounded-md border border-emerald-400/40 bg-emerald-400/10 px-1.5 py-0.5 font-mono text-[10px] text-emerald-300">New</span>}
                      {item.status === "Popular" && <span className="rounded-md border border-amber-400/40 bg-amber-400/10 px-1.5 py-0.5 font-mono text-[10px] text-amber-300">Popular</span>}
                    </div>
                    <p className="mt-0.5 truncate font-mono text-xs text-white/55">
                      <span className={methodColor(item.sample)}>{item.sample.split(" ")[0]}</span> {item.sample.split(" ").slice(1).join(" ")}
                    </p>
                  </div>
                  <div className="hidden items-center gap-3 font-mono text-xs text-white/60 md:flex">
                    <span className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5">{item.auth}</span>
                    <span>{item.rate}</span>
                    <span className="text-[#7dd3fc]">{item.pricing}</span>
                  </div>
                  <Icon name="arrow" className="h-4 w-4 text-white/40 transition group-hover:translate-x-1 group-hover:text-[#7dd3fc]" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-3xl border border-white/10 p-10 md:p-14"
               style={{ background: "radial-gradient(700px circle at 15% 0%, rgba(125,211,252,0.24), transparent 55%), radial-gradient(700px circle at 85% 100%, rgba(76,141,255,0.2), transparent 55%), #0a0e1a" }}>
            <div className="grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#7dd3fc]">Submit</p>
                <h2 className="mt-3 text-4xl font-semibold leading-[1.05]">
                  Shipped an API <span className="text-[#7dd3fc]">worth integrating?</span>
                </h2>
                <p className="mt-3 max-w-lg text-white/70">
                  We add APIs our engineers have actually integrated. Submit yours and we&rsquo;ll try it in a real project this quarter.
                </p>
              </div>
              <Link href="/submit" className="inline-flex items-center justify-between gap-3 rounded-2xl bg-[#7dd3fc] px-6 py-4 font-mono text-sm font-semibold text-[#05070d] hover:bg-white">
                <span className="text-lg">Submit an API</span>
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-8 font-mono text-xs text-white/50">
          <span>© {new Date().getFullYear()} {hero.name} · A StoicSoft API catalog.</span>
          <div className="flex gap-5">
            <Link href="/about" className="hover:text-[#7dd3fc]">about</Link>
            <Link href="/submit" className="hover:text-[#7dd3fc]">submit</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
