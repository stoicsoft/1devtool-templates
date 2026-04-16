import "./globals.css"

export const metadata = {
  title: "ServerCompass Release Notes — API changelog",
  description:
    "Versioned release notes for the ServerCompass API. Every change documented with effective dates, request/response diffs, and migration steps.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
