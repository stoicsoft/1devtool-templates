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

export default async function ItemPage({ params }) {
  const { slug } = await params
  const item = getItemBySlug(slug)
  if (!item) notFound()
  const related = getRelated(slug, 3)
  const hero = getHero()

  return (
    <div className="relative bg-[#f5efe2] text-[#141210]">
      <div className="pointer-events-none fixed inset-0 paper-tex opacity-40" />

      <header className="relative z-20 border-b border-[#d5c9b0]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#6c6354]">
          <Link href="/" className="hover:text-[#b24224]">← {hero.name}</Link>
          <span className="italic normal-case tracking-normal text-[#141210]">Profile</span>
          <Link href="/submit" className="hover:text-[#b24224]">Submit →</Link>
        </div>
        <div className="rule h-px" />
      </header>

      <article className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-[260px_1fr]">
            <div>
              <div className={`aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br ${item.hue}`}>
                <div className="paper-tex h-full w-full mix-blend-overlay opacity-40" />
              </div>
              <dl className="mt-6 space-y-3 rounded-2xl border border-[#d5c9b0] bg-white/50 p-5 text-sm">
                <div className="flex justify-between"><dt className="text-[#6c6354] uppercase tracking-widest text-[10px]">Based</dt><dd>{item.location}</dd></div>
                <div className="flex justify-between"><dt className="text-[#6c6354] uppercase tracking-widest text-[10px]">Building</dt><dd>{item.years}</dd></div>
                <div className="flex justify-between"><dt className="text-[#6c6354] uppercase tracking-widest text-[10px]">Ships</dt><dd>{item.products}</dd></div>
                <div className="flex justify-between"><dt className="text-[#6c6354] uppercase tracking-widest text-[10px]">Focus</dt><dd className="capitalize">{item.category}</dd></div>
              </dl>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#b24224]">{item.category}</p>
              <h1 className="font-display mt-3 text-[clamp(2.4rem,5vw,4.5rem)] italic leading-[1.02]">{item.name}</h1>
              <p className="font-display mt-4 text-2xl italic text-[#3a3329]">{item.tagline}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((t) => (<span key={t} className="rounded-full border border-[#d5c9b0] bg-white/60 px-3 py-1 text-xs">#{t}</span>))}
              </div>

              <div className="rule mt-10 h-px" />

              <h2 className="font-display mt-10 text-2xl italic">About</h2>
              <p className="font-display mt-3 text-lg leading-relaxed text-[#2a2821]" dangerouslySetInnerHTML={{ __html: item.description }} />
              <p className="mt-5 text-[#2a2821]/85 leading-relaxed">
                {item.name.split(" ")[0]} is part of the rotating cast around the StoicSoft studio. Most weeks you&rsquo;ll find them at the long table, sometimes remotely, sometimes in Lisbon — working on products that end up listed in our other directories.
              </p>

              {item.pick && (
                <div className="mt-8 rounded-2xl border border-[#b24224]/20 bg-[#b24224]/5 p-5">
                  <p className="text-xs uppercase tracking-widest text-[#b24224]">Role</p>
                  <p className="font-display mt-1 text-xl italic">{item.pick}</p>
                </div>
              )}

              <h2 className="font-display mt-10 text-2xl italic">Where else to find them</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {["Website", "Mastodon", "GitHub", "Email"].map((l) => (
                  <li key={l}>
                    <a href="#" className="flex items-center justify-between rounded-xl border border-[#d5c9b0] bg-white/50 px-4 py-3 text-sm hover:border-[#b24224]">
                      <span>{l}</span><span className="text-[#6c6354]">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="relative z-10 border-t border-[#d5c9b0]">
          <div className="mx-auto max-w-4xl px-6 py-10">
            <h2 className="font-display text-2xl italic">More from {item.category}</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${r.slug}`} className="card-hover block rounded-2xl border border-[#d5c9b0] bg-white/50 p-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 shrink-0 rounded-full bg-gradient-to-br ${r.hue}`} />
                      <div>
                        <p className="font-display italic">{r.name}</p>
                        <p className="text-xs text-[#6c6354]">{r.tagline}</p>
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
