/**
 * Схемы валидации с использованием Zod
 * Используется для валидации форм
 */

import { z } from 'zod'

// Схема валидации контактной формы
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Имя должно содержать минимум 2 символа')
    .max(50, 'Имя не должно превышать 50 символов')
    .regex(/^[а-яА-ЯёЁa-zA-Z\s]+$/, 'Имя может содержать только буквы'),
  
  phone: z
    .string()
    .min(10, 'Номер телефона должен содержать минимум 10 цифр')
    .regex(/^[\d\s\-\+\(\)]+$/, 'Некорректный формат телефона'),
  
  email: z
    .string()
    .email('Некорректный email адрес')
    .min(5, 'Email должен содержать минимум 5 символов')
    .max(100, 'Email не должен превышать 100 символов'),
  
  message: z
    .string()
    .min(10, 'Сообщение должно содержать минимум 10 символов')
    .max(1000, 'Сообщение не должно превышать 1000 символов'),
  
  // Honeypot поле для защиты от спама
  website: z.string().max(0, 'Это поле должно быть пустым').optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Схема валидации для калькулятора цен
export const calculatorSchema = z.object({
  serviceType: z.enum(['landing', 'corporate', 'store', 'seo', 'design']),
  pages: z.number().min(1).max(100),
  features: z.array(z.string()).optional(),
})

export type CalculatorData = z.infer<typeof calculatorSchema>
