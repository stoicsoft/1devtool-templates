export function Icon({ name, className = "h-4 w-4", style }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.2-3.2" />
      </>
    ),
    rocket: <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M9 13l6-6a6 6 0 0 1 6-6 6 6 0 0 1-6 6l-6 6-3-3ZM14 8h.01" />,
    card: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </>
    ),
    plug: <path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-10 0V8ZM12 16v6" />,
    code: <path d="m8 6-5 6 5 6M16 6l5 6-5 6M14 4l-4 16" />,
    shield: <path d="M12 2.5 20 6v6c0 4.6-3.2 8.5-8 9.5-4.8-1-8-4.9-8-9.5V6l8-3.5Z" />,
    wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.1-2.1 2.5-2.5Z" />,
    doc: (
      <>
        <path d="M6 2h8l4 4v16H6z" />
        <path d="M14 2v4h4M9 12h6M9 16h4" />
      </>
    ),
    arrow: <path d="M5 12h14m0 0-6-6m6 6-6 6" />,
    back: <path d="M19 12H5m0 0 6 6m-6-6 6-6" />,
    chat: <path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12Z" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    thumbUp: <path d="M7 11v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3Zm0 0 4-8a2 2 0 0 1 2 2v3h5a2 2 0 0 1 2 2.3l-1.2 6A2 2 0 0 1 16.8 20H7" />,
    thumbDown: <path d="M17 13V4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-3Zm0 0-4 8a2 2 0 0 1-2-2v-3H6a2 2 0 0 1-2-2.3l1.2-6A2 2 0 0 1 7.2 4H17" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

export const CATS = [
  { icon: "rocket", title: "Getting started", desc: "Set up your workspace and invite your team.", n: 18, tone: "#c96442", slug: "reset-password" },
  { icon: "card", title: "Billing & plans", desc: "Invoices, upgrades, proration, and refunds.", n: 24, tone: "#629987", slug: "prorated-charges" },
  { icon: "plug", title: "Integrations", desc: "Connect Slack, GitHub, and 40+ tools.", n: 31, tone: "#827dbd", slug: "connect-slack" },
  { icon: "code", title: "Developer API", desc: "Authentication, webhooks, and rate limits.", n: 27, tone: "#98801f", slug: "rotate-api-keys" },
  { icon: "shield", title: "Security & privacy", desc: "SSO, data residency, and compliance.", n: 15, tone: "#c5621b", slug: "sso-okta" },
  { icon: "wrench", title: "Troubleshooting", desc: "Fix common errors and sync issues.", n: 22, tone: "#5e5d59", slug: "data-not-syncing" },
]

