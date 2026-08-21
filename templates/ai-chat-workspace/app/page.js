"use client"

import { useEffect, useRef, useState } from "react"
import { Avatar, Button, Icon, Logo, Pill, Sidebar } from "./_components/shared"

const MODELS = [
  { id: "atlas-4-opus", name: "Atlas 4 Opus", blurb: "Deepest reasoning, slower", tone: "#c96442" },
  { id: "atlas-4-sonnet", name: "Atlas 4 Sonnet", blurb: "Balanced everyday model", tone: "#629987" },
  { id: "atlas-4-haiku", name: "Atlas 4 Haiku", blurb: "Fastest, cheapest", tone: "#827dbd" },
]

const SEED = [
  {
    role: "user",
    text: "Our checkout p99 jumped from 240ms to 1.4s after Tuesday's deploy. Here's the trace summary — where would you look first?",
    attachment: "trace-2026-04-14.json",
  },
  {
    role: "assistant",
    blocks: [
      {
        type: "text",
        text: "Three things in the trace stand out, and only one of them is likely the real cause.",
      },
      {
        type: "tool",
        name: "read_file",
        arg: "traces/checkout-2026-04-14.json",
        result: "4,812 spans · 61 slow (> 800ms)",
      },
      {
        type: "list",
        items: [
          ["Serial cart repricing", "Each line item now issues its own `GET /prices`. 14 items → 14 round trips at ~85ms."],
          ["A new N+1 on tax rules", "`tax_rules` is loaded per item instead of once per basket."],
          ["Connection pool saturation", "A symptom of the first two, not an independent cause."],
        ],
      },
      {
        type: "text",
        text: "The repricing loop is the one to fix. Batching it collapses fourteen sequential calls into one:",
      },
      {
        type: "code",
        lang: "typescript",
        code: `// before — one round trip per line item
for (const item of cart.items) {
  item.price = await pricing.get(item.sku)
}

// after — a single batched lookup
const prices = await pricing.getMany(
  cart.items.map((i) => i.sku)
)
for (const item of cart.items) {
  item.price = prices[item.sku]
}`,
      },
      {
        type: "text",
        text: "That alone should take p99 back under 400ms. I drafted the full patch, including the tax-rule hoist, as an artifact on the right.",
      },
    ],
    artifact: { title: "checkout-repricing.patch", kind: "Patch · 61 lines" },
  },
]

const ARTIFACT_LINES = [
  { n: 1, t: "--- a/src/checkout/reprice.ts", c: "#87867f" },
  { n: 2, t: "+++ b/src/checkout/reprice.ts", c: "#87867f" },
  { n: 3, t: "@@ -12,9 +12,7 @@", c: "#827dbd" },
  { n: 4, t: "-  for (const item of cart.items) {", c: "#cf2055" },
  { n: 5, t: "-    item.price = await pricing.get(item.sku)", c: "#cf2055" },
  { n: 6, t: "-  }", c: "#cf2055" },
  { n: 7, t: "+  const skus = cart.items.map((i) => i.sku)", c: "#1e9f3c" },
  { n: 8, t: "+  const prices = await pricing.getMany(skus)", c: "#1e9f3c" },
  { n: 9, t: "@@ -34,6 +32,5 @@", c: "#827dbd" },
  { n: 10, t: "-    const rules = await tax.rulesFor(item.region)", c: "#cf2055" },
  { n: 11, t: "+  const rules = await tax.rulesFor(cart.region)", c: "#1e9f3c" },
]

const SUGGESTIONS = [
  "Turn this into a rollout plan",
  "What would break if I batch this?",
  "Write the regression test",
]

