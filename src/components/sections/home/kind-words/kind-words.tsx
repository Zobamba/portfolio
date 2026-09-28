import { testimonials } from '@/src/data/testimonials'
import Container from '@/src/components/ui/container/container'
import SectionLabel from '@/src/components/ui/section-label/section-label'

const KindWords = () => {
  return (
    <Container className="max-w-[720px] pb-24 sm:pb-32">
      <SectionLabel>Kind words</SectionLabel>

      <div className="mt-8 flex flex-col gap-10">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name}>
            <blockquote className="text-base leading-relaxed text-foreground">“{testimonial.quote}”</blockquote>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              {testimonial.name}, {testimonial.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </Container>
  )
}

export default KindWords
