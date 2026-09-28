import type { Metadata } from 'next'
import {
  architecture,
  challenges,
  demoVideo,
  facts,
  header,
  keyFeatures,
  overview,
  problem,
  role,
  screenshots,
  solution,
} from '@/src/data/onassify-case-study'
import CaseStudyHeader from '@/src/components/sections/case-study/case-study-header/case-study-header'
import CaseStudySection from '@/src/components/sections/case-study/case-study-section/case-study-section'
import MediaFrame from '@/src/components/sections/case-study/media-frame/media-frame'
import NextProject from '@/src/components/sections/case-study/next-project/next-project'
import RowList from '@/src/components/sections/case-study/row-list/row-list'
import ScreenshotGallery from '@/src/components/sections/case-study/screenshot-gallery/screenshot-gallery'
import Container from '@/src/components/ui/container/container'
import InsetPanel from '@/src/components/ui/inset-panel/inset-panel'
import SystemDiagram from '@/src/components/ui/system-diagram/system-diagram'

export const metadata: Metadata = {
  title: 'Onassify | Onah Bernard Chizoba',
  description: header.lead,
}

export default function OnassifyPage() {
  return (
    <main>
      <CaseStudyHeader
        {...header}
        facts={facts}
        actions={
          <a
            href="#demo"
            className="text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            Watch the 60-second demo ↓
          </a>
        }
      />

      <Container id="demo" className="max-w-[1040px] scroll-mt-28 pb-16 sm:pb-24">
        <MediaFrame>
          <video
            controls
            playsInline
            preload="metadata"
            poster={screenshots[0].src}
            className="aspect-video w-full rounded-xl bg-black object-contain"
            aria-label={demoVideo.title}
          >
            <source src={demoVideo.videoUrl} type="video/mp4" />
          </video>
        </MediaFrame>
      </Container>

      <CaseStudySection title="Overview">
        <p className="text-lg leading-relaxed text-muted-foreground">{overview}</p>

        <InsetPanel className="mt-10">
          <div className="grid divide-y divide-border/70 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {[problem, solution].map((column) => (
              <div key={column.title} className="px-5 py-5 sm:px-6 sm:py-6">
                <h3 className="font-medium text-foreground">{column.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{column.intro}</p>
                <ul className="mt-4 flex flex-col gap-2 text-muted-foreground">
                  {column.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="text-border">
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </InsetPanel>
      </CaseStudySection>

      <CaseStudySection title="What I did">
        <RowList items={role} />
      </CaseStudySection>

      <CaseStudySection title="Key features">
        <ul className="flex flex-wrap gap-2">
          {keyFeatures.map((feature) => (
            <li key={feature} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
              {feature}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Architecture" wide>
        <MediaFrame>
          <SystemDiagram
            screenshotRatio={false}
            layers={architecture}
            label="Onassify architecture: web admin and POS apps call a Rails REST API with role-based access, backed by MySQL."
          />
        </MediaFrame>
      </CaseStudySection>

      <CaseStudySection title="Engineering challenges">
        <RowList items={challenges} />
      </CaseStudySection>

      <CaseStudySection title="Screenshots" wide>
        <ScreenshotGallery shots={screenshots} />
      </CaseStudySection>

      <NextProject
        title="ShowChats"
        summary="The realtime backend behind live TV chat."
        href="/projects/showchats"
      />
    </main>
  )
}
