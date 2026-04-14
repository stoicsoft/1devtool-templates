import "./globals.css"

export const metadata = {
  title: "Builders — A hand-kept directory of independent makers",
  description: "A collective directory from the StoicSoft studio and friends.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
