'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'
import type { ProductScreenshot } from '@/src/data/onassify-case-study'
import MediaFrame from '@/src/components/sections/case-study/media-frame/media-frame'

interface ScreenshotGalleryProps {
  shots: ProductScreenshot[]
}

const lightboxButton =
  'absolute z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-black/60'

const ScreenshotGallery = ({ shots }: ScreenshotGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const isOpen = activeIndex !== null

  const step = (delta: number) =>
    setActiveIndex((i) => (i === null ? i : (i + delta + shots.length) % shots.length))

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null)
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i === null ? i : (i + 1) % shots.length))
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i === null ? i : (i - 1 + shots.length) % shots.length))
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, shots.length])

  const active = activeIndex !== null ? shots[activeIndex] : null

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {shots.map((shot, index) => (
          <button
            key={shot.label}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group text-left"
            aria-label={`Enlarge ${shot.label}`}
          >
            <MediaFrame>
              <Image
                src={shot.src}
                alt={shot.label}
                width={3024}
                height={1964}
                sizes="(min-width: 1040px) 500px, (min-width: 640px) 50vw, 100vw"
                className="aspect-[16/10] w-full rounded-xl object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </MediaFrame>
            <p className="mt-3 px-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
              {shot.label}
            </p>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close preview"
            onClick={() => setActiveIndex(null)}
            className={`${lightboxButton} right-4 top-4`}
          >
            <FiX size={18} />
          </button>
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            className={`${lightboxButton} left-2 top-1/2 -translate-y-1/2 sm:left-4`}
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            className={`${lightboxButton} right-2 top-1/2 -translate-y-1/2 sm:right-4`}
          >
            <FiChevronRight size={20} />
          </button>

          <div className="flex max-h-full max-w-5xl flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
            <Image
              src={active.src}
              alt={active.label}
              width={3024}
              height={1964}
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="h-auto max-h-[80vh] w-full rounded-lg object-contain"
            />
            <p className="text-sm text-white/80">
              {active.label}
              <span className="ml-2 text-white/40">
                {(activeIndex ?? 0) + 1} / {shots.length}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default ScreenshotGallery
