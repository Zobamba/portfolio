import { FiLock, FiPlay } from 'react-icons/fi'
import Container from '@/src/components/ui/container/container'
import Badge from '@/src/components/ui/badge/badge'
import Button from '@/src/components/ui/button/button'
import ProductShowcaseHero from '@/src/components/sections/projects/onassify-case-study/product-showcase-hero/product-showcase-hero'
import { hero } from '@/src/data/onassify-case-study'

const OnassifyHero = () => {
  return (
    <Container className="grid items-start gap-12 pb-16 pt-8 sm:pb-12 sm:pt-12 lg:grid-cols-2">
      <div>
        <div className="flex animate-reveal items-center gap-2 text-sm font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {hero.badgeLabel}
        </div>

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

        <div className="mt-6 flex animate-reveal flex-wrap items-center gap-3 [animation-delay:400ms]">
          <Button href="#demo" className="inline-flex items-center gap-2">
            <FiPlay size={14} />
            Watch 60s Demo
          </Button>
          <span className="inline-flex items-center gap-2 rounded border border-border px-4 py-2.5 text-sm text-muted-foreground">
            <FiLock size={14} />
            Private Source
          </span>
        </div>
      </div>

      <div className="md:mt-14">
        <ProductShowcaseHero />
      </div>
    </Container>
  )
}

export default OnassifyHero
