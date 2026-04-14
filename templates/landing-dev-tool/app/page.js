const templates = [
  { name: "Landing · SaaS Analytics", tag: "Landing", lang: "Next.js", color: "from-emerald-400/30 to-teal-500/20", count: "2.4k" },
  { name: "SaaS Control Plane", tag: "SaaS", lang: "Next.js · Auth", color: "from-violet-400/30 to-fuchsia-500/20", count: "1.8k" },
  { name: "Markdown Blog", tag: "Blog", lang: "Next.js · MDX", color: "from-amber-400/30 to-orange-500/20", count: "3.1k" },
  { name: "Fintech Dashboard", tag: "Landing", lang: "Tailwind v4", color: "from-sky-400/30 to-blue-500/20", count: "1.2k" },
  { name: "Creative Agency", tag: "Landing", lang: "Tailwind v4", color: "from-rose-400/30 to-orange-500/20", count: "980" },
  { name: "Desktop App Starter", tag: "Desktop", lang: "Electron · React", color: "from-slate-400/30 to-zinc-500/20", count: "640" },
]

const features = [
  { icon: "code", title: "Production code, not demo code", body: "Every template ships with the exact patterns we use to run StoicSoft products in production." },
  { icon: "zap", title: "One-line bootstrap", body: "npx 1devtool@latest create — name your project, pick a template, you're in dev mode in 12 seconds." },
  { icon: "git", title: "Forever forkable", body: "MIT-licensed. Fork the registry, ship a private set, or contribute back. No lock-in." },
  { icon: "layers", title: "Stack you already trust", body: "Next.js 16 App Router, React 18, Tailwind v4. No proprietary runtimes, no vendor abstractions." },
  { icon: "shield", title: "Security baked in", body: "CSP defaults, dependency audits in CI, secrets-aware .env.example in every template." },
  { icon: "cloud", title: "Deploy anywhere", body: "Verified on Vercel, Cloudflare Pages, Fly, and bare Docker. We test the deploys, you ship them." },
]

const cliLines = [
  { t: "$ npx 1devtool@latest create", k: "cmd" },
  { t: "? Project name › aether-marketing", k: "prompt" },
  { t: "? Template › landing-saas-analytics", k: "prompt" },
  { t: "✓ Cloned 14 files in 380 ms", k: "ok" },
  { t: "✓ Installed 192 dependencies", k: "ok" },
  { t: "→ Run: cd aether-marketing && npm run dev", k: "info" },
]

const stats = [
  { k: "62", v: "Production-ready templates" },
  { k: "180k+", v: "Monthly clones via the CLI" },
  { k: "9.6k", v: "GitHub stars across the registry" },
  { k: "100%", v: "Open source, MIT-licensed" },
]

const testimonials = [
  { q: "Cloned the SaaS template at 9am, was demoing investors at 4pm. The code is clean enough to send to senior eng review.", a: "Anya Park", r: "Founder, Routine" },
  { q: "1DevTool replaced our internal starter repo. We adopted it after our staff engineer audited the auth flow.", a: "Diego Martín", r: "CTO, Tessera" },
  { q: "The blog template is the only Next.js MDX setup I haven't ripped out at the three-month mark.", a: "Wren Holloway", r: "Indie dev" },
]

const faqs = [
  { q: "Is 1DevTool free?", a: "Yes — every template is MIT-licensed. The CLI, registry, and documentation are free forever. We sell a Pro tier for teams that want private template registries and deployment integrations." },
  { q: "Who builds the templates?", a: "The StoicSoft team and a curated set of community contributors. Each template is dogfooded by the same team that runs ServerCompass and other StoicSoft products in production." },
  { q: "Can I publish my own template?", a: "Absolutely. Push to a public GitHub repo, add a 1devtool.json manifest, and submit it to the registry. We review for quality before listing." },
  { q: "Do you support frameworks other than Next.js?", a: "Today the registry focuses on Next.js, Electron, and React Native. A SvelteKit pack is in beta — vote on the roadmap." },
]

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <rect x="2" y="2" width="28" height="28" rx="7" fill="#ff6b3d" />
      <path d="M9 22V10h7c3.3 0 6 2.7 6 6s-2.7 6-6 6H9Zm4-3h3a3 3 0 0 0 0-6h-3v6Z" fill="#07090c" />
    </svg>
  )
}

