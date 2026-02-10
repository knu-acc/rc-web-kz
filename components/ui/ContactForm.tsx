'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  message: string
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
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

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-secondary-50 dark:bg-secondary-800/50 rounded-2xl p-8 border border-secondary-200 dark:border-secondary-700"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
              Ваше имя *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 dark:border-secondary-600 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="Как вас зовут?"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
              Телефон *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 dark:border-secondary-600 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="+7 (___) ___-__-__"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 dark:border-secondary-600 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            placeholder="your@email.com"
          />
        </div>

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

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
            Сообщение
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-2 border-secondary-200 dark:border-secondary-600 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
            placeholder="Расскажите о вашем проекте..."
          />
        </div>

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
          <a href="/privacy" className="underline hover:text-secondary-600">политикой конфиденциальности</a>
        </p>
      </form>
    </>
  )
}
