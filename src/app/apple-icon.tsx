import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

// iOS rounds the corners itself, so this stays square.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          background: '#141413',
          color: '#F7F6F3',
          fontSize: 76,
          letterSpacing: -3,
        }}
      >
        OB
        <div
          style={{
            position: 'absolute',
            right: 30,
            bottom: 30,
            width: 30,
            height: 12,
            borderRadius: 6,
            background: '#34D399',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
