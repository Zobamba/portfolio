import { HiOutlineCodeBracket } from 'react-icons/hi2'
import { featuredTechnologies } from '@/src/data/featured-technologies'
import { cn, hexToRgba } from '@/src/lib/utils'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'

const FeaturedTechnologiesCard = () => {
  return (
    <Card className="p-4">
      <CardHeader icon={HiOutlineCodeBracket} title="Featured Technologies" />

      <div className="grid grid-cols-6 gap-2">
        {featuredTechnologies.map((tech) => (
          <span
            key={tech.name}
            title={tech.name}
            className="flex flex-col h-16 w-16 items-center justify-center rounded-md border border-border bg-default"
          >
            <span className="relative flex h-6 w-6 items-center justify-center">
              {tech.iconBgColor && (
                <span
                  className="absolute inset-[2px] rounded-[4px]"
                  style={{ backgroundColor: hexToRgba(tech.iconBgColor, 0.85) }}
                />
              )}
              <tech.icon className={cn('relative', tech.colorClass)} size={20} />
            </span>
            <span className='text-[10px] text-muted-foreground'>{tech.name}</span>
          </span>
        ))}
      </div>
    </Card>
  )
}

export default FeaturedTechnologiesCard
