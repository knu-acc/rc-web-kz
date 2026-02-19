'use client'

import { ReactNode } from 'react'

interface FormFieldProps {
  label: string
  htmlFor: string
  required?: boolean
  error?: string
  children: ReactNode
  hint?: string
  className?: string
}

export function FormField({
  label,
  htmlFor,
  required = false,
  error,
  children,
  hint,
  className = '',
}: FormFieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1" aria-label="обязательное поле">*</span>}
      </label>
      {children}
      {hint && !error && (
        <p className="mt-1 text-xs text-secondary-500 dark:text-secondary-400" id={`${htmlFor}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p
          className="mt-1 text-sm text-red-600 dark:text-red-400"
          id={`${htmlFor}-error`}
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  )
}
