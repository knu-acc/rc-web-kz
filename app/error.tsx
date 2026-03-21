'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { BentoCard } from '@/components/ui/BentoCard'
import { Button } from '@/components/ui/Button'
import { AlertTriangle, RotateCcw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-canvas px-4">
      <div className="max-w-md w-full">
        <BentoCard className="p-10 items-center text-center">
          <div className="w-16 h-16 bg-red-100 rounded-4xl flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>

          <h1 className="text-3xl font-heading font-bold text-text-main">
            Что-то пошло не так
          </h1>

          <p className="text-text-muted">
            Произошла непредвиденная ошибка
          </p>

          {error.message && process.env.NODE_ENV === 'development' && (
            <p className="text-sm text-red-600 p-3 bg-red-50 rounded-2xl w-full">
              {error.message}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
            <Button onClick={reset} className="flex-1">
              <RotateCcw className="w-4 h-4 mr-2" /> Попробовать снова
            </Button>
            <Button variant="outline" href="/" className="flex-1">
              <Home className="w-4 h-4 mr-2" /> На главную
            </Button>
          </div>
        </BentoCard>

        <div className="mt-6 text-center">
          <p className="text-sm text-text-muted mb-2">
            Если проблема повторяется, свяжитесь с нами:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="text-brand hover:underline font-medium text-sm"
            >
              {SITE_CONFIG.phone}
            </a>
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline font-medium text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
