import Link from "next/link"
import { Icon, TOC, STATUS, findRfc, Tree } from "../../data"

export default async function RfcDoc({ params }) {
  const { id } = await params
  const r = findRfc(id)

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Tree activeId={r.id} />

      <main className="scroll-thin min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto flex max-w-[1000px] gap-10 px-8 py-8">
          <article className="min-w-0 flex-1">
            {/* breadcrumb */}
            <div className="flex items-center gap-1.5 text-[12px] text-[var(--color-faint)]">
              <Link href="/" className="inline-flex items-center gap-1 hover:text-[var(--color-ink)]"><Icon name="back" className="h-3.5 w-3.5" /> RFCs</Link>
              <span>/</span><span>{r.group}</span><span>/</span><span className="text-[var(--color-muted)]">{r.code}</span>
              <div className="ml-auto flex gap-1.5">
                <button className="inline-flex h-7 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12px] font-medium hover:bg-[var(--color-sunk)]"><Icon name="edit" className="h-3.5 w-3.5" /> Edit</button>
                <button className="inline-flex h-7 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12px] font-medium hover:bg-[var(--color-sunk)]"><Icon name="share" className="h-3.5 w-3.5" /> Share</button>
              </div>
            </div>

            <h1 className="mt-3 font-serif text-[31px] font-medium leading-[1.15] tracking-[-0.02em]">{r.title}</h1>

            {/* meta */}
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-[var(--color-line-2)] py-3 text-[12.5px]">
              <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[11px] font-medium" style={{ background: STATUS[r.status].bg, color: STATUS[r.status].fg }}>
                {r.status === "Accepted" && <Icon name="check" className="h-3 w-3" />} {r.status}
              </span>
              <span className="text-[var(--color-muted)]"><span className="text-[var(--color-faint)]">Author</span> {r.author}</span>
              <span className="text-[var(--color-muted)]"><span className="text-[var(--color-faint)]">Reviewers</span> J. Park · M. Diaz</span>
              <span className="text-[var(--color-muted)]"><span className="text-[var(--color-faint)]">Updated</span> {r.updated}</span>
              <span className="inline-flex items-center gap-1.5 text-[var(--color-clay)]"><Icon name="git" className="h-3.5 w-3.5" /> #4821</span>
            </div>

            {/* body */}
            <div className="mt-6 space-y-5 text-[14.5px] leading-[1.75] text-[var(--color-ink-2)]">
              <section>
                <h2 className="font-serif text-[19px] font-medium tracking-[-0.01em] text-[var(--color-ink)]">Summary</h2>
                <p className="mt-2">
                  Today three services ingest events through separate, subtly different paths, each with its own retry and
                  schema handling. This RFC proposes a single ingestion gateway that normalizes, validates, and buffers
                  events before fan-out, so producers share one contract and one set of guarantees.
                </p>
                <div className="mt-3 rounded-xl border border-[#e7dcc2] bg-[var(--color-olive-soft)] px-4 py-3">
                  <p className="text-[13px] leading-[1.6] text-[#6f5c12]">
                    <span className="font-medium">TL;DR —</span> one gateway, at-least-once delivery, schema registry enforced at the edge. Ships behind a flag over two sprints.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-serif text-[19px] font-medium tracking-[-0.01em] text-[var(--color-ink)]">Motivation</h2>
                <p className="mt-2">The current fan-in has drifted. Concretely:</p>
                <ul className="mt-2 space-y-1.5">
                  {[
                    "Each producer re-implements retry and dead-lettering, with different backoff.",
                    "Schema changes require coordinated deploys across four repos.",
                    "There is no single place to sample, replay, or audit an event.",
                  ].map((t) => (
                    <li key={t} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-clay)]" /> <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-[19px] font-medium tracking-[-0.01em] text-[var(--color-ink)]">Design</h2>
                <p className="mt-2">Producers write to a thin gateway that validates against the registry, then buffers to a durable queue. Workers consume and fan out to the warehouse and downstream subscribers.</p>
                <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--color-line)] bg-white p-4 scroll-thin">
                  <svg viewBox="0 0 640 120" className="w-full min-w-[560px]" aria-hidden>
                    {[
                      [10, "Producers", "#827dbd"],
                      [170, "Gateway", "#c96442"],
                      [330, "Queue", "#98801f"],
                      [490, "Workers", "#629987"],
                    ].map(([x, label, c], i) => (
                      <g key={label}>
                        <rect x={x} y={40} width={120} height={40} rx={9} fill={`${c}14`} stroke={c} strokeWidth="1.5" />
                        <text x={x + 60} y={64} fontSize="13" textAnchor="middle" fill="#141413" fontFamily="Inter, sans-serif" fontWeight="500">{label}</text>
                        {i < 3 && <path d={`M${x + 120} 60 H${x + 160}`} stroke="#c7c5bd" strokeWidth="1.5" markerEnd="url(#ah)" />}
                      </g>
                    ))}
                    <text x={550} y={30} fontSize="10.5" textAnchor="middle" fill="#87867f" fontFamily="JetBrains Mono, monospace">→ warehouse</text>
                    <path d="M550 80 V100" stroke="#c7c5bd" strokeWidth="1.5" strokeDasharray="3 3" />
                    <text x={550} y={114} fontSize="10.5" textAnchor="middle" fill="#87867f" fontFamily="JetBrains Mono, monospace">subscribers</text>
                    <defs>
                      <marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                        <path d="M0 0l6 3-6 3z" fill="#c7c5bd" />
                      </marker>
                    </defs>
                  </svg>
                </div>
                <pre className="mt-3 scroll-thin overflow-x-auto rounded-xl bg-[var(--color-sunk)] px-4 py-3 font-mono text-[12px] leading-[1.7] text-[var(--color-ink-2)]">{`POST /v2/ingest
{ "schema": "order.created@3",
  "idempotency_key": "9f2a-…",
  "payload": { … } }
→ 202 Accepted  (buffered, at-least-once)`}</pre>
              </section>

              <section>
                <h2 className="font-serif text-[19px] font-medium tracking-[-0.01em] text-[var(--color-ink)]">Decision matrix</h2>
                <div className="mt-3 overflow-hidden rounded-xl border border-[var(--color-line)]">
                  <table className="w-full text-[13px]">
                    <thead>
                      <tr className="border-b border-[var(--color-line-2)] bg-[var(--color-sunk)]">
                        {["Option", "Latency", "Ops cost", "Decision"].map((h) => (
                          <th key={h} className="px-3 py-2 text-left text-[11px] font-medium tracking-wide text-[var(--color-faint)]">{h.toUpperCase()}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Gateway + queue", "Low", "Medium", "chosen"],
                        ["Direct-to-warehouse", "Lowest", "High", "rejected"],
                        ["Per-service brokers", "Low", "High", "rejected"],
                      ].map(([o, l, c, d]) => (
                        <tr key={o} className="border-b border-[var(--color-line-2)] last:border-0">
                          <td className="px-3 py-2 font-medium">{o}</td>
                          <td className="px-3 py-2 text-[var(--color-muted)]">{l}</td>
                          <td className="px-3 py-2 text-[var(--color-muted)]">{c}</td>
                          <td className="px-3 py-2">
                            <span className={`rounded-full px-2 py-[2px] text-[10.5px] font-medium ${d === "chosen" ? "bg-[#e6f4ea] text-[#177c31]" : "bg-[var(--color-sunk)] text-[var(--color-faint)]"}`}>{d}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </article>

          {/* on this page */}
          <aside className="hidden w-[176px] shrink-0 lg:block">
            <div className="sticky top-0">
              <p className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">ON THIS PAGE</p>
              <nav className="mt-2.5 space-y-1.5 border-l border-[var(--color-line)]">
                {TOC.map((label, i) => (
                  <a key={label} className={`-ml-px block border-l-2 pl-3 text-[12.5px] transition-colors ${i === 0 ? "border-[var(--color-clay)] font-medium text-[var(--color-ink)]" : "border-transparent text-[var(--color-muted)] hover:text-[var(--color-ink)]"}`}>
                    {label}
                  </a>
                ))}
              </nav>
              <div className="mt-5 rounded-lg bg-[var(--color-ivory)] p-3">
                <p className="text-[11px] font-medium">Contributors</p>
                <div className="mt-1.5 flex -space-x-1.5">
                  {[["RK", "#629987"], ["JP", "#c96442"], ["MD", "#827dbd"]].map(([n, c]) => (
                    <span key={n} className="grid h-6 w-6 place-items-center rounded-full text-[9px] font-semibold text-white ring-2 ring-[var(--color-ivory)]" style={{ background: c }}>{n}</span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
