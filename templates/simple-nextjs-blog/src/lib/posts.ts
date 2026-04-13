import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

const postsDir = path.join(process.cwd(), 'posts')

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDir)) {
    return []
  }

  return fs
    .readdirSync(postsDir)
    .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '')
      const fullPath = path.join(postsDir, fileName)
      const raw = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(raw)

      return {
        slug,
        title: String(data.title || slug),
        description: String(data.description || ''),
        date: String(data.date || ''),
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const candidates = [path.join(postsDir, `${slug}.md`), path.join(postsDir, `${slug}.mdx`)]
  const fullPath = candidates.find((candidate) => fs.existsSync(candidate))
  if (!fullPath) {
    return null
  }

  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: String(data.title || slug),
    description: String(data.description || ''),
    date: String(data.date || ''),
    content,
  }
}
