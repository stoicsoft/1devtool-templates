import "./globals.css"

export const metadata = {
  title: "Meridian — Revenue",
  description:
    "SaaS revenue dashboard: MRR and ARR KPIs with deltas, a monthly MRR-movement chart splitting new, expansion, contraction, and churn, plan mix, and a top-accounts list.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
