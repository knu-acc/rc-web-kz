import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { getPostBySlug, blogPosts } from '@/data/blog'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { generateArticleSchema } from '@/lib/schema'

const categoryLabels: Record<string, string> = {
  guides: 'Гайды',
  seo: 'SEO и продвижение',
  design: 'Дизайн и UX',
  marketing: 'Реклама и маркетинг',
  cases: 'Кейсы',
  technical: 'Технические темы',
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Статья не найдена',
    }
  }

  return {
    title: post.seoTitle || `${post.title} | Блог RC-WEB.KZ`,
    description: post.metaDescription || post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.metaDescription || post.description,
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      images: post.image
        ? [
          {
            url: post.image,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ]
        : [],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    datePublished: post.date,
    author: post.author,
    image: post.image,
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
  })

  // Улучшенный markdown парсер
  const parseMarkdown = (text: string) => {
    const lines = text.split('\n')
    const elements: JSX.Element[] = []
    let listItems: string[] = []
    let inList = false
    let tableRows: string[] = []
    let inTable = false

    // Обработка markdown элементов в тексте
    const processLine = (text: string, lineIndex: number) => {
      const parts: (string | JSX.Element)[] = []
      let processedText = text
      let elementCounter = 0

      // Обработка ссылок [текст](url)
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
      let match
      let lastIndex = 0
      const linkParts: (string | JSX.Element)[] = []

      while ((match = linkRegex.exec(processedText)) !== null) {
        if (match.index > lastIndex) {
          linkParts.push(processedText.slice(lastIndex, match.index))
        }
        linkParts.push(
          <Link
            key={`link-${lineIndex}-${elementCounter++}`}
            href={match[2]}
            className="text-primary-600 hover:text-primary-700 underline"
          >
            {match[1]}
          </Link>
        )
        lastIndex = match.index + match[0].length
      }
      if (lastIndex < processedText.length) {
        linkParts.push(processedText.slice(lastIndex))
      }

      // Обработка жирного текста **текст**
      const boldRegex = /\*\*([^*]+)\*\*/g
      const finalParts: (string | JSX.Element)[] = []

      linkParts.forEach((part) => {
        if (typeof part === 'string') {
          let boldLastIndex = 0
          let boldMatch
          while ((boldMatch = boldRegex.exec(part)) !== null) {
            if (boldMatch.index > boldLastIndex) {
              finalParts.push(part.slice(boldLastIndex, boldMatch.index))
            }
            finalParts.push(
              <strong key={`bold-${lineIndex}-${elementCounter++}`} className="font-semibold text-secondary-900 dark:text-white">
                {boldMatch[1]}
              </strong>
            )
            boldLastIndex = boldMatch.index + boldMatch[0].length
          }
          if (boldLastIndex < part.length) {
            finalParts.push(part.slice(boldLastIndex))
          }
        } else {
          finalParts.push(part)
        }
      })

      return finalParts.length > 0 ? finalParts : [text]
    }

    lines.forEach((line, index) => {
      const trimmed = line.trim()

      // Заголовки
      if (trimmed.startsWith('# ')) {
        if (inList) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc pl-6 mb-4 space-y-2">
              {listItems.map((item, i) => (
                <li key={i} className="text-secondary-700 dark:text-secondary-300">{item}</li>
              ))}
            </ul>
          )
          listItems = []
          inList = false
        }
        elements.push(
          <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-secondary-900 dark:text-white">
            {trimmed.slice(2)}
          </h1>
        )
        return
      }
      if (trimmed.startsWith('## ')) {
        if (inList) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc pl-6 mb-4 space-y-2">
              {listItems.map((item, i) => (
                <li key={i} className="text-secondary-700 dark:text-secondary-300">{item}</li>
              ))}
            </ul>
          )
          listItems = []
          inList = false
        }
        elements.push(
          <h2 key={index} className="text-2xl font-bold mt-6 mb-3 text-secondary-900 dark:text-white">
            {trimmed.slice(3)}
          </h2>
        )
        return
      }
      if (trimmed.startsWith('### ')) {
        if (inList) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc pl-6 mb-4 space-y-2">
              {listItems.map((item, i) => (
                <li key={i} className="text-secondary-700 dark:text-secondary-300">{item}</li>
              ))}
            </ul>
          )
          listItems = []
          inList = false
        }
        elements.push(
          <h3 key={index} className="text-xl font-bold mt-4 mb-2 text-secondary-900 dark:text-white">
            {trimmed.slice(4)}
          </h3>
        )
        return
      }

      // Списки
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        inList = true
        listItems.push(trimmed.slice(2))
        return
      }

      // Таблицы (простая поддержка)
      if (trimmed.includes('|') && trimmed.split('|').length > 2) {
        if (!inTable) {
          inTable = true
          tableRows = []
        }
        tableRows.push(trimmed)
        return
      } else if (inTable) {
        // Закрываем таблицу
        if (tableRows.length > 0) {
          const headers = tableRows[0].split('|').map(h => h.trim()).filter(h => h)
          const separator = tableRows[1]?.split('|') || []
          const rows = tableRows.slice(2).map(row =>
            row.split('|').map(cell => cell.trim()).filter(cell => cell)
          )

          elements.push(
            <div key={`table-${index}`} className="overflow-x-auto mb-6">
              <table className="min-w-full border border-secondary-200 dark:border-secondary-700 rounded-lg">
                <thead className="bg-secondary-50 dark:bg-secondary-800">
                  <tr>
                    {headers.map((header, i) => (
                      <th key={i} className="px-4 py-3 text-left font-semibold text-secondary-900 dark:text-white border-b border-secondary-200 dark:border-secondary-700">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-secondary-950' : 'bg-secondary-50 dark:bg-secondary-900'}>
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-3 text-secondary-700 dark:text-secondary-300 border-b border-secondary-100 dark:border-secondary-800">
                          {processLine(cell, index)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
          tableRows = []
          inTable = false
        }
      }

      // Пустая строка
      if (trimmed === '') {
        if (inList) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc pl-6 mb-4 space-y-2">
              {listItems.map((item, i) => (
                <li key={i} className="text-secondary-700 dark:text-secondary-300">{processLine(item, index)}</li>
              ))}
            </ul>
          )
          listItems = []
          inList = false
        }
        if (!inTable) {
          elements.push(<br key={index} />)
        }
        return
      }

      // Обычный текст
      if (!inList) {
        const processed = processLine(trimmed, index)
        elements.push(
          <p key={index} className="mb-4 text-secondary-700 dark:text-secondary-300 leading-relaxed">
            {processed}
          </p>
        )
      }
    })

    // Закрываем последний список, если он есть
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key="list-final" className="list-disc pl-6 mb-4 space-y-2">
          {listItems.map((item, i) => (
            <li key={i} className="text-secondary-700 dark:text-secondary-300">
              {processLine(item, lines.length + i)}
            </li>
          ))}
        </ul>
      )
    }

    return elements
  }

  const content = parseMarkdown(post.content)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Главная', url: SITE_CONFIG.url },
          { name: 'Блог', url: `${SITE_CONFIG.url}/blog` },
          { name: post.title, url: `${SITE_CONFIG.url}/blog/${post.slug}` },
        ]}
      />

      <article className="section bg-white dark:bg-secondary-950">
        <div className="container-custom max-w-4xl">
          {/* Заголовок */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs px-2 py-1 rounded bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                {categoryLabels[post.category] || post.category}
              </span>
              {post.readingTime && (
                <span className="text-xs text-secondary-500 dark:text-secondary-400">{post.readingTime} мин чтения</span>
              )}
            </div>
            <h1 className="heading-lg mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-secondary-600 dark:text-secondary-400">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </header>

          {/* Изображение */}
          {post.image && (
            <div className="mb-8 rounded-xl overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-auto" />
            </div>
          )}

          {/* Контент */}
          <div className="prose prose-lg max-w-none">{content}</div>

          {/* Связанные статьи */}
          <div className="mt-12 pt-8 border-t border-secondary-200 dark:border-secondary-800">
            <h2 className="text-2xl font-bold mb-4">Другие статьи</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {blogPosts
                .filter((p) => p.slug !== post.slug && p.category === post.category)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="block p-4 rounded-lg bg-secondary-50 hover:bg-secondary-100 transition-colors"
                  >
                    <h3 className="font-semibold mb-2">{relatedPost.title}</h3>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">{relatedPost.description}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
