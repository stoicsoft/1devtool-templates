import "./globals.css"

export const metadata = {
  title: "Aether — The AI workspace for operators",
  description:
    "Aether turns your scattered docs, calls, and metrics into one searchable surface. Draft decisions faster, with evidence your team can audit.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
