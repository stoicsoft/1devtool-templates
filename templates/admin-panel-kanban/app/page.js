import Link from "next/link"
import { Icon, Avatar, PRIO, LABELS, COLUMNS, Sidebar } from "./data"

export default function Kanban() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="Board" />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <h1 className="font-serif text-[17px] font-medium tracking-[-0.01em]">Sprint 24</h1>
          <span className="rounded-full bg-[var(--color-sunk)] px-2 py-0.5 text-[11.5px] font-medium text-[var(--color-muted)]">Board</span>
          <div className="relative ml-1 hidden md:block">
            <Icon name="search" className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--color-faint)]" />
            <input placeholder="Search issues…" className="h-8 w-[200px] rounded-lg border border-[var(--color-line)] bg-white pl-8 pr-3 text-[12.5px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]" />
          </div>
          <button className="hidden h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)] md:inline-flex">
            <Icon name="filter" className="h-3.5 w-3.5" /> Filter
          </button>
          <div className="ml-auto flex items-center gap-2">
            <div className="hidden -space-x-1.5 sm:flex">
              {[["EV", "#827dbd"], ["RK", "#629987"], ["JP", "#c96442"], ["MD", "#cf2055"]].map(([n, c]) => (
                <span key={n} className="grid h-7 w-7 place-items-center rounded-full text-[9.5px] font-semibold text-white ring-2 ring-[var(--color-page)]" style={{ background: c }}>{n}</span>
              ))}
            </div>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]">
              <Icon name="plus" className="h-4 w-4" /> New issue
            </button>
          </div>
        </header>

        {/* board */}
        <div className="scroll-thin min-h-0 flex-1 overflow-x-auto overflow-y-hidden">
          <div className="flex h-full min-w-max gap-3 px-4 py-4">
            {COLUMNS.map((col) => (
              <div key={col.name} className="flex h-full w-[256px] flex-col">
                <div className="mb-2 flex items-center gap-2 px-1">
                  <span className="h-2 w-2 rounded-full" style={{ background: col.dot }} />
                  <span className="text-[12.5px] font-medium">{col.name}</span>
                  <span className="rounded-full bg-[var(--color-sunk)] px-1.5 text-[10.5px] font-medium text-[var(--color-muted)]">{col.cards.length}</span>
                  <button className="ml-auto grid h-6 w-6 place-items-center rounded-md text-[var(--color-faint)] hover:bg-[var(--color-sunk)]"><Icon name="plus" className="h-3.5 w-3.5" /></button>
                </div>
                <div className="scroll-thin min-h-0 flex-1 space-y-2 overflow-y-auto rounded-xl bg-[var(--color-sunk)]/60 p-2">
                  {col.cards.map((c) => (
                    <Link key={c.key} href={`/issues/${c.key}`} className="block rounded-xl border border-[var(--color-line)] bg-white p-3 shadow-[0_1px_2px_rgba(20,20,19,0.04)] transition-shadow hover:shadow-[0_2px_10px_rgba(20,20,19,0.07)]">
                      <div className="mb-2 flex flex-wrap gap-1">
                        {c.labels.map((l) => (
                          <span key={l} className="rounded-full px-1.5 py-[1px] text-[9.5px] font-medium" style={{ background: `${LABELS[l]}1c`, color: LABELS[l] }}>{l}</span>
                        ))}
                      </div>
                      <p className={`text-[12.5px] font-medium leading-[1.4] ${c.done ? "text-[var(--color-muted)] line-through decoration-[var(--color-line)]" : ""}`}>{c.title}</p>

                      {c.sub && (
                        <div className="mt-2 flex items-center gap-2">
                          <span className="h-[4px] flex-1 overflow-hidden rounded-full bg-[var(--color-sunk)]">
                            <span className="block h-full rounded-full bg-[var(--color-mineral)]" style={{ width: `${(c.sub[0] / c.sub[1]) * 100}%` }} />
                          </span>
                          <span className="inline-flex items-center gap-1 font-mono text-[10px] text-[var(--color-faint)]"><Icon name="check" className="h-3 w-3" /> {c.sub[0]}/{c.sub[1]}</span>
                        </div>
                      )}

                      <div className="mt-2.5 flex items-center gap-2">
                        <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: PRIO[c.prio] }} title={c.prio} />
                        <span className="font-mono text-[10.5px] text-[var(--color-faint)]">{c.key}</span>
                        {c.branch && <Icon name="branch" className="h-3.5 w-3.5 text-[var(--color-faint)]" />}
                        {c.comments != null && (
                          <span className="inline-flex items-center gap-0.5 text-[10.5px] text-[var(--color-faint)]"><Icon name="comment" className="h-3 w-3" /> {c.comments}</span>
                        )}
                        <span className="ml-auto"><Avatar n={c.who[0]} c={c.who[1]} /></span>
                      </div>
                    </Link>
                  ))}
                  <button className="flex w-full items-center gap-1.5 rounded-lg px-2 py-1.5 text-[12px] font-medium text-[var(--color-faint)] hover:bg-white hover:text-[var(--color-ink)]">
                    <Icon name="plus" className="h-3.5 w-3.5" /> Add issue
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
