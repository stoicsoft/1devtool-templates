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
  return { title: `${item.name} at ${item.company} — ${getHero().name}`, description: item.tagline }
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "pin") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="10" r="3"/><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/></svg>)
  return null
}

export default async function ItemPage({ params }) {
  const { slug } = await params
  const item = getItemBySlug(slug)
  if (!item) notFound()
  const related = getRelated(slug, 3)
  const hero = getHero()

  return (
    <div className="relative bg-[#f6f7f9] text-[#0c0f17]">
      <div className="pointer-events-none fixed inset-0 bg-aurora" />

      <header className="relative z-20 border-b border-black/5 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-500 text-white">R</span>
            {hero.name}
          </Link>
          <Link href="/" className="text-sm text-black/70 hover:text-indigo-600">← all roles</Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="text-xs text-black/50">
            <Link href="/" className="hover:text-indigo-600">Roles</Link>
            <span className="mx-2">/</span>
            <span className="capitalize">{item.category}</span>
            <span className="mx-2">/</span>
            <span className="text-black/80">{item.company}</span>
          </div>

          <div className="mt-8 flex flex-wrap items-start justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className={`grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br ${item.hue} text-3xl font-bold text-white`}>
                {item.company[0]}
              </div>
              <div>
                <h1 className="text-3xl font-bold leading-tight md:text-4xl">{item.name}</h1>
                <p className="mt-2 text-lg text-black/65">at <span className="font-semibold text-black">{item.company}</span></p>
                <p className="mt-1 text-sm text-black/60" dangerouslySetInnerHTML={{ __html: item.tagline }} />
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-emerald-600">{item.salary}</p>
              <p className="text-xs text-black/55">+ {item.equity} equity</p>
            </div>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="text-xl font-bold">About this role</h2>
              <p className="mt-3 text-base leading-relaxed text-black/80" dangerouslySetInnerHTML={{ __html: item.description }} />

              <h3 className="mt-8 text-lg font-bold">What you&rsquo;ll do</h3>
              <ul className="mt-3 space-y-2 text-sm text-black/75">
                {[
                  `Lead one or two pieces of the ${item.company} stack end-to-end`,
                  "Pair-program with one other engineer and a designer most weeks",
                  "Own production reliability for the surface area you ship",
                  "Help review applicants for the next two roles on the team",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-600" /> {line}
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 text-lg font-bold">What we offer</h3>
              <ul className="mt-3 space-y-2 text-sm text-black/75">
                {[
                  `${item.salary} base salary, no negotiating away the bottom`,
                  `${item.equity} equity, four-year vest, one-year cliff`,
                  "30 paid days off, statutory holidays, a real four-week summer pause",
                  "Annual studio offsite in Lisbon (or your city, every other year)",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <Icon name="check" className="mt-0.5 h-4 w-4 text-indigo-600" /> {line}
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 text-lg font-bold">Interview process</h3>
              <ol className="mt-3 space-y-3 text-sm text-black/75">
                {["30-min intro call with the hiring manager", "90-min paid take-home (you&rsquo;ll keep the IP)", "Two-hour pairing session with the team", "Reference check, then offer within five days"].map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-indigo-100 font-mono text-xs text-indigo-700">{i + 1}</span>
                    <span dangerouslySetInnerHTML={{ __html: s.replaceAll("&apos;", "&rsquo;") }} />
                  </li>
                ))}
              </ol>
            </div>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-black/10 bg-white p-5">
                <a href="#" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white hover:bg-indigo-700">
                  Apply at {item.company} <Icon name="arrow" className="h-4 w-4" />
                </a>
                <p className="mt-2 text-center text-xs text-black/55">Direct link · no recruiter middleman</p>

                <dl className="mt-5 space-y-3 border-t border-black/5 pt-4 text-xs">
                  <div className="flex justify-between"><dt className="text-black/50">Type</dt><dd className="font-semibold">{item.type}</dd></div>
                  <div className="flex justify-between"><dt className="text-black/50">Location</dt><dd>{item.location}</dd></div>
                  <div className="flex justify-between"><dt className="text-black/50">Team</dt><dd>{item.team}</dd></div>
                  <div className="flex justify-between"><dt className="text-black/50">Working style</dt><dd>{item.remote}</dd></div>
                </dl>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Honest pay band</p>
                <p className="mt-2 text-emerald-900">
                  This salary range is the actual range. The top of the band is what we pay senior hires, not aspirational.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative z-10 border-t border-black/5">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-xl font-bold">More {item.category} roles</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${r.slug}`} className="card-hover block rounded-2xl border border-black/8 bg-white p-5">
                    <p className="font-semibold">{r.name}</p>
                    <p className="mt-1 text-xs text-black/60">{r.company} · {r.salary}</p>
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
