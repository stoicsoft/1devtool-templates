import Link from "next/link"
import { getHero } from "../../lib/items"

export const metadata = {
  title: "About — Roster",
  description: "About Roster, the small engineering job board run by the StoicSoft studio.",
}

export default function About() {
  const hero = getHero()
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
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">About</p>
          <h1 className="mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold leading-[1.05]">
            A small board, <span className="bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">on purpose.</span>
          </h1>
          <p className="mt-5 text-lg text-black/70">
            {hero.name} is the engineering job board the StoicSoft studio runs because we kept emailing the same five rules to every other job board on the internet. The rules are short and we&rsquo;re not bending them.
          </p>

          <div className="mt-12 grid gap-4">
            {[
              { t: "Salary bands are honest", b: "Every listing shows the actual pay range, including the top of the band. Anchored to a market study refreshed every quarter." },
              { t: "Real interview process", b: "Posted on the job page itself. Take-homes are paid. Reference checks happen before, not during, an offer." },
              { t: "Indie scale only", b: "Companies under 50 people. The kind of place where the CEO sometimes still ships a feature." },
              { t: "No recruiter spam", b: "Roles link directly to the team. We don&rsquo;t resell your application to a third-party ATS." },
              { t: "No equity-only", b: "Equity is included where relevant, but always paired with a real salary." },
            ].map((rule) => (
              <div key={rule.t} className="rounded-2xl border border-black/8 bg-white p-5">
                <h3 className="font-semibold text-indigo-700">{rule.t}</h3>
                <p className="mt-2 text-sm text-black/70" dangerouslySetInnerHTML={{ __html: rule.b.replaceAll("&apos;", "&rsquo;") }} />
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-gradient-to-br from-indigo-600 to-emerald-500 p-8 text-white">
            <h2 className="text-2xl font-bold">Who runs it</h2>
            <p className="mt-3 text-white/90">
              {hero.name} is maintained by the StoicSoft studio — the same group of humans who ship ServerCompass, run 1DevTool, and host Signal FM. We use this board ourselves to hire for our own products.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["StoicSoft", "ServerCompass", "1DevTool", "Aether"].map((n) => (
                <span key={n} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