function CodeBlock({ lang, code }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="my-3 overflow-hidden rounded-xl border border-[var(--color-line)]">
      <div className="flex items-center justify-between border-b border-[var(--color-line)] bg-[var(--color-sunk)] px-3 py-[6px]">
        <span className="font-mono text-[11px] text-[var(--color-faint)]">{lang}</span>
        <button
          onClick={() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 1400)
          }}
          className="inline-flex items-center gap-1 text-[11px] text-[var(--color-faint)] hover:text-[var(--color-ink)]"
        >
          <Icon name={copied ? "check" : "copy"} className="h-3 w-3" />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="scroll-thin overflow-x-auto bg-white px-3 py-3 font-mono text-[12px] leading-[1.65] text-[var(--color-ink-2)]">
        {code}
      </pre>
    </div>
  )
}

function ToolCall({ name, arg, result }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="my-2.5 overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-sunk)]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-2 px-3 py-2 text-left text-[12px] hover:bg-[var(--color-hover)]"
      >
        <Icon
          name="chevronRight"
          className={`h-3 w-3 text-[var(--color-faint)] transition-transform ${open ? "rotate-90" : ""}`}
        />
        <Icon name="code" className="h-3.5 w-3.5 text-[var(--color-mineral)]" />
        <span className="font-mono text-[11.5px] text-[var(--color-ink-2)]">{name}</span>
        <span className="min-w-0 flex-1 truncate font-mono text-[11px] text-[var(--color-faint)]">{arg}</span>
        <Icon name="check" className="h-3.5 w-3.5 text-[var(--color-mineral)]" />
      </button>
      {open && (
        <div className="border-t border-[var(--color-line)] bg-white px-3 py-2 font-mono text-[11.5px] text-[var(--color-muted)]">
          {result}
        </div>
      )}
    </div>
  )
}

