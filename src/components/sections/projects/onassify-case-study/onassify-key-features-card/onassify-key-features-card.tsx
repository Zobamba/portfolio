import { FiCheck } from 'react-icons/fi'
import Card from '@/src/components/ui/card/card'
import { keyFeaturesSection, keyFeatures } from '@/src/data/onassify-case-study'

const OnassifyKeyFeaturesCard = () => {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <keyFeaturesSection.icon size={17} />
        </span>
        <h2 className="font-semibold text-foreground">{keyFeaturesSection.title}</h2>
      </div>
      <ul className="mt-3 flex flex-col gap-2">
        {keyFeatures.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
            <FiCheck className="mt-0.5 shrink-0 text-[#22C55E]" size={15} />
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default OnassifyKeyFeaturesCard
