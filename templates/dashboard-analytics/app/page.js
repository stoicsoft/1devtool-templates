// ------------------------------------------------------------------
// ServerCompass — Overview Dashboard
// Single-file Next.js page. All charts are hand-drawn SVG.
// ------------------------------------------------------------------

const workspaces = [
  { id: "prod", label: "servercompass · production" },
  { id: "stag", label: "servercompass · staging" },
  { id: "sbox", label: "sandbox" },
]

const kpis = [
  {
    label: "Probes run · 24h",
    value: "4.82M",
    delta: 6.4,
    deltaDir: "up",
    spark: [32, 36, 30, 38, 44, 41, 48, 52, 49, 55, 58, 62, 60, 66],
    accent: "#3ee0a5",
    hint: "vs 4.53M prev",
  },
  {
    label: "Uptime SLO · 30d",
    value: "99.987%",
    delta: 0.04,
    deltaDir: "up",
    spark: [78, 80, 82, 79, 84, 85, 83, 86, 88, 87, 89, 90, 91, 92],
    accent: "#58a6ff",
    hint: "target 99.95%",
  },
  {
    label: "p95 latency",
    value: "184ms",
    delta: 3.1,
    deltaDir: "down",
    spark: [68, 62, 64, 58, 60, 55, 54, 52, 50, 48, 49, 47, 46, 44],
    accent: "#9ad7ff",
    hint: "vs 190ms prev",
  },
  {
    label: "Active alerts",
    value: "7",
    delta: 2,
    deltaDir: "up",
    spark: [20, 18, 22, 24, 28, 26, 30, 32, 34, 30, 36, 38, 40, 44],
    accent: "#ff6f7a",
    hint: "2 critical · 5 warn",
  },
]

// Main chart — 4 series across 7 days (one point per 3h → 56 points)
const series = [
  {
    name: "HTTP probes",
    color: "#3ee0a5",
    points: [94, 95, 96, 97, 96, 95, 97, 98, 97, 96, 98, 99, 98, 97, 96, 97, 98, 99, 99, 98, 97, 96, 97, 98, 99, 98, 97, 99, 99, 98, 97, 98, 99, 99, 98, 97, 98, 99, 99, 99, 98, 97, 98, 99, 98, 97, 98, 99, 99, 98, 97, 98, 99, 99, 98, 99],
  },
  {
    name: "Browser flows",
    color: "#58a6ff",
    points: [88, 90, 91, 89, 92, 93, 91, 94, 93, 95, 94, 96, 95, 94, 95, 96, 97, 96, 95, 94, 95, 96, 97, 95, 94, 93, 92, 91, 90, 92, 94, 95, 96, 95, 94, 96, 97, 96, 95, 94, 96, 97, 95, 94, 96, 97, 95, 94, 96, 97, 96, 94, 95, 96, 97, 95],
  },
  {
    name: "TCP checks",
    color: "#9ad7ff",
    points: [97, 97, 98, 98, 99, 98, 97, 98, 99, 99, 98, 99, 99, 98, 99, 99, 98, 97, 98, 99, 99, 98, 99, 99, 98, 99, 99, 98, 99, 99, 98, 99, 99, 98, 99, 99, 99, 98, 99, 99, 98, 99, 99, 98, 99, 99, 98, 99, 99, 98, 99, 99, 98, 99, 99, 99],
  },
  {
    name: "DNS resolvers",
    color: "#f5c54b",
    points: [92, 93, 94, 95, 94, 93, 92, 91, 93, 94, 95, 96, 95, 94, 93, 94, 95, 96, 97, 96, 95, 93, 92, 91, 90, 92, 94, 95, 96, 94, 93, 95, 96, 95, 94, 93, 94, 95, 96, 95, 94, 95, 96, 95, 94, 95, 96, 97, 95, 94, 95, 96, 95, 94, 96, 96],
  },
]

// 7-day stacked alert volumes by severity
const alertDays = [
  { d: "Wed 09", critical: 2, warn: 7, info: 14 },
  { d: "Thu 10", critical: 1, warn: 9, info: 18 },
  { d: "Fri 11", critical: 3, warn: 6, info: 12 },
  { d: "Sat 12", critical: 0, warn: 4, info: 9 },
  { d: "Sun 13", critical: 1, warn: 5, info: 10 },
  { d: "Mon 14", critical: 4, warn: 11, info: 22 },
  { d: "Tue 15", critical: 2, warn: 8, info: 17 },
]

