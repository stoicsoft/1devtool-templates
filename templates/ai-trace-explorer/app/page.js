import Link from "next/link"
import { Icon, TRACES, Sidebar } from "./data"

const STATS = [
  ["Traces · 1h", "1,284", "traces", "#c96442"],
  ["p50 latency", "1.94s", "clock", "#629987"],
  ["Spend · 1h", "$2.18", "coin", "#827dbd"],
  ["Error rate", "1.2%", "warn", "#98801f"],
]

export default function TraceList() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="Traces" />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <h1 className="font-serif text-[17px] font-medium tracking-[-0.01em]">Trace explorer</h1>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-white px-2.5 py-1 text-[11.5px] font-medium text-[var(--color-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-leaf)]" /> prod
          </span>
          <div className="relative ml-1 hidden md:block">
            <Icon name="search" className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--color-faint)]" />
            <input
              defaultValue="name = support-agent"
              className="h-8 w-[248px] rounded-lg border border-[var(--color-line)] bg-white pl-8 pr-3 font-mono text-[12px] text-[var(--color-ink-2)] outline-none focus:border-[var(--color-clay)]"
            />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="clock" className="h-3.5 w-3.5" /> Last 1h
            </button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="filter" className="h-3.5 w-3.5" /> Filters
            </button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto max-w-[1180px]">
            {/* stat tiles */}
            <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {STATS.map(([label, val, icon, tone]) => (
                <div key={label} className="rounded-xl border border-[var(--color-line)] bg-white p-3.5">
                  <div className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-lg" style={{ background: `${tone}18` }}>
                      <Icon name={icon} className="h-4 w-4" style={{ color: tone }} />
                    </span>
                    <span className="text-[11.5px] text-[var(--color-muted)]">{label}</span>
                  </div>
                  <p className="mt-2 font-serif text-[23px] font-medium tracking-[-0.01em]">{val}</p>
                </div>
              ))}
            </div>

            {/* traces table */}
            <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
              <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                <h2 className="text-[13px] font-medium">Recent traces</h2>
                <span className="text-[11.5px] text-[var(--color-faint)]">{TRACES.length}</span>
                <span className="ml-auto text-[11.5px] text-[var(--color-faint)]">click a trace to open its waterfall</span>
              </div>
              <div className="scroll-thin overflow-x-auto">
                <table className="w-full min-w-[820px]">
                  <thead>
                    <tr className="border-b border-[var(--color-line-2)]">
                      {["Trace", "Model", "Spans", "Tokens", "Cost", "Latency", "When", "Status"].map((h) => (
                        <th key={h} className="px-3 py-2.5 text-left text-[10.5px] font-medium tracking-wide text-[var(--color-faint)] first:pl-4">
                          {h.toUpperCase()}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TRACES.map((t) => (
                      <tr key={t.id} className="group border-b border-[var(--color-line-2)] last:border-0 hover:bg-[var(--color-sunk)]">
                        <td className="p-0">
                          <Link href={`/traces/${t.id}`} className="flex flex-col py-2.5 pl-4 pr-3">
                            <span className="text-[12.5px] font-medium">{t.name}</span>
                            <span className="font-mono text-[10.5px] text-[var(--color-faint)]">{t.id}</span>
                          </Link>
                        </td>
                        <td className="px-3 py-2.5 font-mono text-[11.5px] text-[var(--color-muted)]">{t.model}</td>
                        <td className="px-3 py-2.5 font-mono text-[11.5px] text-[var(--color-muted)]">{t.spans}</td>
                        <td className="px-3 py-2.5 font-mono text-[11.5px] text-[var(--color-muted)]">{t.tokens.toLocaleString()}</td>
                        <td className="px-3 py-2.5 font-mono text-[11.5px] text-[var(--color-muted)]">${t.cost.toFixed(4)}</td>
                        <td className="px-3 py-2.5">
                          <span className="font-mono text-[11.5px]" style={{ color: t.latency > 3500 ? "#cf2055" : "var(--color-muted)" }}>
                            {(t.latency / 1000).toFixed(2)}s
                          </span>
                        </td>
                        <td className="px-3 py-2.5 text-[11.5px] text-[var(--color-faint)]">{t.when}</td>
                        <td className="px-3 py-2.5">
                          {t.status === "ok" ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e6f4ea] px-2 py-[3px] text-[10.5px] font-medium text-[#177c31]">
                              <span className="h-[5px] w-[5px] rounded-full bg-[#1e9f3c]" /> ok
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fceaef] px-2 py-[3px] text-[10.5px] font-medium text-[#a81a44]">
                              <span className="h-[5px] w-[5px] rounded-full bg-[#cf2055]" /> {t.err}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
