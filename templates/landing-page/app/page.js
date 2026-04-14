const features = [
  { title: "Modern design", body: "Responsive sections with clear hierarchy and polished visual rhythm." },
  { title: "Quick customization", body: "Adjust business name, copy, and colors from a compact code surface." },
  { title: "Ready to deploy", body: "Run locally with Next.js and push to production with minimal setup." },
]

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="container row">
          <a href="#" className="brand">Nimbus Labs</a>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <a className="button ghost" href="#pricing">Start Free</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-glow" />
          <div className="container split">
            <div>
              <p className="tag">New launch</p>
              <h1>Build a stronger pipeline with less overhead</h1>
              <p className="lead">Launch faster with a conversion-focused page structure and clean responsive styling.</p>
              <div className="actions">
                <a className="button" href="#pricing">Start free</a>
                <a className="button ghost" href="#features">Explore features</a>
              </div>
            </div>
            <div className="stats">
              <p className="small">Weekly growth</p>
              <p className="big">+34%</p>
              <div className="line"><span>Qualified leads</span><b>1,280</b></div>
              <div className="line"><span>Conversion rate</span><b>7.6%</b></div>
              <div className="line"><span>Avg. response</span><b>11m</b></div>
            </div>
          </div>
        </section>

        <section id="features" className="container section">
          <h2>Features</h2>
          <div className="grid3">
            {features.map((feature) => (
              <article key={feature.title} className="card">
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="container section">
          <h2>Testimonials</h2>
          <div className="grid2">
            <blockquote className="card">"We launched in one afternoon and started collecting leads the same day."<footer>- Lena, Product Marketing</footer></blockquote>
            <blockquote className="card">"The structure is clear for quick edits but polished enough to ship right away."<footer>- Omar, Founder</footer></blockquote>
          </div>
        </section>

        <section id="pricing" className="container section">
          <h2>Pricing</h2>
          <div className="grid3">
            <article className="card"><h3>Starter</h3><p className="price">$19</p><p>Perfect for solo builders.</p></article>
            <article className="card featured"><h3>Growth</h3><p className="price">$49</p><p>For teams ready to scale.</p></article>
            <article className="card"><h3>Scale</h3><p className="price">$99</p><p>Advanced workflows and support.</p></article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">Nimbus Labs. All rights reserved.</div>
      </footer>
    </>
  )
}
