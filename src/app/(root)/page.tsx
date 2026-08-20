import Hero from '@/src/components/sections/hero/hero'
import TechStackStrip from '@/src/components/sections/tech-stack-strip/tech-stack-strip'
import FeaturedProjects from '@/src/components/sections/featured-projects/featured-projects'
import OverviewGrid from '@/src/components/sections/overview-grid/overview-grid'
import StatsBar from '@/src/components/sections/stats-bar/stats-bar'

export default function HomePage() {
  return (
    <main className="mt-12">
      <Hero />
      <TechStackStrip />
      <FeaturedProjects />
      <OverviewGrid />
      <StatsBar />
    </main>
  )
}
