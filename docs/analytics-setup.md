# Настройка аналитики для RC-WEB.KZ

## Google Search Console

1. Перейти на https://search.google.com/search-console
2. Добавить домен `rc-web.kz`
3. Верифицировать через DNS или HTML-файл
4. Отправить sitemap: `https://rc-web.kz/sitemap.xml`

## Яндекс.Вебмастер

1. Перейти на https://webmaster.yandex.ru
2. Добавить сайт `rc-web.kz`
3. Верифицировать через DNS или HTML-файл
4. Отправить sitemap: `https://rc-web.kz/sitemap.xml`

## Google Analytics 4

1. Создать аккаунт GA4 на https://analytics.google.com
2. Добавить код отслеживания на сайт (через GTM или напрямую)
3. Настроить цели (конверсии):
   - Клик на WhatsApp
   - Клик на телефон
   - Скачивание брифа
   - Отправка формы

## Yandex Metrica

1. Создать счётчик на https://metrika.yandex.ru
2. Добавить ID в переменные окружения: `NEXT_PUBLIC_YANDEX_METRICA_ID`
3. Настроить цели (аналогично GA4)
4. Включить Вебвизор

## Google Tag Manager (опционально)

1. Создать контейнер GTM на https://tagmanager.google.com
2. Добавить ID в переменные окружения: `NEXT_PUBLIC_GTM_ID`
3. Настроить теги и триггеры для отслеживания конверсий
