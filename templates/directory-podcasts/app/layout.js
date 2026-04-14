import "./globals.css"

export const metadata = {
  title: "Frequencies — A small band of tech podcasts we keep in the rotation",
  description: "Hand-picked, non-sponsored podcasts from the StoicSoft studio listening list.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
