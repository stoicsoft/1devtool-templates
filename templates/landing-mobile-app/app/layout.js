import "./globals.css"

export const metadata = {
  title: "Halo — Habits that actually stick",
  description:
    "A minimalist habit tracker for iOS and Android. Build daily rituals, share with a partner, and finally make the small stuff stick.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
