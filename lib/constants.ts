const currentYear = new Date().getFullYear()

export const SITE_CONFIG = {
  name: 'RC-WEB.KZ',
  title: `Создание сайтов в Алматы от 85 000₸ | Разработка сайтов ${currentYear} - RC-WEB.KZ`,
  description: 'Создание сайтов в Алматы с 2020 года. 120+ проектов. От 85 000₸. SEO-оптимизация. Техподдержка бесплатно. Срок 5-10 дней. Лендинги, корпоративные сайты, интернет-магазины. WhatsApp +7 778 949 29 10',
  url: 'https://rc-web.kz',
  locale: 'ru_RU',
  region: 'Алматы, Казахстан',
  phone: '+77789492910',
  email: 'lmyth875@gmail.com',
  telegram: 'https://t.me/rest1703',
  whatsapp: 'https://wa.me/+77789492910',
  address: {
    addressLocality: 'Алматы',
    addressRegion: 'Алматинская область',
    addressCountry: 'KZ',
    postalCode: '050000',
    streetAddress: 'Алматы',
  },
  geo: {
    latitude: '43.2220',
    longitude: '76.8512',
  },
  businessHours: {
    weekdays: '09:00-18:00',
    saturday: '10:00-16:00',
    sunday: 'Выходной',
    full: 'Пн-Пт: 09:00-18:00, Сб: 10:00-16:00',
  },
  priceRange: '$$',
  aggregateRating: {
    ratingValue: '4.9',
    reviewCount: '120',
    bestRating: '5',
    worstRating: '1',
  },
  foundingDate: '2020',
  projectsCount: '120+',
  yearsOnMarket: `${currentYear - 2020}`,
  // Районы Алматы для локального SEO
  districts: [
    'Алмалинский район',
    'Ауэзовский район',
    'Бостандыкский район',
    'Медеуский район',
    'Наурызбайский район',
    'Турксибский район',
    'Жетысуский район',
    'Алатауский район',
  ],
  // Feature flags для управления функциональностью
  features: {
    blog: true,
    portfolio: true,
    reviews: true,
    calculator: true,
    contactForm: true,
    analytics: true,
    darkMode: true,
    districtsPages: true,
  },
  // Конфигурация стилей
  styles: {
    borderRadius: {
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
    shadows: {
      soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      medium: '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      large: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
} as const

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/+77789492910',
  telegram: 'https://t.me/rest1703',
} as const
