/**
 * Типы для глобальных объектов window
 */

interface Window {
  gtag?: (
    command: 'config' | 'event' | 'js' | 'set',
    targetId: string | Date,
    config?: {
      event_category?: string
      event_label?: string
      value?: number
      non_interaction?: boolean
      [key: string]: string | number | boolean | undefined
    }
  ) => void

  dataLayer?: Array<Record<string, unknown>>

  ym?: (
    counterId: string | number,
    method: 'reachGoal' | 'hit' | 'params' | 'userParams' | 'notBounce',
    target?: string,
    params?: {
      value?: number
      [key: string]: string | number | boolean | undefined
    }
  ) => void

  ymaps?: YandexMaps
}
