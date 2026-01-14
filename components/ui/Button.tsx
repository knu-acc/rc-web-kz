import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

    const variantClasses = {
      primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
      secondary: "bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus:ring-secondary-500",
      outline: "border border-secondary-300 bg-white text-secondary-700 hover:bg-secondary-50 focus:ring-primary-500",
      ghost: "text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 focus:ring-primary-500"
    }

    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm rounded-md",
      md: "px-4 py-2 text-sm rounded-lg",
      lg: "px-6 py-3 text-base rounded-lg"
    }

    return (
      <button
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
