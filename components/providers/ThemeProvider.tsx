'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')

  useEffect(() => {
    // Проверяем сохранённую тему в localStorage или системные настройки
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initialTheme = savedTheme || systemTheme

    setThemeState(initialTheme)

    // Удаляем все классы тем синхронно
    document.documentElement.classList.remove('dark', 'high-contrast')
    
    // Применяем начальную тему синхронно
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark')
    }

    // Слушаем изменения системной темы (если пользователь не выбирал тему вручную)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light'
        setThemeState(newTheme)
        document.documentElement.classList.remove('dark')
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark')
        }
      }
    }
    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [])

  const setTheme = (newTheme: Theme) => {
    // Удаляем все классы тем синхронно ПЕРЕД обновлением состояния
    document.documentElement.classList.remove('dark', 'high-contrast')
    
    // Применяем новую тему синхронно
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    }
    
    // Обновляем состояние и localStorage после применения классов
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {/* Script to avoid FOUC (optional, but handled by useEffect) */}
      {/* We render children always to ensure context is available */}
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
