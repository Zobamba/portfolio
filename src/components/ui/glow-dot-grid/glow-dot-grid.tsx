import { cn } from '@/src/lib/utils'

interface GlowDotGridProps {
  className?: string
}

/**
 * Extremely subtle dot-grid texture — decorative backdrop for hero-style graphics.
 * A fixed, muted neutral tone at very low opacity, fading out toward the edges so it
 * reads as a faint technical/editorial texture rather than a glow or a pattern with a hard edge.
 */
const fadeMask = 'radial-gradient(ellipse 75% 75% at center, black 0%, transparent 75%)'

const GlowDotGrid = ({ className }: GlowDotGridProps) => {
  return (
    <div className={cn('pointer-events-none absolute inset-0 -z-10', className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(214, 211, 204, 0.6) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: fadeMask,
          WebkitMaskImage: fadeMask,
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
