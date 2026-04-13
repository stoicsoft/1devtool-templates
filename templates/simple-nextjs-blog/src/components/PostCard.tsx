import Link from 'next/link'
import type { BlogPostMeta } from '@/lib/posts'

export function PostCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
      <p className="text-xs text-slate-500">{post.date}</p>
      <h2 className="mt-1 text-xl font-semibold">
        <Link href={`/blog/${post.slug}`} className="hover:text-cyan-600">
          {post.title}
        </Link>
      </h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{post.description}</p>
    </article>
  )
}
