import "./globals.css"

export const metadata = {
  title: "StoicSoft · dev log",
  description:
    "A running log of what we shipped this week at StoicSoft — quietly, in public.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
