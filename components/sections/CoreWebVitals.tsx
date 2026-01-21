'use client'

import { useEffect } from 'react'

export function CoreWebVitals() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const reportWebVitals = (metric: any) => {
      if (process.env.NODE_ENV === 'production') {
        if ((window as any).gtag) {
          ;(window as any).gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_label: metric.id,
            non_interaction: true,
          })
        }

        if ((window as any).ym && process.env.NEXT_PUBLIC_YANDEX_METRICA_ID) {
          ;(window as any).ym(process.env.NEXT_PUBLIC_YANDEX_METRICA_ID, 'reachGoal', `webvitals_${metric.name}`, {
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          })
        }
      }
    }

    const getCLS = (onPerfEntry: (metric: any) => void) => {
      let clsValue = 0
      let clsEntries: PerformanceEntry[] = []
      let sessionValue = 0
      let sessionEntries: PerformanceEntry[] = []

      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            const firstSessionEntry = sessionEntries[0]
            const lastSessionEntry = sessionEntries[sessionEntries.length - 1]

            if (
              sessionValue &&
              (entry as any).startTime - lastSessionEntry.startTime < 1000 &&
              (entry as any).startTime - firstSessionEntry.startTime < 5000
            ) {
              sessionValue += (entry as any).value
              sessionEntries.push(entry)
            } else {
              sessionValue = (entry as any).value
              sessionEntries = [entry]
            }

            if (sessionValue > clsValue) {
              clsValue = sessionValue
              clsEntries = [...sessionEntries]
              onPerfEntry({
                name: 'CLS',
                value: clsValue,
                id: clsEntries[0].startTime.toString(),
              })
            }
          }
        }
      }).observe({ type: 'layout-shift', buffered: true })
    }

    const getLCP = (onPerfEntry: (metric: any) => void) => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]
        onPerfEntry({
          name: 'LCP',
          value: lastEntry.startTime,
          id: lastEntry.startTime.toString(),
        })
      }).observe({ type: 'largest-contentful-paint', buffered: true })
    }

    const getFID = (onPerfEntry: (metric: any) => void) => {
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          onPerfEntry({
            name: 'FID',
            value: (entry as any).processingStart - entry.startTime,
            id: entry.startTime.toString(),
          })
        }
      }).observe({ type: 'first-input', buffered: true })
    }

    const getINP = (onPerfEntry: (metric: any) => void) => {
      let maxDelay = 0
      let maxEntry: PerformanceEntry | null = null

      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const delay = (entry as any).processingStart - entry.startTime
          if (delay > maxDelay) {
            maxDelay = delay
            maxEntry = entry
          }
        }

        if (maxEntry) {
          onPerfEntry({
            name: 'INP',
            value: maxDelay,
            id: maxEntry.startTime.toString(),
          })
        }
      }).observe({ type: 'event', buffered: true })
    }

    getCLS(reportWebVitals)
    getLCP(reportWebVitals)
    getFID(reportWebVitals)
    getINP(reportWebVitals)
  }, [])

  return null
}
