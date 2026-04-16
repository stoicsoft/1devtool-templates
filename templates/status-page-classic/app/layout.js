import "./globals.css"

export const metadata = {
  title: "ServerCompass Status — All systems operational",
  description:
    "Real-time status, incident history, and scheduled maintenance for ServerCompass — infrastructure monitoring for humans.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
