import "./globals.css"

export const metadata = {
  title: "anya.garden — A small corner of the internet",
  description:
    "A working notebook on the open web. Essays, notes, links, and what I&apos;m reading. Tended slowly by Anya Park.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
