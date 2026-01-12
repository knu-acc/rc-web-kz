# rc-web.kz - Next.js Website

Современный сайт разработки веб-сайтов в Алматы, построенный на Next.js 16+ с полной SEO оптимизацией для Google и Яндекс.

## 🚀 Технологический стек

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5.6
- **Styling**: Tailwind CSS 3.4.17
- **Слайдер**: Swiper 11.1.14
- **Deployment**: Static Export (SSG)

## ✨ Особенности

- ✅ **SSR/SSG** - Полный серверный рендеринг для SEO
- ✅ **Максимальная SEO оптимизация** для Google и Яндекс 2026
- ✅ **Core Web Vitals** оптимизация (LCP < 2.5s, INP < 200ms, CLS < 0.1)
- ✅ **Schema.org разметка** (LocalBusiness, FAQPage, BreadcrumbList, Service, CreativeWork)
- ✅ **Расширенные мета-теги** (Open Graph, Twitter Cards)
- ✅ **Автоматическая генерация** sitemap.xml и robots.txt
- ✅ **15 SEO-оптимизированных страниц** с уникальным контентом
- ✅ **Единый современный дизайн** в стиле 2026 года
- ✅ **Внутренняя перелинковка** между всеми страницами

## 📦 Установка и запуск

### Требования

- Node.js 18+ (рекомендуется 20+)
- npm или yarn

### 1. Клонирование репозитория

```bash
git clone https://github.com/ваш-username/rc-web-kz.git
cd rc-web-kz
```

### 2. Установка зависимостей

```bash
npm install
```

### 3. Запуск в режиме разработки

```bash
npm run dev
```

Сайт будет доступен по адресу `http://localhost:3000`

### 4. Сборка для production

```bash
npm run build
```

Собранные файлы будут в папке `out/` (статический экспорт)

### 5. Запуск production сборки

```bash
npm start
```

## 📁 Структура проекта

```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx        # Root layout с метаданными
│   ├── page.tsx          # Главная страница
│   ├── portfolio/        # Страница портфолио
│   ├── contact/          # Страница контактов
│   ├── landing-page/     # Landing Page услуга
│   ├── corporate-site/   # Корпоративный сайт
│   ├── online-store/     # Интернет-магазин
│   ├── tilda-site/       # Сайт на Tilda
│   ├── seo-optimization/ # SEO оптимизация
│   ├── website-advertising/ # Реклама сайта
│   ├── web-design/       # Веб-дизайн
│   ├── website-for-company/ # Сайт для компании
│   ├── publish-website/  # Как опубликовать сайт
│   ├── website-price/    # Цены на сайты
│   ├── reviews/          # Отзывы
│   ├── programming-courses/ # Курсы программирования
│   ├── how-to-create-website/ # Как создать сайт
│   ├── free-website/     # Создать сайт бесплатно
│   ├── why-choose-us/    # Почему выбрать нас
│   ├── sitemap.ts        # Автоматическая генерация sitemap
│   ├── robots.ts         # Robots.txt
│   └── globals.css       # Глобальные стили
├── components/            # React компоненты
│   ├── ui/               # Базовые UI компоненты
│   ├── sections/         # Секции страниц
│   └── layout/           # Layout компоненты
├── lib/                  # Утилиты и хелперы
│   ├── constants.ts      # Константы сайта
│   ├── utils.ts          # Утилиты
│   ├── schema.ts         # Schema.org генераторы
│   └── analytics.tsx     # Аналитика
├── data/                 # Данные контента
│   ├── portfolio.ts     # Данные портфолио
│   └── faq.ts           # Данные FAQ
├── types/               # TypeScript типы
├── public/              # Статические файлы
│   └── img/             # Изображения
└── next.config.js       # Конфигурация Next.js
```

## 🔍 SEO оптимизация

### Настроено:

1. **Core Web Vitals**
   - LCP оптимизация (priority loading для критических изображений)
   - INP оптимизация (code splitting, debouncing)
   - CLS предотвращение (width/height для всех изображений)

2. **Structured Data (Schema.org)**
   - LocalBusiness с полными данными
   - FAQPage для вопросов
   - BreadcrumbList для навигации
   - Service для каждого типа услуги
   - CreativeWork для портфолио

3. **Мета-теги**
   - Уникальные title и description для каждой страницы
   - Open Graph теги
   - Twitter Cards
   - Canonical URLs

4. **15 SEO-оптимизированных страниц**
   - Каждая страница с уникальным контентом (800-1500 слов)
   - Внутренняя перелинковка
   - Изображения с правильными alt-текстами

## 🌐 Деплой

Проект настроен для статического экспорта и может быть развернут на:

- **Vercel** (рекомендуется для Next.js)
- **Netlify**
- **GitHub Pages**
- Любой статический хостинг

## 📊 Производительность

Проект оптимизирован для достижения:

- **Lighthouse Score**: 95+ по всем категориям
- **Core Web Vitals**: все метрики в зеленой зоне
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO**: полная структурированная разметка

## 📝 Лицензия

Все права защищены © 2026 rc-web.kz
