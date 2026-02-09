/**
 * Типы для Яндекс.Метрики
 */

interface YandexMetrika {
  (
    counterId: string | number,
    method: 'reachGoal' | 'hit' | 'params' | 'userParams' | 'notBounce',
    target?: string,
    params?: {
      value?: number
      [key: string]: string | number | boolean | undefined
    }
  ): void

  a?: unknown[]
  c?: unknown[]
  l?: number
  q?: unknown[]
  w?: Window
}

declare const ym: YandexMetrika
