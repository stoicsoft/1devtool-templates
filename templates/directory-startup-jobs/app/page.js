import Link from "next/link"
import { getAllItems, getCategories, getHero, getStats } from "../lib/items"

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "pin") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="10" r="3"/><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/></svg>)
  if (name === "money") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="M9 9c0-1 1-2 3-2s3 1 3 2-1 1.5-3 2-3 1-3 2 1 2 3 2 3-1 3-2M12 6v12"/></svg>)
  if (name === "users") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5M15 20c0-2 2-4 4-4"/></svg>)
  if (name === "remote") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  return null
}

const statusColor = (s) => s === "Featured" ? "border-indigo-400/40 bg-indigo-50 text-indigo-600" : s === "New" ? "border-emerald-400/40 bg-emerald-50 text-emerald-600" : "border-amber-400/40 bg-amber-50 text-amber-700"

export default function Home() {
  const hero = getHero()
  const items = getAllItems()
  const categories = getCategories()
  const stats = getStats()

  return (
    <div className="relative bg-[#f6f7f9] text-[#0c0f17]">
      <div className="pointer-events-none fixed inset-0 bg-aurora" />

      <header className="relative z-20 border-b border-black/5 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-500 text-white">R</span>
            {hero.name}
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-black/70 md:flex">
            <Link href="/" className="hover:text-indigo-600">Jobs</Link>
            <a href="#categories" className="hover:text-indigo-600">Categories</a>
            <Link href="/about" className="hover:text-indigo-600">About</Link>
            <Link href="/submit" className="hover:text-indigo-600">Post a job</Link>
          </nav>
          <Link href="/submit" className="group inline-flex items-center gap-1.5 rounded-lg bg-[#0c0f17] px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-600">
            <Icon name="plus" className="h-4 w-4" /> Post a role
          </Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 text-center md:pt-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {hero.totalCount} open roles · refreshed every Friday
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight">
            Engineering jobs at <span className="bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">indie-scale</span> companies.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-black/65" dangerouslySetInnerHTML={{ __html: hero.description }} />

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="grid items-center gap-2 rounded-2xl border border-black/10 bg-white p-3 shadow-sm md:grid-cols-[1fr_auto_auto]">
              <div className="flex items-center gap-2 px-2">
                <Icon name="search" className="h-4 w-4 text-black/50" />
                <input placeholder="Search by role, company, stack..." className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-black/40" />
              </div>
              <select className="rounded-lg bg-black/5 px-3 py-2 text-sm">
                <option>Any location</option><option>Remote · EU</option><option>Remote · US</option><option>Lisbon</option>
              </select>
              <button className="rounded-lg bg-[#0c0f17] px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600">Search</button>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.v} className="rounded-2xl border border-black/5 bg-white p-5 text-left">
                <p className="text-2xl font-bold">{s.k}</p>
                <p className="mt-1 text-xs text-black/55">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-black/50">Filter</span>
            {[{ id: "all", label: "All", count: hero.totalCount }, ...categories].map((c, i) => (
              <button key={c.id} className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                i === 0 ? "border-indigo-600 bg-indigo-600 text-white" : "border-black/10 bg-white hover:border-indigo-400"
              }`}>
                <span dangerouslySetInnerHTML={{ __html: c.label }} />
                <span className={i === 0 ? "text-white/70" : "text-black/45"}>{c.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.slug}>
                <Link href={`/${item.slug}`} className="card-hover group block rounded-2xl border border-black/8 bg-white p-5 md:p-6">
                  <div className="flex flex-wrap items-start gap-5">
                    <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${item.hue} text-xl font-bold text-white`}>
                      {item.company[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold transition group-hover:text-indigo-600">{item.name}</h3>
                        {item.status && <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${statusColor(item.status)}`}>{item.status}</span>}
                      </div>
                      <p className="mt-1 text-sm text-black/60">
                        <span className="font-semibold text-black/80">{item.company}</span> · {item.tagline.replace("&amp;", "&")}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-black/60">
                        <span className="flex items-center gap-1.5"><Icon name="money" className="h-3.5 w-3.5 text-emerald-600" /> {item.salary}</span>
                        <span className="flex items-center gap-1.5"><Icon name="pin" className="h-3.5 w-3.5" /> {item.location}</span>
                        <span className="flex items-center gap-1.5"><Icon name="users" className="h-3.5 w-3.5" /> {item.team}</span>
                        <span className="flex items-center gap-1.5"><Icon name="remote" className="h-3.5 w-3.5" /> {item.remote}</span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tags.map((t) => (
                          <span key={t} className="font-mono rounded-md bg-black/5 px-2 py-0.5 text-[10px] text-black/65">#{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="rounded-md bg-indigo-600/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-indigo-700">{item.type}</span>
                      <p className="mt-2 text-xs text-black/55">{item.equity} equity</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-emerald-500 p-10 text-white md:p-14">
            <div className="grid items-center gap-6 md:grid-cols-[1.5fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/80">Hiring?</p>
                <h2 className="mt-3 text-4xl font-bold">Post a role for $80, flat.</h2>
                <p className="mt-3 max-w-lg text-white/85">No subscriptions. Live for 30 days. Real human review before it goes up. Free for nonprofits.</p>
              </div>
              <Link href="/submit" className="inline-flex items-center justify-between rounded-2xl bg-[#0c0f17] px-6 py-4 text-sm font-semibold text-white hover:bg-black">
                <span className="text-lg">Post a role</span>
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-black/8 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs text-black/55">
          <span>© {new Date().getFullYear()} {hero.name} · A StoicSoft job board.</span>
          <div className="flex gap-5">
            <Link href="/about" className="hover:text-indigo-600">About</Link>
            <Link href="/submit" className="hover:text-indigo-600">Post a role</Link>
            <a href="#" className="hover:text-indigo-600">RSS</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
