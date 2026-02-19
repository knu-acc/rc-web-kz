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

export interface NavLink {
  href: string
  label: string
  submenu?: { href: string; label: string }[]
}

export interface ServiceItem {
  id: number
  title: string
  description: string
  price: string
  icon: React.ReactNode
  gradient: string
  featured: boolean
  href: string
}

export interface BreadcrumbItem {
  name: string
  href: string
}

export interface SocialLinks {
  whatsapp: string
  telegram: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
}
