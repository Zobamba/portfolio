import Card from '@/src/components/ui/card/card'
import { myContributionSection, contributionItems } from '@/src/data/showchats-case-study'

const ShowchatsContributionCard = () => {
  return (
    <Card className="h-full p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <myContributionSection.icon size={17} />
        </span>
        <div>
          <h2 className="font-semibold text-foreground">{myContributionSection.title}</h2>
          <p className="text-xs text-muted-foreground">{myContributionSection.description}</p>
        </div>
      </div>

      <ul className="mt-4 flex flex-col gap-4">
        {contributionItems.map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <item.icon size={15} />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default ShowchatsContributionCard
