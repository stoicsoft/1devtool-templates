import Link from "next/link"

export const metadata = {
  title: "About — log.stoicsoft.com",
  description: "The engineering journal of the StoicSoft studio. Who writes here, what we ship, and how to reach us.",
}

const authors = [
  { name: "Dante Okafor", role: "Platform · Go, infra, ops", posts: 82 },
  { name: "Mei Wong", role: "Product · Next.js, TypeScript", posts: 64 },
  { name: "Clara Figueira", role: "Data · Postgres, observability", posts: 38 },
  { name: "Amara Reyes", role: "AI · retrieval, evals", posts: 18 },
  { name: "Jonas Park", role: "Performance · Rust, caches", posts: 12 },
]

export default function About() {
  return (
    <div className="relative overflow-hidden bg-[#070809] text-white">
      <div className="pointer-events-none absolute inset-0 gridlines" />

      <header className="relative z-20 border-b border-[#222429]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-mono text-sm">
            <span className="text-[#7cf2a0]">$</span>
            <span className="text-white">log.stoicsoft.com</span>
          </Link>
          <nav className="flex items-center gap-6 font-mono text-xs text-[#b4bac2]">
            <Link href="/posts" className="hover:text-[#7cf2a0]">./posts</Link>
            <Link href="/tags" className="hover:text-[#7cf2a0]">./tags</Link>
            <Link href="/about" className="text-[#7cf2a0]">./about</Link>
          </nav>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="font-mono text-xs text-[#6a6d75]">
            <span className="text-[#7cf2a0]">$</span> cat about.md
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            The engineering journal of the <span className="text-[#7cf2a0]">StoicSoft studio.</span>
          </h1>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#b4bac2]">
            <p>
              log.stoicsoft.com is the open engineering notebook of the StoicSoft studio. We&apos;re a team of
              five working on independent software — ServerCompass, 1DevTool, Aether, and a few things that
              aren&apos;t announced yet. This is where we write down what we learn while doing it.
            </p>
            <p>
              The posts are the same ones we send to ourselves on Slack, cleaned up once for the outside world.
              We aim for one per week, published on Wednesday. We&apos;ve missed three Wednesdays in two years.
            </p>
            <p>
              There is no content strategy. There is no SEO plan. If a post feels like it wouldn&apos;t be
              useful to a small team running production systems, we don&apos;t publish it.
            </p>
          </div>

          <div className="mt-14 rounded-md border border-[#222429] bg-[#0d0e11] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#7cf2a0]">./authors</p>
            <ul className="mt-4 divide-y divide-[#222429]">
              {authors.map((a) => (
                <li key={a.name} className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-medium">{a.name}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6a6d75]">{a.role}</p>
                  </div>
                  <span className="font-mono text-xs text-[#b4bac2]">{a.posts} posts</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-md border border-[#222429] bg-[#0d0e11] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#7cf2a0]">./reach-us</p>
              <p className="mt-3 text-sm text-[#b4bac2]">
                Tips, questions, and kind corrections: <br />
                <a href="mailto:log@stoicsoft.com" className="text-[#7cf2a0] hover:underline">log@stoicsoft.com</a>
              </p>
            </div>
            <div className="rounded-md border border-[#222429] bg-[#0d0e11] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#7cf2a0]">./subscribe</p>
              <p className="mt-3 text-sm text-[#b4bac2]">
                New posts every Wednesday. Or point your reader at <a href="#" className="text-[#7cf2a0] hover:underline">/feed.xml</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
