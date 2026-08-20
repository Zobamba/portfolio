import { FiBriefcase, FiArrowRight } from 'react-icons/fi'
import { journey } from '@/src/data/journey'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'
import Button from '@/src/components/ui/button/button'
import JourneyItem from '@/src/components/sections/about/journey-card/journey-item/journey-item'

const JourneyCard = () => {
  return (
    <Card className="border-none bg-transparent p-5">
      <CardHeader
        icon={FiBriefcase}
        title="My Journey"
        subtitle="A quick look at my professional journey so far."
      />

      <div className="space-y-6">
        {journey.map((item, index) => (
          <JourneyItem key={item.role} item={item} isLast={index === journey.length - 1} />
        ))}
      </div>

      <Button href="/experience" variant="outline" size="sm" className="mt-6">
        View Full Experience
        <FiArrowRight size={14} />
      </Button>
    </Card>
  )
}

export default JourneyCard
