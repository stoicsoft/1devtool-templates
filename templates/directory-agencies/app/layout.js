import "./globals.css"

export const metadata = {
  title: "Atelier — A directory of design and development studios we&apos;d hire ourselves",
  description: "Hand-vetted independent agencies and studios.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
