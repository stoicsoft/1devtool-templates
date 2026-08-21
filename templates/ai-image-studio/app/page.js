"use client"

import { useState } from "react"

function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />,
    image: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.6" />
        <path d="m4 18 5-5 4 4 3-3 4 4" />
      </>
    ),
    layers: <path d="m12 2 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5" />,
    download: <path d="M12 4v12m0 0 5-5m-5 5-5-5M4 20h16" />,
    copy: (
      <>
        <rect x="9" y="9" width="12" height="12" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
      </>
    ),
    refresh: <path d="M21 12a9 9 0 1 1-2.6-6.4M21 3v6h-6" />,
    heart: <path d="M12 21s-7.5-4.6-9.3-9A5.2 5.2 0 0 1 12 6.6 5.2 5.2 0 0 1 21.3 12c-1.8 4.4-9.3 9-9.3 9Z" />,
    dice: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" />
        <circle cx="15.5" cy="15.5" r="1.2" fill="currentColor" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      </>
    ),
    check: <path d="m5 13 4 4L19 7" />,
    grid: <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />,
    upload: <path d="M12 16V4m0 0L7 9m5-5 5 5M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />,
    trash: <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

/* Deterministic generative placeholder art — no external assets. */
function Plate({ seed, className = "", label }) {
  const rand = (n) => {
    const x = Math.sin(seed * 9301 + n * 49297) * 233280
    return x - Math.floor(x)
  }
  const palettes = [
    ["#f0eee6", "#c96442", "#629987", "#141413"],
    ["#faf9f5", "#827dbd", "#cbcadb", "#141413"],
    ["#f0eee6", "#98801f", "#c5621b", "#141413"],
    ["#faf9f5", "#629987", "#bcd1ca", "#141413"],
  ]
  const pal = palettes[seed % palettes.length]
  return (
    <svg viewBox="0 0 200 200" className={className} aria-label={label} role="img">
      <rect width="200" height="200" fill={pal[0]} />
      <circle cx={60 + rand(1) * 80} cy={70 + rand(2) * 60} r={30 + rand(3) * 34} fill={pal[1]} opacity="0.9" />
      <circle cx={90 + rand(4) * 80} cy={110 + rand(5) * 60} r={24 + rand(6) * 30} fill={pal[2]} opacity="0.78" />
      <path
        d={`M0,${150 + rand(7) * 30} Q50,${110 + rand(8) * 50} 100,${140 + rand(9) * 30} T200,${130 + rand(10) * 40} L200,200 L0,200 Z`}
        fill={pal[3]}
        opacity="0.86"
      />
      <rect
        x={20 + rand(11) * 60}
        y={20 + rand(12) * 40}
        width={18 + rand(13) * 26}
        height={18 + rand(13) * 26}
        fill={pal[3]}
        opacity="0.32"
        transform={`rotate(${rand(14) * 45} 100 100)`}
      />
    </svg>
  )
}

const STYLES = [
  ["Editorial", "#c96442"],
  ["Photographic", "#629987"],
  ["Illustration", "#827dbd"],
  ["3D render", "#98801f"],
  ["Line art", "#c5621b"],
  ["None", "#87867f"],
]

const RATIOS = [
  ["1:1", 1, 1],
  ["4:3", 4, 3],
  ["16:9", 16, 9],
  ["3:4", 3, 4],
  ["9:16", 9, 16],
]

const HISTORY = [
  { prompt: "Terracotta pottery on a linen surface, soft window light", seed: 3, n: 4, when: "2m ago" },
  { prompt: "Isometric server rack, warm cream background, subtle shadow", seed: 7, n: 4, when: "18m ago" },
  { prompt: "Hand-drawn map of a river delta, ink on parchment", seed: 11, n: 2, when: "1h ago" },
  { prompt: "Portrait of a botanist, 85mm, muted earth palette", seed: 5, n: 4, when: "Yesterday" },
]

