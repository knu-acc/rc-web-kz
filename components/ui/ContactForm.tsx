'use client'

import { useState, FormEvent } from 'react'
import {
  validateName,
  validatePhone,
  validateEmail,
  validateMessage,
  applyPhoneMask,
} from '@/lib/form-validation'
import { KeyboardNavigation } from './KeyboardNavigation'
import { FormField } from './FormField'

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [formStartTime] = useState(Date.now())
  const [honeypot, setHoneypot] = useState('')
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateForm = (): boolean => {
    const errors: FormErrors = {}
    
    const nameError = validateName(formData.name)
    if (nameError) errors.name = nameError
    
    const phoneError = validatePhone(formData.phone)
    if (phoneError) errors.phone = phoneError
    
    if (formData.email) {
      const emailError = validateEmail(formData.email)
      if (emailError) errors.email = emailError
    }
    
    if (formData.message) {
      const messageError = validateMessage(formData.message)
      if (messageError) errors.message = messageError
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleBlur = (field: keyof FormData) => {
    setTouched({ ...touched, [field]: true })
    
    // Валидация при потере фокуса
    const errors: FormErrors = { ...formErrors }
    
    if (field === 'name') {
      const error = validateName(formData.name)
      errors.name = error || undefined
    } else if (field === 'phone') {
      const error = validatePhone(formData.phone)
      errors.phone = error || undefined
    } else if (field === 'email' && formData.email) {
      const error = validateEmail(formData.email)
      errors.email = error || undefined
    } else if (field === 'message' && formData.message) {
      const error = validateMessage(formData.message)
      errors.message = error || undefined
    }
    
    setFormErrors(errors)
  }

  const handlePhoneChange = (value: string) => {
    const masked = applyPhoneMask(value)
    setFormData({ ...formData, phone: masked })
    // Очищаем ошибку при изменении
    if (formErrors.phone) {
      setFormErrors({ ...formErrors, phone: undefined })
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    // Защита от спама: проверка honeypot поля
    if (honeypot) {
      return // Бот заполнил honeypot - игнорируем
    }
    
    // Защита от спама: проверка времени заполнения (минимум 3 секунды)
    const fillTime = Date.now() - formStartTime
    if (fillTime < 3000) {
      setError('Пожалуйста, заполните форму внимательнее.')
      return
    }
    
    // Валидация формы
    if (!validateForm()) {
      setError('Пожалуйста, исправьте ошибки в форме.')
      return
    }
    
    setIsSubmitting(true)
    setError('')

    try {
      // Netlify Forms — отправка через стандартный POST
      const formBody = new URLSearchParams()
      formBody.append('form-name', 'contact')
      formBody.append('name', formData.name)
      formBody.append('phone', formData.phone)
      formBody.append('email', formData.email)
      formBody.append('service', formData.service)
      formBody.append('message', formData.message)

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        setError('Произошла ошибка. Попробуйте связаться через WhatsApp.')
      }
    } catch {
      setError('Произошла ошибка. Попробуйте связаться через WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12 bg-secondary-50 dark:bg-secondary-800/50 rounded-2xl border border-secondary-200 dark:border-secondary-700">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold mb-2 text-secondary-900 dark:text-white">Заявка отправлена!</h3>
        <p className="text-secondary-600 dark:text-secondary-300">
          Мы свяжемся с вами в течение 15 минут в рабочее время
        </p>
      </div>
    )
  }

  return (
    <>
      {/* Hidden form for Netlify detection */}
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="tel" name="phone" />
        <input type="email" name="email" />
        <select name="service"><option value=""></option></select>
        <textarea name="message"></textarea>
      </form>

      <KeyboardNavigation>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-secondary-50 dark:bg-secondary-800/50 rounded-2xl p-8 border border-secondary-200 dark:border-secondary-700"
          noValidate
        >
        {/* Honeypot поле для защиты от спама - скрыто от пользователей */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          className="sr-only"
          aria-hidden="true"
        />
        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            label="Ваше имя"
            htmlFor="name"
            required
            error={touched.name ? formErrors.name : undefined}
          >
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value })
                if (formErrors.name) {
                  setFormErrors({ ...formErrors, name: undefined })
                }
              }}
              onBlur={() => handleBlur('name')}
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all min-h-[48px] text-base ${
                formErrors.name && touched.name
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-secondary-200 dark:border-secondary-600 focus:border-primary-500'
              } bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              placeholder="Как вас зовут?"
              autoComplete="name"
              aria-invalid={formErrors.name && touched.name ? 'true' : 'false'}
            />
          </FormField>
          <FormField
            label="Телефон"
            htmlFor="phone"
            required
            error={touched.phone ? formErrors.phone : undefined}
          >
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              onBlur={() => handleBlur('phone')}
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all min-h-[48px] text-base ${
                formErrors.phone && touched.phone
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-secondary-200 dark:border-secondary-600 focus:border-primary-500'
              } bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              placeholder="+7 (___) ___-__-__"
              autoComplete="tel"
              inputMode="tel"
              aria-invalid={formErrors.phone && touched.phone ? 'true' : 'false'}
            />
          </FormField>
        </div>

        <FormField
          label="Email"
          htmlFor="email"
          error={touched.email ? formErrors.email : undefined}
          hint="Необязательное поле"
        >
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value })
              if (formErrors.email) {
                setFormErrors({ ...formErrors, email: undefined })
              }
            }}
            onBlur={() => handleBlur('email')}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all min-h-[48px] text-base ${
              formErrors.email && touched.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-secondary-200 dark:border-secondary-600 focus:border-primary-500'
            } bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
            placeholder="your@email.com"
            autoComplete="email"
            inputMode="email"
            aria-invalid={formErrors.email && touched.email ? 'true' : 'false'}
          />
        </FormField>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
            Какая услуга интересует?
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 dark:border-secondary-600 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          >
            <option value="">Выберите услугу</option>
            <option value="landing">Landing Page</option>
            <option value="corporate">Корпоративный сайт</option>
            <option value="store">Интернет-магазин</option>
            <option value="tilda">Сайт на Tilda</option>
            <option value="seo">SEO-оптимизация</option>
            <option value="design">Веб-дизайн</option>
            <option value="ads">Реклама сайта</option>
            <option value="other">Другое</option>
          </select>
        </div>

        <FormField
          label="Сообщение"
          htmlFor="message"
          error={touched.message ? formErrors.message : undefined}
          hint="Необязательное поле"
        >
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value })
              if (formErrors.message) {
                setFormErrors({ ...formErrors, message: undefined })
              }
            }}
            onBlur={() => handleBlur('message')}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all resize-none min-h-[120px] text-base ${
              formErrors.message && touched.message
                ? 'border-red-500 focus:ring-red-500'
                : 'border-secondary-200 dark:border-secondary-600 focus:border-primary-500'
            } bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
            placeholder="Расскажите о вашем проекте..."
            aria-invalid={formErrors.message && touched.message ? 'true' : 'false'}
          />
        </FormField>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
        </button>

        <p className="text-xs text-secondary-400 text-center">
          Нажимая кнопку, вы соглашаетесь с{' '}
          <a href="/privacy" className="underline hover:text-secondary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded">политикой конфиденциальности</a>
        </p>
      </form>
      </KeyboardNavigation>
    </>
  )
}
