import Link from "next/link"
import { Icon, RFCS, STATUS, Tree } from "./data"

export default function RfcIndex() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Tree activeId={null} />

      <main className="scroll-thin min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-[880px] px-8 py-8">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="font-serif text-[28px] font-medium tracking-[-0.02em]">RFCs</h1>
              <p className="mt-1 text-[13px] text-[var(--color-muted)]">Design docs and proposals. {RFCS.length} documents across 2 areas.</p>
            </div>
            <button className="ml-auto inline-flex h-9 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-3.5 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]">
              <Icon name="plus" className="h-4 w-4" /> New RFC
            </button>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
            <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
              <h2 className="text-[13px] font-medium">All proposals</h2>
              <span className="ml-auto text-[11.5px] text-[var(--color-faint)]">open one to read the full doc</span>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--color-line-2)]">
                  {["RFC", "Status", "Author", "Area", "Updated"].map((h) => (
                    <th key={h} className="px-3 py-2.5 text-left text-[10.5px] font-medium tracking-wide text-[var(--color-faint)] first:pl-4">{h.toUpperCase()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {RFCS.map((r) => (
                  <tr key={r.id} className="group border-b border-[var(--color-line-2)] last:border-0 hover:bg-[var(--color-sunk)]">
                    <td className="p-0">
                      <Link href={`/rfc/${r.id}`} className="flex items-center gap-2.5 py-3 pl-4 pr-3">
                        <Icon name="doc" className="h-4 w-4 shrink-0 text-[var(--color-faint)]" />
                        <span>
                          <span className="block text-[13px] font-medium">{r.title}</span>
                          <span className="block font-mono text-[10.5px] text-[var(--color-faint)]">{r.code}</span>
                        </span>
                      </Link>
                    </td>
                    <td className="px-3 py-3">
                      <span className="rounded-full px-2 py-[3px] text-[10.5px] font-medium" style={{ background: STATUS[r.status].bg, color: STATUS[r.status].fg }}>{r.status}</span>
                    </td>
                    <td className="px-3 py-3 text-[12.5px] text-[var(--color-muted)]">{r.author}</td>
                    <td className="px-3 py-3 text-[12.5px] text-[var(--color-muted)]">{r.group}</td>
                    <td className="px-3 py-3 text-[11.5px] text-[var(--color-faint)]">{r.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
