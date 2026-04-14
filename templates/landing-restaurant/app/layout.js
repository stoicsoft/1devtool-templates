import "./globals.css"

export const metadata = {
  title: "Olive & Oak — Seasonal kitchen & bar",
  description:
    "A small Mediterranean kitchen in Lisbon&apos;s Santos neighborhood. Seasonal plates, natural wines, and a daily-changing menu.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
