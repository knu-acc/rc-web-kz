/**
 * Утилиты для отправки событий аналитики
 * GA4 и Яндекс.Метрика
 */

/**
 * Отправка события в Google Analytics 4
 */
export function trackGAEvent(
  eventName: string,
  params?: {
    category?: string
    label?: string
    value?: number
    [key: string]: string | number | boolean | undefined
  }
) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', eventName, {
    event_category: params?.category || 'general',
    event_label: params?.label,
    value: params?.value,
    ...params,
  })
}

/**
 * Отправка цели в Яндекс.Метрику
 */
export function trackYandexGoal(
  goalName: string,
  params?: {
    value?: number
    [key: string]: string | number | boolean | undefined
  }
) {
  if (
    typeof window === 'undefined' ||
    !window.ym ||
    !process.env.NEXT_PUBLIC_YANDEX_METRICA_ID
  ) {
    return
  }

  window.ym(process.env.NEXT_PUBLIC_YANDEX_METRICA_ID, 'reachGoal', goalName, params)
}

/**
 * Отправка события в обе системы аналитики
 */
export function trackEvent(
  eventName: string,
  params?: {
    category?: string
    label?: string
    value?: number
    [key: string]: string | number | boolean | undefined
  }
) {
  trackGAEvent(eventName, params)
  trackYandexGoal(eventName, params)
}

/**
 * Предопределённые события
 */
export const AnalyticsEvents = {
  // Конверсии
  contactFormSubmit: () => trackEvent('contact_form_submit', { category: 'Conversion' }),
  whatsappClick: () => trackEvent('whatsapp_click', { category: 'Conversion' }),
  phoneClick: () => trackEvent('phone_click', { category: 'Conversion' }),
  emailClick: () => trackEvent('email_click', { category: 'Conversion' }),

  // Навигация
  portfolioView: (projectId: string) =>
    trackEvent('portfolio_view', { category: 'Engagement', label: projectId }),
  blogView: (slug: string) =>
    trackEvent('blog_view', { category: 'Engagement', label: slug }),
  serviceView: (serviceSlug: string) =>
    trackEvent('service_view', { category: 'Engagement', label: serviceSlug }),

  // Взаимодействия
  calculatorUse: (finalPrice: number) =>
    trackEvent('calculator_use', { category: 'Engagement', value: finalPrice }),
  portfolioFilter: (category: string) =>
    trackEvent('portfolio_filter', { category: 'Engagement', label: category }),
  reviewsFilter: (service: string) =>
    trackEvent('reviews_filter', { category: 'Engagement', label: service }),

  // E-commerce (для будущего использования)
  projectView: (projectId: string, projectName: string) =>
    trackEvent('view_item', {
      category: 'Ecommerce',
      item_id: projectId,
      item_name: projectName,
    }),

  // Поиск
  search: (query: string) =>
    trackEvent('search', { category: 'Engagement', search_term: query }),

  // Ошибки
  error: (errorMessage: string, errorType?: string) =>
    trackEvent('exception', {
      category: 'Error',
      description: errorMessage,
      fatal: false,
      error_type: errorType,
    }),

  // Скролл до секции
  scrollToSection: (sectionName: string) =>
    trackEvent('scroll_to_section', { category: 'Engagement', label: sectionName }),

  // Время на странице (для пользовательских метрик)
  timeOnPage: (seconds: number, page: string) =>
    trackEvent('time_on_page', { category: 'Engagement', label: page, value: seconds }),

  // Клик на внешнюю ссылку
  externalLinkClick: (url: string) =>
    trackEvent('external_link_click', { category: 'Engagement', label: url }),

  // Скачивание файла
  fileDownload: (fileName: string) =>
    trackEvent('file_download', { category: 'Engagement', label: fileName }),

  // Копирование телефона/email
  copyContact: (contactType: string) =>
    trackEvent('copy_contact', { category: 'Engagement', label: contactType }),
}
