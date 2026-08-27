import { FiFile, FiSearch, FiGitBranch, FiSettings } from 'react-icons/fi'
import { heroFloatingTech } from '@/src/data/tech-stack'
import FloatingTechBadge from '@/src/components/sections/hero/floating-tech-badge/floating-tech-badge'
import GlowDotGrid from '@/src/components/ui/glow-dot-grid/glow-dot-grid'

interface CodeSegment {
  width: string
  gradient: string
}

interface CodeLine {
  number: number
  indent?: string
  segments: CodeSegment[]
}

// Deterministic pseudo-random so the server and client render the exact same
// "random-looking" pattern (avoids hydration mismatches from Math.random()).
const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

// Restrained tone pool for the code-line skeleton: mostly graphite, with the
// teal/amber accents appearing only occasionally — not a rainbow of hues.
const segmentTonePairs = [
  ['hsl(var(--foreground) / 0.18)', 'hsl(var(--foreground) / 0.08)'],
  ['hsl(var(--foreground) / 0.18)', 'hsl(var(--foreground) / 0.08)'],
  ['hsl(var(--foreground) / 0.18)', 'hsl(var(--foreground) / 0.08)'],
  ['hsl(var(--primary) / 0.4)', 'hsl(var(--primary) / 0.18)'],
  ['hsl(var(--secondary) / 0.4)', 'hsl(var(--secondary) / 0.18)'],
]

// Wider widths for sparser rows so a few segments can stretch well to the
// right; narrower widths for busy rows so many segments still fit cleanly.
const wideWidths = ['w-24', 'w-28', 'w-32', 'w-40', 'w-48', 'w-56']
const mediumWidths = ['w-12', 'w-16', 'w-20', 'w-24', 'w-28']
const narrowWidths = ['w-4', 'w-6', 'w-8', 'w-10', 'w-12']

const widthPoolFor = (segmentCount: number) => {
  if (segmentCount <= 2) return wideWidths
  if (segmentCount <= 4) return mediumWidths
  return narrowWidths
}

// Segment count per row cycles through this exact sequence, repeating.
const segmentCountCycle = [7, 5, 3, 6, 2, 1, 4]
const lineNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 15, 27, 28, 41, 56]
const lineIndents = ['', 'ml-3', '', 'ml-6', '', 'ml-3', '', '', 'ml-3', '', 'ml-6', '', 'ml-3', '', '']

const codeLines: CodeLine[] = lineNumbers.map((number, rowIndex) => {
  const segmentCount = segmentCountCycle[rowIndex % segmentCountCycle.length]
  const widthPool = widthPoolFor(segmentCount)
  const segments: CodeSegment[] = Array.from({ length: segmentCount }, (_, segIndex) => {
    const seed = rowIndex * 31 + segIndex * 7
    const [from, to] = segmentTonePairs[Math.floor(seededRandom(seed + 100) * segmentTonePairs.length)]
    return {
      width: widthPool[Math.floor(seededRandom(seed) * widthPool.length)],
      gradient: `linear-gradient(90deg, ${from}, ${to})`,
    }
  })
  return { number, indent: lineIndents[rowIndex], segments }
})

const badgeLayout: Array<{
  positionClassName: string
  connectorSide: 'left' | 'right' | 'top' | 'bottom'
}> = [
  { positionClassName: '-top-7 left-[25%]', connectorSide: 'bottom' }, // React
  { positionClassName: 'top-6 -right-10', connectorSide: 'left' }, // Node.js
  { positionClassName: 'top-[42%] -left-10', connectorSide: 'right' }, // TypeScript
  { positionClassName: 'top-[64%] -right-11', connectorSide: 'left' }, // Tailwind CSS
  { positionClassName: '-bottom-7 left-[42%]', connectorSide: 'top' }, // PostgreSQL
]

const HeroGraphic = () => {
  return (
    <div className="relative mx-auto hidden md:block md:w-[420px] xl:w-[480px]">
      <GlowDotGrid className="-inset-10" />

      <div
        className="relative aspect-[16/10] rounded-2xl border border-border bg-card shadow-elevated"
        style={{ transform: 'rotateY(-4deg)' }}
      >
        <div className="flex h-full w-full overflow-hidden rounded-2xl">
          <div className="flex w-9 shrink-0 flex-col items-center gap-4 border-r border-border bg-background/60 py-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-primary">
              <FiFile size={14} />
            </span>
            <FiSearch className="text-muted-foreground/50" size={15} />
            <FiGitBranch className="text-muted-foreground/50" size={15} />
            <FiSettings className="mt-auto text-muted-foreground/50" size={15} />
          </div>

          <div className="flex flex-1 flex-col p-2.5">
            <div className="mb-2.5 flex shrink-0 items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-secondary/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
            </div>

            <div className="flex flex-1 flex-col justify-evenly py-5">
              {codeLines.map((line) => (
                <div key={line.number} className="flex items-center gap-4">
                  <span className="w-5 shrink-0 text-right text-[8px] leading-none text-muted-foreground/50">
                    {line.number}
                  </span>
                  <div className={`flex flex-1 flex-wrap items-center gap-1 ${line.indent}`}>
                    {line.segments.map((segment, index) => (
                      <span
                        key={index}
                        className={`h-[3px] rounded-[1px] ${segment.width}`}
                        style={{ backgroundImage: segment.gradient }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {heroFloatingTech.map((tech, index) => (
        <FloatingTechBadge
          key={tech.name}
          icon={tech.icon}
          name={tech.name}
          colorClass={tech.colorClass}
          color={tech.color}
          positionClassName={badgeLayout[index].positionClassName}
          connectorSide={badgeLayout[index].connectorSide}
          iconBgColor={tech.iconBgColor}
          entranceDelay={index * 80}
        />
      ))}
    </div>
  )
}

export default HeroGraphic
