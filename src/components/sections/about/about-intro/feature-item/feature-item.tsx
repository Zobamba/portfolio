import type { AboutFeature } from '@/src/data/about-features'

interface FeatureItemProps {
  feature: AboutFeature
}

const FeatureItem = ({ feature }: FeatureItemProps) => {
  const Icon = feature.icon

  return (
    <div className="flex flex-col items-center sm:items-start">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted text-primary">
        <Icon size={20} />
      </span>
      <p className="mt-3 text-sm font-semibold text-foreground">{feature.title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
    </div>
  )
}

export default FeatureItem
