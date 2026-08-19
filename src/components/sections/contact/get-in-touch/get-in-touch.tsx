import { HiOutlineUserCircle } from 'react-icons/hi2'
import { contactInfo } from '@/src/data/contact-info'
import { socials } from '@/src/data/socials'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'
import Reveal from '@/src/components/ui/reveal/reveal'
import ContactInfoItem from '@/src/components/sections/contact/get-in-touch/contact-info-item/contact-info-item'

const GetInTouch = () => {
  return (
    <Card className="p-5">
      <CardHeader icon={HiOutlineUserCircle} title="Get in Touch" />

      <div className="flex flex-col gap-5">
        {contactInfo.map((item, index) => (
          <Reveal key={item.label} delay={index * 60}>
            <ContactInfoItem item={item} />
          </Reveal>
        ))}
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <p className="mb-3 text-xs font-medium text-muted-foreground">Connect with me</p>
        <div className="grid grid-cols-4 gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex flex-col items-center gap-1.5 rounded-lg border border-border py-3 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <social.icon size={16} />
              <span className="text-[10px]">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default GetInTouch
