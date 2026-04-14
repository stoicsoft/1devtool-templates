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
        ink: "#111111",
        cloud: "#f6f8f6",
        surface: "#ffffff",
        line: "#dfe5df",
        quiet: "#5f6b61",
        moss: "#2f7d57",
        jade: "#56c790",
        coral: "#f45d48",
        amber: "#f3b63f",
      },
      boxShadow: {
        panel: "0 18px 48px rgba(17, 17, 17, 0.08)",
      },
    },
  },
  plugins: [],
}

export default config
