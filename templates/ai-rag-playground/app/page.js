import Link from "next/link"
import { Icon, ANSWER, CHUNKS, Sidebar } from "./data"

export default function RagPlayground() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="Playground" />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <h1 className="font-serif text-[17px] font-medium tracking-[-0.01em]">Playground</h1>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-white px-2.5 py-1 font-mono text-[11.5px] font-medium text-[var(--color-muted)]">
            <Icon name="index" className="h-3.5 w-3.5 text-[var(--color-faint)]" /> support-kb
          </span>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="slider" className="h-3.5 w-3.5" /> Parameters
            </button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]">
              Save preset
            </button>
          </div>
        </header>

        <div className="flex min-h-0 flex-1">
          {/* answer column */}
          <div className="scroll-thin min-w-0 flex-1 overflow-y-auto px-6 py-5">
            <div className="mx-auto max-w-[720px]">
              {/* query box */}
              <div className="flex items-center gap-2 rounded-xl border border-[var(--color-line)] bg-white px-3 py-2.5 shadow-[0_1px_2px_rgba(20,20,19,0.04)]">
                <Icon name="search" className="h-4 w-4 text-[var(--color-faint)]" />
                <input
                  defaultValue="How do refunds work for annual plans, and is there a proration?"
                  className="min-w-0 flex-1 bg-transparent text-[13.5px] outline-none"
                />
                <button className="inline-flex h-7 items-center gap-1.5 rounded-lg bg-[var(--color-ink)] px-2.5 text-[12px] font-medium text-white hover:bg-black">
                  <Icon name="play" className="h-3.5 w-3.5" /> Run
                </button>
              </div>

              {/* answer */}
              <div className="mt-4 overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-2.5">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-[var(--color-clay-soft)]">
                    <Icon name="spark" className="h-3.5 w-3.5 text-[var(--color-clay)]" />
                  </span>
                  <span className="text-[12.5px] font-medium">Grounded answer</span>
                  <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[#e6f4ea] px-2 py-[3px] text-[10.5px] font-medium text-[#177c31]">
                    <Icon name="check" className="h-3 w-3" /> faithfulness 0.96
                  </span>
                </div>
                <div className="px-4 py-3.5">
                  <p className="text-[14px] leading-[1.75] text-[var(--color-ink-2)]">
                    {ANSWER.map((seg, i) =>
                      seg.t === "text" ? (
                        <span key={i}>{seg.v}</span>
                      ) : (
                        <sup key={i} className="mx-[1px] inline-flex h-[15px] w-[15px] -translate-y-[1px] items-center justify-center rounded-[4px] bg-[var(--color-clay-soft)] align-baseline text-[9.5px] font-semibold text-[var(--color-clay-2)]">
                          {seg.n}
                        </sup>
                      )
                    )}
                  </p>
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {CHUNKS.filter((c) => c.cited).map((c) => (
                      <Link key={c.rank} href={`/documents/${c.slug}`} className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-[var(--color-sunk)] px-2 py-1 text-[11px] hover:border-[var(--color-clay)]">
                        <span className="grid h-[14px] w-[14px] place-items-center rounded-[3px] bg-[var(--color-clay-soft)] text-[8.5px] font-semibold text-[var(--color-clay-2)]">{c.rank}</span>
                        <span className="font-mono text-[var(--color-muted)]">{c.doc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-[var(--color-line-2)] bg-[var(--color-ivory-2)] px-4 py-2.5 text-[11px] text-[var(--color-muted)]">
                  <span className="font-mono">sonnet-4</span>
                  <span>·</span>
                  <span>1,180 ctx tokens</span>
                  <span>·</span>
                  <span>412 out</span>
                  <span>·</span>
                  <span>retrieval 240ms</span>
                  <span>·</span>
                  <span>total 1.6s</span>
                  <button className="ml-auto inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 font-medium hover:bg-[var(--color-hover)]">
                    <Icon name="copy" className="h-3.5 w-3.5" /> Copy
                  </button>
                </div>
              </div>

              <p className="mt-3 px-1 text-[11.5px] text-[var(--color-faint)]">
                Answer is grounded only in retrieved context. 3 of 6 chunks were cited; click a chunk to open its source document.
              </p>
            </div>
          </div>

          {/* retrieved context panel */}
          <div className="hidden w-[380px] shrink-0 flex-col border-l border-[var(--color-line)] bg-white xl:flex">
            <div className="border-b border-[var(--color-line)] px-4 py-3.5">
              <p className="mb-2.5 text-[10.5px] font-medium tracking-wide text-[var(--color-faint)]">RETRIEVAL PARAMETERS</p>
              <div className="space-y-3">
                <div>
                  <div className="mb-1 flex justify-between text-[12px]">
                    <span>top_k</span>
                    <span className="font-mono text-[var(--color-muted)]">6</span>
                  </div>
                  <div className="h-[5px] rounded-full bg-[var(--color-sunk)]">
                    <div className="h-full w-[30%] rounded-full bg-[var(--color-clay)]" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-[12px]">
                    <span>min score</span>
                    <span className="font-mono text-[var(--color-muted)]">0.70</span>
                  </div>
                  <div className="h-[5px] rounded-full bg-[var(--color-sunk)]">
                    <div className="h-full w-[70%] rounded-full bg-[var(--color-mineral)]" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[12px]">Rerank (voyage-rerank-2)</span>
                  <span className="relative h-[18px] w-[32px] rounded-full bg-[var(--color-clay)]">
                    <span className="absolute right-[2px] top-[2px] h-[14px] w-[14px] rounded-full bg-white" />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[12px]">Hybrid (BM25 + dense)</span>
                  <span className="relative h-[18px] w-[32px] rounded-full bg-[var(--color-line)]">
                    <span className="absolute left-[2px] top-[2px] h-[14px] w-[14px] rounded-full bg-white" />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2.5">
              <h2 className="text-[13px] font-medium">Retrieved context</h2>
              <span className="text-[11.5px] text-[var(--color-faint)]">6 chunks</span>
            </div>
            <div className="scroll-thin min-h-0 flex-1 space-y-2 overflow-y-auto px-3 pb-4">
              {CHUNKS.map((c) => (
                <Link
                  key={c.rank}
                  href={`/documents/${c.slug}`}
                  className={`block rounded-lg border p-3 transition-colors ${c.cited ? "border-[var(--color-clay)]/30 bg-[var(--color-clay-soft)]/40 hover:border-[var(--color-clay)]" : "border-[var(--color-line-2)] bg-white opacity-70 hover:opacity-100"}`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`grid h-[18px] w-[18px] place-items-center rounded-[4px] text-[10px] font-semibold ${c.cited ? "bg-[var(--color-clay-soft)] text-[var(--color-clay-2)]" : "bg-[var(--color-sunk)] text-[var(--color-faint)]"}`}>
                      {c.rank}
                    </span>
                    <span className="min-w-0 flex-1 truncate font-mono text-[11px] text-[var(--color-ink-2)]">{c.doc}</span>
                    {c.cited && (
                      <span className="rounded-full bg-white px-1.5 py-[1px] text-[9px] font-medium text-[var(--color-clay-2)] ring-1 ring-[var(--color-clay)]/25">cited</span>
                    )}
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-[11.5px] leading-[1.55] text-[var(--color-muted)]">{c.text}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-[4px] flex-1 overflow-hidden rounded-full bg-[var(--color-sunk)]">
                      <span className="block h-full rounded-full" style={{ width: `${c.score * 100}%`, background: c.cited ? "#c96442" : "#a5a49d" }} />
                    </span>
                    <span className="font-mono text-[10.5px] text-[var(--color-faint)]">{c.score.toFixed(3)}</span>
                    <span className="text-[10px] text-[var(--color-faint)]">{c.loc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
