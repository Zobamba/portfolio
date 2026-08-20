import type { ContactInfoItem as ContactInfoItemType } from '@/src/data/contact-info'

interface ContactInfoItemProps {
  item: ContactInfoItemType
}

const ContactInfoItem = ({ item }: ContactInfoItemProps) => {
  const Icon = item.icon

  return (
    <div className="group flex items-center gap-3 rounded-lg border border-transparent p-2 -m-2 transition-colors duration-300 ease-signature hover:border-border">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary transition-all duration-300 ease-signature group-hover:-translate-y-[1px]">
        <Icon size={18} className="transition-[filter] duration-300 ease-signature group-hover:drop-shadow-[0_0_8px_currentColor]" />
      </span>
      <div>
        <p className="text-xs text-muted-foreground">{item.label}</p>
        {item.href ? (
          <a href={item.href} className="text-sm font-medium text-foreground hover:text-primary">
            {item.value}
          </a>
        ) : (
          <p className="text-sm font-medium text-foreground">{item.value}</p>
        )}
      </div>
    </div>
  )
}

export default ContactInfoItem
