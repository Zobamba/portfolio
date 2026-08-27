import { FiCalendar } from 'react-icons/fi'
import Card from '@/src/components/ui/card/card'
import BookACallButton from '@/src/components/ui/book-a-call-button/book-a-call-button'

const PreferToTalk = () => {
  // BookACallButton hides itself the same way when unset — this check just
  // avoids rendering an orphaned prompt card with no button underneath it.
  if (!process.env.NEXT_PUBLIC_BOOKING_URL) return null

  return (
    <Card className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
          <FiCalendar size={20} />
        </span>
        <div>
          <p className="text-base font-bold text-foreground">Prefer to talk?</p>
          <p className="text-sm text-muted-foreground">
            Book a 30-minute call and let&apos;s discuss your project, opportunity, or idea.
          </p>
        </div>
      </div>

      <BookACallButton className="w-full shrink-0 justify-center sm:w-auto" />
    </Card>
  )
}

export default PreferToTalk
