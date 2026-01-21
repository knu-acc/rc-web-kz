# Структура проекта RC-WEB.KZ

## Обзор

Проект использует Next.js 16 с App Router и организован с использованием Route Groups для логической группировки страниц без изменения URL.

## Структура папок

```
app/
├── (main)/                    # Основные страницы сайта
│   ├── portfolio/            # Портфолио
│   ├── reviews/             # Отзывы
│   └── contact/             # Контакты
│
├── (services)/               # Страницы услуг
│   ├── landing-page/        # Landing Page
│   ├── corporate-site/      # Корпоративный сайт
│   ├── online-store/        # Интернет-магазин
│   ├── tilda-site/          # Сайт на Tilda
│   ├── seo-optimization/    # SEO оптимизация
│   ├── website-advertising/ # Реклама сайта
│   └── web-design/          # Веб-дизайн
│
├── (info)/                   # Информационные страницы
│   ├── website-price/        # Цены на сайты
│   ├── website-for-company/ # Сайт для компании
│   ├── publish-website/      # Как опубликовать сайт
│   ├── how-to-create-website/ # Как создать сайт
│   ├── free-website/         # Бесплатный сайт
│   ├── programming-courses/  # Курсы программирования
│   └── why-choose-us/        # Почему выбирают нас
│
├── page.tsx                  # Главная страница (корневая)
├── layout.tsx                # Root layout
├── globals.css               # Глобальные стили
├── robots.ts                 # Robots.txt
└── sitemap.ts                # Sitemap

components/
├── layout/                    # Компоненты макета
│   ├── Header.tsx           # Шапка сайта
│   └── Footer.tsx           # Подвал сайта
│
├── sections/                 # Секции страниц
│   ├── Hero.tsx             # Hero секция
│   ├── Services.tsx         # Секция услуг
│   ├── Portfolio.tsx        # Портфолио
│   ├── Benefits.tsx         # Преимущества
│   ├── FAQ.tsx              # FAQ
│   ├── Animations.tsx        # Анимации
│   ├── CoreWebVitals.tsx    # Web Vitals
│   ├── StructuredData.tsx   # Структурированные данные
│   └── YandexMap.tsx        # Яндекс карта
│
└── ui/                       # UI компоненты
    ├── Button.tsx           # Кнопка
    ├── BackToTop.tsx        # Кнопка "Наверх"
    └── ReviewsCarousel.tsx  # Карусель отзывов

lib/                          # Утилиты и константы
├── constants.ts              # Константы сайта
├── schema.ts                 # JSON-LD схемы
├── seo.ts                    # SEO утилиты
├── utils.ts                  # Вспомогательные функции
└── analytics.tsx             # Аналитика

data/                         # Данные
├── faq.ts                    # FAQ данные
├── portfolio.ts              # Данные портфолио
└── reviews.ts                # Данные отзывов

types/                        # TypeScript типы
└── index.ts                  # Общие типы
```

## Route Groups

Проект использует Route Groups Next.js (папки в скобках `(name)`) для организации кода:

- `(main)` - основные страницы сайта
- `(services)` - страницы услуг
- `(info)` - информационные страницы

**Важно:** Route Groups не влияют на URL. Например:
- `app/(services)/landing-page/page.tsx` → URL: `/landing-page`
- `app/(main)/portfolio/page.tsx` → URL: `/portfolio`

## Правила организации

1. **Страницы услуг** → `app/(services)/`
2. **Основные страницы** → `app/(main)/`
3. **Информационные страницы** → `app/(info)/`
4. **Системные файлы** → корень `app/`
5. **Компоненты** → `components/` с подпапками по категориям
6. **Утилиты** → `lib/`
7. **Данные** → `data/`

## Добавление новых страниц

### Добавить страницу услуги:
```
app/(services)/new-service/page.tsx
```

### Добавить информационную страницу:
```
app/(info)/new-info-page/page.tsx
```

### Добавить основную страницу:
```
app/(main)/new-page/page.tsx
```

## Импорты

Все импорты остаются без изменений:
```typescript
import { Header } from '@/components/layout/Header'
import { SITE_CONFIG } from '@/lib/constants'
import { portfolioItems } from '@/data/portfolio'
```

## URL структура

URL остаются прежними, несмотря на новую организацию:
- `/` - главная
- `/landing-page` - Landing Page
- `/corporate-site` - Корпоративный сайт
- `/portfolio` - Портфолио
- и т.д.
