'use client'

import { useEffect, useRef, useState, useSyncExternalStore, type PointerEvent as ReactPointerEvent } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'
import { FiPlay, FiX } from 'react-icons/fi'
import { RxDragHandleDots2 } from 'react-icons/rx'
import { cn } from '@/src/lib/utils'

export interface VideoGuideProps {
  title: string
  videoUrl: string
  poster: string
  duration: string
  link?: { label: string; href: string }
  className?: string
}

interface Frame {
  x: number
  y: number
  width: number
}

const MIN_WIDTH = 280
const DEFAULT_WIDTH = 480
// Keeps enough of the panel on screen to grab it again after dragging it away.
const GRAB_MARGIN = 96

const subscribe = () => () => {}

const clampFrame = ({ x, y, width }: Frame): Frame => {
  const maxWidth = Math.max(MIN_WIDTH, window.innerWidth - 16)
  const w = Math.min(Math.max(width, MIN_WIDTH), maxWidth)
  return {
    width: w,
    x: Math.min(Math.max(x, GRAB_MARGIN - w), window.innerWidth - GRAB_MARGIN),
    y: Math.min(Math.max(y, 8), window.innerHeight - 48),
  }
}

// Opens near the top-left, clear of the floating header, like a docked guide.
const initialFrame = (): Frame => {
  const gutter = window.innerWidth < 640 ? 16 : 24
  return clampFrame({ x: gutter, y: 88, width: Math.min(DEFAULT_WIDTH, window.innerWidth - gutter * 2) })
}

/**
 * A "watch the demo" card that opens a floating, draggable, resizable player.
 * Modelled on Cloudflare's dashboard video guide: no backdrop, so the page keeps
 * scrolling and stays clickable while the video plays.
 */
const VideoGuide = ({ title, videoUrl, poster, duration, link, className }: VideoGuideProps) => {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false)
  const [open, setOpen] = useState(false)
  const [frame, setFrame] = useState<Frame>({ x: 24, y: 88, width: DEFAULT_WIDTH })
  const videoRef = useRef<HTMLVideoElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const gesture = useRef<{ kind: 'move' | 'resize'; startX: number; startY: number; start: Frame } | null>(null)

  const show = () => {
    setFrame(initialFrame())
    setOpen(true)
    // Called inside the click so browsers allow playback with sound.
    videoRef.current?.play().catch(() => {})
  }

  const hide = () => {
    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0
    }
    setOpen(false)
    triggerRef.current?.focus()
  }

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const keepOnScreen = () => setFrame((current) => clampFrame(current))
    window.addEventListener('resize', keepOnScreen)
    return () => window.removeEventListener('resize', keepOnScreen)
  }, [open])

  const startGesture = (kind: 'move' | 'resize', event: ReactPointerEvent<HTMLElement>) => {
    if (event.button !== 0) return
    if (kind === 'move' && (event.target as HTMLElement).closest('button')) return
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    gesture.current = { kind, startX: event.clientX, startY: event.clientY, start: frame }
  }

  const moveGesture = (event: ReactPointerEvent<HTMLElement>) => {
    const active = gesture.current
    if (!active) return
    const dx = event.clientX - active.startX
    const dy = event.clientY - active.startY
    setFrame(
      clampFrame(
        active.kind === 'move'
          ? { ...active.start, x: active.start.x + dx, y: active.start.y + dy }
          : { ...active.start, width: active.start.width + dx },
      ),
    )
  }

  const endGesture = (event: ReactPointerEvent<HTMLElement>) => {
    if (!gesture.current) return
    gesture.current = null
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  // Keyboard fallback for the drag handle.
  const nudge = (event: React.KeyboardEvent) => {
    const step = event.shiftKey ? 48 : 16
    const delta = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[
      event.key
    ]
    if (!delta) return
    event.preventDefault()
    setFrame((current) => clampFrame({ ...current, x: current.x + delta[0], y: current.y + delta[1] }))
  }

  const panel = (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={title}
      onKeyDown={(event) => {
        if (event.key === 'Escape') hide()
      }}
      style={{ left: frame.x, top: frame.y, width: frame.width }}
      className={cn(
        'fixed z-[60] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_rgba(0,0,0,0.18)]',
        open ? 'flex' : 'hidden',
      )}
    >
      <div
        onPointerDown={(event) => startGesture('move', event)}
        onPointerMove={moveGesture}
        onPointerUp={endGesture}
        onPointerCancel={endGesture}
        className="flex cursor-grab touch-none select-none items-center gap-2 px-3 py-2.5 active:cursor-grabbing"
      >
        <button
          type="button"
          onKeyDown={nudge}
          aria-label="Move video. Use the arrow keys."
          className="rounded p-0.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <RxDragHandleDots2 size={16} aria-hidden="true" />
        </button>
        <span className="flex-1 truncate text-sm font-medium text-foreground">{title}</span>
        <button
          ref={closeRef}
          type="button"
          onClick={hide}
          aria-label="Close video"
          className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <FiX size={16} />
        </button>
      </div>

      <div className="px-2.5">
        <video
          ref={videoRef}
          controls
          playsInline
          preload="none"
          poster={poster}
          className="aspect-video w-full rounded-lg bg-black object-contain"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      <div className="flex items-center justify-between px-3.5 py-3">
        {link ? (
          <Link
            href={link.href}
            className="text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            {link.label} →
          </Link>
        ) : (
          <span />
        )}
        <span
          aria-hidden="true"
          onPointerDown={(event) => startGesture('resize', event)}
          onPointerMove={moveGesture}
          onPointerUp={endGesture}
          onPointerCancel={endGesture}
          className="-m-2 flex h-8 w-8 cursor-nwse-resize touch-none items-end justify-end p-2 text-muted-foreground"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M9 1 1 9M9 5 5 9" />
          </svg>
        </span>
      </div>
    </div>
  )

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={show}
        aria-expanded={open}
        className={cn(
          'group flex items-center gap-2.5 rounded-xl border border-border bg-card/95 p-1 pr-3 text-left shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md transition-transform hover:-translate-y-0.5 sm:gap-3 sm:p-1.5 sm:pr-4',
          className,
        )}
      >
        <span className="relative block h-7 w-11 shrink-0 overflow-hidden rounded-lg bg-black sm:h-10 sm:w-16">
          <Image src={poster} alt="" fill sizes="64px" className="object-cover object-top opacity-80" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/95 text-[#141413] transition-transform group-hover:scale-110 sm:h-6 sm:w-6">
              <FiPlay size={11} className="ml-0.5" fill="currentColor" aria-hidden="true" />
            </span>
          </span>
        </span>
        <span className="flex flex-col">
          <span className="text-xs font-medium text-foreground sm:text-sm">Watch the demo</span>
          <span className="hidden text-xs text-muted-foreground sm:block">{duration}</span>
        </span>
      </button>

      {/* Rendered at the body so transformed ancestors can't pin it to the card. */}
      {mounted && createPortal(panel, document.body)}
    </>
  )
}

export default VideoGuide
