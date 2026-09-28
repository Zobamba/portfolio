import type { Metadata } from 'next'
import { architecture, contributions, facts, header, services } from '@/src/data/showchats-case-study'
import CaseStudyHeader from '@/src/components/sections/case-study/case-study-header/case-study-header'
import CaseStudySection from '@/src/components/sections/case-study/case-study-section/case-study-section'
import MediaFrame from '@/src/components/sections/case-study/media-frame/media-frame'
import NextProject from '@/src/components/sections/case-study/next-project/next-project'
import RowList from '@/src/components/sections/case-study/row-list/row-list'
import Container from '@/src/components/ui/container/container'
import SystemDiagram from '@/src/components/ui/system-diagram/system-diagram'

export const metadata: Metadata = {
  title: 'ShowChats | Onah Bernard Chizoba',
  description: header.lead,
}

export default function ShowchatsPage() {
  return (
    <main>
      <CaseStudyHeader {...header} facts={facts} />

      <Container className="max-w-[1040px] pb-16 sm:pb-24">
        <MediaFrame>
          <SystemDiagram
            screenshotRatio={false}
            layers={architecture}
            label="ShowChats architecture: mobile and web clients call Deno Edge Functions, which sit on Supabase Postgres with row-level security and realtime channels."
          />
        </MediaFrame>
      </Container>

      <CaseStudySection title="What I built">
        <RowList items={contributions} />
      </CaseStudySection>

      <CaseStudySection title="Backend services">
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          Everything the Edge Functions layer covers, designed, built and shipped end to end.
        </p>
        <RowList items={services} />
      </CaseStudySection>

      <NextProject
        title="Onassify"
        summary="POS and inventory platform, in production."
        href="/projects/onassify"
      />
    </main>
  )
}
