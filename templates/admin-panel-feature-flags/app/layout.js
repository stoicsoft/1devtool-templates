import "./globals.css"

export const metadata = {
  title: "Toggle — Feature Flags",
  description:
    "Feature flag admin: environment switcher, rollout sliders, targeting rules, in-code snippet, and an audit trail of recent changes.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
