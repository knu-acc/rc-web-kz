import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MessageCircle } from 'lucide-react'

const reviewPlaceholders = [
  { id: 1, alt: 'Отзыв клиента — Futurum Study', service: 'Landing Page' },
  { id: 2, alt: 'Отзыв клиента — Aspan Development', service: 'Корпоративный сайт' },
  { id: 3, alt: 'Отзыв клиента — TAK KAK GROUP', service: 'Интернет-магазин' },
  { id: 4, alt: 'Отзыв клиента — Dymi Doma', service: 'Интернет-магазин' },
  { id: 5, alt: 'Отзыв клиента — Global Impex', service: 'Корпоративный сайт' },
  { id: 6, alt: 'Отзыв клиента — Morart Company', service: 'Landing Page' },
]

export function Testimonials() {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
      <SectionHeading
        badge="Отзывы"
        title="Что говорят клиенты"
        description="Скриншоты реальных отзывов из WhatsApp и Telegram"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        {reviewPlaceholders.map((review) => (
          <div
            key={review.id}
            className="bg-surface rounded-3xl overflow-hidden border border-border-light/20 group"
          >
            {/* Placeholder — replace with real screenshot images from public/img/reviews/ */}
            <div className="relative aspect-[3/4] bg-canvas flex flex-col items-center justify-center gap-3 p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-surface-dark/5 flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-surface-dark/30" />
              </div>
              <p className="text-sm text-text-muted">Скриншот отзыва</p>
              <span className="text-xs text-text-muted/60">{review.service}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-text-muted mt-6">
        Все отзывы получены от реальных клиентов через мессенджеры
      </p>
    </section>
  )
}
