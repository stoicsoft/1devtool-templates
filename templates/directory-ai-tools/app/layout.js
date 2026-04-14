import "./globals.css"

export const metadata = {
  title: "Atlas — An honest map of the AI tools operators actually ship with",
  description: "Hand-tested AI tools from the StoicSoft team.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
