import "./globals.css"

export const metadata = {
  title: "Casa — Quiet homes in the Iberian countryside",
  description:
    "Hand-picked restored homes across Portugal and Spain. We broker, we design, we help you move in. An independent studio inside StoicSoft.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
