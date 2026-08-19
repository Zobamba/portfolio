import Card from '@/src/components/ui/card/card'
import { problem } from '@/src/data/onassify-case-study'

const OnassifyProblemCard = () => {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <problem.icon size={17} />
        </span>
        <h2 className="font-semibold text-foreground">{problem.title}</h2>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">{problem.intro}</p>
      <ul className="mt-3 flex flex-col gap-2">
        {problem.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default OnassifyProblemCard
