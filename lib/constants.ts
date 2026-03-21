const currentYear = new Date().getFullYear()

export const SITE_CONFIG = {
  name: 'RC-WEB.KZ',
  title: `Создание сайтов в Алматы от 85 000₸ | Разработка сайтов ${currentYear} - RC-WEB.KZ`,
  description: 'Создание сайтов в Алматы от 85 000₸. 120+ проектов, SEO-оптимизация, бесплатная техподдержка. Срок 5-10 дней. Лендинги, корпоративные сайты, интернет-магазины. WhatsApp +7 778 949 29 10',
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
    weekdays: 'Круглосуточно',
    saturday: 'Круглосуточно',
    sunday: 'Круглосуточно',
    full: 'Работаем 24/7',
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
} as const
