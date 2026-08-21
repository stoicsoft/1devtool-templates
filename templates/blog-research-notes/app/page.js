"use client"

import { useState } from "react"
import { Footer, Header } from "./_components/chrome"

const POSTS = [
  {
    slug: "/essays",
    title: "Your benchmark is a photograph of a river",
    excerpt:
      "Every eval suite is measuring a distribution that has already moved. The question is not whether your benchmark decays but how fast, and whether you find out before your users do.",
    date: "April 12, 2026",
    read: "9 min",
    tag: "Evaluation",
    tone: "#629987",
    featured: true,
  },
  {
    slug: "/essays",
    title: "In praise of the model that says no",
    excerpt:
      "We spent six months trying to make a classifier more accurate. What actually moved the needle was teaching it to abstain on the eleven percent of inputs where it was guessing.",
    date: "March 28, 2026",
    read: "6 min",
    tag: "Alignment",
    tone: "#c96442",
  },
  {
    slug: "/essays",
    title: "Notes from reading 400 agent traces by hand",
    excerpt:
      "No dashboard would have shown me this. Agents fail in narrative ways — they take a reasonable first step, then commit to it long after the evidence turns.",
    date: "March 9, 2026",
    read: "12 min",
    tag: "Agents",
    tone: "#827dbd",
  },
  {
    slug: "/essays",
    title: "The retrieval is fine; the chunking is the problem",
    excerpt:
      "Nine out of ten RAG failures I have debugged were not embedding failures. The relevant sentence was split across two chunks, and neither half made the cut.",
    date: "February 21, 2026",
    read: "7 min",
    tag: "Retrieval",
    tone: "#98801f",
  },
  {
    slug: "/essays",
    title: "What a good research note looks like",
    excerpt:
      "Shorter than a paper, longer than a tweet, and honest about the experiment you ran rather than the story you wish it told.",
    date: "February 2, 2026",
    read: "4 min",
    tag: "Craft",
    tone: "#c5621b",
  },
  {
    slug: "/essays",
    title: "Latency is a safety property",
    excerpt:
      "When a system takes nine seconds to answer, people stop checking its work. Speed is not only about experience — it is about whether verification stays affordable.",
    date: "January 15, 2026",
    read: "5 min",
    tag: "Systems",
    tone: "#cbcadb",
  },
]

const TAGS = ["All", "Evaluation", "Alignment", "Agents", "Retrieval", "Craft", "Systems"]

export default function Notes() {
  const [tag, setTag] = useState("All")
  const posts = POSTS.filter((p) => tag === "All" || p.tag === tag)
  const [featured, ...rest] = posts

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <Header active="/" />

      <main className="mx-auto max-w-[880px] px-6">
        <section className="border-b border-[var(--color-line)] py-16">
          <span className="eyebrow">Research notes</span>
          <h1 className="display mt-4 max-w-[17ch] text-[44px] sm:text-[56px]">
            Working notes on making models useful
          </h1>
          <p className="mt-6 max-w-[60ch] text-[17px] leading-[1.72] text-[var(--color-muted)]">
            Written by Sigrid Halvorsen. Mostly about evaluation and the unglamorous parts of applied research — the
            experiments that failed, the metrics that lied, and the occasional thing that worked.
          </p>
        </section>

        <div className="flex flex-wrap gap-1.5 py-7">
          {TAGS.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`rounded-full border px-3 py-[5px] text-[12.5px] font-medium transition-colors ${
                tag === t
                  ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                  : "border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-ink)]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {featured && (
          <article className="group border-t border-[var(--color-line)] py-9">
            <a href={featured.slug}>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="rounded-full px-2.5 py-[3px] text-[11px] font-medium"
                  style={{ background: `${featured.tone}1c`, color: featured.tone }}
                >
                  {featured.tag}
                </span>
                <span className="font-mono text-[11.5px] text-[var(--color-faint)]">
                  {featured.date} · {featured.read}
                </span>
              </div>
              <h2 className="mt-3.5 max-w-[22ch] font-serif text-[36px] font-medium leading-[1.14] tracking-[-0.016em] transition-colors group-hover:text-[var(--color-clay)]">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-[68ch] text-[16px] leading-[1.75] text-[var(--color-muted)]">
                {featured.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--color-clay)]">
                Read the note
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m0 0-6-6m6 6-6 6" />
                </svg>
              </span>
            </a>
          </article>
        )}

        <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {rest.map((p) => (
            <article key={p.title} className="group py-7">
              <a href={p.slug} className="grid gap-3 sm:grid-cols-[120px_minmax(0,1fr)]">
                <div>
                  <span className="font-mono text-[11.5px] text-[var(--color-faint)]">{p.date}</span>
                  <span className="mt-1 block font-mono text-[11.5px] text-[var(--color-faint)]">{p.read}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-[7px] w-[7px] rounded-full" style={{ background: p.tone }} />
                    <span className="text-[11.5px] text-[var(--color-faint)]">{p.tag}</span>
                  </div>
                  <h3 className="mt-1.5 max-w-[26ch] font-serif text-[24px] font-medium leading-[1.24] tracking-[-0.012em] transition-colors group-hover:text-[var(--color-clay)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-[68ch] text-[14.5px] leading-[1.72] text-[var(--color-muted)]">
                    {p.excerpt}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="py-16 text-center text-[15px] text-[var(--color-muted)]">Nothing filed under “{tag}” yet.</p>
        )}
      </main>

      <Footer />
    </div>
  )
}
