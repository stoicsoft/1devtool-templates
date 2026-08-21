"use client"

import { useState } from "react"

function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    flask: <path d="M9 3h6M10 3v6.5L4.8 18A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-3L14 9.5V3M7.5 15h9" />,
    dataset: (
      <>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </>
    ),
    model: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />,
    chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="m5 13 4 4L19 7" />,
    x: <path d="M18 6 6 18M6 6l12 12" />,
    stop: <rect x="6" y="6" width="12" height="12" rx="2" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    upload: <path d="M12 16V4m0 0L7 9m5-5 5 5M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />,
    copy: (
      <>
        <rect x="9" y="9" width="12" height="12" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
      </>
    ),
    warn: <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01" />,
    chevronRight: <path d="m9 6 6 6-6 6" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

const RUNS = [
  {
    id: "ft_9a2k",
    name: "support-tone-v4",
    base: "haiku-4",
    status: "running",
    epoch: 2.4,
    epochs: 3,
    trainLoss: 0.412,
    valLoss: 0.468,
    examples: 4820,
    lr: "2e-5",
    started: "34m ago",
    eta: "12m",
    tone: "#c96442",
  },
  {
    id: "ft_7f10",
    name: "sql-explainer-v2",
    base: "sonnet-4",
    status: "succeeded",
    epoch: 3,
    epochs: 3,
    trainLoss: 0.284,
    valLoss: 0.312,
    examples: 1240,
    lr: "1e-5",
    started: "6h ago",
    eta: "—",
    tone: "#629987",
  },
  {
    id: "ft_5c88",
    name: "triage-classifier-v9",
    base: "haiku-4",
    status: "succeeded",
    epoch: 4,
    epochs: 4,
    trainLoss: 0.196,
    valLoss: 0.241,
    examples: 8410,
    lr: "3e-5",
    started: "Yesterday",
    eta: "—",
    tone: "#827dbd",
  },
  {
    id: "ft_3b41",
    name: "support-tone-v3",
    base: "haiku-4",
    status: "failed",
    epoch: 1.2,
    epochs: 3,
    trainLoss: 0.688,
    valLoss: 0.914,
    examples: 4820,
    lr: "1e-4",
    started: "2 days ago",
    eta: "—",
    tone: "#cf2055",
    error: "Validation loss diverged — learning rate too high",
  },
  {
    id: "ft_1d07",
    name: "lead-extractor-v1",
    base: "haiku-4",
    status: "queued",
    epoch: 0,
    epochs: 3,
    trainLoss: null,
    valLoss: null,
    examples: 2100,
    lr: "2e-5",
    started: "—",
    eta: "in queue",
    tone: "#87867f",
  },
]

const statusStyle = {
  running: ["bg-[#f7ece7]", "text-[#b0522f]", "#c96442"],
  succeeded: ["bg-[#e6f4ea]", "text-[#177c31]", "#1e9f3c"],
  failed: ["bg-[#fceaef]", "text-[#a81a44]", "#cf2055"],
  queued: ["bg-[#f0efec]", "text-[#5e5d59]", "#87867f"],
}

const DATASETS = [
  ["support-replies-2026q1", 4820, "jsonl", "38.2 MB", "validated", "#629987"],
  ["sql-explanations", 1240, "jsonl", "9.1 MB", "validated", "#629987"],
  ["triage-labelled", 8410, "jsonl", "14.6 MB", "validated", "#629987"],
  ["lead-extraction-raw", 2100, "jsonl", "6.8 MB", "3 warnings", "#98801f"],
]

// deterministic loss curves
const steps = 60
const TRAIN = Array.from({ length: steps }, (_, i) => 0.92 * Math.exp(-i / 18) + 0.16 + Math.sin(i * 0.9) * 0.018)
const VAL = Array.from({ length: steps }, (_, i) => 0.95 * Math.exp(-i / 21) + 0.21 + Math.sin(i * 0.6) * 0.026)

const EVAL_ROWS = [
  ["Tone adherence", 0.72, 0.91],
  ["Policy accuracy", 0.81, 0.94],
  ["Length compliance", 0.64, 0.96],
  ["Refusal calibration", 0.88, 0.89],
]

