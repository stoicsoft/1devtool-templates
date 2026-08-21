import "./globals.css"

export const metadata = {
  title: "Cadence — Meeting Transcription",
  description:
    "Meeting transcription workspace with a scrubbable waveform, speaker diarization, flagged moments, an AI summary, and extracted action items.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
