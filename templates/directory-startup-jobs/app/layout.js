import "./globals.css"

export const metadata = {
  title: "Roster — A small board of engineering jobs at indie-scale companies",
  description: "Hand-listed engineering roles with honest salary bands. No recruiter spam, no equity-only.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
