import { help, helpRows } from '@/src/data/help'
import Container from '@/src/components/ui/container/container'
import Marquee from '@/src/components/ui/marquee/marquee'

// The one dark moment on the page: stays dark in both themes so it always reads as a break.
const HelpBand = () => {
  return (
    <Container className="max-w-[1040px] pb-24 sm:pb-32">
      <div className="relative overflow-hidden rounded-3xl bg-[#141413] px-0 py-16 dark:border dark:border-border sm:py-20">
        <div aria-hidden="true" className="glyph-pattern pointer-events-none absolute inset-0 opacity-[0.07]" />

        <div className="relative px-6 text-center">
          <h2 className="text-2xl font-medium tracking-[-0.02em] text-[#F7F6F3] sm:text-[2rem]">{help.title}</h2>
          <p className="mx-auto mt-3 max-w-md text-[#A3A19C] sm:text-lg">{help.subtitle}</p>
        </div>

        <div className="relative mt-10 flex flex-col gap-3">
          {helpRows.map((row, index) => (
            <Marquee key={index} duration={index === 0 ? 50 : 60} reverse={index === 1}>
              {row.map((item) => (
                <span
                  key={item}
                  className="mr-3 rounded-2xl bg-[#F7F6F3] px-5 py-2.5 text-sm font-medium text-[#141413]"
                >
                  {item}
                </span>
              ))}
            </Marquee>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default HelpBand
