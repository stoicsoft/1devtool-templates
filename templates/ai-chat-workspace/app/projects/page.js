"use client"

import { useState } from "react"
import { Avatar, Button, Card, Icon, Pill, Shell } from "../_components/shared"

const projects = [
  {
    name: "Platform",
    desc: "Latency work, migrations, and incident write-ups for the checkout stack.",
    chats: 34,
    docs: 12,
    tone: "#c96442",
    members: ["RK", "DS", "MA"],
    updated: "2h ago",
    pinned: true,
  },
  {
    name: "Research interviews",
    desc: "Transcripts and synthesis from the Q3 customer discovery round.",
    chats: 21,
    docs: 47,
    tone: "#629987",
    members: ["LP", "RK"],
    updated: "Yesterday",
    pinned: true,
  },
  {
    name: "Product copy",
    desc: "Onboarding, empty states, and release notes in the house voice.",
    chats: 58,
    docs: 9,
    tone: "#827dbd",
    members: ["MA", "JT", "LP", "DS"],
    updated: "Yesterday",
  },
  {
    name: "Data modeling",
    desc: "Warehouse schemas, dbt models, and metric definitions.",
    chats: 16,
    docs: 23,
    tone: "#98801f",
    members: ["DS"],
    updated: "Mon",
  },
  {
    name: "Support macros",
    desc: "Draft replies and tone calibration for the support inbox.",
    chats: 92,
    docs: 4,
    tone: "#c5621b",
    members: ["JT", "LP"],
    updated: "Mon",
  },
  {
    name: "Design QA",
    desc: "Screenshot reviews, spacing audits, and accessibility passes.",
    chats: 11,
    docs: 6,
    tone: "#cbcadb",
    members: ["MA"],
    updated: "Last week",
  },
]

