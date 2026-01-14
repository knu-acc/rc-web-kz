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
 * РЕАЛЬНЫЕ отзывы - раскомментируйте и используйте после добавления скриншотов
 * Добавьте скриншоты отзывов в папку: public/img/reviews/
 * Формат имён файлов: review-1.png, review-2.png и т.д.
 */
export const realReviewImages: ReviewImage[] = [
  {
    id: 'review-1',
    image: '/img/reviews/review-1.png',
    alt: 'Отзыв клиента о создании Landing Page',
    service: 'Landing Page',
  },
  {
    id: 'review-2',
    image: '/img/reviews/review-2.png',
    alt: 'Отзыв клиента о корпоративном сайте',
    service: 'Корпоративный сайт',
  },
  {
    id: 'review-3',
    image: '/img/reviews/review-3.png',
    alt: 'Отзыв клиента об интернет-магазине',
    service: 'Интернет-магазин',
  },
  {
    id: 'review-4',
    image: '/img/reviews/review-4.png',
    alt: 'Отзыв клиента о сайте на Tilda',
    service: 'Сайт на Tilda',
  },
  {
    id: 'review-5',
    image: '/img/reviews/review-5.png',
    alt: 'Отзыв клиента о SEO-оптимизации',
    service: 'SEO-оптимизация',
  },
  {
    id: 'review-6',
    image: '/img/reviews/review-6.png',
    alt: 'Отзыв клиента о веб-дизайне',
    service: 'Веб-дизайн',
  },
  {
    id: 'review-7',
    image: '/img/reviews/review-7.png',
    alt: 'Отзыв клиента о рекламе сайта',
    service: 'Реклама сайта',
  },
  {
    id: 'review-8',
    image: '/img/reviews/review-8.png',
    alt: 'Отзыв клиента о разработке сайта',
    service: 'Сайт для компании',
  },
]

/**
 * Временные placeholder изображения (работы из портфолио)
 * Замените на realReviewImages после добавления реальных скриншотов отзывов
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

/**
 * Get reviews for carousel (default 6)
 * TODO: Замените placeholderReviewImages на realReviewImages после добавления скриншотов
 */
export function getCarouselReviews(count: number = 6): ReviewImage[] {
  return placeholderReviewImages.slice(0, count)
}

/**
 * Get all reviews for the reviews page
 * TODO: Замените placeholderReviewImages на realReviewImages после добавления скриншотов
 */
export function getAllReviews(): ReviewImage[] {
  return placeholderReviewImages
}
