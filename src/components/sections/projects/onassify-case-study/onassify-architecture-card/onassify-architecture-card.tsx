import Card from '@/src/components/ui/card/card'
import ArchitectureDiagram from '@/src/components/sections/projects/onassify-case-study/architecture-diagram/architecture-diagram'
import { architectureSection } from '@/src/data/onassify-case-study'

const OnassifyArchitectureCard = () => {
  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <architectureSection.icon size={17} />
        </span>
        <h2 className="font-semibold text-foreground">{architectureSection.title}</h2>
      </div>
      <ArchitectureDiagram />
    </Card>
  )
}

export default OnassifyArchitectureCard
