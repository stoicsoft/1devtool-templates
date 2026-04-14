const essays = [
  { d: "Apr 11, 2026", t: "What it costs to keep a website for ten years", k: "essay · 11 min" },
  { d: "Mar 04, 2026", t: "Three years of mornings before email", k: "essay · 7 min" },
  { d: "Feb 01, 2026", t: "On letting a project finish you", k: "essay · 14 min" },
]

const notes = [
  { d: "Apr 13", t: "A footnote on Pessoa, in the metro" },
  { d: "Apr 09", t: "Why I keep printing things I&apos;ve already read on screen" },
  { d: "Apr 02", t: "The exact shape of a Tuesday" },
  { d: "Mar 28", t: "Two paragraphs on the colour of new leaves" },
  { d: "Mar 21", t: "What my reading log actually tracks" },
  { d: "Mar 14", t: "On putting the laptop on a different floor" },
]

const linksList = [
  { t: "&lsquo;The web we lost&rsquo;", s: "Anil Dash · 2012, still right" },
  { t: "Lisbon&apos;s open archive of azulejo patterns", s: "free · educational use" },
  { t: "The note system that finally stuck (after eight failed ones)", s: "by Andy Matuschak" },
  { t: "A tiny Mastodon instance for type designers", s: "host: Lisbon design coop" },
  { t: "How to keep a /now page", s: "by Derek Sivers" },
]

const bookshelf = [
  { t: "A Pattern Language", s: "spine-1" },
  { t: "The Annotated Turing", s: "spine-2" },
  { t: "Steal Like an Artist", s: "spine-3" },
  { t: "The Overstory", s: "spine-4" },
  { t: "Refactoring UI", s: "spine-5" },
  { t: "Bird by Bird", s: "spine-6" },
  { t: "Just Enough Research", s: "spine-7" },
  { t: "Cultish", s: "spine-8" },
]

const now = [
  "Working at the StoicSoft studio · 4 days a week",
  "Editing a longer essay on calm software · est. mid-May",
  "Reading: Cultish · Amanda Montell",
  "Walking 8km a day, slowly relearning my city",
  "Not on Twitter · email is the best way to reach me",
]

const projects = [
  { n: "01", t: "anya.garden", b: "This site. Tended weekly. A working notebook on the open web." },
  { n: "02", t: "Routine", b: "A small habit-tracking tool I keep refusing to monetise. ~2,400 quiet users." },
  { n: "03", t: "Lisbon Walks", b: "An open-source GPX archive of slow walks across the city. Updated monthly." },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "leaf") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21 3c0 11-7 18-18 18 0-11 7-18 18-18Z"/><path d="M8 16c3-3 8-8 12-12"/></svg>)
  if (name === "rss") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1.4"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>)
  if (name === "book") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4Z"/><path d="M4 4a4 4 0 0 1 4 4v12"/></svg>)
  if (name === "link") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1.5 1.5"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1.5-1.5"/></svg>)
  if (name === "pencil") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M14 4l6 6-12 12H2v-6L14 4Z"/></svg>)
  if (name === "compass") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="m14 10-6 6 2-6 6-2-2 2Z"/></svg>)
  return null
}

