const issues = [
  { n: "172", d: "Apr 13", t: "The pricing page that sat for two years", s: "On the moment a side project quietly turns into a business — and the page that lets you charge for it.", read: "12 min" },
  { n: "171", d: "Apr 06", t: "What I learned shipping ServerCompass to its first thousand teams", s: "On knowing what to ignore in your first year, and the three signals that finally mean it&apos;s time to hire.", read: "18 min" },
  { n: "170", d: "Mar 30", t: "An honest accounting of indie studio finances, year four", s: "Revenue, costs, savings, and the spreadsheet that I rewrite every January. Pulled directly from our books.", read: "9 min" },
  { n: "169", d: "Mar 23", t: "Why the &lsquo;simple&rsquo; tools take six months to build", s: "And what shipping the StoicSoft template registry taught me about staying small.", read: "11 min" },
  { n: "168", d: "Mar 16", t: "Working with the seasons of your nervous system", s: "On planning launches around your own energy — not the calendar.", read: "8 min" },
  { n: "167", d: "Mar 09", t: "Three drafts, no deletions", s: "How writing weekly for three years rewired the way I write code.", read: "14 min" },
]

const press = [
  "Featured in The Browser",
  "Linked from Newsletter Crew",
  "Pulled into Hacker Newsletter (3×)",
  "Recommended in Indie Hackers",
]

const popular = [
  { t: "On knowing when to charge", n: "Issue 138 · Sep 2024" },
  { t: "The studio finance spreadsheet", n: "Issue 119 · May 2024" },
  { t: "Lessons from a 12-month sabbatical", n: "Issue 094 · Nov 2023" },
]

const faqs = [
  { q: "How often does it arrive?", a: "Every Sunday at 9am Lisbon time. I&apos;ve sent 172 issues without missing a week." },
  { q: "What does it cost?", a: "Free. There are no ads, no sponsorships, and no &ldquo;premium&rdquo; tier. If you want to support the work, the StoicSoft studio sells templates and software." },
  { q: "Can I read past issues?", a: "Yes — every issue is published on the site after it goes out, fully indexed and searchable. You don&apos;t need to subscribe to read." },
  { q: "Will my email be shared?", a: "Never. The list is run on a self-hosted instance with full export and one-click unsubscribe in every email. I&apos;m the only person who sees the addresses." },
]

function Mark() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <rect x="3" y="3" width="26" height="26" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 22V10l5 8 5-8v12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>)
  if (name === "rss") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1.4"/></svg>)
  if (name === "quote") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="M9 7H5v6c0 2-1 4-3 4v2c4 0 7-3 7-7V7Zm10 0h-4v6c0 2-1 4-3 4v2c4 0 7-3 7-7V7Z"/></svg>)
  if (name === "feather") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M20 4c-2 8-9 11-13 13l-3 3M14 14h7M14 9l4-4"/></svg>)
  return null
}

