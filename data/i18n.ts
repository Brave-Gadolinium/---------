import type { Language } from "@/types/i18n";

export const messages = {
  en: {
    navigation: { projects: "Projects", systems: "Systems", about: "About", contact: "Contact", available: "Available for work", open: "Open navigation", close: "Close navigation" },
    hero: { availability: "Open to new opportunities", kicker: "GAMEPLAY · ARCHITECTURE · SYSTEMS", viewProjects: "View projects", contact: "Contact me", downloadCv: "Download CV", years: "years in production", studios: "game studios", releases: "selected projects", profile: "DEVELOPER_PROFILE", role: "ROLE", roleValue: "Roblox Developer", language: "MAIN LANGUAGE", focus: "FOCUS", focusValue: "Gameplay Systems", architecture: "ARCHITECTURE", architectureValue: "Client / Server", online: "SYSTEMS ONLINE", status: "AVAILABLE", scroll: "SCROLL TO EXPLORE" },
    projects: { eyebrow: "01 / SELECTED WORK", title: "SELECTED PROJECTS", description: "Roblox experiences and production systems I helped bring to release.", project: "PROJECT", open: "OPEN CASE", ariaOpen: "Open project case study", viewAll: "View all projects", showLess: "Show fewer" },
    sections: {
      capabilities: { eyebrow: "02 / CAPABILITIES", title: "WHAT I BUILD", description: "Production-ready systems, not isolated features." },
      stack: { eyebrow: "03 / TOOLSET", title: "TECHNICAL STACK", description: "Tools used to ship and support real Roblox experiences." },
      process: { eyebrow: "04 / PROCESS", title: "HOW I WORK", description: "A practical pipeline from a game-design requirement to a maintainable production system." },
      about: { eyebrow: "05 / PROFILE", title: "ABOUT", profilePhotoAlt: "Portrait of Nikita Pugachev, Roblox and Luau developer", lead: "Roblox developer focused on gameplay systems, scalable architecture and production-ready mechanics.", body: "I have more than two years of commercial Roblox development experience. I build games from scratch, support live projects and ship updates while collaborating with game designers, artists, product managers and developers.", focus: "FOCUS", production: "PRODUCTION", experience: "WORK EXPERIENCE", experienceDescription: "Professional path in Roblox production teams." },
      contact: { eyebrow: "06 / CONTACT", title: "LET'S BUILD", accent: "SOMETHING.", description: "Looking for a Roblox developer who can own gameplay systems and multiplayer architecture? Let's talk." },
    },
    modal: { caseStudy: "CASE STUDY", viewRoblox: "View on Roblox", close: "Close project", previewEngine: "ENGINE / ROBLOX STUDIO", previewStatus: "STATUS", overview: "Overview", systems: "Systems", architecture: "Architecture", code: "Code", gallery: "Gallery", tabsLabel: "Project details tabs", overviewLabel: "OVERVIEW", roleLabel: "MY ROLE", roleText: "I worked on production gameplay and technical systems, collaborating with designers, artists and other developers to take mechanics from requirements to a stable release.", details: "PROJECT DETAILS", role: "ROLE", engine: "ENGINE", language: "LANGUAGE", platform: "PLATFORM", status: "STATUS", system: "SYS", closeGallery: "Close gallery", previous: "Previous image", next: "Next image", replaceMedia: "Replace this placeholder via data/projects.ts" },
    architecture: { network: "NETWORK" },
    footer: { role: "ROBLOX / LUAU DEVELOPER", back: "BACK TO TOP ↑" },
  },
  ru: {
    navigation: { projects: "Проекты", systems: "Системы", about: "Обо мне", contact: "Контакты", available: "Открыт к предложениям", open: "Открыть навигацию", close: "Закрыть навигацию" },
    hero: { availability: "Открыт к новым предложениям", kicker: "ГЕЙМПЛЕЙ · АРХИТЕКТУРА · СИСТЕМЫ", viewProjects: "Смотреть проекты", contact: "Связаться", downloadCv: "Скачать CV", years: "года в продакшене", studios: "игровые студии", releases: "избранных проектов", profile: "ПРОФИЛЬ_РАЗРАБОТЧИКА", role: "РОЛЬ", roleValue: "Roblox-разработчик", language: "ОСНОВНОЙ ЯЗЫК", focus: "ФОКУС", focusValue: "Игровые системы", architecture: "АРХИТЕКТУРА", architectureValue: "Клиент / Сервер", online: "СИСТЕМЫ В СЕТИ", status: "ДОСТУПЕН", scroll: "ЛИСТАЙТЕ НИЖЕ" },
    projects: { eyebrow: "01 / ИЗБРАННЫЕ РАБОТЫ", title: "ИЗБРАННЫЕ ПРОЕКТЫ", description: "Roblox-проекты и продакшен-системы, которые я помог довести до релиза.", project: "ПРОЕКТ", open: "ОТКРЫТЬ", ariaOpen: "Открыть описание проекта", viewAll: "Увидеть все", showLess: "Свернуть" },
    sections: {
      capabilities: { eyebrow: "02 / КОМПЕТЕНЦИИ", title: "ЧТО Я СОЗДАЮ", description: "Готовые к продакшену системы, а не изолированные функции." },
      stack: { eyebrow: "03 / ИНСТРУМЕНТЫ", title: "ТЕХНИЧЕСКИЙ СТЕК", description: "Инструменты для выпуска и поддержки реальных Roblox-проектов." },
      process: { eyebrow: "04 / ПРОЦЕСС", title: "КАК Я РАБОТАЮ", description: "Практический путь от требований геймдизайна до поддерживаемой продакшен-системы." },
      about: { eyebrow: "05 / ПРОФИЛЬ", title: "ОБО МНЕ", profilePhotoAlt: "Портрет Никиты Пугачева, Roblox и Luau разработчика", lead: "Roblox-разработчик с фокусом на игровых системах, масштабируемой архитектуре и готовых к продакшену механиках.", body: "Более двух лет занимаюсь коммерческой Roblox-разработкой. Создаю игры с нуля, поддерживаю выпущенные проекты и разрабатываю обновления во взаимодействии с геймдизайнерами, художниками, продакт-менеджерами и разработчиками.", focus: "ФОКУС", production: "ПРОДАКШЕН", experience: "ОПЫТ РАБОТЫ", experienceDescription: "Профессиональный путь в командах Roblox-разработки." },
      contact: { eyebrow: "06 / КОНТАКТЫ", title: "ДАВАЙТЕ СОЗДАДИМ", accent: "ЧТО-ТО ВМЕСТЕ.", description: "Ищете Roblox-разработчика, который возьмёт на себя игровые системы и мультиплеерную архитектуру? Давайте обсудим задачу." },
    },
    modal: { caseStudy: "ПРОЕКТ", viewRoblox: "Открыть в Roblox", close: "Закрыть проект", previewEngine: "ДВИЖОК / ROBLOX STUDIO", previewStatus: "СТАТУС", overview: "Обзор", systems: "Системы", architecture: "Архитектура", code: "Код", gallery: "Галерея", tabsLabel: "Разделы проекта", overviewLabel: "ОБЗОР", roleLabel: "МОЯ РОЛЬ", roleText: "Я работал над продакшен-механиками и техническими системами, взаимодействуя с дизайнерами, художниками и разработчиками — от требований до стабильного релиза.", details: "ДЕТАЛИ ПРОЕКТА", role: "РОЛЬ", engine: "ДВИЖОК", language: "ЯЗЫК", platform: "ПЛАТФОРМА", status: "СТАТУС", system: "СИС", closeGallery: "Закрыть галерею", previous: "Предыдущее изображение", next: "Следующее изображение", replaceMedia: "Замените этот placeholder через data/projects.ts" },
    architecture: { network: "СЕТЬ" },
    footer: { role: "ROBLOX / LUAU РАЗРАБОТЧИК", back: "НАВЕРХ ↑" },
  },
} as const;

export function getMessages(language: Language) {
  return messages[language];
}