function Icon({ name, className = "h-5 w-5" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "code") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"/></svg>)
  if (name === "zap") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>)
  if (name === "git") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="12" r="2"/><path d="M6 8v8M16 12H8a2 2 0 0 1-2-2V8"/></svg>)
  if (name === "layers") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 18l9 5 9-5"/></svg>)
  if (name === "shield") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3 4 6v6c0 5 3.5 8.6 8 9 4.5-.4 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>)
  if (name === "cloud") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 18a5 5 0 1 1 .9-9.9 6 6 0 0 1 11.6 2A4 4 0 0 1 18 18H7Z"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "github") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z"/></svg>)
  if (name === "star") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><path d="m12 2 3 7 7 .6-5.3 4.6L18 22l-6-3.8L6 22l1.3-7.8L2 9.6 9 9l3-7Z"/></svg>)
  if (name === "copy") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>)
  return null
}

function Terminal() {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-[#0b0d12] shadow-[0_40px_120px_-30px_rgba(255,107,61,0.45)]">
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
          <span className="ml-3 font-mono text-xs text-white/40">~/projects · zsh</span>
        </div>
        <span className="font-mono text-[10px] text-white/30 hover:text-white/60 cursor-pointer flex items-center gap-1.5">
          <Icon name="copy" className="h-3 w-3" /> copy
        </span>
      </div>
      <div className="p-5 font-mono text-sm leading-7">
        {cliLines.map((line, i) => (
          <div key={i} className="flex gap-2">
            {line.k === "cmd" && <span className="text-white">{line.t}</span>}
            {line.k === "prompt" && (
              <>
                <span className="text-[#b18bff]">?</span>
                <span className="text-white/80">{line.t.slice(2)}</span>
              </>
            )}
            {line.k === "ok" && (
              <>
                <span className="text-[#5cf2c2]">{line.t.slice(0, 2)}</span>
                <span className="text-white/70">{line.t.slice(2)}</span>
              </>
            )}
            {line.k === "info" && (
              <>
                <span className="text-[#ff6b3d]">{line.t.slice(0, 2)}</span>
                <span className="text-white/80">{line.t.slice(2)}</span>
              </>
            )}
          </div>
        ))}
        <div className="mt-1 flex items-center gap-2 text-white">
          <span>$</span>
          <span className="cursor inline-block h-5 w-2 bg-[#ff6b3d]" />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#07090c] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[820px] glow-orange" />
      <div className="pointer-events-none absolute inset-0 code-grid opacity-50" />

      {/* Nav */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <Logo />
            <span>1DevTool</span>
            <span className="ml-1 rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-white/50">v3</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            <a href="#templates" className="hover:text-white">Templates</a>
            <a href="#cli" className="hover:text-white">CLI</a>
            <a href="#open-source" className="hover:text-white">Open source</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#" className="hidden items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70 hover:border-white/30 hover:text-white md:inline-flex">
              <Icon name="star" className="h-3.5 w-3.5 text-amber-300" /> 9.6k
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#07090c] transition hover:bg-[#ff6b3d] hover:text-white">
              <Icon name="github" className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-16 md:pt-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.05fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
                <span className="font-mono text-[10px] text-[#ff6b3d]">NEW</span>
                <span>62 templates · Tailwind v4 across the registry</span>
              </span>
              <h1 className="mt-6 text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[1.02] tracking-tight">
                Production-grade <span className="text-[#ff6b3d]">templates</span> for builders.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/70">
                Curated by the StoicSoft team. Clone it from the CLI, ship it, move on. The same templates we
                use to build ServerCompass and our own marketing surfaces.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/50 px-4 py-3 font-mono text-sm">
                  <span className="text-[#ff6b3d]">$</span>
                  <span className="text-white">npx 1devtool@latest create</span>
                  <span className="ml-2 cursor inline-block h-4 w-1.5 bg-white/70" />
                </div>
                <button className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-xs text-white/60 hover:border-white/30 hover:text-white">
                  <Icon name="copy" className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50">
                <span className="flex items-center gap-1.5"><Icon name="check" className="h-3.5 w-3.5 text-[#5cf2c2]" /> MIT-licensed</span>
                <span className="flex items-center gap-1.5"><Icon name="check" className="h-3.5 w-3.5 text-[#5cf2c2]" /> Next.js 16 App Router</span>
                <span className="flex items-center gap-1.5"><Icon name="check" className="h-3.5 w-3.5 text-[#5cf2c2]" /> No lock-in</span>
              </div>
            </div>

            <div>
              <Terminal />
            </div>
          </div>
        </div>

        {/* Sponsor row */}
        <div className="relative overflow-hidden border-y border-white/10 bg-black/40 py-5">
          <div className="flex marquee gap-12 whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-white/50">
            {[
              "ServerCompass · ships on 1DevTool",
              "StoicSoft · maintainer",
              "Aether · uses landing-ai-saas",
              "Routine · cloned saas-control-plane",
              "Tessera · cloned dev-tool",
              "Vaulta · cloned landing-fintech-app",
            ].concat([
              "ServerCompass · ships on 1DevTool",
              "StoicSoft · maintainer",
              "Aether · uses landing-ai-saas",
              "Routine · cloned saas-control-plane",
              "Tessera · cloned dev-tool",
              "Vaulta · cloned landing-fintech-app",
            ]).map((t, i) => (
              <span key={i} className="flex items-center gap-12">
                <span className="text-[#ff6b3d]">●</span>
                <span>{t}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured templates */}
      <section id="templates" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#ff6b3d]">Featured templates</p>
              <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Pick a starter. Skip the boilerplate.</h2>
            </div>
            <div className="flex gap-2">
              {["All", "Landing", "SaaS", "Blog", "Desktop"].map((c, i) => (
                <button key={c} className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                  i === 0 ? "border-white bg-white text-[#07090c]" : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
                }`}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((t) => (
              <article
                key={t.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d12] transition hover:border-white/30"
              >
                <div className={`relative h-44 bg-gradient-to-br ${t.color}`}>
                  <div className="absolute inset-0 scan opacity-40" />
                  <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-black/30 p-3 backdrop-blur">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-rose-300/70" />
                      <span className="h-2 w-2 rounded-full bg-amber-300/70" />
                      <span className="h-2 w-2 rounded-full bg-emerald-300/70" />
                      <span className="ml-auto font-mono text-[10px] text-white/40">/{t.name.toLowerCase().replace(/\s|·/g, "-").replace(/--+/g, "-")}</span>
                    </div>
                    <div className="mt-3 space-y-1.5 font-mono text-[10px] text-white/60">
                      <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
                      <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
                      <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-white/70">{t.tag}</span>
                    <span className="font-mono text-white/40 flex items-center gap-1">
                      <Icon name="star" className="h-3 w-3 text-amber-300" /> {t.count}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{t.name}</h3>
                  <p className="mt-1 font-mono text-xs text-white/40">{t.lang}</p>
                  <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/5 bg-black/30 px-3 py-2 font-mono text-xs text-white/80">
                    <span className="text-[#ff6b3d]">$</span>
                    <span>1devtool create {t.name.toLowerCase().replace(/\s|·/g, "-")}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/80 hover:border-white hover:text-white">
              Browse all 62 templates <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#ff6b3d]">Why 1DevTool</p>
            <h2 className="mt-3 text-4xl font-semibold leading-[1.05] md:text-5xl">Less yak shaving. More shipping.</h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition hover:border-white/25"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#ff6b3d]/15 text-[#ff6b3d]">
                  <Icon name={f.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/60">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLI showcase */}
      <section id="cli" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#1a1d24] via-[#0b0d12] to-[#07090c] p-10 md:p-16">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#5cf2c2]">CLI · npx 1devtool</p>
                <h2 className="mt-3 text-4xl font-semibold leading-[1.05] md:text-5xl">
                  Twelve seconds from prompt to dev server.
                </h2>
                <p className="mt-5 max-w-md text-white/70">
                  No accounts. No telemetry. The CLI clones the template, installs deps with your package
                  manager of choice, and prints the next command.
                </p>
                <ul className="mt-8 space-y-3 text-sm">
                  {[
                    "Clones into a fresh git repo with one initial commit",
                    "Detects pnpm / yarn / npm and uses what you prefer",
                    "Replaces project name across package.json, README, and metadata",
                    "Prints follow-up commands tailored to the template",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-white/80">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-[#5cf2c2]" /> {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/50 p-5 font-mono text-sm">
                <div className="space-y-1 leading-7">
                  <p><span className="text-white/40"># Quickstart</span></p>
                  <p><span className="text-[#ff6b3d]">$</span> <span className="text-white">npx 1devtool@latest create</span></p>
                  <p><span className="text-[#5cf2c2]">✓</span> <span className="text-white/80">Picked landing-saas-analytics</span></p>
                  <p><span className="text-[#5cf2c2]">✓</span> <span className="text-white/80">Wrote 14 files</span></p>
                  <p><span className="text-[#5cf2c2]">✓</span> <span className="text-white/80">Installed deps with pnpm</span></p>
                  <p><span className="text-[#5cf2c2]">✓</span> <span className="text-white/80">Initialized git, signed first commit</span></p>
                  <p className="mt-3 text-white/40"># Open the registry</p>
                  <p><span className="text-[#ff6b3d]">$</span> <span className="text-white">1devtool list --tag landing</span></p>
                  <p className="text-white/60">→ landing-saas-analytics · 2.4k clones</p>
                  <p className="text-white/60">→ landing-fintech-app · 1.2k clones</p>
                  <p className="text-white/60">→ landing-creative-agency · 980 clones</p>
                  <p className="text-white/60">→ landing-fitness-studio · 740 clones</p>
                  <p className="text-white/60">→ landing-portfolio · 620 clones</p>
                  <p><span className="text-[#ff6b3d]">$</span> <span className="cursor inline-block h-4 w-1.5 bg-white/80" /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 border-y border-white/5 bg-black/30">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v} className="border-l border-white/10 pl-6">
              <p className="text-5xl font-semibold text-white">{s.k}</p>
              <p className="mt-2 text-sm text-white/60">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="open-source" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#ff6b3d]">From builders</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Used by teams shipping in the open.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <article key={t.a} className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
                <Icon name="code" className="h-6 w-6 text-[#ff6b3d]" />
                <p className="mt-5 text-base leading-snug text-white/85">&ldquo;{t.q}&rdquo;</p>
                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#ff6b3d] to-[#ffba6b] font-semibold text-[#07090c]">
                    {t.a.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{t.a}</p>
                    <p className="text-xs text-white/50">{t.r}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-[#ff6b3d]">Pricing</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Free for builders. Pro for teams.</h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <p className="text-lg font-semibold">Open source</p>
              <p className="mt-1 text-sm text-white/60">For solo devs and indie hackers.</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-semibold">$0</span>
                <span className="text-sm text-white/50">forever</span>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm text-white/80">
                {["All public templates", "CLI + registry", "Community support", "Contribute back"].map((p) => (
                  <li key={p} className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 text-[#5cf2c2]" /> {p}</li>
                ))}
              </ul>
              <a href="#" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:border-white hover:bg-white hover:text-[#07090c]">
                <Icon name="github" className="h-4 w-4" /> Get started
              </a>
            </article>

            <article className="relative rounded-3xl border border-[#ff6b3d] bg-gradient-to-b from-[#ff6b3d]/10 to-white/[0.02] p-8 shadow-[0_30px_80px_-40px_rgba(255,107,61,0.55)]">
              <span className="absolute -top-3 left-8 rounded-full bg-[#ff6b3d] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#07090c]">For teams</span>
              <p className="text-lg font-semibold">Pro</p>
              <p className="mt-1 text-sm text-white/60">For teams who want a private template registry and support.</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-semibold">$19</span>
                <span className="text-sm text-white/50">/ user / month</span>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm text-white/80">
                {["Private template registry", "SSO + SCIM", "Slack + email support", "Deployment integrations", "Audit log"].map((p) => (
                  <li key={p} className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 text-[#ff6b3d]" /> {p}</li>
                ))}
              </ul>
              <a href="#" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff6b3d] to-[#ffba6b] px-5 py-3 text-sm font-semibold text-[#07090c] hover:opacity-90">
                Start a Pro trial <Icon name="arrow" className="h-4 w-4" />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#ff6b3d]">FAQ</p>
              <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Common questions.</h2>
            </div>
            <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.02]">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                    {f.q}
                    <span className="ml-4 grid h-7 w-7 place-items-center rounded-full border border-white/15 text-white/50 transition group-open:rotate-45 group-open:border-[#ff6b3d] group-open:text-[#ff6b3d]">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 p-10 md:p-16"
               style={{ background: "radial-gradient(700px circle at 80% 0%, rgba(255,107,61,0.25), transparent 55%), radial-gradient(700px circle at 10% 100%, rgba(177,139,255,0.18), transparent 55%), #0b0d12" }}>
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-4xl font-semibold leading-[1.05] md:text-6xl">
                  Stop yak-shaving.<br />
                  <span className="text-[#ff6b3d]">Start shipping.</span>
                </h2>
                <p className="mt-5 max-w-lg text-white/70">
                  Run one command and you&apos;re in dev mode. The same starter the StoicSoft team uses every
                  day — open-sourced for everyone.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5 font-mono text-sm">
                <p><span className="text-[#ff6b3d]">$</span> <span className="text-white">npx 1devtool@latest create</span></p>
                <p className="mt-3 text-white/40"># Or browse on the web</p>
                <p><a href="#" className="text-[#5cf2c2] hover:underline">https://1devtool.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 text-lg font-semibold">
              <Logo /> 1DevTool
            </a>
            <p className="mt-4 max-w-sm text-sm text-white/50">
              An open-source project by StoicSoft. The same starter templates that power our own products —
              ServerCompass, Aether, and the StoicSoft marketing surfaces.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Project</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#templates" className="hover:text-white">Templates</a></li>
              <li><a href="#cli" className="hover:text-white">CLI</a></li>
              <li><a href="#" className="hover:text-white">Roadmap</a></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Community</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">GitHub</a></li>
              <li><a href="#" className="hover:text-white">Discord</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Contribute</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Sister projects</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">ServerCompass</a></li>
              <li><a href="#" className="hover:text-white">Aether</a></li>
              <li><a href="#" className="hover:text-white">StoicSoft</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-white/40">
            <span>© {new Date().getFullYear()} StoicSoft, Inc. · MIT licensed.</span>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">License</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
