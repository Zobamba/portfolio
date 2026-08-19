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

// Muted, low-contrast two-color pairs — dimmer than flat brand colors so the
// row reads as a soft skeleton-loader rather than syntax-highlighted code.
const segmentGradientPairs = [
  ['rgba(59, 130, 246, 0.24)', 'rgba(99, 102, 241, 0.16)'],
  ['rgba(34, 211, 238, 0.22)', 'rgba(56, 189, 248, 0.14)'],
  ['rgba(139, 92, 246, 0.22)', 'rgba(236, 72, 153, 0.14)'],
  ['rgba(74, 222, 128, 0.20)', 'rgba(45, 212, 191, 0.14)'],
  ['rgba(250, 204, 21, 0.18)', 'rgba(251, 146, 60, 0.14)'],
  ['rgba(248, 113, 113, 0.18)', 'rgba(236, 72, 153, 0.12)'],
  ['rgba(96, 165, 250, 0.20)', 'rgba(45, 212, 191, 0.14)'],
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
    const [from, to] = segmentGradientPairs[Math.floor(seededRandom(seed + 100) * segmentGradientPairs.length)]
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
    <div
      className="relative mx-auto hidden md:block md:w-[420px] xl:w-[480px]"
      style={{ perspective: '1400px' }}
    >
      <GlowDotGrid className="-inset-10" />

      {/* directional glow, sourced from the midpoint of each edge, right strongest — breathes very slowly */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-44 w-32 -translate-y-1/2 translate-x-1/3 animate-breathe rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(37, 99, 235, 0.46), transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-40 w-28 -translate-x-1/3 -translate-y-1/2 animate-breathe rounded-full blur-2xl [animation-delay:1s]"
        style={{ background: 'radial-gradient(circle, rgba(37, 99, 235, 0.27), transparent 70%)' }}
      />
      {/* diagonal streaks continuing the left glow up to the top-left corner, and the right glow down to the bottom-right corner */}
      <div
        className="pointer-events-none absolute h-14 w-48 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full blur-2xl"
        style={{
          left: '20%',
          top: '20%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25), transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute h-14 w-48 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full blur-2xl"
        style={{
          left: '80%',
          top: '80%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%)',
        }}
      />
      {/* slight top/bottom fill, much fainter than the diagonal streaks */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-24 w-36 -translate-x-1/2 -translate-y-1/3 rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12), transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[42%] h-20 w-32 -translate-x-1/2 translate-y-1/3 rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08), transparent 70%)' }}
      />

      <div className="animate-float">
        <div
          className="relative aspect-[16/10] rounded-2xl p-px"
          style={{
            transform: 'rotateY(-18deg) rotateX(1.5deg)',
            background: 'linear-gradient(-45deg, rgba(255, 255, 255, 0.5), rgba(59, 130, 246, 0.5))',
            boxShadow: '0 0 10px 0 rgba(59, 130, 246, 0.25)',
          }}
        >
          <div className="flex h-full w-full overflow-hidden rounded-[15px] bg-card-elevated">
            <div className="flex w-9 shrink-0 flex-col items-center gap-4 border-r border-border/60 bg-background/60 py-3">
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

              <div className="flex flex-1 flex-col justify-evenly py-5 blur-[0.5px]">
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
          floating
          entranceDelay={index * 80}
        />
      ))}
    </div>
  )
}

export default HeroGraphic
