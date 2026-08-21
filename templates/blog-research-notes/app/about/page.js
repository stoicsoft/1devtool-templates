import { Footer, Header } from "../_components/chrome"

const shelf = [
  ["Seeing Like a State", "James C. Scott", "On why legible metrics reshape the thing they measure."],
  ["The Design of Everyday Things", "Don Norman", "Still the clearest writing on affordances anywhere."],
  ["How to Take Smart Notes", "Sönke Ahrens", "The reason this site exists in the form it does."],
]

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <Header active="/about" />
      <main className="mx-auto max-w-[720px] px-6 py-16">
        <span className="eyebrow">About</span>
        <h1 className="display mt-4 text-[42px]">Sigrid Halvorsen</h1>

        <div className="prose-body mt-8">
          <p>
            I am a principal researcher at the Wren Institute, where I work on evaluation — specifically on the problem
            that most benchmarks stop describing reality shortly after they are written.
          </p>
          <p>
            Before Wren I spent six years building support tooling at a logistics company, which is where I learned
            that the difference between a research metric and a product metric is usually a person who has to answer
            for it on Monday.
          </p>
          <p>
            This site is where the working notes go. Some become papers. Most do not, and that is the point — the
            notes that never graduate are often the ones other people find useful.
          </p>
        </div>

        <section className="mt-12 border-t border-[var(--color-line)] pt-8">
          <h2 className="font-serif text-[24px] font-medium tracking-[-0.012em]">On the shelf</h2>
          <div className="mt-5 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {shelf.map(([title, author, note]) => (
              <div key={title} className="py-4">
                <p className="font-serif text-[17px] font-medium tracking-[-0.008em]">{title}</p>
                <p className="text-[12.5px] text-[var(--color-faint)]">{author}</p>
                <p className="mt-1 text-[14px] leading-[1.65] text-[var(--color-muted)]">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-[var(--color-line)] pt-8">
          <h2 className="font-serif text-[24px] font-medium tracking-[-0.012em]">Elsewhere</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Email", "Mastodon", "GitHub", "Google Scholar", "RSS"].map((l) => (
              <a
                key={l}
                href="#"
                className="rounded-full border border-[var(--color-line)] px-4 py-1.5 text-[13.5px] text-[var(--color-muted)] transition-colors hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
              >
                {l}
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
