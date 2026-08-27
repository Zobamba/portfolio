import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

interface SectionHeadingProps {
  title: string
  linkLabel?: string
  linkHref?: string
}

const SectionHeading = ({ title, linkLabel, linkHref }: SectionHeadingProps) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-foreground sm:text-lg">{title}</h2>
      {linkLabel && linkHref && (
        <Link
          href={linkHref}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80"
        >
          {linkLabel}
          <FiArrowRight size={14} />
        </Link>
      )}
    </div>
  )
}

export default SectionHeading
