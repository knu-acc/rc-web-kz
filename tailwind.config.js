/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F2F4F7',
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#141517',
        },
        brand: {
          DEFAULT: '#FF4F18',
          hover: '#E03E0F',
          muted: '#FFF0EC',
        },
        charcoal: {
          DEFAULT: '#2A2D35',
          light: '#3D4150',
        },
        'text-main': '#0F1014',
        'text-muted': '#6B7280',
        'border-light': 'rgba(15, 16, 20, 0.08)',
        semantic: {
          success: '#34C759',
          error: '#FF3B30',
          warning: '#FFCC00',
        },
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        pill: '9999px',
      },
      boxShadow: {
        float: '0 12px 32px -4px rgba(0,0,0,0.08)',
        glow: '0 0 24px rgba(255, 79, 24, 0.3)',
      },
      transitionTimingFunction: {
        bento: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'zoom-in-95': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slide-in-from-bottom': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--accordion-height)', opacity: '1' },
        },
        'accordion-up': {
          from: { height: 'var(--accordion-height)', opacity: '1' },
          to: { height: '0', opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'zoom-in-95': 'zoom-in-95 0.3s ease-out',
        'slide-in-from-bottom': 'slide-in-from-bottom 0.4s ease-out',
        marquee: 'marquee 30s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
