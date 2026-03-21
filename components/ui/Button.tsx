import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  href?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-hover hover:shadow-glow',
  secondary: 'bg-surface-dark text-white hover:bg-black',
  outline: 'bg-transparent border-2 border-surface-dark text-surface-dark hover:bg-surface-dark hover:text-white',
  ghost: 'bg-transparent text-text-main hover:bg-border-light/50',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-10 px-5 text-sm',
  md: 'h-12 px-6 text-base',
  lg: 'h-14 px-8 text-lg',
  icon: 'h-12 w-12 p-0',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, className, children, href, ...props }, ref) => {
    const classes = clsx(
      'inline-flex items-center justify-center font-medium rounded-full',
      'transition-all duration-300 ease-bento',
      'focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/30',
      'active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap',
      variantStyles[variant],
      sizeStyles[size],
      loading && 'opacity-80 cursor-wait',
      className
    )

    if (href) {
      return (
        <a href={href} className={classes}>
          {loading && <Spinner />}
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} disabled={loading || props.disabled} {...props}>
        {loading && <Spinner />}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

function Spinner() {
  return (
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  )
}
