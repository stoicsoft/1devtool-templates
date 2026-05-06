import "./globals.css"

export const metadata = {
  title: "Vault - Audit & Compliance",
  description:
    "A polished audit-and-compliance admin panel for event streams, policy coverage, evidence exports, and review queues.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
