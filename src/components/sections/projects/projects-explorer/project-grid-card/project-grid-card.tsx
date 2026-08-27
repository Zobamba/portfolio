import { FiExternalLink, FiGithub, FiArrowRight, FiPlay, FiLock } from 'react-icons/fi'
import Card from '@/src/components/ui/card/card'
import Badge from '@/src/components/ui/badge/badge'
import ProjectThumbnail from '@/src/components/sections/featured-projects/project-thumbnail/project-thumbnail'
import type { Project } from '@/src/data/projects'

interface ProjectGridCardProps {
  project: Project
}

const categoryColorClass: Record<Project['category'], string> = {
  'Web Application': 'text-primary',
  'Mobile Application': 'text-secondary',
  'APIs & Backend': 'text-subtle',
  Other: 'text-muted-foreground',
}

const ProjectGridCard = ({ project }: ProjectGridCardProps) => {
  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-lg p-4 transition-all duration-300 hover:-translate-y-[5px] hover:border-primary/50 hover:shadow-elevated">
      <div className="relative aspect-[3/1] w-full overflow-hidden rounded-md">
        <ProjectThumbnail
          variant={project.thumbnailVariant}
          className="h-full w-full rounded-md transition-transform duration-300 group-hover:scale-[1.025]"
        />
        <span
          className={`absolute left-3 top-3 rounded bg-background/85 px-2 py-1 text-xs font-medium ${categoryColorClass[project.category]}`}
        >
          {project.category}
        </span>
        {project.inProduction && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent px-2 py-1 text-[10px] font-semibold text-primary backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            IN PRODUCTION
          </span>
        )}
        {project.engineeringBadge && (
          <span className="absolute right-3 top-3 inline-flex items-center rounded-full bg-amber-light px-2 py-1 text-[10px] font-semibold text-secondary backdrop-blur-sm">
            {project.engineeringBadge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col py-4">
        <h3 className="text-base font-bold text-foreground">{project.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="tag">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-5 pt-4 text-sm font-medium">
          {project.caseStudyUrl ? (
            <>
              <a
                href={project.caseStudyUrl}
                className="group/demo inline-flex items-center gap-1.5 text-primary transition-colors duration-200 hover:opacity-80"
              >
                {project.caseStudyLabel ?? 'View Case Study'}
                <FiArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover/demo:translate-x-[3px]"
                />
              </a>
              {project.demoVideoUrl && (
                <a
                  href={project.demoVideoUrl}
                  className="group/source inline-flex items-center gap-1.5 text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  Watch Demo
                  <FiPlay
                    size={14}
                    className="transition-transform duration-200 group-hover/source:translate-x-[3px]"
                  />
                </a>
              )}
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/source inline-flex items-center gap-1.5 text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  Source Code
                  <FiGithub
                    size={14}
                    className="transition-transform duration-200 group-hover/source:translate-x-[3px]"
                  />
                </a>
              )}
              {project.sourcePrivate && (
                <span className="inline-flex items-center gap-1.5 text-muted-foreground/70">
                  <FiLock size={12} />
                  Source Private
                </span>
              )}
            </>
          ) : (
            <>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/demo inline-flex items-center gap-1.5 text-primary transition-colors duration-200 hover:opacity-80"
                >
                  Live Demo
                  <FiExternalLink
                    size={14}
                    className="transition-transform duration-200 group-hover/demo:translate-x-[3px]"
                  />
                </a>
              )}
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/source inline-flex items-center gap-1.5 text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                Source Code
                <FiGithub
                  size={14}
                  className="transition-transform duration-200 group-hover/source:translate-x-[3px]"
                />
              </a>
            </>
          )}
        </div>
      </div>
    </Card>
  )
}

export default ProjectGridCard
