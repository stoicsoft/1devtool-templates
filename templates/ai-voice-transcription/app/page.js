"use client"

import { useEffect, useRef, useState } from "react"

function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    mic: (
      <>
        <rect x="9" y="2" width="6" height="12" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8" />
      </>
    ),
    play: <path d="m7 4 12 8-12 8Z" />,
    pause: <path d="M9 4v16M15 4v16" />,
    back: <path d="M11 18 3 12l8-6v12ZM21 18l-8-6 8-6v12Z" />,
    forward: <path d="m13 6 8 6-8 6V6ZM3 6l8 6-8 6V6Z" />,
    spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
    copy: (
      <>
        <rect x="9" y="9" width="12" height="12" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
      </>
    ),
    check: <path d="m5 13 4 4L19 7" />,
    download: <path d="M12 4v12m0 0 5-5m-5 5-5-5M4 20h16" />,
    flag: <path d="M4 22V4h11l-1.5 4H20l-1.5 5H4" />,
    users: (
      <>
        <circle cx="9" cy="8" r="3.4" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 5.2a3.4 3.4 0 0 1 0 6.6M18 14.4a6.5 6.5 0 0 1 3.5 5.6" />
      </>
    ),
    doc: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

const SPEAKERS = {
  DW: { name: "Dana Whitfield", role: "Vertex Labs", tone: "#c96442", share: 42 },
  LP: { name: "Luis Pereira", role: "Support", tone: "#629987", share: 34 },
  RK: { name: "Rina Kowalski", role: "Platform", tone: "#827dbd", share: 24 },
}

const TRANSCRIPT = [
  { t: 0, spk: "LP", text: "Thanks for making time, Dana. I've pulled up the ticket and the trace — do you want to start with what you saw on your side?" },
  { t: 14, spk: "DW", text: "Sure. We ran the monthly export on the third, expected about fourteen thousand rows, and the file came back with exactly ten thousand. No error, no warning header, nothing in the response that flagged it.", flag: "issue" },
  { t: 41, spk: "DW", text: "The reason it hurt is that our reconciliation job downstream just took the file at face value. It reported a four-thousand-row shortfall as missing revenue, which triggered a fairly unpleasant Monday." },
  { t: 68, spk: "RK", text: "That's on us. The synchronous endpoint truncates at ten thousand instead of paginating, and it does it silently. It's tracked as NW-4412.", flag: "decision" },
  { t: 89, spk: "RK", text: "There are two things we can do. The immediate one is the cursor parameter on the exports endpoint — that paginates correctly today, and cursors stay valid for fifteen minutes." },
  { t: 112, spk: "DW", text: "How much work is that on our end?" },
  { t: 118, spk: "RK", text: "A loop and a cursor variable. Maybe twenty lines. The second thing is that we're changing the sync endpoint to return a 413 above ten thousand rather than truncating, which will be a breaking change for anyone relying on the current behaviour.", flag: "action" },
  { t: 149, spk: "LP", text: "We'll give thirty days' notice on that, and Dana, I'll flag your workspace specifically so you hear about it before the deprecation email goes out." },
  { t: 166, spk: "DW", text: "That works. Can you also confirm nothing was actually lost? The reconciliation report made it look like data had gone missing." },
  { t: 184, spk: "RK", text: "Nothing was lost. Everything is intact in your account — only the downloaded file was short. If you re-export with the cursor you'll get all fourteen thousand two hundred and three rows.", flag: "decision" },
]

const SUMMARY = [
  ["The problem", "Synchronous exports above 10,000 rows truncate silently rather than paginating or erroring. Vertex Labs' reconciliation job read the short file as a revenue shortfall."],
  ["Immediate workaround", "Use the /v1/exports cursor parameter, which paginates correctly. Roughly twenty lines of client change; cursors expire after fifteen minutes."],
  ["Coming change", "The sync endpoint will return 413 above 10,000 rows. Breaking, with 30 days' notice. Vertex Labs to be told directly before the general deprecation notice."],
  ["Reassurance given", "No data loss occurred. Re-exporting with a cursor returns all 14,203 rows."],
]

