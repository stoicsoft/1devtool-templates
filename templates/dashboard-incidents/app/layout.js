import "./globals.css"

export const metadata = {
  title: "Beacon — Incidents",
  description:
    "Incident response dashboard: response KPIs, an active-incidents list with severity and status, affected services, a live incident timeline, and responders.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
