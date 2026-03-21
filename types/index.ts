export interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  url: string
  category?: string
  technologies?: string[]
  year?: string
  caseStudy?: {
    challenge?: string
    solution?: string
    results?: string[]
    metrics?: {
      label: string
      value: string
    }[]
  }
  features?: string[]
  client?: string
  duration?: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface BreadcrumbItem {
  label: string
  href?: string
}
