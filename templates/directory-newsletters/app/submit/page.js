import Link from "next/link"
import { getHero, getCategories } from "../../lib/items"

export const metadata = { title: "Submit a newsletter — The Newsstand", description: "Submit a newsletter for consideration." }

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  return null
}

export default function Submit() {
  const hero = getHero()
  const categories = getCategories()
  return (
    <div className="relative bg-[#f7f1e3] text-[#131110]">
      <div className="pointer-events-none fixed inset-0 paper-tex opacity-40" />
      <header className="relative z-20 border-b border-[#d8cdb6]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#75695a]">
          <Link href="/" className="hover:text-[#a04023]">← {hero.name}</Link>
          <span className="font-serif italic normal-case tracking-normal text-[#131110]">Submit</span>
          <Link href="/about" className="hover:text-[#a04023]">About →</Link>
        </div>
        <div className="rule h-px" />
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#a04023]">Submit</p>
          <h1 className="font-serif mt-4 text-[clamp(2.4rem,5.5vw,5rem)] leading-[1.04]">
            Send us <em className="italic text-[#a04023]">your letter.</em>
          </h1>
          <p className="font-serif mt-5 text-xl italic text-[#2c2622]">
            Free to submit. We read twelve issues before deciding. An honest reply within a month.
          </p>

          <form className="mt-12 space-y-5 rounded-3xl border border-[#d8cdb6] bg-white/70 p-8">
            <div>
              <label className="text-xs uppercase tracking-[0.22em] text-[#75695a]">Newsletter name</label>
              <input placeholder="The Margin" className="font-serif mt-2 w-full rounded-xl border border-[#d8cdb6] bg-[#f7f1e3] px-4 py-3 text-lg italic outline-none focus:border-[#a04023]" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-[0.22em] text-[#75695a]">Subscribe URL</label>
                <input placeholder="https://yourletter.com/subscribe" className="mt-2 w-full rounded-xl border border-[#d8cdb6] bg-[#f7f1e3] px-4 py-3 text-sm outline-none focus:border-[#a04023]" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.22em] text-[#75695a]">Archive URL</label>
                <input placeholder="https://yourletter.com/archive" className="mt-2 w-full rounded-xl border border-[#d8cdb6] bg-[#f7f1e3] px-4 py-3 text-sm outline-none focus:border-[#a04023]" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="text-xs uppercase tracking-[0.22em] text-[#75695a]">Category</label>
                <select className="mt-2 w-full rounded-xl border border-[#d8cdb6] bg-[#f7f1e3] px-4 py-3 text-sm outline-none focus:border-[#a04023]">
                  <option>Choose</option>
                  {categories.map((c) => <option key={c.id} dangerouslySetInnerHTML={{ __html: c.label }} />)}
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.22em] text-[#75695a]">Cadence</label>
                <input placeholder="Weekly · Sunday" className="mt-2 w-full rounded-xl border border-[#d8cdb6] bg-[#f7f1e3] px-4 py-3 text-sm outline-none focus:border-[#a04023]" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.22em] text-[#75695a]">Since</label>
                <input placeholder="2022" className="mt-2 w-full rounded-xl border border-[#d8cdb6] bg-[#f7f1e3] px-4 py-3 text-sm outline-none focus:border-[#a04023]" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.22em] text-[#75695a]">A short description</label>
              <textarea rows={4} placeholder="What you write about and what makes it different." className="mt-2 w-full rounded-xl border border-[#d8cdb6] bg-[#f7f1e3] px-4 py-3 text-sm outline-none focus:border-[#a04023]" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.22em] text-[#75695a]">Your email</label>
              <input type="email" placeholder="you@yourletter.com" className="mt-2 w-full rounded-xl border border-[#d8cdb6] bg-[#f7f1e3] px-4 py-3 text-sm outline-none focus:border-[#a04023]" />
            </div>
            <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#131110] px-5 py-3.5 text-sm font-semibold text-[#f7f1e3] hover:bg-[#a04023]">
              Send for review <Icon name="arrow" className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
