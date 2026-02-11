'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { AnalyticsEvents } from '@/lib/analytics-events'

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
  corporate: 85000,
  store: 175000,
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
  seo: 0,
  advertising: 50000,
  copywriting: 25000,
}

// Пакеты услуг для сравнения
const servicePackages = [
  {
    id: 'basic',
    name: 'Базовый',
    siteType: 'landing' as SiteType,
    pages: '1-5' as PagesCount,
    design: 'template' as DesignType,
    additional: { seo: false, advertising: false, copywriting: false },
    description: 'Идеально для старта',
  },
  {
    id: 'standard',
    name: 'Стандартный',
    siteType: 'corporate' as SiteType,
    pages: '6-10' as PagesCount,
    design: 'template' as DesignType,
    additional: { seo: true, advertising: false, copywriting: false },
    description: 'Самый популярный',
    popular: true,
  },
  {
    id: 'premium',
    name: 'Премиум',
    siteType: 'corporate' as SiteType,
    pages: '11+' as PagesCount,
    design: 'unique' as DesignType,
    additional: { seo: true, advertising: true, copywriting: true },
    description: 'Максимальный результат',
  },
]

export function PriceCalculator() {
  const [siteType, setSiteType] = useState<SiteType>('landing')
  const [pagesCount, setPagesCount] = useState<PagesCount>('1-5')
  const [designType, setDesignType] = useState<DesignType>('template')
  const [additional, setAdditional] = useState<AdditionalServices>({
    seo: false,
    advertising: false,
    copywriting: false,
  })
  const [showComparison, setShowComparison] = useState(false)

  const calculatePrice = (
    type: SiteType = siteType,
    pages: PagesCount = pagesCount,
    design: DesignType = designType,
    add: AdditionalServices = additional
  ) => {
    let price = basePrices[type]
    price *= pagesMultiplier[pages]
    price *= designMultiplier[design]

    if (add.seo) price += additionalPrices.seo
    if (add.advertising) price += additionalPrices.advertising
    if (add.copywriting) price += additionalPrices.copywriting

    return Math.round(price)
  }

  const finalPrice = calculatePrice()

  // Отслеживание использования калькулятора
  useEffect(() => {
    if (finalPrice > 0) {
      AnalyticsEvents.calculatorUse(finalPrice)
    }
  }, [finalPrice])

  return (
    <div className="bg-white dark:bg-secondary-950 rounded-2xl p-8 border border-secondary-200 dark:border-secondary-800 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center gradient-text">
        Калькулятор стоимости сайта
      </h2>

      {/* Переключатель режимов */}
      <div className="flex gap-2 mb-6 p-1 bg-secondary-100 dark:bg-secondary-800 rounded-lg">
        <button
          onClick={() => setShowComparison(false)}
          className={`flex-1 py-2 px-4 rounded-md transition-all ${
            !showComparison
              ? 'bg-white dark:bg-secondary-700 text-primary-600 dark:text-primary-400 font-semibold shadow-sm'
              : 'text-secondary-600 dark:text-secondary-300'
          }`}
        >
          Калькулятор
        </button>
        <button
          onClick={() => setShowComparison(true)}
          className={`flex-1 py-2 px-4 rounded-md transition-all ${
            showComparison
              ? 'bg-white dark:bg-secondary-700 text-primary-600 dark:text-primary-400 font-semibold shadow-sm'
              : 'text-secondary-600 dark:text-secondary-300'
          }`}
        >
          Сравнение пакетов
        </button>
      </div>

      {showComparison ? (
        /* Сравнение пакетов */
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {servicePackages.map((pkg) => {
              const price = calculatePrice(pkg.siteType, pkg.pages, pkg.design, pkg.additional)
              return (
                <div
                  key={pkg.id}
                  className={`relative rounded-xl border-2 p-6 transition-all ${
                    pkg.popular
                      ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 shadow-lg scale-105'
                      : 'border-secondary-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-500'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                      Популярный
                    </div>
                  )}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-1 text-secondary-900 dark:text-white">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">
                      {pkg.description}
                    </p>
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                      {price.toLocaleString('ru-RU')} ₸
                    </div>
                  </div>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>
                        {pkg.siteType === 'landing' && 'Landing Page'}
                        {pkg.siteType === 'corporate' && 'Корпоративный сайт'}
                        {pkg.siteType === 'store' && 'Интернет-магазин'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{pkg.pages} страниц</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{pkg.design === 'template' ? 'Готовый шаблон' : 'Уникальный дизайн'}</span>
                    </div>
                    {pkg.additional.seo && (
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>SEO-оптимизация</span>
                      </div>
                    )}
                    {pkg.additional.advertising && (
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Настройка рекламы</span>
                      </div>
                    )}
                    {pkg.additional.copywriting && (
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Копирайтинг</span>
                      </div>
                    )}
                  </div>
                  <Link
                    href={SITE_CONFIG.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-2 px-4 rounded-lg font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-900 dark:text-white hover:bg-secondary-200 dark:hover:bg-secondary-700'
                    }`}
                  >
                    Заказать {pkg.name}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        /* Калькулятор */
        <>
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
              rel="noopener noreferrer"
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
        </>
      )}
    </div>
  )
}
