# Инструкция по сборке и деплою на хостинг

## Подготовка к сборке

1. Убедитесь, что все изображения загружены в папку `public/img/`
2. Проверьте конфигурацию в `lib/constants.ts` (URL сайта, контакты)
3. Убедитесь, что все зависимости установлены: `npm install`

## Сборка статического сайта

```bash
# Сборка проекта
npm run build
```

После сборки все файлы будут в папке `out/`

## Структура файлов после сборки

```
out/
├── _next/          # Статические ресурсы Next.js
├── blog/           # Страницы блога
├── portfolio/      # Страницы портфолио
├── img/            # Изображения
├── index.html      # Главная страница
├── sitemap.xml     # Карта сайта
├── robots.txt      # Файл для поисковых роботов
├── .htaccess       # Конфигурация Apache (скопируйте из public/.htaccess)
└── ...             # Остальные страницы
```

**ВАЖНО:** После сборки обязательно скопируйте файл `public/.htaccess` в папку `out/` для правильной работы редиректов и кэширования на Apache сервере.

## Загрузка на хостинг

### Вариант 1: Через FTP/SFTP

1. Подключитесь к хостингу через FTP клиент (FileZilla, WinSCP)
2. Загрузите ВСЕ содержимое папки `out/` в корневую директорию сайта (обычно `public_html/` или `www/`)
3. Убедитесь, что файл `index.html` находится в корне

### Вариант 2: Через панель управления хостингом

1. Зайдите в файловый менеджер панели управления
2. Удалите старые файлы (если есть)
3. Загрузите архив с содержимым папки `out/`
4. Распакуйте архив в корневую директорию

## Настройка веб-сервера

### Apache (.htaccess)

Создайте файл `.htaccess` в корне сайта со следующим содержимым:

```apache
# Включить перезапись URL
<IfModule mod_rewrite.c>
  RewriteEngine On
  
  # Редирект с www на без www (или наоборот)
  RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
  RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
  
  # Редирект с HTTP на HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # Обработка Next.js роутов
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ /index.html [L]
</IfModule>

# Кэширование статических файлов
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Изображения
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/avif "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  
  # CSS и JavaScript
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  
  # Шрифты
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  
  # HTML
  ExpiresByType text/html "access plus 1 hour"
</IfModule>

# Сжатие
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Безопасность
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "origin-when-cross-origin"
</IfModule>
```

### Nginx

Добавьте в конфигурацию сайта:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name rc-web.kz www.rc-web.kz;
    
    # Редирект на HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name rc-web.kz www.rc-web.kz;
    
    root /path/to/out;
    index index.html;
    
    # SSL сертификаты
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    # Кэширование статических файлов
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|webp|avif|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Обработка Next.js роутов
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Безопасность
    add_header X-Content-Type-Options "nosniff";
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
}
```

## Проверка после деплоя

1. Откройте сайт в браузере
2. Проверьте консоль браузера на ошибки (F12)
3. Проверьте robots.txt: `https://ваш-сайт.ru/robots.txt`
4. Проверьте sitemap.xml: `https://ваш-сайт.ru/sitemap.xml`
5. Проверьте мета-теги через инструменты:
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Yandex Webmaster](https://webmaster.yandex.ru/)

## Обновление сайта

При обновлении контента:

1. Внесите изменения в код
2. Выполните `npm run build`
3. Загрузите новое содержимое папки `out/` на хостинг
4. Очистите кэш браузера (Ctrl+F5)

## Важные замечания

- **Изображения**: Все изображения должны быть в папке `public/img/` перед сборкой
- **API Routes**: Статический экспорт не поддерживает API routes. Если нужны формы обратной связи, используйте внешние сервисы или настройте на сервере
- **Редиректы**: Редиректы из `next.config.js` работают только при сборке. Для новых редиректов обновите `.htaccess` или конфигурацию Nginx
- **Аналитика**: Убедитесь, что переменные окружения для Google Analytics и Яндекс Метрики настроены правильно

## Решение проблем

### Страницы возвращают 404

- Проверьте, что файл `.htaccess` (для Apache) или конфигурация Nginx настроены правильно
- Убедитесь, что все файлы загружены в корневую директорию

### Изображения не загружаются

- Проверьте пути к изображениям (должны начинаться с `/img/`)
- Убедитесь, что папка `img` загружена на хостинг

### Стили не применяются

- Очистите кэш браузера
- Проверьте, что папка `_next/static` загружена полностью
