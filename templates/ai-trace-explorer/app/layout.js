import "./globals.css"

export const metadata = {
  title: "Filament — Trace Explorer",
  description:
    "LLM observability trace explorer: a recent-traces table, a nested span waterfall with latency bars, per-span token and cost accounting, and tool call input/output inspection.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
