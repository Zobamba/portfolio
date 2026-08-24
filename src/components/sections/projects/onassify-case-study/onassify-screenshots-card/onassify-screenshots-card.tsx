'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi'
import Card from '@/src/components/ui/card/card'
import { productScreenshotsSection, productScreenshots } from '@/src/data/onassify-case-study'

const OnassifyScreenshotsCard = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const isOpen = activeIndex !== null

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null)
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i === null ? i : (i + 1) % productScreenshots.length))
      if (e.key === 'ArrowLeft')
        setActiveIndex((i) => (i === null ? i : (i - 1 + productScreenshots.length) % productScreenshots.length))
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  const active = activeIndex !== null ? productScreenshots[activeIndex] : null

  return (
    <Card className="p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <productScreenshotsSection.icon size={17} />
        </span>
        <h2 className="font-semibold text-foreground">{productScreenshotsSection.title}</h2>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {productScreenshots.map((shot, index) => (
          <button
            key={shot.label}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group overflow-hidden rounded-lg border border-border text-center"
          >
            <div className="relative aspect-[4/3]" style={{ background: shot.gradient }}>
              <Image
                src={shot.src}
                alt={shot.label}
                fill
                sizes="(min-width: 1024px) 220px, 45vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/40 group-hover:opacity-100">
                <FiZoomIn className="text-white" size={20} />
              </div>
            </div>
            <p className="px-2 py-1.5 text-xs text-center font-semibold text-muted-foreground">{shot.label}</p>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close preview"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-black/60"
          >
            <FiX size={18} />
          </button>

          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((i) => (i === null ? i : (i - 1 + productScreenshots.length) % productScreenshots.length))
            }}
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-black/60 sm:left-4"
          >
            <FiChevronLeft size={20} />
          </button>

          <button
            type="button"
            aria-label="Next screenshot"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((i) => (i === null ? i : (i + 1) % productScreenshots.length))
            }}
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-black/60 sm:right-4"
          >
            <FiChevronRight size={20} />
          </button>

          <div
            className="relative flex max-h-full max-w-4xl flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[80vh] w-full overflow-auto rounded-lg border border-white/10">
              <Image
                src={active.src}
                alt={active.label}
                width={1600}
                height={1200}
                className="h-auto w-full"
                priority
              />
            </div>
            <p className="text-sm text-white/80">
              {active.label}
              <span className="ml-2 text-white/40">
                {(activeIndex ?? 0) + 1} / {productScreenshots.length}
              </span>
            </p>
          </div>
        </div>
      )}
    </Card>
  )
}

export default OnassifyScreenshotsCard
