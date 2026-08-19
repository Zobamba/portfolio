import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { toolsTechnologies } from '@/src/data/tools-technologies'
import { cn, hexToRgba } from '@/src/lib/utils'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'

const ToolsTechnologies = () => {
  return (
    <Card className="p-5">
      <CardHeader
        icon={HiOutlineSquares2X2}
        title="Tools & Technologies"
        subtitle="A snapshot of the tools and platforms I use"
      />

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-10">
        {toolsTechnologies.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col items-center gap-2 rounded-lg border border-border p-3 text-center"
          >
            <span className="relative flex h-8 w-8 items-center justify-center">
              {tool.iconBgColor && (
                <span
                  className="absolute inset-0 rounded-[4px]"
                  style={{ backgroundColor: hexToRgba(tool.iconBgColor, 0.9) }}
                />
              )}
              <tool.icon className={cn('relative', tool.colorClass)} size={24} />
            </span>
            <span className="text-xs text-muted-foreground">{tool.name}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default ToolsTechnologies
