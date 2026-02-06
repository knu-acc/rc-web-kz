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
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    datePublished: post.date,
    author: post.author,
    image: post.image,
    url: `${SITE_CONFIG.url}/blog/${slug}`,
  })

  /* ──────────────────────────────────────────────
   *  Markdown → JSX парсер
   * ────────────────────────────────────────────── */
  const parseMarkdown = (text: string) => {
    const lines = text.split('\n')
    const out: JSX.Element[] = []
    let buf: string[] = []
    let mode: 'none' | 'ul' | 'table' = 'none'
    let uid = 0

    /* inline: **bold**, [link](url) */
    const inline = (raw: string, li: number) => {
      const parts: (string | JSX.Element)[] = []
      let ec = 0

      // сначала ссылки
      const lr = /\[([^\]]+)\]\(([^)]+)\)/g
      let m: RegExpExecArray | null
      let last = 0
      const lp: (string | JSX.Element)[] = []
      while ((m = lr.exec(raw)) !== null) {
        if (m.index > last) lp.push(raw.slice(last, m.index))
        lp.push(
          <Link key={`l${li}-${ec++}`} href={m[2]}
            className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium underline decoration-primary-200/60 dark:decoration-primary-700/60 underline-offset-[3px] hover:decoration-primary-500 transition-all">
            {m[1]}
          </Link>
        )
        last = m.index + m[0].length
      }
      if (last < raw.length) lp.push(raw.slice(last))

      // потом bold
      const br = /\*\*([^*]+)\*\*/g
      lp.forEach(p => {
        if (typeof p !== 'string') { parts.push(p); return }
        let bl = 0
        let bm: RegExpExecArray | null
        while ((bm = br.exec(p)) !== null) {
          if (bm.index > bl) parts.push(p.slice(bl, bm.index))
          parts.push(<strong key={`b${li}-${ec++}`} className="font-semibold text-secondary-900 dark:text-white">{bm[1]}</strong>)
          bl = bm.index + bm[0].length
        }
        if (bl < p.length) parts.push(p.slice(bl))
      })
      return parts.length ? parts : [raw]
    }

    /* flush helpers */
    const flushUl = () => {
      if (mode !== 'ul' || !buf.length) return
      out.push(
        <ul key={uid++} className="my-4 rounded-2xl bg-secondary-50/80 dark:bg-secondary-900/50 border border-secondary-200/80 dark:border-secondary-800/70 p-5 sm:p-6 space-y-2 list-disc pl-6 marker:text-primary-500 dark:marker:text-primary-400">
          {buf.map((item, i) => (
            <li key={i} className="text-[1.05rem] leading-[1.7] text-secondary-700 dark:text-secondary-300">
              {inline(item, uid + i)}
            </li>
          ))}
        </ul>
      )
      buf = []
      mode = 'none'
    }

    const flushTable = () => {
      if (mode !== 'table' || buf.length < 3) { buf = []; mode = 'none'; return }
      const headers = buf[0].split('|').map(s => s.trim()).filter(Boolean)
      const rows = buf.slice(2).map(r => r.split('|').map(s => s.trim()).filter(Boolean))
      out.push(
        <div key={uid++} className="my-10 rounded-2xl overflow-hidden border border-secondary-200 dark:border-secondary-700 shadow-sm">
          <table className="min-w-full text-[0.95rem]">
            <thead>
              <tr className="bg-primary-50 dark:bg-primary-900/20">
                {headers.map((h, i) => (
                  <th key={i} className="px-6 py-4 text-left font-semibold text-secondary-900 dark:text-white">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary-100 dark:divide-secondary-800">
              {rows.map((r, i) => (
                <tr key={i} className="bg-white dark:bg-secondary-950 even:bg-secondary-50/50 dark:even:bg-secondary-900/30">
                  {r.map((c, j) => (
                    <td key={j} className="px-6 py-4 text-secondary-700 dark:text-secondary-300 leading-relaxed">{inline(c, uid + i)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      buf = []
      mode = 'none'
    }

    const flush = () => { flushUl(); flushTable() }

    lines.forEach((line) => {
      const t = line.trim()

      /* заголовки */
      if (t.startsWith('# ')) {
        flush()
        out.push(
          <h2 key={uid++}
            className="mt-10 mb-5 text-[1.65rem] sm:text-[1.9rem] font-extrabold leading-tight text-secondary-900 dark:text-white">
            {inline(t.slice(2), uid)}
          </h2>
        )
        return
      }
      if (t.startsWith('## ')) {
        flush()
        out.push(
          <div key={uid++} className="mt-10 mb-5">
            <h2 className="text-[1.35rem] sm:text-[1.5rem] font-bold leading-snug text-secondary-900 dark:text-white pb-3 border-b-2 border-primary-500/30 dark:border-primary-400/30">
              {inline(t.slice(3), uid)}
            </h2>
          </div>
        )
        return
      }
      if (t.startsWith('### ')) {
        flush()
        out.push(
          <h3 key={uid++}
            className="mt-8 mb-4 text-[1.15rem] sm:text-[1.25rem] font-bold text-secondary-900 dark:text-white pl-4 border-l-4 border-primary-500 dark:border-primary-400">
            {inline(t.slice(4), uid)}
          </h3>
        )
        return
      }

      /* список */
      if (t.startsWith('- ') || t.startsWith('* ')) {
        if (mode === 'table') flushTable()
        mode = 'ul'
        buf.push(t.slice(2))
        return
      }

      /* таблица */
      if (t.includes('|') && t.split('|').length > 2) {
        if (mode === 'ul') flushUl()
        mode = 'table'
        buf.push(t)
        return
      }

      /* пустая строка */
      if (t === '') {
        flush()
        return
      }

      /* обычный параграф */
      flush()
      out.push(
        <p key={uid++} className="mb-3 text-[1.05rem] leading-[1.7] text-secondary-700 dark:text-secondary-300">
          {inline(t, uid)}
        </p>
      )
    })

    flush()
    return out
  }

  const content = parseMarkdown(post.content)

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 4)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <Breadcrumbs
        items={[
          { name: 'Главная', href: '/' },
          { name: 'Блог', href: '/blog' },
          { name: post.title, href: `/blog/${slug}` },
        ]}
      />

      <article className="bg-white dark:bg-secondary-950">

        {/* ─── HERO шапка ─── */}
        <header className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-950 dark:to-secondary-900">
          <div className="container-custom max-w-3xl pt-12 pb-12 sm:pt-16 sm:pb-14">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full bg-primary-600 dark:bg-primary-500 text-white">
                {categoryLabels[post.category] || post.category}
              </span>
              {post.readingTime && (
                <span className="inline-flex items-center gap-1.5 text-xs text-secondary-600 dark:text-secondary-300 bg-white/80 dark:bg-secondary-800 px-3 py-1.5 rounded-full border border-secondary-200 dark:border-secondary-700">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                  {post.readingTime} мин чтения
                </span>
              )}
            </div>

            <h1 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.7rem] font-extrabold leading-[1.15] mb-6 text-secondary-900 dark:text-white">
              {post.title}
            </h1>

            <p className="text-[1.1rem] leading-[1.7] text-secondary-600 dark:text-secondary-300 max-w-2xl mb-2">
              {post.description}
            </p>

            <div className="flex items-center gap-4 mt-8 pt-7 border-t border-secondary-200/60 dark:border-secondary-700">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 flex items-center justify-center shadow-sm">
                <span className="text-sm font-bold text-white">
                  {post.author.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </span>
              </div>
              <div className="text-sm">
                <p className="font-medium text-secondary-900 dark:text-white">{post.author}</p>
                <time className="text-secondary-500 dark:text-secondary-300">{post.date}</time>
              </div>
            </div>
          </div>
        </header>

        {/* ─── Изображение ─── */}
        {post.image && (
          <div className="container-custom max-w-3xl mb-12">
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-secondary-200/50 dark:ring-secondary-700/50">
              <img src={post.image} alt={post.title} className="w-full h-auto" />
            </div>
          </div>
        )}

        {/* ─── ТЕЛО СТАТЬИ ─── */}
        <div className="container-custom max-w-3xl pt-8 sm:pt-12 pb-20 lg:pb-28">
          {content}

          {/* ─── CTA ─── */}
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-950/60 dark:to-primary-900/40 border border-primary-200/60 dark:border-primary-700/60">
            <p className="text-xl font-bold text-secondary-900 dark:text-white mb-3">Нужна помощь с сайтом?</p>
            <p className="text-[1.05rem] text-secondary-600 dark:text-secondary-300 mb-7 leading-relaxed">
              Мы создаём современные сайты для бизнеса в Алматы. Бесплатная консультация — без обязательств.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors text-[0.95rem]">
                Получить консультацию
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white dark:bg-secondary-800 hover:bg-secondary-50 dark:hover:bg-secondary-700 text-secondary-700 dark:text-secondary-200 hover:text-secondary-900 dark:hover:text-white font-semibold rounded-xl border border-secondary-200 dark:border-secondary-700 transition-colors text-[0.95rem]">
                Смотреть портфолио
              </Link>
            </div>
          </div>

          {/* ─── Связанные статьи ─── */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-secondary-200 dark:border-secondary-800">
              <h2 className="text-2xl font-bold mb-8 text-secondary-900 dark:text-white">Читайте также</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {relatedPosts.slice(0, 2).map((rp) => (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`}
                    className="group flex flex-col p-6 sm:p-7 rounded-2xl border border-secondary-200 dark:border-secondary-800 hover:border-primary-300 dark:hover:border-primary-700 bg-white dark:bg-secondary-900/50 hover:shadow-lg transition-all">
                    <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                      {categoryLabels[rp.category] || rp.category}
                    </span>
                    <h3 className="text-[1.05rem] font-semibold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-3 leading-snug">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-secondary-500 dark:text-secondary-400 line-clamp-2 leading-relaxed mt-auto">{rp.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  )
}
