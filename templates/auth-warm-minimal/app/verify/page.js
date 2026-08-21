"use client"

import { useEffect, useRef, useState } from "react"
import { Icon, Primary, Split } from "../_components/auth"

export default function Verify() {
  const [code, setCode] = useState(["", "", "", "", "", ""])
  const [state, setState] = useState("idle")
  const [seconds, setSeconds] = useState(42)
  const refs = useRef([])

  useEffect(() => {
    if (seconds <= 0) return
    const id = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000)
    return () => clearInterval(id)
  }, [seconds])

  useEffect(() => {
    if (code.every((c) => c !== "") && state === "idle") {
      setState("checking")
      const t = setTimeout(() => setState(code.join("") === "418209" ? "ok" : "error"), 750)
      return () => clearTimeout(t)
    }
  }, [code, state])

  function set(i, v) {
    if (!/^\d?$/.test(v)) return
    setState("idle")
    setCode((c) => {
      const next = [...c]
      next[i] = v
      return next
    })
    if (v && i < 5) refs.current[i + 1]?.focus()
  }

  function onKey(i, e) {
    if (e.key === "Backspace" && !code[i] && i > 0) refs.current[i - 1]?.focus()
    if (e.key === "ArrowLeft" && i > 0) refs.current[i - 1]?.focus()
    if (e.key === "ArrowRight" && i < 5) refs.current[i + 1]?.focus()
  }

  function onPaste(e) {
    const digits = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6).split("")
    if (!digits.length) return
    e.preventDefault()
    setState("idle")
    setCode([0, 1, 2, 3, 4, 5].map((i) => digits[i] ?? ""))
    refs.current[Math.min(digits.length, 5)]?.focus()
  }

  const borderFor = () => {
    if (state === "error") return "#cf2055"
    if (state === "ok") return "#1e9f3c"
    return "var(--color-line)"
  }

  return (
    <Split footer="© 2026 Thicket">
      <div className="rise">
        <a href="/" className="mb-6 inline-flex items-center gap-1.5 text-[13px] text-[var(--color-muted)] hover:text-[var(--color-ink)]">
          <Icon name="arrowLeft" className="h-3.5 w-3.5" /> Back to sign in
        </a>

        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--color-clay-soft)] text-[var(--color-clay)]">
          <Icon name="mail" className="h-6 w-6" />
        </span>

        <h1 className="display mt-5 text-[30px]">Check your email</h1>
        <p className="mt-2 max-w-[38ch] text-[14.5px] leading-[1.65] text-[var(--color-muted)]">
          We sent a six-digit code to <span className="font-medium text-[var(--color-ink)]">rina@northwind.dev</span>.
          It expires in ten minutes.
        </p>

        <div className="mt-7 flex gap-2" onPaste={onPaste}>
          {code.map((c, i) => (
            <input
              key={i}
              ref={(el) => (refs.current[i] = el)}
              value={c}
              onChange={(e) => set(i, e.target.value)}
              onKeyDown={(e) => onKey(i, e)}
              inputMode="numeric"
              maxLength={1}
              className="h-14 w-full rounded-xl border bg-white text-center font-mono text-[22px] outline-none transition-colors focus:border-[var(--color-clay)]"
              style={{ borderColor: borderFor() }}
            />
          ))}
        </div>

        <div className="mt-3 min-h-[20px]">
          {state === "checking" && (
            <p className="inline-flex items-center gap-1.5 text-[13px] text-[var(--color-muted)]">
              <span className="pulse-dot h-[6px] w-[6px] rounded-full bg-[var(--color-clay)]" /> Verifying…
            </p>
          )}
          {state === "error" && (
            <p className="text-[13px] text-[#cf2055]">That code did not match. Try 418209, or request a new one.</p>
          )}
          {state === "ok" && (
            <p className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#177c31]">
              <Icon name="check" className="h-4 w-4" /> Verified — taking you to your workspace
            </p>
          )}
        </div>

        <div className="mt-5 space-y-3">
          <Primary disabled={state !== "ok"}>Continue</Primary>
          <button
            onClick={() => {
              setSeconds(60)
              setCode(["", "", "", "", "", ""])
              setState("idle")
              refs.current[0]?.focus()
            }}
            disabled={seconds > 0}
            className="h-10 w-full rounded-xl border border-[var(--color-line)] bg-white text-[13.5px] font-medium transition-colors hover:bg-[var(--color-ivory-2)] disabled:opacity-45"
          >
            {seconds > 0 ? `Resend code in ${seconds}s` : "Resend code"}
          </button>
        </div>

        <div className="mt-7 border-t border-[var(--color-line)] pt-5">
          <p className="text-[12.5px] leading-[1.65] text-[var(--color-faint)]">
            Not seeing it? Check spam, or{" "}
            <a href="/" className="text-[var(--color-clay)] underline underline-offset-2">
              use a different email
            </a>
            . Codes are single-use and are never valid for more than one session.
          </p>
        </div>
      </div>
    </Split>
  )
}
