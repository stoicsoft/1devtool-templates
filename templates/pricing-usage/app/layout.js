import "./globals.css"

export const metadata = {
  title: "Relay — Pricing",
  description:
    "Usage-based pricing page with an interactive calculator that estimates a monthly bill from API calls, seats, and storage, and recommends the cheapest plan across a three-tier comparison.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