// World map regions — x,y in a 1000x500 coordinate system
const regions = [
  { code: "sfo", x: 170, y: 210, volume: 840, city: "San Francisco" },
  { code: "lax", x: 185, y: 235, volume: 520, city: "Los Angeles" },
  { code: "nyc", x: 275, y: 200, volume: 920, city: "New York" },
  { code: "yyz", x: 260, y: 185, volume: 310, city: "Toronto" },
  { code: "gru", x: 340, y: 360, volume: 280, city: "São Paulo" },
  { code: "lhr", x: 480, y: 175, volume: 740, city: "London" },
  { code: "fra", x: 510, y: 180, volume: 690, city: "Frankfurt" },
  { code: "ams", x: 500, y: 170, volume: 420, city: "Amsterdam" },
  { code: "cdg", x: 495, y: 185, volume: 380, city: "Paris" },
  { code: "sto", x: 525, y: 140, volume: 160, city: "Stockholm" },
  { code: "jnb", x: 560, y: 370, volume: 130, city: "Johannesburg" },
  { code: "bom", x: 700, y: 255, volume: 350, city: "Mumbai" },
  { code: "sin", x: 790, y: 305, volume: 470, city: "Singapore" },
  { code: "hkg", x: 820, y: 255, volume: 410, city: "Hong Kong" },
  { code: "nrt", x: 870, y: 215, volume: 560, city: "Tokyo" },
  { code: "icn", x: 850, y: 210, volume: 330, city: "Seoul" },
  { code: "syd", x: 890, y: 385, volume: 300, city: "Sydney" },
]

const failing = [
  { ep: "POST /v2/payments/charge", region: "lax", err: 6.84, p95: 612, calls: "128.4k", spark: [40, 48, 55, 62, 58, 68, 74, 80, 85, 88, 92, 88, 94, 96], crit: true },
  { ep: "GET  /v1/search/autocomplete", region: "fra", err: 3.12, p95: 318, calls: "842.0k", spark: [40, 42, 44, 46, 48, 52, 55, 58, 60, 62, 64, 62, 68, 72] },
  { ep: "PATCH /v1/orders/:id", region: "nyc", err: 2.74, p95: 284, calls: "96.8k", spark: [30, 28, 32, 36, 40, 44, 42, 48, 52, 55, 58, 60, 58, 62] },
  { ep: "POST /auth/session/refresh", region: "sin", err: 1.96, p95: 412, calls: "1.2M", spark: [55, 50, 48, 52, 54, 58, 60, 62, 58, 56, 60, 64, 62, 66] },
  { ep: "GET  /v2/reports/aggregate", region: "sfo", err: 1.42, p95: 842, calls: "58.3k", spark: [60, 62, 64, 62, 66, 68, 64, 62, 60, 66, 68, 70, 68, 72] },
  { ep: "DELETE /v1/files/:id", region: "ams", err: 0.98, p95: 196, calls: "48.2k", spark: [40, 38, 42, 44, 40, 38, 42, 44, 46, 42, 44, 46, 42, 48] },
  { ep: "POST /v1/webhooks/dispatch", region: "nrt", err: 0.64, p95: 148, calls: "320.1k", spark: [30, 32, 28, 30, 34, 32, 30, 28, 32, 34, 36, 30, 32, 34] },
  { ep: "GET  /healthz", region: "syd", err: 0.18, p95: 42, calls: "3.4M", spark: [20, 22, 20, 18, 22, 20, 22, 18, 20, 22, 20, 18, 22, 20] },
]

const alerts = [
  {
    sev: "critical",
    title: "TLS handshake failures spiking — checkout cluster",
    svc: "checkout.servercompass.app · lax",
    ts: "04:12 UTC",
    ago: "14 min",
  },
  {
    sev: "critical",
    title: "p95 > 600ms on POST /v2/payments/charge",
    svc: "payments-gateway · multi-region",
    ts: "04:04 UTC",
    ago: "22 min",
  },
  {
    sev: "warn",
    title: "CDN cache hit ratio dropped to 71% (threshold 85%)",
    svc: "edge.servercompass.app · global",
    ts: "03:48 UTC",
    ago: "38 min",
  },
  {
    sev: "warn",
    title: "SSL certificate expires in 12 days — cdn.stoicsoft.com",
    svc: "cert-monitor · all regions",
    ts: "02:30 UTC",
    ago: "1h 56m",
  },
  {
    sev: "info",
    title: "Probe region fra-b returned to service",
    svc: "probe-fleet · fra-b",
    ts: "01:02 UTC",
    ago: "3h 24m",
  },
]

