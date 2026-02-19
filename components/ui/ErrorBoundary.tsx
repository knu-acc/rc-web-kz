'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Логирование ошибки для мониторинга
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    // Здесь можно отправить ошибку в систему мониторинга
    // Например, Sentry, LogRocket и т.д.
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-white dark:bg-secondary-950 p-4">
            <div className="text-center max-w-md">
              <div className="text-6xl mb-4">⚠️</div>
              <h1 className="text-2xl font-bold mb-4 text-secondary-900 dark:text-white">
                Что-то пошло не так
              </h1>
              <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                Произошла ошибка при загрузке страницы. Пожалуйста, попробуйте обновить страницу.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="btn-primary"
                aria-label="Обновить страницу"
              >
                Обновить страницу
              </button>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}
