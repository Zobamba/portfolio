import { FiStar } from 'react-icons/fi'
import { values } from '@/src/data/values'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'
import ValueItem from '@/src/components/sections/about/values-card/value-item/value-item'

const ValuesCard = () => {
  return (
    <Card className="border-none bg-transparent p-5 pr-0">
      <CardHeader
        icon={FiStar}
        title="What Drives Me"
        subtitle="The principles and values that guide my work."
        iconColorClass="text-secondary"
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {values.map((value, index) => (
          <ValueItem
            key={value.title}
            title={value.title}
            description={value.description}
            colorClass={value.colorClass}
            delay={index * 60}
          >
            <value.icon size={16} />
          </ValueItem>
        ))}
      </div>
    </Card>
  )
}

export default ValuesCard
