'use client'

import { useState } from 'react'
import { clsx } from 'clsx'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  id: string
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className={clsx('flex flex-col gap-2', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div
            key={item.id}
            className="bg-surface rounded-3xl p-6 cursor-pointer border border-border-light/40 hover:border-border-light transition-colors"
            onClick={() => setOpenId(isOpen ? null : item.id)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-heading font-medium text-text-main pr-4">{item.question}</h3>
              <ChevronDown
                className={clsx(
                  'w-5 h-5 text-text-muted transition-transform duration-300 ease-bento flex-shrink-0',
                  isOpen && 'rotate-180'
                )}
              />
            </div>
            <div
              className={clsx(
                'overflow-hidden transition-all duration-300 ease-bento',
                isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
              )}
            >
              <p className="text-text-muted text-base leading-relaxed">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
