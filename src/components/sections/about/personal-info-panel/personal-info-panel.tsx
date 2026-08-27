import { FiUser, FiCreditCard, FiMapPin, FiMail, FiPhone, FiClock } from 'react-icons/fi'
import { about } from '@/src/data/about'
import { aboutStats } from '@/src/data/about-stats'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'
import AboutStatItem from '@/src/components/sections/about/personal-info-panel/about-stat-item/about-stat-item'

const personalInfo = [
  { icon: FiCreditCard, label: 'Name', value: about.name },
  { icon: FiMapPin, label: 'Location', value: about.location },
  { icon: FiMail, label: 'Email', value: about.email },
  { icon: FiPhone, label: 'Phone', value: about.phone },
  { icon: FiClock, label: 'Availability', value: about.availability },
]

const PersonalInfoPanel = () => {
  return (
    <Card className="min-w-0 p-5 border-none bg-inherit">
      <CardHeader icon={FiUser} title="Personal Info" />
      <div className="space-y-3">
        {personalInfo.map((item) => (
          <div key={item.label} className="flex min-w-0 items-center gap-3 text-sm">
            <item.icon className="shrink-0 text-muted-foreground" size={15} />
            <span className="w-20 shrink-0 text-muted-foreground">{item.label}</span>
            <span className="min-w-0 truncate text-foreground">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-4 gap-3 border-t border-border pt-5">
        {aboutStats.map((stat) => (
          <AboutStatItem key={stat.label} stat={stat} />
        ))}
      </div>
    </Card>
  )
}

export default PersonalInfoPanel
