import Container from '@/src/components/ui/container/container'
import ContactHero from '@/src/components/sections/contact/contact-hero/contact-hero'
import PreferToTalk from '@/src/components/sections/contact/prefer-to-talk/prefer-to-talk'
import ContactFormSection from '@/src/components/sections/contact/contact-form-section/contact-form-section'
import WhyWorkWithMe from '@/src/components/sections/contact/why-work-with-me/why-work-with-me'
import ContactCta from '@/src/components/sections/contact/contact-cta/contact-cta'

export default function ContactPage() {
  return (
    <main className="mt-12">
      <ContactHero />

      <Container className="pb-4">
        <PreferToTalk />
      </Container>

      <ContactFormSection />

      <Container className="pb-4">
        <WhyWorkWithMe />
      </Container>

      <Container className="pb-16">
        <ContactCta />
      </Container>
    </main>
  )
}
