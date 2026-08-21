import "./globals.css"

export const metadata = {
  title: "Crucible — Experiments",
  description:
    "A/B experiment dashboard with variant results, a confidence-interval visual, segment breakdowns, daily lift, and guardrail metrics.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
