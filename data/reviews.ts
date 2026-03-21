/**
 * Reviews Data
 * Array of customer review images for display on service pages and reviews page
 * 
 * ВАЖНО: Замените placeholderReviewImages на realReviewImages после добавления
 * реальных скриншотов отзывов в папку public/img/reviews/
 */

export interface ReviewImage {
  id: string
  image: string
  alt: string
  service?: string
}

/**
 * Временные placeholder изображения (работы из портфолио)
 * Замените на реальные скриншоты отзывов в public/img/reviews/
 */
export const placeholderReviewImages: ReviewImage[] = [
  {
    id: 'portfolio-1',
    image: '/img/portfolio/0.png',
    alt: 'Отзыв клиента о создании сайта',
    service: 'Landing Page',
  },
  {
    id: 'portfolio-2',
    image: '/img/portfolio/1.png',
    alt: 'Отзыв клиента о разработке сайта',
    service: 'Корпоративный сайт',
  },
  {
    id: 'portfolio-3',
    image: '/img/portfolio/2.png',
    alt: 'Отзыв клиента о веб-разработке',
    service: 'Интернет-магазин',
  },
  {
    id: 'portfolio-4',
    image: '/img/portfolio/3.png',
    alt: 'Отзыв клиента о создании сайта',
    service: 'Сайт на Tilda',
  },
  {
    id: 'portfolio-5',
    image: '/img/portfolio/4.png',
    alt: 'Отзыв клиента о SEO-оптимизации',
    service: 'SEO-оптимизация',
  },
  {
    id: 'portfolio-6',
    image: '/img/portfolio/5.png',
    alt: 'Отзыв клиента о рекламе сайта',
    service: 'Реклама сайта',
  },
  {
    id: 'portfolio-7',
    image: '/img/portfolio/6.png',
    alt: 'Отзыв клиента о веб-дизайне',
    service: 'Веб-дизайн',
  },
  {
    id: 'portfolio-8',
    image: '/img/portfolio/7.png',
    alt: 'Отзыв клиента о создании сайта для компании',
    service: 'Сайт для компании',
  },
]

