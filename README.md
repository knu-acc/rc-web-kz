# RC-WEB.KZ

Web studio website built with Next.js 15, React 19, and Tailwind CSS. Static export deployed to Netlify.

## Stack

- **Next.js 15** (App Router, Static Export)
- **React 19** + TypeScript 5.7
- **Tailwind CSS 3.4** (Bento UI design system)
- **Fonts**: Outfit (headings) + Plus Jakarta Sans (body)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static files output to `out/`.

## Project Structure

```
app/
  (services)/     # Service pages (landing-page, corporate-site, etc.)
  (info)/         # Info pages (about, cities, districts, industries, etc.)
  (main)/         # Main pages (blog, portfolio, contact, reviews)
components/
  ui/             # Reusable UI components (Button, BentoCard, Badge, etc.)
  sections/       # Page sections (Hero, FAQ, CTA, etc.)
  layout/         # Header, Footer
data/             # Static content (blog articles, portfolio, FAQ, reviews, cities, districts, industries)
lib/              # Utilities (metadata, schema.org, constants, analytics)
types/            # TypeScript interfaces
public/           # Static assets
```

## Pages (~99 total)

- **Homepage** with Hero, Features, Portfolio, FAQ, Testimonials
- **8 service pages**: Landing Page, Corporate Site, Online Store, Tilda, SEO, Ads, Design, Services overview
- **14 info pages**: About, Process, Technologies, Pricing, Glossary, and more
- **6 main pages**: Blog, Blog articles, Portfolio, Portfolio projects, Contact, Reviews
- **8 city pages**: Astana, Shymkent, Karaganda, Aktobe, Atyrau, Pavlodar, Semey, Kostanay
- **8 industry pages**: Medical, Restaurant, Beauty, Real Estate, Education, Auto, Law, Construction
- **8 district pages**: Almaly, Auezov, Bostandyk, Medeu, Nauryzbay, Turksib, Zhetysu, Alatau
- **30+ blog articles** across SEO, guides, marketing, technical, and case study categories

## SEO Features

- Schema.org structured data (LocalBusiness, FAQPage, BreadcrumbList, Service, Article)
- Dynamic sitemap.xml and robots.txt
- Open Graph + Twitter Cards on all pages
- Canonical URLs
- GEO meta tags for Almaty, Kazakhstan
- Local SEO: city, district, and industry landing pages

## Deploy

Configured for **Netlify** static hosting with:
- `netlify.toml` build config
- `public/_headers` for security headers and caching
- Static export (`output: 'export'`)

## Analytics

Supports Google Analytics 4, Google Tag Manager, and Yandex Metrica via environment variables:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_YANDEX_METRICA_ID=XXXXXXXX
```

## License

All rights reserved. RC-WEB.KZ
