import Link from "next/link"
import { Icon, MONTHS, NEW, EXP, CON, CHN, C, PLANS, PLAN_TOTAL, ACCOUNTS, Sidebar } from "./data"

export default function Revenue() {
  const base = 68.0
  const nets = NEW.map((_, i) => NEW[i] + EXP[i] - CON[i] - CHN[i])
  const mrr = []
  nets.reduce((acc, n) => { const v = acc + n; mrr.push(v); return v }, base)
  const endMrr = mrr[mrr.length - 1]
  const netNew = nets[nets.length - 1]

  const W = 660, H = 252, padL = 30, padR = 12, padT = 14, padB = 26
  const plotH = H - padT - padB
  const maxUp = 18, maxDown = 8, span = maxUp + maxDown
  const zeroY = padT + (maxUp / span) * plotH
  const bw = (W - padL - padR) / MONTHS.length
  const y = (v) => zeroY - (v / span) * plotH
  const netLine = nets.map((v, i) => `${i === 0 ? "M" : "L"}${(padL + bw * (i + 0.5)).toFixed(1)},${y(v).toFixed(1)}`).join(" ")

  const KPIS = [
    ["MRR", `$${endMrr.toFixed(1)}k`, "+9.2%", true, "revenue", "#c96442"],
    ["Net new MRR", `$${netNew.toFixed(1)}k`, "+18.4%", true, "pulse", "#629987"],
    ["ARR", `$${((endMrr * 12) / 1000).toFixed(2)}M`, "+41%", true, "layers", "#827dbd"],
    ["Net revenue retention", "112%", "+3pts", true, "users", "#98801f"],
  ]

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="Revenue" />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <h1 className="font-serif text-[17px] font-medium tracking-[-0.01em]">Revenue</h1>
          <div className="ml-auto flex items-center gap-2">
            <div className="flex items-center rounded-lg border border-[var(--color-line)] bg-white p-0.5">
              {["3M", "6M", "12M"].map((r) => (
                <span key={r} className={`rounded-md px-2.5 py-1 text-[12px] font-medium ${r === "12M" ? "bg-[var(--color-ink)] text-white" : "text-[var(--color-muted)]"}`}>{r}</span>
              ))}
            </div>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="calendar" className="h-3.5 w-3.5" /> 2026
            </button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]">
              <Icon name="download" className="h-3.5 w-3.5" /> Export
            </button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {KPIS.map(([label, val, delta, up, icon, tone]) => (
                <div key={label} className="rounded-xl border border-[var(--color-line)] bg-white p-3.5">
                  <div className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-lg" style={{ background: `${tone}18` }}>
                      <Icon name={icon} className="h-4 w-4" style={{ color: tone }} />
                    </span>
                    <span className="text-[11.5px] text-[var(--color-muted)]">{label}</span>
                  </div>
                  <div className="mt-2 flex items-end justify-between">
                    <p className="font-serif text-[24px] font-medium tracking-[-0.01em]">{val}</p>
                    <span className={`mb-1 inline-flex items-center gap-0.5 rounded-full px-1.5 py-[2px] text-[10.5px] font-medium ${up ? "bg-[#e6f4ea] text-[#177c31]" : "bg-[#fceaef] text-[#a81a44]"}`}>
                      <Icon name={up ? "up" : "down"} className="h-3 w-3" /> {delta}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_312px]">
              {/* MRR movement chart */}
              <div className="flex flex-col overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                  <h2 className="text-[13px] font-medium">MRR movement</h2>
                  <span className="text-[11.5px] text-[var(--color-faint)]">monthly, in $k</span>
                  <div className="ml-auto flex flex-wrap items-center gap-x-3.5 gap-y-1">
                    {[["New", C.new], ["Expansion", C.exp], ["Contraction", C.con], ["Churn", C.chn]].map(([l, c]) => (
                      <span key={l} className="inline-flex items-center gap-1.5 text-[10.5px] text-[var(--color-muted)]">
                        <span className="h-[8px] w-[8px] rounded-[2px]" style={{ background: c }} /> {l}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-3 py-3">
                  <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-hidden>
                    {[-8, -4, 0, 4, 8, 12, 16].map((g) => (
                      <g key={g}>
                        <line x1={padL} x2={W - padR} y1={y(g)} y2={y(g)} stroke={g === 0 ? "#dcdad3" : "#f1f0ec"} strokeWidth="1" />
                        <text x={padL - 5} y={y(g) + 3} fontSize="8.5" textAnchor="end" fill="#a5a49d" fontFamily="JetBrains Mono, monospace">{g}</text>
                      </g>
                    ))}
                    {MONTHS.map((m, i) => {
                      const cx = padL + bw * i + bw * 0.18
                      const w = bw * 0.64
                      const upTot = NEW[i] + EXP[i]
                      const newH = (NEW[i] / span) * plotH
                      const expH = (EXP[i] / span) * plotH
                      const conH = (CON[i] / span) * plotH
                      const chnH = (CHN[i] / span) * plotH
                      return (
                        <g key={m}>
                          <rect x={cx} y={y(upTot)} width={w} height={expH} rx="1.5" fill={C.exp} />
                          <rect x={cx} y={y(NEW[i])} width={w} height={newH} rx="1.5" fill={C.new} />
                          <rect x={cx} y={zeroY} width={w} height={conH} rx="1.5" fill={C.con} />
                          <rect x={cx} y={zeroY + conH} width={w} height={chnH} rx="1.5" fill={C.chn} opacity="0.9" />
                          <text x={cx + w / 2} y={H - 9} fontSize="8.5" textAnchor="middle" fill="#a5a49d" fontFamily="JetBrains Mono, monospace">{m}</text>
                        </g>
                      )
                    })}
                    <path d={netLine} fill="none" stroke="#141413" strokeWidth="1.6" strokeDasharray="1 3" strokeLinecap="round" opacity="0.55" />
                    {nets.map((v, i) => (
                      <circle key={i} cx={padL + bw * (i + 0.5)} cy={y(v)} r="2.1" fill="#141413" />
                    ))}
                  </svg>
                  <p className="mt-1 pl-2 text-[10.5px] text-[var(--color-faint)]">
                    <span className="inline-block h-[2px] w-3 translate-y-[-3px] rounded bg-[var(--color-ink)] align-middle opacity-60" /> net new MRR per month
                  </p>
                </div>
                <div className="mt-auto grid grid-cols-3 gap-px border-t border-[var(--color-line-2)] bg-[var(--color-line-2)]">
                  {[
                    ["Added (12M)", `+$${(NEW.reduce((a, b) => a + b, 0) + EXP.reduce((a, b) => a + b, 0)).toFixed(0)}k`, "#177c31"],
                    ["Lost (12M)", `−$${(CON.reduce((a, b) => a + b, 0) + CHN.reduce((a, b) => a + b, 0)).toFixed(0)}k`, "#a81a44"],
                    ["Net added", `+$${nets.reduce((a, b) => a + b, 0).toFixed(0)}k`, "#141413"],
                  ].map(([k, v, c]) => (
                    <div key={k} className="bg-white px-4 py-3">
                      <p className="text-[10.5px] text-[var(--color-faint)]">{k}</p>
                      <p className="mt-0.5 font-mono text-[15px] font-medium" style={{ color: c }}>{v}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* rail */}
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border border-[var(--color-line)] bg-white p-4">
                  <div className="flex items-baseline justify-between">
                    <h2 className="text-[13px] font-medium">December movement</h2>
                    <span className="font-mono text-[12px] font-medium text-[#177c31]">+${netNew.toFixed(1)}k</span>
                  </div>
                  <div className="mt-3 space-y-2.5">
                    {[["New business", NEW[11], C.new, 1], ["Expansion", EXP[11], C.exp, 1], ["Contraction", CON[11], C.con, -1], ["Churn", CHN[11], C.chn, -1]].map(([l, v, c, sign]) => (
                      <div key={l} className="flex items-center gap-2.5">
                        <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: c }} />
                        <span className="text-[12.5px]">{l}</span>
                        <span className="ml-auto font-mono text-[12px] font-medium" style={{ color: sign > 0 ? "#177c31" : "#a81a44" }}>
                          {sign > 0 ? "+" : "−"}${v.toFixed(1)}k
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--color-line)] bg-white p-4">
                  <h2 className="text-[13px] font-medium">MRR by plan</h2>
                  <div className="mt-3 space-y-3">
                    {PLANS.map(([name, val, c]) => (
                      <div key={name}>
                        <div className="mb-1 flex items-baseline justify-between">
                          <span className="text-[12.5px]">{name}</span>
                          <span className="font-mono text-[11.5px] text-[var(--color-muted)]">${val.toFixed(1)}k · {Math.round((val / PLAN_TOTAL) * 100)}%</span>
                        </div>
                        <div className="h-[7px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                          <div className="h-full rounded-full" style={{ width: `${(val / PLAN_TOTAL) * 100}%`, background: c }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                  <div className="flex items-center justify-between px-4 py-3">
                    <h2 className="text-[13px] font-medium">Top accounts</h2>
                    <span className="text-[11px] text-[var(--color-faint)]">click to open</span>
                  </div>
                  {ACCOUNTS.map((a) => (
                    <Link key={a.id} href={`/accounts/${a.id}`} className="flex items-center gap-2 border-t border-[var(--color-line-2)] px-4 py-2 hover:bg-[var(--color-sunk)]">
                      <div className="min-w-0">
                        <p className="truncate text-[12.5px] font-medium">{a.name}</p>
                        <p className="text-[10.5px] text-[var(--color-faint)]">{a.plan}</p>
                      </div>
                      <div className="ml-auto text-right">
                        <p className="font-mono text-[12px]">${a.mrr.toFixed(1)}k</p>
                        <p className="font-mono text-[10px]" style={{ color: a.delta > 0 ? "#177c31" : a.delta < 0 ? "#a81a44" : "var(--color-faint)" }}>
                          {a.delta > 0 ? "+" : a.delta < 0 ? "−" : ""}{a.delta !== 0 ? `$${Math.abs(a.delta).toFixed(1)}k` : "—"}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
