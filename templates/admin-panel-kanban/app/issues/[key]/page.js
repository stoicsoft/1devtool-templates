import Link from "next/link"
import { Icon, Avatar, PRIO, PRIO_LABEL, LABELS, WHO, findIssue, Sidebar } from "../../data"

export default async function IssueDetail({ params }) {
  const { key } = await params
  const iss = findIssue(key)
  const [who, whoColor] = WHO[iss.who[0]] || ["Unassigned", "#87867f"]

  const desc = iss.desc || "No description yet. Add context, acceptance criteria, and links so anyone can pick this up."
  const checklist = iss.checklist || [["Define scope", true], ["Implement", false], ["Review & ship", false]]
  const activity = iss.activity || [[iss.who[0], "created this issue", "recently"]]
  const done = checklist.filter((c) => c[1]).length

  const PROPS = [
    ["Status", <span key="s" className="inline-flex items-center gap-1.5 text-[12.5px] font-medium"><span className="h-2 w-2 rounded-full" style={{ background: iss.statusDot }} /> {iss.status}</span>],
    ["Priority", <span key="p" className="inline-flex items-center gap-1.5 text-[12.5px]"><Icon name="flag" className="h-3.5 w-3.5" style={{ color: PRIO[iss.prio] }} /> {PRIO_LABEL[iss.prio]}</span>],
    ["Assignee", <span key="a" className="inline-flex items-center gap-2 text-[12.5px]"><Avatar n={iss.who[0]} c={iss.who[1]} size={20} /> {who}</span>],
    ["Sprint", <span key="sp" className="text-[12.5px]">Sprint 24</span>],
  ]

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="Board" />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <Link href="/" className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-[13px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]">
            <Icon name="back" className="h-4 w-4" /> Board
          </Link>
          <span className="text-[var(--color-line)]">/</span>
          <span className="font-mono text-[12.5px] text-[var(--color-muted)]">{iss.key}</span>
          {iss.branch && <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-white px-2 py-1 font-mono text-[11px] text-[var(--color-muted)]"><Icon name="branch" className="h-3.5 w-3.5" /> feat/settings-nav</span>}
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">Move</button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-ink)] px-3 text-[12.5px] font-medium text-white hover:bg-black">Mark done</button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-6 py-6">
          <div className="mx-auto grid max-w-[1040px] gap-8 lg:grid-cols-[minmax(0,1fr)_240px]">
            {/* main */}
            <div className="min-w-0">
              <div className="flex flex-wrap gap-1.5">
                {iss.labels.map((l) => (
                  <span key={l} className="rounded-full px-2 py-[2px] text-[10.5px] font-medium" style={{ background: `${LABELS[l]}1c`, color: LABELS[l] }}>{l}</span>
                ))}
              </div>
              <h1 className="mt-2.5 font-serif text-[25px] font-medium leading-tight tracking-[-0.01em]">{iss.title}</h1>

              <p className="mt-4 whitespace-pre-line text-[14px] leading-[1.7] text-[var(--color-ink-2)]">{desc}</p>

              {/* checklist */}
              <div className="mt-6">
                <div className="mb-2 flex items-center gap-2">
                  <h2 className="text-[13.5px] font-medium">Sub-tasks</h2>
                  <span className="text-[11.5px] text-[var(--color-faint)]">{done}/{checklist.length}</span>
                  <span className="ml-2 h-[5px] w-[120px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                    <span className="block h-full rounded-full bg-[var(--color-mineral)]" style={{ width: `${(done / checklist.length) * 100}%` }} />
                  </span>
                </div>
                <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                  {checklist.map(([label, isDone], i) => (
                    <div key={i} className={`flex items-center gap-2.5 px-3.5 py-2.5 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}>
                      <span className={`grid h-[18px] w-[18px] shrink-0 place-items-center rounded-[5px] border ${isDone ? "border-transparent bg-[var(--color-mineral)] text-white" : "border-[var(--color-line)] bg-white"}`}>
                        {isDone && <Icon name="check2" className="h-3 w-3" />}
                      </span>
                      <span className={`text-[13px] ${isDone ? "text-[var(--color-muted)] line-through decoration-[var(--color-line)]" : ""}`}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* activity */}
              <div className="mt-6">
                <h2 className="mb-3 text-[13.5px] font-medium">Activity</h2>
                <div className="relative">
                  {activity.map(([initials, text, when], i, arr) => {
                    const [name, color] = WHO[initials] || ["Someone", "#87867f"]
                    return (
                      <div key={i} className="flex gap-3 pb-4 last:pb-0">
                        <div className="flex flex-col items-center">
                          <Avatar n={initials} c={color} size={26} />
                          {i < arr.length - 1 && <span className="mt-1 w-[1.5px] flex-1 bg-[var(--color-line)]" />}
                        </div>
                        <div className="-mt-0.5 pb-1">
                          <p className="text-[12.5px] leading-[1.5] text-[var(--color-ink-2)]"><span className="font-medium text-[var(--color-ink)]">{name}</span> {text}</p>
                          <p className="text-[10.5px] text-[var(--color-faint)]">{when}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="mt-2 flex items-center gap-2.5 rounded-xl border border-[var(--color-line)] bg-white px-3 py-2.5">
                  <Avatar n="EV" c="#827dbd" size={26} />
                  <input placeholder="Leave a comment…" className="min-w-0 flex-1 bg-transparent text-[13px] outline-none placeholder:text-[var(--color-faint)]" />
                  <button className="shrink-0 rounded-lg bg-[var(--color-ink)] px-3 py-1.5 text-[12px] font-medium text-white hover:bg-black">Comment</button>
                </div>
              </div>
            </div>

            {/* properties rail */}
            <aside className="min-w-0">
              <div className="rounded-xl border border-[var(--color-line)] bg-white">
                <p className="border-b border-[var(--color-line-2)] px-4 py-2.5 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">PROPERTIES</p>
                {PROPS.map(([label, node], i) => (
                  <div key={label} className={`flex items-center justify-between gap-2 px-4 py-2.5 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}>
                    <span className="text-[11.5px] text-[var(--color-faint)]">{label}</span>
                    {node}
                  </div>
                ))}
                <div className="flex items-center justify-between gap-2 border-t border-[var(--color-line-2)] px-4 py-2.5">
                  <span className="text-[11.5px] text-[var(--color-faint)]">Labels</span>
                  <div className="flex flex-wrap justify-end gap-1">
                    {iss.labels.map((l) => (
                      <span key={l} className="rounded-full px-1.5 py-[1px] text-[10px] font-medium" style={{ background: `${LABELS[l]}1c`, color: LABELS[l] }}>{l}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-3 rounded-xl bg-[var(--color-ivory)] p-3.5">
                <p className="text-[11px] font-medium">Linked</p>
                <a className="mt-1.5 inline-flex items-center gap-1.5 text-[12px] text-[var(--color-clay)] hover:text-[var(--color-clay-2)]"><Icon name="branch" className="h-3.5 w-3.5" /> 1 branch · 3 commits</a>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}
