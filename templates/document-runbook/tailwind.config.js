/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "ui-monospace", "monospace"],
      },
      colors: {
        paper: "#f7f7f4",
        ink: "#171915",
        muted: "#646860",
        line: "#deded7",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(23, 25, 21, 0.08)",
      },
    },
  },
  plugins: [],
}

module.exports = config
