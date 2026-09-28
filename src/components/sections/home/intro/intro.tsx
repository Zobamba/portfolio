import Image from 'next/image'
import { about } from '@/src/data/about'
import { intro } from '@/src/data/intro'
import BookACallButton from '@/src/components/ui/book-a-call-button/book-a-call-button'
import Container from '@/src/components/ui/container/container'
import LagosClock from '@/src/components/ui/lagos-clock/lagos-clock'

const Intro = () => {
  return (
    <Container id="about" className="max-w-[720px] scroll-mt-28 pb-20 pt-10 sm:pb-28 sm:pt-16">
      <div className="flex items-start justify-between gap-4 text-sm">
        <Image
          src={about.image}
          alt={about.name}
          width={44}
          height={44}
          loading="eager"
          className="h-11 w-11 rounded-full object-cover"
        />
        <div className="flex flex-col items-end gap-1 text-right">
          <span className="text-foreground">
            <LagosClock />
          </span>
          <a
            href={`mailto:${about.email}`}
            className="text-muted-foreground underline decoration-dotted underline-offset-4 transition-colors hover:text-foreground"
          >
            {about.email}
          </a>
        </div>
      </div>

      <h1 className="mt-10 text-[1.625rem] font-normal leading-[1.4] tracking-[-0.01em] text-foreground sm:text-[2rem]">
        {intro.lead}
      </h1>

      <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro.body}</p>

      <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro.background}</p>

      <p className="mt-6 text-base text-foreground sm:text-lg">
        Worked with: <span className="text-muted-foreground">{intro.workedWith.join(', ')}.</span>
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <BookACallButton />
        <a
          href={intro.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground underline decoration-dotted underline-offset-4 transition-colors hover:text-foreground"
        >
          Résumé ↗
        </a>
      </div>
    </Container>
  )
}

export default Intro
