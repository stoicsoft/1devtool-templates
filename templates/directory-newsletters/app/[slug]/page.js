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
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>)
  if (name === "rss") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1.4"/></svg>)
  if (name === "external") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M10 4H4v16h16v-6M14 4h6v6M10 14 20 4"/></svg>)
  return null
}

export default async function ItemPage({ params }) {
  const { slug } = await params
  const item = getItemBySlug(slug)
  if (!item) notFound()
  const related = getRelated(slug, 3)
  const hero = getHero()

  return (
    <div className="relative bg-[#f7f1e3] text-[#131110]">
      <div className="pointer-events-none fixed inset-0 paper-tex opacity-40" />

      <header className="relative z-20 border-b border-[#d8cdb6]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#75695a]">
          <Link href="/" className="hover:text-[#a04023]">← {hero.name}</Link>
          <span className="font-serif italic normal-case tracking-normal text-[#131110]">{item.category}</span>
          <Link href="/submit" className="hover:text-[#a04023]">Submit →</Link>
        </div>
        <div className="rule h-px" />
      </header>

      <article className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <div className={`aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br ${item.hue}`}>
                <div className="paper-tex h-full w-full mix-blend-overlay opacity-40" />
              </div>
              <p className="mt-4 text-center font-serif text-xl italic">{item.name}</p>
              <p className="text-center text-xs text-[#75695a]">{item.cadence.replace("&apos;", "'")}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#a04023]">Newsletter</p>
              <h1 className="font-serif mt-3 text-[clamp(2.4rem,5.5vw,4.5rem)] italic leading-[1.02]">{item.name}</h1>
              <p className="font-serif mt-4 text-2xl italic text-[#2c2622]">{item.tagline.replace("&amp;", "&")}</p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#75695a]">
                <span className="rounded-full border border-[#d8cdb6] bg-white/60 px-3 py-1">{item.cadence.replace("&apos;", "'")}</span>
                <span>{item.readers} subscribers</span>
                <span>since {item.since}</span>
                <span className="font-semibold text-[#a04023]">{item.pricing}</span>
              </div>

              <div className="rule mt-10 h-px" />

              <p className="font-serif mt-8 text-lg leading-relaxed text-[#2c2622]" dangerouslySetInnerHTML={{ __html: item.description }} />
              <p className="mt-4 text-[#2c2622]/85 leading-relaxed">
                {item.name} sits on our newsstand because we&rsquo;ve read a dozen issues and kept coming back. Every title here clears the same bar — we&rsquo;d send it to a friend.
              </p>

              <h2 className="font-serif mt-10 text-2xl italic">How to subscribe</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <a href="#" className="flex items-center gap-2 rounded-xl border border-[#d8cdb6] bg-white/60 p-4 text-sm hover:border-[#a04023]"><Icon name="mail" className="h-4 w-4 text-[#a04023]" /> Email</a>
                <a href="#" className="flex items-center gap-2 rounded-xl border border-[#d8cdb6] bg-white/60 p-4 text-sm hover:border-[#a04023]"><Icon name="rss" className="h-4 w-4 text-[#a04023]" /> RSS</a>
                <a href="#" className="flex items-center gap-2 rounded-xl border border-[#d8cdb6] bg-white/60 p-4 text-sm hover:border-[#a04023]"><Icon name="external" className="h-4 w-4 text-[#a04023]" /> Site</a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="relative z-10 border-t border-[#d8cdb6]">
          <div className="mx-auto max-w-4xl px-6 py-12">
            <h2 className="font-serif text-2xl italic">More {item.category}</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${r.slug}`} className="card-hover block rounded-2xl border border-[#d8cdb6] bg-white/60 p-5">
                    <div className={`h-12 w-full rounded-lg bg-gradient-to-br ${r.hue} mb-3`} />
                    <p className="font-serif text-lg italic">{r.name}</p>
                    <p className="mt-1 text-xs text-[#75695a]">{r.cadence.replace("&apos;", "'")}</p>
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
