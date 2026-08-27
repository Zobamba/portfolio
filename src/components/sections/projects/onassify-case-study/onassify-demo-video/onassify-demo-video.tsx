import { demoVideo } from '@/src/data/onassify-case-study'

// Framed like the hero graphic's laptop screen — same graphite bezel, upright and un-tilted
const OnassifyDemoVideo = () => {
  return (
    <div id="demo" className="scroll-mt-24">
      <div
        className="relative rounded-[9px] border-[5px] p-[4px] shadow-elevated"
        style={{ borderColor: '#111110', background: '#111110' }}
      >
        <span className="absolute left-1/2 top-0 z-10 h-[6px] w-[8%] -translate-x-1/2 rounded-b-[3px] bg-[#111110]" />

        <div
          className="relative aspect-video w-full overflow-hidden rounded-[4px]"
          style={{ backgroundColor: '#18181B' }}
        >
          <video
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-fill"
            aria-label={demoVideo.title}
          >
            <source src={demoVideo.videoUrl} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default OnassifyDemoVideo
