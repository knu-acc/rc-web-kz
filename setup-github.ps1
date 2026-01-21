# Скрипт для настройки GitHub репозитория
# ВАЖНО: Замените YOUR_USERNAME на ваш GitHub username перед запуском!

Write-Host "🚀 Настройка GitHub репозитория..." -ForegroundColor Green

# Проверка, инициализирован ли Git
if (-not (Test-Path .git)) {
    Write-Host "📦 Инициализация Git репозитория..." -ForegroundColor Yellow
    git init
}

# Добавление всех файлов
Write-Host "📝 Добавление файлов..." -ForegroundColor Yellow
git add .

# Создание первого коммита
Write-Host "💾 Создание коммита..." -ForegroundColor Yellow
git commit -m "Initial commit: Next.js website with 15 SEO-optimized pages"

Write-Host ""
Write-Host "✅ Локальный репозиторий готов!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Следующие шаги:" -ForegroundColor Cyan
Write-Host "1. Создайте репозиторий на GitHub.com" -ForegroundColor White
Write-Host "2. Выполните команды (замените YOUR_USERNAME):" -ForegroundColor White
Write-Host ""
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/rc-web-kz.git" -ForegroundColor Yellow
Write-Host "   git branch -M main" -ForegroundColor Yellow
Write-Host "   git push -u origin main" -ForegroundColor Yellow
Write-Host ""
