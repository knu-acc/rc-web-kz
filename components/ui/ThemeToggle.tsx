'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@/components/providers/ThemeProvider'
import { Moon, Sun } from '@/lib/icons'

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-secondary-200 dark:bg-secondary-700 p-0.5" suppressHydrationWarning>
                <div className="h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300 translate-x-0" />
            </div>
        )
    }

    const isLight = theme === 'light'

    return (
        <button
            onClick={toggleTheme}
            className={`theme-toggle-btn relative inline-flex h-6 w-11 items-center rounded-full p-0.5 transition-colors duration-300 touch-manipulation ${
                isLight ? 'bg-primary-500' : 'bg-secondary-600'
            }`}
            aria-label={isLight ? 'Переключить на тёмную тему' : 'Переключить на светлую тему'}
            title={isLight ? 'Тёмная тема' : 'Светлая тема'}
            suppressHydrationWarning
        >
            <div
                className={`h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300 flex items-center justify-center ${
                    isLight ? 'translate-x-0' : 'translate-x-5'
                }`}
            >
                {isLight ? (
                    <Sun size={12} className="text-yellow-500" />
                ) : (
                    <Moon size={12} className="text-blue-400" />
                )}
            </div>
        </button>
    )
}
