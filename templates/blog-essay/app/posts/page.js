import Link from "next/link"
import { getAllPosts } from "../../lib/posts"

export const metadata = {
  title: "Archive — Wren Holloway",
  description: "Every essay and note published, quietly, since 2019.",
}

const romanize = (num) => {
  const map = [["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]]
  let r = ""
  for (const [s, v] of map) while (num >= v) { r += s; num -= v }
  return r
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "clock") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>)
  return null
}

export default function PostsArchive() {
  const posts = getAllPosts()

  // Group by year
  const byYear = {}
  posts.forEach((p, i) => {
    const year = p.date.split("-")[0] || "Unknown"
    byYear[year] = byYear[year] || []
    byYear[year].push({ ...p, numeral: romanize(posts.length - i) })
  })

  return (
    <div className="relative bg-[#fbf7ed] text-[#181512]">
      <div className="pointer-events-none fixed inset-0 paper opacity-40" />

      <header className="relative z-20 border-b border-[#d9cfb8]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3 font-sans text-xs uppercase tracking-[0.22em]">
          <Link href="/" className="text-[#6e6558] hover:text-[#9d3216]">← Home</Link>
          <p className="italic normal-case tracking-normal text-[#181512]">Archive</p>
          <Link href="/reading" className="text-[#6e6558] hover:text-[#9d3216]">Reading →</Link>
        </div>
        <div className="rule h-px" />
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#9d3216]">Archive</p>
          <h1 className="mt-4 text-[clamp(2.6rem,6vw,5rem)] leading-[1] tracking-tight">
            Every essay, <em className="italic text-[#9d3216]">by year.</em>
          </h1>
          <p className="mt-4 font-sans text-xs uppercase tracking-[0.22em] text-[#6e6558]">{posts.length} pieces · since 2019</p>

          <div className="mt-14 space-y-14">
            {Object.entries(byYear).map(([year, items]) => (
              <div key={year}>
                <div className="flex items-baseline justify-between">
                  <h2 className="text-6xl italic text-[#9d3216]">{year}</h2>
                  <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#6e6558]">{items.length} {items.length === 1 ? "piece" : "pieces"}</p>
                </div>
                <div className="rule mt-4 h-px" />

                <ul className="mt-6 divide-y divide-[#d9cfb8]">
                  {items.map((e) => (
                    <li key={e.slug} className="group">
                      <Link href={`/posts/${e.slug}`} className="grid grid-cols-[60px_1fr_80px_auto] items-start gap-6 py-6 -mx-3 px-3 rounded-md hover:bg-[#f3ecd9]/50">
                        <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#6e6558]">N°. {e.numeral}</span>
                        <div>
                          <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#9d3216]">{e.category || e.kind || "essay"}</p>
                          <h3 className="mt-1 text-3xl leading-snug">{e.title}</h3>
                          <p className="mt-2 italic text-[#2a2520]/75">{e.description}</p>
                        </div>
                        <span className="font-sans text-xs text-[#6e6558] self-center">{e.date}</span>
                        <span className="flex items-center gap-1 font-sans text-xs text-[#6e6558] self-center"><Icon name="clock" className="h-3 w-3" /> {e.readTime}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-[#181512]/20 px-5 py-3 font-sans text-sm hover:bg-[#181512] hover:text-[#fbf7ed]">
              ← Back to the front page
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
