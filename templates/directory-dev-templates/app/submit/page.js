import Link from "next/link"
import { getHero, getCategories } from "../../lib/items"

export const metadata = {
  title: "Submit a starter — Starters",
  description: "Submit a starter template to the 1DevTool registry. Free. Reviewed inside two weeks.",
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
    <div className="relative bg-[#fbfaf7] text-[#11131a]">
      <div className="pointer-events-none fixed inset-0 grid-paper" />
      <header className="relative z-20 border-b border-[#11131a]/10 bg-[#fbfaf7]/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-mono text-sm">
            <span className="rounded-md bg-[#11131a] px-2 py-1 font-semibold text-[#d4ff3d]">$ {hero.name.toLowerCase()}</span>
          </Link>
          <Link href="/" className="text-sm hover:text-[#ff4d26]">← registry</Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#ff4d26]">./submit</p>
          <h1 className="mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold leading-[1.05]">
            Point us at the <span className="text-[#ff4d26]">repo.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-[#11131a]/75">
            Free to submit. We read everything. Most starters get a decision inside two weeks, sometimes with a short diff of suggested changes.
          </p>

          <form className="mt-12 grid gap-5 rounded-2xl border border-[#11131a]/15 bg-white p-8">
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-[#11131a]/60">Starter name</label>
              <input placeholder="e.g. landing-saas-analytics" className="mt-2 w-full rounded-lg border border-[#11131a]/15 bg-[#fbfaf7] px-4 py-3 font-mono text-sm outline-none focus:border-[#ff4d26]" />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-[#11131a]/60">Public GitHub URL</label>
              <input placeholder="https://github.com/you/starter" className="mt-2 w-full rounded-lg border border-[#11131a]/15 bg-[#fbfaf7] px-4 py-3 font-mono text-sm outline-none focus:border-[#ff4d26]" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-[#11131a]/60">Category</label>
                <select className="mt-2 w-full rounded-lg border border-[#11131a]/15 bg-[#fbfaf7] px-4 py-3 text-sm outline-none focus:border-[#ff4d26]">
                  <option>Choose a category</option>
                  {categories.map((c) => <option key={c.id}>{c.label}</option>)}
                </select>
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-[#11131a]/60">Stack</label>
                <input placeholder="nextjs, tailwind, typescript" className="mt-2 w-full rounded-lg border border-[#11131a]/15 bg-[#fbfaf7] px-4 py-3 text-sm outline-none focus:border-[#ff4d26]" />
              </div>
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-[#11131a]/60">What problem does it solve?</label>
              <textarea rows={4} placeholder="A short paragraph. The problem, the answer, and one way it&rsquo;s different from the other two starters in its category." className="mt-2 w-full rounded-lg border border-[#11131a]/15 bg-[#fbfaf7] px-4 py-3 text-sm outline-none focus:border-[#ff4d26]" />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-[#11131a]/60">Maintainer email</label>
              <input type="email" placeholder="you@studio.com" className="mt-2 w-full rounded-lg border border-[#11131a]/15 bg-[#fbfaf7] px-4 py-3 font-mono text-sm outline-none focus:border-[#ff4d26]" />
            </div>
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#11131a] px-5 py-3.5 font-mono text-sm font-semibold text-[#d4ff3d] hover:bg-[#ff4d26] hover:text-[#fbfaf7]">
              Submit for review <Icon name="arrow" className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
