import "./globals.css"

export const metadata = {
  title: "Ledgerline — Pricing",
  description:
    "Pricing page with monthly/yearly toggle, four plan cards, an interactive estimate calculator, a full comparison matrix, and FAQ.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
