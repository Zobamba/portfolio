import { FiArrowRight } from 'react-icons/fi'
import { TbTargetArrow } from 'react-icons/tb'
import Card from '@/src/components/ui/card/card'
import Button from '@/src/components/ui/button/button'

const ringGradient =
  'linear-gradient(135deg, hsl(var(--purple)) 0%, hsl(var(--primary-to)) 50%, hsl(var(--link)) 100%)'

const SkillsCta = () => {
  return (
    <Card className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <span className="relative shrink-0">
          <span
            className="absolute -inset-1 rounded-full opacity-40 blur-md"
            style={{ backgroundImage: ringGradient }}
            aria-hidden="true"
          />
          <span
            className="relative flex h-16 w-16 rounded-full p-[1.5px]"
            style={{ backgroundImage: ringGradient }}
          >
            <span className="flex h-full w-full items-center justify-center rounded-full bg-card text-primary">
              <TbTargetArrow size={22} />
            </span>
          </span>
        </span>
        <div>
          <p className="text-base font-bold text-foreground">Always Learning</p>
          <p className="text-sm text-muted-foreground">
            Technology evolves every day and so do I. I&apos;m always exploring new tools and
            improving my craft.
          </p>
        </div>
      </div>

      <Button href="/projects" className="inline-flex shrink-0 items-center gap-2">
        View My Projects
        <FiArrowRight size={16} />
      </Button>
    </Card>
  )
}

export default SkillsCta
