import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1014",
        panel: "#121a1d",
        line: "rgba(255,255,255,0.12)",
        paper: "#f6f2e8",
        muted: "rgba(246,242,232,0.68)",
        mint: "#66e0b5",
        coral: "#f06c7a",
        amber: "#ffb86b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(102, 224, 181, 0.18)",
      },
    },
  },
  plugins: [],
}

export default config
