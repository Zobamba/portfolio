import { about } from '@/src/data/about'
import Avatar from '@/src/components/ui/avatar/avatar'

const ProfilePortrait = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:items-end">
      <div className="relative w-fit">
        <div
          className="absolute -left-28 -top-16 h-56 w-32 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(rgba(214, 211, 204, 0.6) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
            maskImage:
              'radial-gradient(ellipse 100% 100% at 100% 100%, black 20%, transparent 90%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 100% 100% at 100% 100%, black 40%, transparent 90%)',
          }}
        />
        <div className="relative rounded-full bg-primary p-[3px]">
          <div className="rounded-full bg-background p-1">
            <Avatar src={about.image} alt={about.name} size={185} />
          </div>
        </div>

        {about.availableForWork && (
          <div className="absolute -bottom-8 left-1/2 flex w-fit -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-sm border border-border bg-background shadow shadow-accent shadow-sm px-4 py-3">
            <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">Available for work</p>
              <p className="text-xs text-muted-foreground">{about.remoteNote}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfilePortrait
