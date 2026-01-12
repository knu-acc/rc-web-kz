import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'telegram'
  children: ReactNode
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    whatsapp: 'btn-whatsapp',
    telegram: 'btn-telegram',
  }

  return (
    <button className={cn(variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
