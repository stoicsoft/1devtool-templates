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
  if (name === "sparkle") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="m12 2 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z"/></svg>)
  if (name === "external") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M10 4H4v16h16v-6M14 4h6v6M10 14 20 4"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "x") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M6 6l12 12M6 18L18 6"/></svg>)
  return null
}

export default async function ItemPage({ params }) {
  const { slug } = await params
  const item = getItemBySlug(slug)
  if (!item) notFound()
  const related = getRelated(slug, 3)
  const hero = getHero()

  return (
    <div className="relative bg-[#080812] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[500px] aurora-purple" />
      <div className="pointer-events-none fixed inset-0 dotgrid opacity-70" />

      <header className="relative z-20 border-b border-white/5">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-[#080812]"><Icon name="sparkle" className="h-4 w-4" /></span>
            {hero.name}
          </Link>
          <Link href="/" className="text-sm text-white/70 hover:text-violet-200">← atlas</Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="text-xs text-white/50">
            <Link href="/" className="hover:text-violet-200">Atlas</Link>
            <span className="mx-2">/</span>
            <span className="capitalize">{item.category}</span>
            <span className="mx-2">/</span>
            <span className="text-white/80">{item.name}</span>
          </div>

          <div className="mt-8 flex flex-wrap items-start justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className={`grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${item.hue}`}>
                <Icon name="sparkle" className="h-8 w-8 text-[#080812]" />
              </div>
              <div>
                <h1 className="text-4xl font-semibold">{item.name}</h1>
                <p className="mt-2 text-lg text-white/70">{item.tagline.replace("&amp;", "&")}</p>
                <p className="mt-2 font-mono text-xs text-cyan-300">{item.model} · {item.pricing}</p>
              </div>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#080812] hover:opacity-90">
              Open the tool <Icon name="external" className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="text-xl font-semibold">Overview</h2>
              <p className="mt-3 text-base leading-relaxed text-white/80" dangerouslySetInnerHTML={{ __html: item.description }} />

              <h2 className="mt-8 text-xl font-semibold">Our four-week test</h2>
              <p className="mt-3 text-white/75 leading-relaxed">
                We integrated {item.name} into a real surface inside the StoicSoft studio and ran it for a month. Notes below are the findings from that period.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-300"><Icon name="check" className="h-4 w-4" /> Strength</p>
                  <p className="mt-3 text-white/85">{item.strength}</p>
                </div>
                <div className="rounded-2xl border border-rose-400/20 bg-rose-400/5 p-5">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-rose-300"><Icon name="x" className="h-4 w-4" /> Weakness</p>
                  <p className="mt-3 text-white/85">{item.weakness}</p>
                </div>
              </div>

              <h2 className="mt-8 text-xl font-semibold">Would we keep using it?</h2>
              <p className="mt-3 text-white/75 leading-relaxed">
                Yes — with the caveat above. It earns the token budget and is obviously better than the last tool we tried. Your mileage will depend on whether your use-case lives inside its strength window.
              </p>
            </div>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-widest text-violet-200">Facts</p>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between"><dt className="text-white/50">Category</dt><dd className="capitalize">{item.category}</dd></div>
                  <div className="flex justify-between"><dt className="text-white/50">Model</dt><dd className="font-mono">{item.model}</dd></div>
                  <div className="flex justify-between"><dt className="text-white/50">Pricing</dt><dd className="font-semibold text-cyan-300">{item.pricing}</dd></div>
                </dl>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => <span key={t} className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[10px]">#{t}</span>)}
                </div>
              </div>
              <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-5 text-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-violet-200">Our confidence</p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                </div>
                <p className="mt-2 text-xs text-white/60">8.2 / 10 · 4-week integration</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative z-10 border-t border-white/5">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-xl font-semibold">More in {item.category}</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${r.slug}`} className="card-hover block rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                    <p className="font-semibold">{r.name}</p>
                    <p className="mt-1 text-xs text-white/60">{r.tagline.replaceAll("&amp;", "&").replaceAll("&apos;", "&rsquo;")}</p>
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
