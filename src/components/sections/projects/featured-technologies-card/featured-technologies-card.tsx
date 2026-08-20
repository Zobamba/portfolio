import { HiOutlineCodeBracket } from 'react-icons/hi2'
import { featuredTechnologies } from '@/src/data/featured-technologies'
import { cn, hexToRgba } from '@/src/lib/utils'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'

const FeaturedTechnologiesCard = () => {
  return (
    <Card className="p-4">
      <CardHeader icon={HiOutlineCodeBracket} title="Featured Technologies" />

      <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-6 sm:gap-2">
        {featuredTechnologies.map((tech) => (
          <span
            key={tech.name}
            title={tech.name}
            className="flex h-14 w-14 flex-col items-center justify-center rounded-md border border-border bg-default sm:h-16 sm:w-16"
          >
            <span className="relative flex h-5 w-5 items-center justify-center sm:h-6 sm:w-6">
              {tech.iconBgColor && (
                <span
                  className="absolute inset-[2px] rounded-[4px]"
                  style={{ backgroundColor: hexToRgba(tech.iconBgColor, 0.85) }}
                />
              )}
              <tech.icon className={cn('relative h-4 w-4 sm:h-5 sm:w-5', tech.colorClass)} />
            </span>
            <span className="text-[9px] text-muted-foreground sm:text-[10px]">{tech.name}</span>
          </span>
        ))}
      </div>
    </Card>
  )
}

export default FeaturedTechnologiesCard
