import Link from "next/link"
import { getNavigation } from "@/lib/docs"
import { site } from "@/lib/site"

function SearchBox() {
  return (
    <div className="hidden h-9 min-w-[280px] items-center justify-between rounded-lg border border-line bg-white px-3 text-sm text-muted shadow-sm md:flex">
      <span>Search docs...</span>
      <span className="rounded border border-line bg-paper px-1.5 py-0.5 font-mono text-[11px] text-muted">/</span>
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1480px] items-center justify-between px-4 lg:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink font-mono text-sm font-semibold text-white">
            {site.logo}
          </span>
          <span className="text-sm font-semibold">{site.name}</span>
        </Link>
        <div className="flex items-center gap-3">
          <SearchBox />
          <a href={site.url} className="hidden text-sm text-muted hover:text-ink sm:inline">
            {site.product}
          </a>
          <a
            href={site.primaryAction.href}
            className="rounded-lg bg-ink px-3 py-2 text-sm font-semibold text-white hover:bg-[var(--accent-dark)]"
          >
            Docs
          </a>
        </div>
      </div>
    </header>
  )
}

function Sidebar({ activeSlug }) {
  const groups = getNavigation()

  return (
    <aside className="hidden border-r border-line bg-[#f1f1ed] lg:block">
      <div className="sticky top-14 h-[calc(100vh-56px)] overflow-y-auto px-5 py-6">
        <div className="mb-6 rounded-lg border border-line bg-white p-3">
          <p className="text-xs font-semibold text-ink">{site.repoLabel}</p>
          <p className="mt-1 text-xs leading-5 text-muted">{site.description}</p>
        </div>
        <nav className="space-y-7">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="mb-2 text-xs font-semibold text-muted">{group.label}</p>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const active = item.slug === activeSlug
                  return (
                    <Link
                      key={item.slug}
                      href={item.href}
                      className={`block rounded-lg px-3 py-2 text-sm ${
                        active
                          ? "bg-white font-semibold text-[var(--accent-dark)] shadow-sm"
                          : "text-[#42463f] hover:bg-white hover:text-ink"
                      }`}
                    >
                      {item.title}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}

function TableOfContents({ headings }) {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-20 px-6 py-8">
        <p className="mb-3 text-xs font-semibold text-muted">On this page</p>
        <nav className="space-y-2">
          {headings.length ? (
            headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`block text-sm text-muted hover:text-ink ${heading.depth === 3 ? "pl-3" : ""}`}
              >
                {heading.title}
              </a>
            ))
          ) : (
            <p className="text-sm text-muted">No sections yet.</p>
          )}
        </nav>
        <div className="mt-8 rounded-lg border border-line bg-white p-4">
          <p className="text-sm font-semibold text-ink">Need a product page?</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Pair these docs with the 1DevTool landing and SaaS starters.
          </p>
        </div>
      </div>
    </aside>
  )
}

function MobileNav({ activeSlug }) {
  const docs = getNavigation().flatMap((group) => group.items)

  return (
    <div className="border-b border-line bg-white px-4 py-3 lg:hidden">
      <div className="flex gap-2 overflow-x-auto">
        {docs.map((doc) => (
          <Link
            key={doc.slug}
            href={doc.href}
            className={`shrink-0 rounded-lg border px-3 py-2 text-sm ${
              doc.slug === activeSlug
                ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent-dark)]"
                : "border-line text-muted"
            }`}
          >
            {doc.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function DocsShell({ doc, previous, next }) {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <MobileNav activeSlug={doc.slug} />
      <div className="mx-auto grid max-w-[1480px] lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)_260px]">
        <Sidebar activeSlug={doc.slug} />
        <main className="min-w-0 px-5 py-10 md:px-10 lg:px-12">
          <article className="mx-auto max-w-3xl">
            <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-muted" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-ink">{site.name}</Link>
              <span aria-hidden>/</span>
              <span className="text-ink">{doc.section}</span>
              <span aria-hidden>/</span>
              <span className="text-ink">{doc.title}</span>
            </nav>
            <div className="mb-8">
              {(doc.badge || doc.section) && (
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-lg border border-[var(--accent)] bg-[var(--accent-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--accent-dark)]">
                    {doc.badge || doc.section}
                  </span>
                </div>
              )}
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">{doc.title}</h1>
              {doc.description ? (
                <p className="mt-4 text-lg leading-8 text-muted">{doc.description}</p>
              ) : null}
            </div>
            <div className="doc-body" dangerouslySetInnerHTML={{ __html: doc.html }} />
            <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-sm text-muted">
              <a
                href={`https://github.com/${site.repoLabel}/edit/main/docs/${doc.slug}.md`}
                className="inline-flex items-center gap-1.5 hover:text-[var(--accent-dark)]"
              >
                Edit this page on GitHub
                <span aria-hidden>↗</span>
              </a>
              <span className="font-mono text-xs">Last reviewed · Apr 2026</span>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {previous ? (
                <Link href={previous.href} className="rounded-lg border border-line bg-white p-4 hover:border-[var(--accent)]">
                  <p className="text-xs uppercase tracking-wider text-muted">← Previous</p>
                  <p className="mt-1.5 font-semibold text-ink">{previous.title}</p>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link href={next.href} className="rounded-lg border border-line bg-white p-4 text-left hover:border-[var(--accent)] sm:text-right">
                  <p className="text-xs uppercase tracking-wider text-muted">Next →</p>
                  <p className="mt-1.5 font-semibold text-ink">{next.title}</p>
                </Link>
              ) : null}
            </div>
          </article>
        </main>
        <TableOfContents headings={doc.headings} />
      </div>
    </div>
  )
}

export function SiteHeader() {
  return <Header />
}
