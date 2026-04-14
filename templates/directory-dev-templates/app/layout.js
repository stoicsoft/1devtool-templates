import "./globals.css"

export const metadata = {
  title: "Starters — A registry of production-grade code starters",
  description: "Hand-reviewed Next.js, Electron, and React Native templates. All MIT.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
