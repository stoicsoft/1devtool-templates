import "./globals.css"

export const metadata = {
  title: "ServerCompass — Infrastructure monitoring for humans",
  description:
    "Synthetic probes, real user monitoring, SSL, and DNS — unified. ServerCompass ships alerts your on-call can actually act on.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
