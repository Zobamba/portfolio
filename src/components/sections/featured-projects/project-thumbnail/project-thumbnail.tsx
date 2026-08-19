import { cn } from '@/src/lib/utils'

export type ThumbnailVariant = 'dashboard' | 'chat' | 'banking' | 'restaurant' | 'wheel' | 'task-board' | 'lms'

interface ProjectThumbnailProps {
  variant: ThumbnailVariant
  className?: string
}

const ProjectThumbnail = ({ variant, className }: ProjectThumbnailProps) => {
  if (variant === 'dashboard') {
    return (
      <div className={cn('relative h-full w-full overflow-hidden bg-slate-100', className)}>
        <div className="absolute left-5 top-5 h-2 w-20 rounded-full bg-slate-300" />
        <div className="absolute left-5 top-11 flex gap-2">
          <div className="h-11 w-16 rounded-md bg-white shadow-sm" />
          <div className="h-11 w-16 rounded-md bg-white shadow-sm" />
          <div className="h-11 w-16 rounded-md bg-white shadow-sm" />
        </div>
        <div className="absolute left-5 top-[4.5rem] flex flex-col gap-1.5">
          <div className="h-1.5 w-24 rounded-full bg-slate-200" />
          <div className="h-1.5 w-16 rounded-full bg-slate-200" />
        </div>
        <div
          className="absolute right-8 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full"
          style={{
            background: 'conic-gradient(#3B82F6 0deg 250deg, #E2E8F0 250deg 360deg)',
          }}
        >
          <div className="absolute inset-[6px] rounded-full bg-slate-100" />
        </div>
      </div>
    )
  }

  if (variant === 'chat') {
    return (
      <div className={cn('flex h-full w-full overflow-hidden bg-slate-950', className)}>
        <div className="relative w-3/5 bg-gradient-to-br from-slate-800 to-slate-950">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-slate-700/80" />
          </div>
          <div className="absolute bottom-3 left-3 h-1.5 w-10 rounded-full bg-white/30" />
        </div>
        <div className="flex w-2/5 flex-col justify-end gap-2 p-3">
          <div className="ml-auto h-3 w-4/5 rounded-full bg-[#3B82F6]/70" />
          <div className="h-3 w-full rounded-full bg-slate-700" />
          <div className="ml-auto h-3 w-2/3 rounded-full bg-[#3B82F6]/70" />
          <div className="h-3 w-5/6 rounded-full bg-slate-700" />
          <div className="ml-auto h-3 w-1/2 rounded-full bg-[#3B82F6]/70" />
        </div>
      </div>
    )
  }

  if (variant === 'banking') {
    return (
      <div className={cn('relative h-full w-full overflow-hidden bg-slate-100', className)}>
        <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-200/70" />
        <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-indigo-200/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-24 overflow-hidden rounded-lg bg-white shadow-md">
            <div className="h-5 w-full bg-gradient-to-r from-[#3B82F6] to-[#6366F1]" />
            <div className="flex flex-col gap-1.5 p-2">
              <div className="h-1.5 w-14 rounded-full bg-slate-200" />
              <div className="h-1.5 w-10 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'restaurant') {
    return (
      <div className={cn('relative h-full w-full overflow-hidden bg-slate-950', className)}>
        <div className="absolute left-4 top-4 text-xs font-bold text-white">Delic.</div>
        <div className="absolute left-4 right-4 top-11 h-16 overflow-hidden rounded-lg bg-gradient-to-br from-orange-500 to-red-600" />
        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1.5">
          <div className="h-1.5 w-3/4 rounded-full bg-white/25" />
          <div className="h-1.5 w-1/2 rounded-full bg-white/15" />
        </div>
        <div className="absolute bottom-4 right-4 h-6 w-6 rounded-full bg-orange-500/80" />
      </div>
    )
  }

  if (variant === 'wheel') {
    return (
      <div className={cn('relative h-full w-full overflow-hidden bg-slate-950', className)}>
        <div className="absolute left-6 top-4 h-1 w-1 rounded-full bg-cyan-400" />
        <div className="absolute right-8 top-6 h-1.5 w-1.5 rounded-full bg-pink-400" />
        <div className="absolute bottom-6 left-8 h-1 w-1 rounded-full bg-yellow-400" />
        <div className="absolute right-6 bottom-4 h-1.5 w-1.5 rounded-full bg-purple-400" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="h-20 w-20 rounded-full"
            style={{
              background:
                'conic-gradient(#22D3EE 0deg 90deg, #A855F7 90deg 180deg, #EC4899 180deg 270deg, #3B82F6 270deg 360deg)',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-7 w-7 rounded-full bg-slate-950" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'lms') {
    return (
      <div className={cn('relative h-full w-full overflow-hidden bg-slate-100', className)}>
        <div className="absolute left-5 top-5 h-2 w-16 rounded-full bg-slate-300" />
        <div className="absolute left-5 top-11 flex w-1/2 flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
            <div className="h-1.5 flex-1 rounded-full bg-slate-200" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
            <div className="h-1.5 flex-1 rounded-full bg-slate-200" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 shrink-0 rounded-full border border-slate-300" />
            <div className="h-1.5 flex-1 rounded-full bg-slate-200" />
          </div>
        </div>
        <div
          className="absolute right-8 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full"
          style={{ background: 'conic-gradient(#10B981 0deg 234deg, #E2E8F0 234deg 360deg)' }}
        >
          <div className="absolute inset-[6px] flex items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-emerald-600">
            65%
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('relative h-full w-full overflow-hidden bg-slate-100', className)}>
      <div className="absolute left-4 top-4 h-4 w-16 rounded-md bg-slate-800" />
      <div className="absolute bottom-4 left-4 right-4 flex h-16 items-end gap-2">
        <div className="h-1/2 flex-1 rounded-sm bg-blue-300" />
        <div className="h-3/4 flex-1 rounded-sm bg-blue-400" />
        <div className="h-1/3 flex-1 rounded-sm bg-blue-300" />
        <div className="h-full flex-1 rounded-sm bg-blue-500" />
        <div className="h-2/3 flex-1 rounded-sm bg-blue-400" />
      </div>
    </div>
  )
}

export default ProjectThumbnail
