'use client'

import { forwardRef, InputHTMLAttributes } from 'react'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  icon?: React.ReactNode
}

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, error, hint, icon, className = '', id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
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
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400 pointer-events-none">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all text-base min-h-[48px] ${
              icon ? 'pl-12' : ''
            } ${
              error
                ? 'border-red-500 focus:ring-red-500'
                : 'border-secondary-200 dark:border-secondary-600 focus:border-primary-500'
            } bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${className}`}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
            }
            {...props}
          />
        </div>
        {hint && !error && (
          <p className="mt-1 text-xs text-secondary-500 dark:text-secondary-400" id={`${inputId}-hint`}>
            {hint}
          </p>
        )}
        {error && (
          <p
            className="mt-1 text-sm text-red-600 dark:text-red-400"
            id={`${inputId}-error`}
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

CustomInput.displayName = 'CustomInput'
