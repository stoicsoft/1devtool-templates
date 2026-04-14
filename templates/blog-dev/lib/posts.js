import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"

const postsDir = path.join(process.cwd(), "posts")

function readDir(dir) {
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md") || name.endsWith(".mdx"))
}

export function getAllPosts(subdir = "") {
  const dir = subdir ? path.join(postsDir, subdir) : postsDir
  const files = readDir(dir)
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "")
      const raw = fs.readFileSync(path.join(dir, file), "utf8")
      const { data } = matter(raw)
      return {
        slug,
        collection: subdir || "posts",
        title: String(data.title || slug),
        description: String(data.description || ""),
        date: String(data.date || ""),
        tags: Array.isArray(data.tags) ? data.tags : [],
        author: String(data.author || ""),
        readTime: String(data.readTime || ""),
        category: String(data.category || ""),
        location: String(data.location || ""),
        cover: String(data.cover || ""),
        kind: String(data.kind || ""),
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug, subdir = "") {
  const dir = subdir ? path.join(postsDir, subdir) : postsDir
  const candidates = [path.join(dir, `${slug}.md`), path.join(dir, `${slug}.mdx`)]
  const fullPath = candidates.find((p) => fs.existsSync(p))
  if (!fullPath) return null
  const raw = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(raw)
  const html = marked.parse(content)
  return {
    slug,
    collection: subdir || "posts",
    title: String(data.title || slug),
    description: String(data.description || ""),
    date: String(data.date || ""),
    tags: Array.isArray(data.tags) ? data.tags : [],
    author: String(data.author || ""),
    readTime: String(data.readTime || ""),
    category: String(data.category || ""),
    location: String(data.location || ""),
    cover: String(data.cover || ""),
    kind: String(data.kind || ""),
    html,
    raw: content,
  }
}

export function getAllTags(subdir = "") {
  const posts = getAllPosts(subdir)
  const tags = new Map()
  posts.forEach((p) => {
    p.tags.forEach((t) => tags.set(t, (tags.get(t) || 0) + 1))
  })
  return Array.from(tags.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}
