import { HiOutlineRocketLaunch } from 'react-icons/hi2'
import { FiArrowRight } from 'react-icons/fi'
import Card from '@/src/components/ui/card/card'
import Button from '@/src/components/ui/button/button'

const ringGradient =
  'linear-gradient(135deg, hsl(var(--purple)) 0%, hsl(var(--primary-to)) 50%, hsl(var(--link)) 100%)'

const ProjectsCta = () => {
  return (
    <Card className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <span className="relative shrink-0">
          <span
            className="absolute -inset-1 rounded-full opacity-20 blur-md"
            style={{ backgroundImage: ringGradient }}
            aria-hidden="true"
          />
          <span className="relative flex h-16 w-16 rounded-full p-[1.5px]" style={{ backgroundImage: ringGradient }}>
            <span className="flex h-full w-full items-center justify-center rounded-full bg-card text-primary">
              <HiOutlineRocketLaunch size={32} />
            </span>
          </span>
        </span>
        <div>
          <p className="text-base font-bold text-foreground">Have a project in mind?</p>
          <p className="text-sm text-muted-foreground">
            I&apos;m currently available for freelance opportunities and full-time roles. Let&apos;s
            build something amazing together.
          </p>
        </div>
      </div>

      <Button href="/contact" className="inline-flex shrink-0 items-center gap-2">
        Let&apos;s Work Together
        <FiArrowRight size={16} />
      </Button>
    </Card>
  )
}

export default ProjectsCta
