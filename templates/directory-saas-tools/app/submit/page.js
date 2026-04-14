import Link from "next/link"
import { getHero, getCategories } from "../../lib/items"

export const metadata = {
  title: "Submit a tool — StackPicks",
  description: "Submit a SaaS tool to the StackPicks directory. Free. Usually reviewed within a week.",
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  return null
}

export default function Submit() {
  const hero = getHero()
  const categories = getCategories()

  return (
    <div className="relative bg-[#0a0b10] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] glow-bg" />
      <div className="pointer-events-none absolute inset-0 dotgrid opacity-50" />

      <header className="relative z-20 border-b border-white/5">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#3ee0a5] to-[#d4ff3d] text-[#0a0b10]">★</span>
            {hero.name}
          </Link>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <Link href="/" className="hover:text-white">Directory</Link>
            <Link href="/about" className="hover:text-[#3ee0a5]">About</Link>
            <Link href="/submit" className="text-[#3ee0a5]">Submit</Link>
          </nav>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#3ee0a5]">Submit</p>
          <h1 className="mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[1.05]">
            Tell us about <span className="font-serif italic text-[#3ee0a5]">the tool.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Submissions are free. We read every one. Expect a yes, a friendly no, or a reply asking for more detail — usually within a week.
          </p>

          <div className="mt-14 grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <form className="space-y-5 rounded-3xl border border-white/10 bg-[#0f1016] p-8">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Tool name</label>
                <input type="text" placeholder="e.g. ServerCompass" className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0b10] px-4 py-3 text-sm outline-none focus:border-[#3ee0a5]" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Website URL</label>
                <input type="url" placeholder="https://yourtool.com" className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0b10] px-4 py-3 text-sm outline-none focus:border-[#3ee0a5]" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-white/60">One-line tagline</label>
                <input type="text" placeholder="Infrastructure monitoring for small teams" className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0b10] px-4 py-3 text-sm outline-none focus:border-[#3ee0a5]" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Category</label>
                  <select className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0b10] px-4 py-3 text-sm outline-none focus:border-[#3ee0a5]">
                    <option value="">Choose a category</option>
                    {categories.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Pricing tier</label>
                  <input type="text" placeholder="Free · Pro $19 · Team $49" className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0b10] px-4 py-3 text-sm outline-none focus:border-[#3ee0a5]" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-white/60">What does it do?</label>
                <textarea rows={4} placeholder="A short paragraph. Tell us the problem it solves and how it&rsquo;s different from the four other tools we&rsquo;d consider." className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0b10] px-4 py-3 text-sm outline-none focus:border-[#3ee0a5]" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Your email</label>
                <input type="email" placeholder="you@company.com" className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0b10] px-4 py-3 text-sm outline-none focus:border-[#3ee0a5]" />
              </div>
              <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#3ee0a5] px-5 py-3.5 text-sm font-semibold text-[#0a0b10] hover:bg-[#d4ff3d]">
                Submit for review <Icon name="arrow" className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-white/50">
                By submitting, you&rsquo;re confirming you have permission to represent the tool.
              </p>
            </form>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-[#0f1016] p-6">
                <h2 className="font-serif text-2xl italic">What to expect</h2>
                <ul className="mt-4 space-y-3 text-sm text-white/75">
                  {[
                    "We reply within seven business days.",
                    "We may ask for a trial account or a screenshot of the pricing page.",
                    "Accepted tools publish the same week, no announcement fanfare.",
                    "Declined tools get a one-paragraph explanation, not a form letter.",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-[#3ee0a5]" />
                      {t.replaceAll("&apos;", "'").replaceAll("&rsquo;", "'")}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-[#d4ff3d]/20 bg-[#d4ff3d]/5 p-6">
                <p className="text-xs uppercase tracking-widest text-[#d4ff3d]">No fee</p>
                <h3 className="mt-2 font-serif text-2xl italic">It&rsquo;s always free to submit.</h3>
                <p className="mt-2 text-sm text-white/75">
                  We don&rsquo;t accept payment to list, rank, or feature a tool — even from products we already love.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
