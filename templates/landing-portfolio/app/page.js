const projects = [
  {
    name: "ServerCompass",
    kind: "SaaS · 2024",
    blurb: "Infrastructure monitoring that respects the on-call engineer. Shipped solo over eleven months.",
    tone: "from-[#1a2640] via-[#2a3b60] to-[#6f8dcf]",
    role: "Design · Eng · Go-to-market",
    span: "md:col-span-3 md:row-span-2",
  },
  {
    name: "1DevTool",
    kind: "Open source · 2023",
    blurb: "A registry of production-grade Next.js templates, with a CLI that cuts project setup to 12 seconds.",
    tone: "from-[#2a1a1a] via-[#3d1f12] to-[#ff5a1f]",
    role: "Design · Eng · DX",
    span: "md:col-span-3",
  },
  {
    name: "Aether Journal",
    kind: "Writing · Ongoing",
    blurb: "A weekly field note on building independent software. 8k+ subscribers, no sponsors, no dashboards.",
    tone: "from-[#d5cdbb] via-[#e5dfd1] to-[#f2ede3]",
    role: "Writing · Design",
    span: "md:col-span-2",
  },
  {
    name: "Quill",
    kind: "Indie app · 2022",
    blurb: "A Markdown-first writing app for macOS. Acquired by a larger team, still running for 30k users.",
    tone: "from-[#3e5030] via-[#566a45] to-[#a8be85]",
    role: "Sole maker",
    span: "md:col-span-2",
  },
  {
    name: "Tide",
    kind: "Open source · 2021",
    blurb: "A small, opinionated state library for React. 4.2k stars. Retired in favour of Zustand, with love.",
    tone: "from-[#1a2640] via-[#2a3b60] to-[#4d6cbe]",
    role: "Design · Eng",
    span: "md:col-span-2",
  },
]

const services = [
  { n: "01", t: "Product strategy", body: "Customer research, pricing, positioning, and a roadmap that&apos;s less theatre, more shipping." },
  { n: "02", t: "Design systems", body: "Editorial identity, design tokens, and component libraries you can actually live with." },
  { n: "03", t: "Engineering", body: "Next.js front ends, serverless back ends, AWS + Cloudflare. Full-stack, boring-on-purpose." },
  { n: "04", t: "Launch & operate", body: "We stay on for the first 90 days — analytics, iteration, incident response, pricing tweaks." },
]

const journal = [
  { d: "Apr 08, 2026", t: "Why StoicSoft runs on our own templates", kind: "Essay · 8 min" },
  { d: "Mar 22, 2026", t: "ServerCompass post-mortem: a $38 bill taught me about regional probes", kind: "Note · 4 min" },
  { d: "Mar 01, 2026", t: "Designing for trust when you&apos;re a team of one", kind: "Essay · 12 min" },
]

const now = [
  "Running ServerCompass full-time · 1,200 paying teams",
  "Publishing weekly on aether.journal · 8.4k subscribers",
  "Open to one paid advisory engagement this spring",
  "Reading: A Philosophy of Software Design · Ousterhout",
]

const testimonials = [
  { q: "We hired StoicSoft to ship a pricing page in two weeks. What we got was a new way to talk about our product.", a: "Priya K.", r: "Co-founder, Routine" },
  { q: "Most rare combination: tasteful visual work paired with engineering that holds up under load.", a: "Jonas V.", r: "CTO, Parallel" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "dot") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><circle cx="12" cy="12" r="4"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>)
  return null
}

function Monogram() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Fraunces, serif"
        fontStyle="italic"
        fontSize="16"
        fontWeight="500"
        fill="currentColor"
      >
        ss
      </text>
    </svg>
  )
}

