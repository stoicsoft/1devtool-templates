import Link from "next/link"
import { getHero, getCategories } from "../../lib/items"

export const metadata = {
  title: "Submit an API — Endpoints",
  description: "Submit a public API for review in the Endpoints catalog.",
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  return null
}

export default function Submit() {
  const hero = getHero()
  const categories = getCategories()
  return (
    <div className="relative bg-[#05070d] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[500px] api-glow" />
      <div className="pointer-events-none fixed inset-0 grid-lines" />
      <header className="relative z-20 border-b border-white/5">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-mono text-sm font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#7dd3fc] to-[#4c8dff] text-[#05070d]">[ ]</span>
            {hero.name}
          </Link>
          <Link href="/" className="text-sm text-white/70 hover:text-[#7dd3fc]">← catalog</Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-widest text-[#7dd3fc]">Submit an API</p>
          <h1 className="mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[1.05]">
            Let us <span className="bg-gradient-to-r from-[#7dd3fc] to-[#4c8dff] bg-clip-text text-transparent">integrate first.</span>
          </h1>
          <p className="mt-5 text-lg text-white/75">
            We only add APIs our engineers have shipped with. Submit yours and one of us will try it against a real surface this quarter.
          </p>

          <form className="mt-12 space-y-5 rounded-2xl border border-white/10 bg-[#0a0e1a] p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-white/60">API name</label>
                <input placeholder="ServerCompass Probes" className="mt-2 w-full rounded-lg border border-white/10 bg-[#05070d] px-4 py-3 font-mono text-sm outline-none focus:border-[#7dd3fc]" />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-white/60">Category</label>
                <select className="mt-2 w-full rounded-lg border border-white/10 bg-[#05070d] px-4 py-3 text-sm outline-none focus:border-[#7dd3fc]">
                  <option>Choose a category</option>
                  {categories.map((c) => <option key={c.id} dangerouslySetInnerHTML={{ __html: c.label }} />)}
                </select>
              </div>
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-white/60">Docs URL</label>
              <input placeholder="https://docs.yourapi.com" className="mt-2 w-full rounded-lg border border-white/10 bg-[#05070d] px-4 py-3 font-mono text-sm outline-none focus:border-[#7dd3fc]" />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-white/60">Auth</label>
                <select className="mt-2 w-full rounded-lg border border-white/10 bg-[#05070d] px-4 py-3 text-sm outline-none focus:border-[#7dd3fc]">
                  <option>API key</option><option>OAuth 2.0</option><option>Bearer token</option><option>None (public)</option>
                </select>
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-white/60">Rate limit</label>
                <input placeholder="600 / min" className="mt-2 w-full rounded-lg border border-white/10 bg-[#05070d] px-4 py-3 font-mono text-sm outline-none focus:border-[#7dd3fc]" />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-white/60">Pricing</label>
                <input placeholder="Free · Pro $29/mo" className="mt-2 w-full rounded-lg border border-white/10 bg-[#05070d] px-4 py-3 text-sm outline-none focus:border-[#7dd3fc]" />
              </div>
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-white/60">Sample endpoint</label>
              <input placeholder="GET /v1/resource" className="mt-2 w-full rounded-lg border border-white/10 bg-[#05070d] px-4 py-3 font-mono text-sm outline-none focus:border-[#7dd3fc]" />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-white/60">What does it do?</label>
              <textarea rows={4} placeholder="A paragraph describing the problem it solves, the auth shape, and one real integration you&rsquo;ve shipped." className="mt-2 w-full rounded-lg border border-white/10 bg-[#05070d] px-4 py-3 text-sm outline-none focus:border-[#7dd3fc]" />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-white/60">Your email</label>
              <input type="email" placeholder="you@company.com" className="mt-2 w-full rounded-lg border border-white/10 bg-[#05070d] px-4 py-3 font-mono text-sm outline-none focus:border-[#7dd3fc]" />
            </div>
            <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7dd3fc] to-[#4c8dff] px-5 py-3.5 text-sm font-semibold text-[#05070d] hover:opacity-90">
              Submit for review <Icon name="arrow" className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
