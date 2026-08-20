import { HiOutlineBriefcase } from 'react-icons/hi2'
import { workExperience } from '@/src/data/work-experience'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'
import ExperienceItem from '@/src/components/sections/experience/professional-experience/experience-item/experience-item'

const ProfessionalExperience = () => {
  return (
    <Card className="p-5">
      <CardHeader icon={HiOutlineBriefcase} title="Professional Experience" />

      <div className="flex flex-col">
        {workExperience.map((item, index) => (
          <ExperienceItem key={item.company} item={item} isLast={index === workExperience.length - 1} />
        ))}
      </div>
    </Card>
  )
}

export default ProfessionalExperience
