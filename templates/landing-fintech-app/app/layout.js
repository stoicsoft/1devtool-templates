import "./globals.css"

export const metadata = {
  title: "Vaulta — The Financial OS for Modern Treasury",
  description:
    "Consolidate cash, automate reconciliations, and forecast runway across every account. The treasury platform finance teams switch to.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
