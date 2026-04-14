const featured = {
  n: "XLIX",
  title: "The case for quieter software",
  dek: "An argument for tools that stop competing for your attention — and the slow work of building them when every product incentive points the other way.",
  date: "April 12, 2026",
  read: "24 minutes",
  words: "5,412 words",
  cat: "Essay",
}

const essays = {
  "2026": [
    { n: "XLIX", t: "The case for quieter software", d: "Apr 12", read: "24 min", cat: "Essay" },
    { n: "XLVIII", t: "On the kind of attention a book wants", d: "Mar 01", read: "14 min", cat: "Essay" },
    { n: "XLVII", t: "Some notes on finishing", d: "Feb 08", read: "9 min", cat: "Note" },
  ],
  "2025": [
    { n: "XLVI", t: "What I meant when I said &lsquo;small&rsquo;", d: "Dec 15", read: "18 min", cat: "Essay" },
    { n: "XLV", t: "The reading logs of a bad reader", d: "Oct 02", read: "11 min", cat: "Essay" },
    { n: "XLIV", t: "Letters from the edge of a long project", d: "Aug 21", read: "16 min", cat: "Essay" },
    { n: "XLIII", t: "On changing your mind, in public", d: "Jun 17", read: "12 min", cat: "Essay" },
    { n: "XLII", t: "Three paragraphs on time", d: "Apr 11", read: "4 min", cat: "Note" },
    { n: "XLI", t: "The software that will outlive us", d: "Feb 28", read: "19 min", cat: "Essay" },
  ],
  "2024": [
    { n: "XL", t: "An inventory of things I was wrong about", d: "Nov 12", read: "22 min", cat: "Essay" },
    { n: "XXXIX", t: "On the week between drafts", d: "Sep 24", read: "8 min", cat: "Note" },
    { n: "XXXVIII", t: "Everything is retrieval", d: "Jul 06", read: "15 min", cat: "Essay" },
    { n: "XXXVII", t: "Why I started writing numbers in Roman", d: "Mar 18", read: "6 min", cat: "Note" },
  ],
}

const reading = [
  { t: "A Philosophy of Software Design", a: "John Ousterhout", s: "re-read" },
  { t: "The Overstory", a: "Richard Powers", s: "finished" },
  { t: "Cultish", a: "Amanda Montell", s: "reading" },
  { t: "The Annotated Turing", a: "Charles Petzold", s: "on the pile" },
]

const faqs = [
  { q: "How often do you publish?", a: "When something is worth saying — usually six to nine essays a year, plus shorter notes in between. The calendar does not tell me when to write." },
  { q: "Is there an RSS feed?", a: "Yes, and a corresponding JSON feed. I recommend both. The link is in the footer, and every essay page has an inline subscribe. Unsubscribe is a single click." },
  { q: "Can I reprint an essay?", a: "Yes, with attribution and a link back. If you&apos;d like a clean print-ready version for a magazine, write to me — I usually say yes." },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "clock") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>)
  if (name === "book") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4Z"/><path d="M4 4a4 4 0 0 1 4 4v12"/></svg>)
  if (name === "rss") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1.4"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>)
  return null
}

