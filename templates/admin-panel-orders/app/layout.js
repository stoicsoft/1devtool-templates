import "./globals.css"

export const metadata = {
  title: "Ledger — Orders",
  description:
    "Order management panel: daily KPIs, an orders table with payment and fulfillment status, order detail with line items and totals, shipping, and a fulfillment timeline.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
