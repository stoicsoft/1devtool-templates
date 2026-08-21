import "./globals.css"

export const metadata = {
  title: "Postbox — Support Inbox",
  description:
    "Support inbox with queues, a customer context panel, and AI-drafted replies grounded in your docs and issue tracker.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