// ------------------------------------------------------------------
// Icons & logo
// ------------------------------------------------------------------

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M16 6v10l7 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "chevron") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m6 9 6 6 6-6"/></svg>)
  if (name === "calendar") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>)
  if (name === "refresh") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 12a8 8 0 0 1 14-5l2-2M20 4v5h-5"/><path d="M20 12a8 8 0 0 1-14 5l-2 2M4 20v-5h5"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>)
  if (name === "bell") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M6 15V11a6 6 0 0 1 12 0v4l1.5 2.5h-15Z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>)
  if (name === "export") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 4v12M7 9l5-5 5 5"/><path d="M5 20h14"/></svg>)
  if (name === "share") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8 11 8-4M8 13l8 4"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 19V5M6 11l6-6 6 6"/></svg>)
  if (name === "arrow-down") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M6 13l6 6 6-6"/></svg>)
  if (name === "filter") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 5h18l-7 9v5l-4 2v-7L3 5Z"/></svg>)
  if (name === "dots") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg>)
  if (name === "check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m5 12 5 5 9-11"/></svg>)
  if (name === "alert") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3 2 21h20L12 3ZM12 10v5M12 18v.01"/></svg>)
  if (name === "plus") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 5v14M5 12h14"/></svg>)
  return null
}

// ------------------------------------------------------------------
// Chart primitives (all hand-drawn SVG)
// ------------------------------------------------------------------

function Sparkline({ points, color = "#3ee0a5", width = 120, height = 36, fill = true }) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = Math.max(1, max - min)
  const step = width / (points.length - 1)
  const coords = points.map((p, i) => {
    const x = i * step
    const y = height - ((p - min) / range) * (height - 4) - 2
    return [x, y]
  })
  const path = coords.map(([x, y], i) => (i === 0 ? `M${x.toFixed(1)},${y.toFixed(1)}` : `L${x.toFixed(1)},${y.toFixed(1)}`)).join(" ")
  const area = `${path} L${width},${height} L0,${height} Z`
  const gradId = `sp-${color.replace("#", "")}-${points.length}-${points[0]}`
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} className="overflow-visible">
      <defs>
        <linearGradient id={gradId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {fill && <path d={area} fill={`url(#${gradId})`} />}
      <path d={path} fill="none" stroke={color} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

function MainChart() {
  const W = 1000
  const H = 300
  const padL = 44
  const padR = 16
  const padT = 24
  const padB = 40
  const innerW = W - padL - padR
  const innerH = H - padT - padB

  const yMin = 84
  const yMax = 100

  const toX = (i, n) => padL + (i / (n - 1)) * innerW
  const toY = (v) => padT + (1 - (v - yMin) / (yMax - yMin)) * innerH

  const gridYs = [84, 88, 92, 96, 100]
  const n = series[0].points.length

  // 7-day labels (one per day → every 8th point of 56)
  const dayLabels = ["Wed 09", "Thu 10", "Fri 11", "Sat 12", "Sun 13", "Mon 14", "Tue 15"]

  const buildPath = (points) =>
    points
      .map((v, i) => `${i === 0 ? "M" : "L"}${toX(i, points.length).toFixed(1)},${toY(v).toFixed(1)}`)
      .join(" ")

  const primary = series[0].points
  const primaryPath = buildPath(primary)
  const primaryArea = `${primaryPath} L${toX(n - 1, n).toFixed(1)},${(padT + innerH).toFixed(1)} L${toX(0, n).toFixed(1)},${(padT + innerH).toFixed(1)} Z`

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none" style={{ height: 300 }}>
      <defs>
        <linearGradient id="mc-area" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3ee0a5" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#3ee0a5" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Y grid + labels */}
      {gridYs.map((g) => (
        <g key={g}>
          <line
            x1={padL}
            x2={W - padR}
            y1={toY(g)}
            y2={toY(g)}
            stroke="rgba(255,255,255,0.06)"
            strokeDasharray="3 4"
          />
          <text
            x={padL - 10}
            y={toY(g) + 4}
            textAnchor="end"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            fill="rgba(255,255,255,0.42)"
          >
            {g}%
          </text>
        </g>
      ))}

      {/* X labels */}
      {dayLabels.map((d, i) => {
        const x = padL + (i / (dayLabels.length - 1)) * innerW
        return (
          <text
            key={d}
            x={x}
            y={H - padB + 22}
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            fill="rgba(255,255,255,0.42)"
          >
            {d}
          </text>
        )
      })}

      {/* Gradient area under primary */}
      <path d={primaryArea} fill="url(#mc-area)" />

      {/* Series lines */}
      {series.map((s) => (
        <path
          key={s.name}
          d={buildPath(s.points)}
          fill="none"
          stroke={s.color}
          strokeWidth={s.name === "HTTP probes" ? 2.2 : 1.6}
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity={s.name === "HTTP probes" ? 1 : 0.85}
        />
      ))}

      {/* Marker on latest primary point */}
      <circle cx={toX(n - 1, n)} cy={toY(primary[n - 1])} r="4" fill="#050814" stroke="#3ee0a5" strokeWidth="2" />
    </svg>
  )
}

