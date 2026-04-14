import Link from "next/link"
import { getHero, getCategories } from "../../lib/items"

export const metadata = { title: "Submit a show — Frequencies", description: "Submit a podcast for the StoicSoft listening rotation." }

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  return null
}

export default function Submit() {
  const hero = getHero()
  const categories = getCategories()
  return (
    <div className="relative bg-[#07060a] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[500px] aura-podcast" />
      <div className="pointer-events-none fixed inset-0 dotgrid opacity-60" />
      <header className="relative z-20 border-b border-white/5">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#8b6fff] to-[#ff5ab7] text-white">♪</span>
            {hero.name}
          </Link>
          <Link href="/" className="text-sm text-white/70 hover:text-[#e7ff7b]">← Rotation</Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#e7ff7b]">Submit</p>
          <h1 className="mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[1.05]">
            Tell us <span className="font-serif italic text-[#e7ff7b]">where to start.</span>
          </h1>
          <p className="mt-5 text-lg text-white/75">
            Submit a show and point us at three episodes. We listen within a month and reply either way.
          </p>

          <form className="mt-12 space-y-5 rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
            <div>
              <label className="text-xs uppercase tracking-widest text-white/60">Show name</label>
              <input placeholder="Signal FM" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07060a] px-4 py-3 text-sm outline-none focus:border-[#e7ff7b]" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-white/60">Feed URL · RSS or Apple Podcasts link</label>
              <input placeholder="https://feeds.yourshow.fm/rss" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07060a] px-4 py-3 font-mono text-sm outline-none focus:border-[#e7ff7b]" />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="text-xs uppercase tracking-widest text-white/60">Category</label>
                <select className="mt-2 w-full rounded-xl border border-white/10 bg-[#07060a] px-4 py-3 text-sm outline-none focus:border-[#e7ff7b]">
                  <option>Choose</option>
                  {categories.map((c) => <option key={c.id} dangerouslySetInnerHTML={{ __html: c.label }} />)}
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-white/60">Cadence</label>
                <input placeholder="Weekly · Wednesday" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07060a] px-4 py-3 text-sm outline-none focus:border-[#e7ff7b]" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-white/60">Typical length</label>
                <input placeholder="45 — 60 min" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07060a] px-4 py-3 text-sm outline-none focus:border-[#e7ff7b]" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-white/60">Where should we start?</label>
              <textarea rows={3} placeholder="Three episode numbers or titles that best represent the show." className="mt-2 w-full rounded-xl border border-white/10 bg-[#07060a] px-4 py-3 text-sm outline-none focus:border-[#e7ff7b]" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-white/60">What makes it different?</label>
              <textarea rows={3} placeholder="A short paragraph. Who it&rsquo;s for, and one thing other shows in the category don&rsquo;t do." className="mt-2 w-full rounded-xl border border-white/10 bg-[#07060a] px-4 py-3 text-sm outline-none focus:border-[#e7ff7b]" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-white/60">Host email</label>
              <input type="email" placeholder="host@yourshow.fm" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07060a] px-4 py-3 text-sm outline-none focus:border-[#e7ff7b]" />
            </div>
            <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#e7ff7b] px-5 py-3.5 text-sm font-semibold text-[#07060a] hover:bg-white">
              Submit for the rotation <Icon name="arrow" className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
