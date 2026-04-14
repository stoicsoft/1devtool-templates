import Link from "next/link"
import { getHero, getCategories } from "../../lib/items"

export const metadata = {
  title: "Suggest a resource — Material",
  description: "Suggest a font, icon set, UI kit, or object for the Material shelf.",
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
    <div className="relative bg-[#fbfaf7] text-[#16141f]">
      <div className="pointer-events-none fixed inset-0 shelf-bg" />
      <header className="relative z-20 border-b border-black/5 bg-[#fbfaf7]/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-display text-xl italic">{hero.name}</Link>
          <Link href="/" className="text-sm text-black/70 hover:text-orange-600">← Shelf</Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-600">Suggest a resource</p>
          <h1 className="font-display mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.05]">
            Something we should <em className="italic text-orange-600">pin?</em>
          </h1>
          <p className="mt-5 text-lg text-black/70">
            Free to suggest. We review Monday mornings over coffee. Expect a kind reply, with or without an addition.
          </p>

          <form className="mt-12 space-y-5 rounded-2xl border border-black/10 bg-white p-7">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-black/60">Resource name</label>
              <input placeholder="Fraunces" className="font-display mt-2 w-full rounded-xl border border-black/10 bg-[#fbfaf7] px-4 py-3 text-lg italic outline-none focus:border-orange-500" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-black/60">Where to find it</label>
              <input placeholder="https://fonts.google.com/specimen/Fraunces" className="mt-2 w-full rounded-xl border border-black/10 bg-[#fbfaf7] px-4 py-3 text-sm outline-none focus:border-orange-500" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-black/60">Category</label>
                <select className="mt-2 w-full rounded-xl border border-black/10 bg-[#fbfaf7] px-4 py-3 text-sm outline-none focus:border-orange-500">
                  <option>Choose a category</option>
                  {categories.map((c) => <option key={c.id} dangerouslySetInnerHTML={{ __html: c.label }} />)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-black/60">License / price</label>
                <input placeholder="Free · OFL" className="mt-2 w-full rounded-xl border border-black/10 bg-[#fbfaf7] px-4 py-3 text-sm outline-none focus:border-orange-500" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-black/60">Why you&rsquo;d put it on the shelf</label>
              <textarea rows={4} placeholder="A short note — what it does well, what it replaces, where you&rsquo;ve shipped it." className="mt-2 w-full rounded-xl border border-black/10 bg-[#fbfaf7] px-4 py-3 text-sm outline-none focus:border-orange-500" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-black/60">Your email</label>
              <input type="email" placeholder="you@studio.com" className="mt-2 w-full rounded-xl border border-black/10 bg-[#fbfaf7] px-4 py-3 text-sm outline-none focus:border-orange-500" />
            </div>
            <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#16141f] px-5 py-3.5 text-sm font-semibold text-white hover:bg-orange-600">
              Send suggestion <Icon name="arrow" className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
