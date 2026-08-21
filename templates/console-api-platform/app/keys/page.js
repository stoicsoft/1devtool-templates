"use client"

import { useState } from "react"
import { Button, Card, Icon, Shell } from "../_components/shell"

const KEYS = [
  { name: "prod-web", prefix: "sk-kes-4f2a", created: "Jan 12, 2026", used: "2 minutes ago", scope: "all models", calls: "14.2k", env: "production", tone: "#c96442" },
  { name: "prod-worker", prefix: "sk-kes-9b71", created: "Jan 12, 2026", used: "4 minutes ago", scope: "haiku, sonnet", calls: "3.1k", env: "production", tone: "#c96442" },
  { name: "batch-nightly", prefix: "sk-kes-2e08", created: "Feb 3, 2026", used: "1 hour ago", scope: "sonnet only", calls: "980", env: "production", tone: "#c96442" },
  { name: "staging", prefix: "sk-kes-77cd", created: "Feb 20, 2026", used: "Yesterday", scope: "all models", calls: "212", env: "staging", tone: "#98801f" },
  { name: "laptop-rina", prefix: "sk-kes-1a3f", created: "Mar 8, 2026", used: "6 days ago", scope: "all models", calls: "48", env: "development", tone: "#629987" },
]

export default function Keys() {
  const [creating, setCreating] = useState(false)
  const [created, setCreated] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [copied, setCopied] = useState(false)

  const fresh = "sk-kes-8d41-XyR2mQvT7nLpA9wEs4KcB6hJfZ0gN3uD"

  return (
    <Shell
      active="/keys"
      title="API keys"
      subtitle={`${KEYS.length} active keys`}
      actions={
        <Button
          onClick={() => {
            setCreating(true)
            setCreated(false)
          }}
        >
          <Icon name="plus" className="h-4 w-4" /> Create key
        </Button>
      }
    >
      <Card className="mb-4 flex items-start gap-3 bg-[var(--color-ivory-2)] p-4">
        <Icon name="key" className="mt-[2px] h-[18px] w-[18px] shrink-0 text-[var(--color-clay)]" />
        <p className="text-[12.5px] leading-[1.65] text-[var(--color-muted)]">
          Keys are shown once at creation and stored only as a hash. Scope each key to the models and environment it
          actually needs — a leaked key limited to Haiku in staging is a much smaller incident.
        </p>
      </Card>

      <Card className="overflow-hidden">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center border-b border-[var(--color-line-2)] px-4 py-2.5">
          <h2 className="text-[13px] font-medium">Active keys</h2>
          <span className="text-[11.5px] text-[var(--color-faint)]">Last 30 days</span>
        </div>
        {KEYS.map((k, i) => (
          <div
            key={k.name}
            className={`flex items-center gap-3 px-4 py-3.5 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}
          >
            <span className="h-[8px] w-[8px] shrink-0 rounded-full" style={{ background: k.tone }} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[13.5px] font-medium">{k.name}</span>
                <span
                  className="rounded-full px-2 py-[2px] text-[10.5px] font-medium"
                  style={{ background: `${k.tone}1c`, color: k.tone }}
                >
                  {k.env}
                </span>
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11.5px] text-[var(--color-faint)]">
                <code className="font-mono">{k.prefix}••••••••••••</code>
                <span>{k.scope}</span>
                <span>created {k.created}</span>
                <span>used {k.used}</span>
              </div>
            </div>
            <span className="hidden w-[60px] text-right font-mono text-[12px] text-[var(--color-muted)] sm:block">
              {k.calls}
            </span>
            <div className="flex shrink-0 gap-1">
              <button className="grid h-7 w-7 place-items-center rounded-md text-[var(--color-faint)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]">
                <Icon name="copy" className="h-[15px] w-[15px]" />
              </button>
              <button className="grid h-7 w-7 place-items-center rounded-md text-[var(--color-faint)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-berry)]">
                <Icon name="trash" className="h-[15px] w-[15px]" />
              </button>
            </div>
          </div>
        ))}
      </Card>

      {creating && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[rgba(20,20,19,0.35)] px-4" onClick={() => setCreating(false)}>
          <div
            className="w-full max-w-[480px] rounded-2xl border border-[var(--color-line)] bg-white p-5 shadow-[0_20px_50px_rgba(20,20,19,0.18)]"
            onClick={(e) => e.stopPropagation()}
          >
            {!created ? (
              <>
                <h2 className="font-serif text-[19px] font-medium tracking-[-0.01em]">Create an API key</h2>
                <div className="mt-4 space-y-3.5">
                  <div>
                    <label className="text-[12px] font-medium text-[var(--color-muted)]">Name</label>
                    <input
                      defaultValue="prod-mobile"
                      className="mt-1.5 h-9 w-full rounded-lg border border-[var(--color-line)] px-3 text-[13px] outline-none focus:border-[var(--color-clay)]"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] font-medium text-[var(--color-muted)]">Environment</label>
                    <div className="mt-1.5 flex gap-1.5">
                      {["production", "staging", "development"].map((e, i) => (
                        <button
                          key={e}
                          className={`flex-1 rounded-lg border px-2 py-1.5 text-[12px] font-medium capitalize ${
                            i === 0
                              ? "border-[var(--color-clay)] bg-[var(--color-clay-soft)] text-[var(--color-clay-2)]"
                              : "border-[var(--color-line)] text-[var(--color-muted)]"
                          }`}
                        >
                          {e}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-[12px] font-medium text-[var(--color-muted)]">Model scope</label>
                    <div className="mt-1.5 space-y-1.5">
                      {["halcyon-4-opus", "halcyon-4-sonnet", "halcyon-4-haiku"].map((m, i) => (
                        <label
                          key={m}
                          className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-[var(--color-line)] px-3 py-2"
                        >
                          <input type="checkbox" defaultChecked={i > 0} className="accent-[var(--color-clay)]" />
                          <span className="font-mono text-[12px]">{m}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setCreating(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setCreated(true)}>Create key</Button>
                </div>
              </>
            ) : (
              <>
                <h2 className="font-serif text-[19px] font-medium tracking-[-0.01em]">Copy your key now</h2>
                <p className="mt-1.5 text-[12.5px] leading-[1.6] text-[var(--color-muted)]">
                  This is the only time it will be shown. Store it in your secret manager before closing this dialog.
                </p>
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-[var(--color-line)] bg-[var(--color-sunk)] px-3 py-2.5">
                  <code className="min-w-0 flex-1 truncate font-mono text-[12px]">
                    {revealed ? fresh : `${fresh.slice(0, 12)}${"•".repeat(24)}`}
                  </code>
                  <button
                    onClick={() => setRevealed((r) => !r)}
                    className="grid h-7 w-7 place-items-center rounded-md text-[var(--color-faint)] hover:bg-white"
                  >
                    <Icon name={revealed ? "eyeOff" : "eye"} className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => {
                      setCopied(true)
                      setTimeout(() => setCopied(false), 1400)
                    }}
                    className="grid h-7 w-7 place-items-center rounded-md text-[var(--color-faint)] hover:bg-white"
                  >
                    <Icon name={copied ? "check" : "copy"} className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-5 flex justify-end">
                  <Button variant="dark" onClick={() => setCreating(false)}>
                    I&apos;ve stored it
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </Shell>
  )
}
