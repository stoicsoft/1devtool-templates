"use client"

import { Callout, Code, Icon, Shell } from "../_components/docs"

const TOC = [
  ["overview", "How the loop works"],
  ["define", "Defining a tool"],
  ["handle", "Handling tool_use"],
  ["parallel", "Parallel tool calls"],
  ["errors", "Returning errors"],
]

const STEPS = [
  ["You send", "messages + a tools array describing what the model may call"],
  ["Model replies", "a content block of type tool_use with a name and input"],
  ["You execute", "the function yourself — the model never runs anything"],
  ["You send back", "a tool_result block referencing that tool_use_id"],
  ["Model replies", "a normal text block, now grounded in your result"],
]

export default function ToolUse() {
  return (
    <Shell current="Tool use" toc={TOC}>
      <article className="max-w-[74ch]">
        <nav className="flex items-center gap-1.5 text-[12.5px] text-[var(--color-faint)]">
          <span>Docs</span>
          <Icon name="chevronRight" className="h-3 w-3" />
          <span>Capabilities</span>
          <Icon name="chevronRight" className="h-3 w-3" />
          <span className="text-[var(--color-ink-3)]">Tool use</span>
        </nav>

        <h1 className="display mt-4 text-[40px]">Tool use</h1>
        <p className="mt-4 text-[17px] leading-[1.72] text-[var(--color-muted)]">
          Give the model a list of functions it may call, and it will ask you to run them. Your code stays in control
          of every side effect — the model only ever proposes a call and reads what you send back.
        </p>

        <section id="overview">
          <h2 className="mb-3 mt-11 font-serif text-[28px] font-medium tracking-[-0.014em]">How the loop works</h2>
          <ol className="my-5 space-y-0 overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
            {STEPS.map(([who, what], i) => (
              <li
                key={i}
                className={`flex items-start gap-3.5 px-4 py-3.5 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}
              >
                <span className="mt-[1px] grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-[var(--color-clay-soft)] font-mono text-[11px] text-[var(--color-clay-2)]">
                  {i + 1}
                </span>
                <span className="text-[14.5px] leading-[1.65]">
                  <strong className="font-medium">{who}</strong>{" "}
                  <span className="text-[var(--color-muted)]">{what}</span>
                </span>
              </li>
            ))}
          </ol>
          <Callout kind="info" title="The model cannot execute anything">
            A <code className="font-mono text-[13px]">tool_use</code> block is a request, not an action. Nothing runs
            until your code decides to run it, which means normal authorization applies exactly as it always did.
          </Callout>
        </section>

        <section id="define">
          <h2 className="mb-3 mt-11 font-serif text-[28px] font-medium tracking-[-0.014em]">Defining a tool</h2>
          <p className="text-[15.5px] leading-[1.75] text-[var(--color-ink-3)]">
            A tool is a name, a description, and a JSON Schema. Spend your effort on the description — it is what the
            model reads when deciding whether this tool is the right one.
          </p>
          <Code
            tabs={[
              [
                "python",
                `tools = [
    {
        "name": "get_weather",
        "description": (
            "Current conditions for a city. Returns temperature in "
            "celsius and a one-word sky description. Use this rather "
            "than guessing; do not call it for historical weather."
        ),
        "input_schema": {
            "type": "object",
            "properties": {
                "city": {"type": "string", "description": "City name, e.g. 'Lisbon'"},
                "units": {"enum": ["c", "f"], "default": "c"},
            },
            "required": ["city"],
        },
    }
]

message = client.messages.create(
    model="halcyon-4-sonnet",
    max_tokens=1024,
    tools=tools,
    messages=[{"role": "user", "content": "Do I need a coat in Lisbon?"}],
)`,
              ],
              [
                "typescript",
                `const tools = [
  {
    name: "get_weather",
    description:
      "Current conditions for a city. Returns temperature in celsius " +
      "and a one-word sky description. Use this rather than guessing.",
    input_schema: {
      type: "object",
      properties: {
        city: { type: "string", description: "City name, e.g. 'Lisbon'" },
        units: { enum: ["c", "f"], default: "c" },
      },
      required: ["city"],
    },
  },
]

const message = await client.messages.create({
  model: "halcyon-4-sonnet",
  max_tokens: 1024,
  tools,
  messages: [{ role: "user", content: "Do I need a coat in Lisbon?" }],
})`,
              ],
            ]}
          />
        </section>

        <section id="handle">
          <h2 className="mb-3 mt-11 font-serif text-[28px] font-medium tracking-[-0.014em]">Handling tool_use</h2>
          <p className="text-[15.5px] leading-[1.75] text-[var(--color-ink-3)]">
            When <code className="rounded bg-white px-1.5 py-[1px] font-mono text-[13px]">stop_reason</code> is{" "}
            <code className="rounded bg-white px-1.5 py-[1px] font-mono text-[13px]">"tool_use"</code>, run the call and
            append a user message containing the result.
          </p>
          <Code
            code={`if message.stop_reason == "tool_use":
    block = next(b for b in message.content if b.type == "tool_use")
    result = get_weather(**block.input)

    follow_up = client.messages.create(
        model="halcyon-4-sonnet",
        max_tokens=1024,
        tools=tools,
        messages=[
            {"role": "user", "content": "Do I need a coat in Lisbon?"},
            {"role": "assistant", "content": message.content},
            {
                "role": "user",
                "content": [
                    {
                        "type": "tool_result",
                        "tool_use_id": block.id,
                        "content": json.dumps(result),
                    }
                ],
            },
        ],
    )`}
          />
        </section>

        <section id="parallel">
          <h2 className="mb-3 mt-11 font-serif text-[28px] font-medium tracking-[-0.014em]">Parallel tool calls</h2>
          <p className="text-[15.5px] leading-[1.75] text-[var(--color-ink-3)]">
            The model may emit several <code className="rounded bg-white px-1.5 py-[1px] font-mono text-[13px]">tool_use</code>{" "}
            blocks in one turn when the calls are independent. Run them concurrently and return every result in a
            single follow-up message.
          </p>
          <Code
            lang="json"
            code={`"content": [
  { "type": "tool_use", "id": "tu_01", "name": "get_weather", "input": { "city": "Lisbon" } },
  { "type": "tool_use", "id": "tu_02", "name": "get_weather", "input": { "city": "Porto" } }
]`}
          />
          <Callout kind="warn" title="Return all of them">
            Every <code className="font-mono text-[13px]">tool_use</code> block needs a matching{" "}
            <code className="font-mono text-[13px]">tool_result</code>. Omitting one returns a 400 rather than a
            partial answer.
          </Callout>
        </section>

        <section id="errors">
          <h2 className="mb-3 mt-11 font-serif text-[28px] font-medium tracking-[-0.014em]">Returning errors</h2>
          <p className="text-[15.5px] leading-[1.75] text-[var(--color-ink-3)]">
            When your function fails, say so in the result rather than raising. The model handles a stated failure
            gracefully — it will retry with different arguments or tell the user it could not find out.
          </p>
          <Code
            lang="json"
            code={`{
  "type": "tool_result",
  "tool_use_id": "tu_01",
  "is_error": true,
  "content": "Upstream weather API returned 503. No cached value for Lisbon."
}`}
          />
        </section>

        <div className="mt-12 grid gap-3 border-t border-[var(--color-line)] pt-6 sm:grid-cols-2">
          {[
            ["Previous", "Prompt caching", "/"],
            ["Next", "Structured output", "/"],
          ].map(([label, title, href]) => (
            <a
              key={label}
              href={href}
              className="group rounded-xl border border-[var(--color-line)] bg-white p-4 transition-colors hover:border-[var(--color-ink)]"
            >
              <span className="eyebrow">{label}</span>
              <span className="mt-1 block text-[15px] font-medium transition-colors group-hover:text-[var(--color-clay)]">
                {title}
              </span>
            </a>
          ))}
        </div>
      </article>
    </Shell>
  )
}
