import Image from 'next/image'
import Link from 'next/link'
import { alsoBuilt, work } from '@/src/data/work'
import Container from '@/src/components/ui/container/container'
import Reveal from '@/src/components/ui/reveal/reveal'
import SectionLabel from '@/src/components/ui/section-label/section-label'
import SystemDiagram from '@/src/components/ui/system-diagram/system-diagram'

const linkClass =
  'text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground'

const isExternal = (href: string) => href.startsWith('http')

const Work = () => {
  return (
    <Container id="work" className="max-w-[1040px] scroll-mt-28 pb-24 sm:pb-32">
      <SectionLabel className="mx-auto max-w-[720px]">
        Work
      </SectionLabel>

      <div className="mt-10 flex flex-col gap-16 sm:gap-24">
        {work.map((item, index) => (
          <Reveal key={item.title}>
            <article>
              <div className="overflow-hidden rounded-2xl border border-border bg-card p-2 sm:p-3">
                {item.image ? (
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    sizes="(min-width: 1040px) 1000px, 100vw"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className="aspect-[16/10] w-full rounded-xl object-cover object-top"
                  />
                ) : (
                  item.diagram && <SystemDiagram {...item.diagram} />
                )}
              </div>

              <div className="mx-auto mt-6 max-w-[720px]">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-base text-foreground">
                    <span className="mr-3 font-mono text-sm text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {item.label}
                  </span>
                </div>
                <p className="mt-2 text-muted-foreground">{item.summary}</p>
                <div className="mt-3 flex gap-5">
                  {item.links.map((link) =>
                    isExternal(link.href) ? (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {link.label} ↗
                      </a>
                    ) : (
                      <Link key={link.href} href={link.href} className={linkClass}>
                        {link.label} →
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-20 max-w-[720px]">
        <p className="text-sm text-muted-foreground">Also built</p>
        <ul className="mt-3 divide-y divide-border border-y border-border">
          {alsoBuilt.map((project) => (
            <li key={project.title}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-4 py-3"
              >
                <span className="text-foreground">
                  {project.title}
                  <span className="ml-3 hidden text-muted-foreground sm:inline">{project.note}</span>
                </span>
                <span className="shrink-0 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  {project.label} ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default Work
