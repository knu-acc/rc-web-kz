'use client'

import { useEffect, useState, useRef } from 'react'
import { useTheme } from '@/components/providers/ThemeProvider'
import { Moon, Sun } from '@/lib/icons'

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const sunDivRef = useRef<HTMLDivElement>(null)
    const moonDivRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    
    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted || !sunDivRef.current || !moonDivRef.current || !buttonRef.current) return

        const isLight = theme === 'light'
        
        // Обновляем классы через DOM после монтирования для избежания hydration mismatch
        sunDivRef.current.className = `absolute inset-0 text-yellow-500 transition-all duration-300 ${isLight
            ? 'opacity-100 rotate-0 scale-100'
            : 'opacity-0 rotate-90 scale-0'
        }`
        
        moonDivRef.current.className = `absolute inset-0 text-blue-400 transition-all duration-300 ${!isLight
            ? 'opacity-100 rotate-0 scale-100'
            : 'opacity-0 -rotate-90 scale-0'
        }`
        
        buttonRef.current.setAttribute('aria-label', isLight ? 'Переключить на тёмную тему' : 'Переключить на светлую тему')
        buttonRef.current.setAttribute('title', isLight ? 'Тёмная тема' : 'Светлая тема')
    }, [theme, mounted])

    // Всегда рендерим одинаковую структуру (light theme) для предотвращения hydration mismatch
    return (
        <button
            ref={buttonRef}
            onClick={toggleTheme}
            className="relative p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200 min-h-[44px] min-w-[44px] touch-manipulation flex items-center justify-center"
            aria-label="Переключить на тёмную тему"
            title="Тёмная тема"
            suppressHydrationWarning
        >
            <div className="relative w-5 h-5 flex items-center justify-center">
                <div
                    ref={sunDivRef}
                    className="absolute inset-0 text-yellow-500 transition-all duration-300 opacity-100 rotate-0 scale-100"
                    suppressHydrationWarning
                >
                    <Sun size={20} />
                </div>
                <div
                    ref={moonDivRef}
                    className="absolute inset-0 text-blue-400 transition-all duration-300 opacity-0 -rotate-90 scale-0"
                    suppressHydrationWarning
                >
                    <Moon size={20} />
                </div>
            </div>
        </button>
    )
}
