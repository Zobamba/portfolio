import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { technicalProficiency } from '@/src/data/technical-proficiency'
import { skillLevels } from '@/src/data/skill-levels'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'
import SkillProficiencyItem from '@/src/components/sections/skills/technical-proficiency-card/skill-proficiency-item/skill-proficiency-item'
import { cn, hexToRgba } from '@/src/lib/utils'

const TechnicalProficiencyCard = () => {
  return (
    <Card className="p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <CardHeader
          icon={HiOutlinePencilSquare}
          title="Technical Proficiency"
          subtitle="My proficiency level in key technologies"
        />

        <div className="flex flex-wrap items-center gap-3">
          {Object.values(skillLevels).map((level) => (
            <div
              key={level.label}
              className="flex items-center gap-1.5 text-xs text-muted-foreground"
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: level.dotColor }} />
              {level.label}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-y-5 sm:grid-cols-2 sm:divide-x sm:divide-border">
        <div className="flex flex-col gap-5 sm:pr-8">
          {technicalProficiency.slice(0, 5).map((skill, index) => (
            <div key={skill.name} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-border bg-deep">
                <span className="relative flex h-5 w-5 items-center justify-center">
                  {skill.iconBgColor && (
                    <span
                      className="absolute inset-0 rounded-[3px]"
                      style={{ backgroundColor: hexToRgba(skill.iconBgColor, 0.9) }}
                    />
                  )}
                  <skill.icon className={cn('relative', skill.colorClass)} size={20} />
                </span>
              </span>
              <SkillProficiencyItem
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                level={skill.level}
                delay={index * 100}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 sm:pl-8">
          {technicalProficiency.slice(5).map((skill, index) => (
            <div key={skill.name} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-border bg-deep">
                <span className="relative flex h-5 w-5 items-center justify-center">
                  {skill.iconBgColor && (
                    <span
                      className="absolute inset-0 rounded-[3px]"
                      style={{ backgroundColor: hexToRgba(skill.iconBgColor, 0.9) }}
                    />
                  )}
                  <skill.icon className={cn('relative', skill.colorClass)} size={20} />
                </span>
              </span>
              <SkillProficiencyItem
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                level={skill.level}
                delay={index * 100}
              />
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default TechnicalProficiencyCard
