import "./globals.css"

export const metadata = {
  title: "Wayfound — Small-group trips for quiet travellers",
  description:
    "Fourteen-person trips to Portugal, Morocco, Japan, and Georgia. Hand-planned by people who&apos;ve walked every route. A StoicSoft studio.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
