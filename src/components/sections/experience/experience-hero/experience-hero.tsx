import { experiencePage, experienceHeroStats } from '@/src/data/experience-page'
import Container from '@/src/components/ui/container/container'
import HeroStatItem from '@/src/components/sections/experience/experience-hero/hero-stat-item/hero-stat-item'
import CareerJourneyGraphic from '@/src/components/sections/experience/experience-hero/career-journey-graphic/career-journey-graphic'

const ExperienceHero = () => {
  return (
    <Container className="grid items-start gap-12 md:pb-16 pt-8 sm:pb-12 sm:pt-12 lg:grid-cols-2">
      <div>
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {experiencePage.eyebrow}
        </div>

        <h1 className="mt-3 text-center text-4xl font-bold leading-tight text-foreground sm:text-left sm:text-5xl">
          {experiencePage.headingLine1}
          <br />
          <span className="bg-name-gradient bg-clip-text text-transparent">
            {experiencePage.headingHighlight}
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-center text-base text-muted-foreground sm:text-left sm:text-lg">
          {experiencePage.paragraph}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-4 animate-reveal [animation-delay:300ms] sm:justify-start sm:gap-6">
          {experienceHeroStats.map((stat) => (
            <HeroStatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>

      <div className="md:mt-14">
        <CareerJourneyGraphic />
      </div>
    </Container>
  )
}

export default ExperienceHero
