import "./globals.css"

export const metadata = {
  title: "INC-2026-041 — Postmortem",
  description:
    "Blameless incident postmortem: impact metrics, an annotated timeline, contributing factors, action items with owners, and lessons.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
