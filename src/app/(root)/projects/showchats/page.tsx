import Container from '@/src/components/ui/container/container'
import ShowchatsHero from '@/src/components/sections/projects/showchats-case-study/showchats-hero/showchats-hero'
import ShowchatsContributionCard from '@/src/components/sections/projects/showchats-case-study/showchats-contribution-card/showchats-contribution-card'
import ShowchatsServicesCard from '@/src/components/sections/projects/showchats-case-study/showchats-services-card/showchats-services-card'
import ShowchatsCta from '@/src/components/sections/projects/showchats-case-study/showchats-cta/showchats-cta'

export default function ShowchatsPage() {
  return (
    <main className="mt-12">
      <ShowchatsHero />

      <Container className="grid gap-4 py-4 lg:grid-cols-2">
        <ShowchatsContributionCard />
        <ShowchatsServicesCard />
      </Container>

      <Container className="pb-16">
        <ShowchatsCta />
      </Container>
    </main>
  )
}
