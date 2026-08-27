import { FiArrowUpRight, FiCheckCircle, FiGithub } from 'react-icons/fi'
import Container from '@/src/components/ui/container/container'
import Badge from '@/src/components/ui/badge/badge'
import Button from '@/src/components/ui/button/button'
import ShowchatsHeroGraphic from '@/src/components/sections/projects/showchats-case-study/showchats-hero-graphic/showchats-hero-graphic'
import { hero } from '@/src/data/showchats-case-study'

const ShowchatsHero = () => {
  return (
    <Container className="grid items-start gap-12 pb-16 pt-8 sm:pb-12 sm:pt-12 lg:grid-cols-2">
      <div>
        <span className="inline-flex animate-reveal items-center rounded-full bg-amber-light px-2.5 py-1 text-xs font-semibold text-secondary">
          Backend Engineering
        </span>

        <h1 className="mt-3 animate-reveal text-center text-4xl font-bold text-foreground [animation-delay:100ms] sm:text-left sm:text-5xl">
          {hero.title}
        </h1>
        <p className="mt-1 animate-reveal text-center text-lg text-muted-foreground [animation-delay:100ms] sm:text-left">
          {hero.subtitle}
        </p>

        <p className="mt-4 max-w-lg animate-reveal text-center text-muted-foreground [animation-delay:200ms] sm:text-left">
          {hero.description}
        </p>

        <div className="mt-5 flex animate-reveal flex-wrap gap-2 [animation-delay:300ms]">
          {hero.stack.map((tech) => (
            <Badge key={tech} variant="tag">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-5 flex animate-reveal flex-wrap gap-2 [animation-delay:350ms]">
          {hero.statusPills.map((status) => (
            <span
              key={status}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-primary"
            >
              <FiCheckCircle size={12} />
              {status}
            </span>
          ))}
        </div>

        <div className="mt-6 flex animate-reveal flex-wrap items-center gap-3 [animation-delay:400ms]">
          <Button
            href={hero.sourceUrl}
            className="inline-flex items-center gap-2"
          >
            <FiGithub size={14} />
            View Source Code
            <FiArrowUpRight size={14} />
          </Button>
          <Button href="#services" variant="outline" className="inline-flex items-center gap-2">
            View Backend Services
          </Button>
        </div>
      </div>

      <div className="md:mt-14">
        <ShowchatsHeroGraphic />
      </div>
    </Container>
  )
}

export default ShowchatsHero
