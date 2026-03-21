import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight, Zap, Star, TrendingUp } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-[90vh] pt-28 md:pt-32 pb-16 px-4 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
      {/* Left: Text */}
      <div className="flex flex-col gap-6">
        <Badge variant="accent">Веб-студия в Алматы</Badge>
        <h1 className="text-[11vw] sm:text-5xl md:text-6xl lg:text-8xl font-heading font-bold tracking-tighter leading-[0.9] text-text-main w-full">
          Создаём<br />
          <span className="text-brand">сайты</span> для<br />
          бизнеса
        </h1>
        <p className="text-xl text-text-muted max-w-lg">
          От лендингов до интернет-магазинов. Современный дизайн, SEO-оптимизация, запуск за 5-10 дней. Более 120 проектов по всему Казахстану.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button size="lg" href="/contact">
            Обсудить проект <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" href="/portfolio">
            Портфолио
          </Button>
        </div>
        {/* Stats row */}
        <div className="flex flex-wrap gap-8 mt-4">
          <div>
            <div className="text-3xl font-heading font-bold text-text-main">120+</div>
            <div className="text-sm text-text-muted">Проектов</div>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-text-main">4.9</div>
            <div className="text-sm text-text-muted">Рейтинг</div>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-text-main">5+</div>
            <div className="text-sm text-text-muted">Лет опыта</div>
          </div>
        </div>
      </div>

      {/* Right: Abstract visual */}
      <div className="h-[400px] md:h-[600px] w-full bg-surface rounded-[40px] relative overflow-hidden border border-border-light/20">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark/5 via-transparent to-canvas" />

        {/* Floating widgets */}
        <div className="absolute top-8 left-8 bg-surface rounded-3xl p-4 shadow-float border border-border-light/20 animate-float">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-surface-dark/10 rounded-full flex items-center justify-center">
              <Zap className="w-5 h-5 text-surface-dark" />
            </div>
            <div>
              <div className="text-sm font-medium text-text-main">PageSpeed</div>
              <div className="text-xs text-text-muted">95/100</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 right-8 bg-surface-dark rounded-3xl p-4 shadow-float" style={{ animationDelay: '2s' }}>
          <div className="flex items-center gap-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-white text-sm font-medium">4.9 рейтинг</div>
          </div>
        </div>

        <div className="absolute top-1/2 right-12 -translate-y-1/2 bg-surface rounded-3xl p-4 shadow-float border border-border-light/20" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-semantic-success/10 rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-semantic-success" />
            </div>
            <div>
              <div className="text-sm font-medium text-text-main">Конверсия</div>
              <div className="text-lg font-heading font-bold text-semantic-success">+240%</div>
            </div>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-surface-dark/5 rounded-full blur-3xl" />
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-surface-dark/5 rounded-full blur-2xl" />
      </div>
    </section>
  )
}
