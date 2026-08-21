import "./globals.css"

export const metadata = {
  title: "Riverbend — Changelog",
  description:
    "Product changelog with a release timeline, change-type filters, breaking-change callouts, per-release authors, and email subscription.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
