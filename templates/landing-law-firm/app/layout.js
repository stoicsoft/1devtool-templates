import "./globals.css"

export const metadata = {
  title: "Hollingsworth & Price — Counsel for founders and operators",
  description:
    "A boutique law firm representing technology founders, venture capital, and independent studios. Based in New York and London.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
