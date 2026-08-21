import "./globals.css"

export const metadata = {
  title: "Cadence — Notifications",
  description:
    "Notification settings: connected delivery channels, a per-event channel matrix for email, push, Slack, and SMS, digest scheduling, and quiet hours.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
