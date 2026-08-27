import { FiCheck } from 'react-icons/fi'
import Card from '@/src/components/ui/card/card'
import { solution } from '@/src/data/onassify-case-study'

const OnassifySolutionCard = () => {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <solution.icon size={17} />
        </span>
        <h2 className="font-semibold text-foreground">{solution.title}</h2>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">{solution.intro}</p>
      <ul className="mt-3 flex flex-col gap-2">
        {solution.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
            <FiCheck className="mt-0.5 shrink-0 text-primary" size={15} />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default OnassifySolutionCard
