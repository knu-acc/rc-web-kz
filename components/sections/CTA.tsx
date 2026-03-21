import { Button } from '@/components/ui/Button'
import { BentoCard } from '@/components/ui/BentoCard'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export function CTA() {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 max-w-7xl mx-auto">
      <BentoCard dark className="items-center text-center py-16 md:py-24 px-8">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-brand/10 rounded-full blur-3xl" />

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter text-white relative z-10">
          Готовы начать проект?
        </h2>
        <p className="text-lg text-white/70 max-w-xl relative z-10">
          Обсудим вашу идею и предложим лучшее решение. Бесплатная консультация и расчёт стоимости.
        </p>
        <div className="flex flex-wrap gap-3 justify-center relative z-10 mt-4">
          <Button size="lg" href="/contact">
            Оставить заявку <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" href={SITE_CONFIG.whatsapp} className="border-white/20 text-white hover:bg-white/10 hover:border-white/30">
            <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
          </Button>
        </div>
      </BentoCard>
    </section>
  )
}
