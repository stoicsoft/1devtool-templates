export const site = {
  name: "ServerCompass Runbooks",
  product: "ServerCompass",
  description:
    "Markdown operations runbooks for incident response, alert handling, and postmortems.",
  eyebrow: "Operations docs",
  heroTitle: "Runbooks that hold up during incidents.",
  heroBody:
    "A calm operations docs starter for alerts, status updates, postmortems, and escalation policy using ServerCompass copy.",
  url: "https://runbooks.servercompass.local",
  repoLabel: "servercompass/runbooks",
  logo: "SR",
  primaryAction: {
    label: "Open incident room",
    href: "/docs/start/incident-room",
  },
  secondaryAction: {
    label: "Escalation policy",
    href: "/docs/reference/escalation-policy",
  },
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
  stats: [
    { label: "Playbooks", value: "12" },
    { label: "Review cycle", value: "30d" },
    { label: "Owners", value: "3" },
  ],
  theme: {
    "--accent": "#2563eb",
    "--accent-dark": "#1745a4",
    "--accent-soft": "#eaf1ff",
  },
}
