import "./globals.css"

export const metadata = {
  title: "Helix — Self-custody payments for independent teams",
  description:
    "A non-custodial payment rail for payroll, invoicing, and treasury. Stablecoins in, fiat out, audit logs forever. A StoicSoft product.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
