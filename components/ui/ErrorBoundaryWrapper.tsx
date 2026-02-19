'use client'

import { ErrorBoundary } from './ErrorBoundary'

interface ErrorBoundaryWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function ErrorBoundaryWrapper({ children, fallback }: ErrorBoundaryWrapperProps) {
  return <ErrorBoundary fallback={fallback}>{children}</ErrorBoundary>
}
