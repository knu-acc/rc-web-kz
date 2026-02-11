import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Форматирование номера телефона для отображения
 * +77789492910 -> +7 (778) 949-29-10
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 11 && cleaned.startsWith('7')) {
    return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9, 11)}`
  }
  return phone
}

/**
 * Создание слага из текста
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim()
}

/**
 * Ограничение частоты вызовов функции
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Проверка видимости элемента в viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect()
  return (
    rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom > 0
  )
}

/**
 * Генерация WhatsApp URL с динамическим текстом и текущим URL страницы
 */
export function getWhatsAppUrl(currentPath?: string): string {
  const baseUrl = 'https://rc-web.kz'
  const fullUrl = currentPath ? `${baseUrl}${currentPath}` : baseUrl
  const message = encodeURIComponent(`Здравствуйте, я пишу с сайта ${fullUrl}`)
  return `https://wa.me/+77789492910?text=${message}`
}
