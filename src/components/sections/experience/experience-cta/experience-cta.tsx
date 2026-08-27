import { HiOutlineRocketLaunch } from 'react-icons/hi2'
import { FiArrowRight } from 'react-icons/fi'
import Card from '@/src/components/ui/card/card'
import Button from '@/src/components/ui/button/button'

const ExperienceCta = () => {
  return (
    <Card className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
          <HiOutlineRocketLaunch size={22} />
        </span>
        <div>
          <p className="text-base font-bold text-foreground">Let&apos;s build something impactful together</p>
          <p className="text-sm text-muted-foreground">
            I&apos;m open to full-time opportunities and exciting projects. Let&apos;s create solutions
            that make a difference.
          </p>
        </div>
      </div>

      <Button href="/contact" className="inline-flex shrink-0 items-center gap-2">
        Get In Touch
        <FiArrowRight size={16} />
      </Button>
    </Card>
  )
}

export default ExperienceCta
