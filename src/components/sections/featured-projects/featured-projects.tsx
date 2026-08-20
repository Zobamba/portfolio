import { projects } from '@/src/data/projects'
import SectionHeading from '@/src/components/ui/section-heading/section-heading'
import ProjectCard from '@/src/components/sections/featured-projects/project-card/project-card'
import Container from '@/src/components/ui/container/container'
import Reveal from '@/src/components/ui/reveal/reveal'

const FeaturedProjects = () => {
  return (
    <section className="bg-editor">
      <Container className="py-4">
        <SectionHeading
          title="Featured Projects"
          linkLabel="View all projects"
          linkHref="/projects"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <Reveal key={project.title} delay={index * 80} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProjects
