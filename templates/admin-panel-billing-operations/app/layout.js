import "./globals.css"

export const metadata = {
  title: "Ledger - Billing Operations",
  description:
    "A polished billing-operations admin panel for subscriptions, invoices, failed payments, and account health.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