export default function Projects() {
  const [query, setQuery] = useState("")
  const [creating, setCreating] = useState(false)

  const visible = projects.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
  const pinned = visible.filter((p) => p.pinned)
  const rest = visible.filter((p) => !p.pinned)

  return (
    <Shell
      active="/projects"
      title="Projects"
      actions={
        <>
          <div className="relative hidden sm:block">
            <Icon
              name="search"
              className="pointer-events-none absolute left-2.5 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-[var(--color-faint)]"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects"
              className="h-8 w-[210px] rounded-lg border border-[var(--color-line)] bg-white pl-8 pr-3 text-[12.5px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
            />
          </div>
          <Button onClick={() => setCreating(true)}>
            <Icon name="plus" className="h-4 w-4" /> New project
          </Button>
        </>
      }
    >
      <div className="mx-auto max-w-[980px]">
        <div className="mb-7 rounded-2xl border border-[var(--color-line)] bg-[var(--color-ivory-2)] p-5">
          <p className="font-serif text-[19px] font-medium tracking-[-0.01em]">
            Projects keep context where the work lives
          </p>
          <p className="mt-1.5 max-w-[62ch] text-[13.5px] leading-[1.65] text-[var(--color-muted)]">
            Add reference documents, set custom instructions, and every chat inside the project starts already knowing
            your codebase, your voice, and your constraints.
          </p>
          <div className="mt-3.5 flex flex-wrap gap-2">
            <Button variant="dark" onClick={() => setCreating(true)}>
              <Icon name="plus" className="h-4 w-4" /> Create a project
            </Button>
            <Button variant="outline">Browse templates</Button>
          </div>
        </div>

        {pinned.length > 0 && (
          <>
            <div className="mb-2.5 flex items-center gap-2">
              <Icon name="star" className="h-[15px] w-[15px] text-[var(--color-clay)]" />
              <h2 className="text-[12px] font-medium tracking-wide text-[var(--color-muted)]">Pinned</h2>
            </div>
            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {pinned.map((p) => (
                <ProjectCard key={p.name} p={p} />
              ))}
            </div>
          </>
        )}

        <h2 className="mb-2.5 text-[12px] font-medium tracking-wide text-[var(--color-muted)]">All projects</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>

        {visible.length === 0 && (
          <div className="rounded-xl border border-dashed border-[var(--color-line)] py-14 text-center">
            <p className="text-[13.5px] text-[var(--color-muted)]">No project matches “{query}”.</p>
          </div>
        )}
      </div>

      {creating && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-[rgba(20,20,19,0.35)] px-4"
          onClick={() => setCreating(false)}
        >
          <div
            className="w-full max-w-[460px] rounded-2xl border border-[var(--color-line)] bg-white p-5 shadow-[0_20px_50px_rgba(20,20,19,0.18)]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-serif text-[19px] font-medium tracking-[-0.01em]">New project</h2>
            <p className="mt-1 text-[12.5px] text-[var(--color-muted)]">
              Give it a name and a short brief. You can add documents afterwards.
            </p>
            <div className="mt-4 space-y-3">
              <Field label="Name" placeholder="Billing migration" />
              <Field label="What is this project about?" placeholder="Moving invoicing off the legacy service…" area />
              <div>
                <label className="text-[12px] font-medium text-[var(--color-muted)]">Accent</label>
                <div className="mt-1.5 flex gap-2">
                  {["#c96442", "#629987", "#827dbd", "#98801f", "#c5621b", "#cbcadb"].map((c, i) => (
                    <button
                      key={c}
                      className={`h-7 w-7 rounded-full ring-offset-2 transition-all ${i === 0 ? "ring-2 ring-[var(--color-ink)]" : ""}`}
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <Button variant="outline" onClick={() => setCreating(false)}>
                Cancel
              </Button>
              <Button onClick={() => setCreating(false)}>Create project</Button>
            </div>
          </div>
        </div>
      )}
    </Shell>
  )
}

function Field({ label, placeholder, area }) {
  return (
    <div>
      <label className="text-[12px] font-medium text-[var(--color-muted)]">{label}</label>
      {area ? (
        <textarea
          rows={3}
          placeholder={placeholder}
          className="mt-1.5 w-full resize-none rounded-lg border border-[var(--color-line)] px-3 py-2 text-[13px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
        />
      ) : (
        <input
          placeholder={placeholder}
          className="mt-1.5 h-9 w-full rounded-lg border border-[var(--color-line)] px-3 text-[13px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
        />
      )}
    </div>
  )
}

function ProjectCard({ p }) {
  return (
    <a
      href="/"
      className="group flex flex-col rounded-xl border border-[var(--color-line)] bg-white p-4 transition-all hover:border-[var(--color-ink)] hover:shadow-[0_2px_10px_rgba(20,20,19,0.05)]"
    >
      <div className="mb-2.5 flex items-start justify-between">
        <span
          className="grid h-9 w-9 place-items-center rounded-lg"
          style={{ background: `${p.tone}1f`, color: p.tone }}
        >
          <Icon name="folder" className="h-[18px] w-[18px]" />
        </span>
        <span className="text-[11px] text-[var(--color-faint)]">{p.updated}</span>
      </div>
      <h3 className="font-serif text-[16px] font-medium tracking-[-0.01em]">{p.name}</h3>
      <p className="mt-1 line-clamp-2 flex-1 text-[12.5px] leading-[1.6] text-[var(--color-muted)]">{p.desc}</p>
      <div className="mt-3.5 flex items-center justify-between border-t border-[var(--color-line-2)] pt-3">
        <div className="flex items-center gap-3 text-[11.5px] text-[var(--color-faint)]">
          <span className="inline-flex items-center gap-1">
            <Icon name="chat" className="h-3.5 w-3.5" />
            {p.chats}
          </span>
          <span className="inline-flex items-center gap-1">
            <Icon name="doc" className="h-3.5 w-3.5" />
            {p.docs}
          </span>
        </div>
        <div className="flex -space-x-1.5">
          {p.members.map((m, i) => (
            <span key={m} className="ring-2 ring-white rounded-full">
              <Avatar initials={m} size={22} tone={["#141413", "#629987", "#827dbd", "#c5621b"][i % 4]} />
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}
