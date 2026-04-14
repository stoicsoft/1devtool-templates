import "./globals.css"

export const metadata = {
  title: "Endpoints — A catalog of APIs builders at StoicSoft actually integrate",
  description: "Hand-reviewed public APIs with honest pricing and real auth notes.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
