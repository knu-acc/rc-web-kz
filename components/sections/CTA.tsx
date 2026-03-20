/**
 * CTA Section — Modern Minimalist SaaS
 * Переработан: urgency-сигнал + trust signals, усиленный призыв
 */
'use client'

import { SITE_CONFIG } from '@/lib/constants'
import { formatPhone } from '@/lib/utils'
import { WhatsAppLink } from '@/components/ui/WhatsAppLink'

export function CTA() {
  return (
    <section className="section bg-secondary-900 dark:bg-secondary-950 text-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-left md:text-center">

          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Отвечаем в течение 30 минут
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight font-display">
            Готовы заказать{' '}
            <span className="gradient-text">сайт?</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Свяжитесь прямо сейчас — обсудим задачу, подберём решение и назовём точную стоимость.
            Консультация бесплатная, без обязательств.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <WhatsAppLink
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 px-8 py-4 bg-white text-secondary-900 font-bold rounded-xl hover:bg-secondary-50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 text-base"
              ariaLabel="Написать в WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Написать в WhatsApp
            </WhatsAppLink>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 px-8 py-4 bg-white/10 backdrop-blur text-white font-bold rounded-xl border border-white/25 hover:bg-white/20 hover:border-white/40 transition-all duration-200 hover:-translate-y-0.5 text-base"
              aria-label="Позвонить"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {formatPhone(SITE_CONFIG.phone)}
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-5 text-white/50 text-sm">
            {[
              'Бесплатная консультация',
              'Без предоплаты',
              'Официальный договор',
              'Результат за 7 дней',
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