export default function ImageStudio() {
  const [prompt, setPrompt] = useState("Terracotta pottery on a linen surface, soft window light, shallow depth of field")
  const [negative, setNegative] = useState("text, watermark, harsh flash")
  const [style, setStyle] = useState("Editorial")
  const [ratio, setRatio] = useState("1:1")
  const [count, setCount] = useState(4)
  const [steps, setSteps] = useState(32)
  const [guidance, setGuidance] = useState(6.5)
  const [seed, setSeed] = useState(3)
  const [busy, setBusy] = useState(false)
  const [picked, setPicked] = useState(0)
  const [liked, setLiked] = useState({})

  const [rw, rh] = RATIOS.find((r) => r[0] === ratio).slice(1)

  function generate() {
    setBusy(true)
    setTimeout(() => {
      setSeed((s) => s + 4)
      setBusy(false)
      setPicked(0)
    }, 1200)
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      {/* controls */}
      <aside className="hidden w-[300px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
        <div className="flex items-center gap-2 px-4 py-3.5">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
            <rect width="32" height="32" rx="8" fill="#141413" />
            <rect x="8" y="9" width="16" height="14" rx="2" fill="none" stroke="#c96442" strokeWidth="2" />
            <circle cx="13" cy="14" r="1.6" fill="#c96442" />
            <path d="m9 21 4-4 3 3 3-3 4 4" fill="none" stroke="#c96442" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Kiln</span>
        </div>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-4 pb-4">
          <label className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">PROMPT</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            className="mt-1.5 w-full resize-none rounded-lg border border-[var(--color-line)] bg-white p-2.5 text-[13px] leading-[1.6] outline-none focus:border-[var(--color-clay)]"
          />

          <label className="mt-4 block text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
            NEGATIVE PROMPT
          </label>
          <input
            value={negative}
            onChange={(e) => setNegative(e.target.value)}
            className="mt-1.5 h-9 w-full rounded-lg border border-[var(--color-line)] bg-white px-3 text-[12.5px] outline-none focus:border-[var(--color-clay)]"
          />

          <label className="mt-4 block text-[11px] font-medium tracking-wide text-[var(--color-faint)]">STYLE</label>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {STYLES.map(([s, tone]) => (
              <button
                key={s}
                onClick={() => setStyle(s)}
                className={`rounded-full border px-2.5 py-[4px] text-[11.5px] font-medium transition-colors ${
                  style === s ? "border-transparent text-white" : "border-[var(--color-line)] bg-white text-[var(--color-muted)]"
                }`}
                style={style === s ? { background: tone } : undefined}
              >
                {s}
              </button>
            ))}
          </div>

          <label className="mt-4 block text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
            ASPECT RATIO
          </label>
          <div className="mt-1.5 flex gap-1.5">
            {RATIOS.map(([r, w, h]) => (
              <button
                key={r}
                onClick={() => setRatio(r)}
                className={`flex flex-1 flex-col items-center gap-1 rounded-lg border py-2 transition-colors ${
                  ratio === r
                    ? "border-[var(--color-clay)] bg-[var(--color-clay-soft)]"
                    : "border-[var(--color-line)] bg-white hover:border-[var(--color-ink)]"
                }`}
              >
                <span
                  className="rounded-[2px] border"
                  style={{
                    width: (w / Math.max(w, h)) * 18,
                    height: (h / Math.max(w, h)) * 18,
                    borderColor: ratio === r ? "var(--color-clay)" : "var(--color-faint)",
                  }}
                />
                <span className="font-mono text-[9.5px] text-[var(--color-muted)]">{r}</span>
              </button>
            ))}
          </div>

          <div className="mt-4">
            <label className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">IMAGES</label>
            <div className="mt-1.5 flex gap-1.5">
              {[1, 2, 4, 8].map((n) => (
                <button
                  key={n}
                  onClick={() => setCount(n)}
                  className={`h-8 flex-1 rounded-lg border text-[12.5px] font-medium transition-colors ${
                    count === n
                      ? "border-[var(--color-clay)] bg-[var(--color-clay-soft)] text-[var(--color-clay-2)]"
                      : "border-[var(--color-line)] bg-white text-[var(--color-muted)]"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <Slider label="Steps" value={steps} min={8} max={64} step={4} onChange={setSteps} />
          <Slider label="Guidance" value={guidance} min={1} max={15} step={0.5} onChange={setGuidance} />

          <div className="mt-4">
            <label className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">SEED</label>
            <div className="mt-1.5 flex gap-1.5">
              <input
                value={seed}
                onChange={(e) => setSeed(Number(e.target.value) || 0)}
                className="h-9 min-w-0 flex-1 rounded-lg border border-[var(--color-line)] bg-white px-3 font-mono text-[12.5px] outline-none focus:border-[var(--color-clay)]"
              />
              <button
                onClick={() => setSeed(Math.floor(Math.random() * 1000))}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[var(--color-line)] bg-white text-[var(--color-faint)] hover:text-[var(--color-ink)]"
              >
                <Icon name="dice" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-line)] p-4">
          <button
            onClick={generate}
            disabled={busy}
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-clay)] text-[14px] font-medium text-white transition-colors hover:bg-[var(--color-clay-2)] disabled:opacity-50"
          >
            <Icon name="spark" className="h-4 w-4" />
            {busy ? "Generating…" : `Generate ${count}`}
          </button>
          <p className="mt-2 text-center text-[11px] text-[var(--color-faint)]">
            ~{(count * 1.4).toFixed(1)}s · {(count * 0.008).toFixed(3)} credits
          </p>
        </div>
      </aside>

      {/* results */}
      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[52px] shrink-0 items-center gap-2 border-b border-[var(--color-line)] px-4">
          <h1 className="truncate font-serif text-[16px] font-medium tracking-[-0.01em]">Untitled batch</h1>
          <span className="shrink-0 font-mono text-[11px] text-[var(--color-faint)]">
            {style.toLowerCase()} · {ratio} · seed {seed}
          </span>
          <div className="ml-auto flex shrink-0 gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="upload" className="h-3.5 w-3.5" /> Reference
            </button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="download" className="h-3.5 w-3.5" /> Export all
            </button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto p-5">
          <div className="mx-auto max-w-[1000px]">
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: `repeat(${count <= 2 ? count : count === 4 ? 2 : 4}, minmax(0, 1fr))` }}
            >
              {Array.from({ length: count }).map((_, i) => (
                <div
                  key={i}
                  onClick={() => setPicked(i)}
                  className={`group relative cursor-pointer overflow-hidden rounded-xl border transition-all ${
                    picked === i ? "border-[var(--color-ink)] shadow-[0_4px_16px_rgba(20,20,19,0.1)]" : "border-[var(--color-line)]"
                  }`}
                  style={{ aspectRatio: `${rw} / ${rh}` }}
                >
                  {busy ? (
                    <div className="h-full w-full animate-pulse bg-[var(--color-sunk)]" style={{ animationDelay: `${i * 120}ms` }} />
                  ) : (
                    <>
                      <Plate seed={seed + i} className="h-full w-full object-cover" label={`Result ${i + 1}`} />
                      <div className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 bg-gradient-to-t from-black/45 to-transparent p-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setLiked((l) => ({ ...l, [seed + i]: !l[seed + i] }))
                          }}
                          className={`grid h-7 w-7 place-items-center rounded-md backdrop-blur ${
                            liked[seed + i] ? "bg-[var(--color-clay)] text-white" : "bg-white/85 text-[var(--color-ink)]"
                          }`}
                        >
                          <Icon name="heart" className="h-3.5 w-3.5" />
                        </button>
                        <button className="grid h-7 w-7 place-items-center rounded-md bg-white/85 text-[var(--color-ink)] backdrop-blur">
                          <Icon name="layers" className="h-3.5 w-3.5" />
                        </button>
                        <button className="grid h-7 w-7 place-items-center rounded-md bg-white/85 text-[var(--color-ink)] backdrop-blur">
                          <Icon name="download" className="h-3.5 w-3.5" />
                        </button>
                        <span className="ml-auto rounded bg-black/45 px-1.5 py-0.5 font-mono text-[10px] text-white">
                          seed {seed + i}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {!busy && (
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[var(--color-ink)] px-3.5 text-[13px] font-medium text-white hover:bg-black">
                  <Icon name="layers" className="h-4 w-4" /> Variations of #{picked + 1}
                </button>
                <button className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-3.5 text-[13px] font-medium hover:bg-[var(--color-sunk)]">
                  <Icon name="spark" className="h-4 w-4" /> Upscale 4×
                </button>
                <button
                  onClick={generate}
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-3.5 text-[13px] font-medium hover:bg-[var(--color-sunk)]"
                >
                  <Icon name="refresh" className="h-4 w-4" /> Regenerate
                </button>
              </div>
            )}

            {/* history */}
            <section className="mt-9">
              <h2 className="mb-3 text-[12px] font-medium tracking-wide text-[var(--color-faint)]">RECENT BATCHES</h2>
              <div className="space-y-2.5">
                {HISTORY.map((h) => (
                  <div
                    key={h.prompt}
                    className="flex items-center gap-3 rounded-xl border border-[var(--color-line)] bg-white p-2.5 transition-colors hover:border-[var(--color-ink)]"
                  >
                    <div className="flex shrink-0 gap-1">
                      {Array.from({ length: Math.min(h.n, 4) }).map((_, i) => (
                        <Plate key={i} seed={h.seed + i} className="h-11 w-11 rounded-md" label="" />
                      ))}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px]">{h.prompt}</p>
                      <p className="mt-0.5 font-mono text-[10.5px] text-[var(--color-faint)]">
                        seed {h.seed} · {h.n} images · {h.when}
                      </p>
                    </div>
                    <button className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[var(--color-faint)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]">
                      <Icon name="copy" className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

function Slider({ label, value, min, max, step, onChange }) {
  return (
    <div className="mt-4">
      <div className="flex items-baseline justify-between">
        <label className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">{label.toUpperCase()}</label>
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
