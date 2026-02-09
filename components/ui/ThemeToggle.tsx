'use client'

import { useTheme } from '@/components/providers/ThemeProvider'
import { Moon, Sun } from '@/lib/icons'

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors duration-200 min-h-[44px] min-w-[44px] touch-manipulation flex items-center justify-center"
            aria-label={theme === 'light' ? 'Переключить на тёмную тему' : 'Переключить на светлую тему'}
            title={theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
        >
            <div className="relative w-5 h-5 flex items-center justify-center">
                <Sun
                    className={`absolute inset-0 text-yellow-500 transition-all duration-300 ${theme === 'light'
                            ? 'opacity-100 rotate-0 scale-100'
                            : 'opacity-0 rotate-90 scale-0'
                        }`}
                    size={20}
                />
                <Moon
                    className={`absolute inset-0 text-blue-400 transition-all duration-300 ${theme === 'dark'
                            ? 'opacity-100 rotate-0 scale-100'
                            : 'opacity-0 -rotate-90 scale-0'
                        }`}
                    size={20}
                />
            </div>
        </button>
    )
}
