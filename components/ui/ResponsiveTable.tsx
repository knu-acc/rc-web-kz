'use client'

import { ReactNode } from 'react'

interface ResponsiveTableProps {
  children: ReactNode
  className?: string
  'aria-label'?: string
}

export function ResponsiveTable({
  children,
  className = '',
  'aria-label': ariaLabel,
}: ResponsiveTableProps) {
  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table
            className={`min-w-full divide-y divide-secondary-200 dark:divide-secondary-700 ${className}`}
            aria-label={ariaLabel}
          >
            {children}
          </table>
        </div>
      </div>
    </div>
  )
}

interface ResponsiveTableHeaderProps {
  children: ReactNode
  className?: string
}

export function ResponsiveTableHeader({
  children,
  className = '',
}: ResponsiveTableHeaderProps) {
  return (
    <thead className={`bg-secondary-50 dark:bg-secondary-800 ${className}`}>
      {children}
    </thead>
  )
}

interface ResponsiveTableBodyProps {
  children: ReactNode
  className?: string
}

export function ResponsiveTableBody({
  children,
  className = '',
}: ResponsiveTableBodyProps) {
  return (
    <tbody
      className={`divide-y divide-secondary-200 dark:divide-secondary-700 bg-white dark:bg-secondary-900 ${className}`}
    >
      {children}
    </tbody>
  )
}

interface ResponsiveTableRowProps {
  children: ReactNode
  className?: string
  'data-label'?: string
}

export function ResponsiveTableRow({
  children,
  className = '',
  'data-label': dataLabel,
}: ResponsiveTableRowProps) {
  return (
    <tr
      className={`hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors ${className}`}
      data-label={dataLabel}
    >
      {children}
    </tr>
  )
}

interface ResponsiveTableCellProps {
  children: ReactNode
  className?: string
  header?: boolean
  'data-label'?: string
}

export function ResponsiveTableCell({
  children,
  className = '',
  header = false,
  'data-label': dataLabel,
}: ResponsiveTableCellProps) {
  const baseClasses = header
    ? 'px-6 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider'
    : 'px-6 py-4 whitespace-nowrap text-sm text-secondary-900 dark:text-secondary-100'

  return header ? (
    <th className={`${baseClasses} ${className}`} scope="col">
      {children}
    </th>
  ) : (
    <td className={`${baseClasses} ${className}`} data-label={dataLabel}>
      {children}
    </td>
  )
}
