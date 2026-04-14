import Link from "next/link"
import { getHero, getCategories } from "../../lib/items"

export const metadata = { title: "Submit an AI tool — Atlas", description: "Submit a tool for a four-week integration review." }

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  return null
}

export default function Submit() {
  const hero = getHero()
  const categories = getCategories()
  return (
    <div className="relative bg-[#080812] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[500px] aurora-purple" />
      <div className="pointer-events-none fixed inset-0 dotgrid opacity-70" />
      <header className="relative z-20 border-b border-white/5">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-[#080812]">✦</span>
            {hero.name}
          </Link>
          <Link href="/" className="text-sm text-white/70 hover:text-violet-200">← atlas</Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-violet-300">Submit</p>
          <h1 className="mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[1.05]">
            We&rsquo;ll <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">run it for a month.</span>
          </h1>
          <p className="mt-5 text-lg text-white/75">
            Submissions are free. We run it in a real product, then publish an honest strength / weakness pair.
          </p>

          <form className="mt-12 space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-white/60">Tool name</label>
              <input placeholder="Aether" className="mt-2 w-full rounded-xl border border-white/10 bg-[#080812] px-4 py-3 text-sm outline-none focus:border-violet-400" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-white/60">Website</label>
              <input placeholder="https://yourtool.ai" className="mt-2 w-full rounded-xl border border-white/10 bg-[#080812] px-4 py-3 text-sm outline-none focus:border-violet-400" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-white/60">Category</label>
                <select className="mt-2 w-full rounded-xl border border-white/10 bg-[#080812] px-4 py-3 text-sm outline-none focus:border-violet-400">
                  <option>Choose</option>
                  {categories.map((c) => <option key={c.id} dangerouslySetInnerHTML={{ __html: c.label }} />)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-white/60">Underlying model</label>
                <input placeholder="Frontier-routed · fine-tuned · open-weight" className="mt-2 w-full rounded-xl border border-white/10 bg-[#080812] px-4 py-3 text-sm outline-none focus:border-violet-400" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-white/60">The problem you solve</label>
              <textarea rows={4} placeholder="The exact workflow you beat, and one failure mode you know about." className="mt-2 w-full rounded-xl border border-white/10 bg-[#080812] px-4 py-3 text-sm outline-none focus:border-violet-400" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-white/60">Trial access</label>
              <input placeholder="stoicsoft-review@yourtool.ai · any provisioning steps" className="mt-2 w-full rounded-xl border border-white/10 bg-[#080812] px-4 py-3 text-sm outline-none focus:border-violet-400" />
            </div>
            <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3.5 text-sm font-semibold text-[#080812] hover:opacity-90">
              Submit for a four-week review <Icon name="arrow" className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
