"use client"

import { useState } from "react"

function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    play: <path d="m7 4 12 8-12 8Z" />,
    input: <path d="M4 12h12m0 0-4-4m4 4-4 4M20 4v16" />,
    model: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />,
    branch: (
      <>
        <circle cx="6" cy="5" r="2.4" />
        <circle cx="6" cy="19" r="2.4" />
        <circle cx="18" cy="12" r="2.4" />
        <path d="M6 7.4v9.2M8.4 5h4a3 3 0 0 1 3 3v1.6M8.4 19h4a3 3 0 0 0 3-3v-1.6" />
      </>
    ),
    tool: <path d="M14.7 6.3a4 4 0 0 1 5 5l-9.2 9.2a2.1 2.1 0 0 1-3-3l9.2-9.2a4 4 0 0 1-2-2ZM6.3 6.3l3.4 3.4" />,
    output: <path d="M20 12H8m0 0 4-4m-4 4 4 4M4 4v16" />,
    db: (
      <>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="m5 13 4 4L19 7" />,
    zoomIn: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
      </>
    ),
    zoomOut: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5M8 11h6" />
      </>
    ),
    grid: <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />,
    save: <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2ZM7 3v6h8M7 21v-6h10v6" />,
    trash: <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

const NODES = [
  { id: "trigger", label: "Ticket received", kind: "Trigger", icon: "input", tone: "#87867f", x: 40, y: 150, w: 168 },
  { id: "classify", label: "Classify intent", kind: "Model", icon: "model", tone: "#c96442", x: 258, y: 150, w: 168, model: "haiku" },
  { id: "route", label: "Route by queue", kind: "Branch", icon: "branch", tone: "#98801f", x: 476, y: 150, w: 168 },
  { id: "lookup", label: "Fetch account", kind: "Tool", icon: "db", tone: "#629987", x: 694, y: 62, w: 168 },
  { id: "draft", label: "Draft reply", kind: "Model", icon: "model", tone: "#c96442", x: 694, y: 238, w: 168, model: "sonnet" },
  { id: "review", label: "Human review", kind: "Gate", icon: "check", tone: "#827dbd", x: 912, y: 150, w: 168 },
  { id: "send", label: "Send response", kind: "Output", icon: "output", tone: "#141413", x: 1130, y: 150, w: 168 },
]

const EDGES = [
  ["trigger", "classify"],
  ["classify", "route"],
  ["route", "lookup"],
  ["route", "draft"],
  ["lookup", "review"],
  ["draft", "review"],
  ["review", "send"],
]

const PALETTE = [
  ["Trigger", "input", "#87867f", "Webhook, schedule, or manual start"],
  ["Model", "model", "#c96442", "Call a model with a prompt template"],
  ["Tool", "tool", "#629987", "HTTP, SQL, or a registered function"],
  ["Branch", "branch", "#98801f", "Route on a condition or classifier output"],
  ["Gate", "check", "#827dbd", "Pause for human approval"],
  ["Output", "output", "#141413", "Return, post, or persist the result"],
]

const RUNLOG = [
  ["12:04:11", "trigger", "Ticket T-8412 received", "ok"],
  ["12:04:11", "classify", "intent=billing confidence=0.96", "ok"],
  ["12:04:12", "route", "→ draft (billing queue)", "ok"],
  ["12:04:12", "lookup", "account=vertex-labs plan=business", "ok"],
  ["12:04:16", "draft", "412 tokens generated", "ok"],
  ["12:04:16", "review", "waiting on luis@", "pending"],
]

