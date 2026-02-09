'use client'

import { useEffect } from 'react'
import { AnalyticsEvents } from '@/lib/analytics-events'

interface PortfolioViewTrackerProps {
  projectId: string
  projectName: string
}

export function PortfolioViewTracker({ projectId, projectName }: PortfolioViewTrackerProps) {
  useEffect(() => {
    AnalyticsEvents.portfolioView(projectId)
    AnalyticsEvents.projectView(projectId, projectName)
  }, [projectId, projectName])

  return null
}
