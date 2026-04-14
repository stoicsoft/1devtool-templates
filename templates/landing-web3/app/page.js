const features = [
  { icon: "key", title: "Keys stay with you", body: "Helix is non-custodial by default. We never touch the signer; every movement is authorised on your hardware." },
  { icon: "route", title: "Multi-chain, one address book", body: "Ethereum, Base, Arbitrum, Solana, and four more. One address book, route selection on send." },
  { icon: "receipt", title: "Invoicing that settles itself", body: "Send an invoice, share a link. Helix handles the chain, the gas, and the receipt — you get the confirmation." },
  { icon: "shield", title: "Real audit trails", body: "Every transfer is signed, logged, and exportable to CSV + SOC-grade PDF for your accountant or regulator." },
  { icon: "wallet", title: "Fiat off-ramps in 48 markets", body: "Convert to USD, EUR, GBP, JPY, and 44 more at institutional rates. Settlement in under two hours." },
  { icon: "bolt", title: "Gas abstraction", body: "Transactions are quoted in stables. We sponsor gas on the back end — your team never holds the native token." },
]

const chains = [
  { n: "Ethereum", t: "L1" }, { n: "Base", t: "L2" }, { n: "Arbitrum", t: "L2" }, { n: "Optimism", t: "L2" },
  { n: "Solana", t: "L1" }, { n: "Polygon", t: "L2" }, { n: "Avalanche", t: "L1" }, { n: "zkSync", t: "L2" },
]

const stats = [
  { k: "$1.4B", v: "Annualised settlement volume" },
  { k: "48", v: "Off-ramp markets" },
  { k: "0", v: "Custodial incidents · ever" },
  { k: "3.2s", v: "Median invoice-to-receipt" },
]

const payroll = [
  { name: "Clara Figueira", wallet: "0x4F2…9a21", role: "Design · Lisbon", amount: "4,200 USDC", status: "Sent" },
  { name: "Dante Okafor", wallet: "0x84e…1c04", role: "Eng · Lagos", amount: "6,800 USDC", status: "Sent" },
  { name: "Mei Wong", wallet: "0xe27…4d52", role: "Product · Singapore", amount: "5,400 USDC", status: "Pending · sign" },
  { name: "Jonas Park", wallet: "0x19a…bc8f", role: "Ops · Seoul", amount: "3,800 USDC", status: "Queued" },
]

const tokenomics = [
  { k: "1.0B", v: "HLX total supply · fixed" },
  { k: "4%", v: "Protocol treasury (4-yr vest)" },
  { k: "18%", v: "Team &amp; early backers (4-yr vest)" },
  { k: "62%", v: "Community · airdrop + operations" },
  { k: "16%", v: "Ecosystem grants &amp; liquidity" },
]

const roadmap = [
  { q: "Q2 · 2026", t: "Fiat ramps in LatAm (BRL, MXN, ARS)", s: "Shipping" },
  { q: "Q3 · 2026", t: "Threshold signatures · hardware-agnostic", s: "In progress" },
  { q: "Q4 · 2026", t: "Programmable invoices · escrow primitives", s: "Designing" },
  { q: "Q1 · 2027", t: "Helix Mobile · iOS + Android", s: "Research" },
]

const faqs = [
  { q: "Is Helix custodial?", a: "No. Helix never holds your keys or funds. Every signature originates in your wallet or hardware device. We only provide the routing, audit trail, and fiat off-ramp orchestration." },
  { q: "Which chains are supported?", a: "Eight at launch, with a clear roadmap for ten more. The address book is unified across all supported chains." },
  { q: "Has Helix been audited?", a: "Yes — by Trail of Bits and Zellic. Reports are public and linked from our security page. We maintain an active bug bounty on Immunefi." },
  { q: "What about compliance?", a: "Helix generates SOC-grade reports for every movement. We partner with licensed off-ramp providers in 48 markets and enforce Travel Rule where applicable." },
]

function Mark() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      <path d="M6 6c4 0 10 4 10 10s6 10 10 10M26 6c-4 0-10 4-10 10s-6 10-10 10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