export default function Home() {
  return (
    <div className="relative bg-[#f2ede3] text-[#111210]">
      <div className="pointer-events-none fixed inset-0 paper-noise opacity-[0.35]" />

      {/* Nav */}
      <header className="relative z-20 border-b border-[#d5cdbb]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3 font-display text-xl font-medium">
            <span className="text-[#111210]"><Monogram /></span>
            <span>StoicSoft</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[#2a2a27]/80 md:flex">
            <a href="#work" className="underline-grow">Work</a>
            <a href="#services" className="underline-grow">Services</a>
            <a href="#journal" className="underline-grow">Journal</a>
            <a href="#now" className="underline-grow">Now</a>
          </nav>
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-[#111210] px-4 py-2 text-sm text-[#f2ede3] transition hover:bg-[#ff5a1f]">
            Say hello <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#6d675a]">
            <span className="h-px w-10 bg-[#6d675a]" />
            Independent product studio · est. 2019 · Lisbon / remote
          </div>

          <h1 className="font-display mt-8 text-[clamp(3rem,8.5vw,8.5rem)] font-medium leading-[0.94] tracking-tight">
            I build the <em className="font-normal italic">tools</em>
            <br />
            I wish existed <span className="text-[#ff5a1f]">—</span>
            <br />
            then ship them.
          </h1>

          <div className="mt-14 grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <p className="max-w-2xl text-lg leading-relaxed text-[#2a2a27]/80">
              StoicSoft is a one-person product studio run by a designer-engineer. I design, build, and operate
              my own software — ServerCompass, 1DevTool, Aether Journal — and occasionally take on a small
              number of partner projects each year.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-[#d5cdbb] pt-6 md:border-t-0 md:pt-0">
              <div>
                <p className="font-display text-4xl">07</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[#6d675a]">products shipped</p>
              </div>
              <div>
                <p className="font-display text-4xl">11 yr</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[#6d675a]">building software</p>
              </div>
              <div>
                <p className="font-display text-4xl">$0</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[#6d675a]">vc raised · by choice</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[#111210] px-6 py-3.5 text-sm text-[#f2ede3] transition hover:bg-[#ff5a1f]"
            >
              See the work
              <Icon name="arrow-up" className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#journal"
              className="inline-flex items-center gap-2 rounded-full border border-[#111210]/20 px-5 py-3.5 text-sm text-[#2a2a27] transition hover:border-[#111210] hover:bg-[#111210] hover:text-[#f2ede3]"
            >
              Read the journal
            </a>
            <span className="flex items-center gap-2 pl-2 font-mono text-xs text-[#6d675a]">
              <span className="h-2 w-2 rounded-full bg-[#3e5030]" />
              Accepting one advisory engagement · Q2 &apos;26
            </span>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden border-y border-[#d5cdbb] bg-[#111210] py-6 text-[#f2ede3]">
          <div className="flex marquee whitespace-nowrap gap-12 font-display text-3xl italic md:text-5xl">
            {[
              "Product design", "Engineering", "Writing", "Research",
              "Design systems", "Branding", "Motion", "Strategy",
            ].concat([
              "Product design", "Engineering", "Writing", "Research",
              "Design systems", "Branding", "Motion", "Strategy",
            ]).map((w, i) => (
              <span key={i} className="flex items-center gap-12">
                <span>{w}</span>
                <span className="text-[#ff5a1f]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="dot font-mono text-xs uppercase tracking-[0.22em] text-[#6d675a]">Selected work</p>
              <h2 className="font-display mt-4 max-w-2xl text-5xl leading-[1.02] md:text-6xl">
                Things I built, launched, and still operate.
              </h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-sm text-[#2a2a27] underline-grow">
              Full archive <Icon name="arrow-up" className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:auto-rows-[220px] md:grid-cols-6">
            {projects.map((p) => (
              <article key={p.name} className={`group relative overflow-hidden rounded-3xl border border-[#d5cdbb] ${p.span}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${p.tone}`} />
                <div className="absolute inset-0 paper-noise mix-blend-overlay opacity-60" />
                <div className="relative flex h-full flex-col justify-between p-6 text-[#f7f2e7]">
                  <div className="flex items-start justify-between">
                    <span className="rounded-full border border-white/30 bg-black/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/90 backdrop-blur">
                      {p.kind}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white/90 transition group-hover:-rotate-45 group-hover:border-white">
                      <Icon name="arrow-up" className="h-4 w-4" />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl leading-tight md:text-4xl">{p.name}</h3>
                    <p className="mt-2 max-w-sm text-sm text-white/85">{p.blurb}</p>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-white/60">{p.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 border-t border-[#d5cdbb]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="dot font-mono text-xs uppercase tracking-[0.22em] text-[#6d675a]">What I do</p>
              <h2 className="font-display mt-4 text-5xl leading-[1.02] md:text-6xl">
                Four practices.<br />
                <em className="font-normal italic text-[#ff5a1f]">One partner.</em>
              </h2>
              <p className="mt-6 max-w-md text-[#2a2a27]/75">
                I take on two to three partner projects a year — usually founders or small teams who want the
                clarity of a one-person studio with senior-level craft across design and engineering.
              </p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#111210]/20 px-5 py-3 text-sm text-[#2a2a27] transition hover:bg-[#111210] hover:text-[#f2ede3]">
                Start a conversation <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>

            <ul className="divide-y divide-[#d5cdbb]">
              {services.map((s) => (
                <li key={s.n} className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 py-6">
                  <span className="font-display text-3xl text-[#ff5a1f] md:text-4xl">{s.n}</span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl">{s.t}</h3>
                    <p className="mt-2 max-w-xl text-[#2a2a27]/75">{s.body.replaceAll('&apos;', "'")}</p>
                  </div>
                  <span className="mt-2 grid h-10 w-10 place-items-center rounded-full border border-[#111210]/20 text-[#2a2a27] transition group-hover:-rotate-45 group-hover:bg-[#111210] group-hover:text-[#f2ede3]">
                    <Icon name="arrow-up" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Now */}
      <section id="now" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-[36px] border border-[#d5cdbb] bg-[#111210] p-10 text-[#f2ede3] md:p-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-[320px] w-[320px] rounded-full opacity-60 blur-3xl"
                 style={{ background: "radial-gradient(circle, #ff5a1f, transparent 60%)" }} />
            <div className="relative grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="dot font-mono text-xs uppercase tracking-[0.22em] text-white/60">Now</p>
                <h2 className="font-display mt-4 text-5xl leading-[1.02] md:text-6xl">
                  What I&apos;m working on<br />
                  <em className="font-normal italic text-[#ff7a4a]">this season.</em>
                </h2>
                <p className="mt-6 max-w-md text-white/70">
                  Inspired by Derek Sivers. Updated when something meaningful changes. Last edited — April 2026.
                </p>
              </div>
              <ul className="space-y-3">
                {now.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#ff5a1f]/20 font-mono text-xs text-[#ff7a4a]">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-white/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Journal */}
      <section id="journal" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="dot font-mono text-xs uppercase tracking-[0.22em] text-[#6d675a]">Journal</p>
              <h2 className="font-display mt-4 text-5xl leading-[1.02] md:text-6xl">Field notes from the studio.</h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-sm text-[#2a2a27] underline-grow">All entries <Icon name="arrow-up" className="h-4 w-4" /></a>
          </div>

          <ul className="mt-12 divide-y divide-[#d5cdbb] border-t border-b border-[#d5cdbb]">
            {journal.map((j) => (
              <li key={j.t} className="group grid grid-cols-[100px_1fr_auto] items-start gap-6 py-6">
                <span className="font-mono text-xs text-[#6d675a]">{j.d}</span>
                <div>
                  <h3 className="font-display text-2xl leading-snug md:text-3xl">{j.t.replaceAll('&apos;', "'")}</h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-[#6d675a]">{j.kind}</p>
                </div>
                <span className="mt-2 grid h-10 w-10 place-items-center rounded-full border border-[#111210]/20 text-[#2a2a27] transition group-hover:-rotate-45 group-hover:bg-[#111210] group-hover:text-[#f2ede3]">
                  <Icon name="arrow-up" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 border-t border-[#d5cdbb]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <article key={t.a} className={`rounded-3xl border border-[#d5cdbb] p-8 ${i === 0 ? "bg-[#e5dfd1]" : "bg-white/60"}`}>
                <span className="font-display text-6xl leading-none text-[#ff5a1f]">&ldquo;</span>
                <p className="font-display mt-2 text-2xl leading-snug md:text-3xl">{t.q}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-[#d5cdbb] pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#111210] font-display text-sm text-[#f2ede3]">{t.a.split(" ").map((n) => n[0]).join("")}</span>
                  <div>
                    <p className="text-sm font-semibold">{t.a}</p>
                    <p className="text-xs text-[#6d675a]">{t.r}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#ffd7b6] via-[#ff9a5e] to-[#ff5a1f] p-10 md:p-16">
            <div className="absolute inset-0 paper-noise mix-blend-overlay opacity-70" />
            <div className="relative grid items-end gap-10 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#3a1a0a]/80">Say hello</p>
                <h2 className="font-display mt-4 text-5xl leading-[1.02] text-[#1c0b04] md:text-7xl">
                  Have a project?<br />
                  Let&apos;s <em className="italic">talk</em>.
                </h2>
                <p className="mt-6 max-w-lg text-[#3a1a0a]/80">
                  Email works best. I read every message personally and reply within one business day — usually
                  sooner, unless I&apos;m deep in ServerCompass work.
                </p>
                <a
                  href="mailto:hello@stoicsoft.com"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#111210] px-6 py-3.5 text-sm text-[#f2ede3] transition hover:bg-black"
                >
                  <Icon name="mail" /> hello@stoicsoft.com
                </a>
              </div>

              <div className="rounded-3xl border border-[#21100a]/20 bg-[#f2ede3] p-6 text-[#111210]">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#6d675a]">Studio hours</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex justify-between border-b border-[#d5cdbb] pb-2"><span>Lisbon</span><span className="text-[#6d675a]">09:00 — 18:00 WET</span></li>
                  <li className="flex justify-between border-b border-[#d5cdbb] pb-2"><span>Deep work</span><span className="text-[#6d675a]">Tue · Wed · Fri</span></li>
                  <li className="flex justify-between"><span>Meetings</span><span className="text-[#6d675a]">Mon · Thu afternoon</span></li>
                </ul>
                <div className="mt-6 rounded-2xl bg-[#e5dfd1] p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6d675a]">Median reply time</p>
                  <p className="font-display mt-1 text-3xl">4h 12m</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#d5cdbb] bg-[#e5dfd1]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-3 font-display text-xl font-medium">
              <Monogram /> StoicSoft
            </a>
            <p className="mt-4 max-w-sm text-sm text-[#2a2a27]/75">
              An independent product studio. Run by one human. Based in Lisbon, working with teams worldwide.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#6d675a]">Studio</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#work" className="underline-grow">Work</a></li>
              <li><a href="#services" className="underline-grow">Services</a></li>
              <li><a href="#journal" className="underline-grow">Journal</a></li>
              <li><a href="#now" className="underline-grow">Now</a></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#6d675a]">Products</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="underline-grow">ServerCompass</a></li>
              <li><a href="#" className="underline-grow">1DevTool</a></li>
              <li><a href="#" className="underline-grow">Aether Journal</a></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#6d675a]">Elsewhere</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="mailto:hello@stoicsoft.com" className="underline-grow">hello@stoicsoft.com</a></li>
              <li><a href="#" className="underline-grow">Twitter</a></li>
              <li><a href="#" className="underline-grow">GitHub</a></li>
              <li><a href="#" className="underline-grow">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#d5cdbb]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-[#6d675a]">
            <span>© {new Date().getFullYear()} StoicSoft. A one-human studio.</span>
            <span className="font-mono">Lisbon · 38.72°N 9.14°W</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
