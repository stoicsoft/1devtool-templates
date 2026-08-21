import "./globals.css"

export const metadata = {
  title: "Bastion — Moderation Queue",
  description:
    "Trust and safety review queue with severity triage, classifier signals, cited policy text, account history, similar resolved cases, and keyboard decisions.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
