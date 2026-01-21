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
    <section className="section bg-secondary-50/50" aria-labelledby="faq-heading">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 id="faq-heading" className="heading-lg mb-6">
            Ответы на <span className="gradient-text">популярные вопросы</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id
            return (
              <article 
                key={item.id} 
                className="bg-white rounded-2xl border border-secondary-100 overflow-hidden transition-all duration-300 hover:border-secondary-300 hover:shadow-lg"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                  onClick={() => toggleFAQ(item.id)}
                >
                  <h3 className="text-lg font-semibold text-secondary-900 pr-8">
                    {item.question}
                  </h3>
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <svg className="w-5 h-5 text-secondary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                
                {/* Animated answer container */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-secondary-600 leading-relaxed">
                    <p>{item.answer}</p>
                    
                    {/* Buttons with proper spacing */}
                    {item.id === '1' && (
                      <div className="mt-6">
                        <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">
                          Купить сайт в Алматы
                        </a>
                      </div>
                    )}
                    {item.id === '2' && (
                      <div className="mt-6">
                        <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">
                          Напишите мне
                        </a>
                      </div>
                    )}
                    {item.id === '3' && (
                      <div className="mt-6">
                        <a href={`tel:${SITE_CONFIG.phone}`} className="btn-dark">
                          Позвонить
                        </a>
                      </div>
                    )}
                    {item.id === '4' && (
                      <div className="mt-6">
                        <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">
                          Написать в WhatsApp
                        </a>
                      </div>
                    )}
                    {item.id === '5' && (
                      <div className="mt-6">
                        <a href={SOCIAL_LINKS.whatsapp} className="btn-dark">
                          Связаться по WhatsApp
                        </a>
                      </div>
                    )}
                    {item.id === '6' && (
                      <div className="mt-6 flex flex-wrap gap-3">
                        <a href="/portfolio" className="btn-outline">
                          Смотреть портфолио
                        </a>
                        <a href="https://rc-web.kz/brif.doc" className="btn-secondary" download>
                          Скачать бриф
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