export default function Home() {
  return (
    <div className="relative bg-[#f9f6f0] text-[#1d1a16]">
      <div className="pointer-events-none fixed inset-0 paper opacity-40" />

      {/* Nav */}
      <header className="relative z-20 border-b border-[#ddd5be]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 font-mono text-base">
            <span className="text-[#4a6135]">~/</span>
            <span>anya.garden</span>
          </a>
          <nav className="hidden items-center gap-6 font-mono text-xs text-[#2a2620] md:flex">
            <a href="#essays" className="underline-grow">essays</a>
            <a href="#notes" className="underline-grow">notes</a>
            <a href="#links" className="underline-grow">links</a>
            <a href="#bookshelf" className="underline-grow">bookshelf</a>
            <a href="#now" className="underline-grow">now</a>
            <a href="#projects" className="underline-grow">projects</a>
          </nav>
          <div className="flex items-center gap-2 font-mono text-[10px] text-[#6f6757]">
            <span className="hidden md:inline">press <span className="kbd">⌘ K</span> to search</span>
            <a href="#contact" className="rounded-full bg-[#1d1a16] px-3 py-1.5 text-xs font-medium text-[#f9f6f0] hover:bg-[#4a6135]">say hi</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#6f6757]">
            <Icon name="leaf" className="mr-2 inline h-3 w-3 text-[#4a6135]" /> a small corner of the internet · est. 2017
          </p>
          <h1 className="font-serif mt-6 text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] tracking-tight">
            Hello, I&apos;m <span className="italic text-[#b85429]">Anya.</span>
            <br />
            This is my <span className="italic">garden</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#2a2620]/85">
            A working notebook on the open web. I tend it on Sundays — long essays when there&apos;s something
            to say, short notes when there isn&apos;t, and a slow trickle of links and books through the week.
            It&apos;s not a brand. It&apos;s a place to think out loud.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-[#6f6757]">
            <span className="flex items-center gap-1.5"><Icon name="pencil" className="h-3 w-3 text-[#b85429]" /> 84 essays</span>
            <span>·</span>
            <span className="flex items-center gap-1.5"><Icon name="leaf" className="h-3 w-3 text-[#4a6135]" /> 142 notes</span>
            <span>·</span>
            <span className="flex items-center gap-1.5"><Icon name="link" className="h-3 w-3 text-[#3a5b80]" /> 210 links</span>
            <span>·</span>
            <span className="flex items-center gap-1.5"><Icon name="book" className="h-3 w-3 text-[#c89a3b]" /> 64 books</span>
            <span>·</span>
            <span className="flex items-center gap-1.5"><Icon name="compass" className="h-3 w-3 text-[#b85429]" /> last tended Sunday</span>
          </div>

          <div className="dashed-rule mt-12 h-px" />
        </div>
      </section>

      {/* Two-column: Essays + Notes */}
      <section id="essays" className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 pb-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <Icon name="pencil" className="h-4 w-4 text-[#b85429]" />
                <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-[#b85429]">essays</h2>
              </div>
              <p className="font-serif mt-3 text-3xl italic">When there&apos;s something to say.</p>

              <ul className="mt-8 space-y-6">
                {essays.map((e) => (
                  <li key={e.t} className="border-l-2 border-[#b85429]/30 pl-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6f6757]">{e.d} · {e.k}</p>
                    <h3 className="font-serif mt-2 text-2xl leading-snug">
                      <a href="#" className="underline-grow">{e.t}</a>
                    </h3>
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-[#b85429] underline-grow">
                all essays → <Icon name="arrow" className="h-3.5 w-3.5" />
              </a>
            </div>

            <div id="notes">
              <div className="flex items-center gap-3">
                <Icon name="leaf" className="h-4 w-4 text-[#4a6135]" />
                <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-[#4a6135]">notes</h2>
              </div>
              <p className="font-serif mt-3 text-3xl italic">When something is just enough.</p>

              <ul className="mt-8 divide-y divide-[#ddd5be]">
                {notes.map((n) => (
                  <li key={n.d} className="flex items-baseline gap-4 py-3">
                    <span className="w-16 shrink-0 font-mono text-xs text-[#6f6757]">{n.d}</span>
                    <a href="#" className="font-serif text-lg leading-snug underline-grow" dangerouslySetInnerHTML={{__html: n.t.replaceAll("&apos;", "&rsquo;")}} />
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-[#4a6135] underline-grow">
                all 142 notes → <Icon name="arrow" className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="dashed-rule mt-16 h-px" />
        </div>
      </section>

      {/* Links + Bookshelf */}
      <section id="links" className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 pb-16">
          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <Icon name="link" className="h-4 w-4 text-[#3a5b80]" />
                <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-[#3a5b80]">links</h2>
              </div>
              <p className="font-serif mt-3 text-3xl italic">Recent things, worth your time.</p>

              <ul className="mt-8 divide-y divide-[#ddd5be]">
                {linksList.map((l, i) => (
                  <li key={i} className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-3 py-4">
                    <span className="font-mono text-[10px] text-[#3a5b80]">→</span>
                    <div>
                      <p className="font-serif text-lg leading-snug">
                        <a href="#" className="underline-grow" dangerouslySetInnerHTML={{__html: l.t.replaceAll("&apos;", "&rsquo;").replaceAll("&lsquo;", "&lsquo;").replaceAll("&rsquo;", "&rsquo;")}} />
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6f6757]" dangerouslySetInnerHTML={{__html: l.s.replaceAll("&apos;", "&rsquo;")}} />
                    </div>
                    <Icon name="arrow-up" className="h-3.5 w-3.5 text-[#6f6757] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#3a5b80]" />
                  </li>
                ))}
              </ul>
            </div>

            <div id="bookshelf">
              <div className="flex items-center gap-3">
                <Icon name="book" className="h-4 w-4 text-[#c89a3b]" />
                <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-[#c89a3b]">bookshelf</h2>
              </div>
              <p className="font-serif mt-3 text-3xl italic">What I&apos;m reading now.</p>

              <div className="mt-8 rounded-md border border-[#ddd5be] bg-[#efeadb] p-4">
                <div className="flex items-end justify-center gap-1 border-b-4 border-[#6f4a3a]/40 pb-1">
                  {bookshelf.map((b, i) => (
                    <div key={b.t} className={`group relative ${b.s} rounded-sm`} style={{ width: 18 + (i % 3) * 4, height: 110 + (i % 4) * 10 }}>
                      <span className="absolute left-1/2 top-2 -translate-x-1/2 -rotate-90 whitespace-nowrap font-serif text-[10px] italic text-white/85" style={{ transformOrigin: "center" }}>
                        {b.t}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-[#6f6757]">8 of 64 books · pile updated weekly</p>
              </div>

              <ul className="mt-6 space-y-2 font-serif text-base">
                {bookshelf.slice(0, 4).map((b) => (
                  <li key={b.t} className="flex items-baseline justify-between border-b border-dashed border-[#ddd5be] py-1.5">
                    <span className="italic">{b.t}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6f6757]">reading</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="dashed-rule mt-16 h-px" />
        </div>
      </section>

      {/* Now + Projects */}
      <section id="now" className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 pb-16">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3">
                <Icon name="compass" className="h-4 w-4 text-[#b85429]" />
                <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-[#b85429]">/now</h2>
              </div>
              <p className="font-serif mt-3 text-3xl italic">What I&apos;m up to today.</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6f6757]">last updated · April 11, 2026</p>

              <ul className="mt-8 space-y-3">
                {now.map((n, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-md border border-[#ddd5be] bg-[#efeadb] p-4 text-[#2a2620]">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#1d1a16] font-mono text-[10px] text-[#f9f6f0]">{i + 1}</span>
                    <span dangerouslySetInnerHTML={{__html: n.replaceAll("&apos;", "&rsquo;")}} />
                  </li>
                ))}
              </ul>
            </div>

            <div id="projects">
              <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-[#4a6135]">projects</h2>
              <p className="font-serif mt-3 text-3xl italic">Things I quietly maintain.</p>

              <div className="mt-8 space-y-3">
                {projects.map((p) => (
                  <article key={p.n} className="group rounded-md border border-[#ddd5be] bg-[#f9f6f0] p-5 transition hover:border-[#4a6135]">
                    <div className="flex items-baseline justify-between">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#4a6135]">{p.n}</p>
                      <Icon name="arrow-up" className="h-3.5 w-3.5 text-[#6f6757] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#4a6135]" />
                    </div>
                    <h3 className="font-serif mt-2 text-2xl">{p.t}</h3>
                    <p className="mt-2 text-sm text-[#2a2620]/85" dangerouslySetInnerHTML={{__html: p.b.replaceAll("&apos;", "&rsquo;").replaceAll("~", "&tilde;")}} />
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="dashed-rule mt-16 h-px" />
        </div>
      </section>

      {/* Contact + colophon */}
      <section id="contact" className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 pb-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
            <div className="rounded-lg border border-[#ddd5be] bg-[#efeadb] p-8">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#6f6757]">/colophon</p>
              <h2 className="font-serif mt-3 text-4xl italic">Hand-coded, on a slow Sunday.</h2>
              <p className="mt-4 text-[#2a2620]/85">
                Set in <span className="italic">Source Serif 4</span>, <span className="font-mono">iA Writer Quattro</span>,
                and <span className="font-mono">JetBrains Mono</span>. Built on the StoicSoft template
                <span className="font-mono"> blog-personal</span>. Hosted, ad-free, since 2017. The CMS is a folder of
                Markdown files and a Sunday morning.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs text-[#6f6757]">
                <a href="#" className="flex items-center gap-1.5 rounded-md border border-[#ddd5be] bg-[#f9f6f0] px-3 py-1.5 hover:border-[#1d1a16]"><Icon name="rss" className="h-3.5 w-3.5" /> rss</a>
                <a href="#" className="flex items-center gap-1.5 rounded-md border border-[#ddd5be] bg-[#f9f6f0] px-3 py-1.5 hover:border-[#1d1a16]"><Icon name="rss" className="h-3.5 w-3.5" /> json feed</a>
                <a href="#" className="flex items-center gap-1.5 rounded-md border border-[#ddd5be] bg-[#f9f6f0] px-3 py-1.5 hover:border-[#1d1a16]">webring</a>
                <a href="#" className="flex items-center gap-1.5 rounded-md border border-[#ddd5be] bg-[#f9f6f0] px-3 py-1.5 hover:border-[#1d1a16]">sitemap</a>
              </div>
            </div>

            <div className="rounded-lg border border-[#ddd5be] bg-[#1d1a16] p-8 text-[#f9f6f0]">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#c89a3b]">/say-hi</p>
              <h2 className="font-serif mt-3 text-4xl italic">Letters, openly.</h2>
              <p className="mt-4 text-[#f9f6f0]/85">
                Email is the best place to find me. I read everything and reply within a week — usually with a
                book recommendation you didn&apos;t ask for.
              </p>
              <a href="mailto:hello@anya.garden" className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#c89a3b] px-4 py-2.5 font-mono text-sm font-medium text-[#1d1a16] hover:bg-[#f9f6f0]">
                <Icon name="mail" className="h-4 w-4" /> hello@anya.garden
              </a>
              <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs text-[#f9f6f0]/70">
                <a href="#" className="underline-grow">mastodon</a>
                <span>·</span>
                <a href="#" className="underline-grow">are.na</a>
                <span>·</span>
                <a href="#" className="underline-grow">github</a>
                <span>·</span>
                <span className="text-[#f9f6f0]/40">no twitter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#ddd5be]">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-8 font-mono text-xs text-[#6f6757]">
          <span>© {new Date().getFullYear()} Anya Park · Tended on Sundays.</span>
          <span className="italic">A StoicSoft template · blog-personal</span>
        </div>
      </footer>
    </div>
  )
}
