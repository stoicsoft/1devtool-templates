"use client"

import { use } from "react"
import Link from "next/link"
import { Icon, DOCS, CHUNKS, Sidebar } from "../../data"

export default function DocumentDetail({ params }) {
  const { id } = use(params)
  const doc = DOCS[id] || DOCS["billing-policy"]
  const fromDoc = CHUNKS.filter((c) => c.slug === id)

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="Documents" />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-2.5 border-b border-[var(--color-line)] px-5">
          <Link href="/" className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-[13px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]">
            <Icon name="back" className="h-4 w-4" /> Playground
          </Link>
          <span className="text-[var(--color-line)]">/</span>
          <Icon name="doc" className="h-4 w-4 text-[var(--color-faint)]" />
          <h1 className="font-mono text-[14px] font-medium">{doc.file}</h1>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">Re-embed</button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-ink)] px-3 text-[12.5px] font-medium text-white hover:bg-black">Open in editor</button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-8 py-8">
          <div className="mx-auto flex max-w-[960px] gap-8">
            {/* doc body */}
            <article className="min-w-0 flex-1">
              <h2 className="font-serif text-[26px] font-medium tracking-[-0.02em]">{doc.title}</h2>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-y border-[var(--color-line-2)] py-2.5 text-[12px] text-[var(--color-muted)]">
                <span className="inline-flex items-center gap-1.5"><Icon name="index" className="h-3.5 w-3.5 text-[var(--color-faint)]" /> support-kb</span>
                <span><span className="text-[var(--color-faint)]">chunks</span> {doc.chunks}</span>
                <span><span className="text-[var(--color-faint)]">tokens</span> {doc.tokens}</span>
                <span className="inline-flex items-center gap-1.5"><Icon name="clock" className="h-3.5 w-3.5 text-[var(--color-faint)]" /> {doc.updated}</span>
                <span className="font-mono text-[11px] text-[var(--color-faint)]">voyage-3 · 1024d</span>
              </div>

              <div className="mt-6 space-y-5">
                {doc.sections.map((sec) => (
                  <section key={sec.h} className={sec.cited ? "rounded-r-lg border-l-[3px] border-[var(--color-clay)] bg-[var(--color-clay-soft)]/30 py-2 pl-4 pr-3" : ""}>
                    <div className="flex items-center gap-2">
                      <h3 className="font-mono text-[13px] font-medium text-[var(--color-ink)]">{sec.h}</h3>
                      {sec.cited && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-white px-1.5 py-[1px] text-[9.5px] font-medium text-[var(--color-clay-2)] ring-1 ring-[var(--color-clay)]/25">retrieved</span>
                      )}
                    </div>
                    <p className="mt-1.5 text-[14px] leading-[1.7] text-[var(--color-ink-2)]">{sec.body}</p>
                  </section>
                ))}
              </div>
            </article>

            {/* retrieval rail */}
            <aside className="hidden w-[220px] shrink-0 lg:block">
              <div className="sticky top-0 space-y-4">
                <div className="rounded-xl border border-[var(--color-line)] bg-white p-4">
                  <div className="flex items-center gap-1.5">
                    <Icon name="spark" className="h-3.5 w-3.5 text-[var(--color-clay)]" />
                    <p className="text-[12.5px] font-medium">In the current answer</p>
                  </div>
                  <p className="mt-1.5 text-[11.5px] leading-[1.55] text-[var(--color-muted)]">
                    {fromDoc.filter((c) => c.cited).length} passage(s) from this doc were cited in the last grounded answer.
                  </p>
                  <Link href="/" className="mt-2.5 inline-flex items-center gap-1 text-[12px] font-medium text-[var(--color-clay)] hover:text-[var(--color-clay-2)]">
                    Back to answer <Icon name="arrow" className="h-3 w-3" />
                  </Link>
                </div>

                <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                  <div className="px-4 py-2.5"><p className="text-[10.5px] font-medium tracking-wide text-[var(--color-faint)]">CHUNKS FROM THIS DOC</p></div>
                  {fromDoc.map((c) => (
                    <div key={c.rank} className="border-t border-[var(--color-line-2)] px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className={`grid h-[16px] w-[16px] place-items-center rounded-[3px] text-[9px] font-semibold ${c.cited ? "bg-[var(--color-clay-soft)] text-[var(--color-clay-2)]" : "bg-[var(--color-sunk)] text-[var(--color-faint)]"}`}>{c.rank}</span>
                        <span className="truncate text-[11px]">{c.loc}</span>
                        <span className="ml-auto font-mono text-[10px] text-[var(--color-faint)]">{c.score.toFixed(3)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}
