import "./globals.css"

export const metadata = {
  title: "Lumen — A thinking partner that shows its reasoning",
  description:
    "Editorial ivory landing page for an AI assistant: conversation demo, capability sections, workflow, testimonials, pricing, and FAQ.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
