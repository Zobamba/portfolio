import { aboutPage } from '@/src/data/about-page'
import { aboutFeatures } from '@/src/data/about-features'
import FeatureItem from '@/src/components/sections/about/about-intro/feature-item/feature-item'

const AboutIntro = () => {
  return (
    <div>
      <div className="flex animate-reveal items-center gap-2 text-sm font-medium text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {aboutPage.eyebrow}
      </div>

      <h1 className="mt-3 animate-reveal text-center text-4xl font-bold leading-tight text-foreground [animation-delay:100ms] sm:text-left sm:text-3xl">
        {aboutPage.headingLine1}
        <br />
        <span className="text-primary">
          {aboutPage.headingLine2}
        </span>
      </h1>

      <p className="mt-4 max-w-xl animate-reveal text-center text-muted-foreground [animation-delay:200ms] sm:pr-12 sm:text-left">
        {aboutPage.paragraph}
      </p>

      <div className="mt-8 grid animate-reveal grid-cols-2 justify-items-center gap-6 text-center [animation-delay:300ms] sm:justify-items-start sm:text-left xl:w-[650px] xl:grid-cols-4">
        {aboutFeatures.map((feature) => (
          <FeatureItem key={feature.title} feature={feature} />
        ))}
      </div>
    </div>
  )
}

export default AboutIntro
