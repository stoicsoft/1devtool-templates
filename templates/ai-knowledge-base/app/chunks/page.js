"use client"

import { useState } from "react"
import { Button, Card, Icon, Shell } from "../_components/shell"

const chunks = [
  {
    id: "chk_a91f",
    doc: "docs/exports/limits.mdx",
    heading: "Export size limits",
    tokens: 214,
    text: "Exports are streamed as newline-delimited JSON. Requests above ten thousand rows must paginate using the cursor parameter; the synchronous endpoint truncates silently above that threshold, which is a known defect tracked in NW-4412.",
    neighbors: 3,
    embedded: true,
  },
  {
    id: "chk_b03c",
    doc: "docs/exports/limits.mdx",
    heading: "Export size limits",
    tokens: 188,
    text: "To page through a large export, pass the cursor returned in the previous response as ?cursor=. Cursors are opaque and valid for fifteen minutes. A cursor that has expired returns 410 Gone rather than restarting the export.",
    neighbors: 3,
    embedded: true,
  },
  {
    id: "chk_c47d",
    doc: "handbook/support/tone.md",
    heading: "Writing to customers",
    tokens: 242,
    text: "Acknowledge the problem in the first sentence, in the customer's own words where possible. Do not open with an apology paragraph. Give the workaround before the explanation, and never commit to a ship date that engineering has not confirmed in writing.",
    neighbors: 5,
    embedded: true,
  },
  {
    id: "chk_d12e",
    doc: "api-spec/openapi.yaml",
    heading: "GET /v1/exports",
    tokens: 96,
    text: "parameters: [ { name: cursor, in: query, schema: { type: string } }, { name: limit, in: query, schema: { type: integer, maximum: 10000 } } ]",
    neighbors: 2,
    embedded: true,
    code: true,
  },
  {
    id: "chk_e88a",
    doc: "slack/#customer-questions/2026-03-28",
    heading: "Thread: truncated CSV",
    tokens: 310,
    text: "Two customers this week hit the same truncation. Both were on the sync endpoint with ~14k rows. Suggested the cursor workaround; both confirmed it resolved. Worth a docs callout rather than a support macro.",
    neighbors: 8,
    embedded: false,
  },
  {
    id: "chk_f55b",
    doc: "zendesk/macros/billing-duplicate.txt",
    heading: "Duplicate charge macro",
    tokens: 164,
    text: "If a customer reports being charged twice within 48 hours, check for a retried webhook before issuing a refund. Duplicate charges from webhook retries reconcile automatically within one billing cycle.",
    neighbors: 4,
    embedded: true,
  },
]

const strategies = [
  { name: "Semantic (recursive)", desc: "Split on headings, then sentences. Overlap 64 tokens.", active: true },
  { name: "Fixed window", desc: "512 tokens, 50 token stride. Cheapest to compute.", active: false },
  { name: "Document-level", desc: "One vector per document. Best for short pages.", active: false },
]

export default function Chunks() {
  const [selected, setSelected] = useState(chunks[0].id)
  const [q, setQ] = useState("")

  const visible = chunks.filter(
    (c) => c.text.toLowerCase().includes(q.toLowerCase()) || c.doc.toLowerCase().includes(q.toLowerCase())
  )
  const active = chunks.find((c) => c.id === selected)

  return (
    <Shell
      active="/chunks"
      title="Chunks"
      subtitle="28,210 chunks · text-embed-3-large · 1,536 dimensions"
      actions={
        <>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search chunk text"
            className="hidden h-8 w-[200px] rounded-lg border border-[var(--color-line)] bg-white px-3 text-[12.5px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)] sm:block"
          />
          <Button variant="outline">
            <Icon name="refresh" className="h-4 w-4" /> Re-embed
          </Button>
        </>
      }
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-2.5">
          {visible.map((c) => (
            <Card
              key={c.id}
              className={`cursor-pointer p-4 transition-all ${
                selected === c.id ? "border-[var(--color-clay)] bg-[var(--color-clay-soft)]" : "hover:border-[var(--color-ink)]"
              }`}
              onClick={() => setSelected(c.id)}
            >
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] text-[var(--color-faint)]">{c.id}</span>
                <span className="font-mono text-[11.5px] text-[var(--color-mineral)]">{c.doc}</span>
                <span className="ml-auto flex items-center gap-2">
                  <span className="font-mono text-[10.5px] text-[var(--color-faint)]">{c.tokens} tok</span>
                  {c.embedded ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#e6f4ea] px-1.5 py-[2px] text-[10px] font-medium text-[#177c31]">
                      <Icon name="check" className="h-[10px] w-[10px]" /> embedded
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#f5f1e0] px-1.5 py-[2px] text-[10px] font-medium text-[#7a6614]">
                      queued
                    </span>
                  )}
                </span>
              </div>
              <p className="mb-1 text-[12px] font-medium text-[var(--color-ink)]">{c.heading}</p>
              <p
                className={`text-[12.5px] leading-[1.68] text-[var(--color-muted)] ${
                  c.code ? "font-mono text-[11.5px]" : ""
                }`}
              >
                {c.text}
              </p>
            </Card>
          ))}
          {visible.length === 0 && (
            <div className="rounded-xl border border-dashed border-[var(--color-line)] py-16 text-center">
              <p className="text-[13px] text-[var(--color-muted)]">No chunk contains “{q}”.</p>
            </div>
          )}
        </div>

        <div className="space-y-4 lg:sticky lg:top-0 lg:self-start">
          <Card className="p-4">
            <h2 className="mb-3 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">CHUNK DETAIL</h2>
            <p className="font-mono text-[12px]">{active.id}</p>
            <dl className="mt-3 space-y-2">
              {[
                ["Document", active.doc],
                ["Heading", active.heading],
                ["Tokens", `${active.tokens}`],
                ["Neighbors", `${active.neighbors} in same doc`],
                ["Vector", "1536d · cosine"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-3">
                  <dt className="shrink-0 text-[11.5px] text-[var(--color-faint)]">{k}</dt>
                  <dd className="truncate text-right font-mono text-[11.5px] text-[var(--color-ink-2)]">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-3.5 flex gap-2">
              <Button variant="outline" className="flex-1 justify-center" href="/retrieval">
                Test retrieval
              </Button>
            </div>
          </Card>

          <Card className="p-4">
            <h2 className="mb-3 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
              CHUNKING STRATEGY
            </h2>
            <div className="space-y-2">
              {strategies.map((s) => (
                <button
                  key={s.name}
                  className={`w-full rounded-lg border px-3 py-2.5 text-left transition-colors ${
                    s.active
                      ? "border-[var(--color-clay)] bg-[var(--color-clay-soft)]"
                      : "border-[var(--color-line)] hover:bg-[var(--color-sunk)]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[12.5px] font-medium">{s.name}</span>
                    {s.active && <Icon name="check" className="h-3.5 w-3.5 text-[var(--color-clay)]" />}
                  </span>
                  <span className="mt-0.5 block text-[11px] leading-[1.5] text-[var(--color-muted)]">{s.desc}</span>
                </button>
              ))}
            </div>
            <p className="mt-3 text-[11px] leading-[1.55] text-[var(--color-faint)]">
              Changing strategy queues a full re-embed. Estimated 28,210 chunks · ~9 minutes · $2.80.
            </p>
          </Card>
        </div>
      </div>
    </Shell>
  )
}
