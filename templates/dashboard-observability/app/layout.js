import "./globals.css"

export const metadata = {
  title: "Cadence — Observability",
  description:
    "Observability dashboard with golden-signal sparklines, a service health table, a trace waterfall, and an alert feed.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
