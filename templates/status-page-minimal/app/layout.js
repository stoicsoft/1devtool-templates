import "./globals.css"

export const metadata = {
  title: "1DevTool Status — All systems normal",
  description:
    "System status, uptime, and incident history for 1DevTool — open-source Next.js template registry.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
