import "./globals.css"

export const metadata = {
  title: "Material — The design shelf from the StoicSoft studio",
  description: "Fonts, icons, UI kits, and objects we reach for, maintained by the StoicSoft design team.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
