import { getAllPosts } from '@/lib/posts'

export function GET() {
  const site = 'https://example.com'
  const posts = getAllPosts()

  const items = posts
    .map(
      (post) => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${site}/blog/${post.slug}</link>
          <guid>${site}/blog/${post.slug}</guid>
          <description><![CDATA[${post.description}]]></description>
          <pubDate>${new Date(post.date || Date.now()).toUTCString()}</pubDate>
        </item>
      `
    )
    .join('')

  const body = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Starter Blog</title>
    <link>${site}</link>
    <description>A markdown-powered blog template</description>
    ${items}
  </channel>
</rss>`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}
