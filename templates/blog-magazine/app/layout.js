import "./globals.css"

export const metadata = {
  title: "Field & Form — A quarterly magazine on craft, software, and slow living",
  description:
    "A digital-first magazine from the StoicSoft studio. Long-form writing on independent software, design, and the quiet work of building something that lasts.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
