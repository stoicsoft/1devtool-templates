import "./globals.css"

export const metadata = {
  title: "Tally — Cost Explorer",
  description:
    "Cloud cost explorer with spend KPIs, anomaly banners, a forecast chart against budget, service and team breakdowns, and actionable savings recommendations.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