function WorldMap() {
  // Simplified continent outlines as paths in a 1000x500 viewBox.
  const continents = [
    // North America
    "M120,120 L220,95 L280,120 L305,155 L290,200 L240,255 L195,275 L160,260 L130,220 L110,180 Z",
    // Central America sliver
    "M235,260 L270,285 L285,305 L275,315 L250,310 L235,290 Z",
    // South America
    "M300,285 L355,285 L385,320 L380,385 L340,430 L310,415 L295,365 L290,315 Z",
    // Europe
    "M470,130 L555,120 L580,150 L560,195 L515,210 L480,195 L465,165 Z",
    // Africa
    "M480,215 L570,215 L600,250 L595,310 L555,370 L515,400 L490,360 L475,300 L470,245 Z",
    // Asia
    "M585,110 L780,100 L880,130 L900,170 L880,215 L820,245 L755,245 L690,260 L635,240 L595,200 L580,155 Z",
    // India subcontinent
    "M680,240 L730,255 L725,290 L700,285 L685,260 Z",
    // South-East Asia
    "M790,260 L830,265 L825,295 L790,315 L770,295 Z",
    // Australia
    "M850,370 L920,360 L935,395 L905,420 L855,415 L840,395 Z",
    // Greenland
    "M380,70 L430,60 L440,100 L410,120 L380,110 Z",
  ]

  const maxVol = Math.max(...regions.map((r) => r.volume))

  return (
    <svg viewBox="0 0 1000 500" className="h-full w-full">
      <defs>
        <radialGradient id="dot-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3ee0a5" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3ee0a5" stopOpacity="0" />
        </radialGradient>
        <pattern id="mapdots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(88,166,255,0.18)" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="1000" height="500" fill="url(#mapdots)" />

      {continents.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="rgba(88,166,255,0.08)"
          stroke="rgba(88,166,255,0.35)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      ))}

      {/* Equator */}
      <line x1="0" x2="1000" y1="275" y2="275" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 6" />

      {regions.map((r) => {
        const size = 4 + (r.volume / maxVol) * 14
        return (
          <g key={r.code}>
            <circle cx={r.x} cy={r.y} r={size * 1.8} fill="url(#dot-glow)" />
            <circle cx={r.x} cy={r.y} r={size} fill="#3ee0a5" fillOpacity="0.85" />
            <circle cx={r.x} cy={r.y} r={size * 0.45} fill="#050814" />
          </g>
        )
      })}
    </svg>
  )
}

function StackedAlertChart() {
  const W = 520
  const H = 260
  const padL = 34
  const padR = 12
  const padT = 18
  const padB = 32
  const innerW = W - padL - padR
  const innerH = H - padT - padB

  const totals = alertDays.map((d) => d.critical + d.warn + d.info)
  const yMax = Math.max(...totals) + 4

  const groupW = innerW / alertDays.length
  const barW = groupW * 0.52

  const toY = (v) => padT + (1 - v / yMax) * innerH

  const gridYs = [0, 10, 20, 30, 40]

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
      {gridYs.map((g) =>
        g > yMax ? null : (
          <g key={g}>
            <line
              x1={padL}
              x2={W - padR}
              y1={toY(g)}
              y2={toY(g)}
              stroke="rgba(255,255,255,0.05)"
              strokeDasharray="3 4"
            />
            <text
              x={padL - 8}
              y={toY(g) + 3}
              textAnchor="end"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9"
              fill="rgba(255,255,255,0.42)"
            >
              {g}
            </text>
          </g>
        )
      )}

      {alertDays.map((d, i) => {
        const cx = padL + groupW * i + groupW / 2
        const x = cx - barW / 2
        const infoH = (d.info / yMax) * innerH
        const warnH = (d.warn / yMax) * innerH
        const critH = (d.critical / yMax) * innerH
        const yInfo = padT + innerH - infoH
        const yWarn = yInfo - warnH
        const yCrit = yWarn - critH
        return (
          <g key={d.d}>
            <rect x={x} y={yInfo} width={barW} height={infoH} rx="3" fill="#58a6ff" fillOpacity="0.55" />
            <rect x={x} y={yWarn} width={barW} height={warnH} rx="3" fill="#f5c54b" fillOpacity="0.9" />
            <rect x={x} y={yCrit} width={barW} height={critH} rx="3" fill="#ff6f7a" fillOpacity="0.95" />
            <text
              x={cx}
              y={H - padB + 18}
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9.5"
              fill="rgba(255,255,255,0.55)"
            >
              {d.d}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

// ------------------------------------------------------------------
// Page
// ------------------------------------------------------------------

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050814] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] beacon" />
      <div className="pointer-events-none absolute inset-0 grid-dots opacity-[0.22]" />

      {/* Top nav */}
      <header className="relative z-20 border-b border-white/5 bg-[#050814]/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-6 py-3">
          <a href="#" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
            <span className="text-[#3ee0a5]"><Logo /></span>
            ServerCompass
          </a>

          <span className="hidden h-4 w-px bg-white/10 md:inline-block" />

          {/* Workspace switcher */}
          <button className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/80 transition hover:border-white/20 md:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3ee0a5]" />
            <span className="font-mono">servercompass · production</span>
            <Icon name="chevron" className="h-3.5 w-3.5 text-white/50" />
          </button>

          <nav className="ml-4 hidden items-center gap-5 text-sm text-white/60 lg:flex">
            <a href="#" className="text-white">Overview</a>
            <a href="#" className="hover:text-white">Probes</a>
            <a href="#" className="hover:text-white">SLOs</a>
            <a href="#" className="hover:text-white">Alerts</a>
            <a href="#" className="hover:text-white">Runbooks</a>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            {/* Search */}
            <div className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60 md:flex">
              <Icon name="search" className="h-3.5 w-3.5 text-white/50" />
              <span>Jump to…</span>
              <span className="ml-4 rounded border border-white/10 bg-black/30 px-1.5 py-[1px] font-mono text-[10px] text-white/50">⌘K</span>
            </div>

            {/* Date range */}
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/80 hover:border-white/20">
              <Icon name="calendar" className="h-3.5 w-3.5 text-white/60" />
              <span className="font-mono">Last 7 days</span>
              <Icon name="chevron" className="h-3.5 w-3.5 text-white/50" />
            </button>

            {/* Refresh */}
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-white/80 hover:border-white/20">
              <Icon name="refresh" className="h-3.5 w-3.5 text-[#3ee0a5]" />
              <span className="font-mono">12s</span>
            </button>

            {/* Bell */}
            <button className="relative hidden rounded-lg border border-white/10 bg-white/[0.03] p-2 text-white/70 hover:border-white/20 md:inline-flex">
              <Icon name="bell" className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#ff6f7a]" />
            </button>

            {/* Avatar */}
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] py-1 pl-1 pr-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-[#3ee0a5] to-[#58a6ff] text-[11px] font-bold text-[#050814]">
                KP
              </span>
              <div className="hidden text-left text-xs leading-tight sm:block">
                <p className="font-medium">Kavi Patel</p>
                <p className="font-mono text-[10px] text-white/50">sre · lead</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-[1400px] px-6 py-8">
        {/* Page title row */}
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <span>Workspaces</span>
              <span>/</span>
              <span className="font-mono">production</span>
              <span>/</span>
              <span className="text-white/80">Overview</span>
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Overview</h1>
            <p className="mt-2 max-w-xl text-sm text-white/60">
              Synthetic probes, SLO burn, and active incidents across all services and regions.
              Data refreshes every 12 seconds.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/70">
                <Icon name="calendar" className="h-3 w-3 text-[#58a6ff]" />
                <span className="font-mono">Last 7 days</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3ee0a5]/30 bg-[#3ee0a5]/5 px-3 py-1 text-[#3ee0a5]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="pulse-soft absolute inline-flex h-full w-full rounded-full bg-[#3ee0a5]" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#3ee0a5]" />
                </span>
                <span className="font-mono">live</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-white/60">
                142 regions
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-white/60">
                318 services
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-white/80 hover:border-white/20">
              <Icon name="filter" className="h-3.5 w-3.5" />
              Filters
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-white/80 hover:border-white/20">
              <Icon name="export" className="h-3.5 w-3.5" />
              Export
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-white/80 hover:border-white/20">
              <Icon name="share" className="h-3.5 w-3.5" />
              Share
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#3ee0a5] to-[#58a6ff] px-3 py-2 text-xs font-semibold text-[#050814] shadow-[0_10px_30px_-10px_rgba(62,224,165,0.55)]">
              <Icon name="plus" className="h-3.5 w-3.5" />
              New probe
            </button>
          </div>
        </div>

        {/* KPI row */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {kpis.map((k) => {
            const up = k.deltaDir === "up"
            const good =
              (up && k.label !== "p95 latency" && k.label !== "Active alerts") ||
              (!up && (k.label === "p95 latency"))
            const deltaColor = good ? "text-[#3ee0a5]" : "text-[#ff6f7a]"
            const deltaBg = good ? "bg-[#3ee0a5]/10" : "bg-[#ff6f7a]/10"
            return (
              <article
                key={k.label}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-5 shadow-[0_30px_80px_-40px_rgba(62,224,165,0.35)] transition hover:border-white/20"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl" style={{ background: `${k.accent}22` }} />
                <div className="flex items-start justify-between">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">{k.label}</p>
                  <button className="text-white/40 hover:text-white"><Icon name="dots" className="h-4 w-4" /></button>
                </div>
                <p className="mt-3 font-mono text-4xl font-semibold tracking-tight">{k.value}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 font-mono text-[11px] font-semibold ${deltaColor} ${deltaBg}`}>
                    <Icon name={up ? "arrow-up" : "arrow-down"} className="h-3 w-3" />
                    {k.delta}{typeof k.delta === "number" && k.delta < 10 ? "%" : ""}
                  </span>
                  <span className="font-mono text-[11px] text-white/45">{k.hint}</span>
                </div>
                <div className="mt-4 -mx-1">
                  <Sparkline points={k.spark} color={k.accent} width={260} height={48} />
                </div>
              </article>
            )
          })}
        </div>

        {/* Main chart */}
        <section className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold tracking-tight">Probe success rate · last 7 days</h2>
                <span className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-white/55">56 points</span>
              </div>
              <p className="mt-1 text-xs text-white/55">Rolling average across all regions. Target SLO: 99.5%.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {series.map((s) => (
                <div key={s.name} className="flex items-center gap-2 text-xs text-white/70">
                  <span className="h-2.5 w-2.5 rounded-sm" style={{ background: s.color }} />
                  <span className="font-mono">{s.name}</span>
                </div>
              ))}
              <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] p-0.5 text-[11px]">
                {["1h", "24h", "7d", "30d"].map((r) => (
                  <button
                    key={r}
                    className={
                      r === "7d"
                        ? "rounded-md bg-white/10 px-2.5 py-1 font-mono font-semibold text-white"
                        : "rounded-md px-2.5 py-1 font-mono text-white/55 hover:text-white"
                    }
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <MainChart />
          </div>

          <div className="mt-3 grid gap-4 border-t border-white/5 pt-4 text-xs md:grid-cols-4">
            {[
              { k: "Best region", v: "fra-a", s: "99.998%" },
              { k: "Worst region", v: "lax-b", s: "98.42%" },
              { k: "Avg latency", v: "184ms", s: "-3.1%" },
              { k: "Error budget left", v: "62%", s: "of 30d" },
            ].map((c) => (
              <div key={c.k} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/45">{c.k}</p>
                  <p className="mt-0.5 font-mono text-sm font-semibold">{c.v}</p>
                </div>
                <p className="font-mono text-[11px] text-white/55">{c.s}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2-column grid */}
        <section className="mt-8 grid gap-6 xl:grid-cols-[1.55fr_1fr]">
          {/* World map */}
          <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">Probe regions · live traffic</h3>
                <p className="mt-1 text-xs text-white/55">17 of 34 regions shown. Dot size = requests/min.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3ee0a5] blink" />
                  <span className="font-mono">live</span>
                </span>
                <button className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-white/70 hover:border-white/20">
                  Expand
                </button>
              </div>
            </div>

            <div className="relative mt-4 overflow-hidden rounded-xl border border-white/5 bg-[#070d1f]" style={{ aspectRatio: "2 / 1" }}>
              <WorldMap />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
              {regions.slice(0, 8).map((r) => (
                <div key={r.code} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
                  <div>
                    <p className="font-mono text-[11px] uppercase text-white/85">{r.code}</p>
                    <p className="text-[10px] text-white/45">{r.city}</p>
                  </div>
                  <p className="font-mono text-xs text-[#3ee0a5]">{r.volume}/m</p>
                </div>
              ))}
            </div>
          </article>

          {/* Stacked alerts */}
          <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">Alert volume by severity</h3>
                <p className="mt-1 text-xs text-white/55">Last 7 days · acknowledged + open</p>
              </div>
              <button className="rounded-lg border border-white/10 bg-white/[0.03] p-1.5 text-white/60 hover:text-white">
                <Icon name="dots" className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-sm bg-[#ff6f7a]" />
                <span className="text-white/75">Critical</span>
                <span className="font-mono text-white/50">13</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-sm bg-[#f5c54b]" />
                <span className="text-white/75">Warn</span>
                <span className="font-mono text-white/50">50</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-sm bg-[#58a6ff]/70" />
                <span className="text-white/75">Info</span>
                <span className="font-mono text-white/50">102</span>
              </div>
            </div>

            <div className="mt-5">
              <StackedAlertChart />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/5 pt-4 text-xs">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/45">MTTR · 7d</p>
                <p className="mt-0.5 font-mono text-sm font-semibold">9m 42s</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/45">Noise ratio</p>
                <p className="mt-0.5 font-mono text-sm font-semibold">2.8%</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/45">On-call</p>
                <p className="mt-0.5 font-mono text-sm font-semibold">@kavi.p</p>
              </div>
            </div>
          </article>
        </section>

        {/* Failing endpoints table */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01]">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/5 p-6">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">Top failing endpoints</h3>
              <p className="mt-1 text-xs text-white/55">Sorted by error rate · rolling 24h</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] p-0.5 text-[11px]">
                {["All", "5xx", "4xx", "Timeout"].map((r) => (
                  <button
                    key={r}
                    className={
                      r === "All"
                        ? "rounded-md bg-white/10 px-2.5 py-1 font-medium text-white"
                        : "rounded-md px-2.5 py-1 text-white/55 hover:text-white"
                    }
                  >
                    {r}
                  </button>
                ))}
              </div>
              <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/80 hover:border-white/20">
                <Icon name="export" className="h-3.5 w-3.5" />
                CSV
              </button>
            </div>
          </div>

          <div className="scroll-x overflow-x-auto">
            <table className="w-full min-w-[920px] text-left text-sm">
              <thead>
                <tr className="text-[10px] uppercase tracking-widest text-white/45">
                  <th className="px-6 py-3 font-medium">Endpoint</th>
                  <th className="px-4 py-3 font-medium">Region</th>
                  <th className="px-4 py-3 font-medium">Error rate</th>
                  <th className="px-4 py-3 font-medium">p95</th>
                  <th className="px-4 py-3 font-medium">Calls · 24h</th>
                  <th className="px-4 py-3 font-medium">Trend</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody>
                {failing.map((r, i) => (
                  <tr
                    key={r.ep}
                    className={
                      r.crit
                        ? "border-t border-white/5 bg-[#ff6f7a]/[0.06]"
                        : i % 2 === 0
                        ? "border-t border-white/5"
                        : "border-t border-white/5 bg-white/[0.015]"
                    }
                  >
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-2">
                        {r.crit && <span className="h-1.5 w-1.5 rounded-full bg-[#ff6f7a] pulse-soft" />}
                        <span className="font-mono text-[13px] text-white/90">{r.ep}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[11px] uppercase text-white/75">
                        {r.region}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`font-mono text-sm font-semibold ${
                          r.err > 3 ? "text-[#ff6f7a]" : r.err > 1 ? "text-[#f5c54b]" : "text-white/85"
                        }`}
                      >
                        {r.err.toFixed(2)}%
                      </span>
                    </td>
                    <td className="px-4 py-3 font-mono text-sm text-white/85">{r.p95}ms</td>
                    <td className="px-4 py-3 font-mono text-sm text-white/70">{r.calls}</td>
                    <td className="px-4 py-3">
                      <Sparkline
                        points={r.spark}
                        color={r.crit ? "#ff6f7a" : r.err > 1 ? "#f5c54b" : "#3ee0a5"}
                        width={96}
                        height={28}
                        fill={false}
                      />
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] text-white/70 hover:border-white/25">
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-white/5 px-6 py-3 text-xs text-white/55">
            <span className="font-mono">Showing 8 of 42</span>
            <div className="flex items-center gap-1">
              <button className="rounded-md border border-white/10 px-2 py-1 font-mono text-white/70 hover:border-white/25">Prev</button>
              <button className="rounded-md bg-white/10 px-2 py-1 font-mono text-white">1</button>
              <button className="rounded-md border border-white/10 px-2 py-1 font-mono text-white/70 hover:border-white/25">2</button>
              <button className="rounded-md border border-white/10 px-2 py-1 font-mono text-white/70 hover:border-white/25">3</button>
              <button className="rounded-md border border-white/10 px-2 py-1 font-mono text-white/70 hover:border-white/25">Next</button>
            </div>
          </div>
        </section>

        {/* Recent alerts feed */}
        <section className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">Recent alerts</h3>
              <p className="mt-1 text-xs text-white/55">Unacknowledged events across all services.</p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#ff6f7a]/30 bg-[#ff6f7a]/10 px-3 py-1 text-[#ff6f7a]">
                2 critical
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#f5c54b]/30 bg-[#f5c54b]/10 px-3 py-1 text-[#f5c54b]">
                2 warn
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">
                1 info
              </span>
            </div>
          </div>

          <ul className="mt-5 divide-y divide-white/5 rounded-xl border border-white/5 bg-black/20">
            {alerts.map((a, i) => {
              const sevMap = {
                critical: { bg: "bg-[#ff6f7a]/15", text: "text-[#ff6f7a]", border: "border-[#ff6f7a]/35", dot: "#ff6f7a" },
                warn: { bg: "bg-[#f5c54b]/15", text: "text-[#f5c54b]", border: "border-[#f5c54b]/35", dot: "#f5c54b" },
                info: { bg: "bg-[#58a6ff]/15", text: "text-[#58a6ff]", border: "border-[#58a6ff]/35", dot: "#58a6ff" },
              }
              const s = sevMap[a.sev]
              return (
                <li key={i} className="flex flex-wrap items-center gap-4 px-4 py-4">
                  <span className={`inline-flex items-center gap-1.5 rounded-full border ${s.border} ${s.bg} px-2.5 py-1 font-mono text-[11px] font-semibold uppercase ${s.text}`}>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.dot }} />
                    {a.sev}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{a.title}</p>
                    <p className="mt-0.5 truncate font-mono text-[11px] text-white/55">
                      {a.svc} · {a.ts} · {a.ago} ago
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-white/80 hover:border-white/25">
                      View runbook
                    </button>
                    <button className="inline-flex items-center gap-1.5 rounded-md bg-[#3ee0a5] px-2.5 py-1.5 text-xs font-semibold text-[#050814] hover:opacity-90">
                      <Icon name="check" className="h-3.5 w-3.5" />
                      Acknowledge
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="mt-4 flex justify-end">
            <a href="#" className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/80 hover:border-white/25">
              Open alerts inbox
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-8 border-t border-white/5">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span className="text-[#3ee0a5]"><Logo /></span>
            <span>© 2026 ServerCompass · Infrastructure monitoring for humans</span>
          </div>
          <div className="flex items-center gap-4 font-mono">
            <span>v4.12.0</span>
            <a href="#" className="hover:text-white">Status</a>
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#" className="hover:text-white">Changelog</a>
            <a href="#" className="hover:text-white">servercompass.app</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
