"use client"

import { use, useState } from "react"
import Link from "next/link"
import { Icon, findArticle, RELATED, Nav } from "../../data"

export default function Article({ params }) {
  const { slug } = use(params)
  const a = findArticle(slug)
  const [helpful, setHelpful] = useState(null)

  return (
    <div className="min-h-screen w-screen bg-[var(--color-page)] text-[var(--color-ink)]">
      <Nav />

      <div className="mx-auto flex max-w-[1000px] gap-10 px-6 py-8">
        <article className="min-w-0 flex-1">
          {/* breadcrumb */}
          <div className="flex items-center gap-1.5 text-[12.5px] text-[var(--color-faint)]">
            <Link href="/" className="hover:text-[var(--color-ink)]">Help center</Link>
            <span>/</span>
            <span>{a.category}</span>
            <span>/</span>
            <span className="text-[var(--color-muted)]">Article</span>
          </div>

          <h1 className="mt-3 font-serif text-[30px] font-medium leading-[1.15] tracking-[-0.02em]">{a.title}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-y border-[var(--color-line-2)] py-3 text-[12.5px] text-[var(--color-muted)]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-sunk)] px-2 py-[3px] text-[11px] font-medium">{a.category}</span>
            <span className="inline-flex items-center gap-1.5"><Icon name="clock" className="h-3.5 w-3.5 text-[var(--color-faint)]" /> {a.time} read</span>
            <span className="text-[var(--color-faint)]">Updated {a.updated}</span>
          </div>

          {/* body */}
          <div className="mt-6 text-[14.5px] leading-[1.75] text-[var(--color-ink-2)]">
            <p>{a.intro}</p>

            <ol className="mt-5 space-y-3">
              {a.steps.map((step, i) => (
                <li key={i} className="flex gap-3.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--color-clay-soft)] text-[12.5px] font-semibold text-[var(--color-clay-2)]">{i + 1}</span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex gap-3 rounded-xl border border-[#e7dcc2] bg-[var(--color-olive-soft)] px-4 py-3.5">
              <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-[#98801f]" />
              <p className="text-[13px] leading-[1.6] text-[#6f5c12]"><span className="font-medium">Good to know — </span>{a.note}</p>
            </div>
          </div>

          {/* was this helpful */}
          <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-[var(--color-line)] bg-white py-6 text-center">
            {helpful ? (
              <p className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#177c31]"><Icon name="check" className="h-4 w-4" /> Thanks for the feedback!</p>
            ) : (
              <>
                <p className="text-[13.5px] font-medium">Was this article helpful?</p>
                <div className="flex gap-2.5">
                  <button onClick={() => setHelpful("yes")} className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-4 text-[13px] font-medium hover:border-[var(--color-mineral)] hover:bg-[var(--color-mineral-soft)]"><Icon name="thumbUp" className="h-4 w-4" /> Yes</button>
                  <button onClick={() => setHelpful("no")} className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-4 text-[13px] font-medium hover:border-[var(--color-clay)] hover:bg-[var(--color-clay-soft)]"><Icon name="thumbDown" className="h-4 w-4" /> No</button>
                </div>
              </>
            )}
          </div>
        </article>

        {/* related */}
        <aside className="hidden w-[220px] shrink-0 lg:block">
          <div className="sticky top-0">
            <p className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">RELATED ARTICLES</p>
            <div className="mt-2.5 space-y-1">
              {RELATED.filter((r) => r.slug !== a.slug).slice(0, 5).map((r) => (
                <Link key={r.slug} href={`/articles/${r.slug}`} className="flex items-start gap-2.5 rounded-lg px-2.5 py-2 hover:bg-[var(--color-sunk)]">
                  <Icon name="doc" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-faint)]" />
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-medium leading-snug">{r.title}</p>
                    <p className="text-[10.5px] text-[var(--color-faint)]">{r.time} read</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-5 rounded-xl bg-[var(--color-ivory)] p-4">
              <p className="text-[12.5px] font-medium">Still need help?</p>
              <p className="mt-1 text-[11.5px] leading-[1.5] text-[var(--color-muted)]">Our team is a message away.</p>
              <button className="mt-2.5 inline-flex h-8 w-full items-center justify-center gap-1.5 rounded-lg bg-[var(--color-clay)] text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]"><Icon name="chat" className="h-3.5 w-3.5" /> Contact us</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
