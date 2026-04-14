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
  if (name === "star") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="m12 2 3 7 7 .6-5.3 4.6L18 22l-6-3.8L6 22l1.3-7.8L2 9.6 9 9l3-7Z"/></svg>)
  if (name === "download") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>)
  if (name === "github") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  return null
}

export default async function ItemPage({ params }) {
  const { slug } = await params
  const item = getItemBySlug(slug)
  if (!item) notFound()
  const related = getRelated(slug, 3)
  const hero = getHero()

  return (
    <div className="relative bg-[#fbfaf7] text-[#11131a]">
      <div className="pointer-events-none fixed inset-0 grid-paper" />

      <header className="relative z-20 border-b border-[#11131a]/10 bg-[#fbfaf7]/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-mono text-sm">
            <span className="rounded-md bg-[#11131a] px-2 py-1 font-semibold text-[#d4ff3d]">$ {hero.name.toLowerCase()}</span>
          </Link>
          <Link href="/" className="text-sm hover:text-[#ff4d26]">← registry</Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="font-mono text-xs text-[#11131a]/60">
            <Link href="/" className="hover:text-[#ff4d26]">./registry</Link>
            <span className="mx-2">/</span>
            <span>{item.category}</span>
            <span className="mx-2">/</span>
            <span className="text-[#11131a]">{item.name}</span>
          </div>

          <div className="mt-8 flex flex-wrap items-start justify-between gap-6">
            <div>
              <h1 className="font-mono text-4xl font-bold">{item.name}</h1>
              <p className="mt-2 text-lg text-[#11131a]/70">{item.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span key={t} className="rounded-md border border-[#11131a]/15 bg-white px-3 py-1 font-mono text-xs">#{t}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 font-mono text-sm text-[#11131a]/70">
              <span className="flex items-center gap-1"><Icon name="star" className="h-4 w-4 text-[#ff4d26]" /> {item.stars}</span>
              <span className="flex items-center gap-1"><Icon name="download" className="h-4 w-4" /> {item.clones}</span>
              <span>{item.version}</span>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-[#11131a]/15 bg-[#11131a] p-6 font-mono text-sm text-[#fbfaf7]">
            <p className="text-[#d4ff3d]/70"># clone this starter</p>
            <p className="mt-3"><span className="text-[#d4ff3d]">$</span> npx 1devtool@latest create {item.slug}</p>
            <p className="mt-1"><span className="text-[#d4ff3d]">$</span> cd my-app</p>
            <p className="mt-1"><span className="text-[#d4ff3d]">$</span> npm run dev</p>
            <p className="mt-3 text-[#fbfaf7]/50"># → http://localhost:3000 in ~12s</p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="text-xl font-bold">About this starter</h2>
              <p className="mt-3 text-[#11131a]/80 leading-relaxed">{item.description}</p>
              <p className="mt-4 text-[#11131a]/80 leading-relaxed">
                We ship this starter because we use it ourselves. {item.name} has powered at least one live product inside the StoicSoft studio, and every release here is one the team has dogfooded for a week or more before publication.
              </p>

              <h3 className="mt-8 text-lg font-bold">What&rsquo;s inside</h3>
              <ul className="mt-3 space-y-2 font-mono text-sm text-[#11131a]/80">
                {[
                  "Next.js 16 App Router, React 18, Tailwind v4",
                  "TypeScript config tuned for strictness, not cleverness",
                  "One layout.js, one globals.css, ~5 pages out of the box",
                  "package-lock.json committed, no side-effect installs",
                ].map((l) => (
                  <li key={l} className="flex items-start gap-2">
                    <span className="text-[#ff4d26]">›</span> {l}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-[#11131a]/15 bg-white p-5">
                <p className="font-mono text-xs uppercase tracking-widest text-[#11131a]/50">Maintainer</p>
                <p className="mt-2 text-base font-semibold">{item.author}</p>
                <p className="mt-2 font-mono text-xs text-[#11131a]/60">Licensed under {item.pricing}</p>
                <div className="mt-5 space-y-2">
                  <a href="#" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#11131a] px-4 py-2.5 font-mono text-sm text-[#d4ff3d] hover:bg-[#ff4d26] hover:text-[#fbfaf7]">
                    <Icon name="github" className="h-4 w-4" /> Open on GitHub
                  </a>
                  <a href="#" className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#11131a]/15 bg-white px-4 py-2 text-xs text-[#11131a]/70 hover:border-[#11131a]">
                    Live preview
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border border-[#ff4d26]/20 bg-[#ff4d26]/5 p-5">
                <p className="font-mono text-xs uppercase tracking-widest text-[#ff4d26]">Category</p>
                <p className="mt-2 font-bold capitalize">{item.category}</p>
                <p className="mt-3 text-xs text-[#11131a]/70">Part of the 1DevTool curated registry.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative z-10 border-t border-[#11131a]/10">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-xl font-bold">More in {item.category}</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${r.slug}`} className="card-hover block rounded-2xl border border-[#11131a]/15 bg-white p-5">
                    <p className="font-mono text-sm font-semibold">{r.name}</p>
                    <p className="mt-1 text-xs text-[#11131a]/60">{r.tagline}</p>
                    <p className="mt-3 font-mono text-[10px] text-[#11131a]/50 flex items-center gap-2">
                      <Icon name="star" className="h-3 w-3 text-[#ff4d26]" /> {r.stars} ·
                      <Icon name="download" className="h-3 w-3" /> {r.clones}
                    </p>
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
