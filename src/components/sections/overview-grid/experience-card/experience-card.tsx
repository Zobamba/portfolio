import { FiBriefcase } from 'react-icons/fi'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'
import ExperienceItem from '@/src/components/sections/overview-grid/experience-card/experience-item/experience-item'
import { experience } from '@/src/data/experience'

const ExperienceCard = () => {
  return (
    <Card className="h-full rounded-none border-0 p-4">
      <CardHeader icon={FiBriefcase} title="Experience" />
      <div className="space-y-3">
        {experience.map((item, index) => (
          <ExperienceItem key={item.role} item={item} isLast={index === experience.length - 1} />
        ))}
      </div>
    </Card>
  )
}

export default ExperienceCard
