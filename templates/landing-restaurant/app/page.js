const menu = [
  {
    section: "To start",
    items: [
      { n: "Warm focaccia", d: "Rosemary · maldon · olive oil from the Alentejo", p: "6" },
      { n: "Burrata & stone fruit", d: "Peaches from Torres · basil oil · black pepper", p: "14" },
      { n: "Sardines on toast", d: "Lemon · parsley · chili oil · sourdough", p: "12" },
    ],
  },
  {
    section: "Small plates",
    items: [
      { n: "Grilled octopus", d: "Smoked paprika · potato skin · sherry vinegar", p: "18" },
      { n: "Beetroot tartare", d: "Walnuts · ricotta · sesame crisp · charred lime", p: "15" },
      { n: "Clams, white wine, garlic", d: "Fresh linguine · parsley · pepper", p: "22" },
    ],
  },
  {
    section: "Mains",
    items: [
      { n: "Slow-cooked lamb shoulder", d: "Preserved lemon · mint · toasted bulgur", p: "32" },
      { n: "Line-caught sea bass", d: "Fennel · blood orange · olive butter", p: "34" },
      { n: "Wild mushroom risotto", d: "Taleggio · thyme · brown butter · nutmeg", p: "26" },
    ],
  },
  {
    section: "Sweet",
    items: [
      { n: "Olive oil cake", d: "Crème fraîche · rosemary · honey from our neighbor", p: "9" },
      { n: "Chocolate & sea salt torte", d: "Single-origin cacao · bourbon cherries", p: "10" },
    ],
  },
]

const highlights = [
  { t: "Seasonal kitchen", b: "The menu changes every Wednesday with what we bring back from the market." },
  { t: "Natural wine list", b: "43 labels, most poured by the glass. Our sommelier Inês will guide you home." },
  { t: "Chef's counter", b: "Six seats at the pass — the best view, and the first taste of the new specials." },
  { t: "Walk-in welcome", b: "Half the dining room is kept for walk-ins every night. We believe in serendipity." },
]

const hours = [
  { d: "Monday", t: "Closed" },
  { d: "Tue — Thu", t: "18:00 — 23:00" },
  { d: "Friday", t: "18:00 — 00:00" },
  { d: "Saturday", t: "12:00 — 15:30 · 18:00 — 00:00" },
  { d: "Sunday", t: "12:00 — 15:30" },
]

const press = [
  { s: "Condé Nast Traveller", q: "A candle-lit Lisbon kitchen where the menu changes with the tide." },
  { s: "Monocle", q: "The most quietly ambitious restaurant to open in Santos this decade." },
  { s: "Time Out Lisbon", q: "One of the best natural wine lists in the city — and unusually kind prices." },
]

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <path d="M16 4c-5 0-9 4-9 9 0 4 3 8 8 10l1-6-3-2c1-2 3-3 5-3-1 4-3 9-3 9 2 0 10-4 10-12 0-3-1-5-4-5-1 3-3 5-5 5 0 0 0-2-1-3 1 1 1 2 1 2Z" fill="currentColor" />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "pin") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="10" r="3"/><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/></svg>)
  if (name === "phone") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 4.2 2 2 0 0 1 5.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L9 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.8 2.3Z"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>)
  if (name === "clock") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>)
  if (name === "leaf") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21 3c0 11-7 18-18 18 0-11 7-18 18-18Z"/><path d="M8 16c3-3 8-8 12-12"/></svg>)
  if (name === "wine") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M8 3h8l-1 6a4 4 0 1 1-6 0L8 3ZM12 15v6M8 21h8"/></svg>)
  if (name === "star") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="m12 2 3 7 7 .6-5.3 4.6L18 22l-6-3.8L6 22l1.3-7.8L2 9.6 9 9l3-7Z"/></svg>)
  return null
}

