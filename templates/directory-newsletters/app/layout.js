import "./globals.css"

export const metadata = {
  title: "The Newsstand — A quiet reading list of newsletters worth keeping",
  description: "Hand-picked newsletters from the StoicSoft studio.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
