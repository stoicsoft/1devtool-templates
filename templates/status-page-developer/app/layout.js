import "./globals.css"

export const metadata = {
  title: "StoicSoft Status — Region health & uptime",
  description:
    "Live regional health, uptime sparklines, API response times, and incident feed for StoicSoft infrastructure.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
