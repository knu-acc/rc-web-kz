/**
 * Утилиты для валидации форм
 */

export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  email?: boolean
  phone?: boolean
  custom?: (value: string) => string | null
}

export interface ValidationResult {
  isValid: boolean
  errors: Record<string, string>
}

/**
 * Валидация имени
 */
export function validateName(name: string): string | null {
  if (!name.trim()) {
    return 'Имя обязательно для заполнения'
  }
  if (name.trim().length < 2) {
    return 'Имя должно содержать минимум 2 символа'
  }
  if (name.trim().length > 50) {
    return 'Имя не должно превышать 50 символов'
  }
  if (!/^[а-яА-ЯёЁa-zA-Z\s-]+$/.test(name.trim())) {
    return 'Имя может содержать только буквы, пробелы и дефисы'
  }
  return null
}

/**
 * Валидация телефона
 */
export function validatePhone(phone: string): string | null {
  if (!phone.trim()) {
    return 'Телефон обязателен для заполнения'
  }
  // Удаляем все нецифровые символы для проверки
  const digitsOnly = phone.replace(/\D/g, '')
  if (digitsOnly.length < 10) {
    return 'Телефон должен содержать минимум 10 цифр'
  }
  if (digitsOnly.length > 15) {
    return 'Телефон не должен превышать 15 цифр'
  }
  // Проверка на казахстанские номера (+7, 8, или без префикса)
  if (!/^(\+?7|8)?[0-9]{10}$/.test(digitsOnly)) {
    return 'Введите корректный номер телефона'
  }
  return null
}

/**
 * Валидация email
 */
export function validateEmail(email: string): string | null {
  if (!email.trim()) {
    return null // Email не обязателен
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.trim())) {
    return 'Введите корректный email адрес'
  }
  if (email.trim().length > 100) {
    return 'Email не должен превышать 100 символов'
  }
  return null
}

/**
 * Валидация сообщения
 */
export function validateMessage(message: string): string | null {
  if (!message.trim()) {
    return null // Сообщение не обязательно
  }
  if (message.trim().length < 10) {
    return 'Сообщение должно содержать минимум 10 символов'
  }
  if (message.trim().length > 2000) {
    return 'Сообщение не должно превышать 2000 символов'
  }
  return null
}

/**
 * Универсальная валидация поля
 */
export function validateField(
  name: string,
  value: string,
  rules: ValidationRule
): string | null {
  if (rules.required && !value.trim()) {
    return 'Это поле обязательно для заполнения'
  }

  if (!value.trim() && !rules.required) {
    return null // Пустое значение допустимо для необязательных полей
  }

  if (rules.minLength && value.trim().length < rules.minLength) {
    return `Минимальная длина: ${rules.minLength} символов`
  }

  if (rules.maxLength && value.trim().length > rules.maxLength) {
    return `Максимальная длина: ${rules.maxLength} символов`
  }

  if (rules.pattern && !rules.pattern.test(value.trim())) {
    return 'Неверный формат данных'
  }

  if (rules.email) {
    return validateEmail(value)
  }

  if (rules.phone) {
    return validatePhone(value)
  }

  if (rules.custom) {
    return rules.custom(value)
  }

  return null
}

/**
 * Валидация всей формы
 */
export function validateForm(
  fields: Record<string, { value: string; rules: ValidationRule }>
): ValidationResult {
  const errors: Record<string, string> = {}

  Object.entries(fields).forEach(([fieldName, { value, rules }]) => {
    const error = validateField(fieldName, value, rules)
    if (error) {
      errors[fieldName] = error
    }
  })

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Форматирование телефона для отображения
 */
export function formatPhone(phone: string): string {
  const digitsOnly = phone.replace(/\D/g, '')
  
  if (digitsOnly.length === 11 && digitsOnly.startsWith('7')) {
    return `+7 (${digitsOnly.slice(1, 4)}) ${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7, 9)}-${digitsOnly.slice(9)}`
  }
  
  if (digitsOnly.length === 10) {
    return `+7 (${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6, 8)}-${digitsOnly.slice(8)}`
  }
  
  return phone
}

/**
 * Маска для телефона при вводе
 */
export function applyPhoneMask(value: string): string {
  const digitsOnly = value.replace(/\D/g, '')
  
  if (digitsOnly.length === 0) return ''
  
  if (digitsOnly.length <= 1) {
    return digitsOnly.startsWith('8') ? '8' : `+7`
  }
  
  if (digitsOnly.length <= 4) {
    return `+7 (${digitsOnly.slice(1)}`
  }
  
  if (digitsOnly.length <= 7) {
    return `+7 (${digitsOnly.slice(1, 4)}) ${digitsOnly.slice(4)}`
  }
  
  if (digitsOnly.length <= 9) {
    return `+7 (${digitsOnly.slice(1, 4)}) ${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7)}`
  }
  
  return `+7 (${digitsOnly.slice(1, 4)}) ${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7, 9)}-${digitsOnly.slice(9, 11)}`
}
