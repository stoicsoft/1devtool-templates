const practices = [
  { n: "01", t: "Venture formation", b: "Delaware incorporations, LLC conversions, founder vesting, cap-table cleanups, and the uncomfortable conversations the template providers don&apos;t mention." },
  { n: "02", t: "Financings & SAFEs", b: "Pre-seed to Series C. Term-sheet review, side-letter strategy, and the quiet diligence that keeps a close on schedule." },
  { n: "03", t: "Mergers & acquisitions", b: "Asset and stock deals from $2M to $200M. Negotiating earnouts, reps & warranties, and the escrow schedules that actually pay." },
  { n: "04", t: "Employment & equity", b: "83(b) elections, RSU plans, consulting contracts, non-compete enforceability, and the hard separations done with grace." },
  { n: "05", t: "Commercial contracts", b: "MSAs, DPAs, SaaS terms, and the enterprise redlines your first security questionnaire will unearth." },
  { n: "06", t: "Regulatory & data", b: "GDPR, CCPA, HIPAA adjacency, and the sensible guardrails for AI-powered products shipping in 2026." },
]

const partners = [
  { name: "Maya Hollingsworth", role: "Founding partner", bar: "NY, DE · 2009", focus: "Venture formation · M&A", hue: "from-[#c4a059] to-[#d9ba72]" },
  { name: "Anton Price", role: "Founding partner", bar: "NY · 2011 · CA · 2014", focus: "Financings · secondaries", hue: "from-[#1c2a48] to-[#c4a059]" },
  { name: "Dr. Iris Tanaka", role: "Partner · Regulatory", bar: "NY, DE · 2013", focus: "Data privacy · AI governance", hue: "from-[#14203a] to-[#8d9bb5]" },
  { name: "Rowan McAllister", role: "Partner · UK", bar: "England & Wales · 2015", focus: "Cross-border · employment", hue: "from-[#d9ba72] to-[#e8dfc8]" },
]

const clients = [
  "StoicSoft", "1DevTool", "ServerCompass", "Aether", "Parallel", "Routine", "Tessera", "Orbital",
]

const matters = [
  { k: "$2.4B", v: "Aggregate transaction value · trailing 5 yrs" },
  { k: "320+", v: "Founder clients actively represented" },
  { k: "34", v: "Closed M&A transactions since 2020" },
  { k: "14 yrs", v: "Average partner tenure at the firm" },
]

const testimonials = [
  { q: "Hollingsworth & Price ran our Series B close with a calm that made our board feel like this was a Tuesday. Our diligence room was cleaner than some of our customers' production systems.", a: "Priya Kapoor", r: "COO, StoicSoft" },
  { q: "Maya talks straight. When the first term sheet needed a tough reply, she drafted it in thirty minutes and I didn't have to soften a sentence.", a: "Jonas Park", r: "Founder, Routine" },
]

const faqs = [
  { q: "Do you work on fixed fees?", a: "Yes — for formation, financings, and most commercial contract work. Litigation and complex M&A run hourly, with monthly caps agreed in writing at the start." },
  { q: "Can you represent my first startup even if we haven&apos;t raised?", a: "Yes. Roughly a third of our roster is pre-revenue. The goal is to catch the small things that become expensive at the Series A — not to bill you on a retainer before you&apos;re ready." },
  { q: "Where are you licensed?", a: "NY, DE, and CA in the US; England & Wales in the UK. For filings outside those jurisdictions we maintain relationships with fourteen correspondent firms across Europe and APAC." },
  { q: "Do you take equity as compensation?", a: "In select cases, paired with a reduced cash retainer. We treat this strictly and never exceed 0.25% on a fully diluted basis for a single engagement." },
]

function Monogram() {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden>
      <rect x="1" y="1" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="4" y="4" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <text x="50%" y="56%" textAnchor="middle" dominantBaseline="middle" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="20" fontWeight="500" fill="currentColor">H&amp;P</text>
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "scale") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3v18M3 21h18M6 9l-3 7a4 4 0 0 0 6 0L6 9Zm12 0-3 7a4 4 0 0 0 6 0L18 9ZM4 6l16-2"/></svg>)
  if (name === "book") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4Z"/><path d="M4 4a4 4 0 0 1 4 4v12"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>)
  if (name === "phone") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 4.2 2 2 0 0 1 5.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L9 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.8 2.3Z"/></svg>)
  return null
}

