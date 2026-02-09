'use client'

import { useCallback, useEffect, useState } from 'react'
import Script from 'next/script'
import { SITE_CONFIG } from '@/lib/constants'
import { almatyDistricts } from '@/data/districts'
import { portfolioItems } from '@/data/portfolio'

interface MapPlacemark {
  coordinates: [number, number]
  title: string
  description?: string
  type?: 'office' | 'project' | 'district'
}

export function YandexMap({ showProjects = false, showDistricts = false }: { showProjects?: boolean; showDistricts?: boolean }) {
  const [isLoaded, setIsLoaded] = useState(false)

  const initMap = useCallback(() => {
    if (typeof window === 'undefined' || !window.ymaps) return
    
    window.ymaps.ready(() => {
      if (!window.ymaps) return
      
      const map = new window.ymaps.Map('yandex-map', {
        center: [parseFloat(SITE_CONFIG.geo.latitude), parseFloat(SITE_CONFIG.geo.longitude)],
        zoom: showDistricts ? 11 : 12,
        controls: ['zoomControl'],
      })
      
      const placemarks: MapPlacemark[] = [
        {
          coordinates: [parseFloat(SITE_CONFIG.geo.latitude), parseFloat(SITE_CONFIG.geo.longitude)],
          title: SITE_CONFIG.name,
          description: SITE_CONFIG.address.addressLocality,
          type: 'office',
        },
      ]

      // Добавляем метки районов
      if (showDistricts) {
        almatyDistricts.forEach((district) => {
          if (district.coordinates) {
            placemarks.push({
              coordinates: [district.coordinates.latitude, district.coordinates.longitude],
              title: district.nameFull,
              description: `Работаем в ${district.nameFull}`,
              type: 'district',
            })
          }
        })
      }

      // Добавляем метки проектов (примерные координаты)
      if (showProjects && portfolioItems.length > 0) {
        // Используем координаты офиса с небольшими смещениями для демонстрации
        portfolioItems.slice(0, 5).forEach((project, index) => {
          const offset = 0.01 * (index + 1)
          placemarks.push({
            coordinates: [
              parseFloat(SITE_CONFIG.geo.latitude) + offset,
              parseFloat(SITE_CONFIG.geo.longitude) + offset,
            ],
            title: project.title,
            description: project.description,
            type: 'project',
          })
        })
      }

      // Создаём кластер для группировки меток
      const clusterer = new window.ymaps.Clusterer({
        clusterDisableClickZoom: true,
        clusterOpenBalloonOnClick: true,
      })

      placemarks.forEach((placemark) => {
        if (!window.ymaps) return
        
        const iconColor = placemark.type === 'office' 
          ? '#6366f1' 
          : placemark.type === 'district'
          ? '#10b981'
          : '#8b5cf6'

        const placemarkInstance = new window.ymaps.Placemark(
          placemark.coordinates,
          {
            balloonContentHeader: placemark.title,
            balloonContentBody: placemark.description || '',
            balloonContentFooter: placemark.type === 'project' ? `<a href="${portfolioItems.find(p => p.title === placemark.title)?.url}" target="_blank">Открыть сайт</a>` : '',
            hintContent: placemark.title,
          },
          {
            preset: `islands#${iconColor}Icon`,
            iconColor,
          }
        )

        clusterer.add(placemarkInstance)
      })

      map.geoObjects.add(clusterer)
      setIsLoaded(true)
    })
  }, [showProjects, showDistricts])

  const handleLoad = useCallback(() => {
    initMap()
  }, [initMap])

  return (
    <>
      <Script
        src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"
        strategy="lazyOnload"
        onLoad={handleLoad}
      />
      <div 
        id="yandex-map" 
        role="img" 
        aria-label="Карта расположения офиса RC-WEB в Алматы" 
        className="w-full h-[280px] sm:h-[350px] lg:h-[400px] rounded-xl overflow-hidden"
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary-100 dark:bg-secondary-800 rounded-xl" role="status" aria-live="polite">
          <div className="animate-pulse text-secondary-400">
            <span className="sr-only">Загрузка карты</span>
            <span aria-hidden="true">Загрузка карты...</span>
          </div>
        </div>
      )}
    </>
  )
}
