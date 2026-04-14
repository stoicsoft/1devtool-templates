import Link from "next/link"
import { getAllItems, getCategories, getHero, getStats } from "../lib/items"

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "sparkle") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="m12 2 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "x") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M6 6l12 12M6 18L18 6"/></svg>)
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
    <div className="relative bg-[#080812] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[800px] aurora-purple" />
      <div className="pointer-events-none fixed inset-0 dotgrid opacity-70" />

      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-[#080812]">
              <Icon name="sparkle" className="h-4 w-4" />
            </span>
            {hero.name}
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            <Link href="/" className="hover:text-white">Atlas</Link>
            <a href="#categories" className="hover:text-white">Categories</a>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/submit" className="hover:text-white">Submit</Link>
          </nav>
          <Link href="/submit" className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-[#080812] hover:opacity-90">
            <Icon name="plus" className="h-4 w-4" /> Submit a tool
          </Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-10 text-center md:pt-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
            {hero.totalCount} tools · hand-rated by operators
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-[clamp(2.6rem,6.5vw,5.5rem)] font-semibold leading-[1.02] tracking-tight">
            An honest map of the AI tools{" "}
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">you can actually ship.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70" dangerouslySetInnerHTML={{ __html: hero.description }} />

          <div className="mx-auto mt-10 max-w-2xl">
            <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-3 shadow-[0_30px_80px_-40px_rgba(168,85,247,0.5)] backdrop-blur">
              <Icon name="search" className="h-4 w-4 text-white/45" />
              <input placeholder="Search by name, category, or task..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/40" />
              <kbd className="hidden rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-white/60 md:inline">⌘K</kbd>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-10">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.v} className="border-l-2 border-violet-400/40 pl-4">
                <p className="text-3xl font-semibold">{s.k}</p>
                <p className="mt-1 text-xs text-white/55">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-6">
          <p className="text-xs uppercase tracking-[0.22em] text-violet-300">Categories</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[{ id: "all", label: "All tools", count: hero.totalCount }, ...categories].map((c, i) => (
              <button key={c.id} className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                i === 0 ? "border-violet-400 bg-gradient-to-r from-violet-500 to-cyan-400 text-[#080812]" : "border-white/10 bg-white/[0.03] hover:border-violet-400/60"
              }`}>
                <span dangerouslySetInnerHTML={{ __html: c.label }} />
                <span className={i === 0 ? "text-[#080812]/70" : "text-white/45"}>{c.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-xs uppercase tracking-[0.22em] text-fuchsia-300">Featured · StoicSoft AI</p>
          <h2 className="mt-2 text-3xl font-semibold">Our own tools, openly rated.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featured.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="card-hover group relative block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-7">
                <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${item.hue} opacity-30 blur-3xl transition group-hover:opacity-60`} />
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${item.hue}`}>
                      <Icon name="sparkle" className="h-6 w-6 text-[#080812]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-violet-200">Featured</span>
                      </div>
                      <p className="mt-1 text-sm text-white/65">{item.tagline.replace("&amp;", "&")}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-white/80" dangerouslySetInnerHTML={{ __html: item.description }} />
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-emerald-300"><Icon name="check" className="h-3 w-3" /> Strength</p>
                      <p className="mt-1 text-sm">{item.strength}</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-rose-300"><Icon name="x" className="h-3 w-3" /> Weakness</p>
                      <p className="mt-1 text-sm">{item.weakness}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4 text-xs">
                    <span className="font-mono text-white/55">{item.model}</span>
                    <span className="font-semibold text-cyan-300">{item.pricing}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-xs uppercase tracking-[0.22em] text-violet-300">All tools</p>
          <h2 className="mt-2 text-3xl font-semibold">{items.length} mapped on the atlas</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="card-hover group block rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                <div className="flex items-start gap-3">
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${item.hue}`}>
                    <Icon name="sparkle" className="h-5 w-5 text-[#080812]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="truncate font-semibold transition group-hover:text-violet-200">{item.name}</h3>
                      {item.status && <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase ${
                        item.status === "New" ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300" :
                        "border-amber-400/30 bg-amber-400/10 text-amber-300"
                      }`}>{item.status}</span>}
                    </div>
                    <p className="mt-0.5 text-xs text-white/55">{item.tagline.replaceAll("&amp;", "&").replaceAll("&apos;", "&rsquo;").replaceAll("&rsquo;", "'")}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/70" dangerouslySetInnerHTML={{ __html: item.description }} />
                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-xs text-white/55">
                  <span className="font-mono">{item.model}</span>
                  <span className="font-semibold text-cyan-300">{item.pricing}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 p-10 md:p-14"
               style={{ background: "radial-gradient(700px circle at 15% 0%, rgba(168,85,247,0.3), transparent 55%), radial-gradient(700px circle at 85% 100%, rgba(6,182,212,0.25), transparent 55%), #0a0a14" }}>
            <div className="grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-violet-200">Submit</p>
                <h2 className="mt-3 text-4xl font-semibold leading-[1.05]">
                  Shipped an AI tool <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">that earns its token cost?</span>
                </h2>
                <p className="mt-3 max-w-lg text-white/75">
                  We&rsquo;ll run it for four weeks in a real product, write an honest review, and list it if it survives.
                </p>
              </div>
              <Link href="/submit" className="inline-flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-4 text-sm font-semibold text-[#080812] hover:opacity-90">
                <span className="text-lg">Submit a tool</span>
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs text-white/50">
          <span>© {new Date().getFullYear()} {hero.name} · A StoicSoft AI atlas.</span>
          <div className="flex gap-5">
            <Link href="/about" className="hover:text-violet-300">About</Link>
            <Link href="/submit" className="hover:text-violet-300">Submit</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