export default function Home() {
  return (
    <div className="relative bg-[#0d1426] text-[#f3ede0]">
      <div className="pointer-events-none fixed inset-0 texture opacity-30" />

      {/* Masthead */}
      <header className="relative z-20">
        <div className="deco-border h-px bg-transparent" />
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#" className="flex items-center gap-3 text-[#c4a059]">
            <Monogram />
            <div>
              <p className="font-serif text-lg italic text-[#f3ede0]">Hollingsworth &amp; Price</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.28em] text-[#8d9bb5]">Counselors at law · New York &amp; London</p>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[#e8dfc8]/80 md:flex">
            <a href="#practices" className="gold-underline">Practice areas</a>
            <a href="#partners" className="gold-underline">Partners</a>
            <a href="#matters" className="gold-underline">Matters</a>
            <a href="#contact" className="gold-underline">Contact</a>
          </nav>
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-sm border border-[#c4a059] bg-[#c4a059]/10 px-4 py-2 text-sm font-medium text-[#c4a059] transition hover:bg-[#c4a059] hover:text-[#0d1426]">
            Request consultation <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
        <div className="deco-border h-px bg-transparent" />
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#c4a059]">
            <span className="h-px w-10 bg-[#c4a059]" />
            Established in 2009
          </p>

          <h1 className="font-serif mt-8 text-[clamp(3rem,8vw,7.5rem)] leading-[1] tracking-tight">
            Counsel for the <em className="italic text-[#c4a059]">builders</em>
            <br />
            of consequential <em className="italic">companies.</em>
          </h1>

          <div className="mt-12 grid gap-12 md:grid-cols-[1.2fr_1fr]">
            <p className="font-serif max-w-2xl text-2xl italic leading-relaxed text-[#e8dfc8]">
              A boutique law firm of twenty-four attorneys representing technology founders, venture
              investors, and independent studios on the work that shapes a company&apos;s next decade.
            </p>
            <div className="grid grid-cols-2 gap-6 border-l border-[#2a3758] pl-8">
              <div>
                <p className="font-serif text-4xl italic text-[#c4a059]">24</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#8d9bb5]">Attorneys on roster</p>
              </div>
              <div>
                <p className="font-serif text-4xl italic text-[#c4a059]">320+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#8d9bb5]">Active founder clients</p>
              </div>
              <div>
                <p className="font-serif text-4xl italic text-[#c4a059]">$2.4B</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#8d9bb5]">Transaction value · 5yr</p>
              </div>
              <div>
                <p className="font-serif text-4xl italic text-[#c4a059]">NY · LDN</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#8d9bb5]">Twin offices</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-sm bg-[#c4a059] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0d1426] transition hover:bg-[#d9ba72]">
              Request a consultation
              <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#practices" className="inline-flex items-center gap-2 rounded-sm border border-[#8d9bb5]/40 px-5 py-3.5 text-sm uppercase tracking-[0.18em] text-[#e8dfc8] transition hover:border-[#c4a059] hover:text-[#c4a059]">
              Practice areas
            </a>
            <span className="flex items-center gap-2 pl-2 text-xs text-[#8d9bb5]">
              <span className="h-2 w-2 rounded-full bg-[#c4a059]" /> Currently accepting new matters · Q2 &apos;26
            </span>
          </div>
        </div>

        <div className="deco-border h-px" />
      </section>

      {/* Practice areas */}
      <section id="practices" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#c4a059]">Practice areas</p>
              <h2 className="font-serif mt-4 text-5xl italic leading-[1.05] md:text-6xl">
                Six practices.<br />
                One partnership.
              </h2>
              <p className="mt-6 max-w-md text-[#e8dfc8]/80">
                We keep the list short on purpose. Each partner leads a practice they&apos;ve spent a decade
                in, and we refer work we aren&apos;t the best fit for to firms we&apos;d use ourselves.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {practices.map((p) => (
                <li key={p.n} className="group rounded-sm border border-[#2a3758] bg-[#14203a] p-6 transition hover:border-[#c4a059]">
                  <p className="font-serif text-2xl italic text-[#c4a059]">{p.n}</p>
                  <p className="font-serif mt-3 text-2xl">{p.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#e8dfc8]/75" dangerouslySetInnerHTML={{__html: p.b.replaceAll('&apos;', '&rsquo;')}} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="deco-border h-px" />
      </section>

      {/* Partners */}
      <section id="partners" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#c4a059]">The partners</p>
              <h2 className="font-serif mt-3 text-5xl italic leading-[1.05] md:text-6xl">
                People who answer the email.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-[#e8dfc8]/75">
              Every engagement is partner-led from the first call. Associates contribute; partners draft,
              negotiate, and sign.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {partners.map((p) => (
              <article key={p.name} className="rounded-sm border border-[#2a3758] bg-[#14203a] p-5">
                <div className={`relative aspect-[4/5] overflow-hidden rounded-sm bg-gradient-to-br ${p.hue}`}>
                  <div className="absolute inset-0 texture opacity-40" />
                  <span className="absolute bottom-4 left-4 font-serif text-6xl italic text-[#0d1426]">{p.name.split(" ").map((n) => n[0]).join("")}</span>
                </div>
                <p className="font-serif mt-5 text-2xl italic">{p.name}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#c4a059]">{p.role}</p>
                <p className="mt-3 text-xs text-[#8d9bb5]">Bar: {p.bar}</p>
                <p className="mt-1 text-xs text-[#8d9bb5]">Focus: {p.focus}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="deco-border h-px" />
      </section>

      {/* Matters */}
      <section id="matters" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#c4a059]">Selected matters</p>
              <h2 className="font-serif mt-4 text-5xl italic leading-[1.05] md:text-6xl">
                A ledger of quiet wins.
              </h2>
              <p className="mt-6 max-w-md text-[#e8dfc8]/80">
                We don&apos;t publish deal announcements. The best of our work is invisible to the outside
                world. These numbers are the nearest we&apos;ll come to a résumé.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {matters.map((m) => (
                <div key={m.v} className="rounded-sm border border-[#2a3758] bg-[#14203a] p-6">
                  <p className="font-serif text-5xl italic text-[#c4a059]">{m.k}</p>
                  <p className="mt-2 text-sm text-[#e8dfc8]/80">{m.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <p className="text-center text-xs uppercase tracking-[0.28em] text-[#8d9bb5]">Select clients, past &amp; present</p>
            <div className="mt-8 grid grid-cols-2 items-center gap-x-12 gap-y-6 sm:grid-cols-4 md:grid-cols-8">
              {clients.map((c) => (
                <p key={c} className="font-serif text-center text-xl italic text-[#8d9bb5] transition hover:text-[#c4a059]">{c}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="deco-border h-px" />
      </section>

      {/* Testimonials */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.a} className="rounded-sm border border-[#2a3758] bg-[#14203a] p-8">
                <Icon name="scale" className="h-6 w-6 text-[#c4a059]" />
                <blockquote className="font-serif mt-6 text-2xl italic leading-snug md:text-3xl" dangerouslySetInnerHTML={{__html: `&ldquo;${t.q.replaceAll("'", "&rsquo;")}&rdquo;`}} />
                <figcaption className="mt-8 border-t border-[#2a3758] pt-5 text-sm">
                  <p className="font-semibold text-[#f3ede0]">{t.a}</p>
                  <p className="text-[#8d9bb5]">{t.r}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="deco-border h-px" />
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#c4a059]">Request consultation</p>
              <h2 className="font-serif mt-3 text-5xl italic leading-[1.05] md:text-6xl">
                Write to us directly.
              </h2>
              <p className="mt-6 max-w-md text-[#e8dfc8]/80">
                The first thirty minutes are on us. We reply within one business day; most consultations are
                scheduled inside the same week.
              </p>

              <div className="mt-10 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Icon name="mail" className="mt-0.5 h-5 w-5 text-[#c4a059]" />
                  <a href="mailto:office@hollingsworthprice.com" className="gold-underline">office@hollingsworthprice.com</a>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="phone" className="mt-0.5 h-5 w-5 text-[#c4a059]" />
                  <p>
                    New York · +1 (212) 555-0184<br />
                    London · +44 (0)20 7946 0821
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="book" className="mt-0.5 h-5 w-5 text-[#c4a059]" />
                  <p>
                    40 Water Street · 22nd Floor · New York, NY 10004<br />
                    58 Lincoln&apos;s Inn Fields · London WC2A 3LJ
                  </p>
                </div>
              </div>
            </div>

            <form className="rounded-sm border border-[#2a3758] bg-[#14203a] p-8">
              <p className="font-serif text-2xl italic text-[#c4a059]">Brief us</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <input type="text" placeholder="Name" className="rounded-sm border border-[#2a3758] bg-[#0d1426] px-4 py-3 text-sm outline-none focus:border-[#c4a059]" />
                <input type="text" placeholder="Company" className="rounded-sm border border-[#2a3758] bg-[#0d1426] px-4 py-3 text-sm outline-none focus:border-[#c4a059]" />
                <input type="email" placeholder="Email" className="rounded-sm border border-[#2a3758] bg-[#0d1426] px-4 py-3 text-sm outline-none focus:border-[#c4a059] sm:col-span-2" />
                <select className="rounded-sm border border-[#2a3758] bg-[#0d1426] px-4 py-3 text-sm outline-none focus:border-[#c4a059] sm:col-span-2">
                  <option>Practice area</option>
                  <option>Venture formation</option>
                  <option>Financings &amp; SAFEs</option>
                  <option>Mergers &amp; acquisitions</option>
                  <option>Employment &amp; equity</option>
                  <option>Commercial contracts</option>
                  <option>Regulatory &amp; data</option>
                </select>
                <textarea rows="4" placeholder="Briefly, what brings you to us?" className="rounded-sm border border-[#2a3758] bg-[#0d1426] px-4 py-3 text-sm outline-none focus:border-[#c4a059] sm:col-span-2" />
              </div>
              <button type="button" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#c4a059] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0d1426] transition hover:bg-[#d9ba72]">
                Submit privately <Icon name="arrow" className="h-4 w-4" />
              </button>
              <p className="mt-3 flex items-center gap-2 text-xs text-[#8d9bb5]">
                <Icon name="check" className="h-3.5 w-3.5 text-[#c4a059]" />
                Encrypted intake · attorney-client privilege applies from first communication.
              </p>
            </form>
          </div>
        </div>

        <div className="deco-border h-px" />
      </section>

      {/* FAQ */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#c4a059]">Frequent questions</p>
              <h2 className="font-serif mt-3 text-4xl italic md:text-5xl">For clarity.</h2>
            </div>
            <div className="divide-y divide-[#2a3758] rounded-sm border border-[#2a3758] bg-[#14203a]">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                    <span dangerouslySetInnerHTML={{__html: f.q.replaceAll('&apos;', '&rsquo;')}} />
                    <span className="ml-4 grid h-7 w-7 place-items-center rounded-full border border-[#8d9bb5]/40 text-[#8d9bb5] transition group-open:rotate-45 group-open:border-[#c4a059] group-open:text-[#c4a059]">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#e8dfc8]/75" dangerouslySetInnerHTML={{__html: f.a.replaceAll('&apos;', '&rsquo;')}} />
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10">
        <div className="deco-border h-px" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.8fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-3 text-[#c4a059]">
              <Monogram />
              <div>
                <p className="font-serif text-lg italic text-[#f3ede0]">Hollingsworth &amp; Price</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.28em] text-[#8d9bb5]">Counselors at law</p>
              </div>
            </a>
            <p className="mt-4 max-w-sm text-sm text-[#e8dfc8]/70">
              A boutique firm of twenty-four attorneys, representing technology founders and independent
              studios from formation through exit. New York · London · Lisbon-of-counsel.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#8d9bb5]">Firm</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#practices" className="gold-underline">Practice areas</a></li>
              <li><a href="#partners" className="gold-underline">Partners</a></li>
              <li><a href="#matters" className="gold-underline">Matters</a></li>
              <li><a href="#" className="gold-underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#8d9bb5]">Offices</p>
            <ul className="mt-3 space-y-2 text-sm text-[#e8dfc8]/80">
              <li>New York · 40 Water Street</li>
              <li>London · 58 Lincoln&apos;s Inn Fields</li>
              <li>Lisbon (of-counsel)</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#8d9bb5]">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="mailto:office@hollingsworthprice.com" className="gold-underline">office@hollingsworthprice.com</a></li>
              <li><a href="#" className="gold-underline">Media inquiries</a></li>
              <li><a href="#" className="gold-underline">Secure intake</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#2a3758]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-[#8d9bb5]">
            <span>© {new Date().getFullYear()} Hollingsworth &amp; Price LLP. Attorney advertising.</span>
            <span className="font-serif italic">Prior results do not guarantee a similar outcome.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
