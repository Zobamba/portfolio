import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 7,
          background: '#010a13',
          color: '#3c83f6',
          fontSize: 21,
          fontWeight: 900,
          textShadow: '0.6px 0 0 #3c83f6, -0.6px 0 0 #3c83f6, 0 0.6px 0 #3c83f6, 0 -0.6px 0 #3c83f6',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        O
      </div>
    ),
    { ...size },
  )
}
