'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Fires once when the ref'd element first scrolls into view, then disconnects.
 * Shared by entrance-animation primitives (Reveal, CountUp) so scroll-triggered
 * "tier 2" animations don't each roll their own IntersectionObserver.
 */
export const useInView = <T extends HTMLElement>(options?: IntersectionObserverInit) => {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px', ...options },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}
