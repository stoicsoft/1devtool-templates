import "./globals.css"

export const metadata = {
  title: "ServerCompass Dashboard — Overview",
  description:
    "Analytics overview for ServerCompass: probes, SLOs, alert volume, and failing endpoints — all in one dashboard.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
