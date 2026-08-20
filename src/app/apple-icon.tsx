import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

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
          background: '#010a13',
          color: '#3c83f6',
          fontSize: 110,
          fontWeight: 900,
          textShadow: '2px 0 0 #3c83f6, -2px 0 0 #3c83f6, 0 2px 0 #3c83f6, 0 -2px 0 #3c83f6',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        O
      </div>
    ),
    { ...size },
  )
}
