import type { VariantProps } from 'class-variance-authority'
import Button, { buttonVariants } from '@/src/components/ui/button/button'
import { about } from '@/src/data/about'
import { cn } from '@/src/lib/utils'

interface BookACallButtonProps {
  variant?: VariantProps<typeof buttonVariants>['variant']
  size?: VariantProps<typeof buttonVariants>['size']
  className?: string
}

// Google Calendar (Appointment Schedule + Google Meet) owns availability, time
// zones, conflicts, and confirmation — this only links out to that public page.
const BookACallButton = ({ variant = 'ink', size, className }: BookACallButtonProps) => {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL

  if (!bookingUrl) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        '[BookACallButton] NEXT_PUBLIC_BOOKING_URL is not set — hiding the "Book a Call" CTA. Add it to .env.local.',
      )
    }
    return null
  }

  return (
    <Button
      href={bookingUrl}
      variant={variant}
      size={size}
      className={cn('gap-3', className)}
      aria-label="Book a 30-minute call with Onah"
    >
      Book a call
      {/* Driven by about.availableForWork, so it only changes when availability does. */}
      <span
        aria-hidden="true"
        className={cn(
          'h-1.5 w-3 rounded-full',
          about.availableForWork ? 'bg-emerald-400' : 'bg-muted-foreground',
        )}
      />
    </Button>
  )
}

export default BookACallButton
