const episodes = [
  { n: "084", t: "Shipping ServerCompass to 1,000 teams", g: "Priya Kapoor", d: "47 min", date: "Apr 09", tone: "from-[#8b6fff] to-[#ff5ab7]" },
  { n: "083", t: "The underrated art of a boring changelog", g: "Jonas Park", d: "52 min", date: "Apr 02", tone: "from-[#e7ff7b] to-[#8b6fff]" },
  { n: "082", t: "Should your side project charge from day one?", g: "Wren Holloway", d: "41 min", date: "Mar 26", tone: "from-[#ff5ab7] to-[#e7ff7b]" },
  { n: "081", t: "How to write docs developers actually read", g: "Amara Reyes", d: "55 min", date: "Mar 19", tone: "from-[#8b6fff] to-[#38d7d1]" },
  { n: "080", t: "A year of 5am shipping — does it still work?", g: "Mei Wong", d: "48 min", date: "Mar 12", tone: "from-[#e7ff7b] to-[#ff5ab7]" },
]

const hosts = [
  { name: "Clara Figueira", role: "Host · Designer", bio: "Builds design systems for independent teams. Writes the weekly show notes.", hue: "from-[#8b6fff] to-[#ff5ab7]" },
  { name: "Dante Okafor", role: "Host · Engineer", bio: "Runs the StoicSoft platform. Records all of the show's audio from a closet in Lisbon.", hue: "from-[#e7ff7b] to-[#8b6fff]" },
]

const platforms = ["Apple Podcasts", "Spotify", "Overcast", "Pocket Casts", "YouTube", "RSS"]

const guests = [
  "Priya Kapoor", "Jonas Park", "Wren Holloway", "Amara Reyes",
  "Mei Wong", "Diego Martín", "Anya Park", "Theo Imai",
]

const faqs = [
  { q: "How often do new episodes drop?", a: "Every Wednesday at 07:00 CET. We've published 84 episodes without missing a week, and don't plan to start now." },
  { q: "Can I suggest a guest?", a: "Yes — we get most of our lineup from listener suggestions. Email hello@signalpodcast.fm with a few sentences on why the guest and topic would matter to the show." },
  { q: "Are there ads?", a: "No. The show is funded by paid membership ($5/mo) which unlocks ad-free feeds, show transcripts, and a private Discord." },
  { q: "Where can I find transcripts?", a: "Every episode publishes with a full transcript — free to read on the site, indexed for search, and downloadable as Markdown." },
]

function Icon({ name, className = "h-5 w-5" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "mic") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/></svg>)
  if (name === "play") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="M7 4v16l14-8z"/></svg>)
  if (name === "pause") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>)
  if (name === "skip") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M13 6l7 6-7 6M4 6l7 6-7 6"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "rss") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1.5"/></svg>)
  if (name === "headphones") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 12a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-2v-8h4M3 12v7a2 2 0 0 0 2 2h2v-8H3"/></svg>)
  if (name === "star") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="m12 2 3 7 7 .6-5.3 4.6L18 22l-6-3.8L6 22l1.3-7.8L2 9.6 9 9l3-7Z"/></svg>)
  return null
}

function Waveform({ bars = 48, className = "" }) {
  const heights = Array.from({ length: bars }, (_, i) => {
    const x = i / bars
    return 20 + Math.sin(x * Math.PI * 3) * 30 + Math.sin(x * Math.PI * 7) * 15 + 10
  })
  return (
    <div className={`flex items-center gap-[3px] ${className}`}>
      {heights.map((h, i) => (
        <span key={i} className="w-[2px] rounded-full bg-current" style={{ height: `${Math.max(6, Math.abs(h))}%` }} />
      ))}
    </div>
  )
}

function PlayerCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-6 shadow-[0_40px_120px_-30px_rgba(139,111,255,0.5)] backdrop-blur">
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-[#8b6fff] via-[#ff5ab7] to-[#e7ff7b]">
          <div className="absolute inset-0 noise mix-blend-overlay opacity-80" />
          <span className="absolute inset-0 grid place-items-center font-serif text-2xl italic text-white">S</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#e7ff7b]">Ep. 084 · Now playing</p>
          <h3 className="mt-1 truncate text-xl font-semibold">Shipping ServerCompass to 1,000 teams</h3>
          <p className="mt-1 text-sm text-white/60">with Priya Kapoor · 47 min</p>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <Waveform className="h-10 flex-1 text-[#e7ff7b]" />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-mono text-xs text-white/50">12:08</span>
        <div className="flex items-center gap-3">
          <button className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/70 hover:border-white hover:text-white">
            <Icon name="skip" className="h-4 w-4 rotate-180" />
          </button>
          <button className="grid h-12 w-12 place-items-center rounded-full bg-[#e7ff7b] text-[#07060a] hover:scale-105 transition">
            <Icon name="pause" className="h-5 w-5" />
          </button>
          <button className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/70 hover:border-white hover:text-white">
            <Icon name="skip" className="h-4 w-4" />
          </button>
        </div>
        <span className="font-mono text-xs text-white/50">47:02</span>
      </div>

      <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-[25%] rounded-full bg-gradient-to-r from-[#8b6fff] to-[#e7ff7b]" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#07060a] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[820px] aura" />
      <div className="pointer-events-none absolute inset-0 dotgrid opacity-60" />

      {/* Nav */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#8b6fff] to-[#ff5ab7] text-white">
              <Icon name="mic" className="h-4 w-4" />
            </span>
            Signal
            <span className="ml-1 font-serif text-base italic text-white/50">fm</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            <a href="#episodes" className="hover:text-white">Episodes</a>
            <a href="#hosts" className="hover:text-white">Hosts</a>
            <a href="#membership" className="hover:text-white">Membership</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <a href="#subscribe" className="group inline-flex items-center gap-2 rounded-full bg-[#e7ff7b] px-4 py-2 text-sm font-semibold text-[#07060a] transition hover:bg-white">
            Subscribe <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                <span className="eq flex h-3 items-end gap-[2px]">
                  <span className="w-0.5 h-full bg-[#e7ff7b]" />
                  <span className="w-0.5 h-full bg-[#e7ff7b]" />
                  <span className="w-0.5 h-full bg-[#e7ff7b]" />
                  <span className="w-0.5 h-full bg-[#e7ff7b]" />
                  <span className="w-0.5 h-full bg-[#e7ff7b]" />
                </span>
                New · 84 episodes · every Wednesday
              </span>
              <h1 className="mt-6 text-[clamp(2.8rem,6.5vw,5.75rem)] font-semibold leading-[1] tracking-tight">
                A weekly show on <span className="font-serif italic text-[#e7ff7b]">building software</span> in public.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/70">
                Forty-five candid minutes between indie founders, hosted by the StoicSoft studio. What&apos;s
                working, what broke, and what&apos;s next — no scripts, no sponsor reads, no fluff.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#episodes" className="group inline-flex items-center gap-2 rounded-full bg-[#e7ff7b] px-5 py-3.5 text-sm font-semibold text-[#07060a] transition hover:bg-white">
                  <Icon name="play" className="h-4 w-4" /> Play latest episode
                </a>
                <a href="#subscribe" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm font-medium text-white/90 transition hover:border-white/50 hover:bg-white/5">
                  <Icon name="rss" className="h-4 w-4" /> Subscribe everywhere
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-sm text-white/60">
                <div><p className="font-serif text-3xl italic text-white">84</p><p>Episodes published</p></div>
                <div><p className="font-serif text-3xl italic text-white">12k</p><p>Weekly listeners</p></div>
                <div><p className="font-serif text-3xl italic text-white">4.9</p><p className="flex items-center gap-1"><Icon name="star" className="h-3.5 w-3.5 text-[#e7ff7b]" /> Apple Podcasts</p></div>
              </div>
            </div>

            <div>
              <PlayerCard />
            </div>
          </div>
        </div>

        {/* Marquee of platforms */}
        <div className="relative overflow-hidden border-y border-white/10 bg-black/40 py-5">
          <div className="flex marquee gap-12 whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-white/50">
            {platforms.concat(platforms).concat(platforms).map((p, i) => (
              <span key={i} className="flex items-center gap-12">
                <span className="text-[#e7ff7b]">●</span>
                <span>Available on {p}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section id="episodes" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#e7ff7b]">Episodes</p>
              <h2 className="mt-3 text-4xl font-semibold leading-[1.05] md:text-5xl">
                Recent conversations.
              </h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
              All 84 episodes <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-12 divide-y divide-white/5 overflow-hidden rounded-3xl border border-white/10">
            {episodes.map((e) => (
              <li key={e.n} className="group grid grid-cols-[72px_1fr_auto] items-center gap-4 px-5 py-5 transition hover:bg-white/[0.03] md:grid-cols-[72px_1fr_200px_auto_auto]">
                <div className={`grid h-14 w-14 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br ${e.tone}`}>
                  <span className="font-mono text-xs font-bold text-white">{e.n}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold md:text-lg">{e.t}</h3>
                  <p className="mt-1 text-xs text-white/50">with {e.g}</p>
                </div>
                <Waveform className="hidden h-8 text-white/30 md:flex" />
                <span className="hidden font-mono text-xs text-white/50 md:inline">{e.date} · {e.d}</span>
                <button className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 text-white/70 transition group-hover:border-[#e7ff7b] group-hover:bg-[#e7ff7b] group-hover:text-[#07060a]">
                  <Icon name="play" className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hosts */}
      <section id="hosts" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#e7ff7b]">The hosts</p>
              <h2 className="mt-3 font-serif text-5xl italic leading-[1.02] md:text-6xl">Two builders, one microphone.</h2>
              <p className="mt-6 max-w-md text-white/70">
                Signal is recorded from a sound-treated closet in Lisbon on a 2016 Shure SM7B and a preamp we&apos;ve
                named &ldquo;the toaster.&rdquo; We edit every episode ourselves.
              </p>
              <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm text-white/80 hover:border-white hover:text-white">
                Read the about page <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {hosts.map((h) => (
                <article key={h.name} className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
                  <div className={`relative mb-4 aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${h.hue}`}>
                    <div className="absolute inset-0 noise mix-blend-overlay opacity-60" />
                    <span className="absolute bottom-3 left-3 font-serif text-6xl italic text-white/90">{h.name.split(" ").map((n) => n[0]).join("")}</span>
                  </div>
                  <p className="font-semibold">{h.name}</p>
                  <p className="text-xs text-white/50">{h.role}</p>
                  <p className="mt-3 text-sm text-white/70">{h.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured quote */}
      <section className="relative z-10 border-y border-white/5 bg-black/30">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <Icon name="headphones" className="mx-auto h-8 w-8 text-[#e7ff7b]" />
          <p className="mt-6 font-serif text-3xl leading-snug italic md:text-5xl">
            &ldquo;Signal is the first podcast I&apos;ve stayed subscribed to for a year. It&apos;s like overhearing the
            group chat of the smartest indie founders I know.&rdquo;
          </p>
          <p className="mt-8 text-sm text-white/60">— Rafa Silva, founder of Routine</p>
        </div>
      </section>

      {/* Guest marquee */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-center text-xs uppercase tracking-[0.22em] text-white/50">
            Recent guests
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-4 md:grid-cols-8">
            {guests.map((g) => (
              <span key={g} className="font-serif text-center text-xl italic text-white/50 transition hover:text-white">{g}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 p-10 md:p-16"
               style={{ background: "radial-gradient(700px circle at 15% 0%, rgba(139,111,255,0.35), transparent 55%), radial-gradient(700px circle at 85% 100%, rgba(231,255,123,0.18), transparent 55%), #0e0c14" }}>
            <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#e7ff7b]">Membership · $5/mo</p>
                <h2 className="mt-3 font-serif text-5xl italic leading-[1.02] md:text-7xl">Keep the lights on.</h2>
                <p className="mt-6 max-w-lg text-white/75">
                  Signal is ad-free, sponsor-free, and listener-funded. Members get ad-free feeds, full-text
                  transcripts, early episode access, and an invite to our private Discord.
                </p>
                <ul className="mt-8 space-y-2 text-sm text-white/80">
                  {[
                    "Private RSS with bonus behind-the-scenes episodes",
                    "Full transcripts — searchable and downloadable",
                    "Early access — episodes one week before public drop",
                    "Members-only Discord with hosts and guests",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#e7ff7b]" /> {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/50">Join the show</p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-serif text-6xl italic">$5</span>
                  <span className="text-sm text-white/60">/ month · cancel anytime</span>
                </div>
                <a href="#" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#e7ff7b] px-5 py-3.5 text-sm font-semibold text-[#07060a] hover:bg-white">
                  Become a member <Icon name="arrow" className="h-4 w-4" />
                </a>
                <a href="#" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs text-white/70 hover:border-white hover:text-white">
                  Or subscribe for free via RSS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section id="subscribe" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-10 md:p-14">
            <p className="text-xs uppercase tracking-[0.22em] text-[#e7ff7b]">Listen anywhere</p>
            <h2 className="mt-3 font-serif text-4xl italic leading-[1.02] md:text-5xl">Subscribe on your app of choice.</h2>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {platforms.map((p) => (
                <a key={p} href="#" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 transition hover:border-[#e7ff7b] hover:bg-white/[0.04]">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#8b6fff] to-[#ff5ab7] text-white">
                    <Icon name="headphones" className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{p}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">Subscribe</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 pb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#e7ff7b]">FAQ</p>
              <h2 className="mt-3 font-serif text-4xl italic md:text-5xl">Common questions.</h2>
            </div>
            <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.02]">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                    {f.q}
                    <span className="ml-4 grid h-7 w-7 place-items-center rounded-full border border-white/15 text-white/50 transition group-open:rotate-45 group-open:border-[#e7ff7b] group-open:text-[#e7ff7b]">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 text-lg font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#8b6fff] to-[#ff5ab7] text-white">
                <Icon name="mic" className="h-4 w-4" />
              </span>
              Signal <span className="font-serif italic text-white/50">fm</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-white/50">
              A StoicSoft-studio podcast. Recorded in Lisbon, released every Wednesday.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Show</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#episodes" className="hover:text-white">Episodes</a></li>
              <li><a href="#hosts" className="hover:text-white">Hosts</a></li>
              <li><a href="#" className="hover:text-white">Transcripts</a></li>
              <li><a href="#" className="hover:text-white">Press kit</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Listen</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {platforms.map((p) => (
                <li key={p}><a href="#" className="hover:text-white">{p}</a></li>
              )).slice(0, 4)}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="mailto:hello@signalpodcast.fm" className="hover:text-white">hello@signalpodcast.fm</a></li>
              <li><a href="#" className="hover:text-white">Suggest a guest</a></li>
              <li><a href="#" className="hover:text-white">StoicSoft</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-white/40">
            <span>© {new Date().getFullYear()} Signal FM · A StoicSoft studio production.</span>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white">RSS</a>
              <a href="#" className="hover:text-white">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
