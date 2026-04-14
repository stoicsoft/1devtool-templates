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
  if (name === "external") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M10 4H4v16h16v-6M14 4h6v6M10 14 20 4"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>)
  return null
}

export default async function ItemPage({ params }) {
  const { slug } = await params
  const item = getItemBySlug(slug)
  if (!item) notFound()
  const related = getRelated(slug, 3)
  const hero = getHero()

  return (
    <div className="relative bg-[#0d1426] text-[#f3ede0]">
      <header className="relative z-20">
        <div className="deco h-px" />
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-sm border border-[#c4a059]/40 font-serif text-lg italic text-[#c4a059]">A</span>
            <span className="font-serif text-xl italic">{hero.name}</span>
          </Link>
          <Link href="/" className="text-sm text-[#e8dfc8]/80 hover:text-[#c4a059]">← All studios</Link>
        </div>
        <div className="deco h-px" />
      </header>

      <article className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <p className="text-xs uppercase tracking-[0.28em] text-[#c4a059]">{item.category.replace("-", " ")}</p>
          <h1 className="font-serif mt-3 text-[clamp(2.6rem,6vw,5rem)] italic leading-[1.02]">{item.name.replace("&amp;", "&")}</h1>
          <p className="font-serif mt-3 text-2xl italic text-[#e8dfc8]/85">{item.tagline.replace("&amp;", "&")}</p>

          <div className="deco mt-10 h-px" />

          <div className="mt-10 grid gap-12 md:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="font-serif text-2xl italic">About the studio</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#e8dfc8]/85" dangerouslySetInnerHTML={{ __html: item.description }} />
              <p className="mt-4 text-[#e8dfc8]/80 leading-relaxed">
                The reason {item.name.split(" ")[0]} is on this directory is simple: we&rsquo;ve worked with them, paid them on time, and would do it again. They show up on this list because we recommend them in private, not because they paid for the placement.
              </p>

              <h2 className="font-serif mt-12 text-2xl italic">How to engage</h2>
              <ol className="mt-4 space-y-3 text-[#e8dfc8]/85">
                {[
                  "Email them directly — first contact in plain English, no RFP form needed.",
                  "Expect a 30-minute call with the partner you&rsquo;d work with day to day.",
                  "Most projects start with a small paid scoping engagement, then a clear statement of work.",
                  "If you mention you found them via Atelier, they&rsquo;ll know we&rsquo;ve already vouched.",
                ].map((line, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-serif grid h-7 w-7 shrink-0 place-items-center rounded-sm border border-[#c4a059]/40 text-sm italic text-[#c4a059]">{i + 1}</span>
                    <span dangerouslySetInnerHTML={{ __html: line.replaceAll("&apos;", "&rsquo;") }} />
                  </li>
                ))}
              </ol>
            </div>

            <aside className="space-y-4">
              <div className="rounded-sm border border-[#2a3758] bg-[#14203a] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[#c4a059]">Engagement</p>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between"><dt className="text-[#8d9bb5]">Rate</dt><dd className="text-right">{item.rate.replace("&amp;", "&")}</dd></div>
                  <div className="flex justify-between"><dt className="text-[#8d9bb5]">Team size</dt><dd>{item.size}</dd></div>
                  <div className="flex justify-between"><dt className="text-[#8d9bb5]">Founded</dt><dd>{item.founded}</dd></div>
                  <div className="flex justify-between"><dt className="text-[#8d9bb5]">Based in</dt><dd>{item.location}</dd></div>
                  <div className="flex justify-between"><dt className="text-[#8d9bb5]">Languages</dt><dd>{item.languages}</dd></div>
                </dl>
                <a href="#" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#c4a059] px-4 py-3 text-sm font-semibold uppercase tracking-widest text-[#0d1426] hover:bg-[#d9ba72]">
                  Visit studio <Icon name="external" className="h-4 w-4" />
                </a>
                <a href="#" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-[#2a3758] px-4 py-2 text-xs text-[#e8dfc8]/80 hover:border-[#c4a059]">
                  <Icon name="mail" className="h-3.5 w-3.5" /> Email partner
                </a>
              </div>
              <div className="rounded-sm border border-[#c4a059]/20 bg-[#c4a059]/5 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[#c4a059]">Specialties</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (<span key={t} className="rounded-sm border border-[#c4a059]/30 px-2 py-0.5 text-[10px] uppercase tracking-widest text-[#c4a059]">{t}</span>))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="relative z-10">
          <div className="deco h-px" />
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="font-serif text-2xl italic">More {item.category.replace("-", " ")} studios</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${r.slug}`} className="card-hover block rounded-sm border border-[#2a3758] bg-[#14203a] p-5">
                    <p className="font-serif text-lg italic">{r.name.replace("&amp;", "&")}</p>
                    <p className="mt-1 text-xs text-[#8d9bb5]">{r.location} · {r.size}</p>
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
