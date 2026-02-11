'use client'

import { usePathname } from 'next/navigation'
import { getWhatsAppUrl } from '@/lib/utils'

interface WhatsAppLinkProps {
  children: React.ReactNode
  className?: string
  ariaLabel?: string
  [key: string]: unknown
}

export function WhatsAppLink({ children, className, ariaLabel, ...props }: WhatsAppLinkProps) {
  const pathname = usePathname()
  const whatsappUrl = getWhatsAppUrl(pathname)

  return (
    <a
      href={whatsappUrl}
      className={className}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  )
}
