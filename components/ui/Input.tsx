import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && <label className="text-sm font-medium text-text-main">{label}</label>}
        <input
          ref={ref}
          className={clsx(
            'w-full bg-surface border border-border-light rounded-full px-6 py-4 text-base text-text-main',
            'placeholder:text-text-muted transition-all duration-300',
            'hover:shadow-sm focus:border-brand focus:ring-4 focus:ring-brand/10 focus:bg-white focus:outline-none',
            error && 'border-semantic-error focus:ring-semantic-error/10',
            props.disabled && 'bg-canvas/50 text-text-muted cursor-not-allowed',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-semantic-error">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
  label?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, label, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && <label className="text-sm font-medium text-text-main">{label}</label>}
        <textarea
          ref={ref}
          className={clsx(
            'w-full bg-surface border border-border-light rounded-3xl px-6 py-4 text-base text-text-main',
            'placeholder:text-text-muted transition-all duration-300 resize-none',
            'hover:shadow-sm focus:border-brand focus:ring-4 focus:ring-brand/10 focus:bg-white focus:outline-none',
            error && 'border-semantic-error focus:ring-semantic-error/10',
            props.disabled && 'bg-canvas/50 text-text-muted cursor-not-allowed',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-semantic-error">{error}</p>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
