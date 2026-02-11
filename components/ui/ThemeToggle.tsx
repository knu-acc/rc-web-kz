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
            <div className="relative inline-flex h-8 w-14 items-center rounded-full bg-secondary-200 dark:bg-secondary-700 p-1" suppressHydrationWarning>
                <div className="h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 translate-x-0" />
            </div>
        )
    }

    const isLight = theme === 'light'

    return (
        <button
            onClick={toggleTheme}
            className={`relative inline-flex h-8 w-14 items-center rounded-full p-1 transition-colors duration-300 touch-manipulation ${
                isLight ? 'bg-primary-500' : 'bg-secondary-700'
            }`}
            aria-label={isLight ? 'Переключить на тёмную тему' : 'Переключить на светлую тему'}
            title={isLight ? 'Тёмная тема' : 'Светлая тема'}
            suppressHydrationWarning
        >
            {/* Switch thumb */}
            <div
                className={`h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center ${
                    isLight ? 'translate-x-0' : 'translate-x-6'
                }`}
            >
                {isLight ? (
                    <Sun size={14} className="text-yellow-500" />
                ) : (
                    <Moon size={14} className="text-blue-400" />
                )}
            </div>
        </button>
    )
}
