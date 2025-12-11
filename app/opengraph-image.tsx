import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'dot'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#c8dcc4',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: '#6b8e68',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
