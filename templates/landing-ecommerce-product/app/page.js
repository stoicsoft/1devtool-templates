const features = [
  { t: "192 pages", b: "Numbered, dot-gridded, and tab-indexed for weekly planning and deep-work notes." },
  { t: "120 gsm stock", b: "Cream-tone uncoated paper milled in Portugal. Fountain-pen friendly." },
  { t: "Smyth-sewn spine", b: "Lies flat at every spread. Survives years of travel and re-reads." },
  { t: "Cloth-bound", b: "Heathered moleskine cloth in three colorways: moss, ochre, ink." },
]

const variants = [
  { name: "Moss", hex: "#4a5c37" },
  { name: "Ochre", hex: "#c4913c" },
  { name: "Ink", hex: "#1a1611" },
]

const reviews = [
  { q: "The best notebook I&apos;ve used in a decade. The sections for weekly review are exactly where I needed them.", a: "— Mei W.", r: "Verified · Ochre" },
  { q: "I bought one for myself, then three for my team. It sets a tone.", a: "— Jonas P.", r: "Verified · Ink" },
  { q: "This is what a good physical artifact feels like. I&apos;m on my second.", a: "— Priya R.", r: "Verified · Moss" },
]

const faqs = [
  { q: "When does it ship?", a: "Field No. 03 ships within 3 business days from Lisbon. Standard delivery takes 5–9 days worldwide; express is 2–3 days." },
  { q: "Is there a refund policy?", a: "Yes — unopened notebooks can be returned for a full refund within 30 days. Opened notebooks are covered by our build-quality guarantee for 12 months." },
  { q: "Do you offer team orders?", a: "We do. Orders of 10 or more notebooks include a custom foil-stamped cover. Email orders@stoicsoft.com for a quote." },
  { q: "How is it made?", a: "In small batches at a family bindery in Porto. Every notebook is numbered and signed by the binder. We release a new edition each spring and autumn." },
]

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <rect x="3" y="5" width="26" height="22" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 5v22" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 11h11M13 16h11M13 21h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "cart") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 3h2l2 13h11l2-9H7"/><circle cx="9" cy="20" r="1.2"/><circle cx="17" cy="20" r="1.2"/></svg>)
  if (name === "star") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="m12 2 3 7 7 .6-5.3 4.6L18 22l-6-3.8L6 22l1.3-7.8L2 9.6 9 9l3-7Z"/></svg>)
  if (name === "shield") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3 4 6v6c0 5 3.5 8.6 8 9 4.5-.4 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>)
  if (name === "truck") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="2" y="6" width="12" height="10" rx="1"/><path d="M14 10h5l3 4v2h-8"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>)
  if (name === "leaf") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21 3c0 11-7 18-18 18 0-11 7-18 18-18Z"/><path d="M8 16c3-3 8-8 12-12"/></svg>)
  if (name === "gift") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M20 12v9H4v-9M2 7h20v5H2V7ZM12 22V7"/><path d="M12 7c0-3 4-4 4-2s-1 2-4 2c-3 0-4 0-4-2s4-1 4 2Z"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  return null
}

