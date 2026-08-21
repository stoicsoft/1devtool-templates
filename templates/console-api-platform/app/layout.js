import "./globals.css"

export const metadata = {
  title: "Kestrel Console — API platform",
  description:
    "Developer console for an API platform: usage overview, API key management with one-time reveal, rate-limit meters, and billing.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
