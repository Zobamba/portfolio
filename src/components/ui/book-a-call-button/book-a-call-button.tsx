import { FiArrowUpRight } from 'react-icons/fi'
import type { VariantProps } from 'class-variance-authority'
import Button, { buttonVariants } from '@/src/components/ui/button/button'

interface BookACallButtonProps {
  variant?: VariantProps<typeof buttonVariants>['variant']
  size?: VariantProps<typeof buttonVariants>['size']
  className?: string
}

// Google Calendar (Appointment Schedule + Google Meet) owns availability, time
// zones, conflicts, and confirmation — this only links out to that public page.
const BookACallButton = ({ variant, size, className }: BookACallButtonProps) => {
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
      className={className}
      aria-label="Book a 30-minute call with Onah"
    >
      Book a Call
      <FiArrowUpRight size={14} aria-hidden="true" />
    </Button>
  )
}

export default BookACallButton
