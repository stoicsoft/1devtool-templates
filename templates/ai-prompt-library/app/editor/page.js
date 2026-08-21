"use client"

import { useMemo, useState } from "react"
import { Button, Card, Icon, Shell, Tag } from "../_components/shell"

const SYSTEM = `You are a support triage assistant for Northwind.

Classify the ticket into exactly one queue:
  billing · technical · account · feedback

Rules
- Choose the queue the customer would pick if they knew our org chart.
- If two queues fit, prefer the one that unblocks the customer fastest.
- Never invent policy. If the ticket references a policy you cannot verify,
  route to account and say so in the rationale.

Return JSON: { queue, confidence, rationale }`

const USER = `Subject: {{subject}}
From: {{customer_email}} ({{plan}} plan)

{{body}}`

const versions = [
  { v: "v14", when: "2h ago", author: "LP", note: "Tightened the tie-break rule", score: 0.94, current: true },
  { v: "v13", when: "Yesterday", author: "LP", note: "Added feedback queue", score: 0.91 },
  { v: "v12", when: "3d ago", author: "JT", note: "Switched to JSON output", score: 0.9 },
  { v: "v11", when: "1w ago", author: "LP", note: "Dropped few-shot examples", score: 0.86 },
]

const variables = [
  { key: "subject", type: "string", example: "Charged twice for April" },
  { key: "customer_email", type: "string", example: "dana@acme.io" },
  { key: "plan", type: "enum", example: "business" },
  { key: "body", type: "text", example: "We were billed on the 3rd and again on the 4th…" },
]

const OUTPUT = `{
  "queue": "billing",
  "confidence": 0.96,
  "rationale": "Duplicate charge on consecutive days is a
                billing-system issue, not an account change."
}`

function highlight(text) {
  return text.split(/(\{\{[a-z_]+\}\})/g).map((chunk, i) =>
    chunk.startsWith("{{") ? (
      <span key={i} className="rounded bg-[var(--color-clay-soft)] px-[3px] text-[var(--color-clay-2)]">
        {chunk}
      </span>
    ) : (
      <span key={i}>{chunk}</span>
    )
  )
}

