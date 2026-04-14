import "./globals.css"

export const metadata = {
  title: "Northframe — Independent Creative Studio",
  description:
    "We craft bold identities, editorial websites, and launch campaigns for ambitious teams. Independent studio. Global clients.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
