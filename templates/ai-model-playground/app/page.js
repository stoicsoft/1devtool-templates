"use client"

import { useState } from "react"
import { Button, Card, Icon, MODELS, TopBar } from "./_components/shell"

const PROMPT =
  "A customer writes: “Your export silently drops rows over 10k.” Draft a reply that acknowledges the bug, gives a workaround, and does not promise a date."

const RESULTS = {
  "meridian-4-opus": {
    text: `You're right, and thank you for the precise report — that's a real bug, not a limit we chose.

Exports above ten thousand rows are being truncated at the streaming boundary rather than paginated. Nothing is lost on our side; the file simply stops early, which is worse than an error.

Until the fix ships, two workarounds:

• Filter the export by date range and pull it in two passes. Anything under 10k comes through complete.
• Or use the /v1/exports API with cursor=, which paginates correctly today.

I've attached your workspace to the tracking issue so you'll get the release note the moment it lands. I'd rather not give you a date I can't stand behind.`,
    ms: 4180,
    inTok: 96,
    outTok: 168,
    quality: 9.4,
  },
  "meridian-4-sonnet": {
    text: `Thanks for flagging this — you've found a genuine bug.

Exports over 10,000 rows are being cut off instead of paginated. The data in your account is intact; only the downloaded file is incomplete.

Two things that work right now:

• Split the export into smaller date ranges so each stays under 10k rows.
• Or call the /v1/exports endpoint with a cursor, which pages through everything correctly.

I've linked your account to the fix so you'll hear from us when it ships. I don't want to commit to a date before engineering has scoped it.`,
    ms: 1620,
    inTok: 96,
    outTok: 142,
    quality: 8.9,
  },
  "meridian-4-haiku": {
    text: `Thank you for reporting this — you're correct, exports over 10,000 rows are being truncated. That's a bug on our end.

Workaround: export in smaller date ranges (under 10k rows each), or use the /v1/exports API with pagination.

Your account is now linked to the issue and you'll be notified when the fix is released. I can't give a firm date yet.`,
    ms: 640,
    inTok: 96,
    outTok: 82,
    quality: 7.8,
  },
  "meridian-3-sonnet": {
    text: `Thanks for letting us know about this issue with the export feature.

You are correct that exports over 10,000 rows may be incomplete. Our engineering team is aware of the problem and is working on a resolution.

In the meantime, we recommend breaking your export into smaller segments, or using our API endpoint which supports pagination for larger datasets.

We appreciate your patience and will update you as soon as we have more information.`,
    ms: 1880,
    inTok: 96,
    outTok: 96,
    quality: 6.4,
  },
}

