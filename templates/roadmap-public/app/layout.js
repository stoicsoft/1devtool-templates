import "./globals.css"

export const metadata = {
  title: "Vega — Roadmap",
  description:
    "Public product roadmap with upvotable feature cards across Under review, Planned, and In progress columns, feedback categories, comment counts, and a give-feedback flow.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
