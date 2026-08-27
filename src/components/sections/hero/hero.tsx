import { FiArrowRight, FiMail } from 'react-icons/fi'
import Button from '@/src/components/ui/button/button'
import SocialLinks from '@/src/components/ui/social-links/social-links'
import HeroGraphic from '@/src/components/sections/hero/hero-graphic/hero-graphic'
import Container from '@/src/components/ui/container/container'

const Hero = () => {
  return (
    <Container className="grid items-center gap-12 pb-16 pt-8 sm:pb-12 sm:pt-12 lg:grid-cols-2">
      <div>
        <span className="inline-flex animate-reveal items-center gap-2 rounded border border-border bg-card px-4 py-1.5 text-sm text-foreground">
          👋 Hi, I&apos;m
        </span>

        <h1 className="mt-6 animate-reveal text-center text-4xl font-bold leading-tight text-foreground [animation-delay:100ms] sm:text-left sm:text-5xl">
          Onah Bernard
          <span className="hidden sm:inline">
            {' '}
            <span className="text-primary">Chizoba</span>
          </span>
        </h1>
        <h2 className="mt-1 flex animate-reveal items-center justify-center text-3xl text-foreground [animation-delay:100ms] sm:justify-start sm:text-4xl">
          Software <span className="ml-2 text-primary">Engineer</span>
        </h2>

        <p className="mt-6 max-w-lg animate-reveal text-center text-base text-muted-foreground [animation-delay:200ms] sm:text-left sm:text-lg">
          I build scalable, high-performance web applications with clean code and great user
          experiences.
        </p>

        <div className="mt-8 flex animate-reveal flex-wrap items-center justify-center md:justify-start gap-4 [animation-delay:300ms]">
          <Button href="/projects" className="inline-flex items-center gap-2">
            View My Work
            <FiArrowRight size={16} />
          </Button>
          <Button href="/contact" variant="outline" className="inline-flex items-center gap-2">
            Contact Me
            <FiMail size={16} />
          </Button>
        </div>

        <div className=" flex flex-col items-center justify-center md:items-start">
          <p className="mt-10 mb-3 text-sm text-muted-foreground">Connect with me</p>
          <SocialLinks />
        </div>
      </div>

      <HeroGraphic />
    </Container>
  )
}

export default Hero
