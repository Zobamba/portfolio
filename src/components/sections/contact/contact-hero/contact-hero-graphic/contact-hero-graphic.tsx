import {
  HiOutlineEnvelope,
  HiOutlineChatBubbleLeftRight,
  HiOutlineRocketLaunch,
  HiOutlineCodeBracket,
} from 'react-icons/hi2'
import { SiReact, SiTypescript } from 'react-icons/si'
import { FiUsers } from 'react-icons/fi'
import GlowDotGrid from '@/src/components/ui/glow-dot-grid/glow-dot-grid'

const labelStyle = {
  borderColor: 'hsl(var(--border))',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  boxShadow: '0 0 16px rgba(59, 130, 246, 0.18)',
}

type LabelAccent = 'blue' | 'cyan' | 'purple' | 'connectBlue'

const labelAccents: Record<
  LabelAccent,
  { icon: string; border: string; boxShadow: string; radialGlow: string }
> = {
  blue: {
    icon: '#60A5FA',
    border: 'rgba(59, 130, 246, 0.40)',
    boxShadow: '0 0 15px rgba(59, 130, 246, 0.12), inset 0 0 15px rgba(59, 130, 246, 0.04)',
    radialGlow:
      'radial-gradient(circle at center, rgba(59, 130, 246, 0.16) 0%, rgba(59, 130, 246, 0.06) 35%, transparent 72%)',
  },
  cyan: {
    icon: '#22D3EE',
    border: 'rgba(34, 211, 238, 0.38)',
    boxShadow: '0 0 15px rgba(34, 211, 238, 0.12), inset 0 0 15px rgba(34, 211, 238, 0.04)',
    radialGlow:
      'radial-gradient(circle at center, rgba(34, 211, 238, 0.15) 0%, rgba(34, 211, 238, 0.05) 35%, transparent 72%)',
  },
  purple: {
    icon: '#A78BFA',
    border: 'rgba(139, 92, 246, 0.40)',
    boxShadow: '0 0 16px rgba(139, 92, 246, 0.14), inset 0 0 16px rgba(139, 92, 246, 0.04)',
    radialGlow:
      'radial-gradient(circle at center, rgba(139, 92, 246, 0.16) 0%, rgba(139, 92, 246, 0.05) 35%, transparent 72%)',
  },
  connectBlue: {
    icon: '#38BDF8',
    border: 'rgba(14, 165, 233, 0.40)',
    boxShadow: '0 0 15px rgba(14, 165, 233, 0.12), inset 0 0 15px rgba(14, 165, 233, 0.04)',
    radialGlow:
      'radial-gradient(circle at center, rgba(59, 130, 246, 0.16) 0%, rgba(59, 130, 246, 0.06) 35%, transparent 72%)',
  },
}

const NetworkLabel = ({
  icon: Icon,
  label,
  accent,
  className,
  delay,
}: {
  icon: typeof HiOutlineChatBubbleLeftRight
  label: string
  accent: LabelAccent
  className: string
  delay: string
}) => {
  const { icon: iconColor, border, boxShadow, radialGlow } = labelAccents[accent]

  return (
    <div
      className={`absolute flex animate-float items-center gap-1.5 rounded-lg border bg-card-elevated/90 px-3 py-1.5 text-xs font-medium text-foreground ${className}`}
      style={{
        backgroundImage: radialGlow,
        borderColor: border,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow,
        animationDelay: delay,
      }}
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
  delay,
}: {
  icon: typeof SiReact
  colorClass: string
  className: string
  delay: string
}) => (
  <div
    className={`absolute flex h-11 w-11 animate-float items-center justify-center rounded-lg border bg-card-elevated/90 ${className}`}
    style={{ ...labelStyle, animationDelay: delay }}
  >
    <Icon className={colorClass} size={18} />
  </div>
)

const ContactHeroGraphic = () => {
  return (
    <div className="relative mx-auto hidden aspect-square md:block md:w-[400px] xl:w-[440px]">
      <GlowDotGrid className="-inset-10" />
      <div
        className="pointer-events-none absolute right-[6%] top-[10%] h-40 w-40 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.28), transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute left-[10%] bottom-[8%] h-36 w-36 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(34, 211, 238, 0.24), transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent 70%)' }}
      />

      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <linearGradient id="envelopeGradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="connectionGradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>

        <circle cx={200} cy={200} r={60} fill="none" stroke="#3B82F6" strokeOpacity={0.18} />
        <circle cx={200} cy={200} r={95} fill="none" stroke="#3B82F6" strokeOpacity={0.12} />
        <circle cx={200} cy={200} r={130} fill="none" stroke="#3B82F6" strokeOpacity={0.07} />

        {[
          'M200,200 Q230,120 200,55',
          'M200,200 Q120,170 45,200',
          'M200,200 Q280,230 355,200',
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
              strokeOpacity={0.5}
              strokeLinecap="round"
              strokeDasharray="1.5 5"
            />
            <circle r={2.5} fill="#38BDF8">
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

        <circle cx={200} cy={200} r={4} fill="#E0F2FE" opacity={0.9} />
      </svg>

      <div
        className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 animate-breathe items-center justify-center rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.45), transparent 72%)',
          filter: 'blur(6px)',
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border"
        style={{
          borderColor: 'rgba(59, 130, 246, 0.7)',
          backgroundColor: 'rgba(7, 13, 25, 0.6)',
          boxShadow: 'inset 0 0 18px hsl(var(--link) / 0.5)',
        }}
      >
        <HiOutlineEnvelope
          size={40}
          style={{
            stroke: 'url(#envelopeGradient)',
            filter: 'drop-shadow(0 0 16px rgba(59, 130, 246, 0.7))',
          }}
        />
      </div>

      <NetworkLabel
        icon={HiOutlineChatBubbleLeftRight}
        label="Let's Talk"
        accent="blue"
        className="left-[40%] top-[9%] -translate-x-1/2"
        delay="0s"
      />
      <TechNode
        icon={HiOutlineCodeBracket}
        colorClass="text-[#A78BFA]"
        className="left-[6%] top-[47%]"
        delay="0.6s"
      />
      <TechNode
        icon={HiOutlineCodeBracket}
        colorClass="text-[#68A063]"
        className="right-[3%] top-[47%]"
        delay="1.1s"
      />
      <NetworkLabel
        icon={HiOutlineRocketLaunch}
        label="Build"
        accent="cyan"
        className="left-[15%] top-[81%]"
        delay="1.6s"
      />
      <NetworkLabel
        icon={FiUsers}
        label="Collaborate"
        accent="purple"
        className="left-[47%] top-[87%]"
        delay="2.1s"
      />
      <NetworkLabel
        icon={FiUsers}
        label="Connect"
        accent="connectBlue"
        className="left-[74%] top-[76%]"
        delay="2.6s"
      />

      <TechNode
        icon={SiReact}
        colorClass="text-[#61DAFB]"
        className="left-[19%] top-[22%]"
        delay="0.3s"
      />
      <TechNode
        icon={SiTypescript}
        colorClass="text-[#3178C6]"
        className="left-[86%] top-[58%]"
        delay="1.9s"
      />
    </div>
  )
}

export default ContactHeroGraphic
