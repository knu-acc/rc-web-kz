'use client'

import { useCallback } from 'react'
import Script from 'next/script'
import { SITE_CONFIG } from '@/lib/constants'

function initMap() {
  if (!(window as any).ymaps) return
  ;(window as any).ymaps.ready(() => {
    const map = new (window as any).ymaps.Map('yandex-map', {
      center: [parseFloat(SITE_CONFIG.geo.latitude), parseFloat(SITE_CONFIG.geo.longitude)],
      zoom: 12,
    })
    map.geoObjects.add(
      new (window as any).ymaps.Placemark(
        [parseFloat(SITE_CONFIG.geo.latitude), parseFloat(SITE_CONFIG.geo.longitude)],
        { balloonContent: SITE_CONFIG.name }
      )
    )
  })
}

export function YandexMap() {
  const handleLoad = useCallback(() => initMap(), [])

  return (
    <>
      <Script
        src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"
        strategy="lazyOnload"
        onLoad={handleLoad}
      />
      <div id="yandex-map" role="img" aria-label="Карта расположения офиса RC-WEB в Алматы" style={{ width: '100%', height: '400px' }} />
    </>
  )
}
