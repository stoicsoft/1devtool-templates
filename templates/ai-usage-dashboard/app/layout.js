import "./globals.css"

export const metadata = {
  title: "Meter — Usage",
  description:
    "LLM usage dashboard: token and spend KPIs, a daily spend-by-model chart, a per-model token and cost table, rate-limit meters, and top API keys.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
