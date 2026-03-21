import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/constants'
import { generateBlogMetadata } from '@/lib/metadata'
import { getPostBySlug, blogPosts, categoryLabels } from '@/data/blog'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { BentoCard } from '@/components/ui/BentoCard'
import { Badge } from '@/components/ui/Badge'
import { CTA } from '@/components/sections/CTA'
import { Clock, ArrowUpRight, ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: 'Статья не найдена' }
  }

  return generateBlogMetadata({
    title: post.seoTitle || post.title,
    description: post.metaDescription || post.description,
    keywords: post.keywords,
    date: post.date,
    author: post.author,
    image: post.image,
    path: `/blog/${post.slug}`,
  })
}

/**
 * Simple markdown-to-JSX parser for blog content
 */
function parseContent(text: string) {
  const lines = text.split('\n')
  const elements: React.ReactElement[] = []
  let listBuffer: string[] = []
  let tableBuffer: string[] = []
  let uid = 0

  const flushList = () => {
    if (listBuffer.length === 0) return
    elements.push(
      <ul
        key={uid++}
        className="my-4 space-y-2 list-disc pl-6 marker:text-surface-dark/40"
      >
        {listBuffer.map((item, idx) => (
          <li
            key={idx}
            className="text-base leading-relaxed text-text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    )
    listBuffer = []
  }

  const flushTable = () => {
    if (tableBuffer.length < 2) return
    const parseRow = (row: string) =>
      row.split('|').map((c) => c.trim()).filter(Boolean)
    const headers = parseRow(tableBuffer[0])
    const dataRows = tableBuffer.slice(2).map(parseRow)
    elements.push(
      <div key={uid++} className="my-6 overflow-x-auto rounded-2xl border border-border-light/20">
        <table>
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
    tableBuffer = []
  }

  for (const line of lines) {
    const t = line.trim()

    // Table rows (lines with | separators)
    if (t.startsWith('|') && t.endsWith('|')) {
      flushList()
      tableBuffer.push(t)
      continue
    }
    if (tableBuffer.length > 0) {
      flushTable()
    }

    if (t.startsWith('## ')) {
      flushList()
      const headingText = t.slice(3)
      elements.push(
        <h2
          key={uid++}
          className="mt-10 mb-4 text-2xl font-heading font-bold text-text-main"
        >
          {headingText}
        </h2>
      )
      continue
    }

    if (t.startsWith('### ')) {
      flushList()
      const headingText = t.slice(4)
      elements.push(
        <h3
          key={uid++}
          className="mt-8 mb-3 text-xl font-heading font-semibold text-text-main"
        >
          {headingText}
        </h3>
      )
      continue
    }

    if (t.startsWith('# ')) {
      flushList()
      const headingText = t.slice(2)
      elements.push(
        <h2
          key={uid++}
          className="mt-10 mb-5 text-2xl font-heading font-extrabold text-text-main"
        >
          {headingText}
        </h2>
      )
      continue
    }

    if (t.startsWith('- ') || t.startsWith('* ')) {
      listBuffer.push(t.slice(2))
      continue
    }

    if (t === '') {
      flushList()
      continue
    }

    flushList()
    elements.push(
      <p
        key={uid++}
        className="mb-4 text-base leading-relaxed text-text-muted"
      >
        {t}
      </p>
    )
  }

  flushList()
  flushTable()
  return elements
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  const content = parseContent(post.content)

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Блог', href: '/blog' },
          { label: post.title, href: `/blog/${slug}` },
        ]}
      />

      <article className="py-12 md:py-16 lg:py-24 px-4 max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-brand transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Все статьи
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge>{categoryLabels[post.category] || post.category}</Badge>
            {post.readingTime && (
              <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime} мин чтения
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tighter text-text-main leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-text-muted mt-4 leading-relaxed">
            {post.description}
          </p>

          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border-light/20">
            <div className="h-10 w-10 rounded-full bg-surface-dark/5 flex items-center justify-center">
              <span className="text-sm font-bold text-surface-dark">
                {post.author
                  .split(' ')
                  .map((w) => w[0])
                  .join('')
                  .slice(0, 2)}
              </span>
            </div>
            <div>
              <div className="text-sm font-medium text-text-main">
                {post.author}
              </div>
              <time className="text-xs text-text-muted">{post.date}</time>
            </div>
          </div>
        </header>

        {/* Post image */}
        {post.image && (
          <div className="rounded-4xl overflow-hidden shadow-xl mb-12">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 800px"
            />
          </div>
        )}

        {/* Article body */}
        <div className="prose-custom">{content}</div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-border-light/20">
            <h2 className="text-2xl font-heading font-bold text-text-main mb-8">
              Читайте также
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`}>
                  <BentoCard className="p-6 h-full group">
                    <span className="text-xs font-medium text-text-muted">
                      {categoryLabels[rp.category] || rp.category}
                    </span>
                    <h3 className="font-heading font-semibold text-text-main group-hover:text-surface-dark transition-colors mt-2 line-clamp-2">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-text-muted mt-2 line-clamp-2">
                      {rp.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs font-medium text-surface-dark mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      Читать <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </BentoCard>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <CTA />
    </>
  )
}
