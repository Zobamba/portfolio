import { techStack } from '@/src/data/tech-stack'
import Badge from '@/src/components/ui/badge/badge'
import Container from '@/src/components/ui/container/container'
import Reveal from '@/src/components/ui/reveal/reveal'

const TechStackStrip = () => {
  return (
    <section className="border-y border-border bg-surface">
      <Container className="flex flex-wrap items-center gap-4 py-6">
        <span className="text-sm font-semibold text-foreground">Tech Stack</span>
        <div className="flex flex-wrap items-center gap-3">
          {techStack.map((tech, index) => (
            <Reveal key={tech.name} delay={index * 60} distance={12}>
              <Badge variant="tech-pill" className="group items-center">
                <tech.icon
                  className={`${tech.colorClass} transition-all duration-200 group-hover:drop-shadow-[0_0_6px_currentColor]`}
                  size={16}
                />
                {tech.name}
              </Badge>
            </Reveal>
          ))}
          <span className="text-sm text-muted-foreground">and more...</span>
        </div>
      </Container>
    </section>
  )
}

export default TechStackStrip
