import "./globals.css"

export const metadata = {
  title: "Elena Faro — Photo journal",
  description:
    "A working photo journal. Street, studio, and field work. Based in Lisbon and Madrid, published weekly on Sunday.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
