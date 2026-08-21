import "./globals.css"

export const metadata = {
  title: "Assay — Eval Dashboard",
  description:
    "Model evaluation dashboard: scorecards by capability, suite runs, graders, and regression tracking across versions.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
