import {
  HiOutlineEnvelope,
  HiOutlineChatBubbleLeftRight,
  HiOutlineRocketLaunch,
  HiOutlineCodeBracket,
} from 'react-icons/hi2'
import { SiReact, SiTypescript } from 'react-icons/si'
import { FiUsers } from 'react-icons/fi'
import GlowDotGrid from '@/src/components/ui/glow-dot-grid/glow-dot-grid'

const nodeStyle = {
  borderColor: 'hsl(var(--border))',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
}

type LabelAccent = 'teal' | 'amber' | 'graphite'

const labelAccents: Record<LabelAccent, { icon: string; border: string }> = {
  teal: { icon: '#0F766E', border: 'hsl(var(--primary) / 0.35)' },
  amber: { icon: '#C2410C', border: 'hsl(var(--secondary) / 0.35)' },
  graphite: { icon: '#52525B', border: 'hsl(var(--foreground) / 0.16)' },
}

const NetworkLabel = ({
  icon: Icon,
  label,
  accent,
  className,
}: {
  icon: typeof HiOutlineChatBubbleLeftRight
  label: string
  accent: LabelAccent
  className: string
}) => {
  const { icon: iconColor, border } = labelAccents[accent]

  return (
    <div
      className={`absolute flex items-center gap-1.5 rounded-lg border bg-card-elevated/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-card ${className}`}
      style={{ borderColor: border, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
    >
      <Icon style={{ color: iconColor }} size={20} />
      {label}
    </div>
  )
}

const TechNode = ({
  icon: Icon,
  colorClass,
  className,
}: {
  icon: typeof SiReact
  colorClass: string
  className: string
}) => (
  <div
    className={`absolute flex h-11 w-11 items-center justify-center rounded-lg border bg-card-elevated/90 shadow-card ${className}`}
    style={nodeStyle}
  >
    <Icon className={colorClass} size={18} />
  </div>
)

const ContactHeroGraphic = () => {
  return (
    <div className="relative mx-auto hidden aspect-square md:block md:w-[400px] xl:w-[440px]">
      <GlowDotGrid className="-inset-10" />

      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <linearGradient id="envelopeGradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#0F766E" />
          </linearGradient>
          <linearGradient id="connectionGradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#0F766E" />
            <stop offset="100%" stopColor="#52525B" />
          </linearGradient>
        </defs>

        <circle cx={200} cy={200} r={60} fill="none" stroke="hsl(var(--foreground))" strokeOpacity={0.1} />
        <circle cx={200} cy={200} r={95} fill="none" stroke="hsl(var(--foreground))" strokeOpacity={0.07} />
        <circle cx={200} cy={200} r={130} fill="none" stroke="hsl(var(--foreground))" strokeOpacity={0.04} />

        {[
          'M200,200 Q230,120 200,55',
          'M200,200 Q120,170 45,200',
          'M200,200 Q280,230 355,125',
          'M200,200 Q130,280 95,335',
          'M200,200 Q250,290 230,355',
          'M200,200 Q290,270 325,315',
          'M200,200 Q140,150 76,88',
        ].map((d, i) => (
          <g key={d}>
            <path
              d={d}
              stroke="url(#connectionGradient)"
              strokeWidth={1.5}
              strokeOpacity={0.4}
              strokeLinecap="round"
              strokeDasharray="1.5 5"
            />
            <circle r={2.5} fill="#0F766E">
              <animateMotion dur={`${3.4 + i * 0.4}s`} repeatCount="indefinite" path={d} />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                dur={`${3.4 + i * 0.4}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>

      <div
        className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border shadow-elevated"
        style={{
          borderColor: 'hsl(var(--primary) / 0.5)',
          backgroundColor: 'hsl(var(--foreground))',
        }}
      >
        <HiOutlineEnvelope size={40} style={{ stroke: 'url(#envelopeGradient)' }} />
      </div>

      <NetworkLabel
        icon={HiOutlineChatBubbleLeftRight}
        label="Let's Talk"
        accent="teal"
        className="left-[50%] top-[9%] -translate-x-1/2"
      />
      <TechNode icon={HiOutlineCodeBracket} colorClass="text-secondary" className="left-[6%] top-[47%]" />
      <TechNode icon={HiOutlineCodeBracket} colorClass="text-subtle" className="right-[3%] top-[27%]" />
      <NetworkLabel
        icon={HiOutlineRocketLaunch}
        label="Build"
        accent="amber"
        className="left-[15%] top-[81%]"
      />
      <NetworkLabel
        icon={FiUsers}
        label="Collaborate"
        accent="graphite"
        className="left-[47%] top-[87%]"
      />
      <NetworkLabel icon={FiUsers} label="Connect" accent="teal" className="left-[74%] top-[76%]" />

      <TechNode icon={SiReact} colorClass="text-[#61DAFB]" className="left-[19%] top-[22%]" />
      <TechNode icon={SiTypescript} colorClass="text-[#3178C6]" className="left-[86%] top-[58%]" />
    </div>
  )
}

export default ContactHeroGraphic
