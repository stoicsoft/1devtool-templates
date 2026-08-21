"use client"

import { useState } from "react"
import { Button, Card, Icon, Shell } from "../_components/shell"

const HITS = [
  {
    id: "chk_a91f",
    doc: "docs/exports/limits.mdx",
    score: 0.912,
    rerank: 0.97,
    text: "Exports are streamed as newline-delimited JSON. Requests above ten thousand rows must paginate using the cursor parameter; the synchronous endpoint truncates silently above that threshold, which is a known defect tracked in NW-4412.",
    used: true,
  },
  {
    id: "chk_b03c",
    doc: "docs/exports/limits.mdx",
    score: 0.884,
    rerank: 0.93,
    text: "To page through a large export, pass the cursor returned in the previous response as ?cursor=. Cursors are opaque and valid for fifteen minutes.",
    used: true,
  },
  {
    id: "chk_e88a",
    doc: "slack/#customer-questions/2026-03-28",
    score: 0.861,
    rerank: 0.88,
    text: "Two customers this week hit the same truncation. Both were on the sync endpoint with ~14k rows. Suggested the cursor workaround; both confirmed it resolved.",
    used: true,
  },
  {
    id: "chk_d12e",
    doc: "api-spec/openapi.yaml",
    score: 0.842,
    rerank: 0.71,
    text: "parameters: [ { name: cursor, in: query }, { name: limit, in: query, schema: { maximum: 10000 } } ]",
    used: false,
  },
  {
    id: "chk_c47d",
    doc: "handbook/support/tone.md",
    score: 0.688,
    rerank: 0.34,
    text: "Acknowledge the problem in the first sentence, in the customer's own words where possible.",
    used: false,
  },
]

const ANSWER = [
  { t: "Exports above ten thousand rows are truncated by the synchronous endpoint rather than paginated — that's a known defect, tracked as NW-4412", cites: ["chk_a91f"] },
  { t: ". The supported path is the cursor parameter: pass the cursor returned by the previous response as ", cites: [] },
  { t: "?cursor=", code: true, cites: [] },
  { t: ", and note that cursors expire after fifteen minutes", cites: ["chk_b03c"] },
  { t: ". Two customers hit the same truncation in late March and both confirmed the cursor workaround resolved it", cites: ["chk_e88a"] },
  { t: ".", cites: [] },
]

