import "./globals.css"

export const metadata = {
  title: "Meridian — Model Playground",
  description:
    "Side-by-side model playground: run one prompt across models, tune parameters, and compare cost, latency, and output.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
