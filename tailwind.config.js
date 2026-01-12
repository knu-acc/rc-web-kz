/**
 * Tailwind CSS Configuration
 * RC-WEB.KZ - Web Development Agency
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Files to scan for class names
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  
  darkMode: 'class',
  
  theme: {
    extend: {
      // Color palette
      colors: {
        primary: {
          50: '#f0f0ff',
          100: '#e0e0ff',
          200: '#c7c7fe',
          300: '#a3a3fc',
          400: '#8080f9',
          500: '#6366f1',
          600: '#5B58C3',
          700: '#4f46e5',
          800: '#4338ca',
          900: '#3730a3',
          DEFAULT: '#6366f1',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
          DEFAULT: '#1e293b',
        },
        accent: {
          teal: '#14b8a6',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          rose: '#f43f5e',
          amber: '#f59e0b',
          emerald: '#10b981',
        },
      },
      
      // Typography
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cabinet Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      
      // Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Border radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      
      // Shadows
      boxShadow: {
        'soft': '0 2px 20px -5px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 30px -10px rgba(0, 0, 0, 0.12)',
        'large': '0 20px 50px -15px rgba(0, 0, 0, 0.2)',
      },
      
      // Animations
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  
  plugins: [],
}
