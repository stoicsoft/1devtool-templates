import "./globals.css"

export const metadata = {
  title: "Shipcraft — A six-week cohort for indie software founders",
  description:
    "Design, ship, and price an independent software product in six weeks. Cohort-based, capped at 42 students, taught by operators from the StoicSoft studio.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
