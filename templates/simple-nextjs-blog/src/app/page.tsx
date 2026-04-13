import Link from 'next/link'
import { PostCard } from '@/components/PostCard'
import { getAllPosts } from '@/lib/posts'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
        <h1 className="text-3xl font-bold">Starter Blog</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Write posts in the <code>/posts</code> directory and they appear here automatically.
        </p>
        <Link href="/about" className="mt-4 inline-block text-sm font-semibold text-cyan-600 hover:text-cyan-500">
          About this blog
        </Link>
      </section>

      <section className="space-y-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  )
}
