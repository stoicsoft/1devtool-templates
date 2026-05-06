import "./globals.css"

export const metadata = {
  title: "1DevTool — Admin Console",
  description:
    "The 1DevTool admin console — triage issues, ship templates, and review PRs across every project in your developer tool workspace.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
