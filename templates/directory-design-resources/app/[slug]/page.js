import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllItems, getItemBySlug, getRelated, getHero } from "../../lib/items"

export function generateStaticParams() {
  return getAllItems().map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const item = getItemBySlug(slug)
  if (!item) return { title: "Not found" }
  return { title: `${item.name} — ${getHero().name}`, description: item.tagline }
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
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
    <div className="relative bg-[#fbfaf7] text-[#16141f]">
      <div className="pointer-events-none fixed inset-0 shelf-bg" />

      <header className="relative z-20 border-b border-black/5 bg-[#fbfaf7]/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-display text-xl italic">{hero.name}</Link>
          <Link href="/" className="text-sm text-black/70 hover:text-orange-600">← Shelf</Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="text-xs text-black/50">
            <Link href="/" className="hover:text-orange-600">Shelf</Link>
            <span className="mx-2">/</span>
            <span className="capitalize">{item.category}</span>
          </div>

          <div className={`mt-6 relative aspect-[3/1] overflow-hidden rounded-3xl bg-gradient-to-br ${item.hue}`}>
            <div className="absolute inset-8 flex items-end justify-between">
              <div className="text-white">
                <span className="font-mono text-xs uppercase tracking-[0.22em]">{item.category}</span>
                <h1 className="font-display mt-3 text-5xl italic md:text-7xl">{item.name}</h1>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="font-display text-2xl italic text-black/75">{item.tagline.replace("&amp;", "&")}</p>
              <p className="mt-5 text-lg leading-relaxed text-black/80" dangerouslySetInnerHTML={{ __html: item.description }} />

              <h2 className="mt-10 font-display text-2xl italic">Why we pinned it</h2>
              <p className="mt-3 text-black/75 leading-relaxed">
                {item.name} sits on our shelf because it has survived the test of a live product. It&rsquo;s the kind of resource we reach for without thinking — which is the highest compliment we know how to pay a design object.
              </p>

              <h2 className="mt-8 font-display text-2xl italic">Where we use it</h2>
              <ul className="mt-3 list-disc pl-5 text-black/75 space-y-1">
                <li>In the StoicSoft landing surfaces and documentation.</li>
                <li>Across the {item.used} where it earns its place.</li>
                <li>Mentioned in our design journal when it does something new.</li>
              </ul>
            </div>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-black/10 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-orange-600">License &amp; cost</p>
                <p className="mt-2 text-2xl font-bold">{item.pricing}</p>

                <dl className="mt-5 space-y-3 border-t border-black/5 pt-4 text-xs">
                  <div className="flex justify-between"><dt className="text-black/50">Category</dt><dd className="capitalize">{item.category}</dd></div>
                  <div className="flex justify-between"><dt className="text-black/50">Source</dt><dd>{item.source}</dd></div>
                  <div className="flex justify-between"><dt className="text-black/50">Used in</dt><dd>{item.used}</dd></div>
                </dl>
                <a href="#" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#16141f] px-4 py-3 text-sm font-semibold text-white hover:bg-orange-600">
                  Open source <Icon name="external" className="h-4 w-4" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative z-10 border-t border-black/5">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="font-display text-3xl italic">More {item.category}</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${r.slug}`} className="card-hover block overflow-hidden rounded-2xl border border-black/10 bg-white">
                    <div className={`aspect-[5/3] bg-gradient-to-br ${r.hue} grid place-items-center`}>
                      <span className="font-display text-2xl italic text-white/90">{r.name}</span>
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold">{r.name}</p>
                      <p className="mt-1 text-xs text-black/55">{r.tagline.replace("&amp;", "&")}</p>
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
