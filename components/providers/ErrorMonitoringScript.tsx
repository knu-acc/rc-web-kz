'use client'

import { useEffect } from 'react'
import { initErrorMonitoring } from '@/lib/error-monitoring'

export function ErrorMonitoringScript() {
  useEffect(() => {
    initErrorMonitoring()
  }, [])

  return null
}
