"use client"

import { useMemo, useState } from "react"
import { Divider, Field, Icon, Primary, Social, Split } from "../_components/auth"

const STEPS = ["Account", "Workspace", "Invite"]

function strength(pw) {
  let score = 0
  if (pw.length >= 8) score += 1
  if (pw.length >= 14) score += 1
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score += 1
  if (/\d/.test(pw)) score += 1
  if (/[^\w\s]/.test(pw)) score += 1
  return Math.min(score, 4)
}

const LABELS = ["Too short", "Weak", "Fair", "Good", "Strong"]
const TONES = ["#cf2055", "#cf2055", "#c5621b", "#98801f", "#1e9f3c"]

export default function SignUp() {
  const [step, setStep] = useState(0)
  const [pw, setPw] = useState("thicket")
  const [show, setShow] = useState(false)
  const [emails, setEmails] = useState(["dana@northwind.dev", "milo@northwind.dev"])
  const [draft, setDraft] = useState("")

  const score = useMemo(() => strength(pw), [pw])

  return (
    <Split footer="Already have an account? Sign in">
      <div className="rise">
        <nav className="mb-7 flex items-center gap-2">
          {STEPS.map((s, i) => (
            <div key={s} className="flex flex-1 items-center gap-2">
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] font-medium transition-colors ${
                  i < step
                    ? "bg-[var(--color-mineral)] text-white"
                    : i === step
                      ? "bg-[var(--color-ink)] text-white"
                      : "border border-[var(--color-line)] text-[var(--color-faint)]"
                }`}
              >
                {i < step ? <Icon name="check" className="h-3 w-3" /> : i + 1}
              </span>
              <span className={`text-[12px] ${i === step ? "font-medium" : "text-[var(--color-faint)]"}`}>{s}</span>
              {i < STEPS.length - 1 && <span className="h-px flex-1 bg-[var(--color-line)]" />}
            </div>
          ))}
        </nav>

        {step === 0 && (
          <>
            <h1 className="display text-[30px]">Create your account</h1>
            <p className="mt-2 text-[14.5px] leading-[1.65] text-[var(--color-muted)]">
              Free for 14 days. No card, and we will not email you about a webinar.
            </p>

            <div className="mt-6 space-y-3.5">
              <Social />
              <Divider>or use email</Divider>
              <Field label="Full name" placeholder="Rina Kowalski" />
              <Field label="Work email" placeholder="you@company.com" hint="We use this as your login and for the trial receipt." />

              <div>
                <label className="mb-1.5 block text-[13px] font-medium">Password</label>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    className="h-11 w-full rounded-xl border border-[var(--color-line)] bg-white px-3.5 pr-11 text-[14.5px] outline-none transition-colors focus:border-[var(--color-clay)]"
                  />
                  <button
                    type="button"
                    onClick={() => setShow((s) => !s)}
                    className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg text-[var(--color-faint)] hover:bg-[var(--color-ivory-2)]"
                  >
                    <Icon name={show ? "eyeOff" : "eye"} className="h-[17px] w-[17px]" />
                  </button>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex flex-1 gap-1">
                    {[0, 1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className="h-[4px] flex-1 rounded-full transition-colors"
                        style={{ background: i < score ? TONES[score] : "var(--color-line)" }}
                      />
                    ))}
                  </div>
                  <span className="w-[62px] text-right text-[11.5px]" style={{ color: TONES[score] }}>
                    {LABELS[score]}
                  </span>
                </div>
              </div>

              <Primary onClick={() => setStep(1)}>Continue</Primary>
              <p className="text-center text-[11.5px] leading-[1.6] text-[var(--color-faint)]">
                By continuing you agree to our{" "}
                <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
              </p>
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <h1 className="display text-[30px]">Name your workspace</h1>
            <p className="mt-2 text-[14.5px] leading-[1.65] text-[var(--color-muted)]">
              This is what teammates will see. You can rename it later.
            </p>

            <div className="mt-6 space-y-3.5">
              <Field label="Workspace name" placeholder="Northwind" />
              <Field label="Workspace URL">
                <div className="flex h-11 items-center rounded-xl border border-[var(--color-line)] bg-white pr-3.5 focus-within:border-[var(--color-clay)]">
                  <span className="pl-3.5 font-mono text-[13.5px] text-[var(--color-faint)]">thicket.app/</span>
                  <input
                    defaultValue="northwind"
                    className="min-w-0 flex-1 bg-transparent font-mono text-[13.5px] outline-none"
                  />
                  <Icon name="check" className="h-4 w-4 text-[var(--color-mineral)]" />
                </div>
              </Field>
              <div>
                <label className="mb-1.5 block text-[13px] font-medium">What will you use it for?</label>
                <div className="grid grid-cols-2 gap-2">
                  {["Engineering", "Product", "Research", "Something else"].map((u, i) => (
                    <button
                      key={u}
                      className={`rounded-xl border px-3 py-2.5 text-[13px] font-medium transition-colors ${
                        i === 0
                          ? "border-[var(--color-clay)] bg-[var(--color-clay-soft)] text-[var(--color-clay-2)]"
                          : "border-[var(--color-line)] bg-white text-[var(--color-muted)] hover:border-[var(--color-ink)]"
                      }`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>

              <Primary onClick={() => setStep(2)}>Continue</Primary>
              <button
                onClick={() => setStep(0)}
                className="flex h-9 w-full items-center justify-center gap-1.5 text-[13px] text-[var(--color-muted)] hover:text-[var(--color-ink)]"
              >
                <Icon name="arrowLeft" className="h-3.5 w-3.5" /> Back
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="display text-[30px]">Invite your team</h1>
            <p className="mt-2 text-[14.5px] leading-[1.65] text-[var(--color-muted)]">
              Optional, but the product is considerably duller alone.
            </p>

            <div className="mt-6 space-y-3.5">
              <div>
                <label className="mb-1.5 block text-[13px] font-medium">Email addresses</label>
                <div className="rounded-xl border border-[var(--color-line)] bg-white p-2 focus-within:border-[var(--color-clay)]">
                  <div className="flex flex-wrap gap-1.5">
                    {emails.map((e) => (
                      <span
                        key={e}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-ivory)] px-2 py-1 text-[12.5px]"
                      >
                        {e}
                        <button
                          onClick={() => setEmails((list) => list.filter((x) => x !== e))}
                          className="text-[var(--color-faint)] hover:text-[var(--color-ink)]"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                    <input
                      value={draft}
                      onChange={(ev) => setDraft(ev.target.value)}
                      onKeyDown={(ev) => {
                        if ((ev.key === "Enter" || ev.key === ",") && draft.trim()) {
                          ev.preventDefault()
                          setEmails((l) => [...l, draft.trim()])
                          setDraft("")
                        }
                      }}
                      placeholder={emails.length ? "" : "name@company.com"}
                      className="h-7 min-w-[140px] flex-1 bg-transparent px-1 text-[13.5px] outline-none placeholder:text-[var(--color-faint)]"
                    />
                  </div>
                </div>
                <p className="mt-1.5 text-[11.5px] text-[var(--color-faint)]">
                  Press enter or comma between addresses.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-ivory-2)] p-3.5">
                <p className="text-[12.5px] font-medium">They will get</p>
                <ul className="mt-2 space-y-1.5">
                  {["Access to this workspace", "Member role — no billing access", "A link that expires in 7 days"].map((t) => (
                    <li key={t} className="flex gap-2 text-[12.5px] text-[var(--color-muted)]">
                      <Icon name="check" className="mt-[3px] h-3 w-3 shrink-0 text-[var(--color-mineral)]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <Primary>Send {emails.length} invite{emails.length === 1 ? "" : "s"} and finish</Primary>
              <button className="flex h-9 w-full items-center justify-center gap-1.5 text-[13px] text-[var(--color-muted)] hover:text-[var(--color-ink)]">
                Skip for now <Icon name="arrowRight" className="h-3.5 w-3.5" />
              </button>
            </div>
          </>
        )}
      </div>
    </Split>
  )
}
