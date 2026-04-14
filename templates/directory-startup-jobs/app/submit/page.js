import Link from "next/link"
import { getHero, getCategories } from "../../lib/items"

export const metadata = {
  title: "Post a role — Roster",
  description: "Post an engineering role on the Roster job board. $80 flat. Live for 30 days.",
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
    <div className="relative bg-[#f6f7f9] text-[#0c0f17]">
      <div className="pointer-events-none fixed inset-0 bg-aurora" />
      <header className="relative z-20 border-b border-black/5 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-500 text-white">R</span>
            {hero.name}
          </Link>
          <Link href="/" className="text-sm text-black/70 hover:text-indigo-600">← all roles</Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Post a role</p>
          <h1 className="mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold leading-[1.05]">
            $80, flat. <span className="bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">Live for 30 days.</span>
          </h1>
          <p className="mt-5 text-lg text-black/70">
            We hand-review every role before it goes up. If it doesn&rsquo;t pass our rules, we refund — usually within a day.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <form className="space-y-5 rounded-2xl border border-black/10 bg-white p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-black/60">Company</label>
                  <input placeholder="ServerCompass" className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-black/60">Role title</label>
                  <input placeholder="Platform Engineer" className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-black/60">One-line tagline</label>
                <input placeholder="Run our probe service in production" className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-black/60">Salary band · USD</label>
                  <input placeholder="$140k — $180k" className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-black/60">Equity range</label>
                  <input placeholder="0.4 — 0.8%" className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-black/60">Category</label>
                  <select className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-indigo-500">
                    <option>Choose a category</option>
                    {categories.map((c) => <option key={c.id} dangerouslySetInnerHTML={{ __html: c.label }} />)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-black/60">Location · working style</label>
                  <input placeholder="Remote · EU/US" className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-black/60">Direct application link</label>
                <input placeholder="https://yourcompany.com/jobs/role" className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-black/60">Description</label>
                <textarea rows={5} placeholder="What the role does, what makes it interesting, the team, the interview process." className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
              </div>
              <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0c0f17] px-5 py-3.5 text-sm font-semibold text-white hover:bg-indigo-600">
                Continue · $80 <Icon name="arrow" className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-black/55">Stripe checkout next. Refund if we decline within 24 hours.</p>
            </form>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-black/8 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">What you get</p>
                <ul className="mt-4 space-y-3 text-sm text-black/75">
                  {[
                    "30 days at the top of the relevant category",
                    "Inclusion in the Friday Roster digest",
                    "Direct application link, no middleman",
                    "Refund if we don&rsquo;t accept the listing",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span dangerouslySetInnerHTML={{ __html: t.replaceAll("&apos;", "&rsquo;") }} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Free for nonprofits</p>
                <p className="mt-2 text-emerald-900">Email <a className="underline" href="mailto:hello@roster.jobs">hello@roster.jobs</a> with proof of registration.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
