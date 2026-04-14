import "./globals.css"

export const metadata = {
  title: "log.stoicsoft.com — Engineering notes from the studio",
  description:
    "Engineering, architecture, and systems notes from the StoicSoft team. Monospace-forward, no dark patterns, no listicle fluff.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
