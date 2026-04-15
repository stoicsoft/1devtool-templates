export const site = {
  name: "ServerCompass API",
  product: "ServerCompass",
  description:
    "Markdown API reference for uptime checks, incidents, domains, and webhook automation.",
  eyebrow: "API reference",
  heroTitle: "Reference every endpoint without losing the reader.",
  heroBody:
    "Endpoint pages, signed webhook guidance, rate-limit notes, and ServerCompass developer copy all live in plain markdown.",
  url: "https://docs.servercompass.local",
  repoLabel: "servercompass/api",
  logo: "SC",
  primaryAction: {
    label: "Create a probe",
    href: "/docs/get-started/create-probe",
  },
  secondaryAction: {
    label: "Rate limits",
    href: "/docs/reference/rate-limits",
  },
  image:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
  stats: [
    { label: "Endpoint families", value: "6" },
    { label: "Webhook retries", value: "12" },
    { label: "Regions", value: "9" },
  ],
  theme: {
    "--accent": "#0a9f78",
    "--accent-dark": "#057254",
    "--accent-soft": "#e7f8f2",
  },
}