export default function Home() {
  return (
    <div className="relative bg-[#faf3e6] text-[#1a120c]">
      <div className="pointer-events-none fixed inset-0 paper opacity-40" />

      {/* Nav */}
      <header className="relative z-20 border-b border-[#ddcfb3]/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 font-display text-2xl italic">
            <span className="text-[#5c5226]"><Logo /></span>
            Olive &amp; Oak
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[#3b2b1f]/80 md:flex">
            <a href="#menu" className="hover:text-[#b45c2e]">Menu</a>
            <a href="#story" className="hover:text-[#b45c2e]">Our story</a>
            <a href="#hours" className="hover:text-[#b45c2e]">Visit</a>
            <a href="#press" className="hover:text-[#b45c2e]">Press</a>
          </nav>
          <a href="#book" className="inline-flex items-center gap-2 rounded-full bg-[#1a120c] px-4 py-2 text-sm text-[#faf3e6] transition hover:bg-[#b45c2e]">
            Reserve a table <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28">
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#7b6a54]">
                <span className="h-px w-10 bg-[#7b6a54]" />
                Santos · Lisbon · est. 2021
              </p>
              <h1 className="font-display mt-6 text-[clamp(3.5rem,9vw,8rem)] leading-[0.92] tracking-tight">
                A small <em className="italic text-[#b45c2e]">kitchen</em><br />
                with a big table.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#3b2b1f]/80">
                Olive &amp; Oak is a 32-seat Mediterranean kitchen in Santos. We cook what the market brings,
                pour natural wines, and leave half the dining room for walk-ins.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="#book" className="group inline-flex items-center gap-2 rounded-full bg-[#b45c2e] px-6 py-3.5 text-sm font-semibold text-[#faf3e6] transition hover:bg-[#9a4b22]">
                  Reserve a table <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
                <a href="#menu" className="inline-flex items-center gap-2 rounded-full border border-[#1a120c]/20 px-5 py-3.5 text-sm text-[#3b2b1f] transition hover:bg-[#1a120c] hover:text-[#faf3e6]">
                  See the menu
                </a>
                <span className="flex items-center gap-2 pl-2 text-xs text-[#7b6a54]">
                  <span className="h-2 w-2 rounded-full bg-[#4e5a36]" />
                  Open tonight · 3 tables left
                </span>
              </div>
            </div>

            <aside className="relative">
              <div className="relative overflow-hidden rounded-[28px] border border-[#ddcfb3] bg-gradient-to-br from-[#efe4cc] via-[#f2e6c7] to-[#e6d6af] p-6 shadow-[0_30px_80px_-30px_rgba(26,18,12,0.25)]">
                <div className="absolute inset-0 paper mix-blend-overlay opacity-50" />
                <div className="relative">
                  <div className="flex items-center justify-between border-b border-[#1a120c]/15 pb-4">
                    <p className="font-display text-xl italic">Tonight&apos;s menu</p>
                    <p className="font-mono text-xs text-[#7b6a54]">Tue · 14 Apr</p>
                  </div>

                  <div className="mt-4 space-y-4">
                    {[
                      { n: "Burrata & stone fruit", d: "Peaches · basil oil", p: "14" },
                      { n: "Grilled octopus", d: "Smoked paprika · potato", p: "18" },
                      { n: "Slow-cooked lamb shoulder", d: "Preserved lemon · bulgur", p: "32" },
                      { n: "Olive oil cake", d: "Crème fraîche · honey", p: "9" },
                    ].map((i) => (
                      <div key={i.n} className="flex items-baseline gap-3">
                        <div className="flex-1">
                          <p className="font-display text-lg">{i.n}</p>
                          <p className="text-xs italic text-[#7b6a54]">{i.d}</p>
                        </div>
                        <span className="divider-dots flex-1 self-center" />
                        <span className="font-display text-lg">€{i.p}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#1a120c]/15 pt-4 text-xs text-[#7b6a54]">
                    <span className="flex items-center gap-1.5"><Icon name="leaf" className="h-3.5 w-3.5" /> Veg options every night</span>
                    <span className="flex items-center gap-1.5"><Icon name="wine" className="h-3.5 w-3.5" /> 43 natural wines</span>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 -top-6 hidden rotate-[-4deg] rounded-2xl border border-[#ddcfb3] bg-[#faf3e6] px-4 py-2 text-xs md:block">
                <p className="font-display text-base italic">since 2021</p>
              </div>
            </aside>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden border-y border-[#ddcfb3] bg-[#1a120c] py-4 text-[#faf3e6]">
          <div className="flex marquee gap-10 whitespace-nowrap font-display text-2xl italic">
            {[
              "Seasonal",
              "Hand-pulled pasta",
              "Wood fire",
              "Natural wine",
              "Walk-ins welcome",
              "Chef&apos;s counter",
              "From the Alentejo",
              "Line-caught fish",
            ].concat([
              "Seasonal",
              "Hand-pulled pasta",
              "Wood fire",
              "Natural wine",
              "Walk-ins welcome",
              "Chef&apos;s counter",
              "From the Alentejo",
              "Line-caught fish",
            ]).map((t, i) => (
              <span key={i} className="flex items-center gap-10" dangerouslySetInnerHTML={{__html: `<span class='text-[#b45c2e]'>✦</span><span>${t.replace('&apos;', "'")}</span>`}} />
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#7b6a54]">Our story</p>
              <h2 className="font-display mt-4 text-5xl leading-[1.02] md:text-7xl">
                A kitchen for the <em className="italic text-[#b45c2e]">neighborhood.</em>
              </h2>
              <p className="mt-6 text-[#3b2b1f]/80">
                Olive &amp; Oak opened in 2021 in a 19th-century townhouse on Rua de São Bento. Chef Clara
                Figueira runs the pass; her partner Ricardo chose every stone in the dining room and every
                bottle on the wine list.
              </p>
              <p className="mt-4 text-[#3b2b1f]/80">
                We cook Mediterranean — not tied to any one coast, but to the olive tree and the oak barrel.
                Everything rests on good oil, good salt, and the patience to wait for a tomato to ripen.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div key={h.t} className="rounded-2xl border border-[#ddcfb3] bg-white/50 p-5">
                  <p className="font-display text-xl">{h.t}</p>
                  <p className="mt-2 text-sm text-[#3b2b1f]/75" dangerouslySetInnerHTML={{__html: h.b.replace("'", "&rsquo;")}} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="overflow-hidden rounded-[36px] border border-[#ddcfb3] bg-gradient-to-b from-[#faf3e6] to-[#efe4cc] p-10 md:p-16">
            <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[#ddcfb3] pb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#7b6a54]">Tonight&apos;s menu</p>
                <h2 className="font-display mt-3 text-5xl leading-[1.02] md:text-7xl">
                  Market <em className="italic text-[#b45c2e]">to table.</em>
                </h2>
              </div>
              <p className="max-w-sm text-sm text-[#3b2b1f]/75">
                Our kitchen rewrites the menu every Wednesday. This is a sample — what you&apos;ll see tonight
                depends on what Clara brought back from Mercado da Ribeira this morning.
              </p>
            </div>

            <div className="mt-8 grid gap-10 md:grid-cols-2">
              {menu.map((group) => (
                <section key={group.section}>
                  <h3 className="font-display text-2xl italic text-[#5c5226]">{group.section}</h3>
                  <ul className="mt-4 space-y-5">
                    {group.items.map((item) => (
                      <li key={item.n} className="flex items-baseline gap-3">
                        <div>
                          <p className="font-display text-xl">{item.n}</p>
                          <p className="text-sm italic text-[#7b6a54]">{item.d}</p>
                        </div>
                        <span className="divider-dots flex-1 self-center" />
                        <span className="font-display text-xl">€{item.p}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <div className="mt-12 border-t border-[#ddcfb3] pt-6 text-xs text-[#7b6a54]">
              Every dish is made in-house. Please ask about allergens — the kitchen is happy to adjust.
            </div>
          </div>
        </div>
      </section>

      {/* Press */}
      <section id="press" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-4 md:grid-cols-3">
            {press.map((p, i) => (
              <article key={p.s} className={`rounded-3xl border border-[#ddcfb3] p-7 ${i === 1 ? "bg-[#1a120c] text-[#faf3e6]" : "bg-white/50"}`}>
                <div className={i === 1 ? "text-[#c4913c]" : "text-[#b45c2e]"}>
                  <div className="flex">{[...Array(5)].map((_, i2) => <Icon key={i2} name="star" className="h-4 w-4" />)}</div>
                </div>
                <p className="font-display mt-5 text-2xl italic leading-snug">&ldquo;{p.q}&rdquo;</p>
                <p className={`mt-6 border-t pt-4 text-sm font-semibold ${i === 1 ? "border-white/10 text-white/80" : "border-[#ddcfb3] text-[#3b2b1f]"}`}>— {p.s}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="hours" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-8 rounded-[36px] border border-[#ddcfb3] bg-white/60 p-10 md:grid-cols-[1fr_1.2fr] md:p-14">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#7b6a54]">Visit</p>
              <h2 className="font-display mt-4 text-5xl leading-[1.02] md:text-6xl">
                Find us on <em className="italic text-[#b45c2e]">São Bento.</em>
              </h2>
              <p className="mt-6 max-w-md text-[#3b2b1f]/80">
                We&apos;re a short walk from the Basílica da Estrela and the Time Out Market. Ring the brass
                bell at the green door — we&apos;ll be expecting you.
              </p>

              <div className="mt-8 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Icon name="pin" className="mt-0.5 h-5 w-5 text-[#b45c2e]" />
                  <div>
                    <p className="font-semibold">Rua de São Bento 184</p>
                    <p className="text-[#7b6a54]">1200-822 Santos, Lisbon</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="phone" className="mt-0.5 h-5 w-5 text-[#b45c2e]" />
                  <p>+351 21 394 1274</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="mail" className="mt-0.5 h-5 w-5 text-[#b45c2e]" />
                  <a href="mailto:hello@oliveandoak.pt" className="hover:text-[#b45c2e]">hello@oliveandoak.pt</a>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-3xl border border-[#ddcfb3] bg-[#efe4cc] p-6">
                <p className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#7b6a54]">
                  <Icon name="clock" className="h-4 w-4" /> Hours
                </p>
                <ul className="mt-4 divide-y divide-[#ddcfb3]">
                  {hours.map((h) => (
                    <li key={h.d} className="flex items-center justify-between py-2 text-sm">
                      <span className="font-semibold">{h.d}</span>
                      <span className="text-[#7b6a54]">{h.t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 overflow-hidden rounded-3xl border border-[#ddcfb3] bg-gradient-to-br from-[#4e5a36]/80 via-[#5c5226] to-[#1a120c] p-6 text-[#faf3e6]">
                <p className="text-xs uppercase tracking-[0.22em] text-[#c4913c]">Chef&apos;s counter</p>
                <p className="font-display mt-3 text-2xl italic leading-snug">Six seats at the pass. The best view, the first bite.</p>
                <p className="mt-3 text-sm text-white/75">Reservations open 30 days ahead. Ask about the Sunday tasting — seven courses, €75.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book form */}
      <section id="book" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#b45c2e] via-[#9a4b22] to-[#6b2d2d] p-10 text-[#faf3e6] md:p-16">
            <div className="pointer-events-none absolute inset-0 paper mix-blend-overlay opacity-40" />
            <div className="relative grid gap-10 md:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#faf3e6]/80">Reserve a table</p>
                <h2 className="font-display mt-4 text-5xl leading-[1.02] md:text-7xl">
                  Come <em className="italic">hungry.</em>
                </h2>
                <p className="mt-6 max-w-md text-[#faf3e6]/85">
                  Online booking takes 30 seconds. For groups of 7 or more, give us a call — we&apos;ll put
                  together the long table for you.
                </p>
              </div>

              <form className="rounded-3xl border border-[#faf3e6]/20 bg-[#1a120c]/30 p-5 backdrop-blur">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input type="text" placeholder="Name" className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:border-white" />
                  <input type="email" placeholder="Email" className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:border-white" />
                  <input type="date" className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none focus:border-white" />
                  <select className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none focus:border-white">
                    <option className="text-[#1a120c]">18:00</option>
                    <option className="text-[#1a120c]">19:00</option>
                    <option className="text-[#1a120c]">20:00</option>
                    <option className="text-[#1a120c]">21:30</option>
                  </select>
                  <select className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none focus:border-white sm:col-span-2">
                    <option className="text-[#1a120c]">2 guests</option>
                    <option className="text-[#1a120c]">3 guests</option>
                    <option className="text-[#1a120c]">4 guests</option>
                    <option className="text-[#1a120c]">6 guests</option>
                  </select>
                </div>
                <button type="button" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#faf3e6] px-5 py-3 text-sm font-semibold text-[#1a120c] hover:bg-white">
                  Request a table <Icon name="arrow" className="h-4 w-4" />
                </button>
                <p className="mt-3 text-center text-xs text-white/70">We confirm by email within one hour during opening hours.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#ddcfb3] bg-[#efe4cc]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 font-display text-2xl italic">
              <span className="text-[#5c5226]"><Logo /></span>
              Olive &amp; Oak
            </a>
            <p className="mt-4 max-w-sm text-sm text-[#3b2b1f]/80">
              A small Mediterranean kitchen in Santos. Dinner Tue — Sun. Lunch weekends. Walk-ins welcome.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7b6a54]">Kitchen</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#menu" className="hover:text-[#b45c2e]">Menu</a></li>
              <li><a href="#story" className="hover:text-[#b45c2e]">Our story</a></li>
              <li><a href="#" className="hover:text-[#b45c2e]">Wine list</a></li>
              <li><a href="#" className="hover:text-[#b45c2e]">Private events</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7b6a54]">Visit</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Rua de São Bento 184</li>
              <li>Santos, Lisbon</li>
              <li><a href="tel:+351213941274" className="hover:text-[#b45c2e]">+351 21 394 1274</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7b6a54]">Follow</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#b45c2e]">Instagram</a></li>
              <li><a href="#" className="hover:text-[#b45c2e]">Newsletter</a></li>
              <li><a href="mailto:hello@oliveandoak.pt" className="hover:text-[#b45c2e]">hello@oliveandoak.pt</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#ddcfb3]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-[#7b6a54]">
            <span>© {new Date().getFullYear()} Olive &amp; Oak · Santos, Lisbon</span>
            <span>Site by StoicSoft</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
