import { FiExternalLink, FiGithub, FiArrowRight, FiPlay, FiLock } from 'react-icons/fi'
import Card from '@/src/components/ui/card/card'
import Badge from '@/src/components/ui/badge/badge'
import ProjectThumbnail from '@/src/components/sections/featured-projects/project-thumbnail/project-thumbnail'
import type { Project } from '@/src/data/projects'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group flex h-full gap-4 rounded-lg border-muted p-4 transition-all duration-300 hover:-translate-y-[5px] hover:border-primary">
      <div className="flex w-24 shrink-0 flex-col items-center gap-2 sm:w-28">
        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md sm:h-28 sm:w-28">
          <ProjectThumbnail
            variant={project.thumbnailVariant}
            className="h-full w-full transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
        {project.inProduction && (
          <span className="inline-flex items-center gap-1 rounded-full bg-[#22C55E]/10 px-2 py-0.5 text-[10px] font-semibold text-[#22C55E]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
            IN PRODUCTION
          </span>
        )}
        {project.engineeringBadge && (
          <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] text-center font-semibold text-indigo-400">
            {project.engineeringBadge}
          </span>
        )}
        {project.sourcePrivate && (
          <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground/70">
            <FiLock size={11} />
            Source Private
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-flex-start">
        <h3 className="text-base font-bold text-foreground">{project.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>

        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="tag">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
          {project.caseStudyUrl ? (
            <>
              <a
                href={project.caseStudyUrl}
                className="inline-flex items-center gap-1.5 text-link hover:opacity-80"
              >
                {project.caseStudyLabel ?? 'View Case Study'}
                <FiArrowRight size={14} />
              </a>
              {project.demoVideoUrl && (
                <a
                  href={project.demoVideoUrl}
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                >
                  Watch Demo
                  <FiPlay size={14} />
                </a>
              )}
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                >
                  Source Code
                  <FiGithub size={14} />
                </a>
              )}
            </>
          ) : (
            <>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-link hover:opacity-80"
                >
                  Live Demo
                  <FiExternalLink size={14} />
                </a>
              )}
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
              >
                Source Code
                <FiGithub size={14} />
              </a>
            </>
          )}
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard
