import Link from "next/link"

export const metadata = {
  title: "Prints — Elena Faro",
  description: "Signed, numbered prints in a small edition of 25, on Hahnemühle Photo Rag. Shipped from Lisbon.",
}

const prints = [
  { slug: "tide-no-7", title: "Tide, No. 7", series: "Long Exposures · 2025", art: "ph-11", price: "€420", remaining: "12 of 25", size: "30 × 40 cm" },
  { slug: "rooftops-at-six", title: "Rooftops at six", series: "A Week in Évora · 2026", art: "ph-3", price: "€380", remaining: "18 of 25", size: "30 × 40 cm" },
  { slug: "atelier-santos", title: "Atelier Santos", series: "Off Season · 2023", art: "ph-5", price: "€420", remaining: "4 of 25", size: "30 × 40 cm" },
  { slug: "portrait-of-mira", title: "Portrait of Mira", series: "Madrileños · 2024", art: "ph-12", price: "€520", remaining: "9 of 25", size: "40 × 50 cm" },
  { slug: "olive-grove-at-four", title: "Olive grove at four", series: "Off Season · 2023", art: "ph-9", price: "€380", remaining: "Sold out", size: "30 × 40 cm" },
  { slug: "red-walls-lisboa", title: "Red walls, Lisboa", series: "First Plates · 2022", art: "ph-10", price: "€340", remaining: "21 of 25", size: "30 × 40 cm" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "cart") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 3h2l2 13h11l2-9H7"/><circle cx="9" cy="20" r="1.2"/><circle cx="17" cy="20" r="1.2"/></svg>)
  return null
}

export default function Prints() {
  return (
    <div className="relative bg-[#0a0a0a] text-[#f0ece4]">
      <div className="pointer-events-none fixed inset-0 grain opacity-30" />

      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-serif text-2xl italic">Elena Faro</Link>
          <nav className="flex items-center gap-7 font-mono text-xs uppercase tracking-[0.22em] text-[#bebebe]">
            <Link href="/posts" className="underline-grow">Features</Link>
            <Link href="/about" className="underline-grow">About</Link>
            <Link href="/prints" className="text-[#e4c290]">Prints</Link>
          </nav>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#e4c290]">Print shop · edition of 25</p>
          <h1 className="font-serif mt-4 text-[clamp(2.5rem,6vw,5rem)] italic leading-[1.05]">
            Signed, numbered, <span className="text-[#e4c290]">cotton rag.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-[#bebebe]">
            Selected plates are printed on Hahnemühle Photo Rag in an edition of twenty-five. Each print is
            signed, numbered, and shipped in a tube — anywhere in the EU and the US. Larger custom sizes by
            arrangement.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {prints.map((p) => (
              <article key={p.slug} className="group">
                <div className={`relative aspect-square overflow-hidden ${p.art}`}>
                  <div className="absolute inset-0 grain mix-blend-overlay opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
                  <span className="absolute bottom-2 left-2 font-mono text-[10px] uppercase tracking-widest text-white/70">edition · 25</span>
                  {p.remaining === "Sold out" && (
                    <span className="absolute right-2 top-2 rounded-full bg-black/70 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-white">Sold out</span>
                  )}
                </div>
                <div className="mt-4">
                  <p className="font-serif text-2xl italic">{p.title}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#7a7a7a]">{p.series}</p>

                  <div className="mt-4 flex items-end justify-between border-t border-[#262626] pt-3">
                    <div>
                      <p className="text-lg font-semibold">{p.price}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#7a7a7a]">{p.size} · {p.remaining}</p>
                    </div>
                    <button disabled={p.remaining === "Sold out"} className="inline-flex items-center gap-1.5 rounded-full bg-[#e4c290] px-4 py-2 text-xs font-semibold text-[#0a0a0a] disabled:bg-[#262626] disabled:text-[#7a7a7a] hover:bg-white">
                      <Icon name="cart" className="h-3.5 w-3.5" /> {p.remaining === "Sold out" ? "Notify" : "Add"}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-sm border border-[#262626] bg-[#121212] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#e4c290]">Shipping &amp; returns</p>
            <ul className="mt-4 grid gap-3 text-sm text-[#bebebe] md:grid-cols-2">
              <li>· Prints ship within 5 business days from Lisbon, in a rigid tube.</li>
              <li>· EU shipping is included; US shipping is €18 flat.</li>
              <li>· Each print arrives with a hand-signed certificate of authenticity.</li>
              <li>· 30-day return window. We refund the print; you cover return shipping.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
