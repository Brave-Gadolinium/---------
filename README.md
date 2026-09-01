# Nikita — Roblox / Luau Developer Portfolio

Одностраничное техническое портфолио Roblox-разработчика. Главный контент — интерактивные case study с системами, архитектурой, примерами Luau-кода и галереей.

## Стек

- Next.js (App Router), React, TypeScript strict mode
- Tailwind CSS
- Motion for React
- Lucide Icons

## Запуск

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`.

Production-сборка:

```bash
npm run build
npm run start
```

Для корректных абсолютных Open Graph URL при публикации задайте `NEXT_PUBLIC_SITE_URL=https://ваш-домен.ru`.

Статическая проверка:

```bash
npm run lint
```

## Изменение контента

Основные персональные данные, статус доступности, студии, навыки и контакты находятся в `data/site.ts`. Пустая контактная ссылка автоматически не отображается.

Русская и английская версии контента хранятся рядом в объектах `{ en, ru }`. Общие подписи интерфейса находятся в `data/i18n.ts`, а опыт работы — в массиве `workExperience` файла `data/site.ts`. Порядок элементов массива определяет порядок компаний в хронологии.

Выделение и копирование отключено для всего сайта, кроме секции с атрибутом `data-copy-allowed`. По умолчанию этот атрибут установлен только на контактном разделе.

Проекты находятся в `data/projects.ts`. Чтобы добавить проект, скопируйте один объект и укажите уникальный `id`. Вкладки Code, Architecture и Gallery автоматически скрываются, если соответствующий массив пуст.

Ссылка вида `/?project=nightmare-survivors` сразу открывает нужный case study. Back закрывает окно, Forward открывает его снова.

## Изображения и видео

Сейчас используются лёгкие технические placeholders, потому что исходные медиа не были предоставлены. Для изображений добавьте файлы в `public/projects/<project-id>/` и поле `src` в элементах `gallery`/обложке, затем замените placeholder на `next/image` в `ProjectCard` и `ProjectModal`.

Для локального видео добавьте MP4/WebM в `public/projects/<project-id>/` и поле `video` в тип `Project`; выводите `<video controls preload="metadata">` без autoplay со звуком. Для YouTube храните только ID ролика и создавайте iframe при открытии модального окна, чтобы не нагружать первичную загрузку.

## Code Example

Добавьте объект в `codeExamples`:

```ts
{
  title: "Server-side validation",
  language: "luau",
  description: "What this snippet demonstrates.",
  code: `-- 10–40 строк безопасного демонстрационного кода`,
}
```

Не публикуйте ключи, закрытые production-системы и конфиденциальный код заказчиков.

## Аналитика

Подключайте Google Analytics или Plausible в `app/layout.tsx` только после добавления реального идентификатора. Фиктивный tracking ID намеренно отсутствует.
