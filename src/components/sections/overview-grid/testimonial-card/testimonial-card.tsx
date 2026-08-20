'use client'

import { useEffect, useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa6'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'
import Avatar from '@/src/components/ui/avatar/avatar'
import { testimonials } from '@/src/data/testimonials'
import { cn } from '@/src/lib/utils'

const AUTO_ADVANCE_MS = 5000

interface TestimonialCardProps {
  className?: string
}

const TestimonialCard = ({ className }: TestimonialCardProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length)
    }, AUTO_ADVANCE_MS)

    return () => clearInterval(id)
  }, [])

  const testimonial = testimonials[activeIndex]

  return (
    <Card className={cn('flex h-full flex-col rounded-none border-0 p-4', className)}>
      <CardHeader icon={FaQuoteLeft} title="What People Say" />

      <div key={activeIndex} className="flex flex-1 animate-in items-center fade-in duration-500">
        <p className="text-sm italic text-muted-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
      </div>

      <div key={`${activeIndex}-author`} className="mt-3 flex animate-in items-center gap-3 fade-in duration-500">
        <Avatar alt={testimonial.name} initials={testimonial.initials} size={40} />
        <div>
          <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.title}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1.5">
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-label={`Show testimonial from ${item.name}`}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'h-1.5 rounded-full transition-all',
              index === activeIndex ? 'w-4 bg-primary' : 'w-1.5 bg-border',
            )}
          />
        ))}
      </div>
    </Card>
  )
}

export default TestimonialCard
