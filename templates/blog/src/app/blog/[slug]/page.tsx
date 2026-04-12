import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return { title: 'Post not found' }
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) {
    notFound()
  }

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <p className="text-sm text-slate-500">{post.date}</p>
      <h1>{post.title}</h1>
      <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeHighlight] } }} />
    </article>
  )
}
