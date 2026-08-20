import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { skillsBreakdownSegments, totalTechnologies } from '@/src/data/skills-breakdown'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'

const buildConicGradient = () => {
  let cursor = 0
  const stops = skillsBreakdownSegments.map((segment) => {
    const start = cursor
    cursor += (segment.percentage / 100) * 360
    return `${segment.color} ${start}deg ${cursor}deg`
  })
  return `conic-gradient(${stops.join(', ')})`
}

const SkillsBreakdownCard = () => {
  return (
    <Card className="p-5">
      <CardHeader icon={HiOutlinePencilSquare} title="Skills Breakdown" />

      <div className="flex items-center gap-6">
        <div
          className="relative h-28 w-28 shrink-0 rounded-full"
          style={{ backgroundImage: buildConicGradient() }}
        >
          <div className="absolute inset-[12px] flex flex-col items-center justify-center rounded-full bg-card text-center">
            <p className="text-lg font-bold text-foreground">{totalTechnologies}</p>
            <p className="text-[10px] leading-tight text-muted-foreground">Technologies</p>
          </div>
        </div>

        <ul className="space-y-2">
          {skillsBreakdownSegments.map((segment) => (
            <li key={segment.label} className="flex items-center gap-2 text-sm">
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: segment.color }} />
              <span className="text-muted-foreground">{segment.label}</span>
              <span className="text-foreground">{segment.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

export default SkillsBreakdownCard
