import { HiOutlinePaperAirplane } from 'react-icons/hi2'
import { FiArrowRight } from 'react-icons/fi'
import Card from '@/src/components/ui/card/card'
import Button from '@/src/components/ui/button/button'
import GlowDotGrid from '@/src/components/ui/glow-dot-grid/glow-dot-grid'

const ContactCta = () => {
  return (
    <Card className="relative flex flex-col items-center gap-4 overflow-hidden p-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <GlowDotGrid className="inset-0" />

      <div className="relative flex flex-col items-center gap-4 sm:flex-row">
        <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
          <HiOutlinePaperAirplane size={22} className="-rotate-45" />
        </span>
        <div>
          <p className="text-base font-bold text-foreground">
            Have an idea? Let&apos;s make it <span className="text-primary">real.</span>
          </p>
          <p className="text-sm text-muted-foreground">
            I&apos;m excited to learn about your project and help turn your ideas into powerful, scalable
            solutions.
          </p>
        </div>
      </div>

      <Button href="#send-message" className="group relative z-10 inline-flex shrink-0 items-center gap-2">
        Start a Conversation
        <FiArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
      </Button>
    </Card>
  )
}

export default ContactCta
