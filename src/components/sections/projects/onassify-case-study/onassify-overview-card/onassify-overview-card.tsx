import Card from '@/src/components/ui/card/card'
import { overview } from '@/src/data/onassify-case-study'

const OnassifyOverviewCard = () => {
  return (
    <Card className="p-5 border-none bg-inherit">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <overview.icon size={17} />
        </span>
        <h2 className="font-semibold text-foreground">{overview.title}</h2>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{overview.description}</p>
    </Card>
  )
}

export default OnassifyOverviewCard
