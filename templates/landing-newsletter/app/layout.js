import "./globals.css"

export const metadata = {
  title: "The Margin — A weekly note on building independent software",
  description:
    "A Sunday-morning newsletter on the craft of running a one-person software studio. Written by Clara Figueira at StoicSoft. Free, no ads.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
