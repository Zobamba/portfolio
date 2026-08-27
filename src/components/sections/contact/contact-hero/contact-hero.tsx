import { contactPage, contactMeta } from '@/src/data/contact-page'
import Container from '@/src/components/ui/container/container'
import ContactHeroGraphic from '@/src/components/sections/contact/contact-hero/contact-hero-graphic/contact-hero-graphic'

const ContactHero = () => {
  return (
    <Container className="grid items-start gap-12 md:pb-16 pt-8 sm:pb-12 sm:pt-12 lg:grid-cols-2">
      <div>
        <div className="flex animate-reveal items-center gap-2 text-sm font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {contactPage.eyebrow}
        </div>

        <h1 className="mt-3 animate-reveal text-center text-4xl font-bold leading-tight text-foreground [animation-delay:100ms] sm:text-left sm:text-5xl">
          {contactPage.headingLine1}
          <br />
          {contactPage.headingWhite}{' '}
          <span className="text-primary">
            {contactPage.headingHighlight}
          </span>
        </h1>

        <p className="mt-6 max-w-lg animate-reveal text-center text-base text-muted-foreground [animation-delay:200ms] sm:text-left sm:text-lg">
          {contactPage.paragraph}
        </p>

        <div className="mt-8 flex animate-reveal flex-col gap-4 [animation-delay:300ms] sm:flex-row sm:items-center sm:gap-8">
          {contactMeta.map((meta) => (
            <div key={meta.text} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-primary">
                <meta.icon size={20} />
              </span>
              <p className="md:max-w-[180px] text-sm text-muted-foreground">{meta.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:-mt-4">
        <ContactHeroGraphic />
      </div>
    </Container>
  )
}

export default ContactHero
