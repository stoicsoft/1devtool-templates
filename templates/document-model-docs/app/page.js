"use client"

import { Callout, Code, Icon, Shell } from "./_components/docs"

const TOC = [
  ["what-is", "What Halcyon is"],
  ["first-call", "Your first call"],
  ["shape", "The shape of a response"],
  ["models", "Choosing a model"],
  ["next", "Where to go next"],
]

const MODELS = [
  ["halcyon-4-opus", "Deepest reasoning", "200k", "$15 / $75", "#c96442"],
  ["halcyon-4-sonnet", "Balanced default", "200k", "$3 / $15", "#629987"],
  ["halcyon-4-haiku", "Fast and cheap", "200k", "$0.80 / $4", "#827dbd"],
]

const NEXT = [
  ["Tool use", "Let the model call your functions and read the results.", "/tool-use"],
  ["Streaming", "Render tokens as they arrive instead of waiting for the full response.", "/"],
  ["Prompt caching", "Reuse a long system prompt across calls at a tenth of the price.", "/"],
  ["Structured output", "Force valid JSON against a schema you supply.", "/"],
]

export default function Introduction() {
  return (
    <Shell current="Introduction" toc={TOC}>
      <article className="max-w-[74ch]">
        <nav className="flex items-center gap-1.5 text-[12.5px] text-[var(--color-faint)]">
          <span>Docs</span>
          <Icon name="chevronRight" className="h-3 w-3" />
          <span>Getting started</span>
          <Icon name="chevronRight" className="h-3 w-3" />
          <span className="text-[var(--color-ink-3)]">Introduction</span>
        </nav>

        <h1 className="display mt-4 text-[40px]">Introduction</h1>
        <p className="mt-4 text-[17px] leading-[1.72] text-[var(--color-muted)]">
          Halcyon is a text-and-vision model family with a single HTTP endpoint. This page gets you from nothing to a
          working call in about two minutes, then explains just enough of the response shape that the rest of the docs
          make sense.
        </p>

        <section id="what-is">
          <h2 className="mb-3 mt-11 font-serif text-[28px] font-medium tracking-[-0.014em]">What Halcyon is</h2>
          <p className="text-[15.5px] leading-[1.75] text-[var(--color-ink-3)]">
            One endpoint, <code className="rounded bg-white px-1.5 py-[1px] font-mono text-[13px]">POST /v1/messages</code>,
            takes a list of messages and returns the next one. Everything else — tool use, streaming, vision, caching —
            is a field on that same request rather than a separate API.
          </p>
          <Callout kind="info" title="No SDK required">
            Every example below has a raw <code className="font-mono text-[13px]">curl</code> tab. The SDKs are
            convenience wrappers over exactly these calls, so you can always drop down a level when you need to.
          </Callout>
        </section>

        <section id="first-call">
          <h2 className="mb-3 mt-11 font-serif text-[28px] font-medium tracking-[-0.014em]">Your first call</h2>
          <p className="text-[15.5px] leading-[1.75] text-[var(--color-ink-3)]">
            Create a key in the console, export it, and send a message. The model, the max token budget, and the
            message list are the only required fields.
          </p>
          <Code
            tabs={[
              [
                "python",
                `from halcyon import Halcyon

client = Halcyon()  # reads HALCYON_API_KEY

message = client.messages.create(
    model="halcyon-4-sonnet",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Explain a B-tree to a backend engineer in three sentences."}
    ],
)

print(message.content[0].text)`,
              ],
              [
                "typescript",
                `import Halcyon from "@halcyon-ai/sdk"

const client = new Halcyon()

const message = await client.messages.create({
  model: "halcyon-4-sonnet",
  max_tokens: 1024,
  messages: [
    { role: "user", content: "Explain a B-tree to a backend engineer in three sentences." },
  ],
})

console.log(message.content[0].text)`,
              ],
              [
                "curl",
                `curl https://api.halcyon.dev/v1/messages \\
  -H "x-api-key: $HALCYON_API_KEY" \\
  -H "content-type: application/json" \\
  -d '{
    "model": "halcyon-4-sonnet",
    "max_tokens": 1024,
    "messages": [
      { "role": "user", "content": "Explain a B-tree to a backend engineer in three sentences." }
    ]
  }'`,
              ],
            ]}
          />
        </section>

        <section id="shape">
          <h2 className="mb-3 mt-11 font-serif text-[28px] font-medium tracking-[-0.014em]">
            The shape of a response
          </h2>
          <p className="text-[15.5px] leading-[1.75] text-[var(--color-ink-3)]">
            Responses always carry a <code className="rounded bg-white px-1.5 py-[1px] font-mono text-[13px]">content</code>{" "}
            array rather than a single string. That array is where tool calls, images, and text blocks all live, which
            is why it stays an array even when there is only one text block in it.
          </p>
          <Code
            lang="json"
            code={`{
  "id": "msg_01Xk9fPq2mDv",
  "type": "message",
  "role": "assistant",
  "model": "halcyon-4-sonnet",
  "content": [
    { "type": "text", "text": "A B-tree keeps keys sorted in wide nodes…" }
  ],
  "stop_reason": "end_turn",
  "usage": { "input_tokens": 21, "output_tokens": 96 }
}`}
          />
          <Callout kind="warn" title="Always check stop_reason">
            A response truncated by your <code className="font-mono text-[13px]">max_tokens</code> returns{" "}
            <code className="font-mono text-[13px]">"max_tokens"</code> here, not an error. Treating that as a complete
            answer is the most common integration bug we see.
          </Callout>
        </section>

        <section id="models">
          <h2 className="mb-3 mt-11 font-serif text-[28px] font-medium tracking-[-0.014em]">Choosing a model</h2>
          <p className="text-[15.5px] leading-[1.75] text-[var(--color-ink-3)]">
            Start with Sonnet. Move up to Opus only for the subset of requests that need it, and down to Haiku for
            classification and extraction where the answer space is small.
          </p>
          <div className="my-5 overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--color-line)] bg-[var(--color-ivory-2)]">
                  {["Model", "Best for", "Context", "Price / MTok"].map((h) => (
                    <th key={h} className="px-4 py-2.5 text-left text-[11.5px] font-medium tracking-wide text-[var(--color-faint)]">
                      {h.toUpperCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MODELS.map(([id, best, ctx, price, tone]) => (
                  <tr key={id} className="border-b border-[var(--color-line-2)] last:border-0">
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-2">
                        <span className="h-[7px] w-[7px] rounded-full" style={{ background: tone }} />
                        <code className="font-mono text-[12.5px]">{id}</code>
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[13.5px] text-[var(--color-muted)]">{best}</td>
                    <td className="px-4 py-3 font-mono text-[12.5px] text-[var(--color-muted)]">{ctx}</td>
                    <td className="px-4 py-3 font-mono text-[12.5px] text-[var(--color-muted)]">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="next">
          <h2 className="mb-3 mt-11 font-serif text-[28px] font-medium tracking-[-0.014em]">Where to go next</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {NEXT.map(([title, desc, href]) => (
              <a
                key={title}
                href={href}
                className="group rounded-xl border border-[var(--color-line)] bg-white p-4 transition-colors hover:border-[var(--color-ink)]"
              >
                <p className="flex items-center gap-1.5 text-[14.5px] font-medium transition-colors group-hover:text-[var(--color-clay)]">
                  {title}
                  <Icon name="chevronRight" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </p>
                <p className="mt-1 text-[13px] leading-[1.6] text-[var(--color-muted)]">{desc}</p>
              </a>
            ))}
          </div>
        </section>

        <div className="mt-12 flex items-center justify-between border-t border-[var(--color-line)] pt-6 text-[13px]">
          <span className="text-[var(--color-faint)]">Was this page helpful?</span>
          <span className="flex gap-2">
            {["Yes", "No"].map((l) => (
              <button
                key={l}
                className="rounded-full border border-[var(--color-line)] px-4 py-1.5 text-[13px] text-[var(--color-muted)] transition-colors hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
              >
                {l}
              </button>
            ))}
          </span>
        </div>
      </article>
    </Shell>
  )
}
