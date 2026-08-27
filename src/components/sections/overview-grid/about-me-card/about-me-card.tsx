import Link from 'next/link'
import { FiUser, FiMapPin, FiMail } from 'react-icons/fi'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'
import Avatar from '@/src/components/ui/avatar/avatar'
import { about } from '@/src/data/about'

const AboutMeCard = () => {
  return (
    <Card className="flex h-full flex-col rounded-none border-none bg-inherit p-4">
      <CardHeader icon={FiUser} title="About Me" />

      <div className="flex items-start gap-3">
        <Avatar src={about.image} alt="Onah Bernard Chizoba" size={64} />
        <p className="text-sm text-muted-foreground">{about.bio}</p>
      </div>

      <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <FiMapPin className="text-destructive" size={14} />
          {about.location}
        </div>
        <div className="flex items-center gap-2">
          <FiMail className="text-foreground" size={14} />
          <a href={`mailto:${about.email}`} className="text-primary hover:opacity-80">
            {about.email}
          </a>
        </div>
      </div>

      <Link
        href="/about"
        className="mt-3 inline-flex w-fit items-center rounded border border-border bg-pill px-3 py-1.5 text-xs font-medium text-primary hover:bg-pill-hover"
      >
        More About Me
      </Link>
    </Card>
  )
}

export default AboutMeCard
