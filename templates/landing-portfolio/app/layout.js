import "./globals.css"

export const metadata = {
  title: "StoicSoft — Independent product studio",
  description:
    "A product studio building the tools we wish existed. We design, engineer, and operate our own software from concept to launch.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
