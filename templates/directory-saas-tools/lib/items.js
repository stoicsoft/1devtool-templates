import fs from "fs"
import path from "path"

let cached = null

export function loadData() {
  if (cached) return cached
  const file = path.join(process.cwd(), "data", "items.json")
  cached = JSON.parse(fs.readFileSync(file, "utf8"))
  return cached
}

export function getAllItems() {
  return loadData().items
}

export function getItemBySlug(slug) {
  return loadData().items.find((i) => i.slug === slug) || null
}

export function getCategories() {
  return loadData().categories
}

export function getHero() {
  return loadData().hero
}

export function getStats() {
  return loadData().stats
}

export function getRelated(slug, max = 3) {
  const all = loadData().items
  const current = all.find((i) => i.slug === slug)
  if (!current) return []
  return all
    .filter((i) => i.slug !== slug && i.category === current.category)
    .slice(0, max)
}