function NotebookArt({ hue = "#4a5c37", label = "FIELD", num = "N° 03" }) {
  return (
    <div className="relative product-shadow">
      <svg viewBox="0 0 340 440" className="h-auto w-full">
        <defs>
          <linearGradient id={`nb-${label}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={hue} stopOpacity="1" />
            <stop offset="100%" stopColor={hue} stopOpacity="0.82" />
          </linearGradient>
          <pattern id={`cloth-${label}`} width="3" height="3" patternUnits="userSpaceOnUse">
            <path d="M0 0h3v3H0z" fill={hue} />
            <path d="M0 0l3 3M3 0l-3 3" stroke="rgba(255,255,255,0.06)" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect x="12" y="20" width="310" height="400" rx="6" fill="#0e0c09" opacity="0.18" />
        <rect x="18" y="16" width="310" height="400" rx="6" fill={`url(#nb-${label})`} />
        <rect x="18" y="16" width="310" height="400" rx="6" fill={`url(#cloth-${label})`} opacity="0.45" />
        <rect x="18" y="16" width="310" height="400" rx="6" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <line x1="40" y1="16" x2="40" y2="416" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />

        <g transform="translate(110, 140)">
          <text x="0" y="0" fontFamily="DM Serif Display, serif" fontSize="42" fill="#f4efe6" letterSpacing="4">{label}</text>
          <text x="0" y="40" fontFamily="Inter, sans-serif" fontSize="12" fill="#f4efe6" opacity="0.75" letterSpacing="8">NOTEBOOK</text>
        </g>

        <g transform="translate(110, 300)">
          <line x1="0" y1="0" x2="120" y2="0" stroke="#f4efe6" strokeWidth="0.8" opacity="0.5" />
          <text x="0" y="24" fontFamily="Inter, sans-serif" fontSize="14" fill="#f4efe6" fontWeight="600" letterSpacing="3">{num}</text>
          <text x="0" y="42" fontFamily="Inter, sans-serif" fontSize="9" fill="#f4efe6" opacity="0.7" letterSpacing="2">SPRING · STOICSOFT STUDIO</text>
        </g>

        <g transform="translate(110, 380)">
          <circle cx="0" cy="0" r="4" fill="none" stroke="#f4efe6" opacity="0.6" />
          <text x="10" y="4" fontFamily="Inter, sans-serif" fontSize="8" fill="#f4efe6" opacity="0.6" letterSpacing="1.5">BOUND IN PORTO</text>
        </g>
      </svg>
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative bg-[#f4efe6] text-[#1a1611]">
      <div className="pointer-events-none fixed inset-0 paper-texture opacity-[0.4]" />

      {/* Nav */}
      <header className="relative z-20 border-b border-[#d9cfbb]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 font-serif text-2xl">
            <Logo /> Field
          </a>
          <nav className="hidden items-center gap-7 text-sm text-[#322b22]/80 md:flex">
            <a href="#product" className="hover:text-[#d85a2a]">The notebook</a>
            <a href="#craft" className="hover:text-[#d85a2a]">Craft</a>
            <a href="#reviews" className="hover:text-[#d85a2a]">Reviews</a>
            <a href="#story" className="hover:text-[#d85a2a]">Our story</a>
          </nav>
          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-1.5 rounded-full border border-[#d9cfbb] bg-white/60 px-3 py-1.5 text-xs text-[#6c6456] md:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4a5c37]" /> Spring edition · 182 left
            </span>
            <a href="#buy" className="inline-flex items-center gap-2 rounded-full bg-[#1a1611] px-4 py-2 text-sm font-semibold text-[#f4efe6] transition hover:bg-[#d85a2a]">
              Buy · $32 <Icon name="cart" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#6c6456]">
                <span className="h-px w-10 bg-[#6c6456]" />
                Edition N° 03 · Spring 2026
              </p>
              <h1 className="font-serif mt-6 text-[clamp(3rem,7vw,6rem)] leading-[0.98] tracking-tight">
                The builder&apos;s <em className="italic text-[#d85a2a]">notebook.</em>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#322b22]/80">
                Threadbound. Hand-numbered. Printed on 120gsm cream stock by a family bindery in Porto. A quiet
                object for builders who still write by hand.
              </p>

              <div className="mt-8 flex items-center gap-5">
                <p className="font-serif text-4xl">$32<span className="text-lg text-[#6c6456]">/notebook</span></p>
                <div className="h-10 w-px bg-[#d9cfbb]" />
                <div>
                  <div className="flex text-[#d85a2a]">
                    {[...Array(5)].map((_, i) => <Icon key={i} name="star" className="h-4 w-4" />)}
                  </div>
                  <p className="text-xs text-[#6c6456]">4.9 · 412 reviews</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6c6456]">Colorway</p>
                <div className="mt-3 flex gap-3">
                  {variants.map((v, i) => (
                    <button
                      key={v.name}
                      className={`group flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                        i === 0 ? "border-[#1a1611] bg-[#1a1611] text-[#f4efe6]" : "border-[#d9cfbb] bg-white/50 hover:border-[#1a1611]"
                      }`}
                    >
                      <span className="h-4 w-4 rounded-full border border-black/20" style={{ background: v.hex }} />
                      {v.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#buy" className="group inline-flex items-center gap-2 rounded-full bg-[#d85a2a] px-6 py-3.5 text-sm font-semibold text-[#f4efe6] transition hover:bg-[#c04722]">
                  Add to cart <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
                <a href="#craft" className="inline-flex items-center gap-2 rounded-full border border-[#1a1611]/20 px-5 py-3.5 text-sm font-semibold transition hover:bg-[#1a1611] hover:text-[#f4efe6]">
                  See inside
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#d9cfbb] pt-6 text-xs text-[#6c6456]">
                <div className="flex items-center gap-2"><Icon name="truck" className="h-4 w-4" /> Free shipping over $60</div>
                <div className="flex items-center gap-2"><Icon name="shield" className="h-4 w-4" /> 12-month guarantee</div>
                <div className="flex items-center gap-2"><Icon name="leaf" className="h-4 w-4" /> FSC-certified paper</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-10 top-20 hidden rotate-6 text-right font-serif text-7xl italic text-[#d85a2a]/20 md:block">
                Field
              </div>
              <div className="relative z-10 mx-auto max-w-[380px]">
                <NotebookArt hue="#4a5c37" label="FIELD" num="N° 03" />
              </div>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="h-20 w-16 opacity-70">
                  <NotebookArt hue="#c4913c" label="FIELD" num="N° 03" />
                </div>
                <div className="h-20 w-16 opacity-70">
                  <NotebookArt hue="#1a1611" label="FIELD" num="N° 03" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden border-y border-[#d9cfbb] bg-[#1a1611] py-4 text-[#f4efe6]">
          <div className="flex marquee whitespace-nowrap gap-10 font-serif text-xl italic">
            {[
              "Batch No. 12 — Bound in Porto",
              "Limited spring edition",
              "1200 copies · 412 sold",
              "Numbered and signed",
              "Ships in 3 days",
              "Made in a family bindery",
            ].concat([
              "Batch No. 12 — Bound in Porto",
              "Limited spring edition",
              "1200 copies · 412 sold",
              "Numbered and signed",
              "Ships in 3 days",
              "Made in a family bindery",
            ]).map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="text-[#d85a2a]">✦</span>
                <span>{t}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section id="product" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#6c6456]">The notebook</p>
              <h2 className="font-serif mt-4 text-5xl leading-[1.02] md:text-6xl">
                Every detail, <em className="italic text-[#d85a2a]">on purpose.</em>
              </h2>
              <p className="mt-6 max-w-md text-[#322b22]/75">
                We designed Field for the kind of builders who sit with a problem before opening Figma. A quiet
                object that holds up to years of weekly review, travel, and coffee-stained pages.
              </p>
            </div>
            <dl className="divide-y divide-[#d9cfbb]">
              {features.map((f) => (
                <div key={f.t} className="grid grid-cols-[1fr_2fr] gap-6 py-5">
                  <dt className="font-serif text-xl">{f.t}</dt>
                  <dd className="text-[#322b22]/75">{f.b}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Craft */}
      <section id="craft" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="overflow-hidden rounded-[36px] bg-[#1a1611] text-[#f4efe6]">
            <div className="grid gap-10 p-10 md:grid-cols-2 md:p-16">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#d85a2a]">Bound in Porto</p>
                <h2 className="font-serif mt-4 text-5xl leading-[1.02] md:text-6xl">
                  Made by humans,<br />
                  <em className="italic text-[#c4913c]">at a human pace.</em>
                </h2>
                <p className="mt-6 max-w-md text-white/70">
                  Every edition is sewn and bound by a three-person bindery in the Ribeira district of Porto.
                  We release 1,200 notebooks per season — never more. When they&apos;re gone, they&apos;re gone.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    { k: "1200", v: "Copies per edition" },
                    { k: "12", v: "Days · cover to spine" },
                    { k: "3", v: "Humans · bindery" },
                    { k: "100%", v: "FSC-certified paper" },
                  ].map((s) => (
                    <div key={s.v} className="rounded-2xl border border-white/10 p-4">
                      <p className="font-serif text-3xl">{s.k}</p>
                      <p className="mt-1 text-xs uppercase tracking-widest text-white/50">{s.v}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { n: "01", t: "Paper sourced", b: "120gsm cream uncoated stock, milled in northern Portugal." },
                  { n: "02", t: "Printed in 2 runs", b: "Dot grid, page numbers, edition mark — two-colour Heidelberg press." },
                  { n: "03", t: "Sewn by hand", b: "Smyth-sewn spine that lies flat and survives for years." },
                  { n: "04", t: "Numbered + signed", b: "Each notebook signed and numbered by the binder who finished it." },
                ].map((s) => (
                  <div key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="font-mono text-xs text-[#d85a2a]">{s.n}</p>
                    <p className="font-serif mt-3 text-xl">{s.t}</p>
                    <p className="mt-2 text-sm text-white/70">{s.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#6c6456]">Reviews</p>
              <h2 className="font-serif mt-4 text-5xl leading-[1.02] md:text-6xl">
                412 notes, <em className="italic text-[#d85a2a]">picked three.</em>
              </h2>
            </div>
            <div>
              <div className="flex text-[#d85a2a]">
                {[...Array(5)].map((_, i) => <Icon key={i} name="star" className="h-5 w-5" />)}
              </div>
              <p className="mt-1 text-sm text-[#6c6456]">4.9 / 5 · 412 verified reviews</p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {reviews.map((r, i) => (
              <article key={r.a} className={`rounded-3xl border border-[#d9cfbb] p-7 ${i === 1 ? "bg-[#1a1611] text-[#f4efe6]" : "bg-white/60"}`}>
                <div className={i === 1 ? "text-[#c4913c]" : "text-[#d85a2a]"}>
                  <div className="flex">
                    {[...Array(5)].map((_, i2) => <Icon key={i2} name="star" className="h-4 w-4" />)}
                  </div>
                </div>
                <p className="font-serif mt-4 text-xl leading-snug" dangerouslySetInnerHTML={{__html: `&ldquo;${r.q.replaceAll('&apos;', "'")}&rdquo;`}} />
                <div className={`mt-6 flex items-center justify-between border-t pt-4 text-xs ${i === 1 ? "border-white/10" : "border-[#d9cfbb]"}`}>
                  <span className={i === 1 ? "text-white/80" : "text-[#322b22]/80"}>{r.a}</span>
                  <span className={i === 1 ? "text-white/50" : "text-[#6c6456]"}>{r.r}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Buy callout */}
      <section id="buy" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-8 rounded-[36px] border border-[#d9cfbb] bg-white/60 p-10 md:grid-cols-[1fr_1.4fr] md:p-14">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#6c6456]">Spring edition</p>
              <h2 className="font-serif mt-4 text-4xl leading-[1.02] md:text-5xl">
                Before it&apos;s <em className="italic text-[#d85a2a]">gone.</em>
              </h2>
              <p className="mt-5 text-[#322b22]/75">
                1,200 copies per edition. 182 remaining in the spring run. Free shipping on orders over $60.
              </p>

              <div className="mt-8 grid gap-2">
                {[
                  { t: "Free shipping over $60", i: "truck" },
                  { t: "12-month build guarantee", i: "shield" },
                  { t: "Gift wrapping included", i: "gift" },
                ].map((p) => (
                  <div key={p.t} className="flex items-center gap-2 text-sm text-[#322b22]">
                    <Icon name={p.i} className="h-4 w-4 text-[#d85a2a]" /> {p.t}
                  </div>
                ))}
              </div>
            </div>

            <form className="rounded-3xl border border-[#d9cfbb] bg-[#f4efe6] p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[#6c6456]">Reserve yours</p>

              <div className="mt-4 grid gap-3">
                <div className="flex items-center justify-between rounded-2xl border border-[#d9cfbb] bg-white p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md" style={{ background: "#4a5c37" }} />
                    <div>
                      <p className="font-semibold">Field N° 03 · Moss</p>
                      <p className="text-xs text-[#6c6456]">Cloth-bound · 192 pages</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button type="button" className="grid h-8 w-8 place-items-center rounded-full border border-[#d9cfbb]">−</button>
                    <span className="w-5 text-center">1</span>
                    <button type="button" className="grid h-8 w-8 place-items-center rounded-full border border-[#d9cfbb]">+</button>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#d9cfbb] bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm">Subtotal</p>
                    <p className="font-semibold">$32.00</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-[#6c6456]">
                    <p>Shipping · standard</p>
                    <p>$5.00</p>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-[#d9cfbb] pt-3">
                    <p className="font-serif text-lg">Total</p>
                    <p className="font-serif text-2xl">$37.00</p>
                  </div>
                </div>

                <button type="button" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#d85a2a] px-5 py-3.5 text-sm font-semibold text-[#f4efe6] hover:bg-[#c04722]">
                  Complete order <Icon name="arrow" className="h-4 w-4" />
                </button>
                <p className="text-center text-xs text-[#6c6456]">Secure checkout · 3-day shipping · returns within 30 days</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ + Story */}
      <section id="story" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#6c6456]">Our story</p>
              <h2 className="font-serif mt-4 text-5xl leading-[1.02] md:text-6xl">
                A studio project that grew.
              </h2>
              <p className="mt-6 text-[#322b22]/80">
                Field started as an internal notebook for the StoicSoft team — we wanted a quiet object to pair
                with our digital tools. The first edition was 40 copies for friends. Five editions later, we
                still make them in the same bindery in Porto, by the same three humans.
              </p>
              <p className="mt-4 text-[#322b22]/80">
                Every Field notebook lives next to our own keyboards. We believe in it because we live with it.
              </p>
            </div>

            <div className="divide-y divide-[#d9cfbb] rounded-3xl border border-[#d9cfbb] bg-white/60">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold">
                    {f.q}
                    <span className="ml-4 grid h-7 w-7 place-items-center rounded-full border border-[#1a1611]/15 text-[#1a1611]/50 transition group-open:rotate-45 group-open:border-[#d85a2a] group-open:text-[#d85a2a]">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#322b22]/75">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#d9cfbb] bg-[#e8e0d0]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 font-serif text-2xl"><Logo /> Field</a>
            <p className="mt-4 max-w-sm text-sm text-[#322b22]/80">
              A small-batch notebook made by the StoicSoft studio — bound in Porto, numbered by hand, and
              designed for builders who still write things down.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6c6456]">Shop</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#d85a2a]">Field N° 03 · Spring</a></li>
              <li><a href="#" className="hover:text-[#d85a2a]">Accessories</a></li>
              <li><a href="#" className="hover:text-[#d85a2a]">Archive</a></li>
              <li><a href="#" className="hover:text-[#d85a2a]">Gift cards</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6c6456]">Studio</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#d85a2a]">StoicSoft</a></li>
              <li><a href="#" className="hover:text-[#d85a2a]">ServerCompass</a></li>
              <li><a href="#" className="hover:text-[#d85a2a]">1DevTool</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6c6456]">Help</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#d85a2a]">Shipping</a></li>
              <li><a href="#" className="hover:text-[#d85a2a]">Returns</a></li>
              <li><a href="mailto:orders@stoicsoft.com" className="hover:text-[#d85a2a]">orders@stoicsoft.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#d9cfbb]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-[#6c6456]">
            <span>© {new Date().getFullYear()} StoicSoft Field. Made in small batches.</span>
            <span>Porto · Lisbon</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
