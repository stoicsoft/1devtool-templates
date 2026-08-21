import "./globals.css"

export const metadata = {
  title: "Relay — Agent Console",
  description:
    "Operations console for autonomous agents: run history, tool-call traces, token spend, and live logs.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
