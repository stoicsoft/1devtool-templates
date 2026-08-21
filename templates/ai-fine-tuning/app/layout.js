import "./globals.css"

export const metadata = {
  title: "Anneal — Fine-tuning",
  description:
    "Fine-tuning dashboard with a run table, live loss curves, eval deltas against the base model, training config, and dataset inventory.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
