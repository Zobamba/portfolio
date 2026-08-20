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

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

// Keep the Skills page's own blue/cyan/purple/green palette (not the homepage's wider rainbow set).
const segmentGradientPairs = [
  ['rgba(59, 130, 246, 0.28)', 'rgba(99, 102, 241, 0.18)'],
  ['rgba(34, 211, 238, 0.26)', 'rgba(56, 189, 248, 0.16)'],
  ['rgba(139, 92, 246, 0.26)', 'rgba(236, 72, 153, 0.16)'],
  ['rgba(74, 222, 128, 0.24)', 'rgba(45, 212, 191, 0.16)'],
]

const wideWidths = ['w-16', 'w-20', 'w-24', 'w-28']
const mediumWidths = ['w-10', 'w-12', 'w-16', 'w-20']
const narrowWidths = ['w-4', 'w-6', 'w-8', 'w-10']

const widthPoolFor = (segmentCount: number) => {
  if (segmentCount <= 2) return wideWidths
  if (segmentCount <= 4) return mediumWidths
  return narrowWidths
}

const segmentCountCycle = [5, 3, 2, 4, 1, 3]
const lineNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12]
const lineIndents = ['', 'ml-3', '', 'ml-6', '', 'ml-3', '', '', 'ml-3', '']

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

// TypeScript, React, PostgreSQL sit to the left of the panel; Node.js and Tailwind sit to the right.
const SkillsHeroGraphic = () => {
  return (
    <div
      className="relative mx-auto hidden md:block md:w-[420px] xl:w-[460px]"
      style={{ perspective: '1400px' }}
    >
      <GlowDotGrid className="-inset-10" />

      <div
        className="pointer-events-none absolute right-0 top-1/2 h-44 w-32 -translate-y-1/2 translate-x-1/3 rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(37, 99, 235, 0.42), transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-40 w-28 -translate-x-1/3 -translate-y-1/2 rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(37, 99, 235, 0.24), transparent 70%)' }}
      />

      <div
        className="relative aspect-[16/11] rounded-2xl border"
        style={{
          transform: 'rotateY(-30deg) rotateX(2deg)',
          borderColor: 'hsl(var(--primary) / 0.5)',
          boxShadow: '0 0 24px 2px hsl(var(--primary) / 0.35), inset 0 0 30px hsl(var(--primary) / 0.08)',
          background: 'linear-gradient(160deg, hsl(var(--card-elevated)) 0%, hsl(var(--background)) 100%)',
        }}
      >
        <div className="flex h-full w-full overflow-hidden rounded-[15px]">
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

            <div className="flex flex-1 flex-col justify-evenly py-2 blur-[0.5px]">
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

      <FloatingTechBadge
        icon={heroFloatingTech[2].icon}
        name={heroFloatingTech[2].name}
        colorClass={heroFloatingTech[2].colorClass}
        color={heroFloatingTech[2].color}
        iconBgColor={heroFloatingTech[2].iconBgColor}
        positionClassName="-top-6 left-16"
        connectorSide="right"
      />
      <FloatingTechBadge
        icon={heroFloatingTech[0].icon}
        name={heroFloatingTech[0].name}
        colorClass={heroFloatingTech[0].colorClass}
        color={heroFloatingTech[0].color}
        iconBgColor={heroFloatingTech[0].iconBgColor}
        positionClassName="top-[38%] -left-10"
        connectorSide="right"
      />
      <FloatingTechBadge
        icon={heroFloatingTech[4].icon}
        name={heroFloatingTech[4].name}
        colorClass={heroFloatingTech[4].colorClass}
        color={heroFloatingTech[4].color}
        iconBgColor={heroFloatingTech[4].iconBgColor}
        positionClassName="-bottom-4 -left-2"
        connectorSide="right"
      />
      <FloatingTechBadge
        icon={heroFloatingTech[1].icon}
        name={heroFloatingTech[1].name}
        colorClass={heroFloatingTech[1].colorClass}
        color={heroFloatingTech[1].color}
        iconBgColor={heroFloatingTech[1].iconBgColor}
        positionClassName="top-6 -right-10"
        connectorSide="left"
      />
      <FloatingTechBadge
        icon={heroFloatingTech[3].icon}
        name={heroFloatingTech[3].name}
        colorClass={heroFloatingTech[3].colorClass}
        color={heroFloatingTech[3].color}
        iconBgColor={heroFloatingTech[3].iconBgColor}
        positionClassName="bottom-8 -right-10"
        connectorSide="left"
      />
    </div>
  )
}

export default SkillsHeroGraphic
