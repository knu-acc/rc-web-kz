'use client'

import { useEffect } from 'react'

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean
  value: number
}

interface EventEntry extends PerformanceEntry {
  processingStart: number
}

export function CoreWebVitals() {
  useEffect(() => {
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') return

    const observers: PerformanceObserver[] = []

    const report = (name: string, value: number, id: string) => {
      const roundedValue = Math.round(name === 'CLS' ? value * 1000 : value)
      if (window.gtag) {
        window.gtag('event', name, {
          event_category: 'Web Vitals',
          value: roundedValue,
          event_label: id,
          non_interaction: true,
        })
      }
      if (window.ym && process.env.NEXT_PUBLIC_YANDEX_METRICA_ID) {
        window.ym(process.env.NEXT_PUBLIC_YANDEX_METRICA_ID, 'reachGoal', `webvitals_${name}`, {
          value: roundedValue,
        })
      }
    }

    try {
      // CLS
      let clsValue = 0
      let sessionValue = 0
      let sessionEntries: PerformanceEntry[] = []
      const clsObs = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const lsEntry = entry as LayoutShiftEntry
          if (!lsEntry.hadRecentInput) {
            const last = sessionEntries[sessionEntries.length - 1]
            const first = sessionEntries[0]
            if (
              sessionValue &&
              last &&
              first &&
              lsEntry.startTime - last.startTime < 1000 &&
              lsEntry.startTime - first.startTime < 5000
            ) {
              sessionValue += lsEntry.value
              sessionEntries.push(entry)
            } else {
              sessionValue = lsEntry.value
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
          const eventEntry = entry as EventEntry
          const delay = eventEntry.processingStart - entry.startTime
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
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  return null
}
