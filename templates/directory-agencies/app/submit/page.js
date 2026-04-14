import Link from "next/link"
import { getHero, getCategories } from "../../lib/items"

export const metadata = { title: "Submit a studio — Atelier", description: "Submit a design or development studio for consideration." }

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  return null
}

export default function Submit() {
  const hero = getHero()
  const categories = getCategories()
  return (
    <div className="relative bg-[#0d1426] text-[#f3ede0]">
      <header className="relative z-20">
        <div className="deco h-px" />
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-sm border border-[#c4a059]/40 font-serif text-lg italic text-[#c4a059]">A</span>
            <span className="font-serif text-xl italic">{hero.name}</span>
          </Link>
          <Link href="/" className="text-sm text-[#e8dfc8]/80 hover:text-[#c4a059]">← All studios</Link>
        </div>
        <div className="deco h-px" />
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.28em] text-[#c4a059]">Submit</p>
          <h1 className="font-serif mt-4 text-[clamp(2.4rem,5.5vw,5rem)] italic leading-[1.04]">Tell us about <span className="text-[#c4a059]">the studio.</span></h1>
          <p className="font-serif mt-5 text-xl italic text-[#e8dfc8]/85">
            Submission is free. We add studios we&rsquo;ve verified through references or our own engagement.
          </p>

          <form className="mt-12 space-y-5 rounded-sm border border-[#2a3758] bg-[#14203a] p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-[0.28em] text-[#8d9bb5]">Studio name</label>
                <input placeholder="StoicSoft Studio" className="font-serif mt-2 w-full rounded-sm border border-[#2a3758] bg-[#0d1426] px-4 py-3 text-lg italic outline-none focus:border-[#c4a059]" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.28em] text-[#8d9bb5]">Founded</label>
                <input placeholder="2019" className="mt-2 w-full rounded-sm border border-[#2a3758] bg-[#0d1426] px-4 py-3 text-sm outline-none focus:border-[#c4a059]" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.28em] text-[#8d9bb5]">Studio URL</label>
              <input placeholder="https://yourstudio.com" className="mt-2 w-full rounded-sm border border-[#2a3758] bg-[#0d1426] px-4 py-3 text-sm outline-none focus:border-[#c4a059]" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-[0.28em] text-[#8d9bb5]">Practice</label>
                <select className="mt-2 w-full rounded-sm border border-[#2a3758] bg-[#0d1426] px-4 py-3 text-sm outline-none focus:border-[#c4a059]">
                  <option>Choose a practice</option>
                  {categories.map((c) => <option key={c.id} dangerouslySetInnerHTML={{ __html: c.label }} />)}
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.28em] text-[#8d9bb5]">Team size</label>
                <input placeholder="12 humans" className="mt-2 w-full rounded-sm border border-[#2a3758] bg-[#0d1426] px-4 py-3 text-sm outline-none focus:border-[#c4a059]" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-[0.28em] text-[#8d9bb5]">Hourly rate / typical project</label>
                <input placeholder="$200 / hr · projects from $25k" className="mt-2 w-full rounded-sm border border-[#2a3758] bg-[#0d1426] px-4 py-3 text-sm outline-none focus:border-[#c4a059]" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.28em] text-[#8d9bb5]">Based in</label>
                <input placeholder="Lisbon, PT" className="mt-2 w-full rounded-sm border border-[#2a3758] bg-[#0d1426] px-4 py-3 text-sm outline-none focus:border-[#c4a059]" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.28em] text-[#8d9bb5]">A short description</label>
              <textarea rows={4} placeholder="What you build, who you build it for, and one engagement that proves it." className="mt-2 w-full rounded-sm border border-[#2a3758] bg-[#0d1426] px-4 py-3 text-sm outline-none focus:border-[#c4a059]" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.28em] text-[#8d9bb5]">References we can call</label>
              <input placeholder="Two clients we can speak to · email or LinkedIn" className="mt-2 w-full rounded-sm border border-[#2a3758] bg-[#0d1426] px-4 py-3 text-sm outline-none focus:border-[#c4a059]" />
            </div>
            <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#c4a059] px-5 py-3.5 text-sm font-semibold uppercase tracking-widest text-[#0d1426] hover:bg-[#d9ba72]">
              Submit for vetting <Icon name="arrow" className="h-4 w-4" />
            </button>
            <p className="text-center text-xs text-[#8d9bb5]">A reference call usually happens before we add a studio.</p>
          </form>
        </div>
      </section>
    </div>
  )
}
