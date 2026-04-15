import Link from "next/link"
import { SiteHeader } from "@/components/docs-shell"
import { getAllDocs, getNavigation } from "@/lib/docs"
import { site } from "@/lib/site"

export default function HomePage() {
  const docs = getAllDocs()
  const groups = getNavigation()
  const featured = docs.slice(0, 4)

  return (
    <main className="min-h-screen bg-paper">
      <SiteHeader />
      <section className="surface-grid border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold text-[var(--accent-dark)]">{site.eyebrow}</p>
            <h1 className="max-w-3xl text-5xl font-bold leading-tight text-ink md:text-6xl">{site.heroTitle}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              {site.heroBody}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={site.primaryAction.href}
                className="rounded-lg bg-ink px-4 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-dark)]"
              >
                {site.primaryAction.label}
              </Link>
              <Link
                href={site.secondaryAction.href}
                className="rounded-lg border border-line bg-white px-4 py-3 text-sm font-semibold text-ink hover:border-[var(--accent)]"
              >
                {site.secondaryAction.label}
              </Link>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {site.stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-line bg-white p-4">
                  <p className="text-2xl font-bold text-ink">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="brand-ring overflow-hidden rounded-lg border border-line bg-white">
            <img src={site.image} alt="" className="h-52 w-full object-cover" />
            <div className="border-t border-line p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-lg bg-[var(--accent-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--accent-dark)]">
                  docs/{site.product.toLowerCase()}
                </span>
                <span className="font-mono text-xs text-muted">/</span>
              </div>
              <div className="space-y-3">
                {featured.slice(0, 3).map((doc) => (
                  <Link key={doc.slug} href={doc.href} className="block rounded-lg border border-line p-3 hover:border-[var(--accent)]">
                    <p className="text-sm font-semibold text-ink">{doc.title}</p>
                    <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted">{doc.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.label} className="rounded-lg border border-line bg-white p-5">
              <p className="text-sm font-semibold text-[var(--accent-dark)]">{group.label}</p>
              <div className="mt-4 space-y-3">
                {group.items.map((doc) => (
                  <Link key={doc.slug} href={doc.href} className="block">
                    <p className="font-semibold text-ink">{doc.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{doc.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
