import Link from "next/link"
import { getHero, getCategories } from "../../lib/items"

export const metadata = {
  title: "Submit a profile — Builders",
  description: "Nominate someone for the Builders directory, or submit your own profile.",
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  return null
}

export default function Submit() {
  const hero = getHero()
  const categories = getCategories()
  return (
    <div className="relative bg-[#f5efe2] text-[#141210]">
      <div className="pointer-events-none fixed inset-0 paper-tex opacity-40" />
      <header className="relative z-20 border-b border-[#d5c9b0]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#6c6354]">
          <Link href="/" className="hover:text-[#b24224]">← {hero.name}</Link>
          <span className="italic normal-case tracking-normal text-[#141210]">Submit</span>
          <Link href="/about" className="hover:text-[#b24224]">About →</Link>
        </div>
        <div className="rule h-px" />
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#b24224]">Submit</p>
          <h1 className="font-display mt-4 text-[clamp(2.4rem,5.5vw,5rem)] leading-[1.04]">
            Tell us about <em className="italic text-[#b24224]">someone we should know.</em>
          </h1>
          <p className="font-display mt-5 max-w-xl text-xl italic text-[#3a3329]">
            Submit your own profile or nominate a builder you admire. We read everything.
          </p>

          <form className="mt-12 space-y-5 rounded-3xl border border-[#d5c9b0] bg-white/70 p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-[0.22em] text-[#6c6354]">Their name</label>
                <input placeholder="e.g. Clara Figueira" className="font-display mt-2 w-full rounded-xl border border-[#d5c9b0] bg-[#f5efe2] px-4 py-3 text-lg italic outline-none focus:border-[#b24224]" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.22em] text-[#6c6354]">City</label>
                <input placeholder="Lisbon, PT" className="mt-2 w-full rounded-xl border border-[#d5c9b0] bg-[#f5efe2] px-4 py-3 text-sm outline-none focus:border-[#b24224]" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.22em] text-[#6c6354]">One-line tagline</label>
              <input placeholder="Design at the StoicSoft studio" className="mt-2 w-full rounded-xl border border-[#d5c9b0] bg-[#f5efe2] px-4 py-3 text-sm outline-none focus:border-[#b24224]" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-[0.22em] text-[#6c6354]">Practice</label>
                <select className="mt-2 w-full rounded-xl border border-[#d5c9b0] bg-[#f5efe2] px-4 py-3 text-sm outline-none focus:border-[#b24224]">
                  <option>Choose a category</option>
                  {categories.map((c) => <option key={c.id}>{c.label}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.22em] text-[#6c6354]">Years building</label>
                <input placeholder="11" className="mt-2 w-full rounded-xl border border-[#d5c9b0] bg-[#f5efe2] px-4 py-3 text-sm outline-none focus:border-[#b24224]" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.22em] text-[#6c6354]">A short paragraph about their work</label>
              <textarea rows={4} placeholder="What they ship, what they care about, why we should know them." className="mt-2 w-full rounded-xl border border-[#d5c9b0] bg-[#f5efe2] px-4 py-3 text-sm outline-none focus:border-[#b24224]" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.22em] text-[#6c6354]">Your email · so we can reply</label>
              <input type="email" placeholder="you@studio.com" className="mt-2 w-full rounded-xl border border-[#d5c9b0] bg-[#f5efe2] px-4 py-3 text-sm outline-none focus:border-[#b24224]" />
            </div>
            <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#141210] px-5 py-3.5 text-sm font-semibold text-[#f5efe2] hover:bg-[#b24224]">
              Send for review <Icon name="arrow" className="h-4 w-4" />
            </button>
            <p className="text-center text-xs text-[#6c6354]">We&rsquo;ll write back within a week — yes, no, or asking for a touch more.</p>
          </form>
        </div>
      </section>
    </div>
  )
}
