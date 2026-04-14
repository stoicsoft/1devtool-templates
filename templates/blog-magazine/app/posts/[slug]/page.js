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
  return { title: `${post.title} — Field & Form`, description: post.description }
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <div className="relative bg-[#f5efe2] text-[#141210]">
      <div className="pointer-events-none fixed inset-0 paper-tex opacity-40" />

      <header className="relative z-20 border-b border-[#d5c9b0]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#6c6354]">
          <Link href="/" className="hover:text-[#b24224]">← Field &amp; Form</Link>
          <p className="font-display text-sm italic normal-case tracking-normal text-[#141210]">{post.category || "Essay"}</p>
          <Link href="/posts" className="hover:text-[#b24224]">Archive →</Link>
        </div>
        <div className="rule h-px" />
      </header>

      <article className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#b24224]">{post.category || "Essay"}</p>
          <h1 className="font-display mt-4 text-[clamp(2.5rem,6vw,5rem)] leading-[1.04] tracking-tight">
            {post.title}
          </h1>
          <p className="font-display mt-5 text-2xl italic leading-snug text-[#3a3329]">
            {post.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-b border-[#d5c9b0] py-4 text-xs text-[#6c6354]">
            <span>by <span className="font-semibold text-[#141210]">{post.author}</span></span>
            <span>·</span>
            <span>{post.date}</span>
            {post.readTime && (<><span>·</span><span>{post.readTime}</span></>)}
          </div>

          <div
            className="prose-magazine font-display mt-12 text-lg leading-relaxed text-[#2c2821]"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="rule mt-16 h-px" />

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <Link href="/posts" className="text-sm text-[#b24224] underline-grow">← All pieces</Link>
            <Link href="/" className="text-sm text-[#b24224] underline-grow">Field &amp; Form home →</Link>
          </div>
        </div>
      </article>

      <style>{`
        .prose-magazine h2 { font-family: var(--font-display); font-style: italic; font-size: 2rem; margin-top: 2.5rem; margin-bottom: 1rem; color: #141210; }
        .prose-magazine h3 { font-family: var(--font-display); font-size: 1.4rem; margin-top: 2rem; margin-bottom: 0.75rem; color: #141210; }
        .prose-magazine p { margin-bottom: 1.25rem; }
        .prose-magazine p:first-of-type::first-letter { font-style: italic; font-weight: 500; float: left; font-size: 4.5rem; line-height: 0.85; margin-right: 10px; margin-top: 6px; color: #b24224; }
        .prose-magazine ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1.25rem; }
        .prose-magazine li { margin-bottom: 0.5rem; }
        .prose-magazine blockquote { border-left: 3px solid #b24224; padding-left: 1.25rem; font-style: italic; color: #3a3329; margin: 1.5rem 0; }
        .prose-magazine a { color: #b24224; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
        .prose-magazine strong { color: #141210; font-weight: 600; }
        .prose-magazine code { font-family: ui-monospace, monospace; background: #ebe2ce; padding: 1px 6px; border-radius: 3px; font-size: 0.9em; }
      `}</style>
    </div>
  )
}
