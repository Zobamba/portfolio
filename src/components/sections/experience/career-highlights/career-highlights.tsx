import { HiOutlineTrophy } from 'react-icons/hi2'
import { careerHighlights } from '@/src/data/career-highlights'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'
import CareerHighlightItem from '@/src/components/sections/experience/career-highlights/career-highlight-item/career-highlight-item'

const CareerHighlights = () => {
  return (
    <Card className="p-5">
      <CardHeader icon={HiOutlineTrophy} title="Career Highlights" />

      <div className="grid grid-cols-2 gap-3">
        {careerHighlights.map((highlight) => (
          <CareerHighlightItem key={highlight.label} highlight={highlight} />
        ))}
      </div>
    </Card>
  )
}

export default CareerHighlights
