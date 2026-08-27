import { FiCheck } from 'react-icons/fi'
import Card from '@/src/components/ui/card/card'
import { technicalChallengesSection, engineeringChallenges } from '@/src/data/onassify-case-study'

const OnassifyTechnicalChallengesCard = () => {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <technicalChallengesSection.icon size={17} />
        </span>
        <h2 className="font-semibold text-foreground">{technicalChallengesSection.title}</h2>
      </div>
      <ul className="mt-3 flex flex-col gap-2.5">
        {engineeringChallenges.map((challenge) => (
          <li
            key={challenge.title}
            className="flex items-start gap-2 mb-2 py-1 text-sm text-muted-foreground border-b border-border"
          >
            <FiCheck className="mt-0.5 shrink-0 text-primary" size={15} />
            {challenge.title}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default OnassifyTechnicalChallengesCard
