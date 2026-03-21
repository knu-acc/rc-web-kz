/**
 * Экспорт всех статей блога по категориям
 * Автоматически сгенерировано
 */

export { guidesArticles } from './guides'
export { seoArticles } from './seo'
export { designArticles } from './design'
export { marketingArticles } from './marketing'
export { casesArticles } from './cases'
export { technicalArticles } from './technical'

// Объединяем все статьи
import { guidesArticles } from './guides'
import { seoArticles } from './seo'
import { designArticles } from './design'
import { marketingArticles } from './marketing'
import { casesArticles } from './cases'
import { technicalArticles } from './technical'

export const allArticles = [
  ...guidesArticles,
  ...seoArticles,
  ...designArticles,
  ...marketingArticles,
  ...casesArticles,
  ...technicalArticles,
]
