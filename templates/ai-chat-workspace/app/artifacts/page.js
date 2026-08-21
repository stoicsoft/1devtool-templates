"use client"

import { useState } from "react"
import { Button, Icon, Pill, Shell } from "../_components/shared"

const artifacts = [
  {
    title: "checkout-repricing.patch",
    kind: "patch",
    project: "Platform",
    lines: 61,
    updated: "2 minutes ago",
    versions: 3,
    preview: [
      "- for (const item of cart.items) {",
      "-   item.price = await pricing.get(item.sku)",
      "+ const prices = await pricing.getMany(skus)",
    ],
  },
  {
    title: "Onboarding email sequence",
    kind: "doc",
    project: "Product copy",
    lines: 214,
    updated: "1 hour ago",
    versions: 7,
    preview: [
      "Subject: You're in — here's the two-minute version",
      "",
      "Hi {{first_name}}, welcome aboard. Most teams…",
    ],
  },
  {
    title: "cohort-retention.sql",
    kind: "code",
    project: "Data modeling",
    lines: 88,
    updated: "Yesterday",
    versions: 2,
    preview: [
      "with signups as (",
      "  select date_trunc('week', created_at) as cohort,",
      "         user_id from users",
    ],
  },
  {
    title: "Latency dashboard mock",
    kind: "component",
    project: "Platform",
    lines: 340,
    updated: "Yesterday",
    versions: 12,
    preview: ["export function LatencyPanel({ series }) {", "  const p99 = series.at(-1)?.p99 ?? 0", "  return ("],
  },
  {
    title: "Interview synthesis — Q3",
    kind: "doc",
    project: "Research interviews",
    lines: 496,
    updated: "Mon",
    versions: 4,
    preview: [
      "Three themes recurred across 14 of 18 interviews.",
      "",
      "1. Setup is judged in the first ninety seconds.",
    ],
  },
  {
    title: "rate-limit-middleware.ts",
    kind: "code",
    project: "Platform",
    lines: 127,
    updated: "Last week",
    versions: 5,
    preview: [
      "const bucket = new TokenBucket({ rate: 20, burst: 40 })",
      "",
      "export async function limit(req: Request) {",
    ],
  },
]

const kinds = {
  patch: { label: "Patch", tone: "clay", icon: "code" },
  doc: { label: "Document", tone: "mineral", icon: "doc" },
  code: { label: "Code", tone: "plum", icon: "code" },
  component: { label: "Component", tone: "olive", icon: "artifact" },
}

const filters = ["All", "Patch", "Document", "Code", "Component"]

export default function Artifacts() {
  const [filter, setFilter] = useState("All")
  const [view, setView] = useState("grid")

  const visible = artifacts.filter((a) => filter === "All" || kinds[a.kind].label === filter)

  return (
    <Shell
      active="/artifacts"
      title="Artifacts"
      actions={
        <div className="flex items-center gap-1 rounded-lg border border-[var(--color-line)] bg-white p-[2px]">
          {["grid", "list"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`rounded-md px-2.5 py-1 text-[12px] font-medium capitalize transition-colors ${
                view === v ? "bg-[var(--color-ivory)] text-[var(--color-ink)]" : "text-[var(--color-faint)]"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      }
    >
      <div className="mx-auto max-w-[980px]">
        <p className="mb-4 max-w-[64ch] text-[13.5px] leading-[1.65] text-[var(--color-muted)]">
          Everything Atlas has built for you — patches, documents, queries, and components — kept versioned and
          reopenable from the chat that produced it.
        </p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-3 py-[5px] text-[12px] font-medium transition-colors ${
                filter === f
                  ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                  : "border-[var(--color-line)] bg-white text-[var(--color-muted)] hover:border-[var(--color-ink)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {view === "grid" ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {visible.map((a) => (
              <div
                key={a.title}
                className="group overflow-hidden rounded-xl border border-[var(--color-line)] bg-white transition-all hover:border-[var(--color-ink)] hover:shadow-[0_2px_10px_rgba(20,20,19,0.05)]"
              >
                <div className="flex items-start justify-between gap-3 px-4 pt-4">
                  <div className="min-w-0">
                    <h3 className="truncate text-[13.5px] font-medium">{a.title}</h3>
                    <p className="mt-0.5 text-[11.5px] text-[var(--color-faint)]">
                      {a.project} · {a.lines} lines · v{a.versions}
                    </p>
                  </div>
                  <Pill tone={kinds[a.kind].tone}>{kinds[a.kind].label}</Pill>
                </div>
                <pre className="scroll-thin mt-3 overflow-x-auto border-y border-[var(--color-line-2)] bg-[var(--color-sunk)] px-4 py-3 font-mono text-[11px] leading-[1.75] text-[var(--color-muted)]">
                  {a.preview.join("\n")}
                </pre>
                <div className="flex items-center justify-between px-4 py-2.5">
                  <span className="text-[11.5px] text-[var(--color-faint)]">{a.updated}</span>
                  <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                    <IconBtn name="copy" />
                    <IconBtn name="refresh" />
                    <IconBtn name="chevronRight" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
            {visible.map((a, i) => (
              <div
                key={a.title}
                className={`row-zebra flex items-center gap-3 px-4 py-3 hover:bg-[var(--color-sunk)] ${
                  i > 0 ? "border-t border-[var(--color-line-2)]" : ""
                }`}
              >
                <Icon name={kinds[a.kind].icon} className="h-4 w-4 shrink-0 text-[var(--color-faint)]" />
                <span className="min-w-0 flex-1 truncate text-[13px] font-medium">{a.title}</span>
                <Pill tone={kinds[a.kind].tone}>{kinds[a.kind].label}</Pill>
                <span className="hidden w-[140px] truncate text-[12px] text-[var(--color-muted)] sm:block">
                  {a.project}
                </span>
                <span className="hidden w-[70px] text-right font-mono text-[11.5px] text-[var(--color-faint)] sm:block">
                  v{a.versions}
                </span>
                <span className="w-[110px] text-right text-[11.5px] text-[var(--color-faint)]">{a.updated}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Shell>
  )
}

function IconBtn({ name }) {
  return (
    <button className="grid h-7 w-7 place-items-center rounded-md text-[var(--color-faint)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]">
      <Icon name={name} className="h-[15px] w-[15px]" />
    </button>
  )
}
