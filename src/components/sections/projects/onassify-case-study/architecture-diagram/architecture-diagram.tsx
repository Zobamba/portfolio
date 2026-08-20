type NodeColor = 'violet' | 'blue' | 'pink' | 'green' | 'amber' | 'cyan'

const colorMap: Record<NodeColor, { border: string; bg: string; shadow: string; glow: string }> = {
  violet: {
    border: 'rgba(139, 92, 246, 0.45)',
    bg: 'rgba(139, 92, 246, 0.06)',
    shadow: 'rgba(139, 92, 246, 0.2)',
    glow: 'rgba(139, 92, 246, 0.55)',
  },
  blue: {
    border: 'rgba(59, 130, 246, 0.45)',
    bg: 'rgba(59, 130, 246, 0.06)',
    shadow: 'rgba(59, 130, 246, 0.2)',
    glow: 'rgba(59, 130, 246, 0.55)',
  },
  pink: {
    border: 'rgba(236, 72, 153, 0.45)',
    bg: 'rgba(236, 72, 153, 0.06)',
    shadow: 'rgba(236, 72, 153, 0.2)',
    glow: 'rgba(236, 72, 153, 0.55)',
  },
  green: {
    border: 'rgba(34, 197, 94, 0.45)',
    bg: 'rgba(34, 197, 94, 0.06)',
    shadow: 'rgba(34, 197, 94, 0.2)',
    glow: 'rgba(34, 197, 94, 0.55)',
  },
  amber: {
    border: 'rgba(245, 158, 11, 0.45)',
    bg: 'rgba(245, 158, 11, 0.06)',
    shadow: 'rgba(245, 158, 11, 0.2)',
    glow: 'rgba(245, 158, 11, 0.55)',
  },
  cyan: {
    border: 'rgba(34, 211, 238, 0.45)',
    bg: 'rgba(34, 211, 238, 0.06)',
    shadow: 'rgba(34, 211, 238, 0.2)',
    glow: 'rgba(34, 211, 238, 0.55)',
  },
}

const Node = ({
  label,
  sublabel,
  color,
}: {
  label: string
  sublabel?: string
  color: NodeColor
}) => {
  const c = colorMap[color]
  return (
    <div
      className="rounded-lg border px-4 py-2.5 text-center"
      style={{
        borderColor: c.border,
        backgroundColor: c.bg,
        boxShadow: `0 0 0 1px ${c.shadow}, 0 0 10px ${c.shadow}`,
      }}
    >
      <p className="text-sm font-semibold text-foreground">{label}</p>
      {sublabel && <p className="text-xs text-muted-foreground">{sublabel}</p>}
    </div>
  )
}

const Connector = ({ className = '' }: { className?: string }) => (
  <div className={`mx-auto h-6 w-px bg-border ${className}`} />
)

const ArchitectureDiagram = () => (
  <div className="relative overflow-hidden rounded-xl border border-border p-6">
    <div
      className="pointer-events-none absolute -top-10 left-1/2 h-32 w-48 -translate-x-1/2 rounded-full blur-3xl"
      style={{ backgroundColor: colorMap.violet.glow, opacity: 0.14 }}
    />
    <div
      className="pointer-events-none absolute left-6 top-32 h-28 w-28 rounded-full blur-3xl"
      style={{ backgroundColor: colorMap.blue.glow, opacity: 0.14 }}
    />
    <div
      className="pointer-events-none absolute right-6 top-32 h-28 w-28 rounded-full blur-3xl"
      style={{ backgroundColor: colorMap.pink.glow, opacity: 0.14 }}
    />
    <div
      className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full blur-3xl"
      style={{ backgroundColor: colorMap.cyan.glow, opacity: 0.12 }}
    />

    <div className="relative flex flex-col items-center">
      <Node label="Onassify" color="violet" />
      <Connector />

      <div className="flex w-full max-w-md items-start justify-center gap-6">
        <div className="flex flex-1 flex-col items-center">
          <Node label="Admin App" sublabel="(Web)" color="blue" />
        </div>
        <div className="flex flex-1 flex-col items-center">
          <Node label="POS App" sublabel="(Web / Mobile)" color="pink" />
        </div>
      </div>

      <div className="relative h-6 w-full max-w-md">
        <div className="absolute left-1/4 top-0 h-3 w-px bg-border" />
        <div className="absolute right-1/4 top-0 h-3 w-px bg-border" />
        <div className="absolute left-1/4 right-1/4 top-3 h-px bg-border" />
        <div className="absolute left-1/2 top-3 h-3 w-px -translate-x-1/2 bg-border" />
      </div>

      <Node label="REST API" color="green" />
      <Connector />
      <Node label="Application Server" sublabel="(Rails)" color="amber" />
      <Connector />
      <Node label="MySQL Database" color="cyan" />
    </div>
  </div>
)

export default ArchitectureDiagram