export default function FineTuning() {
  const [selected, setSelected] = useState("ft_9a2k")
  const [tab, setTab] = useState("loss")
  const run = RUNS.find((r) => r.id === selected)

  const W = 520
  const H = 190
  const pad = 26
  const maxY = 1.1
  const line = (pts) =>
    pts
      .map((v, i) => {
        const x = pad + (i / (pts.length - 1)) * (W - pad - 10)
        const y = H - pad - (v / maxY) * (H - pad - 12)
        return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`
      })
      .join(" ")

  const shown = run.status === "running" ? Math.floor(steps * (run.epoch / run.epochs)) : steps

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <aside className="hidden w-[200px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
        <div className="flex items-center gap-2 px-3.5 py-3.5">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
            <rect width="32" height="32" rx="8" fill="#141413" />
            <path d="M13 7h6M14 7v7l-5 9a1.8 1.8 0 0 0 1.6 2.7h10.8A1.8 1.8 0 0 0 23 23l-5-9V7" fill="none" stroke="#c96442" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Anneal</span>
        </div>
        <nav className="flex-1 px-2">
          {[
            ["Runs", "flask", true],
            ["Datasets", "dataset", false],
            ["Models", "model", false],
            ["Evaluations", "chart", false],
          ].map(([label, icon, on]) => (
            <button
              key={label}
              className={`mb-[2px] flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-left text-[13.5px] transition-colors ${
                on ? "bg-[var(--color-hover)] font-medium" : "text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"
              }`}
            >
              <Icon name={icon} className="h-[17px] w-[17px] text-[var(--color-faint)]" />
              {label}
            </button>
          ))}
        </nav>
        <div className="p-2.5">
          <div className="rounded-lg bg-[var(--color-ivory)] p-2.5">
            <p className="text-[11px] font-medium">GPU budget</p>
            <div className="mt-1.5 h-[5px] overflow-hidden rounded-full bg-white">
              <div className="h-full w-[62%] rounded-full bg-[var(--color-clay)]" />
            </div>
            <p className="mt-1 text-[10.5px] text-[var(--color-muted)]">62% of 400 A100-hours</p>
          </div>
        </div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <h1 className="font-serif text-[17px] font-medium tracking-[-0.01em]">Fine-tuning runs</h1>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="upload" className="h-3.5 w-3.5" /> Upload dataset
            </button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]">
              <Icon name="plus" className="h-4 w-4" /> New run
            </button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto max-w-[1080px]">
            {/* runs table */}
            <div className="mb-4 overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
              <div className="scroll-thin overflow-x-auto">
                <table className="w-full min-w-[760px]">
                  <thead>
                    <tr className="border-b border-[var(--color-line-2)]">
                      {["Run", "Base", "Progress", "Train loss", "Val loss", "Examples", "Started", "Status"].map((h) => (
                        <th
                          key={h}
                          className="px-3 py-2.5 text-left text-[10.5px] font-medium tracking-wide text-[var(--color-faint)] first:pl-4"
                        >
                          {h.toUpperCase()}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {RUNS.map((r) => {
                      const [bg, fg, dot] = statusStyle[r.status]
                      return (
                        <tr
                          key={r.id}
                          onClick={() => setSelected(r.id)}
                          className={`cursor-pointer border-b border-[var(--color-line-2)] last:border-0 ${
                            selected === r.id ? "bg-[var(--color-clay-soft)]" : "hover:bg-[var(--color-sunk)]"
                          }`}
                        >
                          <td className="py-2.5 pl-4 pr-3">
                            <p className="text-[12.5px] font-medium">{r.name}</p>
                            <p className="font-mono text-[10.5px] text-[var(--color-faint)]">{r.id}</p>
                          </td>
                          <td className="px-3 py-2.5 font-mono text-[11.5px] text-[var(--color-muted)]">{r.base}</td>
                          <td className="px-3 py-2.5">
                            <div className="flex items-center gap-2">
                              <span className="h-[5px] w-[52px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                                <span
                                  className="block h-full rounded-full"
                                  style={{ width: `${(r.epoch / r.epochs) * 100}%`, background: dot }}
                                />
                              </span>
                              <span className="font-mono text-[10.5px] text-[var(--color-faint)]">
                                {r.epoch}/{r.epochs}
                              </span>
                            </div>
                          </td>
                          <td className="px-3 py-2.5 font-mono text-[11.5px] text-[var(--color-muted)]">
                            {r.trainLoss?.toFixed(3) ?? "—"}
                          </td>
                          <td
                            className="px-3 py-2.5 font-mono text-[11.5px]"
                            style={{ color: r.valLoss > 0.6 ? "#cf2055" : "var(--color-muted)" }}
                          >
                            {r.valLoss?.toFixed(3) ?? "—"}
                          </td>
                          <td className="px-3 py-2.5 font-mono text-[11.5px] text-[var(--color-muted)]">
                            {r.examples.toLocaleString()}
                          </td>
                          <td className="px-3 py-2.5 text-[11.5px] text-[var(--color-faint)]">{r.started}</td>
                          <td className="px-3 py-2.5">
                            <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[10.5px] font-medium ${bg} ${fg}`}>
                              <span
                                className={`h-[5px] w-[5px] rounded-full ${r.status === "running" ? "pulse-dot" : ""}`}
                                style={{ background: dot }}
                              />
                              {r.status}
                            </span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
              {/* detail */}
              <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-2.5">
                  {["loss", "eval", "config"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      className={`relative px-2 py-1.5 text-[12.5px] font-medium capitalize transition-colors ${
                        tab === t ? "text-[var(--color-ink)]" : "text-[var(--color-faint)] hover:text-[var(--color-ink-2)]"
                      }`}
                    >
                      {t === "loss" ? "Loss curves" : t === "eval" ? "Eval deltas" : "Config"}
                      {tab === t && <span className="absolute inset-x-1 -bottom-[10px] h-[2px] rounded-full bg-[var(--color-clay)]" />}
                    </button>
                  ))}
                  <span className="ml-auto font-mono text-[11px] text-[var(--color-faint)]">{run.name}</span>
                </div>

                <div className="p-4">
                  {tab === "loss" && (
                    <>
                      <div className="mb-3 flex gap-5">
                        <span className="inline-flex items-center gap-1.5 text-[11.5px] text-[var(--color-muted)]">
                          <span className="h-[2px] w-[14px] bg-[var(--color-clay)]" /> train
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[11.5px] text-[var(--color-muted)]">
                          <span className="h-[2px] w-[14px] bg-[var(--color-plum)]" /> validation
                        </span>
                        {run.status === "running" && (
                          <span className="ml-auto inline-flex items-center gap-1.5 text-[11.5px] text-[var(--color-clay)]">
                            <span className="pulse-dot h-[6px] w-[6px] rounded-full bg-[var(--color-clay)]" />
                            step {shown * 40} · eta {run.eta}
                          </span>
                        )}
                      </div>
                      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-hidden>
                        {[0.2, 0.4, 0.6, 0.8, 1.0].map((g) => {
                          const y = H - pad - (g / maxY) * (H - pad - 12)
                          return (
                            <g key={g}>
                              <line x1={pad} x2={W - 10} y1={y} y2={y} stroke="#efeeea" strokeWidth="1" />
                              <text x="0" y={y + 3} fontSize="9" fill="#87867f" fontFamily="JetBrains Mono, monospace">
                                {g.toFixed(1)}
                              </text>
                            </g>
                          )
                        })}
                        <path d={line(TRAIN.slice(0, shown))} fill="none" stroke="#c96442" strokeWidth="2" strokeLinecap="round" />
                        <path d={line(VAL.slice(0, shown))} fill="none" stroke="#827dbd" strokeWidth="2" strokeLinecap="round" />
                        {[1, 2].map((e) => {
                          const x = pad + (e / run.epochs) * (W - pad - 10)
                          return (
                            <g key={e}>
                              <line x1={x} x2={x} y1={12} y2={H - pad} stroke="#dcdad3" strokeWidth="1" strokeDasharray="3 3" />
                              <text x={x + 3} y={20} fontSize="9" fill="#87867f" fontFamily="JetBrains Mono, monospace">
                                epoch {e}
                              </text>
                            </g>
                          )
                        })}
                      </svg>
                      {run.error && (
                        <div className="mt-3 flex items-start gap-2 rounded-lg border border-[#f0d6de] bg-[#fdf3f6] px-3 py-2.5">
                          <Icon name="warn" className="mt-[2px] h-4 w-4 shrink-0 text-[#cf2055]" />
                          <p className="text-[12px] leading-[1.55] text-[#8b3a52]">{run.error}</p>
                        </div>
                      )}
                    </>
                  )}

                  {tab === "eval" && (
                    <div className="space-y-3.5">
                      <p className="text-[12.5px] text-[var(--color-muted)]">
                        Base model versus this checkpoint on the held-out suite.
                      </p>
                      {EVAL_ROWS.map(([name, before, after]) => (
                        <div key={name}>
                          <div className="mb-1.5 flex items-baseline justify-between">
                            <span className="text-[12.5px]">{name}</span>
                            <span className="font-mono text-[11.5px]">
                              <span className="text-[var(--color-faint)]">{before.toFixed(2)}</span>
                              <span className="mx-1.5 text-[var(--color-faint)]">→</span>
                              <span className="font-medium text-[#177c31]">{after.toFixed(2)}</span>
                            </span>
                          </div>
                          <div className="relative h-[6px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                            <div className="absolute inset-y-0 left-0 rounded-full bg-[var(--color-line)]" style={{ width: `${before * 100}%` }} />
                            <div className="absolute inset-y-0 left-0 rounded-full bg-[var(--color-mineral)] opacity-80" style={{ width: `${after * 100}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {tab === "config" && (
                    <pre className="scroll-thin overflow-x-auto rounded-lg bg-[var(--color-sunk)] px-3.5 py-3 font-mono text-[11.5px] leading-[1.8] text-[var(--color-ink-2)]">
{`{
  "base_model":     "${run.base}",
  "training_file":  "support-replies-2026q1.jsonl",
  "validation_file":"support-replies-holdout.jsonl",
  "n_examples":     ${run.examples},
  "n_epochs":       ${run.epochs},
  "learning_rate":  "${run.lr}",
  "batch_size":     16,
  "lora_rank":      32,
  "lora_alpha":     64,
  "warmup_ratio":   0.03,
  "seed":           1729
}`}
                    </pre>
                  )}
                </div>

                {run.status === "running" && (
                  <div className="flex gap-2 border-t border-[var(--color-line-2)] p-3">
                    <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)]">
                      <Icon name="stop" className="h-3.5 w-3.5" /> Cancel run
                    </button>
                    <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)]">
                      <Icon name="copy" className="h-3.5 w-3.5" /> Clone config
                    </button>
                  </div>
                )}
                {run.status === "succeeded" && (
                  <div className="flex gap-2 border-t border-[var(--color-line-2)] p-3">
                    <button className="h-8 rounded-lg bg-[var(--color-ink)] px-3 text-[12.5px] font-medium text-white hover:bg-black">
                      Deploy checkpoint
                    </button>
                    <button className="h-8 rounded-lg border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)]">
                      Compare to base
                    </button>
                  </div>
                )}
              </div>

              {/* datasets */}
              <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white lg:sticky lg:top-0 lg:self-start">
                <div className="border-b border-[var(--color-line-2)] px-4 py-3">
                  <h2 className="text-[13px] font-medium">Datasets</h2>
                </div>
                {DATASETS.map(([name, n, fmt, size, state, tone], i) => (
                  <div key={name} className={`px-4 py-3 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}>
                    <div className="flex items-center gap-2">
                      <span className="min-w-0 flex-1 truncate font-mono text-[12px]">{name}</span>
                      <span
                        className="shrink-0 rounded-full px-1.5 py-[1px] text-[10px] font-medium"
                        style={{ background: `${tone}1c`, color: tone }}
                      >
                        {state}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[10.5px] text-[var(--color-faint)]">
                      {n.toLocaleString()} examples · {fmt} · {size}
                    </p>
                  </div>
                ))}
                <div className="border-t border-[var(--color-line-2)] p-3">
                  <button className="inline-flex h-8 w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-[var(--color-line)] text-[12.5px] font-medium text-[var(--color-faint)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]">
                    <Icon name="upload" className="h-3.5 w-3.5" /> Upload JSONL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
