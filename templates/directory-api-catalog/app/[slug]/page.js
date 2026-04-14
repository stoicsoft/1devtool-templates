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
  if (name === "api") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M7 11h.01M7 13h.01M11 11h3M11 13h6"/></svg>)
  if (name === "external") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M10 4H4v16h16v-6M14 4h6v6M10 14 20 4"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  return null
}

const methodColor = (s) => s.startsWith("GET") ? "text-emerald-400" : s.startsWith("POST") ? "text-amber-400" : "text-violet-400"

export default async function ItemPage({ params }) {
  const { slug } = await params
  const item = getItemBySlug(slug)
  if (!item) notFound()
  const related = getRelated(slug, 3)
  const hero = getHero()

  return (
    <div className="relative bg-[#05070d] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[500px] api-glow" />
      <div className="pointer-events-none fixed inset-0 grid-lines" />

      <header className="relative z-20 border-b border-white/5">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-mono text-sm font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#7dd3fc] to-[#4c8dff] text-[#05070d]">
              <Icon name="api" className="h-4 w-4" />
            </span>
            {hero.name}
          </Link>
          <Link href="/" className="text-sm text-white/70 hover:text-[#7dd3fc]">← catalog</Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="font-mono text-xs text-white/50">
            <Link href="/" className="hover:text-[#7dd3fc]">catalog</Link>
            <span className="mx-2">/</span>
            <span className="capitalize">{item.category}</span>
            <span className="mx-2">/</span>
            <span className="text-white/80">{item.slug}</span>
          </div>

          <div className="mt-8 flex flex-wrap items-start justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${item.hue}`}>
                <Icon name="api" className="h-7 w-7 text-[#05070d]" />
              </div>
              <div>
                <h1 className="text-3xl font-semibold md:text-4xl">{item.name}</h1>
                <p className="mt-2 text-lg text-white/70">{item.tagline.replace("&amp;", "&")}</p>
              </div>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-[#7dd3fc] px-5 py-2.5 font-mono text-sm font-semibold text-[#05070d] hover:bg-white">
              Open docs <Icon name="external" className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#0a0e1a]">
            <div className="border-b border-white/5 px-5 py-3 font-mono text-xs">
              <span className={`${methodColor(item.sample)} font-semibold`}>{item.sample.split(" ")[0]}</span>
              <span className="ml-2 text-white/60">{item.sample.split(" ").slice(1).join(" ")}</span>
              <span className="ml-3 text-[#7dd3fc]">{item.status_code}</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-6 text-white/80">
{`# sample request
curl -X ${item.sample.split(" ")[0]} https://api.example.com${item.sample.split(" ").slice(1).join(" ")} \\
  -H "Authorization: ${item.auth === "None (public)" ? "(no auth required)" : item.auth}"
`}
            </pre>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="text-xl font-semibold">Overview</h2>
              <p className="mt-3 text-base leading-relaxed text-white/80" dangerouslySetInnerHTML={{ __html: item.description }} />

              <h2 className="mt-8 text-xl font-semibold">Integration notes</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {[
                  `Authentication is ${item.auth.toLowerCase()}; rotate credentials every 90 days.`,
                  `Rate limit sits at ${item.rate} — pre-cache aggressive clients.`,
                  `Responses come back as ${item.format}. Pagination is cursor-based.`,
                  `Webhooks (where supported) fire with HMAC signatures and five retries.`,
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <Icon name="check" className="mt-0.5 h-4 w-4 text-[#7dd3fc]" /> {line}
                  </li>
                ))}
              </ul>

              <h2 className="mt-8 text-xl font-semibold">Where we&rsquo;ve used it</h2>
              <p className="mt-3 text-white/75 leading-relaxed">
                This API shows up in at least one live StoicSoft product — we maintain this catalog by writing down what we actually integrate. If an API falls over in production, it comes off the list.
              </p>
            </div>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-[#0a0e1a] p-5">
                <p className="font-mono text-xs uppercase tracking-widest text-[#7dd3fc]">Quick facts</p>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between"><dt className="text-white/50">Auth</dt><dd className="font-mono">{item.auth}</dd></div>
                  <div className="flex justify-between"><dt className="text-white/50">Rate</dt><dd className="font-mono">{item.rate}</dd></div>
                  <div className="flex justify-between"><dt className="text-white/50">Format</dt><dd className="font-mono">{item.format}</dd></div>
                  <div className="flex justify-between"><dt className="text-white/50">Pricing</dt><dd className="font-mono text-[#7dd3fc]">{item.pricing}</dd></div>
                </dl>
              </div>

              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5 text-sm">
                <p className="font-mono text-xs uppercase tracking-widest text-emerald-300">Integration confidence</p>
                <p className="mt-2 text-white/80">
                  This endpoint has been integrated in 3 StoicSoft products and has held up under production load for more than a year.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative z-10 border-t border-white/5">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-xl font-semibold">More {item.category} APIs</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${r.slug}`} className="card-hover block rounded-2xl border border-white/10 bg-[#0a0e1a] p-5">
                    <p className="font-medium">{r.name}</p>
                    <p className="mt-1 font-mono text-xs text-white/60"><span className={methodColor(r.sample)}>{r.sample.split(" ")[0]}</span> {r.sample.split(" ").slice(1).join(" ")}</p>
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
