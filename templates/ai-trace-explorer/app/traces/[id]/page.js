"use client"

import { use, useState } from "react"
import Link from "next/link"
import { Icon, TYPE, SPANS, TOTAL, TRACES, Sidebar } from "../../data"

export default function TraceDetail({ params }) {
  const { id } = use(params)
  const trace = TRACES.find((t) => t.id === id) || TRACES[0]
  const [span, setSpan] = useState("s5")
  const sp = SPANS.find((s) => s.id === span)

  const META = [
    ["Latency", `${(trace.latency / 1000).toFixed(2)}s`, "clock", "#629987"],
    ["Cost", `$${trace.cost.toFixed(4)}`, "coin", "#c96442"],
    ["Tokens", trace.tokens.toLocaleString(), "tokens", "#827dbd"],
    ["Spans", trace.spans, "layers", "#98801f"],
  ]

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="Traces" />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <Link href="/" className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-[13px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]">
            <Icon name="back" className="h-4 w-4" /> Traces
          </Link>
          <span className="text-[var(--color-line)]">/</span>
          <h1 className="font-serif text-[16px] font-medium tracking-[-0.01em]">{trace.name}</h1>
          <span className="font-mono text-[11.5px] text-[var(--color-faint)]">{trace.id}</span>
          {trace.status === "ok" ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e6f4ea] px-2 py-[3px] text-[10.5px] font-medium text-[#177c31]"><span className="h-[5px] w-[5px] rounded-full bg-[#1e9f3c]" /> ok</span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fceaef] px-2 py-[3px] text-[10.5px] font-medium text-[#a81a44]"><span className="h-[5px] w-[5px] rounded-full bg-[#cf2055]" /> {trace.err}</span>
          )}
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="share" className="h-3.5 w-3.5" /> Share
            </button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-ink)] px-3 text-[12.5px] font-medium text-white hover:bg-black">
              <Icon name="replay" className="h-3.5 w-3.5" /> Replay
            </button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto max-w-[1180px]">
            {/* summary tiles */}
            <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {META.map(([label, val, icon, tone]) => (
                <div key={label} className="rounded-xl border border-[var(--color-line)] bg-white p-3.5">
                  <div className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-lg" style={{ background: `${tone}18` }}>
                      <Icon name={icon} className="h-4 w-4" style={{ color: tone }} />
                    </span>
                    <span className="text-[11.5px] text-[var(--color-muted)]">{label}</span>
                  </div>
                  <p className="mt-2 font-serif text-[22px] font-medium tracking-[-0.01em]">{val}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_336px]">
              {/* waterfall */}
              <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                  <h2 className="text-[13px] font-medium">Waterfall</h2>
                  <span className="font-mono text-[11px] text-[var(--color-faint)]">{trace.id}</span>
                  <span className="ml-auto font-mono text-[11px] text-[var(--color-faint)]">model {trace.model}</span>
                </div>

                <div className="relative ml-[210px] mr-4 h-5 border-b border-[var(--color-line-2)]">
                  {[0, 0.25, 0.5, 0.75, 1].map((f) => (
                    <span key={f} className="absolute top-1 font-mono text-[9.5px] text-[var(--color-faint)]" style={{ left: `${f * 100}%`, transform: f === 1 ? "translateX(-100%)" : "none" }}>
                      {((TOTAL * f) / 1000).toFixed(2)}s
                    </span>
                  ))}
                </div>

                <div className="py-1.5">
                  {SPANS.map((s) => {
                    const t = TYPE[s.type]
                    const left = (s.start / TOTAL) * 100
                    const width = Math.max((s.dur / TOTAL) * 100, 1.2)
                    return (
                      <button
                        key={s.id}
                        onClick={() => setSpan(s.id)}
                        className={`flex w-full items-center py-[3px] pr-4 text-left transition-colors ${span === s.id ? "bg-[var(--color-clay-soft)]" : "hover:bg-[var(--color-sunk)]"}`}
                      >
                        <span className="flex w-[210px] shrink-0 items-center gap-1.5 pl-4" style={{ paddingLeft: `${16 + s.depth * 16}px` }}>
                          <span className="grid h-4 w-4 shrink-0 place-items-center rounded" style={{ background: t.soft }}>
                            <Icon name={s.type} className="h-[11px] w-[11px]" style={{ color: t.color }} />
                          </span>
                          <span className="truncate font-mono text-[11.5px]">{s.name}</span>
                          {s.status === "error" && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#cf2055]" />}
                        </span>
                        <span className="relative h-[18px] min-w-0 flex-1">
                          <span className="absolute top-1/2 flex h-[9px] -translate-y-1/2 items-center rounded-[3px]" style={{ left: `${left}%`, width: `${width}%`, background: t.color, opacity: span === s.id ? 1 : 0.82 }} />
                          {left + width > 84 ? (
                            <span className="absolute top-1/2 -translate-y-1/2 -translate-x-full whitespace-nowrap pr-1.5 font-mono text-[9.5px] text-white/90" style={{ left: `${left + width}%` }}>{s.dur}ms</span>
                          ) : (
                            <span className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[9.5px] text-[var(--color-faint)]" style={{ left: `calc(${left + width}% + 6px)` }}>{s.dur}ms</span>
                          )}
                        </span>
                      </button>
                    )
                  })}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-[var(--color-line-2)] px-4 py-2.5">
                  {Object.values(TYPE).map((t) => (
                    <span key={t.label} className="inline-flex items-center gap-1.5 text-[10.5px] text-[var(--color-muted)]">
                      <span className="h-[8px] w-[8px] rounded-[2px]" style={{ background: t.color }} /> {t.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* span detail */}
              <div className="flex flex-col overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                  <span className="grid h-5 w-5 place-items-center rounded" style={{ background: TYPE[sp.type].soft }}>
                    <Icon name={sp.type} className="h-3 w-3" style={{ color: TYPE[sp.type].color }} />
                  </span>
                  <h2 className="font-mono text-[13px] font-medium">{sp.name}</h2>
                  <span className="ml-auto rounded-full px-2 py-[2px] text-[10px] font-medium" style={{ background: TYPE[sp.type].soft, color: TYPE[sp.type].color }}>{TYPE[sp.type].label}</span>
                </div>

                <div className="grid grid-cols-2 gap-px bg-[var(--color-line-2)]">
                  {[
                    ["Duration", `${sp.dur}ms`],
                    ["Model", sp.model || "—"],
                    ["Input tokens", sp.tokIn ? sp.tokIn.toLocaleString() : "—"],
                    ["Output tokens", sp.tokOut ? sp.tokOut.toLocaleString() : "—"],
                    ["Cost", sp.cost != null ? `$${sp.cost.toFixed(4)}` : "—"],
                    ["Status", sp.status],
                  ].map(([k, v]) => (
                    <div key={k} className="bg-white px-4 py-2.5">
                      <p className="text-[10.5px] text-[var(--color-faint)]">{k}</p>
                      <p className="mt-0.5 font-mono text-[12px] text-[var(--color-ink-2)]">{v}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 px-4 py-3.5">
                  <div>
                    <p className="mb-1.5 text-[10.5px] font-medium tracking-wide text-[var(--color-faint)]">INPUT</p>
                    <pre className="scroll-thin overflow-x-auto whitespace-pre-wrap rounded-lg bg-[var(--color-sunk)] px-3 py-2.5 font-mono text-[11px] leading-[1.7] text-[var(--color-ink-2)]">{sp.input}</pre>
                  </div>
                  <div>
                    <p className="mb-1.5 text-[10.5px] font-medium tracking-wide text-[var(--color-faint)]">OUTPUT</p>
                    <pre className="scroll-thin overflow-x-auto whitespace-pre-wrap rounded-lg bg-[var(--color-sunk)] px-3 py-2.5 font-mono text-[11px] leading-[1.7] text-[var(--color-ink-2)]">{sp.output}</pre>
                  </div>
                </div>

                <div className="mt-auto flex gap-2 border-t border-[var(--color-line-2)] p-3">
                  <button className="inline-flex h-8 flex-1 items-center justify-center gap-1.5 rounded-lg bg-[var(--color-ink)] text-[12.5px] font-medium text-white hover:bg-black">
                    <Icon name="replay" className="h-3.5 w-3.5" /> Replay span
                  </button>
                  <button className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)]">
                    Add to dataset
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
