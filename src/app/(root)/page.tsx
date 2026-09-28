import Intro from '@/src/components/sections/home/intro/intro'
import Work from '@/src/components/sections/home/work/work'
import Process from '@/src/components/sections/home/process/process'
import Experience from '@/src/components/sections/home/experience/experience'
import HelpBand from '@/src/components/sections/home/help-band/help-band'
import KindWords from '@/src/components/sections/home/kind-words/kind-words'
import Contact from '@/src/components/sections/home/contact/contact'

export default function HomePage() {
  return (
    <main>
      <Intro />
      <Work />
      <Process />
      <Experience />
      <HelpBand />
      <KindWords />
      <Contact />
    </main>
  )
}
