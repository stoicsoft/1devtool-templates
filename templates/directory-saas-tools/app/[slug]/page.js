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
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
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
    <div className="relative bg-[#0a0b10] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] glow-bg" />
      <div className="pointer-events-none absolute inset-0 dotgrid opacity-50" />

      <header className="relative z-20 border-b border-white/5">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#3ee0a5] to-[#d4ff3d] text-[#0a0b10]">★</span>
            {hero.name}
          </Link>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <Link href="/" className="hover:text-white">← Back to directory</Link>
            <Link href="/submit" className="hover:text-[#3ee0a5]">Submit a tool</Link>
          </nav>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="text-xs text-white/50">
            <Link href="/" className="hover:text-white">Directory</Link>
            <span className="mx-2">/</span>
            <Link href={`/#${item.category}`} className="hover:text-white capitalize">{item.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{item.name}</span>
          </div>

          <div className="mt-8 grid gap-10 md:grid-cols-[1fr_280px]">
            <div>
              <div className="flex items-start gap-5">
                <div className={`grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${item.hue}`}>
                  <span className="font-serif text-5xl italic text-[#0a0b10]">{item.name[0]}</span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-4xl font-semibold">{item.name}</h1>
                    {item.status && (
                      <span className="rounded-full border border-[#3ee0a5]/30 bg-[#3ee0a5]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#3ee0a5]">{item.status}</span>
                    )}
                  </div>
                  <p className="mt-2 text-lg text-white/70">{item.tagline}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-white/80">#{t}</span>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-semibold">About this tool</h2>
                <p className="mt-4 text-base leading-relaxed text-white/80" dangerouslySetInnerHTML={{ __html: item.description }} />
                <p className="mt-4 text-base leading-relaxed text-white/80">
                  We added <strong>{item.name}</strong> to the registry because the team behind it ships with the same care we try to bring to our own products. It shares the aesthetic and operating principles of the StoicSoft studio — small surface area, honest pricing, a real changelog — and the tool earns its place on the list every time a curator checks in.
                </p>
                {item.pick && (
                  <div className="mt-6 rounded-2xl border border-[#d4ff3d]/30 bg-[#d4ff3d]/5 p-5">
                    <p className="text-xs uppercase tracking-widest text-[#d4ff3d]">Editor&rsquo;s note</p>
                    <p className="mt-2 text-white/85" dangerouslySetInnerHTML={{ __html: item.pick }} />
                  </div>
                )}
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-semibold">What we pair it with</h2>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {[
                    "ServerCompass for uptime and incident routing",
                    "1DevTool starter templates for the first Monday",
                    "Aether for retrieval and grounded answers across the stack",
                    "A Field notebook on the desk, for the deeper questions",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <Icon name="check" className="mt-1 h-4 w-4 text-[#3ee0a5]" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-[#0f1016] p-5">
                <p className="text-xs uppercase tracking-widest text-white/40">Pricing</p>
                <p className="mt-2 text-2xl font-semibold text-[#3ee0a5]">{item.pricing}</p>

                <div className="mt-5 space-y-3 border-t border-white/5 pt-4 text-xs">
                  <div className="flex items-center justify-between"><span className="text-white/50">Category</span><span className="capitalize">{item.category}</span></div>
                  <div className="flex items-center justify-between"><span className="text-white/50">Used by</span><span>{item.users}</span></div>
                  <div className="flex items-center justify-between"><span className="text-white/50">Launched</span><span>{item.launched}</span></div>
                </div>

                <a href="#" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#3ee0a5] px-4 py-3 text-sm font-semibold text-[#0a0b10] hover:bg-[#d4ff3d]">
                  Open {item.name} <Icon name="external" className="h-4 w-4" />
                </a>
                <a href="#" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-xs text-white/70 hover:border-white">
                  Report a change
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0f1016] p-5 text-sm">
                <p className="text-xs uppercase tracking-widest text-[#3ee0a5]">Curator confidence</p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-[#3ee0a5] to-[#d4ff3d]" />
                </div>
                <p className="mt-2 text-xs text-white/60">8.7 / 10 · Reviewed by 4 curators</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative z-10 border-t border-white/5">
          <div className="mx-auto max-w-5xl px-6 py-14">
            <h2 className="text-2xl font-semibold">Related tools</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/${r.slug}`} className="card-hover group block rounded-2xl border border-white/10 bg-[#0f1016] p-5">
                  <div className="flex items-start gap-3">
                    <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${r.hue}`}>
                      <span className="font-serif text-xl italic text-[#0a0b10]">{r.name[0]}</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate font-semibold group-hover:text-[#3ee0a5]">{r.name}</h3>
                      <p className="mt-1 truncate text-xs text-white/60">{r.tagline}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8 text-xs text-white/50">
          <Link href="/" className="hover:text-white">← All {hero.totalCount} tools</Link>
          <Link href="/submit" className="text-[#3ee0a5] hover:text-[#d4ff3d]">Submit your tool →</Link>
        </div>
      </footer>
    </div>
  )
}
