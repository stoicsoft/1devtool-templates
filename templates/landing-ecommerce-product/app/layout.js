import "./globals.css"

export const metadata = {
  title: "Field No. 03 — The builder&apos;s notebook",
  description:
    "A 192-page notebook for builders. Threadbound, hand-numbered, printed on 120gsm cream stock. Made in small batches by the StoicSoft studio.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
