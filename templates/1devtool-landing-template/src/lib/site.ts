export const site = {
  name: "their_project",
  url: "https://their-project.example",
  tagline: "Your calm command center for faster product work.",
  description:
    "their_project brings planning, execution, review, and launch work into one sharp workflow for teams that ship every week.",
  announcement: "Now onboarding early teams",
  primaryCta: "Start free",
  secondaryCta: "See workflow",
  heroStats: [
    { label: "Setup time", value: "12 min" },
    { label: "Launch assets", value: "24+" },
    { label: "Team handoffs", value: "-43%" },
  ],
  logos: ["Northstar", "Relay", "Orbit", "Patch", "Folio"],
  features: [
    {
      title: "Shared context",
      body: "Keep decisions, tasks, releases, and customer notes connected so work does not disappear between tools.",
    },
    {
      title: "Action-first boards",
      body: "Move from idea to shipped work with clear queues, owner visibility, and weekly momentum.",
    },
    {
      title: "Launch-ready pages",
      body: "Publish positioning, pricing, changelog, and customer proof without rebuilding the marketing stack.",
    },
    {
      title: "Fast review loops",
      body: "Give product, design, and engineering one place to ask for changes and close the loop.",
    },
  ],
  workflow: [
    "Capture the customer problem.",
    "Shape the offer and proof points.",
    "Review copy, visuals, and rollout tasks.",
    "Launch, measure, and iterate.",
  ],
  pricing: [
    { name: "Starter", price: "$19", body: "For one builder validating a new idea." },
    { name: "Team", price: "$49", body: "For small teams shipping a focused launch." },
    { name: "Scale", price: "$99", body: "For teams running multiple campaigns." },
  ],
  faqs: [
    {
      question: "Can I customize the page quickly?",
      answer: "Yes. Start in src/lib/site.ts, then replace the image in public/product-preview.png.",
    },
    {
      question: "Can I deploy this to Vercel?",
      answer: "Yes. It is a standard Next.js app, so Vercel, Netlify, and most Node hosts work.",
    },
    {
      question: "Where do I change colors?",
      answer: "Brand colors live in tailwind.config.ts and the page uses those semantic tokens throughout.",
    },
  ],
}

export type SiteConfig = typeof site
