/**
 * Компонент для предотвращения FOUC (Flash of Unstyled Content)
 * Вынесен из layout.tsx для лучшей организации кода
 */

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(){
            try {
              var theme = localStorage.getItem('theme');
              if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              }
              // Убираем high-contrast если он был сохранён
              document.documentElement.classList.remove('high-contrast');
            } catch (e) {
              // localStorage недоступен
            }
          })();
        `,
      }}
    />
  )
}
