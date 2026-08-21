import "./globals.css"

export const metadata = {
  title: "Ridge — Monitoring that shuts up",
  description:
    "Waitlist landing page with an email capture that resolves to queue position and a referral link, a product teaser panel, and community unlock milestones.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
