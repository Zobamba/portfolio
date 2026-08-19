import Container from '@/src/components/ui/container/container'
import ProjectsHero from '@/src/components/sections/projects/projects-hero/projects-hero'
import ProjectsExplorer from '@/src/components/sections/projects/projects-explorer/projects-explorer'
import ProjectsOverviewCard from '@/src/components/sections/projects/projects-overview-card/projects-overview-card'
import FeaturedTechnologiesCard from '@/src/components/sections/projects/featured-technologies-card/featured-technologies-card'
import TestimonialCard from '@/src/components/sections/overview-grid/testimonial-card/testimonial-card'
import ProjectsCta from '@/src/components/sections/projects/projects-cta/projects-cta'

export default function ProjectsPage() {
  return (
    <main className="mt-12">
      <ProjectsHero />

      <Container className="pb-12">
        <ProjectsExplorer />
      </Container>

      <Container className="grid gap-4 pb-12 lg:grid-cols-3">
        <ProjectsOverviewCard />
        <FeaturedTechnologiesCard />
        <TestimonialCard className="rounded-xl border border-border p-5" />
      </Container>

      <Container className="pb-16">
        <ProjectsCta />
      </Container>
    </main>
  )
}
