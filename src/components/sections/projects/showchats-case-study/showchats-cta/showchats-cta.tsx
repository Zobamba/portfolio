import { FiArrowRight } from 'react-icons/fi'
import { HiOutlineRocketLaunch } from 'react-icons/hi2'
import { cta } from '@/src/data/showchats-case-study'

// Same structural pattern as the Onassify case-study CTA (icon + title/description
// + button on a solid panel), so the two case studies close consistently.
const ShowchatsCta = () => {
  return (
    <div
      className="flex flex-col items-center gap-5 rounded-2xl border border-white/10 p-6 text-center sm:flex-row sm:justify-between sm:text-left"
      style={{ background: '#115E59' }}
    >
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
          <HiOutlineRocketLaunch size={22} />
        </span>
        <div>
          <p className="text-base font-bold text-white">{cta.title}</p>
          <p className="text-sm text-white/75">{cta.description}</p>
        </div>
      </div>

      <a
        href={cta.buttonHref}
        className="inline-flex shrink-0 items-center gap-2 rounded border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
      >
        {cta.buttonLabel}
        <FiArrowRight size={15} />
      </a>
    </div>
  )
}

export default ShowchatsCta