export default function WorkflowBuilder() {
  const [selected, setSelected] = useState("classify")
  const [zoom, setZoom] = useState(0.82)
  const [running, setRunning] = useState(false)
  const [showLog, setShowLog] = useState(true)

  const node = NODES.find((n) => n.id === selected)
  const NH = 60

  const edgePath = (a, b) => {
    const from = NODES.find((n) => n.id === a)
    const to = NODES.find((n) => n.id === b)
    const x1 = from.x + from.w
    const y1 = from.y + NH / 2
    const x2 = to.x
    const y2 = to.y + NH / 2
    const mid = (x1 + x2) / 2
    return `M${x1},${y1} C${mid},${y1} ${mid},${y2} ${x2},${y2}`
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      {/* palette */}
      <aside className="hidden w-[212px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
        <div className="flex items-center gap-2 px-3.5 py-3.5">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
            <rect width="32" height="32" rx="8" fill="#141413" />
            <circle cx="10" cy="16" r="3" fill="none" stroke="#c96442" strokeWidth="2" />
            <circle cx="22" cy="10" r="3" fill="none" stroke="#c96442" strokeWidth="2" />
            <circle cx="22" cy="22" r="3" fill="none" stroke="#c96442" strokeWidth="2" />
            <path d="M13 15l6-4M13 17l6 4" stroke="#c96442" strokeWidth="1.6" />
          </svg>
          <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Loom</span>
        </div>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-2.5">
          <p className="px-1 pb-2 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">BLOCKS</p>
          <div className="space-y-1.5">
            {PALETTE.map(([label, icon, tone, desc]) => (
              <div
                key={label}
                className="cursor-grab rounded-lg border border-[var(--color-line)] bg-white px-2.5 py-2 transition-colors hover:border-[var(--color-ink)]"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-md"
                    style={{ background: `${tone}1c`, color: tone }}
                  >
                    <Icon name={icon} className="h-[14px] w-[14px]" />
                  </span>
                  <span className="text-[12.5px] font-medium">{label}</span>
                </div>
                <p className="mt-1 text-[10.5px] leading-[1.45] text-[var(--color-faint)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-2.5">
          <div className="rounded-lg bg-[var(--color-ivory)] p-2.5">
            <p className="text-[11px] font-medium">Draft · v4</p>
            <p className="mt-1 text-[11px] leading-[1.5] text-[var(--color-muted)]">
              7 blocks · last published 2 days ago
            </p>
          </div>
        </div>
      </aside>

      {/* canvas */}
      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[52px] shrink-0 items-center gap-2 border-b border-[var(--color-line)] px-4">
          <span className="truncate font-serif text-[16px] font-medium tracking-[-0.01em]">Support triage flow</span>
          <span className="shrink-0 rounded-full bg-[var(--color-sunk)] px-2 py-[2px] text-[10.5px] text-[var(--color-muted)]">
            draft
          </span>
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <div className="hidden items-center gap-[2px] rounded-lg border border-[var(--color-line)] bg-white p-[2px] sm:flex">
              <button
                onClick={() => setZoom((z) => Math.max(0.5, z - 0.1))}
                className="grid h-6 w-6 place-items-center rounded-md text-[var(--color-faint)] hover:bg-[var(--color-sunk)]"
              >
                <Icon name="zoomOut" className="h-[15px] w-[15px]" />
              </button>
              <span className="w-[38px] text-center font-mono text-[11px] text-[var(--color-muted)]">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={() => setZoom((z) => Math.min(1.4, z + 0.1))}
                className="grid h-6 w-6 place-items-center rounded-md text-[var(--color-faint)] hover:bg-[var(--color-sunk)]"
              >
                <Icon name="zoomIn" className="h-[15px] w-[15px]" />
              </button>
            </div>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="save" className="h-3.5 w-3.5" /> Save
            </button>
            <button
              onClick={() => {
                setRunning(true)
                setShowLog(true)
                setTimeout(() => setRunning(false), 1400)
              }}
              className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]"
            >
              <Icon name="play" className="h-3.5 w-3.5" />
              {running ? "Running…" : "Test run"}
            </button>
          </div>
        </header>

        <div
          className="scroll-thin relative min-h-0 flex-1 overflow-auto"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e0dfd9 1px, transparent 1px)",
            backgroundSize: `${22 * zoom}px ${22 * zoom}px`,
          }}
        >
          <div
            className="relative"
            style={{ width: 1400, height: 420, transform: `scale(${zoom})`, transformOrigin: "top left" }}
          >
            <svg className="pointer-events-none absolute inset-0" width="1400" height="420" aria-hidden>
              {EDGES.map(([a, b], i) => (
                <g key={i}>
                  <path d={edgePath(a, b)} fill="none" stroke="#dcdad3" strokeWidth="2" />
                  <circle r="3" fill="#c96442">
                    <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 0.35}s`} path={edgePath(a, b)} />
                  </circle>
                </g>
              ))}
            </svg>

            {NODES.map((n) => {
              const on = selected === n.id
              return (
                <button
                  key={n.id}
                  onClick={() => setSelected(n.id)}
                  className={`absolute rounded-xl border bg-white text-left transition-all ${
                    on
                      ? "border-[var(--color-ink)] shadow-[0_4px_16px_rgba(20,20,19,0.1)]"
                      : "border-[var(--color-line)] hover:border-[var(--color-faint)]"
                  }`}
                  style={{ left: n.x, top: n.y, width: n.w, height: NH }}
                >
                  <span className="flex h-full items-center gap-2.5 px-3">
                    <span
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-lg"
                      style={{ background: `${n.tone}1c`, color: n.tone }}
                    >
                      <Icon name={n.icon} className="h-[17px] w-[17px]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[12.5px] font-medium">{n.label}</span>
                      <span className="block text-[10.5px] text-[var(--color-faint)]">
                        {n.kind}
                        {n.model ? ` · ${n.model}` : ""}
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute -right-[5px] top-1/2 h-[9px] w-[9px] -translate-y-1/2 rounded-full border-2 border-white"
                    style={{ background: n.tone }}
                  />
                  <span className="absolute -left-[5px] top-1/2 h-[9px] w-[9px] -translate-y-1/2 rounded-full border-2 border-white bg-[var(--color-line)]" />
                </button>
              )
            })}
          </div>
        </div>

        {/* run log */}
        {showLog && (
          <div className="h-[168px] shrink-0 border-t border-[var(--color-line)] bg-white">
            <div className="flex h-[34px] items-center gap-2 border-b border-[var(--color-line-2)] px-4">
              <h2 className="text-[12.5px] font-medium">Run log</h2>
              <span className="font-mono text-[11px] text-[var(--color-faint)]">run_4kd91a · 4.8s</span>
              <button
                onClick={() => setShowLog(false)}
                className="ml-auto text-[11.5px] text-[var(--color-faint)] hover:text-[var(--color-ink)]"
              >
                Hide
              </button>
            </div>
            <div className="scroll-thin h-[134px] overflow-y-auto py-1.5">
              {RUNLOG.map(([t, block, msg, state], i) => (
                <div key={i} className="flex gap-3 px-4 py-[3px] font-mono text-[11.5px] leading-[1.7]">
                  <span className="text-[var(--color-faint)]">{t}</span>
                  <span className="w-[64px] shrink-0 text-[var(--color-plum)]">{block}</span>
                  <span className="min-w-0 flex-1 truncate text-[var(--color-ink-2)]">{msg}</span>
                  <span style={{ color: state === "ok" ? "#1e9f3c" : "#c5621b" }}>{state}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* inspector */}
      <aside className="hidden w-[276px] shrink-0 flex-col border-l border-[var(--color-line)] bg-white lg:flex">
        <div className="flex h-[52px] shrink-0 items-center gap-2 border-b border-[var(--color-line)] px-4">
          <span
            className="grid h-7 w-7 place-items-center rounded-lg"
            style={{ background: `${node.tone}1c`, color: node.tone }}
          >
            <Icon name={node.icon} className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-medium">{node.label}</p>
            <p className="text-[10.5px] text-[var(--color-faint)]">{node.kind}</p>
          </div>
        </div>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto p-4">
          <Field label="Block name" value={node.label} />

          {node.kind === "Model" && (
            <>
              <div className="mt-4">
                <label className="text-[12px] font-medium text-[var(--color-muted)]">Model</label>
                <select
                  defaultValue={node.model}
                  className="mt-1.5 h-9 w-full rounded-lg border border-[var(--color-line)] px-2.5 text-[12.5px] outline-none focus:border-[var(--color-clay)]"
                >
                  {["haiku", "sonnet", "opus"].map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <label className="text-[12px] font-medium text-[var(--color-muted)]">Prompt</label>
                <textarea
                  rows={6}
                  defaultValue={
                    node.id === "classify"
                      ? "Classify this ticket into exactly one queue:\nbilling · technical · account · feedback\n\nReturn JSON: { queue, confidence, rationale }"
                      : "Draft a reply using {{account}} context. Acknowledge first, give the workaround, promise no dates."
                  }
                  className="mt-1.5 w-full resize-none rounded-lg border border-[var(--color-line)] p-2.5 font-mono text-[11.5px] leading-[1.65] outline-none focus:border-[var(--color-clay)]"
                />
              </div>
              <Slider label="Temperature" value={0.2} />
            </>
          )}

          {node.kind === "Branch" && (
            <div className="mt-4">
              <label className="text-[12px] font-medium text-[var(--color-muted)]">Conditions</label>
              <div className="mt-1.5 space-y-1.5">
                {[
                  ["queue == 'billing'", "draft"],
                  ["queue == 'account'", "lookup"],
                  ["else", "draft"],
                ].map(([cond, target], i) => (
                  <div key={i} className="rounded-lg border border-[var(--color-line)] px-2.5 py-2">
                    <p className="font-mono text-[11px] text-[var(--color-ink-2)]">{cond}</p>
                    <p className="mt-0.5 font-mono text-[10.5px] text-[var(--color-mineral)]">→ {target}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {node.kind === "Gate" && (
            <div className="mt-4 space-y-3">
              <Field label="Approvers" value="luis@, mira@" />
              <Field label="Timeout" value="4 hours → auto-approve" />
            </div>
          )}

          <div className="mt-5 border-t border-[var(--color-line-2)] pt-4">
            <p className="mb-2 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">OUTPUT SCHEMA</p>
            <pre className="scroll-thin overflow-x-auto rounded-lg bg-[var(--color-sunk)] px-2.5 py-2 font-mono text-[10.5px] leading-[1.7] text-[var(--color-ink-2)]">
{`{
  "queue": "string",
  "confidence": "number",
  "rationale": "string"
}`}
            </pre>
          </div>

          <div className="mt-5 border-t border-[var(--color-line-2)] pt-4">
            <p className="mb-2 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">LAST 24H</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                ["Runs", "1,284"],
                ["p50", "412ms"],
                ["Errors", "0.3%"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-[10.5px] text-[var(--color-faint)]">{k}</p>
                  <p className="font-mono text-[12px]">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-2 border-t border-[var(--color-line-2)] p-3">
          <button className="h-8 flex-1 rounded-lg bg-[var(--color-ink)] text-[12.5px] font-medium text-white hover:bg-black">
            Apply
          </button>
          <button className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--color-line)] text-[var(--color-faint)] hover:text-[var(--color-berry)]">
            <Icon name="trash" className="h-4 w-4" />
          </button>
        </div>
      </aside>
    </div>
  )
}

function Field({ label, value }) {
  return (
    <div>
      <label className="text-[12px] font-medium text-[var(--color-muted)]">{label}</label>
      <input
        defaultValue={value}
        className="mt-1.5 h-9 w-full rounded-lg border border-[var(--color-line)] px-3 text-[12.5px] outline-none focus:border-[var(--color-clay)]"
      />
    </div>
  )
}

function Slider({ label, value }) {
  const [v, setV] = useState(value)
  return (
    <div className="mt-4">
      <div className="flex items-baseline justify-between">
        <label className="text-[12px] font-medium text-[var(--color-muted)]">{label}</label>
        <span className="font-mono text-[11.5px]">{v}</span>
      </div>
      <input
        type="range"
        min={0}
        max={1}
        step={0.05}
        value={v}
        onChange={(e) => setV(Number(e.target.value))}
        className="mt-1.5 h-1 w-full cursor-pointer appearance-none rounded-full bg-[var(--color-line)] accent-[var(--color-clay)]"
      />
    </div>
  )
}
