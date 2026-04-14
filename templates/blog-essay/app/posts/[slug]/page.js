import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "../../../lib/posts"

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Not found" }
  return { title: `${post.title} — Wren Holloway`, description: post.description }
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

export default async function PostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const all = getAllPosts()
  const idx = all.findIndex((p) => p.slug === post.slug)
  const numeral = romanize(all.length - idx)
  const older = all[idx + 1]
  const newer = all[idx - 1]

  return (
    <div className="relative bg-[#fbf7ed] text-[#181512]">
      <div className="pointer-events-none fixed inset-0 paper opacity-40" />

      <header className="relative z-20 border-b border-[#d9cfb8]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3 font-sans text-xs uppercase tracking-[0.22em]">
          <Link href="/" className="text-[#6e6558] hover:text-[#9d3216]">← Home</Link>
          <p className="italic normal-case tracking-normal text-[#181512]">N°. {numeral} · {post.category || post.kind || "Essay"}</p>
          <Link href="/posts" className="text-[#6e6558] hover:text-[#9d3216]">Archive →</Link>
        </div>
        <div className="rule h-px" />
      </header>

      <article className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="flex items-center gap-3 font-sans text-xs uppercase tracking-[0.22em] text-[#6e6558]">
            <span className="rounded-full border border-[#9d3216]/30 bg-[#9d3216]/10 px-2.5 py-1 text-[#9d3216]">N°. {numeral}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Icon name="clock" className="h-3 w-3" /> {post.readTime}</span>
          </div>

          <h1 className="mt-7 text-[clamp(2.5rem,6vw,5rem)] leading-[1.04] tracking-tight">
            {post.title}
          </h1>

          <p className="mt-6 text-2xl italic leading-relaxed text-[#2a2520]/90">
            {post.description}
          </p>

          <div className="rule mt-10 h-px" />

          <div
            className="prose-essay dropcap-first mt-10 text-xl leading-relaxed text-[#2a2520]"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="rule mt-14 h-px" />

          <div className="mt-10 grid gap-4 font-sans text-xs uppercase tracking-[0.18em] text-[#6e6558] sm:grid-cols-3">
            <p>{post.readTime}</p>
            <p>{post.category || post.kind || "Essay"}</p>
            <p>by {post.author}</p>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2">
            {older && (
              <Link href={`/posts/${older.slug}`} className="group rounded-lg border border-[#d9cfb8] bg-white/40 p-5">
                <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#6e6558]">← Older</p>
                <p className="mt-2 text-xl italic group-hover:text-[#9d3216]">{older.title}</p>
              </Link>
            )}
            {newer && (
              <Link href={`/posts/${newer.slug}`} className="group rounded-lg border border-[#d9cfb8] bg-white/40 p-5 sm:text-right">
                <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#6e6558]">Newer →</p>
                <p className="mt-2 text-xl italic group-hover:text-[#9d3216]">{newer.title}</p>
              </Link>
            )}
          </div>
        </div>
      </article>

      <style>{`
        .prose-essay p { margin-bottom: 1.5rem; }
        .prose-essay h2 { font-weight: 500; font-style: italic; font-size: 2.25rem; margin-top: 3rem; margin-bottom: 1.25rem; color: #9d3216; }
        .prose-essay h3 { font-weight: 500; font-size: 1.5rem; margin-top: 2rem; margin-bottom: 0.75rem; color: #181512; }
        .prose-essay a { color: #9d3216; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
        .prose-essay strong { color: #181512; font-weight: 600; }
        .prose-essay em { color: #9d3216; }
        .prose-essay blockquote { border-left: 2px solid #9d3216; padding-left: 1.25rem; font-style: italic; color: #2a2520; margin: 1.75rem 0; }
        .prose-essay ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .prose-essay li { margin-bottom: 0.5rem; }
        .prose-essay code { font-family: ui-monospace, monospace; background: #f3ecd9; padding: 1px 6px; border-radius: 3px; font-size: 0.85em; }
        .dropcap-first p:first-of-type::first-letter { font-weight: 500; font-style: italic; float: left; font-size: 5rem; line-height: 0.8; margin-right: 10px; margin-top: 4px; color: #9d3216; }
      `}</style>
    </div>
  )
}
