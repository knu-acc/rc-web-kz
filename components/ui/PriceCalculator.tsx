'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

type SiteType = 'landing' | 'corporate' | 'store'
type PagesCount = '1-5' | '6-10' | '11+'
type DesignType = 'template' | 'unique'
type AdditionalServices = {
  seo: boolean
  advertising: boolean
  copywriting: boolean
}

const basePrices: Record<SiteType, number> = {
  landing: 85000,
  corporate: 125000,
  store: 220000,
}

const pagesMultiplier: Record<PagesCount, number> = {
  '1-5': 1,
  '6-10': 1.3,
  '11+': 1.6,
}

const designMultiplier: Record<DesignType, number> = {
  template: 1,
  unique: 1.4,
}

const additionalPrices = {
  seo: 50000,
  advertising: 30000,
  copywriting: 25000,
}

export function PriceCalculator() {
  const [siteType, setSiteType] = useState<SiteType>('landing')
  const [pagesCount, setPagesCount] = useState<PagesCount>('1-5')
  const [designType, setDesignType] = useState<DesignType>('template')
  const [additional, setAdditional] = useState<AdditionalServices>({
    seo: false,
    advertising: false,
    copywriting: false,
  })

  const calculatePrice = () => {
    let price = basePrices[siteType]
    price *= pagesMultiplier[pagesCount]
    price *= designMultiplier[designType]

    if (additional.seo) price += additionalPrices.seo
    if (additional.advertising) price += additionalPrices.advertising
    if (additional.copywriting) price += additionalPrices.copywriting

    return Math.round(price)
  }

  const finalPrice = calculatePrice()

  return (
    <div className="bg-white dark:bg-secondary-950 rounded-2xl p-8 border border-secondary-200 dark:border-secondary-800 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center gradient-text">
        Калькулятор стоимости сайта
      </h2>

      <div className="space-y-6 mb-8">
        {/* Тип сайта */}
        <div>
          <label className="block text-lg font-semibold mb-3 text-secondary-900 dark:text-white">
            1. Тип сайта
          </label>
          <div className="grid md:grid-cols-3 gap-4">
            {(['landing', 'corporate', 'store'] as SiteType[]).map((type) => (
              <button
                key={type}
                onClick={() => setSiteType(type)}
                className={`p-4 rounded-xl border-2 transition-all ${siteType === type
                    ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                    : 'border-secondary-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-500'
                  }`}
              >
                <div className="font-bold mb-1">
                  {type === 'landing' && 'Landing Page'}
                  {type === 'corporate' && 'Корпоративный сайт'}
                  {type === 'store' && 'Интернет-магазин'}
                </div>
                <div className="text-sm text-secondary-600 dark:text-secondary-400">
                  от {basePrices[type].toLocaleString('ru-RU')} ₸
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Количество страниц */}
        <div>
          <label className="block text-lg font-semibold mb-3 text-secondary-900 dark:text-white">
            2. Количество страниц
          </label>
          <div className="grid md:grid-cols-3 gap-4">
            {(['1-5', '6-10', '11+'] as PagesCount[]).map((count) => (
              <button
                key={count}
                onClick={() => setPagesCount(count)}
                className={`p-4 rounded-xl border-2 transition-all ${pagesCount === count
                    ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                    : 'border-secondary-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-500'
                  }`}
              >
                <div className="font-bold">{count}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Дизайн */}
        <div>
          <label className="block text-lg font-semibold mb-3 text-secondary-900 dark:text-white">
            3. Тип дизайна
          </label>
          <div className="grid md:grid-cols-2 gap-4">
            {(['template', 'unique'] as DesignType[]).map((type) => (
              <button
                key={type}
                onClick={() => setDesignType(type)}
                className={`p-4 rounded-xl border-2 transition-all ${designType === type
                    ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                    : 'border-secondary-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-500'
                  }`}
              >
                <div className="font-bold mb-1">
                  {type === 'template' ? 'Готовый шаблон' : 'Уникальный дизайн'}
                </div>
                <div className="text-sm text-secondary-600 dark:text-secondary-400">
                  {type === 'template' ? 'Быстрее и дешевле' : 'Индивидуальный подход'}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Дополнительные услуги */}
        <div>
          <label className="block text-lg font-semibold mb-3 text-secondary-900 dark:text-white">
            4. Дополнительные услуги
          </label>
          <div className="space-y-3">
            {[
              { key: 'seo' as const, label: 'SEO-оптимизация', price: additionalPrices.seo },
              { key: 'advertising' as const, label: 'Настройка рекламы', price: additionalPrices.advertising },
              { key: 'copywriting' as const, label: 'Копирайтинг текстов', price: additionalPrices.copywriting },
            ].map((service) => (
              <label
                key={service.key}
                className="flex items-center gap-4 p-4 rounded-xl border-2 border-secondary-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-500 cursor-pointer transition-all"
              >
                <input
                  type="checkbox"
                  checked={additional[service.key]}
                  onChange={(e) =>
                    setAdditional({ ...additional, [service.key]: e.target.checked })
                  }
                  className="w-5 h-5 text-primary-600 rounded"
                />
                <div className="flex-1">
                  <div className="font-semibold">{service.label}</div>
                </div>
                <div className="text-primary-600 font-semibold">
                  +{service.price.toLocaleString('ru-RU')} ₸
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Итоговая стоимость */}
      <div className="bg-gradient-to-r from-primary-600 to-violet-600 rounded-xl p-6 text-white text-center mb-6">
        <div className="text-sm opacity-90 mb-2">Итоговая стоимость</div>
        <div className="text-4xl font-bold mb-2">
          {finalPrice.toLocaleString('ru-RU')} ₸
        </div>
        <div className="text-sm opacity-90">
          * Окончательная цена может отличаться после обсуждения деталей проекта
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href={SITE_CONFIG.whatsapp}
          target="_blank"
          className="flex-1 btn-whatsapp text-center"
        >
          Обсудить проект
        </Link>
        <Link
          href="/contact"
          className="flex-1 btn-outline text-center"
        >
          Оставить заявку
        </Link>
      </div>
    </div>
  )
}
