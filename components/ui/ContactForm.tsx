'use client'

import { useState, FormEvent } from 'react'
import { Button } from './Button'
import { Input, Textarea } from './Input'
import { Send, Check } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate() {
    const errs: Record<string, string> = {}
    if (!formData.name.trim()) errs.name = 'Введите ваше имя'
    if (!formData.phone.trim()) errs.phone = 'Введите номер телефона'
    else if (!/^[+]?[0-9\s\-()]{7,15}$/.test(formData.phone.trim())) errs.phone = 'Неверный формат номера'
    return errs
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})

    const text = `Заявка с сайта rc-web.kz\n\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nСообщение: ${formData.message || 'Не указано'}`
    const waUrl = `https://wa.me/${SITE_CONFIG.phone}?text=${encodeURIComponent(text)}`
    window.open(waUrl, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <Input
        placeholder="Ваше имя"
        value={formData.name}
        onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
        error={errors.name}
        required
      />
      <Input
        type="tel"
        placeholder="+7 (___) ___-__-__"
        value={formData.phone}
        onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
        error={errors.phone}
        required
      />
      <Textarea
        placeholder="Расскажите о вашем проекте..."
        value={formData.message}
        onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
        rows={4}
      />
      <Button type="submit" size="lg" className="w-full" disabled={sent}>
        {sent ? (
          <>
            <Check className="w-5 h-5 mr-2" /> Отправлено
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" /> Отправить в WhatsApp
          </>
        )}
      </Button>
    </form>
  )
}
