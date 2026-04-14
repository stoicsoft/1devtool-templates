import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "../../../lib/posts"

export function generateStaticParams() {
  const essays = getAllPosts("essays").map((p) => ({ slug: p.slug }))
  const notes = getAllPosts("notes").map((p) => ({ slug: p.slug }))
  return [...essays, ...notes]
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  let post = getPostBySlug(slug, "essays") || getPostBySlug(slug, "notes")
  if (!post) return { title: "Not found" }
  return { title: `${post.title} — anya.garden`, description: post.description }
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "pencil") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M14 4l6 6-12 12H2v-6L14 4Z"/></svg>)
  if (name === "leaf") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21 3c0 11-7 18-18 18 0-11 7-18 18-18Z"/><path d="M8 16c3-3 8-8 12-12"/></svg>)
  return null
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const essayPost = getPostBySlug(slug, "essays")
  const notePost = essayPost ? null : getPostBySlug(slug, "notes")
  const post = essayPost || notePost
  if (!post) notFound()
  const isNote = !!notePost

  const siblings = isNote ? getAllPosts("notes") : getAllPosts("essays")
  const idx = siblings.findIndex((p) => p.slug === post.slug)
  const older = siblings[idx + 1]
  const newer = siblings[idx - 1]

  const accent = isNote ? "#4a6135" : "#b85429"
  const label = isNote ? "note" : "essay"
  const IconEl = isNote ? "leaf" : "pencil"

  return (
    <div className="relative bg-[#f9f6f0] text-[#1d1a16]">
      <div className="pointer-events-none fixed inset-0 paper opacity-40" />

      <header className="relative z-20 border-b border-[#ddd5be]">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 font-mono text-base">
            <span className="text-[#4a6135]">~/</span>
            <span>anya.garden</span>
          </Link>
          <nav className="flex items-center gap-5 font-mono text-xs text-[#2a2620]">
            <Link href="/posts" className="underline-grow">essays</Link>
            <Link href="/notes" className="underline-grow">notes</Link>
            <Link href="/bookshelf" className="underline-grow">bookshelf</Link>
            <Link href="/about" className="underline-grow">about</Link>
          </nav>
        </div>
      </header>

      <article className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="flex items-center gap-2 font-mono text-xs text-[#6f6757]">
            <Icon name={IconEl} className="h-3.5 w-3.5" style={{ color: accent }} />
            <span className="uppercase tracking-[0.22em]" style={{ color: accent }}>{label}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-serif mt-5 text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.02]">{post.title}</h1>

          {post.description && (
            <p className="mt-4 text-xl italic text-[#2a2620]/80">{post.description}</p>
          )}

          <div
            className="prose-personal font-serif mt-12 text-lg leading-relaxed text-[#2a2620]"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="dashed-rule mt-14 h-px" />

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {older && (
              <Link href={`/posts/${older.slug}`} className="group rounded-md border border-[#ddd5be] bg-[#efeadb]/50 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6f6757]">← older {label}</p>
                <p className="font-serif mt-2 text-xl group-hover:italic" style={{ color: accent }}>{older.title}</p>
              </Link>
            )}
            {newer && (
              <Link href={`/posts/${newer.slug}`} className="group rounded-md border border-[#ddd5be] bg-[#efeadb]/50 p-5 sm:text-right">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6f6757]">newer {label} →</p>
                <p className="font-serif mt-2 text-xl group-hover:italic" style={{ color: accent }}>{newer.title}</p>
              </Link>
            )}
          </div>

          <div className="mt-10 flex items-center justify-between font-mono text-xs text-[#6f6757]">
            <Link href={isNote ? "/notes" : "/posts"} className="hover:text-[#b85429]">← all {label}s</Link>
            <Link href="/" className="hover:text-[#b85429]">~/anya.garden</Link>
          </div>
        </div>
      </article>

      <style>{`
        .prose-personal p { margin-bottom: 1.5rem; }
        .prose-personal h2 { font-family: var(--font-serif); font-weight: 500; font-size: 1.85rem; margin-top: 2.5rem; margin-bottom: 1rem; color: #1d1a16; }
        .prose-personal h3 { font-family: var(--font-serif); font-weight: 500; font-size: 1.4rem; margin-top: 2rem; margin-bottom: 0.75rem; color: #1d1a16; }
        .prose-personal a { color: ${accent}; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
        .prose-personal strong { color: #1d1a16; font-weight: 600; }
        .prose-personal em { font-style: italic; color: ${accent}; }
        .prose-personal ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .prose-personal li { margin-bottom: 0.5rem; }
        .prose-personal blockquote { border-left: 2px solid ${accent}; padding-left: 1.25rem; font-style: italic; color: #2a2620; margin: 1.5rem 0; }
        .prose-personal code { font-family: var(--font-mono); background: #efeadb; padding: 1px 6px; border-radius: 3px; font-size: 0.9em; }
      `}</style>
    </div>
  )
}
