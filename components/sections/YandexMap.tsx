'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { SITE_CONFIG } from '@/lib/constants'

export function YandexMap() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).ymaps) {
      ;(window as any).ymaps.ready(() => {
        const map = new (window as any).ymaps.Map('yandex-map', {
          center: [parseFloat(SITE_CONFIG.geo.latitude), parseFloat(SITE_CONFIG.geo.longitude)],
          zoom: 12,
        })

        const placemark = new (window as any).ymaps.Placemark(
          [parseFloat(SITE_CONFIG.geo.latitude), parseFloat(SITE_CONFIG.geo.longitude)],
          {
            balloonContent: SITE_CONFIG.name,
          }
        )

        map.geoObjects.add(placemark)
      })
    }
  }, [])

  return (
    <>
      <Script
        src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"
        strategy="lazyOnload"
        onLoad={() => {
          if ((window as any).ymaps) {
            ;(window as any).ymaps.ready(() => {
              const map = new (window as any).ymaps.Map('yandex-map', {
                center: [parseFloat(SITE_CONFIG.geo.latitude), parseFloat(SITE_CONFIG.geo.longitude)],
                zoom: 12,
              })

              const placemark = new (window as any).ymaps.Placemark(
                [parseFloat(SITE_CONFIG.geo.latitude), parseFloat(SITE_CONFIG.geo.longitude)],
                {
                  balloonContent: SITE_CONFIG.name,
                }
              )

              map.geoObjects.add(placemark)
            })
          }
        }}
      />
      <div id="yandex-map" style={{ width: '100%', height: '400px' }}></div>
    </>
  )
}