const ACTIONS = [
  ["Send Dana the cursor pagination snippet", "Luis", "today"],
  ["Flag vertex-labs workspace on NW-4412", "Luis", "today"],
  ["Ship 413 behind a flag, 30-day notice", "Rina", "Apr 30"],
  ["Add truncation warning header in the interim", "Rina", "Apr 22"],
]

const DURATION = 214

function fmt(s) {
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`
}

const flagStyle = {
  issue: ["bg-[#fceaef]", "text-[#a81a44]"],
  decision: ["bg-[#e6efec]", "text-[#3f6f60]"],
  action: ["bg-[#fbeee3]", "text-[#8f4413]"],
}

export default function VoiceTranscription() {
  const [playing, setPlaying] = useState(false)
  const [pos, setPos] = useState(89)
  const [q, setQ] = useState("")
  const [tab, setTab] = useState("transcript")
  const [copied, setCopied] = useState(false)
  const raf = useRef(null)

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => {
      setPos((p) => {
        if (p >= DURATION) {
          setPlaying(false)
          return DURATION
        }
        return p + 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [playing])

  const activeIndex = TRANSCRIPT.reduce((acc, seg, i) => (pos >= seg.t ? i : acc), 0)
  const visible = TRANSCRIPT.filter((s) => !q || s.text.toLowerCase().includes(q.toLowerCase()))

  // deterministic waveform
  const bars = Array.from({ length: 128 }, (_, i) => {
    const x = Math.sin(i * 0.37) * Math.cos(i * 0.11) + Math.sin(i * 1.7) * 0.4
    return 0.25 + Math.abs(x) * 0.7
  })

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <div className="flex shrink-0 items-center gap-2">
            <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
              <rect width="32" height="32" rx="8" fill="#141413" />
              <rect x="13" y="7" width="6" height="11" rx="3" fill="#c96442" />
              <path d="M10 15a6 6 0 0 0 12 0M16 21v4" stroke="#c96442" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
            <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Cadence</span>
          </div>
          <div className="min-w-0">
            <h1 className="truncate text-[13.5px] font-medium">Vertex Labs — export truncation call</h1>
            <p className="truncate text-[11px] text-[var(--color-faint)]">
              14 April 2026 · {fmt(DURATION)} · 3 speakers · English
            </p>
          </div>
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="download" className="h-3.5 w-3.5" /> Export
            </button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]">
              <Icon name="spark" className="h-3.5 w-3.5" /> Re-summarize
            </button>
          </div>
        </header>

        {/* player */}
        <div className="shrink-0 border-b border-[var(--color-line)] bg-white px-5 py-3.5">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPlaying((p) => !p)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--color-ink)] text-white hover:bg-black"
            >
              <Icon name={playing ? "pause" : "play"} className="h-4 w-4" />
            </button>
            <button
              onClick={() => setPos((p) => Math.max(0, p - 15))}
              className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[var(--color-faint)] hover:bg-[var(--color-sunk)]"
            >
              <Icon name="back" className="h-4 w-4" />
            </button>
            <button
              onClick={() => setPos((p) => Math.min(DURATION, p + 15))}
              className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[var(--color-faint)] hover:bg-[var(--color-sunk)]"
            >
              <Icon name="forward" className="h-4 w-4" />
            </button>

            <div
              className="relative h-[44px] min-w-0 flex-1 cursor-pointer"
              onClick={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                setPos(Math.round(((e.clientX - r.left) / r.width) * DURATION))
              }}
            >
              <div className="flex h-full items-center gap-[1.5px]">
                {bars.map((h, i) => {
                  const played = i / bars.length <= pos / DURATION
                  return (
                    <span
                      key={i}
                      className="flex-1 rounded-full transition-colors"
                      style={{
                        height: `${h * 100}%`,
                        background: played ? "var(--color-clay)" : "#e5e4df",
                      }}
                    />
                  )
                })}
              </div>
              {TRANSCRIPT.filter((s) => s.flag).map((s) => (
                <span
                  key={s.t}
                  className="absolute top-0 h-full w-[2px] bg-[var(--color-ink)] opacity-25"
                  style={{ left: `${(s.t / DURATION) * 100}%` }}
                />
              ))}
            </div>

            <span className="shrink-0 font-mono text-[12px] text-[var(--color-muted)]">
              {fmt(pos)} / {fmt(DURATION)}
            </span>
            <select className="h-8 shrink-0 rounded-lg border border-[var(--color-line)] bg-white px-1.5 text-[11.5px] outline-none">
              {["1×", "1.25×", "1.5×", "2×"].map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </div>
        </div>

        {/* tabs */}
        <div className="flex h-[40px] shrink-0 items-center gap-1 border-b border-[var(--color-line)] px-5">
          {["transcript", "summary", "actions"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative px-2.5 py-2 text-[12.5px] font-medium capitalize transition-colors ${
                tab === t ? "text-[var(--color-ink)]" : "text-[var(--color-faint)] hover:text-[var(--color-ink-2)]"
              }`}
            >
              {t}
              {tab === t && <span className="absolute inset-x-2 -bottom-px h-[2px] rounded-full bg-[var(--color-clay)]" />}
            </button>
          ))}
          {tab === "transcript" && (
            <div className="relative ml-auto">
              <Icon name="search" className="pointer-events-none absolute left-2.5 top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-[var(--color-faint)]" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search transcript"
                className="h-7 w-[190px] rounded-lg border border-[var(--color-line)] bg-white pl-8 pr-3 text-[12px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
              />
            </div>
          )}
        </div>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto max-w-[760px]">
            {tab === "transcript" &&
              visible.map((seg) => {
                const spk = SPEAKERS[seg.spk]
                const active = TRANSCRIPT[activeIndex]?.t === seg.t
                return (
                  <div
                    key={seg.t}
                    onClick={() => setPos(seg.t)}
                    className={`mb-4 flex cursor-pointer gap-3 rounded-xl px-3 py-2.5 transition-colors ${
                      active ? "bg-[var(--color-clay-soft)]" : "hover:bg-[var(--color-sunk)]"
                    }`}
                  >
                    <span
                      className="mt-[2px] grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-medium text-white"
                      style={{ background: spk.tone }}
                    >
                      {seg.spk}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-[12.5px] font-medium">{spk.name}</span>
                        <span className="font-mono text-[10.5px] text-[var(--color-faint)]">{fmt(seg.t)}</span>
                        {seg.flag && (
                          <span
                            className={`rounded-full px-1.5 py-[1px] text-[10px] font-medium ${flagStyle[seg.flag][0]} ${flagStyle[seg.flag][1]}`}
                          >
                            {seg.flag}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-[14px] leading-[1.7] text-[var(--color-ink-2)]">{seg.text}</p>
                    </div>
                  </div>
                )
              })}

            {tab === "transcript" && !visible.length && (
              <p className="py-16 text-center text-[13.5px] text-[var(--color-muted)]">
                Nothing in this call matches “{q}”.
              </p>
            )}

            {tab === "summary" && (
              <>
                <div className="mb-4 flex items-center gap-2 rounded-xl border border-[var(--color-line)] bg-[var(--color-ivory-2)] px-4 py-3">
                  <Icon name="spark" className="h-4 w-4 shrink-0 text-[var(--color-clay)]" />
                  <p className="text-[12.5px] text-[var(--color-muted)]">
                    Generated from the transcript. Every point links back to the moment it came from.
                  </p>
                  <button
                    onClick={() => {
                      setCopied(true)
                      setTimeout(() => setCopied(false), 1400)
                    }}
                    className="ml-auto inline-flex shrink-0 items-center gap-1 text-[12px] text-[var(--color-faint)] hover:text-[var(--color-ink)]"
                  >
                    <Icon name={copied ? "check" : "copy"} className="h-3.5 w-3.5" />
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
                <div className="space-y-3">
                  {SUMMARY.map(([h, b], i) => (
                    <div key={h} className="rounded-xl border border-[var(--color-line)] bg-white p-4">
                      <h3 className="font-serif text-[17px] font-medium tracking-[-0.01em]">{h}</h3>
                      <p className="mt-1.5 text-[14px] leading-[1.72] text-[var(--color-muted)]">{b}</p>
                      <button
                        onClick={() => {
                          setTab("transcript")
                          setPos(TRANSCRIPT.filter((s) => s.flag)[i]?.t ?? 0)
                        }}
                        className="mt-2 font-mono text-[11px] text-[var(--color-clay)] hover:underline"
                      >
                        jump to {fmt(TRANSCRIPT.filter((s) => s.flag)[i]?.t ?? 0)}
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}

            {tab === "actions" && (
              <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                {ACTIONS.map(([task, who, due], i) => (
                  <div
                    key={task}
                    className={`flex items-center gap-3 px-4 py-3.5 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}
                  >
                    <span className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded border-2 border-[var(--color-line)]" />
                    <span className="min-w-0 flex-1 text-[13.5px]">{task}</span>
                    <span className="shrink-0 rounded-full bg-[var(--color-sunk)] px-2 py-[2px] text-[11px] text-[var(--color-muted)]">
                      {who}
                    </span>
                    <span className="w-[54px] shrink-0 text-right font-mono text-[11.5px] text-[var(--color-faint)]">
                      {due}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* speakers */}
      <aside className="hidden w-[248px] shrink-0 flex-col border-l border-[var(--color-line)] bg-white lg:flex">
        <div className="flex h-[56px] shrink-0 items-center gap-2 border-b border-[var(--color-line)] px-4">
          <Icon name="users" className="h-4 w-4 text-[var(--color-faint)]" />
          <h2 className="text-[13px] font-medium">Speakers</h2>
        </div>
        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto p-4">
          {Object.entries(SPEAKERS).map(([init, s]) => (
            <div key={init} className="mb-4">
              <div className="flex items-center gap-2.5">
                <span
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-medium text-white"
                  style={{ background: s.tone }}
                >
                  {init}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12.5px] font-medium">{s.name}</p>
                  <p className="truncate text-[11px] text-[var(--color-faint)]">{s.role}</p>
                </div>
                <span className="font-mono text-[11.5px] text-[var(--color-muted)]">{s.share}%</span>
              </div>
              <div className="mt-1.5 h-[5px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                <div className="h-full rounded-full" style={{ width: `${s.share}%`, background: s.tone }} />
              </div>
            </div>
          ))}

          <div className="mt-6 border-t border-[var(--color-line-2)] pt-4">
            <p className="mb-2.5 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">MOMENTS</p>
            <div className="space-y-1.5">
              {TRANSCRIPT.filter((s) => s.flag).map((s) => (
                <button
                  key={s.t}
                  onClick={() => setPos(s.t)}
                  className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-[var(--color-sunk)]"
                >
                  <span className={`shrink-0 rounded-full px-1.5 py-[1px] text-[9.5px] font-medium ${flagStyle[s.flag][0]} ${flagStyle[s.flag][1]}`}>
                    {s.flag}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-[11.5px] text-[var(--color-muted)]">{s.text}</span>
                  <span className="shrink-0 font-mono text-[10px] text-[var(--color-faint)]">{fmt(s.t)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-[var(--color-ivory)] p-3">
            <p className="text-[11px] font-medium">Transcription quality</p>
            <p className="mt-1 text-[11px] leading-[1.55] text-[var(--color-muted)]">
              Word error rate 2.1% · 4 low-confidence spans, all in proper nouns.
            </p>
          </div>
        </div>
      </aside>
    </div>
  )
}
