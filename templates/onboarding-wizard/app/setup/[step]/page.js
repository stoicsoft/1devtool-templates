"use client"

import { use, useState } from "react"
import Link from "next/link"
import { Icon, STEPS, StepPanel } from "../../data"

function Toggle({ on, onClick }) {
  return (
    <button onClick={onClick} className="relative h-[20px] w-[34px] shrink-0 rounded-full transition-colors" style={{ background: on ? "#c96442" : "#dcdad3" }}>
      <span className={`absolute top-[2px] h-[16px] w-[16px] rounded-full bg-white shadow-sm transition-all ${on ? "left-[16px]" : "left-[2px]"}`} />
    </button>
  )
}

export default function SetupStep({ params }) {
  const { step } = use(params)
  let idx = STEPS.findIndex((s) => s[3] === step)
  if (idx < 0) idx = 0
  const [, , , slug] = STEPS[idx]
  const prev = STEPS[idx - 1]
  const next = STEPS[idx + 1]

  const [prefs, setPrefs] = useState({ digest: true, tips: false, mentions: true })
  const [view, setView] = useState("Overview")
  const [theme, setTheme] = useState("System")

  const isLaunch = slug === "launch"

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <StepPanel current={idx} />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[60px] shrink-0 items-center gap-3 px-7">
          <span className="text-[12.5px] font-medium text-[var(--color-faint)]">Step {idx + 1} of {STEPS.length}</span>
          {!isLaunch && next && <Link href={next[4]} className="ml-auto text-[12.5px] font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)]">Skip for now</Link>}
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-7 pb-4">
          <div className="mx-auto max-w-[600px] pt-6">
            {slug === "preferences" && (
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-clay-soft)] px-2.5 py-1 text-[11.5px] font-medium text-[var(--color-clay-2)]">
                  <Icon name="sliders" className="h-3.5 w-3.5" /> Preferences
                </span>
                <h2 className="mt-3 font-serif text-[27px] font-medium tracking-[-0.01em]">Set your defaults</h2>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-[var(--color-muted)]">Tune how Pilot behaves. These apply to your account and can be changed anytime in Settings.</p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-[var(--color-line)] bg-white p-4">
                    <p className="text-[12.5px] font-medium">Default landing view</p>
                    <div className="mt-2.5 flex gap-1.5">
                      {["Overview", "Traces", "Reports"].map((v) => (
                        <button key={v} onClick={() => setView(v)} className={`rounded-lg px-3 py-1.5 text-[12.5px] font-medium ${view === v ? "bg-[var(--color-ink)] text-white" : "border border-[var(--color-line)] text-[var(--color-muted)] hover:bg-[var(--color-sunk)]"}`}>{v}</button>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-[var(--color-line)] bg-white p-4">
                    <p className="text-[12.5px] font-medium">Timezone</p>
                    <div className="mt-2 flex items-center justify-between rounded-lg border border-[var(--color-line)] px-3 py-2 text-[12.5px]">
                      <span className="inline-flex items-center gap-1.5"><Icon name="globe" className="h-3.5 w-3.5 text-[var(--color-faint)]" /> America/Los Angeles</span>
                      <Icon name="next" className="h-3.5 w-3.5 rotate-90 text-[var(--color-faint)]" />
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                    {[
                      ["digest", "Weekly email digest", "A Monday summary of your workspace"],
                      ["tips", "Product tips", "Occasional emails about new features"],
                      ["mentions", "Mention alerts", "Notify me when I'm @mentioned"],
                    ].map(([key, label, desc], i) => (
                      <div key={key} className={`flex items-center gap-3 px-4 py-3 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}>
                        <Icon name="bell" className="h-4 w-4 text-[var(--color-faint)]" />
                        <div className="min-w-0 flex-1">
                          <p className="text-[12.5px] font-medium">{label}</p>
                          <p className="text-[11px] text-[var(--color-faint)]">{desc}</p>
                        </div>
                        <Toggle on={prefs[key]} onClick={() => setPrefs((p) => ({ ...p, [key]: !p[key] }))} />
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-[var(--color-line)] bg-white p-4">
                    <p className="text-[12.5px] font-medium">Appearance</p>
                    <div className="mt-2.5 grid grid-cols-3 gap-2">
                      {[["Light", "sun"], ["Dark", "moon"], ["System", "monitor"]].map(([t, ic]) => (
                        <button key={t} onClick={() => setTheme(t)} className={`flex flex-col items-center gap-1.5 rounded-lg border py-3 text-[12px] font-medium ${theme === t ? "border-transparent bg-[var(--color-clay-soft)]/50 text-[var(--color-clay-2)] shadow-[0_0_0_1.5px_var(--color-clay)]" : "border-[var(--color-line)] text-[var(--color-muted)] hover:bg-[var(--color-sunk)]"}`}>
                          <Icon name={ic} className="h-4 w-4" /> {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {slug === "launch" && (
              <div className="pt-6 text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#e6f4ea]">
                  <Icon name="check" className="h-8 w-8 text-[#177c31]" />
                </span>
                <h2 className="mt-5 font-serif text-[30px] font-medium tracking-[-0.01em]">You're all set</h2>
                <p className="mx-auto mt-2 max-w-[420px] text-[14px] leading-[1.6] text-[var(--color-muted)]">Your workspace is ready. Here's what we configured — you can change any of it later.</p>

                <div className="mx-auto mt-6 max-w-[420px] overflow-hidden rounded-xl border border-[var(--color-line)] bg-white text-left">
                  {[
                    ["building", "Workspace", "Acme · us-west"],
                    ["team", "Team", "3 members invited"],
                    ["plug", "Data source", "PostgreSQL · 42 tables"],
                    ["sliders", "Preferences", "Digest on · System theme"],
                  ].map(([ic, k, v], i) => (
                    <div key={k} className={`flex items-center gap-3 px-4 py-3 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}>
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--color-sunk)]">
                        <Icon name={ic} className="h-4 w-4 text-[var(--color-muted)]" />
                      </span>
                      <span className="text-[12.5px] font-medium">{k}</span>
                      <span className="ml-auto text-[12px] text-[var(--color-muted)]">{v}</span>
                      <Icon name="check" className="h-4 w-4 text-[#1e9f3c]" />
                    </div>
                  ))}
                </div>

                <a className="mx-auto mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[var(--color-clay)] px-6 text-[14px] font-medium text-white hover:bg-[var(--color-clay-2)]">
                  <Icon name="rocket" className="h-4 w-4" /> Go to your dashboard
                </a>
              </div>
            )}

            {slug === "workspace" && (
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-clay-soft)] px-2.5 py-1 text-[11.5px] font-medium text-[var(--color-clay-2)]">
                  <Icon name="building" className="h-3.5 w-3.5" /> Create workspace
                </span>
                <h2 className="mt-3 font-serif text-[27px] font-medium tracking-[-0.01em]">Name your workspace</h2>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-[var(--color-muted)]">This is where your team's projects and data live.</p>
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="text-[12.5px] font-medium">Workspace name</label>
                    <input defaultValue="Acme" className="mt-1.5 h-10 w-full rounded-lg border border-[var(--color-line)] bg-white px-3 text-[13.5px] outline-none focus:border-[var(--color-clay)]" />
                  </div>
                  <div>
                    <label className="text-[12.5px] font-medium">Workspace URL</label>
                    <div className="mt-1.5 flex h-10 items-center rounded-lg border border-[var(--color-line)] bg-white px-3 text-[13.5px]">
                      <span className="text-[var(--color-faint)]">pilot.app/</span>
                      <input defaultValue="acme" className="min-w-0 flex-1 bg-transparent font-medium outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[12.5px] font-medium">Region</label>
                    <div className="mt-1.5 grid grid-cols-3 gap-2">
                      {["US West", "US East", "EU"].map((r, i) => (
                        <div key={r} className={`rounded-lg border py-2.5 text-center text-[12.5px] font-medium ${i === 0 ? "border-transparent bg-[var(--color-clay-soft)]/50 text-[var(--color-clay-2)] shadow-[0_0_0_1.5px_var(--color-clay)]" : "border-[var(--color-line)] text-[var(--color-muted)]"}`}>{r}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {slug === "team" && (
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-clay-soft)] px-2.5 py-1 text-[11.5px] font-medium text-[var(--color-clay-2)]">
                  <Icon name="team" className="h-3.5 w-3.5" /> Invite your team
                </span>
                <h2 className="mt-3 font-serif text-[27px] font-medium tracking-[-0.01em]">Bring your team along</h2>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-[var(--color-muted)]">Invite teammates by email. They'll get access as soon as they accept.</p>
                <div className="mt-6 flex gap-2">
                  <input placeholder="name@company.com" className="h-10 flex-1 rounded-lg border border-[var(--color-line)] bg-white px-3 text-[13.5px] outline-none focus:border-[var(--color-clay)]" />
                  <button className="h-10 rounded-lg bg-[var(--color-ink)] px-4 text-[13px] font-medium text-white hover:bg-black">Invite</button>
                </div>
                <div className="mt-4 overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                  {[["Maya Chen", "maya@acme.co", "#629987", "Admin"], ["Raj Kapoor", "raj@acme.co", "#827dbd", "Member"], ["Ivy Sun", "ivy@acme.co", "#98801f", "Member"]].map(([n, e, c, role], i) => (
                    <div key={e} className={`flex items-center gap-3 px-4 py-3 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}>
                      <span className="grid h-8 w-8 place-items-center rounded-full text-[11px] font-semibold text-white" style={{ background: c }}>{n.split(" ").map((w) => w[0]).join("")}</span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[12.5px] font-medium">{n}</p>
                        <p className="text-[11px] text-[var(--color-faint)]">{e}</p>
                      </div>
                      <span className="rounded-full bg-[var(--color-sunk)] px-2 py-[2px] text-[10.5px] font-medium text-[var(--color-muted)]">{role}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {!isLaunch && (
          <div className="shrink-0 border-t border-[var(--color-line)] px-7 py-3.5">
            <div className="mx-auto flex max-w-[600px] items-center gap-4">
              <Link href={prev ? prev[4] : "/"} className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-3.5 text-[13px] font-medium text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]">
                <Icon name="back" className="h-4 w-4" /> Back
              </Link>
              <div className="flex-1">
                <div className="h-[6px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                  <div className="h-full rounded-full bg-[var(--color-clay)] transition-all" style={{ width: `${((idx + 0.5) / STEPS.length) * 100}%` }} />
                </div>
              </div>
              <Link href={next ? next[4] : "/setup/launch"} className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-4 text-[13px] font-medium text-white hover:bg-[var(--color-clay-2)]">
                Continue <Icon name="next" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
