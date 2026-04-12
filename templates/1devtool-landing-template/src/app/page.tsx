import Image from "next/image"
import { site } from "@/lib/site"

const navigation = [
  { label: "Workflow", href: "#workflow" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
]

function Navigation() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/84 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3 font-semibold text-paper">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-mint text-sm font-black text-ink">
            {site.name.slice(0, 2).toUpperCase()}
          </span>
          <span>{site.name}</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-mint">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#pricing" className="button-secondary hidden sm:inline-flex">
          Start free
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="section-shell pb-16 pt-16 sm:pb-20 sm:pt-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">{site.announcement}</p>
        <h1 className="mt-5 text-4xl font-black leading-tight text-paper sm:text-6xl">
          Ship a sharper launch for {site.name}.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          {site.description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#pricing" className="button-primary w-full sm:w-auto">
            {site.primaryCta}
          </a>
          <a href="#workflow" className="button-secondary w-full sm:w-auto">
            {site.secondaryCta}
          </a>
        </div>
      </div>

      <div className="mt-12 overflow-hidden rounded-lg border border-line bg-paper p-2 shadow-glow">
        <Image
          src="/product-preview.png"
          alt={`${site.name} product preview`}
          width={2571}
          height={1402}
          priority
          className="h-auto w-full rounded-lg border border-black/20"
        />
      </div>

      <dl className="mt-6 grid gap-3 sm:grid-cols-3">
        {site.heroStats.map((stat) => (
          <div key={stat.label} className="panel p-4">
            <dt className="text-xs uppercase tracking-widest text-muted">{stat.label}</dt>
            <dd className="mt-2 text-2xl font-black text-paper">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function SocialProof() {
  return (
    <section className="border-y border-line bg-panel/50 py-6">
      <div className="section-shell">
        <p className="text-center text-xs uppercase tracking-widest text-muted">Teams building with this structure</p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {site.logos.map((logo) => (
            <div key={logo} className="rounded-lg border border-line px-4 py-3 text-center text-sm font-semibold text-paper/80">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Workflow() {
  return (
    <section id="workflow" className="section-shell py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow">Workflow</p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-paper sm:text-5xl">
            One page for the whole launch motion.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            Direct hero copy, visible proof, a strong product visual, and clear conversion steps keep the story easy to scan.
          </p>
        </div>

        <ol className="space-y-3">
          {site.workflow.map((item, index) => (
            <li key={item} className="panel flex gap-4 p-5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-mint font-mono text-sm font-black text-ink">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-semibold text-paper">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features" className="bg-paper py-20 text-ink">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-coral">Features</p>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
            Clean sections that are easy to rewrite.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {site.features.map((feature) => (
            <article key={feature.title} className="rounded-lg border border-ink/15 bg-white p-6">
              <h3 className="text-xl font-black">{feature.title}</h3>
              <p className="mt-3 leading-7 text-ink/70">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="section-shell py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Pricing</p>
        <h2 className="mt-4 text-3xl font-black leading-tight text-paper sm:text-5xl">
          Pick a plan and launch.
        </h2>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {site.pricing.map((plan) => (
          <article key={plan.name} className="panel p-6">
            <h3 className="text-lg font-black text-paper">{plan.name}</h3>
            <p className="mt-4 text-4xl font-black text-mint">{plan.price}</p>
            <p className="mt-4 leading-7 text-muted">{plan.body}</p>
            <a href="#" className="button-secondary mt-6 w-full">
              Choose {plan.name}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section className="section-shell pb-20">
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-3xl font-black text-paper">Last checks before launch.</h2>
        </div>
        <div className="space-y-3">
          {site.faqs.map((item) => (
            <details key={item.question} className="panel p-5" open={item === site.faqs[0]}>
              <summary className="cursor-pointer text-lg font-semibold text-paper">{item.question}</summary>
              <p className="mt-3 leading-7 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="border-y border-line bg-panel/60 py-16">
      <div className="section-shell text-center">
        <p className="eyebrow">Ready</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight text-paper sm:text-5xl">
          Give {site.name} a launch page that explains the product fast.
        </h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#pricing" className="button-primary">
            {site.primaryCta}
          </a>
          <a href="#" className="button-secondary">
            Back to top
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="section-shell flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <span>{site.name}</span>
      <span>Replace the product copy, image, and pricing before publishing.</span>
    </footer>
  )
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <Workflow />
        <Features />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
