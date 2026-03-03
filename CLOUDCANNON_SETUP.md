# CloudCannon CMS Setup

## Overview
Сайт VIP-RU Sauna тепер налаштований для роботи з CloudCannon CMS. Це дозволяє легко керувати контентом через вебінтерфейс без написання коду.

## Setup Instructions

### 1. Connect to CloudCannon
1. Перейдіть на https://cloudcannon.com
2. Створіть акаунт або увійдіть
3. Натисніть "Connect Repository"
4. Виберіть свій Git репозиторій (GitHub, GitLab, Bitbucket)
5. CloudCannon автоматично обнаружить конфіг з файлу `cloudcannon.config.yml`

### 2. Структура контенту

#### Collections

**Pages** (`_content/pages/`)
- Основні сторінки сайту
- Полі: title, slug, mainTitle, description, image

**Saunas** (`_content/saunas/`)
- Описи бань та сервісів
- Полі: title, slug, mainTitle, descriptionLabel, description, image, gallery, videoUrl, price

**Services** (`_content/services/`)
- Послуги та додаткові опції
- Полі: title, description, price, category (banshchik, veniki, massage, other)

**Site Content** (`_content/`)
- Глобальний контент сайту
- **homepage.yml**: Hero title, subtitle, about section, footer info, контакти
- **contacts.yml**: Повна контактна інформація, графік роботи, соціальні мережі

### 3. Медіа

Усі завантажені зображення збираються в папці `/images`, що автоматично обслуговується як статичний контент.

### 4. Редагування контенту

1. Перейдіть у CloudCannon Dashboard
2. Виберіть потрібну Collection (Pages, Saunas, Services, etc.)
3. Натисніть на елемент для редагування
4. Робіть зміни і натискайте "Save"
5. CloudCannon автоматично створить коміт в Git

### 5. Публікація

Зміни публікуються через вбудовану Hosting платформу CloudCannon або через вказаний Webhook на ваш хостинг.

## File Structure

```
_content/
├── homepage.yml          # Головна сторінка контент
├── contacts.yml          # Контактна інформація
├── pages/                # Додаткові сторінки
├── saunas/               # Описи бань
└── services/             # Послуги
```

## Configurati

`cloudcannon.config.yml` містить всю конфігурацію:
- Шляхи до контенту
- Схеми полів для кожної колекції
- Налаштування медіа
- Editable zones

## Migration from DECAP CMS

Старі файли з DECAP CMS видалені:
- `admin/config.yml` (DECAP конфіг)
- Netlify Identity скрипти з HTML

Новий конфіг: `cloudcannon.config.yml`

## Support

Більше інформації на: https://cloudcannon.com/documentation/
