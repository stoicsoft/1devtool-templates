import { notFound } from "next/navigation"
import { DocsShell } from "@/components/docs-shell"
import { getAdjacentDocs, getAllDocs, getDocBySlug } from "@/lib/docs"
import { site } from "@/lib/site"

export function generateStaticParams() {
  return [{ slug: [] }, ...getAllDocs().map((doc) => ({ slug: doc.slugParts }))]
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const doc = getDocBySlug(slug)
  if (!doc) return { title: "Not found" }

  return {
    title: `${doc.title} - ${site.name}`,
    description: doc.description,
  }
}

export default async function DocsPage({ params }) {
  const { slug } = await params
  const doc = getDocBySlug(slug)
  if (!doc) notFound()

  const { previous, next } = getAdjacentDocs(doc.slug)
  return <DocsShell doc={doc} previous={previous} next={next} />
}
