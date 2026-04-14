export const appConfig = {
  name: "their_project",
  url: "https://their_project.com",
  description:
    "A production-shaped SaaS starter with a dashboard, billing slots, team workflows, and Cloudflare-ready custom domains.",
  routingHostname: "cname.their_project.com",
  verificationPrefix: "_their_project-verify",
  supportEmail: "support@their_project.com",
}

export const demoUser = {
  name: "Maya Chen",
  email: "maya@example.com",
  role: "Owner",
  avatarUrl:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
}

export const metrics = [
  { label: "MRR", value: "$24.8k", delta: "+12.4%" },
  { label: "Active seats", value: "1,248", delta: "+8.1%" },
  { label: "Trial conversion", value: "18.6%", delta: "+3.2%" },
  { label: "Verified domains", value: "42", delta: "+9" },
]

export const onboarding = [
  {
    title: "Connect auth",
    body: "Replace the demo session helper with Auth.js, Clerk, or your existing identity provider.",
    status: "Ready",
  },
  {
    title: "Wire billing",
    body: "Point the checkout route at Stripe or LemonSqueezy and store subscription state in your database.",
    status: "Stubbed",
  },
  {
    title: "Launch domains",
    body: "Use the DNS plan and verification route to onboard customer-owned Cloudflare domains.",
    status: "Built in",
  },
]

export const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$19",
    description: "For solo builders validating a paid workflow.",
    features: ["One workspace", "3 team seats", "Basic analytics"],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$79",
    description: "For teams with live customers and domain onboarding.",
    features: ["Unlimited projects", "20 team seats", "Custom domains", "Priority support"],
  },
]

export const recentActivity = [
  "sam@company.com accepted an invite",
  "Growth plan checkout completed",
  "docs.customer.test requested SSL verification",
  "Usage limit warning sent to Acme Studio",
]

export const demoDomains = [
  {
    domain: "docs.customer.test",
    token: "demo_txt_token_replace_me",
    status: "Pending verification",
    ssl: "Waiting for DNS",
  },
]
