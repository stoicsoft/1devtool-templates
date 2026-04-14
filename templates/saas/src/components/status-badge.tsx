const toneClass = {
  green: "border-jade/40 bg-jade/10 text-moss",
  amber: "border-amber/40 bg-amber/20 text-ink",
  coral: "border-coral/40 bg-coral/10 text-coral",
  neutral: "border-line bg-cloud text-quiet",
}

export function StatusBadge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode
  tone?: keyof typeof toneClass
}) {
  return (
    <span className={`inline-flex min-h-7 items-center rounded-lg border px-2.5 text-xs font-bold ${toneClass[tone]}`}>
      {children}
    </span>
  )
}
