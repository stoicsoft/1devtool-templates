import "./globals.css"

export const metadata = {
  title: "Algora — Data that tells the story before you ask",
  description:
    "Algora turns raw product events into live dashboards, cohort journeys, and AI-written readouts your team can trust.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
