/**
 * Типы для Google Analytics / Google Tag Manager
 */

interface Gtag {
  (
    command: 'config' | 'event' | 'js' | 'set',
    targetId: string | Date,
    config?: {
      event_category?: string
      event_label?: string
      value?: number
      non_interaction?: boolean
      send_to?: string
      [key: string]: string | number | boolean | undefined
    }
  ): void
}

declare const gtag: Gtag

interface DataLayer {
  push(args: Array<Record<string, unknown>>): void
}

declare const dataLayer: DataLayer
