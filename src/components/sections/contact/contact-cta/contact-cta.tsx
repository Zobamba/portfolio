import { HiOutlinePaperAirplane } from 'react-icons/hi2'
import { FiArrowRight } from 'react-icons/fi'
import Card from '@/src/components/ui/card/card'
import Button from '@/src/components/ui/button/button'
import GlowDotGrid from '@/src/components/ui/glow-dot-grid/glow-dot-grid'

const ringGradient =
  'linear-gradient(135deg, hsl(var(--link)) 0%, hsl(var(--primary-to)) 50%, hsl(var(--purple)) 100%)'

const ContactCta = () => {
  return (
    <Card className="relative flex flex-col items-center gap-4 overflow-hidden p-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <GlowDotGrid className="inset-0" />
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 animate-breathe rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.35), transparent 70%)' }}
      />

      <div className="relative flex flex-col items-center gap-4 sm:flex-row">
        <span className="relative shrink-0">
          <span
            className="absolute -inset-1 rounded-full opacity-40 blur-md"
            style={{ backgroundImage: ringGradient }}
            aria-hidden="true"
          />
          <span className="relative flex h-16 w-16 rounded-full p-[1.5px]" style={{ backgroundImage: ringGradient }}>
            <span className="flex h-full w-full items-center justify-center rounded-full bg-card text-primary">
              <HiOutlinePaperAirplane size={22} className="-rotate-45" />
            </span>
          </span>
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
