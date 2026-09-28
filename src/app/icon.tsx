import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

// Same ink, cream and availability-green as the "Book a call" button.
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
          position: 'relative',
          borderRadius: 8,
          background: '#141413',
          color: '#F7F6F3',
          fontSize: 15,
          letterSpacing: -0.5,
        }}
      >
        OB
        <div
          style={{
            position: 'absolute',
            right: 4,
            bottom: 4,
            width: 7,
            height: 3,
            borderRadius: 2,
            background: '#34D399',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
