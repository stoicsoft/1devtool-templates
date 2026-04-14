import "./globals.css"

export const metadata = {
  title: "Shipped — The independent software conference · Lisbon, Oct 2026",
  description:
    "Two days of builders talking about the systems, pricing, and habits behind the software they ship. Lisbon · 15 — 16 October 2026.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
