import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"

const docsDir = path.join(process.cwd(), "docs")

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/`/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

function stripMarkdown(value) {
  return String(value)
    .replace(/[`*_#]/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .trim()
}

function addHeadingAnchors(markdown) {
  return markdown.replace(/^(#{2,3})\s+(.+)$/gm, (match, marks, title) => {
    const clean = stripMarkdown(title)
    return `${marks} <span id="${slugify(clean)}"></span>${title}`
  })
}

function preprocessCallouts(markdown) {
  return markdown.replace(
    /^>\s*\[!(NOTE|TIP|WARNING|IMPORTANT|CAUTION|INFO)\][ \t]*\n((?:^>.*(?:\n|$))*)/gim,
    (_, type, body) => {
      const kind = type.toLowerCase()
      const label = type.charAt(0) + type.slice(1).toLowerCase()
      const content = body.replace(/^>\s?/gm, "").trim()
      return `\n<div class="callout callout-${kind}">\n<div class="callout-label">${label}</div>\n<div class="callout-body">\n\n${content}\n\n</div>\n</div>\n`
    }
  )
}

function getHeadings(markdown) {
  return markdown
    .split("\n")
    .filter((line) => /^#{2,3}\s+/.test(line))
    .map((line) => {
      const depth = line.startsWith("###") ? 3 : 2
      const title = stripMarkdown(line.replace(/^#{2,3}\s+/, ""))
      return { id: slugify(title), title, depth }
    })
}

function walk(dir, prefix = []) {
  if (!fs.existsSync(dir)) return []

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      return walk(fullPath, [...prefix, entry.name])
    }
    if (!entry.name.endsWith(".md")) return []
    const slugParts = [...prefix, entry.name.replace(/\.md$/, "")]
    return [readDoc(fullPath, slugParts)]
  })
}

function readDoc(fullPath, slugParts) {
  const raw = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(raw)
  const headings = getHeadings(content)
  const html = marked.parse(preprocessCallouts(addHeadingAnchors(content)))

  return {
    slug: slugParts.join("/"),
    slugParts,
    href: `/docs/${slugParts.join("/")}`,
    title: String(data.title || slugParts.at(-1)),
    description: String(data.description || ""),
    section: String(data.section || "Docs"),
    sectionOrder: Number(data.sectionOrder || 99),
    order: Number(data.order || 99),
    badge: String(data.badge || ""),
    headings,
    html,
  }
}

export function getAllDocs() {
  return walk(docsDir).sort((a, b) => {
    if (a.sectionOrder !== b.sectionOrder) return a.sectionOrder - b.sectionOrder
    if (a.order !== b.order) return a.order - b.order
    return a.title.localeCompare(b.title)
  })
}

export function getNavigation() {
  const groups = new Map()

  for (const doc of getAllDocs()) {
    if (!groups.has(doc.section)) {
      groups.set(doc.section, {
        label: doc.section,
        order: doc.sectionOrder,
        items: [],
      })
    }
    groups.get(doc.section).items.push(doc)
  }

  return Array.from(groups.values()).sort((a, b) => a.order - b.order)
}

export function getDocBySlug(slug = []) {
  const docs = getAllDocs()
  if (!slug || slug.length === 0) return docs[0] || null
  const normalized = Array.isArray(slug) ? slug.join("/") : String(slug)
  return docs.find((doc) => doc.slug === normalized) || null
}

export function getAdjacentDocs(currentSlug) {
  const docs = getAllDocs()
  const index = docs.findIndex((doc) => doc.slug === currentSlug)

  return {
    previous: index > 0 ? docs[index - 1] : null,
    next: index >= 0 && index < docs.length - 1 ? docs[index + 1] : null,
  }
}
