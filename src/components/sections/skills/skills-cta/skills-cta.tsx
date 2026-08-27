import { FiArrowRight } from 'react-icons/fi'
import { TbTargetArrow } from 'react-icons/tb'
import Card from '@/src/components/ui/card/card'
import Button from '@/src/components/ui/button/button'

const SkillsCta = () => {
  return (
    <Card className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
          <TbTargetArrow size={22} />
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
