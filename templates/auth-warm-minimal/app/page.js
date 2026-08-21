"use client"

import { useState } from "react"
import { Divider, Field, Icon, Primary, Social, Split } from "./_components/auth"

export default function SignIn() {
  const [show, setShow] = useState(false)
  const [remember, setRemember] = useState(true)
  const [busy, setBusy] = useState(false)

  return (
    <Split footer="© 2026 Thicket">
      <div className="rise">
        <h1 className="display text-[32px]">Welcome back</h1>
        <p className="mt-2 text-[14.5px] leading-[1.65] text-[var(--color-muted)]">
          Sign in to your workspace. No account?{" "}
          <a href="/signup" className="text-[var(--color-clay)] underline decoration-[var(--color-clay-soft)] underline-offset-2 hover:decoration-[var(--color-clay)]">
            Create one
          </a>
          .
        </p>

        <div className="mt-7 space-y-3.5">
          <Social />
          <Divider>or continue with email</Divider>

          <Field label="Email">
            <div className="relative">
              <Icon name="mail" className="pointer-events-none absolute left-3.5 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-[var(--color-faint)]" />
              <input
                type="email"
                defaultValue="rina@northwind.dev"
                className="h-11 w-full rounded-xl border border-[var(--color-line)] bg-white pl-10 pr-3.5 text-[14.5px] outline-none transition-colors focus:border-[var(--color-clay)]"
              />
            </div>
          </Field>

          <Field
            label="Password"
            right={
              <a href="#" className="text-[12px] text-[var(--color-muted)] hover:text-[var(--color-ink)]">
                Forgot?
              </a>
            }
          >
            <div className="relative">
              <Icon name="lock" className="pointer-events-none absolute left-3.5 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-[var(--color-faint)]" />
              <input
                type={show ? "text" : "password"}
                defaultValue="correct-horse-battery"
                className="h-11 w-full rounded-xl border border-[var(--color-line)] bg-white pl-10 pr-11 text-[14.5px] outline-none transition-colors focus:border-[var(--color-clay)]"
              />
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg text-[var(--color-faint)] hover:bg-[var(--color-ivory-2)]"
              >
                <Icon name={show ? "eyeOff" : "eye"} className="h-[17px] w-[17px]" />
              </button>
            </div>
          </Field>

          <label className="flex cursor-pointer items-center gap-2 text-[13px] text-[var(--color-muted)]">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="accent-[var(--color-clay)]"
            />
            Keep me signed in for 30 days
          </label>

          <Primary
            onClick={() => {
              setBusy(true)
              setTimeout(() => setBusy(false), 900)
            }}
            disabled={busy}
          >
            {busy ? "Signing in…" : "Sign in"}
          </Primary>

          <a
            href="/verify"
            className="flex h-11 w-full items-center justify-center gap-1.5 rounded-xl border border-[var(--color-line)] bg-white text-[14px] font-medium transition-colors hover:bg-[var(--color-ivory-2)]"
          >
            <Icon name="spark" className="h-4 w-4 text-[var(--color-clay)]" />
            Email me a sign-in code
          </a>
        </div>

        <p className="mt-7 text-[12px] leading-[1.6] text-[var(--color-faint)]">
          Your organisation requires SSO for members of the <span className="font-medium">northwind.dev</span> domain.
          You will be redirected to Okta after entering your email.
        </p>
      </div>
    </Split>
  )
}
