import Card from '@/src/components/ui/card/card'
import { servicesSection, serviceGroups } from '@/src/data/showchats-case-study'

const ShowchatsServicesCard = () => {
  return (
    <div id="services" className="h-full scroll-mt-24">
      <Card className="h-full p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <servicesSection.icon size={17} />
          </span>
          <div>
            <h2 className="font-semibold text-foreground">{servicesSection.title}</h2>
            <p className="text-xs text-muted-foreground">{servicesSection.description}</p>
          </div>
        </div>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {serviceGroups.map((group) => (
            <li key={group.title} className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <group.icon size={15} />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{group.title}</p>
                <p className="text-sm text-muted-foreground">{group.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

export default ShowchatsServicesCard