function Icon({ name, className = "h-5 w-5" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "key") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="8" cy="13" r="4"/><path d="m12 13 10-2-1 3 2 1-2 1-1 3-9-6Z"/></svg>)
  if (name === "route") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M9 6h5a5 5 0 0 1 0 10h-4a5 5 0 0 0 0 2"/></svg>)
  if (name === "receipt") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 3h14v18l-3-2-3 2-3-2-3 2-2-2V3Z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>)
  if (name === "shield") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3 4 6v6c0 5 3.5 8.6 8 9 4.5-.4 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>)
  if (name === "wallet") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M17 14h2"/><path d="M3 10V6a2 2 0 0 1 2-2h13"/></svg>)
  if (name === "bolt") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "dot") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><circle cx="12" cy="12" r="4"/></svg>)
  if (name === "plug") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M9 3v4M15 3v4M6 7h12v3a6 6 0 0 1-12 0V7ZM12 16v5"/></svg>)
  return null
}

function PayrollCard() {
  return (
    <div className="relative rounded-3xl border border-[#1c1f3e] bg-gradient-to-b from-[#0e0f26] to-[#07081a] p-5 shadow-[0_40px_120px_-30px_rgba(69,243,167,0.25)]">
      <div className="flex items-center justify-between border-b border-[#1c1f3e] pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff4d8a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d4ff4a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#45f3a7]" />
          <span className="ml-3 font-mono text-xs text-[#b6bad4]/60">helix.app / payroll</span>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-[#45f3a7]/30 bg-[#45f3a7]/10 px-2 py-0.5 text-[10px] font-medium text-[#45f3a7]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#45f3a7] glow-pulse" /> Live
        </span>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#b6bad4]/60">April payroll · 24 payees</p>
          <p className="font-mono mt-2 text-4xl font-semibold">$184,420<span className="text-sm text-[#b6bad4]/60"> USDC</span></p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#b6bad4]/60">Network · Base</p>
          <p className="font-mono mt-2 text-sm text-[#45f3a7]">Est. gas 0 · sponsored</p>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        {payroll.map((p) => (
          <div key={p.name} className="flex items-center gap-3 rounded-xl border border-[#1c1f3e] bg-black/40 px-3 py-2.5 text-xs">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#45f3a7] to-[#4d7aff] font-mono text-[10px] font-semibold text-[#040410]">
              {p.name.split(" ").map((n) => n[0]).join("")}
            </span>
            <div className="flex-1 min-w-0">
              <p className="truncate font-medium">{p.name}</p>
              <p className="font-mono text-[10px] text-[#b6bad4]/50">{p.wallet} · {p.role}</p>
            </div>
            <span className="font-mono text-sm text-[#d4ff4a]">{p.amount}</span>
            <span className={`font-mono text-[10px] uppercase tracking-widest ${
              p.status === "Sent" ? "text-[#45f3a7]" : p.status.startsWith("Pending") ? "text-[#d4ff4a]" : "text-[#b6bad4]/60"
            }`}>{p.status}</span>
          </div>
        ))}
      </div>

      <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#45f3a7] px-5 py-3 text-sm font-semibold text-[#040410] transition hover:bg-[#d4ff4a]">
        Sign all transactions <Icon name="arrow" className="h-4 w-4" />
      </button>
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#040410] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] neon-bg" />
      <div className="pointer-events-none absolute inset-0 cyber-grid" />

      {/* Nav */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold">
            <span className="text-[#45f3a7]"><Mark /></span>
            Helix
            <span className="ml-1 rounded-md border border-[#1c1f3e] bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-[#b6bad4]">v2 · mainnet</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-[#b6bad4] md:flex">
            <a href="#product" className="hover:text-[#45f3a7]">Product</a>
            <a href="#chains" className="hover:text-[#45f3a7]">Chains</a>
            <a href="#security" className="hover:text-[#45f3a7]">Security</a>
            <a href="#token" className="hover:text-[#45f3a7]">HLX</a>
            <a href="#roadmap" className="hover:text-[#45f3a7]">Roadmap</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#" className="hidden items-center gap-1.5 rounded-full border border-[#1c1f3e] px-3 py-1.5 text-xs text-[#b6bad4] hover:border-[#45f3a7] hover:text-[#45f3a7] md:inline-flex">
              <Icon name="plug" className="h-3.5 w-3.5" /> Launch app
            </a>
            <a href="#connect" className="group inline-flex items-center gap-2 rounded-full bg-[#45f3a7] px-4 py-2 text-sm font-semibold text-[#040410] transition hover:bg-[#d4ff4a]">
              Connect wallet <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#45f3a7]/30 bg-[#45f3a7]/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#45f3a7]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#45f3a7] glow-pulse" />
                Live on mainnet · audited by Trail of Bits &amp; Zellic
              </span>
              <h1 className="mt-6 text-[clamp(2.8rem,6.5vw,5.75rem)] font-semibold leading-[1] tracking-tight">
                Payments that keep{" "}
                <span className="bg-gradient-to-r from-[#45f3a7] via-[#4d7aff] to-[#ff4d8a] bg-clip-text text-transparent">
                  your keys
                </span>
                <br className="hidden md:block" />{" "}
                — and your receipts.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[#b6bad4]">
                Helix is a non-custodial payment rail for independent teams. Stablecoins in, fiat out, full
                audit trail by default. Eight chains, zero surprises.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#connect" className="group inline-flex items-center gap-2 rounded-full bg-[#45f3a7] px-6 py-3.5 text-sm font-semibold text-[#040410] shadow-[0_20px_60px_-20px_rgba(69,243,167,0.6)] transition hover:bg-[#d4ff4a]">
                  <Icon name="wallet" className="h-4 w-4" /> Connect a wallet
                </a>
                <a href="#product" className="inline-flex items-center gap-2 rounded-full border border-[#1c1f3e] px-5 py-3.5 text-sm font-medium text-white/90 transition hover:border-[#45f3a7] hover:text-[#45f3a7]">
                  See a 90-second demo
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-[#b6bad4]/70">
                <span className="flex items-center gap-1.5"><Icon name="check" className="h-3.5 w-3.5 text-[#45f3a7]" /> Non-custodial</span>
                <span className="flex items-center gap-1.5"><Icon name="check" className="h-3.5 w-3.5 text-[#45f3a7]" /> 8 chains supported</span>
                <span className="flex items-center gap-1.5"><Icon name="check" className="h-3.5 w-3.5 text-[#45f3a7]" /> Fiat off-ramp, 48 markets</span>
              </div>
            </div>

            <div>
              <PayrollCard />
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="relative overflow-hidden border-y border-[#1c1f3e] bg-black/40 py-4">
          <div className="flex marquee gap-10 whitespace-nowrap font-mono text-xs text-[#b6bad4]">
            {[
              "HLX · $0.184 · +3.2% 24h",
              "USDC · 1.000 · stable",
              "ETH · $2,840 · +0.8%",
              "Invoices settled 24h · 1,482",
              "Payroll sent this week · $14.2M",
              "Median settlement · 3.2s",
            ].concat([
              "HLX · $0.184 · +3.2% 24h",
              "USDC · 1.000 · stable",
              "ETH · $2,840 · +0.8%",
              "Invoices settled 24h · 1,482",
              "Payroll sent this week · $14.2M",
              "Median settlement · 3.2s",
            ]).map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="text-[#45f3a7]">●</span>
                <span>{t}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Chains */}
      <section id="chains" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-center text-xs uppercase tracking-[0.22em] text-[#b6bad4]/60">
            Supported today · more on the way
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
            {chains.map((c) => (
              <div key={c.n} className="rounded-2xl border border-[#1c1f3e] bg-white/[0.02] p-4 text-center transition hover:border-[#45f3a7]/40 hover:bg-white/[0.05]">
                <span className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#45f3a7]/20 to-[#4d7aff]/10 text-[#45f3a7]">
                  <Icon name="dot" className="h-3 w-3" />
                </span>
                <p className="mt-3 text-sm font-semibold">{c.n}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#b6bad4]/60">{c.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="product" className="relative z-10 border-t border-[#1c1f3e]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#45f3a7]">Platform</p>
            <h2 className="mt-3 text-5xl font-semibold leading-[1.02] md:text-6xl">
              Everything you need. <br />Nothing of yours.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className="group relative overflow-hidden rounded-3xl border border-[#1c1f3e] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 transition hover:border-[#45f3a7]/40">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#45f3a7]/0 blur-3xl transition group-hover:bg-[#45f3a7]/20" />
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#45f3a7]/25 to-[#4d7aff]/10 text-[#45f3a7]">
                  <Icon name={f.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-[#b6bad4]">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative z-10 border-y border-[#1c1f3e] bg-black/30">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v} className="border-l border-[#1c1f3e] pl-6">
              <p className="bg-gradient-to-r from-[#45f3a7] to-[#4d7aff] bg-clip-text text-5xl font-semibold text-transparent">{s.k}</p>
              <p className="mt-2 text-sm text-[#b6bad4]">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section id="security" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#45f3a7]">Security · audits</p>
              <h2 className="mt-3 text-4xl font-semibold leading-[1.05] md:text-5xl">
                Non-custodial isn&apos;t a marketing claim — it&apos;s the architecture.
              </h2>
              <p className="mt-6 max-w-lg text-[#b6bad4]">
                Every signer stays on your hardware. Every movement produces a cryptographic receipt. Two
                independent audits, one active bug bounty, zero custodial incidents since launch.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { t: "Trail of Bits", d: "Initial audit · 2025" },
                { t: "Zellic", d: "Secondary audit · 2026" },
                { t: "Immunefi", d: "Active bug bounty · up to $250k" },
                { t: "MPC + WebAuthn", d: "Hardware-backed signing" },
                { t: "Open-source signer", d: "Reproducible builds" },
                { t: "SOC-grade logs", d: "CSV + PDF exports" },
              ].map((b) => (
                <div key={b.t} className="rounded-2xl border border-[#1c1f3e] bg-white/[0.02] p-4">
                  <div className="flex items-center gap-2 text-[#45f3a7]">
                    <Icon name="shield" className="h-4 w-4" />
                    <p className="text-sm font-semibold text-white">{b.t}</p>
                  </div>
                  <p className="mt-2 text-xs text-[#b6bad4]/75">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="token" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-[36px] border border-[#1c1f3e] bg-gradient-to-br from-[#0e0f26] via-[#07081a] to-[#040410] p-10 md:p-16">
            <div className="absolute -right-20 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, #45f3a7, transparent 60%)" }} />
            <div className="relative grid gap-10 md:grid-cols-[1fr_1.2fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#45f3a7]">HLX · tokenomics</p>
                <h2 className="mt-3 text-4xl font-semibold leading-[1.05] md:text-5xl">
                  A fixed supply.<br />
                  <span className="bg-gradient-to-r from-[#45f3a7] to-[#ff4d8a] bg-clip-text text-transparent">An honest distribution.</span>
                </h2>
                <p className="mt-6 max-w-md text-[#b6bad4]">
                  HLX is the governance &amp; gas-sponsorship token for Helix. Fixed supply, public vesting
                  schedules, and a treasury that can&apos;t move without a full governance vote.
                </p>

                <div className="mt-8 rounded-2xl border border-[#1c1f3e] bg-white/[0.03] p-5">
                  <p className="font-mono text-xs uppercase tracking-widest text-[#b6bad4]/60">Contract</p>
                  <p className="font-mono mt-1 text-sm text-[#45f3a7]">0x84e2…9b71 · Ethereum</p>
                  <p className="font-mono mt-2 text-xs text-[#b6bad4]/50">Verified · Etherscan · renounced upgrades</p>
                </div>
              </div>

              <div className="space-y-3">
                {tokenomics.map((t) => (
                  <div key={t.v} className="flex items-center justify-between rounded-2xl border border-[#1c1f3e] bg-white/[0.02] p-4">
                    <div>
                      <p className="font-mono text-3xl font-semibold text-[#45f3a7]">{t.k}</p>
                      <p className="mt-1 text-sm text-[#b6bad4]" dangerouslySetInnerHTML={{__html: t.v}} />
                    </div>
                    <div className="h-2 w-32 rounded-full bg-[#1c1f3e] overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-[#45f3a7] to-[#4d7aff]" style={{ width: t.k.includes("%") ? t.k : "4%" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#45f3a7]">Roadmap</p>
            <h2 className="mt-3 text-4xl font-semibold leading-[1.05] md:text-5xl">The next four quarters.</h2>
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-4">
            {roadmap.map((r) => (
              <li key={r.q} className="rounded-3xl border border-[#1c1f3e] bg-white/[0.02] p-6">
                <p className="font-mono text-xs text-[#45f3a7]">{r.q}</p>
                <p className="mt-3 text-lg font-semibold">{r.t}</p>
                <span className={`mt-4 inline-flex rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-widest ${
                  r.s === "Shipping" ? "border-[#45f3a7]/40 bg-[#45f3a7]/10 text-[#45f3a7]" :
                  r.s === "In progress" ? "border-[#d4ff4a]/40 bg-[#d4ff4a]/10 text-[#d4ff4a]" :
                  "border-[#1c1f3e] text-[#b6bad4]"
                }`}>{r.s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 border-t border-[#1c1f3e]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#45f3a7]">FAQ</p>
              <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Common questions.</h2>
            </div>
            <div className="divide-y divide-[#1c1f3e] rounded-3xl border border-[#1c1f3e] bg-white/[0.02]">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                    {f.q}
                    <span className="ml-4 grid h-7 w-7 place-items-center rounded-full border border-[#1c1f3e] text-[#b6bad4]/60 transition group-open:rotate-45 group-open:border-[#45f3a7] group-open:text-[#45f3a7]">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#b6bad4]/85">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect CTA */}
      <section id="connect" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-[36px] border border-[#1c1f3e] p-10 md:p-16"
               style={{ background: "radial-gradient(700px circle at 15% 0%, rgba(69,243,167,0.28), transparent 55%), radial-gradient(700px circle at 85% 100%, rgba(77,122,255,0.3), transparent 55%), #07081a" }}>
            <div className="relative grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
              <div>
                <h2 className="text-4xl font-semibold leading-[1.05] md:text-6xl">
                  Ship payroll in five minutes.<br />
                  <span className="bg-gradient-to-r from-[#45f3a7] to-[#ff4d8a] bg-clip-text text-transparent">Keep your keys forever.</span>
                </h2>
                <p className="mt-5 max-w-lg text-[#b6bad4]">
                  Helix runs on mainnet. Connect your wallet, import one address, send a test transaction —
                  you&apos;re done.
                </p>
              </div>
              <div className="space-y-3">
                <a href="#" className="inline-flex w-full items-center justify-between gap-2 rounded-2xl bg-[#45f3a7] px-6 py-5 text-sm font-semibold text-[#040410] transition hover:bg-[#d4ff4a]">
                  <span className="flex items-center gap-2"><Icon name="wallet" className="h-5 w-5" /> Connect wallet</span>
                  <Icon name="arrow" className="h-5 w-5" />
                </a>
                <a href="#" className="inline-flex w-full items-center justify-between gap-2 rounded-2xl border border-[#1c1f3e] px-6 py-5 text-sm font-semibold text-white/90 transition hover:border-[#45f3a7]">
                  <span className="flex items-center gap-2"><Icon name="plug" className="h-5 w-5" /> Launch on testnet</span>
                  <Icon name="arrow" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#1c1f3e]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 text-lg font-semibold">
              <span className="text-[#45f3a7]"><Mark /></span> Helix
            </a>
            <p className="mt-4 max-w-sm text-sm text-[#b6bad4]/80">
              A non-custodial payment rail from StoicSoft. Audited by Trail of Bits &amp; Zellic. Running on
              mainnet since 2025.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#b6bad4]/50">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-[#b6bad4]">
              <li><a href="#product" className="hover:text-[#45f3a7]">Platform</a></li>
              <li><a href="#chains" className="hover:text-[#45f3a7]">Chains</a></li>
              <li><a href="#security" className="hover:text-[#45f3a7]">Security</a></li>
              <li><a href="#" className="hover:text-[#45f3a7]">Docs</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#b6bad4]/50">Token</p>
            <ul className="mt-3 space-y-2 text-sm text-[#b6bad4]">
              <li><a href="#token" className="hover:text-[#45f3a7]">HLX</a></li>
              <li><a href="#roadmap" className="hover:text-[#45f3a7]">Roadmap</a></li>
              <li><a href="#" className="hover:text-[#45f3a7]">Governance</a></li>
              <li><a href="#" className="hover:text-[#45f3a7]">Bug bounty</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#b6bad4]/50">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-[#b6bad4]">
              <li><a href="#" className="hover:text-[#45f3a7]">About StoicSoft</a></li>
              <li><a href="#" className="hover:text-[#45f3a7]">Careers</a></li>
              <li><a href="#" className="hover:text-[#45f3a7]">Press kit</a></li>
              <li><a href="mailto:hello@helix.xyz" className="hover:text-[#45f3a7]">hello@helix.xyz</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#1c1f3e]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-[#b6bad4]/50">
            <span>© {new Date().getFullYear()} Helix Labs — a StoicSoft product. Not financial advice.</span>
            <div className="flex gap-5">
              <a href="#" className="hover:text-[#45f3a7]">Privacy</a>
              <a href="#" className="hover:text-[#45f3a7]">Terms</a>
              <a href="#" className="hover:text-[#45f3a7]">Contract</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
