import { projectsPage, projectsHeroStats } from '@/src/data/projects-page'
import Container from '@/src/components/ui/container/container'
import HeroStatItem from '@/src/components/sections/projects/projects-hero/hero-stat-item/hero-stat-item'
import ProjectsHeroGraphic from '@/src/components/sections/projects/projects-hero/projects-hero-graphic/projects-hero-graphic'

const ProjectsHero = () => {
  return (
    <Container className="grid items-start gap-12 md:pb-16 pt-8 sm:pb-12 sm:pt-12 lg:grid-cols-2">
      <div>
        <div className="flex animate-reveal items-center gap-2 text-sm font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {projectsPage.eyebrow}
        </div>

        <h1 className="mt-3 animate-reveal text-center text-4xl font-bold leading-tight text-foreground [animation-delay:100ms] sm:text-left sm:text-5xl">
          {projectsPage.headingLine1}{' '}
          <span className="text-primary">
            {projectsPage.headingHighlight}
          </span>
        </h1>

        <p className="mt-6 max-w-lg animate-reveal text-center text-base text-muted-foreground [animation-delay:200ms] sm:text-left sm:text-lg">
          {projectsPage.paragraph}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-4 animate-reveal [animation-delay:300ms] sm:justify-start sm:gap-6">
          {projectsHeroStats.map((stat) => (
            <HeroStatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>

      <div className="md:mt-14">
        <ProjectsHeroGraphic />
      </div>
    </Container>
  )
}

export default ProjectsHero