function Message({ msg, onOpenArtifact }) {
  if (msg.role === "user") {
    return (
      <div className="rise mb-7 flex justify-end">
        <div className="max-w-[78%]">
          <div className="rounded-2xl rounded-br-md bg-[var(--color-ivory)] px-4 py-3 text-[14.5px] leading-[1.6] text-[var(--color-ink)]">
            {msg.text}
          </div>
          {msg.attachment && (
            <div className="mt-1.5 flex justify-end">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2 py-1 font-mono text-[11px] text-[var(--color-muted)]">
                <Icon name="doc" className="h-3 w-3" />
                {msg.attachment}
              </span>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="rise mb-8 flex gap-3">
      <Logo className="mt-0.5 h-7 w-7 shrink-0" />
      <div className="min-w-0 flex-1">
        {msg.blocks.map((b, i) => {
          if (b.type === "text")
            return (
              <p key={i} className="mb-3 text-[14.5px] leading-[1.72] text-[var(--color-ink-2)]">
                {b.text}
              </p>
            )
          if (b.type === "tool") return <ToolCall key={i} {...b} />
          if (b.type === "code") return <CodeBlock key={i} {...b} />
          if (b.type === "list")
            return (
              <ol key={i} className="mb-3 space-y-2">
                {b.items.map(([head, body], j) => (
                  <li key={j} className="flex gap-2.5 text-[14px] leading-[1.65]">
                    <span className="mt-[3px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-[var(--color-clay-soft)] text-[10.5px] font-medium text-[var(--color-clay-2)]">
                      {j + 1}
                    </span>
                    <span className="text-[var(--color-ink-2)]">
                      <strong className="font-medium text-[var(--color-ink)]">{head}.</strong> {body}
                    </span>
                  </li>
                ))}
              </ol>
            )
          return null
        })}

        {msg.artifact && (
          <button
            onClick={onOpenArtifact}
            className="mt-1 flex w-full items-center gap-3 rounded-xl border border-[var(--color-line)] bg-white px-3 py-2.5 text-left transition-colors hover:border-[var(--color-clay)] hover:bg-[var(--color-clay-soft)]"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[var(--color-ivory)]">
              <Icon name="artifact" className="h-4 w-4 text-[var(--color-clay)]" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-medium">{msg.artifact.title}</span>
              <span className="block text-[11.5px] text-[var(--color-faint)]">{msg.artifact.kind}</span>
            </span>
            <Icon name="chevronRight" className="h-4 w-4 text-[var(--color-faint)]" />
          </button>
        )}

        <div className="mt-3 flex items-center gap-1">
          {["copy", "refresh", "thumbUp"].map((n) => (
            <button
              key={n}
              className="grid h-7 w-7 place-items-center rounded-md text-[var(--color-faint)] transition-colors hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]"
            >
              <Icon name={n} className="h-[15px] w-[15px]" />
            </button>
          ))}
          <span className="ml-1 font-mono text-[10.5px] text-[var(--color-faint)]">
            Atlas 4 Opus · 4.2s · 1,830 tokens
          </span>
        </div>
      </div>
    </div>
  )
}

export default function ChatWorkspace() {
  const [messages, setMessages] = useState(SEED)
  const [draft, setDraft] = useState("")
  const [thinking, setThinking] = useState(false)
  const [artifactOpen, setArtifactOpen] = useState(true)
  const [modelOpen, setModelOpen] = useState(false)
  const [model, setModel] = useState(MODELS[0])
  const [collapsed, setCollapsed] = useState(false)
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [messages, thinking])

  function send(text) {
    const body = (text ?? draft).trim()
    if (!body) return
    setMessages((m) => [...m, { role: "user", text: body }])
    setDraft("")
    setThinking(true)
    setTimeout(() => {
      setThinking(false)
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          blocks: [
            {
              type: "text",
              text: "Here's how I'd approach that. I've split it into the part you can ship today and the part that needs a migration window.",
            },
            {
              type: "list",
              items: [
                ["Ship today", "Batch the price lookups behind a feature flag and watch p99 for one deploy cycle."],
                ["Needs a window", "Hoisting tax rules changes the cache key, so it wants a warm-up job first."],
              ],
            },
          ],
        },
      ])
    }, 1100)
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="/" collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[52px] shrink-0 items-center justify-between border-b border-[var(--color-line)] px-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <h1 className="truncate font-serif text-[16px] font-medium tracking-[-0.01em]">
              Checkout latency regression
            </h1>
            <Pill tone="mineral">Project · Platform</Pill>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setArtifactOpen((o) => !o)}
              className={`inline-flex h-8 items-center gap-1.5 rounded-lg border px-2.5 text-[12.5px] font-medium transition-colors ${
                artifactOpen
                  ? "border-[var(--color-clay)] bg-[var(--color-clay-soft)] text-[var(--color-clay-2)]"
                  : "border-[var(--color-line)] text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"
              }`}
            >
              <Icon name="artifact" className="h-4 w-4" />
              Artifact
            </button>
            <Button variant="outline">
              <Icon name="dots" className="h-4 w-4" />
            </Button>
          </div>
        </header>

        <div className="flex min-h-0 flex-1">
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-6 py-7">
              <div className="mx-auto max-w-[720px]">
                {messages.map((m, i) => (
                  <Message key={i} msg={m} onOpenArtifact={() => setArtifactOpen(true)} />
                ))}
                {thinking && (
                  <div className="mb-8 flex gap-3">
                    <Logo className="mt-0.5 h-7 w-7 shrink-0" />
                    <div className="flex items-center gap-1.5 pt-1.5">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="pulse-dot h-[6px] w-[6px] rounded-full bg-[var(--color-clay)]"
                          style={{ animationDelay: `${i * 0.18}s` }}
                        />
                      ))}
                      <span className="ml-1.5 text-[12.5px] text-[var(--color-faint)]">Thinking…</span>
                    </div>
                  </div>
                )}
                <div ref={endRef} />
              </div>
            </div>

            <div className="shrink-0 px-6 pb-5">
              <div className="mx-auto max-w-[720px]">
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-[var(--color-line)] bg-white px-3 py-[5px] text-[12px] text-[var(--color-muted)] transition-colors hover:border-[var(--color-clay)] hover:text-[var(--color-clay-2)]"
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <div className="rounded-2xl border border-[var(--color-line)] bg-white p-2.5 shadow-[0_1px_2px_rgba(20,20,19,0.04)] focus-within:border-[var(--color-clay)]">
                  <textarea
                    rows={2}
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        send()
                      }
                    }}
                    placeholder="Reply to Atlas…"
                    className="w-full resize-none bg-transparent px-2 py-1 text-[14px] leading-[1.6] outline-none placeholder:text-[var(--color-faint)]"
                  />
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1">
                      <button className="grid h-7 w-7 place-items-center rounded-md text-[var(--color-faint)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]">
                        <Icon name="attach" className="h-[15px] w-[15px]" />
                      </button>
                      <div className="relative">
                        <button
                          onClick={() => setModelOpen((o) => !o)}
                          className="inline-flex h-7 items-center gap-1.5 rounded-md px-2 text-[12px] text-[var(--color-muted)] hover:bg-[var(--color-sunk)]"
                        >
                          <span className="h-[7px] w-[7px] rounded-full" style={{ background: model.tone }} />
                          {model.name}
                          <Icon name="chevronDown" className="h-3 w-3" />
                        </button>
                        {modelOpen && (
                          <div className="absolute bottom-9 left-0 z-20 w-[248px] overflow-hidden rounded-xl border border-[var(--color-line)] bg-white py-1 shadow-[0_10px_28px_rgba(20,20,19,0.1)]">
                            {MODELS.map((m) => (
                              <button
                                key={m.id}
                                onClick={() => {
                                  setModel(m)
                                  setModelOpen(false)
                                }}
                                className="flex w-full items-start gap-2.5 px-3 py-2 text-left hover:bg-[var(--color-sunk)]"
                              >
                                <span
                                  className="mt-[5px] h-[7px] w-[7px] shrink-0 rounded-full"
                                  style={{ background: m.tone }}
                                />
                                <span className="min-w-0 flex-1">
                                  <span className="block text-[12.5px] font-medium">{m.name}</span>
                                  <span className="block text-[11px] text-[var(--color-faint)]">{m.blurb}</span>
                                </span>
                                {m.id === model.id && (
                                  <Icon name="check" className="mt-1 h-3.5 w-3.5 text-[var(--color-clay)]" />
                                )}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => send()}
                      disabled={!draft.trim()}
                      className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--color-clay)] text-white transition-opacity hover:bg-[var(--color-clay-2)] disabled:opacity-30"
                    >
                      <Icon name="send" className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-center text-[11px] text-[var(--color-faint)]">
                  Atlas can make mistakes. Verify important details.
                </p>
              </div>
            </div>
          </div>

          {artifactOpen && (
            <aside className="hidden w-[380px] shrink-0 flex-col border-l border-[var(--color-line)] bg-white lg:flex">
              <div className="flex h-[52px] shrink-0 items-center justify-between border-b border-[var(--color-line)] px-4">
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-medium">checkout-repricing.patch</p>
                  <p className="text-[11px] text-[var(--color-faint)]">Version 3 · edited 2m ago</p>
                </div>
                <button
                  onClick={() => setArtifactOpen(false)}
                  className="grid h-7 w-7 place-items-center rounded-md text-[var(--color-faint)] hover:bg-[var(--color-sunk)]"
                >
                  <Icon name="chevronRight" className="h-4 w-4" />
                </button>
              </div>
              <div className="scroll-thin min-h-0 flex-1 overflow-auto py-3">
                {ARTIFACT_LINES.map((l) => (
                  <div key={l.n} className="flex gap-3 px-4 font-mono text-[11.5px] leading-[1.9]">
                    <span className="w-5 shrink-0 text-right text-[var(--color-faint)]">{l.n}</span>
                    <span style={{ color: l.c }} className="whitespace-pre">
                      {l.t}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex shrink-0 items-center gap-2 border-t border-[var(--color-line)] p-3">
                <Button variant="dark" className="flex-1 justify-center">
                  <Icon name="check" className="h-4 w-4" /> Apply patch
                </Button>
                <Button variant="outline">
                  <Icon name="copy" className="h-4 w-4" />
                </Button>
              </div>
            </aside>
          )}
        </div>
      </main>
    </div>
  )
}
