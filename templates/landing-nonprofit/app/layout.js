import "./globals.css"

export const metadata = {
  title: "Open Roots — Reforesting Iberian fire scars, one valley at a time",
  description:
    "An independent nonprofit replanting native species across post-fire valleys in Portugal and Spain. 412 hectares restored since 2020.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
