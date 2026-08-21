import "./globals.css"

export const metadata = {
  title: "Kiln — Image Studio",
  description:
    "Image generation studio with prompt and negative-prompt controls, style chips, aspect ratios, sampler parameters, a results grid, and batch history.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
