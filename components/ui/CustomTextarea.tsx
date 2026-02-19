'use client'

import { forwardRef, TextareaHTMLAttributes } from 'react'

interface CustomTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

export const CustomTextarea = forwardRef<HTMLTextAreaElement, CustomTextareaProps>(
  ({ label, error, hint, className = '', id, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
          >
            {label}
            {props.required && (
              <span className="text-red-500 ml-1" aria-label="обязательное поле">
                *
              </span>
            )}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`w-full px-4 py-3 rounded-xl border-2 transition-all text-base min-h-[120px] resize-none ${
            error
              ? 'border-red-500 focus:ring-red-500'
              : 'border-secondary-200 dark:border-secondary-600 focus:border-primary-500'
          } bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${className}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined
          }
          {...props}
        />
        {hint && !error && (
          <p className="mt-1 text-xs text-secondary-500 dark:text-secondary-400" id={`${textareaId}-hint`}>
            {hint}
          </p>
        )}
        {error && (
          <p
            className="mt-1 text-sm text-red-600 dark:text-red-400"
            id={`${textareaId}-error`}
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

CustomTextarea.displayName = 'CustomTextarea'
