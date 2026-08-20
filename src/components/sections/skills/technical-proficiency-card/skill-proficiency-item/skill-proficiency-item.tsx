'use client'

import { skillLevels, type SkillLevel } from '@/src/data/skill-levels'
import { useInView } from '@/src/lib/use-in-view'
import CountUp from '@/src/components/ui/count-up/count-up'

interface SkillProficiencyItemProps {
  name: string
  percentage: number
  level: SkillLevel
  delay?: number
}

const SkillProficiencyItem = ({ name, percentage, level: levelKey, delay = 0 }: SkillProficiencyItemProps) => {
  const level = skillLevels[levelKey]
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className="w-full">
      <div className="flex items-center gap-2.5">
        <span className="flex-1 text-sm text-foreground">{name}</span>
        <span className="text-sm text-subtle">
          {inView ? <CountUp value={`${percentage}%`} duration={1000} /> : '0%'}
        </span>
      </div>

      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full transition-[width] duration-1000 ease-signature"
          style={{
            width: inView ? `${percentage}%` : '0%',
            backgroundImage: level.gradient,
            transitionDelay: inView ? `${delay}ms` : '0ms',
          }}
        />
      </div>
    </div>
  )
}

export default SkillProficiencyItem