export default function Home() {
  return (
    <div className="relative bg-[#f7f1e3] text-[#131110]">
      <div className="pointer-events-none fixed inset-0 paper-tex opacity-50" />

      {/* Masthead */}
      <header className="relative z-20 border-b border-[#d8cdb6]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-xs uppercase tracking-[0.18em] text-[#75695a]">
          <p>Vol. IV · Issue 172</p>
          <p className="font-serif text-base italic normal-case tracking-normal text-[#131110]">Sunday, April 13, 2026</p>
          <p>Lisbon · Free, no ads</p>
        </div>
        <div className="rule h-px" />
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6">
          <a href="#" className="flex items-center gap-3 text-2xl">
            <span className="text-[#a04023]"><Mark /></span>
            <span className="font-serif italic">The Margin</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-[#2c2622]/80 md:flex">
            <a href="#current" className="underline-grow">This week</a>
            <a href="#archive" className="underline-grow">Archive</a>
            <a href="#about" className="underline-grow">About</a>
            <a href="#popular" className="underline-grow">Popular</a>
          </nav>
          <a href="#subscribe" className="group inline-flex items-center gap-2 rounded-full bg-[#131110] px-4 py-2 text-sm text-[#f7f1e3] transition hover:bg-[#a04023]">
            Subscribe — free <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
        <div className="rule h-px" />
      </header>

      {/* Hero issue */}
      <section id="current" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-10">
          <div className="grid gap-10 md:grid-cols-[1fr_300px]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#75695a]">Issue 172 · Apr 13, 2026</p>
              <h1 className="font-serif mt-4 text-[clamp(2.4rem,5.5vw,5rem)] leading-[1.05] tracking-tight">
                The pricing page that <em className="italic text-[#a04023]">sat for two years.</em>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-[#2c2622]/80">
                Some side projects quietly become businesses without anybody noticing. This week: the long
                Saturday afternoon when I finally added a Stripe checkout to a tool I&apos;d been giving away
                for two years — and what changed in the next thirty days.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#" className="group inline-flex items-center gap-2 rounded-full bg-[#a04023] px-6 py-3.5 text-sm font-semibold text-[#f7f1e3] transition hover:bg-[#852f15]">
                  Read this week&apos;s issue <Icon name="arrow-up" className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a href="#subscribe" className="inline-flex items-center gap-2 rounded-full border border-[#131110]/20 px-5 py-3 text-sm text-[#2c2622] hover:bg-[#131110] hover:text-[#f7f1e3]">
                  <Icon name="mail" className="h-4 w-4" /> Subscribe to next Sunday
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-[#75695a]">
                <span>9,420 readers</span>
                <span>·</span>
                <span>172 issues, 0 missed Sundays</span>
                <span>·</span>
                <span>Free · listener-funded studio</span>
              </div>
            </div>

            <aside className="rounded-3xl border border-[#d8cdb6] bg-white/50 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#75695a]">From this week</p>
              <p className="font-serif mt-3 text-2xl italic leading-snug">
                &ldquo;Pricing is what you do, not what you write.&rdquo;
              </p>
              <p className="mt-3 text-sm text-[#2c2622]/75">
                — On the moment a checkbox in your CRM tells the truth your pricing page won&apos;t.
              </p>
              <div className="rule mt-5 h-px" />
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.22em] text-[#75695a]">Inside</p>
              <ul className="mt-3 space-y-2 text-sm text-[#2c2622]/85">
                <li>· The afternoon of the Stripe install</li>
                <li>· What broke in the first 48 hours</li>
                <li>· Three lines of copy that did the heavy lifting</li>
                <li>· The 30-day P&amp;L, unredacted</li>
              </ul>
            </aside>
          </div>

          <div className="rule mt-14 h-px" />
        </div>
      </section>

      {/* Excerpt block */}
      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 pb-16">
          <p className="font-serif dropcap text-lg leading-relaxed text-[#2c2622]">
            On a Saturday in late February, I sat on the floor of my apartment and finally added a checkout to
            a tool I&apos;d been giving away free for two and a half years. The page had been written. The
            Stripe account was already configured. The migration scripts were tested. What was missing was the
            small act of pressing publish — and what I learned, over the next thirty days, is that pressing
            publish is the entire job. Everything before it is rehearsal.
          </p>
          <p className="mt-6 text-base text-[#2c2622]/80">
            What follows is what changed: in revenue, in conversations with users, in the rhythm of my own
            week. None of it is dramatic. All of it surprised me. <a href="#" className="underline-grow text-[#a04023]">Continue reading the full issue →</a>
          </p>
        </div>
      </section>

      {/* Archive */}
      <section id="archive" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rule h-px" />
          <div className="mt-12 grid gap-12 md:grid-cols-[1fr_280px]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#75695a]">From the archive</p>
              <h2 className="font-serif mt-3 text-4xl leading-[1.05] md:text-5xl">Recent Sundays.</h2>

              <ul className="mt-10 divide-y divide-[#d8cdb6] border-t border-b border-[#d8cdb6]">
                {issues.map((i) => (
                  <li key={i.n} className="group grid grid-cols-[60px_1fr_70px] items-start gap-6 py-6">
                    <span className="font-mono text-xs text-[#75695a]">№{i.n}</span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[#75695a]">{i.d} · {i.read} read</p>
                      <h3 className="font-serif mt-1 text-2xl leading-snug md:text-3xl" dangerouslySetInnerHTML={{__html: i.t.replace('&apos;', "'").replace('&lsquo;', "'").replace('&rsquo;', "'")}} />
                      <p className="mt-2 text-sm italic text-[#2c2622]/75" dangerouslySetInnerHTML={{__html: i.s.replaceAll('&apos;', "'")}} />
                    </div>
                    <Icon name="arrow-up" className="mt-2 h-5 w-5 text-[#75695a] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#a04023]" />
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between text-sm">
                <a href="#" className="underline-grow text-[#a04023]">Browse all 172 issues →</a>
                <a href="#" className="flex items-center gap-2 text-[#75695a] hover:text-[#a04023]"><Icon name="rss" className="h-4 w-4" /> RSS feed</a>
              </div>
            </div>

            <aside className="space-y-6">
              <div id="popular" className="rounded-2xl border border-[#d8cdb6] bg-white/40 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#75695a]">Most read</p>
                <ul className="mt-3 space-y-3">
                  {popular.map((p) => (
                    <li key={p.t} className="border-b border-[#d8cdb6] pb-3 last:border-b-0 last:pb-0">
                      <p className="font-serif text-lg leading-snug">{p.t}</p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[#75695a]">{p.n}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#d8cdb6] bg-[#ede4cf] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#75695a]">As mentioned in</p>
                <ul className="mt-3 space-y-2 text-sm text-[#2c2622]/85">
                  {press.map((p) => <li key={p}>· {p}</li>)}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rule h-px" />
          <div className="mt-14 grid gap-10 md:grid-cols-[200px_1fr]">
            <div>
              <div className="aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-[#a04023] via-[#c46a3f] to-[#ede4cf]">
                <div className="grid h-full w-full place-items-center font-serif text-7xl italic text-white">CF</div>
              </div>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#75695a]">Written by</p>
              <h2 className="font-serif mt-3 text-4xl leading-[1.05] md:text-5xl">
                Clara Figueira <em className="italic text-[#a04023]">at StoicSoft.</em>
              </h2>
              <p className="mt-6 max-w-2xl text-[#2c2622]/85">
                The Margin is a Sunday-morning newsletter about running a small software studio. I write it in
                the kitchen, before everyone wakes up. It pairs with the products we build at StoicSoft —
                ServerCompass, 1DevTool, and the others.
              </p>
              <p className="mt-4 max-w-2xl text-[#2c2622]/85">
                I&apos;ve sent 172 weekly issues. Some have been good; some have been forgettable. I keep them
                all in the archive — even the ones I&apos;d quietly delete if the law allowed.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <a href="#" className="underline-grow text-[#a04023]">Read more about the studio →</a>
                <a href="#" className="text-[#75695a] hover:text-[#131110]">All my writing elsewhere</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section id="subscribe" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rule h-px" />
          <div className="mt-14 overflow-hidden rounded-[36px] border border-[#d8cdb6] bg-[#131110] p-10 text-[#f7f1e3] md:p-14">
            <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a04023]">Subscribe — free</p>
                <h2 className="font-serif mt-3 text-5xl leading-[1.02] md:text-7xl">
                  One short note,<br />
                  <em className="italic text-[#e0c692]">every Sunday.</em>
                </h2>
                <p className="mt-6 max-w-md text-[#f7f1e3]/75">
                  No ads, no sponsorships, no premium tier. Just a thoughtful 8–18 minute read in your inbox at
                  9am Lisbon time. Unsubscribe with one click — I promise not to take it personally.
                </p>
              </div>

              <form className="rounded-3xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/50">Your email</p>
                <input type="email" placeholder="reader@studio.com" className="mt-2 w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-[#a04023]" />
                <button type="button" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#a04023] px-5 py-3 text-sm font-semibold text-[#f7f1e3] transition hover:bg-[#852f15]">
                  Send me Sunday <Icon name="arrow" className="h-4 w-4" />
                </button>
                <p className="mt-3 text-center text-xs text-white/55">
                  9,420 readers. No spam, ever. <a href="#" className="underline">Privacy</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 pb-24">
          <div className="rule h-px" />
          <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#75695a]">FAQ</p>
              <h2 className="font-serif mt-3 text-4xl italic md:text-5xl">Ahead of the question.</h2>
            </div>
            <div className="divide-y divide-[#d8cdb6] rounded-3xl border border-[#d8cdb6] bg-white/40">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                    {f.q}
                    <span className="ml-4 grid h-7 w-7 place-items-center rounded-full border border-[#131110]/15 text-[#131110]/50 transition group-open:rotate-45 group-open:border-[#a04023] group-open:text-[#a04023]">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#2c2622]/75" dangerouslySetInnerHTML={{__html: f.a.replaceAll('&apos;', "'").replaceAll('&ldquo;', '"').replaceAll('&rdquo;', '"')}} />
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Colophon footer */}
      <footer className="relative z-10 border-t border-[#d8cdb6] bg-[#ede4cf]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 text-2xl">
              <span className="text-[#a04023]"><Mark /></span>
              <span className="font-serif italic">The Margin</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-[#2c2622]/80">
              A weekly newsletter on building independent software. Written in Lisbon, sent every Sunday at
              09:00 WET. A StoicSoft studio publication.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#75695a]">Newsletter</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#current" className="underline-grow">This week</a></li>
              <li><a href="#archive" className="underline-grow">Archive</a></li>
              <li><a href="#popular" className="underline-grow">Most read</a></li>
              <li><a href="#" className="underline-grow flex items-center gap-1"><Icon name="rss" className="h-3.5 w-3.5" /> RSS</a></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#75695a]">Studio</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="underline-grow">StoicSoft</a></li>
              <li><a href="#" className="underline-grow">ServerCompass</a></li>
              <li><a href="#" className="underline-grow">1DevTool</a></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#75695a]">Reach me</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="mailto:clara@stoicsoft.com" className="underline-grow">clara@stoicsoft.com</a></li>
              <li><a href="#" className="underline-grow">Mastodon</a></li>
              <li><a href="#" className="underline-grow">Bluesky</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#d8cdb6]">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-[#75695a]">
            <span>© {new Date().getFullYear()} The Margin · A StoicSoft publication.</span>
            <span className="font-serif italic">Set in Newsreader · Lisbon, Portugal</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