export const ARTICLES = {
  "reset-password": {
    title: "How do I reset my password?", category: "Getting started", time: "2 min", updated: "Aug 12, 2026",
    intro: "If you can't sign in, you can reset your password from the login screen in under a minute. You'll need access to the email address on your account.",
    steps: [
      "Go to the sign-in page and choose “Forgot password?”.",
      "Enter your account email and submit. We'll send a reset link within a minute.",
      "Open the email and click “Reset password” — the link is valid for 30 minutes.",
      "Choose a new password (at least 12 characters) and confirm. You'll be signed in automatically.",
    ],
    note: "Didn't get the email? Check spam, and make sure you're using the address you signed up with. Still stuck after 5 minutes? Contact support.",
  },
  "prorated-charges": {
    title: "Understanding prorated charges", category: "Billing & plans", time: "4 min", updated: "Aug 9, 2026",
    intro: "When you upgrade, downgrade, or add seats mid-cycle, we prorate the difference so you only pay for what you use. Here's how the math works.",
    steps: [
      "Your plan is billed on a fixed monthly cycle from your signup date.",
      "Upgrading mid-cycle charges the prorated difference for the days remaining.",
      "Downgrades apply as account credit against your next invoice — never a cash refund.",
      "Seat changes are prorated to the day at your plan's per-seat rate.",
    ],
    note: "Every proration line item appears on your next invoice with the exact date range it covers.",
  },
  "sso-okta": {
    title: "Setting up SSO with Okta", category: "Security & privacy", time: "6 min", updated: "Aug 5, 2026",
    intro: "Connect Okta so your team signs in with your identity provider. This requires an admin on both Okta and your workspace.",
    steps: [
      "In your workspace, open Settings → Security → SSO and copy the ACS URL and Entity ID.",
      "In Okta, create a new SAML 2.0 app and paste those values.",
      "Map the email, first name, and last name attributes.",
      "Assign the app to your users, then paste Okta's metadata URL back into your workspace and enable SSO.",
    ],
    note: "Enabling “Require SSO” will sign out members using password login. Keep one break-glass admin on password auth just in case.",
  },
  "rotate-api-keys": {
    title: "Rotating your API keys", category: "Developer API", time: "3 min", updated: "Aug 2, 2026",
    intro: "Rotate keys on a schedule or immediately if one is exposed. Rotation is zero-downtime when you overlap the old and new keys.",
    steps: [
      "Open Settings → API keys and create a new key alongside the existing one.",
      "Deploy the new key to your services and confirm traffic is flowing on it.",
      "Watch the “last used” timestamp on the old key drop to zero.",
      "Revoke the old key. Any lingering requests using it will start returning 401.",
    ],
    note: "Never commit keys to source control. Use environment variables or a secrets manager.",
  },
  "connect-slack": {
    title: "Connecting a Slack channel", category: "Integrations", time: "3 min", updated: "Jul 30, 2026",
    intro: "Post updates to Slack when items change status, ship, or get mentioned. You'll need permission to add apps to your Slack workspace.",
    steps: [
      "Open Settings → Integrations and choose Slack → Connect.",
      "Authorize the app and pick a default channel.",
      "Choose which events post to Slack (status changes, mentions, deploys).",
      "Send a test message to confirm the channel is receiving events.",
    ],
    note: "You can route different event types to different channels from the integration settings.",
  },
  "data-not-syncing": {
    title: "Why is my data not syncing?", category: "Troubleshooting", time: "5 min", updated: "Jul 28, 2026",
    intro: "Most sync issues come from an expired connection or a paused source. Work through these checks in order.",
    steps: [
      "Open the source and check its status — a red dot means the connection needs re-authorizing.",
      "Confirm the sync isn't paused and the schedule is active.",
      "Check that the connected account still has read access to the underlying data.",
      "Trigger a manual sync and watch the run log for the specific error.",
    ],
    note: "If the run log shows a permission error, re-connect the source with an account that has read access.",
  },
}

export function findArticle(slug) {
  return ARTICLES[slug] ? { slug, ...ARTICLES[slug] } : { slug: "reset-password", ...ARTICLES["reset-password"] }
}

export const RELATED = Object.entries(ARTICLES).map(([slug, a]) => ({ slug, title: a.title, category: a.category, time: a.time }))

export function Nav() {
  return (
    <nav className="border-b border-[var(--color-line)]">
      <div className="mx-auto flex h-[58px] max-w-[1080px] items-center gap-2 px-6">
        <a href="/" className="flex items-center gap-2">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
            <rect width="32" height="32" rx="8" fill="#141413" />
            <circle cx="16" cy="16" r="8" fill="none" stroke="#c96442" strokeWidth="2" />
            <path d="M13.5 13.5a2.5 2.5 0 1 1 3.2 3c-.7.4-.7.9-.7 1.5M16 21h.01" fill="none" stroke="#629987" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Acme Help</span>
        </a>
        <div className="ml-auto flex items-center gap-4 text-[13.5px]">
          <a className="hidden text-[var(--color-ink-2)] hover:text-[var(--color-ink)] sm:inline">Status</a>
          <a className="hidden text-[var(--color-ink-2)] hover:text-[var(--color-ink)] sm:inline">Community</a>
          <a className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-3 font-medium hover:bg-[var(--color-sunk)]">Back to app <Icon name="arrow" className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </nav>
  )
}
