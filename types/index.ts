export interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  url: string
  category?: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface Service {
  id: string
  name: string
  description: string
  image: string
}

export interface MetadataProps {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
}