export default function Retrieval() {
  const [query, setQuery] = useState("Why does my CSV export stop at 10,000 rows?")
  const [topK, setTopK] = useState(5)
  const [rerank, setRerank] = useState(true)
  const [threshold, setThreshold] = useState(0.7)
  const [busy, setBusy] = useState(false)
  const [hasRun, setHasRun] = useState(true)

  function run() {
    setBusy(true)
    setHasRun(false)
    setTimeout(() => {
      setBusy(false)
      setHasRun(true)
    }, 800)
  }

  const ranked = rerank ? [...HITS].sort((a, b) => b.rerank - a.rerank) : HITS
  const shown = ranked.slice(0, topK).filter((h) => (rerank ? h.rerank : h.score) >= threshold)

  return (
    <Shell
      active="/retrieval"
      title="Retrieval playground"
      subtitle="Ask a question the way a user would, and inspect exactly what the retriever returned"
      actions={
        <Button onClick={run} disabled={busy}>
          <Icon name="search" className="h-3.5 w-3.5" />
          {busy ? "Retrieving…" : "Run query"}
        </Button>
      }
    >
      <Card className="mb-4 p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="min-w-0 flex-1">
            <label className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">QUERY</label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && run()}
              className="mt-1.5 h-10 w-full rounded-lg border border-[var(--color-line)] px-3 text-[13.5px] outline-none focus:border-[var(--color-clay)]"
            />
          </div>
          <div className="flex gap-3">
            <div>
              <label className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">TOP K</label>
              <input
                type="number"
                min={1}
                max={20}
                value={topK}
                onChange={(e) => setTopK(Number(e.target.value))}
                className="mt-1.5 h-10 w-[70px] rounded-lg border border-[var(--color-line)] px-2 text-center font-mono text-[13px] outline-none focus:border-[var(--color-clay)]"
              />
            </div>
            <div>
              <label className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">MIN SCORE</label>
              <input
                type="number"
                min={0}
                max={1}
                step={0.05}
                value={threshold}
                onChange={(e) => setThreshold(Number(e.target.value))}
                className="mt-1.5 h-10 w-[80px] rounded-lg border border-[var(--color-line)] px-2 text-center font-mono text-[13px] outline-none focus:border-[var(--color-clay)]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium tracking-wide text-[var(--color-faint)]">RERANK</label>
              <button
                onClick={() => setRerank((r) => !r)}
                className={`relative mt-3 h-[22px] w-[38px] rounded-full transition-colors ${
                  rerank ? "bg-[var(--color-mineral)]" : "bg-[var(--color-line)]"
                }`}
              >
                <span
                  className={`absolute top-[3px] h-4 w-4 rounded-full bg-white shadow-sm transition-all ${
                    rerank ? "left-[19px]" : "left-[3px]"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <div className="mb-2 flex items-baseline justify-between">
            <h2 className="text-[12px] font-medium tracking-wide text-[var(--color-faint)]">
              RETRIEVED · {shown.length} of {HITS.length}
            </h2>
            <span className="font-mono text-[11px] text-[var(--color-faint)]">
              vector 34ms · rerank {rerank ? "118ms" : "off"}
            </span>
          </div>

          <div className="space-y-2.5">
            {busy
              ? [0, 1, 2].map((i) => (
                  <Card key={i} className="p-4">
                    <div className="space-y-2">
                      {[70, 100, 88].map((w, j) => (
                        <div
                          key={j}
                          className="h-[9px] animate-pulse rounded bg-[var(--color-sunk)]"
                          style={{ width: `${w}%`, animationDelay: `${j * 100}ms` }}
                        />
                      ))}
                    </div>
                  </Card>
                ))
              : hasRun &&
                shown.map((h, i) => (
                  <Card key={h.id} className={`p-4 ${h.used ? "" : "opacity-70"}`}>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="grid h-5 w-5 place-items-center rounded-md bg-[var(--color-ivory)] font-mono text-[10.5px] font-medium">
                        {i + 1}
                      </span>
                      <span className="font-mono text-[11.5px] text-[var(--color-mineral)]">{h.doc}</span>
                      <span className="font-mono text-[10.5px] text-[var(--color-faint)]">{h.id}</span>
                      <span className="ml-auto flex items-center gap-2.5">
                        <ScoreChip label="vec" value={h.score} tone="#827dbd" />
                        {rerank && <ScoreChip label="rank" value={h.rerank} tone="#c96442" />}
                      </span>
                    </div>
                    <p className="text-[12.5px] leading-[1.68] text-[var(--color-ink-2)]">{h.text}</p>
                    {h.used && (
                      <p className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-[#177c31]">
                        <Icon name="check" className="h-3 w-3" /> cited in answer
                      </p>
                    )}
                  </Card>
                ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-0 lg:self-start">
          <Card className="overflow-hidden">
            <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
              <Icon name="spark" className="h-4 w-4 text-[var(--color-clay)]" />
              <h2 className="text-[13px] font-medium">Grounded answer</h2>
            </div>
            <div className="p-4">
              {busy ? (
                <div className="space-y-2">
                  {[100, 94, 88, 62].map((w, i) => (
                    <div
                      key={i}
                      className="h-[9px] animate-pulse rounded bg-[var(--color-sunk)]"
                      style={{ width: `${w}%`, animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-[13px] leading-[1.72] text-[var(--color-ink-2)]">
                  {ANSWER.map((seg, i) => (
                    <span key={i}>
                      {seg.code ? (
                        <code className="rounded bg-[var(--color-sunk)] px-1 font-mono text-[12px]">{seg.t}</code>
                      ) : (
                        seg.t
                      )}
                      {seg.cites.map((c) => (
                        <sup
                          key={c}
                          className="ml-[2px] cursor-pointer rounded bg-[var(--color-clay-soft)] px-1 font-mono text-[9.5px] text-[var(--color-clay-2)]"
                          title={c}
                        >
                          {c.slice(4)}
                        </sup>
                      ))}
                    </span>
                  ))}
                </p>
              )}
            </div>
            <div className="border-t border-[var(--color-line-2)] bg-[var(--color-ivory-2)] px-4 py-3">
              <div className="grid grid-cols-3 gap-2">
                {[
                  ["Grounding", "1.00"],
                  ["Context", "612 tok"],
                  ["Cost", "$0.0041"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="text-[10.5px] text-[var(--color-faint)]">{k}</p>
                    <p className="font-mono text-[12px]">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Shell>
  )
}

function ScoreChip({ label, value, tone }) {
  return (
    <span className="inline-flex items-center gap-1">
      <span className="text-[10px] text-[var(--color-faint)]">{label}</span>
      <span className="font-mono text-[11.5px] font-medium" style={{ color: tone }}>
        {value.toFixed(3)}
      </span>
    </span>
  )
}
