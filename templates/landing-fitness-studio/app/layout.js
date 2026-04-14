import "./globals.css"

export const metadata = {
  title: "PulseFit — Train Beyond Limits",
  description:
    "Boutique strength, HIIT, and recovery sessions in a cinematic Brooklyn studio. Book your 7-day trial today.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