export default function Editor() {
  const [system, setSystem] = useState(SYSTEM)
  const [user, setUser] = useState(USER)
  const [tab, setTab] = useState("edit")
  const [temp, setTemp] = useState(0.2)
  const [maxTokens, setMaxTokens] = useState(512)
  const [model, setModel] = useState("haiku")
  const [running, setRunning] = useState(false)
  const [output, setOutput] = useState(OUTPUT)

  const tokens = useMemo(() => Math.round((system.length + user.length) / 3.6), [system, user])

  function run() {
    setRunning(true)
    setOutput("")
    setTimeout(() => {
      setRunning(false)
      setOutput(OUTPUT)
    }, 900)
  }

  return (
    <Shell
      active="/editor"
      title="support/triage-classifier"
      subtitle="v14 · draft has unsaved changes"
      actions={
        <>
          <Button variant="outline">
            <Icon name="branch" className="h-4 w-4" /> Fork
          </Button>
          <Button variant="dark">Save v15</Button>
        </>
      }
      wide
    >
      <div className="grid h-full grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="flex min-w-0 flex-col border-r border-[var(--color-line)]">
          <div className="flex shrink-0 items-center gap-1 border-b border-[var(--color-line)] px-4">
            {["edit", "preview", "diff"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-3 py-2.5 text-[12.5px] font-medium capitalize transition-colors ${
                  tab === t ? "text-[var(--color-ink)]" : "text-[var(--color-faint)] hover:text-[var(--color-ink-2)]"
                }`}
              >
                {t}
                {tab === t && <span className="absolute inset-x-2 -bottom-px h-[2px] rounded-full bg-[var(--color-clay)]" />}
              </button>
            ))}
            <span className="ml-auto font-mono text-[11px] text-[var(--color-faint)]">~{tokens} tokens</span>
          </div>

          <div className="scroll-thin min-h-0 flex-1 overflow-y-auto p-4">
            {tab === "edit" && (
              <div className="space-y-4">
                <Block label="System prompt" hint="Sets the model's role and hard rules">
                  <textarea
                    value={system}
                    onChange={(e) => setSystem(e.target.value)}
                    rows={14}
                    spellCheck={false}
                    className="w-full resize-none rounded-lg border border-[var(--color-line)] bg-white p-3 font-mono text-[12.5px] leading-[1.7] outline-none focus:border-[var(--color-clay)]"
                  />
                </Block>
                <Block label="User message" hint="Handlebars variables are filled at call time">
                  <textarea
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    rows={6}
                    spellCheck={false}
                    className="w-full resize-none rounded-lg border border-[var(--color-line)] bg-white p-3 font-mono text-[12.5px] leading-[1.7] outline-none focus:border-[var(--color-clay)]"
                  />
                </Block>
              </div>
            )}

            {tab === "preview" && (
              <Card className="p-4">
                <p className="mb-2 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">RENDERED</p>
                <pre className="whitespace-pre-wrap font-mono text-[12.5px] leading-[1.75] text-[var(--color-ink-2)]">
                  {highlight(`${system}\n\n---\n\n${user}`)}
                </pre>
              </Card>
            )}

            {tab === "diff" && (
              <Card className="overflow-hidden">
                <div className="border-b border-[var(--color-line-2)] px-4 py-2.5 text-[12px] text-[var(--color-muted)]">
                  Comparing <span className="font-mono text-[var(--color-ink)]">v13</span> →{" "}
                  <span className="font-mono text-[var(--color-ink)]">v14</span>
                </div>
                <div className="py-2 font-mono text-[12px] leading-[1.9]">
                  {[
                    ["ctx", "Rules"],
                    ["del", "- If two queues fit, pick the first one listed."],
                    ["add", "+ If two queues fit, prefer the one that unblocks the customer fastest."],
                    ["ctx", "- Never invent policy. If the ticket references a policy you cannot verify,"],
                    ["add", "+   route to account and say so in the rationale."],
                  ].map(([kind, line], i) => (
                    <div
                      key={i}
                      className="px-4"
                      style={{
                        background: kind === "add" ? "#eaf6ee" : kind === "del" ? "#fcecf0" : "transparent",
                        color: kind === "add" ? "#177c31" : kind === "del" ? "#a81a44" : "var(--color-muted)",
                      }}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>

          <div className="shrink-0 border-t border-[var(--color-line)] bg-[var(--color-sunk)] p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">OUTPUT</p>
              <Button onClick={run} disabled={running}>
                <Icon name="play" className="h-3.5 w-3.5" />
                {running ? "Running…" : "Run once"}
              </Button>
            </div>
            <pre className="min-h-[92px] rounded-lg border border-[var(--color-line)] bg-white p-3 font-mono text-[12px] leading-[1.7] text-[var(--color-ink-2)]">
              {running ? (
                <span className="inline-flex items-center gap-1.5 text-[var(--color-faint)]">
                  <span className="pulse-dot h-[6px] w-[6px] rounded-full bg-[var(--color-clay)]" /> generating…
                </span>
              ) : (
                output
              )}
            </pre>
          </div>
        </div>

        <aside className="scroll-thin overflow-y-auto p-4">
          <Section title="Model">
            <div className="space-y-2.5">
              <div className="flex gap-1.5">
                {["haiku", "sonnet", "opus"].map((m) => (
                  <button
                    key={m}
                    onClick={() => setModel(m)}
                    className={`flex-1 rounded-lg border px-2 py-1.5 text-[12px] font-medium capitalize transition-colors ${
                      model === m
                        ? "border-[var(--color-clay)] bg-[var(--color-clay-soft)] text-[var(--color-clay-2)]"
                        : "border-[var(--color-line)] bg-white text-[var(--color-muted)]"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
              <Slider label="Temperature" value={temp} min={0} max={1} step={0.05} onChange={setTemp} />
              <Slider label="Max tokens" value={maxTokens} min={64} max={4096} step={64} onChange={setMaxTokens} />
            </div>
          </Section>

          <Section title="Variables">
            <div className="space-y-1.5">
              {variables.map((v) => (
                <div key={v.key} className="rounded-lg border border-[var(--color-line)] bg-white px-2.5 py-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11.5px] text-[var(--color-clay-2)]">{`{{${v.key}}}`}</span>
                    <Tag>{v.type}</Tag>
                  </div>
                  <p className="mt-1 truncate text-[11.5px] text-[var(--color-faint)]">{v.example}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="History">
            <div className="relative pl-4">
              <span className="absolute left-[3px] top-2 bottom-2 w-px bg-[var(--color-line)]" />
              {versions.map((v) => (
                <div key={v.v} className="relative mb-3 last:mb-0">
                  <span
                    className={`absolute -left-4 top-[5px] h-[9px] w-[9px] rounded-full border-2 border-white ${
                      v.current ? "bg-[var(--color-clay)]" : "bg-[var(--color-line)]"
                    }`}
                  />
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[12px] font-medium">{v.v}</span>
                    <span className="font-mono text-[11px] text-[var(--color-mineral)]">{v.score.toFixed(2)}</span>
                  </div>
                  <p className="text-[11.5px] text-[var(--color-muted)]">{v.note}</p>
                  <p className="text-[10.5px] text-[var(--color-faint)]">
                    {v.author} · {v.when}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </aside>
      </div>
    </Shell>
  )
}

function Block({ label, hint, children }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <label className="text-[12px] font-medium">{label}</label>
        <span className="text-[11px] text-[var(--color-faint)]">{hint}</span>
      </div>
      {children}
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section className="mb-5">
      <h2 className="mb-2 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">{title.toUpperCase()}</h2>
      {children}
    </section>
  )
}

function Slider({ label, value, min, max, step, onChange }) {
  return (
    <div>
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
        className="mt-1 h-1 w-full cursor-pointer appearance-none rounded-full bg-[var(--color-line)] accent-[var(--color-clay)]"
      />
    </div>
  )
}
