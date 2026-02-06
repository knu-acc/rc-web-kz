'use client'

import { useEffect } from 'react'

export function CoreWebVitals() {
  useEffect(() => {
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') return

    const observers: PerformanceObserver[] = []

    const report = (name: string, value: number, id: string) => {
      const roundedValue = Math.round(name === 'CLS' ? value * 1000 : value)
      if ((window as any).gtag) {
        ;(window as any).gtag('event', name, {
          event_category: 'Web Vitals',
          value: roundedValue,
          event_label: id,
          non_interaction: true,
        })
      }
      if ((window as any).ym && process.env.NEXT_PUBLIC_YANDEX_METRICA_ID) {
        ;(window as any).ym(process.env.NEXT_PUBLIC_YANDEX_METRICA_ID, 'reachGoal', `webvitals_${name}`, {
          value: roundedValue,
        })
      }
    }

    try {
      // CLS
      let clsValue = 0, sessionValue = 0
      let sessionEntries: PerformanceEntry[] = []
      const clsObs = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            const last = sessionEntries[sessionEntries.length - 1]
            const first = sessionEntries[0]
            if (sessionValue && last && first &&
              (entry as any).startTime - last.startTime < 1000 &&
              (entry as any).startTime - first.startTime < 5000) {
              sessionValue += (entry as any).value
              sessionEntries.push(entry)
            } else {
              sessionValue = (entry as any).value
              sessionEntries = [entry]
            }
            if (sessionValue > clsValue) {
              clsValue = sessionValue
              report('CLS', clsValue, sessionEntries[0].startTime.toString())
            }
          }
        }
      })
      clsObs.observe({ type: 'layout-shift', buffered: true })
      observers.push(clsObs)

      // LCP
      const lcpObs = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const last = entries[entries.length - 1]
        if (last) report('LCP', last.startTime, last.startTime.toString())
      })
      lcpObs.observe({ type: 'largest-contentful-paint', buffered: true })
      observers.push(lcpObs)

      // INP
      let maxDelay = 0
      const inpObs = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const delay = (entry as any).processingStart - entry.startTime
          if (delay > maxDelay) {
            maxDelay = delay
            report('INP', maxDelay, entry.startTime.toString())
          }
        }
      })
      inpObs.observe({ type: 'event', buffered: true })
      observers.push(inpObs)
    } catch {
      // PerformanceObserver not supported
    }

    return () => {
      observers.forEach(o => o.disconnect())
    }
  }, [])

  return null
}
