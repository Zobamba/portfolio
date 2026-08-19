'use client'

import { useEffect, useState } from 'react'
import { useInView } from '@/src/lib/use-in-view'

interface CountUpProps {
  /** e.g. "20+", "100%", "5+" — leading digits are counted up, the rest is kept as a static suffix. */
  value: string
  duration?: number
  className?: string
}

const easeOutQuad = (t: number) => t * (2 - t)

const CountUp = ({ value, duration = 800, className }: CountUpProps) => {
  const { ref, inView } = useInView<HTMLSpanElement>()
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : null
  const suffix = match ? match[2] : ''
  const [display, setDisplay] = useState(target === null ? value : '0')

  useEffect(() => {
    if (!inView || target === null) return

    let frame: number
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(String(Math.round(easeOutQuad(progress) * target)))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, duration])

  return (
    <span ref={ref} className={className}>
      {target === null ? value : `${display}${suffix}`}
    </span>
  )
}

export default CountUp
