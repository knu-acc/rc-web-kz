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
            <div className="relative w-12 h-6 rounded-full bg-secondary-200 dark:bg-secondary-700 min-h-[44px] min-w-[48px] flex items-center" suppressHydrationWarning>
                <div className="w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 translate-x-1" />
            </div>
        )
    }

    const isLight = theme === 'light'

    return (
        <button
            onClick={toggleTheme}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 min-h-[44px] min-w-[48px] flex items-center touch-manipulation ${
                isLight ? 'bg-primary-500' : 'bg-secondary-700'
            }`}
            aria-label={isLight ? 'Переключить на тёмную тему' : 'Переключить на светлую тему'}
            title={isLight ? 'Тёмная тема' : 'Светлая тема'}
            suppressHydrationWarning
        >
            {/* Switch thumb */}
            <div
                className={`absolute w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center ${
                    isLight ? 'translate-x-1' : 'translate-x-6'
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
