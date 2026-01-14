import { ImageResponse } from 'next/og'
import { SITE_CONFIG } from '@/lib/constants'

export const dynamic = 'force-static'

export const alt = SITE_CONFIG.title
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
          fontSize: 60,
          background: 'linear-gradient(to bottom right, #5B58C3, #6D6AD4)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 'bold', marginBottom: 20 }}>
          {SITE_CONFIG.name}
        </div>
        <div style={{ fontSize: 40 }}>
          Создание сайтов в Алматы
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
