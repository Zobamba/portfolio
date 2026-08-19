import { FiBarChart2 } from 'react-icons/fi'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'
import ProgressBar from '@/src/components/ui/progress-bar/progress-bar'
import { skills } from '@/src/data/skills'

const SkillsOverviewCard = () => {
  return (
    <Card className="h-full rounded-none border-0 p-4">
      <CardHeader icon={FiBarChart2} title="Skills Overview" />
      <div className="space-y-3">
        {skills.map((skill) => (
          <ProgressBar key={skill.label} label={skill.label} percentage={skill.percentage} />
        ))}
      </div>
    </Card>
  )
}

export default SkillsOverviewCard
