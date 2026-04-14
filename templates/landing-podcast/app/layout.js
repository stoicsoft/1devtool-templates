import "./globals.css"

export const metadata = {
  title: "Signal — A weekly show on building software in public",
  description:
    "A weekly 45-minute conversation between indie founders about what's working, what broke, and what's next. Hosted by the StoicSoft studio.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
