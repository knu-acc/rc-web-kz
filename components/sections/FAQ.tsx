/**
 * FAQ Section — Lines-only accordion
 */
'use client'

import { useState } from 'react'
import { faqItems } from '@/data/faq'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>('1')

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="section bg-secondary-50 dark:bg-secondary-900" aria-labelledby="faq-heading">
      <div className="container-custom">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-secondary-400 dark:text-secondary-500 mb-4">
              FAQ
            </p>
            <h2 id="faq-heading" className="heading-lg text-secondary-900 dark:text-white">
              Частые вопросы
            </h2>
          </div>
        </div>

        {/* Accordion — lines only, no cards */}
        <div className="max-w-3xl border-t border-secondary-200 dark:border-secondary-700">
          {faqItems.slice(0, 4).map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className="border-b border-secondary-200 dark:border-secondary-700"
              >
                <button
                  className="w-full flex items-center justify-between py-6 text-left group focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  onClick={() => toggleFAQ(item.id)}
                >
                  <h3 className="text-base font-semibold text-secondary-900 dark:text-white pr-8 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {item.question}
                  </h3>
                  {/* + / × icon */}
                  <span
                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center text-secondary-400 dark:text-secondary-500 transition-all duration-200 text-xl font-light ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-6 text-secondary-600 dark:text-secondary-300 leading-relaxed text-base">
                    <p>{item.answer}</p>

                    {item.id === '1' && (
                      <div className="mt-5">
                        <a href={SOCIAL_LINKS.whatsapp} className="btn-dark text-sm">
                          Купить сайт в Алматы
                        </a>
                      </div>
                    )}
                    {item.id === '2' && (
                      <div className="mt-5">
                        <a href={SOCIAL_LINKS.whatsapp} className="btn-dark text-sm">
                          Напишите мне
                        </a>
                      </div>
                    )}
                    {item.id === '3' && (
                      <div className="mt-5">
                        <a href={`tel:${SITE_CONFIG.phone}`} className="btn-dark text-sm">
                          Позвонить
                        </a>
                      </div>
                    )}
                    {item.id === '4' && (
                      <div className="mt-5">
                        <a href={SOCIAL_LINKS.whatsapp} className="btn-dark text-sm">
                          Написать в WhatsApp
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
