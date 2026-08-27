import { skillsPage, skillsHeroStats } from '@/src/data/skills-page'
import Container from '@/src/components/ui/container/container'
import HeroStatItem from '@/src/components/sections/skills/skills-hero/hero-stat-item/hero-stat-item'
import SkillsHeroGraphic from '@/src/components/sections/skills/skills-hero/skills-hero-graphic/skills-hero-graphic'

const SkillsHero = () => {
  return (
    <Container className="grid items-start gap-12 md:pb-16 pt-8 sm:pb-12 sm:pt-12 lg:grid-cols-2">
      <div>
        <div className="flex animate-reveal items-center gap-2 text-sm font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {skillsPage.eyebrow}
        </div>

        <h1 className="mt-3 animate-reveal text-center text-4xl font-bold leading-tight text-foreground [animation-delay:100ms] sm:text-left sm:text-4xl">
          {skillsPage.headingLine1}{' '}
          <span className="text-primary">
            {skillsPage.headingHighlight}
          </span>{' '}
          {skillsPage.headingLine2}
        </h1>

        <p className="mt-6 max-w-xl animate-reveal text-center text-base text-muted-foreground [animation-delay:200ms] sm:pr-12 sm:text-left sm:text-md">
          {skillsPage.paragraph}
        </p>
        
        <div className="mt-4 flex flex-wrap justify-center gap-4 animate-reveal [animation-delay:300ms] sm:justify-start sm:gap-6">
          {skillsHeroStats.map((stat) => (
            <HeroStatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>

      <div className="md:mt-14">
        <SkillsHeroGraphic />
      </div>
    </Container>
  )
}

export default SkillsHero
