'use client'

import { useEffect, useRef } from 'react'
import { FocusTrap } from './FocusTrap'

interface CustomModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function CustomModal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  className = '',
}: CustomModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <FocusTrap active={isOpen}>
        <div
          ref={modalRef}
          className={`relative bg-white dark:bg-secondary-900 rounded-2xl shadow-2xl w-full ${sizeClasses[size]} max-h-[90vh] overflow-hidden animate-slide-up ${className}`}
        >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-secondary-200 dark:border-secondary-700">
            <h2 id="modal-title" className="text-xl font-bold text-secondary-900 dark:text-white">
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Закрыть модальное окно"
            >
              <svg
                className="w-5 h-5 text-secondary-600 dark:text-secondary-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">{children}</div>
        </div>
      </FocusTrap>
    </div>
  )
}
