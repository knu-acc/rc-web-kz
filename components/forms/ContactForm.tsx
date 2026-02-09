'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { AnalyticsEvents } from '@/lib/analytics-events'

interface ContactFormProps {
  className?: string
  showTitle?: boolean
}

export function ContactForm({ className = '', showTitle = true }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur', // Валидация при потере фокуса
  })

  // Honeypot поле (скрытое)
  const websiteValue = watch('website')

  const onSubmit = async (data: ContactFormData) => {
    // Проверка honeypot
    if (websiteValue) {
      setSubmitStatus('error')
      setSubmitMessage('Обнаружена подозрительная активность')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const message = `Здравствуйте! Меня зовут ${data.name}.\n\n${data.message}\n\nТелефон: ${data.phone}\nEmail: ${data.email}`
      const whatsappUrl = `${SOCIAL_LINKS.whatsapp}&text=${encodeURIComponent(message)}`
      
      // Открываем WhatsApp
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

      // Отправка события в аналитику
      AnalyticsEvents.contactFormSubmit()

      setSubmitStatus('success')
      setSubmitMessage('Спасибо! Мы свяжемся с вами в ближайшее время.')
      reset()
      
      // Скрываем сообщение через 5 секунд
      setTimeout(() => {
        setSubmitStatus('idle')
        setSubmitMessage('')
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Произошла ошибка. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={className}
      noValidate
      aria-label="Контактная форма"
    >
      {showTitle && (
        <h2 className="text-2xl font-bold mb-6 text-secondary-900 dark:text-white">
          Свяжитесь с нами
        </h2>
      )}

      {/* Honeypot поле (скрытое) */}
      <input
        type="text"
        {...register('website')}
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px' }}
        aria-hidden="true"
      />

      {/* Имя */}
      <div className="mb-5">
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-secondary-700 dark:text-secondary-300">
          Ваше имя <span className="text-red-500" aria-label="обязательное поле">*</span>
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          autoComplete="name"
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.name
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-secondary-200 dark:border-secondary-700 focus:border-primary-500 focus:ring-primary-500'
          } bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
          placeholder="Иван Иванов"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Телефон */}
      <div className="mb-5">
        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-secondary-700 dark:text-secondary-300">
          Телефон <span className="text-red-500" aria-label="обязательное поле">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          autoComplete="tel"
          inputMode="tel"
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.phone
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-secondary-200 dark:border-secondary-700 focus:border-primary-500 focus:ring-primary-500'
          } bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
          placeholder="+7 777 123 45 67"
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="mb-5">
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-secondary-700 dark:text-secondary-300">
          Email <span className="text-red-500" aria-label="обязательное поле">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          autoComplete="email"
          inputMode="email"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.email
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-secondary-200 dark:border-secondary-700 focus:border-primary-500 focus:ring-primary-500'
          } bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
          placeholder="ivan@example.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Сообщение */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-secondary-700 dark:text-secondary-300">
          Сообщение <span className="text-red-500" aria-label="обязательное поле">*</span>
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.message
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-secondary-200 dark:border-secondary-700 focus:border-primary-500 focus:ring-primary-500'
          } bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 transition-colors resize-none`}
          placeholder="Расскажите о вашем проекте..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Статус отправки */}
      {submitStatus !== 'idle' && (
        <div
          className={`mb-4 p-4 rounded-xl ${
            submitStatus === 'success'
              ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
              : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
          }`}
          role="alert"
          aria-live="polite"
        >
          <p
            className={`text-sm font-medium ${
              submitStatus === 'success'
                ? 'text-green-800 dark:text-green-200'
                : 'text-red-800 dark:text-red-200'
            }`}
          >
            {submitMessage}
          </p>
        </div>
      )}

      {/* Кнопка отправки */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Отправка...
          </span>
        ) : (
          'Отправить заявку'
        )}
      </button>

      <p className="mt-4 text-xs text-secondary-500 dark:text-secondary-400 text-center">
        Нажимая кнопку, вы соглашаетесь с{' '}
        <a href="/privacy" className="underline hover:text-primary-600 dark:hover:text-primary-400">
          политикой конфиденциальности
        </a>
      </p>
    </form>
  )
}
