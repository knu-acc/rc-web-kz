'use client'

import { useEffect } from 'react'
import { AnalyticsEvents } from '@/lib/analytics-events'

interface BlogViewTrackerProps {
  slug: string
}

export function BlogViewTracker({ slug }: BlogViewTrackerProps) {
  useEffect(() => {
    AnalyticsEvents.blogView(slug)
  }, [slug])

  return null
}
