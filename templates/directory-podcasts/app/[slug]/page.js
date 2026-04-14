import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllItems, getItemBySlug, getRelated, getHero } from "../../lib/items"

export function generateStaticParams() { return getAllItems().map((i) => ({ slug: i.slug })) }

export async function generateMetadata({ params }) {
  const { slug } = await params
  const item = getItemBySlug(slug)
  if (!item) return { title: "Not found" }
  return { title: `${item.name} — ${getHero().name}`, description: item.tagline }
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "play") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="M7 4v16l14-8z"/></svg>)
  if (name === "rss") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1.4"/></svg>)
  if (name === "headphones") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 12a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-2v-8h4M3 12v7a2 2 0 0 0 2 2h2v-8H3"/></svg>)
  return null
}

export default async function ItemPage({ params }) {
  const { slug } = await params
  const item = getItemBySlug(slug)
  if (!item) notFound()
  const related = getRelated(slug, 3)
  const hero = getHero()

  return (
    <div className="relative bg-[#07060a] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[500px] aura-podcast" />
      <div className="pointer-events-none fixed inset-0 dotgrid opacity-60" />

      <header className="relative z-20 border-b border-white/5">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#8b6fff] to-[#ff5ab7] text-white">♪</span>
            {hero.name}
          </Link>
          <Link href="/" className="text-sm text-white/70 hover:text-[#e7ff7b]">← Rotation</Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="grid gap-10 md:grid-cols-[240px_1fr]">
            <div>
              <div className={`aspect-square overflow-hidden rounded-3xl bg-gradient-to-br ${item.hue} shadow-[0_40px_80px_-30px_rgba(139,111,255,0.5)]`}>
                <div className="grid h-full place-items-center">
                  <span className="font-serif text-8xl italic text-white/95">{item.name[0]}</span>
                </div>
              </div>
              <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#e7ff7b] px-4 py-3 font-semibold text-[#07060a] hover:bg-white">
                <Icon name="play" className="h-5 w-5" /> Play latest
              </button>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <a href="#" className="flex items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 hover:border-[#e7ff7b]"><Icon name="rss" className="h-3.5 w-3.5" /> RSS</a>
                <a href="#" className="flex items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 hover:border-[#e7ff7b]"><Icon name="headphones" className="h-3.5 w-3.5" /> Apple</a>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#e7ff7b]">{item.category.replace("-", " ")}</p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">{item.name.replaceAll("&amp;", "&")}</h1>
              <p className="font-serif mt-3 text-xl italic text-white/80">{item.tagline.replaceAll("&amp;", "&").replaceAll("&apos;", "&rsquo;")}</p>

              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 font-mono text-xs">
                <div><p className="text-white/45 uppercase tracking-widest">Cadence</p><p className="mt-1">{item.cadence.replace("&apos;", "'")}</p></div>
                <div><p className="text-white/45 uppercase tracking-widest">Length</p><p className="mt-1">{item.length}</p></div>
                <div><p className="text-white/45 uppercase tracking-widest">Episodes</p><p className="mt-1">{item.episodes}</p></div>
                <div><p className="text-white/45 uppercase tracking-widest">Since</p><p className="mt-1">{item.since}</p></div>
              </div>

              <h2 className="mt-10 text-xl font-semibold">About the show</h2>
              <p className="mt-3 text-base leading-relaxed text-white/80" dangerouslySetInnerHTML={{ __html: item.description }} />
              <p className="mt-4 text-white/75 leading-relaxed">
                We keep {item.name.split(" ")[0]} in rotation because the host does the thing we care about most — they prepare. Episodes here have structure, stakes, and at least one idea you&rsquo;ll text a friend about.
              </p>

              <h2 className="mt-10 text-xl font-semibold">Start with</h2>
              <ul className="mt-4 space-y-3">
                {[1, 2, 3].map((n) => (
                  <li key={n} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <span className="font-mono text-xs text-[#e7ff7b]">EP {String(item.episodes - n * 3).padStart(3, "0")}</span>
                    <div>
                      <p className="text-sm font-medium">Recommended starter · part {n}</p>
                      <p className="mt-0.5 text-xs text-white/60">A good entry point that gives you the voice of the show without needing backstory.</p>
                    </div>
                    <button className="ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-white/70 hover:border-[#e7ff7b] hover:bg-[#e7ff7b] hover:text-[#07060a]">
                      <Icon name="play" className="h-3.5 w-3.5" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative z-10 border-t border-white/5">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-xl font-semibold">More {item.category.replace("-", " ")} shows</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${r.slug}`} className="card-hover block rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-start gap-3">
                      <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${r.hue}`}>
                        <span className="font-serif text-xl italic text-white">{r.name[0]}</span>
                      </div>
                      <div>
                        <p className="font-semibold">{r.name.replaceAll("&amp;", "&")}</p>
                        <p className="mt-1 text-xs text-white/60">{r.cadence.replace("&apos;", "'")} · {r.length}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  )
}
