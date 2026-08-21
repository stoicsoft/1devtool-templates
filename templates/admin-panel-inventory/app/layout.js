import "./globals.css"

export const metadata = {
  title: "Depot — Inventory",
  description:
    "Inventory control panel: stock KPIs, a product table with availability and reorder points, low-stock alerts, per-location stock breakdown, and a stock movement ledger.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
