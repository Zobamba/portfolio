import { cn } from '@/src/lib/utils'

interface GlowDotGridProps {
  className?: string
}

/**
 * Radial glowing dot grid — decorative backdrop for hero-style graphics.
 * Dots are concentrated in two diagonal zones (middle-left toward top, middle-right toward
 * bottom) rather than a single centered radius, so the effect reads as directional, not a halo.
 */
const dotMask =
  'radial-gradient(ellipse 60% 50% at 15% 20%, black 0%, transparent 70%), ' +
  'radial-gradient(ellipse 60% 50% at 85% 80%, black 0%, transparent 70%)'

const GlowDotGrid = ({ className }: GlowDotGridProps) => {
  return (
    <div className={cn('pointer-events-none absolute inset-0 -z-10', className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(hsl(var(--soft) / 0.55) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
          maskImage: dotMask,
          WebkitMaskImage: dotMask,
        }}
      />
      {/* soft vignette so dots fade out before reaching the outer edge, instead of cutting off abruptly */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 85% at center, transparent 0%, hsl(var(--background)) 100%)',
        }}
      />
    </div>
  )
}

export default GlowDotGrid
