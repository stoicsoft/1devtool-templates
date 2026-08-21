import Link from "next/link"
import { Icon, SEV, STATUS, INCIDENTS, STATS, Sidebar } from "./data"

export default function Incidents() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="Incidents" />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <h1 className="font-serif text-[17px] font-medium tracking-[-0.01em]">Incidents</h1>
          <div className="relative ml-1 hidden md:block">
            <Icon name="search2" className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--color-faint)]" />
            <input placeholder="Search incidents…" className="h-8 w-[220px] rounded-lg border border-[var(--color-line)] bg-white pl-8 pr-3 text-[12.5px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]" />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              All severities <Icon name="down" className="h-3.5 w-3.5" />
            </button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[#cf2055] px-3 text-[12.5px] font-medium text-white hover:bg-[#b81c49]">
              <Icon name="plus" className="h-4 w-4" /> Declare incident
            </button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto max-w-[1180px]">
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

            <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
              <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                <h2 className="text-[13px] font-medium">Active & recent</h2>
                <span className="text-[11.5px] text-[var(--color-faint)]">{INCIDENTS.length}</span>
                <span className="ml-auto text-[11.5px] text-[var(--color-faint)]">click an incident for the full timeline</span>
              </div>
              {INCIDENTS.map((i) => {
                const sv = SEV[i.sev]
                const stt = STATUS[i.status]
                return (
                  <Link
                    key={i.id}
                    href={`/incidents/${i.id}`}
                    className="flex w-full items-center gap-3 border-b border-[var(--color-line-2)] px-4 py-3 text-left last:border-0 hover:bg-[var(--color-sunk)]"
                  >
                    <span className="inline-flex h-[26px] shrink-0 items-center gap-1.5 rounded-md px-2 text-[11px] font-semibold" style={{ background: sv.bg, color: sv.fg }}>
                      {i.status !== "resolved" && <span className="h-[5px] w-[5px] rounded-full pulse-dot" style={{ background: sv.dot }} />}
                      {sv.label}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px] font-medium">{i.title}</p>
                      <p className="font-mono text-[10.5px] text-[var(--color-faint)]">{i.id} · {i.service} · commander {i.commander}</p>
                    </div>
                    <span className="hidden shrink-0 items-center gap-1.5 font-mono text-[11.5px] text-[var(--color-muted)] sm:inline-flex">
                      <Icon name="clock" className="h-3.5 w-3.5 text-[var(--color-faint)]" /> {i.dur}
                    </span>
                    <span className="shrink-0 rounded-full px-2 py-[3px] text-[10.5px] font-medium capitalize" style={{ background: stt.bg, color: stt.fg }}>{i.status}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
