import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { projectsOverviewSegments, totalProjects } from '@/src/data/projects-overview'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'

const buildConicGradient = () => {
  let cursor = 0
  const stops = projectsOverviewSegments.map((segment) => {
    const start = cursor
    cursor += (segment.percentage / 100) * 360
    return `${segment.color} ${start}deg ${cursor}deg`
  })
  return `conic-gradient(${stops.join(', ')})`
}

const ProjectsOverviewCard = () => {
  return (
    <Card className="p-5">
      <CardHeader icon={HiOutlinePencilSquare} title="Projects Overview" />

      <div className="flex items-center gap-6">
        <div
          className="relative h-24 w-24 shrink-0 rounded-full"
          style={{ backgroundImage: buildConicGradient() }}
        >
          <div className="absolute inset-[10px] flex flex-col items-center justify-center rounded-full bg-card text-center">
            <p className="text-lg font-bold text-foreground">{totalProjects}</p>
            <p className="text-[10px] leading-tight text-muted-foreground">Total Projects</p>
          </div>
        </div>

        <ul className="space-y-2">
          {projectsOverviewSegments.map((segment) => (
            <li key={segment.label} className="flex items-center gap-2 text-sm">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: segment.color }}
              />
              <span className="text-muted-foreground">{segment.label}</span>
              <span className="text-foreground">{segment.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

export default ProjectsOverviewCard