export default function Home() {
  return (
    <div className="relative bg-[#fbf7ed] text-[#181512]">
      <div className="pointer-events-none fixed inset-0 paper opacity-40" />

      {/* Masthead */}
      <header className="relative z-20 border-b border-[#d9cfb8]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3 font-sans text-xs uppercase tracking-[0.22em] text-[#6e6558]">
          <p>Volume IV</p>
          <p className="italic normal-case tracking-normal text-[#181512]">Essays by Wren Holloway</p>
          <p>Est. 2019</p>
        </div>
        <div className="rule h-px" />

        <div className="mx-auto max-w-4xl px-6 py-12 text-center">
          <h1 className="text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
            <span className="italic text-[#9d3216]">Wren</span> Holloway
          </h1>
          <p className="mt-5 text-2xl italic text-[#2a2520]">Essays, quietly, on the long work.</p>
        </div>

        <div className="rule h-px" />

        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3 font-sans text-xs uppercase tracking-[0.22em]">
          <nav className="flex gap-5 text-[#2a2520]">
            <a href="#essays" className="underline-grow">Essays</a>
            <a href="#archive" className="underline-grow">Archive</a>
            <a href="#reading" className="underline-grow">Reading</a>
            <a href="#about" className="underline-grow">About</a>
          </nav>
          <div className="flex items-center gap-4 text-[#6e6558]">
            <a href="#" className="flex items-center gap-1.5 underline-grow"><Icon name="rss" className="h-3.5 w-3.5" /> RSS</a>
            <a href="#subscribe" className="flex items-center gap-1.5 rounded-full bg-[#181512] px-3 py-1.5 normal-case text-[#fbf7ed] hover:bg-[#9d3216]">
              <Icon name="mail" className="h-3.5 w-3.5" /> Subscribe
            </a>
          </div>
        </div>
        <div className="rule h-px" />
      </header>

      {/* Featured essay */}
      <section id="essays" className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="flex items-center gap-3 font-sans text-xs uppercase tracking-[0.22em] text-[#6e6558]">
            <span className="rounded-full border border-[#9d3216]/30 bg-[#9d3216]/10 px-2.5 py-1 text-[#9d3216]">New essay · N°. {featured.n}</span>
            <span>·</span>
            <span>{featured.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Icon name="clock" className="h-3 w-3" /> {featured.read}</span>
          </div>

          <h2 className="mt-7 text-[clamp(2.5rem,6vw,5rem)] leading-[1.04] tracking-tight">
            {featured.title}
          </h2>

          <p className="mt-6 text-2xl italic leading-relaxed text-[#2a2520]/90">
            {featured.dek}
          </p>

          <div className="rule mt-10 h-px" />

          <p className="dropcap mt-10 text-xl leading-relaxed text-[#2a2520]">
            There is, somewhere near the middle of any long project, a week where you notice that the tool
            you&apos;ve been building no longer behaves like a thing you are making — it behaves like a small
            city you live in. The streets are yours; the noise is yours. You begin to ask what kind of city
            you want to live in, and whether the decisions you made a year ago, when it was still a sketch,
            would be the same ones you would make today.
          </p>

          <p className="mt-6 text-xl leading-relaxed text-[#2a2520]">
            This essay is about that noticing. It is not a manifesto. It is a letter I have been writing to
            myself, on and off, for most of the last decade — and which, after a conversation over coffee at
            a mill in Évora, I finally decided to finish.
          </p>

          <a href="#" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#181512] px-5 py-3 font-sans text-sm font-semibold text-[#fbf7ed] hover:bg-[#9d3216]">
            Continue reading — 24 minutes <Icon name="arrow" className="h-4 w-4" />
          </a>

          <div className="rule mt-14 h-px" />

          <div className="mt-10 grid gap-4 font-sans text-xs uppercase tracking-[0.18em] text-[#6e6558] sm:grid-cols-3">
            <p>{featured.words}</p>
            <p>{featured.cat}</p>
            <p>Filed in · Software, craft</p>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section id="archive" className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 pb-16">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#9d3216]">Archive</p>
              <h2 className="mt-3 text-5xl leading-tight">Every essay, by year.</h2>
            </div>
            <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#6e6558]">49 essays · 14 notes</p>
          </div>

          <div className="mt-12 space-y-14">
            {Object.entries(essays).map(([year, items]) => (
              <div key={year}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-6xl italic text-[#9d3216]">{year}</h3>
                  <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#6e6558]">{items.length} pieces</p>
                </div>
                <div className="rule mt-4 h-px" />
                <ul className="mt-6 divide-y divide-[#d9cfb8]">
                  {items.map((e) => (
                    <li key={e.n} className="group grid grid-cols-[60px_1fr_auto_auto] items-start gap-6 py-5">
                      <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#6e6558]">N°. {e.n}</span>
                      <div>
                        <h4 className="text-2xl leading-snug underline-grow" dangerouslySetInnerHTML={{__html: e.t.replaceAll("&lsquo;", "&lsquo;").replaceAll("&rsquo;", "&rsquo;")}} />
                        <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.22em] text-[#6e6558]">{e.cat}</p>
                      </div>
                      <span className="font-sans text-xs text-[#6e6558]">{e.d}</span>
                      <span className="font-sans text-xs text-[#6e6558]">{e.read}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-[#181512]/20 px-5 py-3 font-sans text-sm hover:bg-[#181512] hover:text-[#fbf7ed]">
              Open the pre-2024 archive <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Reading log */}
      <section id="reading" className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 pb-16">
          <div className="rule h-px" />
          <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#9d3216]">Reading log</p>
              <h2 className="mt-3 text-5xl italic leading-tight">
                What sits <span className="text-[#9d3216]">on the desk.</span>
              </h2>
              <p className="mt-5 text-[#2a2520]/85">
                A quietly-kept record of the books I&apos;m reading, re-reading, and leaving unfinished. Updated
                when things change. Honest about the pile.
              </p>
            </div>

            <ul className="divide-y divide-[#d9cfb8] border-t border-b border-[#d9cfb8]">
              {reading.map((r) => (
                <li key={r.t} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4">
                  <Icon name="book" className="h-5 w-5 text-[#9d3216]" />
                  <div>
                    <p className="text-xl">{r.t}</p>
                    <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#6e6558]">{r.a}</p>
                  </div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#6e6558]">{r.s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rule mt-14 h-px" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 pb-16">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#9d3216]">About</p>
              <h2 className="mt-3 text-5xl italic leading-[1.02]">
                Wren <span className="text-[#9d3216]">Holloway.</span>
              </h2>
              <p className="mt-4 text-lg text-[#2a2520]/90">
                Writer. Indie developer. Keeper of a small studio attached to StoicSoft.
              </p>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[#2a2520]">
              <p>
                I write essays here when something has been sitting with me long enough that the writing feels
                less like a performance and more like an account. The pace is slow on purpose.
              </p>
              <p>
                During the day I work on independent software at the StoicSoft studio — ServerCompass,
                1DevTool, and whatever quiet project is next. The two parts of my life have grown into each
                other.
              </p>
              <p className="annotation pl-6 italic text-[#9d3216]">
                &ldquo;Write as if no one is reading. Then edit as if everyone is.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section id="subscribe" className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 pb-20">
          <div className="rule h-px" />
          <div className="mt-14 rounded-[32px] border border-[#d9cfb8] bg-[#f3ecd9] p-10 md:p-14">
            <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#9d3216]">Subscribe</p>
                <h2 className="mt-3 text-5xl italic leading-[1.02]">
                  A quiet email, <span className="text-[#9d3216]">once in a while.</span>
                </h2>
                <p className="mt-5 max-w-md text-[#2a2520]/85">
                  I&apos;ll send you new essays and notes as they land — six to nine times a year. No
                  reminders, no promotions, no sub-tiers. Unsubscribe with one click.
                </p>
                <p className="mt-4 font-sans text-xs uppercase tracking-[0.22em] text-[#6e6558]">
                  6,240 readers · since 2019 · 0 sponsors
                </p>
              </div>

              <form className="flex items-center gap-2 rounded-full border border-[#181512]/15 bg-[#fbf7ed] p-1">
                <input type="email" placeholder="your@email" className="flex-1 bg-transparent px-4 py-2 font-sans text-sm outline-none" />
                <button className="rounded-full bg-[#181512] px-4 py-2 font-sans text-xs font-semibold text-[#fbf7ed] hover:bg-[#9d3216]">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ footer */}
      <footer className="relative z-10 border-t border-[#d9cfb8] bg-[#f3ecd9]">
        <div className="mx-auto grid max-w-4xl gap-12 px-6 py-14 md:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#6e6558]">Colophon</p>
            <p className="mt-4 text-lg italic">
              Essays, quietly, by Wren Holloway. Set in Crimson Pro and Inter. Written in Markdown, typeset
              with care, hosted by StoicSoft.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 font-sans text-xs uppercase tracking-[0.22em] text-[#6e6558]">
              <a href="#" className="flex items-center gap-1.5 underline-grow"><Icon name="rss" className="h-3.5 w-3.5" /> RSS</a>
              <a href="#" className="flex items-center gap-1.5 underline-grow"><Icon name="rss" className="h-3.5 w-3.5" /> JSON</a>
              <a href="mailto:wren@stoicsoft.com" className="flex items-center gap-1.5 underline-grow"><Icon name="mail" className="h-3.5 w-3.5" /> Email</a>
              <a href="#" className="underline-grow">Mastodon</a>
            </div>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#9d3216]">Ahead of the question</p>
            <div className="mt-4 divide-y divide-[#d9cfb8] border-t border-b border-[#d9cfb8]">
              {faqs.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-sans text-sm font-medium">
                    {f.q}
                    <span className="ml-4 grid h-6 w-6 place-items-center rounded-full border border-[#181512]/15 text-[#181512]/50 transition group-open:rotate-45 group-open:border-[#9d3216] group-open:text-[#9d3216]">+</span>
                  </summary>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#2a2520]/80" dangerouslySetInnerHTML={{__html: f.a.replaceAll("&apos;", "&rsquo;")}} />
                </details>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#d9cfb8]">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-5 font-sans text-xs text-[#6e6558]">
            <span>© {new Date().getFullYear()} Wren Holloway · A StoicSoft studio publication.</span>
            <span className="italic">Lisbon · 38.72°N 9.14°W</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