export default function Playground() {
  const [prompt, setPrompt] = useState(PROMPT)
  const [picked, setPicked] = useState(["meridian-4-opus", "meridian-4-sonnet", "meridian-4-haiku"])
  const [temp, setTemp] = useState(0.7)
  const [maxTok, setMaxTok] = useState(1024)
  const [system, setSystem] = useState("Write like a senior support engineer. Plain, direct, no filler.")
  const [ran, setRan] = useState(true)
  const [busy, setBusy] = useState(false)
  const [showSettings, setShowSettings] = useState(true)

  function run() {
    setBusy(true)
    setRan(false)
    setTimeout(() => {
      setBusy(false)
      setRan(true)
    }, 1100)
  }

  function toggle(id) {
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id].slice(-4)))
  }

  const cost = (m, r) => ((r.inTok / 1e6) * m.inCost + (r.outTok / 1e6) * m.outCost).toFixed(5)

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <TopBar
        active="/"
        actions={
          <>
            <Button variant="outline" onClick={() => setShowSettings((s) => !s)}>
              Parameters
            </Button>
            <Button onClick={run} disabled={busy}>
              <Icon name="play" className="h-3.5 w-3.5" />
              {busy ? "Running…" : `Run on ${picked.length}`}
            </Button>
          </>
        }
      />

      <div className="flex min-h-0 flex-1">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="shrink-0 border-b border-[var(--color-line)] px-5 py-4">
            <div className="mx-auto max-w-[1180px]">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">PROMPT</label>
                <span className="font-mono text-[11px] text-[var(--color-faint)]">
                  ~{Math.round(prompt.length / 3.6)} tokens
                </span>
              </div>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={3}
                className="w-full resize-none rounded-xl border border-[var(--color-line)] bg-white p-3 text-[13.5px] leading-[1.65] outline-none focus:border-[var(--color-clay)]"
              />
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                <span className="mr-1 text-[11.5px] text-[var(--color-faint)]">Models</span>
                {MODELS.map((m) => {
                  const on = picked.includes(m.id)
                  return (
                    <button
                      key={m.id}
                      onClick={() => toggle(m.id)}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-[4px] text-[12px] font-medium transition-colors ${
                        on ? "border-transparent text-white" : "border-[var(--color-line)] bg-white text-[var(--color-muted)]"
                      }`}
                      style={on ? { background: m.tone } : undefined}
                    >
                      {on && <Icon name="check" className="h-3 w-3" />}
                      {m.short}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="scroll-thin min-h-0 flex-1 overflow-auto p-5">
            <div
              className="mx-auto grid max-w-[1180px] gap-3.5"
              style={{ gridTemplateColumns: `repeat(${Math.min(picked.length, 3)}, minmax(0, 1fr))` }}
            >
              {picked.map((id) => {
                const m = MODELS.find((x) => x.id === id)
                const r = RESULTS[id]
                return (
                  <Card key={id} className="flex flex-col overflow-hidden">
                    <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-3.5 py-2.5">
                      <span className="h-[8px] w-[8px] rounded-full" style={{ background: m.tone }} />
                      <span className="flex-1 font-mono text-[12px] font-medium">{m.id}</span>
                      <span className="text-[10.5px] text-[var(--color-faint)]">{m.ctx}</span>
                    </div>

                    <div className="min-h-[300px] flex-1 px-3.5 py-3">
                      {busy ? (
                        <div className="space-y-2 pt-1">
                          {[100, 92, 96, 60, 88, 74].map((w, i) => (
                            <div
                              key={i}
                              className="h-[9px] animate-pulse rounded bg-[var(--color-sunk)]"
                              style={{ width: `${w}%`, animationDelay: `${i * 90}ms` }}
                            />
                          ))}
                        </div>
                      ) : ran ? (
                        <p className="whitespace-pre-wrap text-[13px] leading-[1.68] text-[var(--color-ink-2)]">
                          {r.text}
                        </p>
                      ) : null}
                    </div>

                    <div className="grid grid-cols-4 gap-1 border-t border-[var(--color-line-2)] px-3.5 py-2.5">
                      <Metric icon="clock" value={`${(r.ms / 1000).toFixed(1)}s`} />
                      <Metric icon="bolt" value={`${r.outTok}t`} />
                      <Metric icon="coin" value={`$${cost(m, r)}`} />
                      <Metric icon="star" value={r.quality.toFixed(1)} tone={m.tone} />
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {showSettings && (
          <aside className="hidden w-[280px] shrink-0 flex-col border-l border-[var(--color-line)] bg-white lg:flex">
            <div className="scroll-thin flex-1 overflow-y-auto p-4">
              <h2 className="mb-3 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">SYSTEM PROMPT</h2>
              <textarea
                value={system}
                onChange={(e) => setSystem(e.target.value)}
                rows={5}
                className="mb-5 w-full resize-none rounded-lg border border-[var(--color-line)] p-2.5 font-mono text-[11.5px] leading-[1.65] outline-none focus:border-[var(--color-clay)]"
              />

              <h2 className="mb-3 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">PARAMETERS</h2>
              <Slider label="Temperature" value={temp} min={0} max={1} step={0.05} onChange={setTemp} />
              <Slider label="Max tokens" value={maxTok} min={128} max={4096} step={128} onChange={setMaxTok} />
              <Slider label="Top-p" value={0.95} min={0} max={1} step={0.01} onChange={() => {}} />

              <h2 className="mb-3 mt-6 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
                STOP SEQUENCES
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {["</reply>", "\\n\\nHuman:"].map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-[var(--color-sunk)] px-2 py-1 font-mono text-[11px] text-[var(--color-ink-2)]"
                  >
                    {s}
                  </span>
                ))}
                <button className="rounded-md border border-dashed border-[var(--color-line)] px-2 py-1 text-[11px] text-[var(--color-faint)] hover:border-[var(--color-ink)]">
                  + add
                </button>
              </div>

              <div className="mt-6 rounded-lg bg-[var(--color-ivory)] p-3">
                <p className="text-[11.5px] leading-[1.6] text-[var(--color-muted)]">
                  Runs are recorded so you can diff any two side by side later.
                </p>
                <Button variant="outline" href="/compare" className="mt-2.5 w-full justify-center">
                  Open comparisons
                </Button>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}

function Metric({ icon, value, tone }) {
  return (
    <div className="flex items-center gap-1 text-[11px]" style={{ color: tone ?? "var(--color-muted)" }}>
      <Icon name={icon} className="h-3 w-3 opacity-70" />
      <span className="font-mono">{value}</span>
    </div>
  )
}

function Slider({ label, value, min, max, step, onChange }) {
  return (
    <div className="mb-3.5">
      <div className="flex items-baseline justify-between">
        <label className="text-[12px] text-[var(--color-muted)]">{label}</label>
        <span className="font-mono text-[11.5px]">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1.5 h-1 w-full cursor-pointer appearance-none rounded-full bg-[var(--color-line)] accent-[var(--color-clay)]"
      />
    </div>
  )
}
