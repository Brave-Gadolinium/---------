import type { LocalizedText } from "@/types/i18n";

const text = (en: string, ru: string): LocalizedText => ({ en, ru });

export const siteConfig = {
  name: "NIKITA",
  fullName: text("Nikita Vyacheslavovich Pugachev", "Пугачев Никита Вячеславович"),
  role: text("ROBLOX / LUAU DEVELOPER", "ROBLOX / LUAU РАЗРАБОТЧИК"),
  description: text(
    "I build gameplay systems, client-server architecture and scalable Roblox experiences.",
    "Разрабатываю игровые системы, клиент-серверную архитектуру и масштабируемые Roblox-проекты.",
  ),
  availableForWork: true,
  experienceYears: "5+",
  studioCount: "04",
  projectCount: "16",
  profileImage: "/profile/nikita.png",
  cv: {
    en: "/cv/nikita-roblox-developer-cv-en.pdf",
    ru: "/cv/nikita-roblox-developer-cv-ru.pdf",
  },
  contacts: [
    { id: "telegram", label: "@Brave_Gadolinium", href: "https://t.me/Brave_Gadolinium" },
    { id: "email", label: "np_v@inbox.ru", href: "mailto:np_v@inbox.ru" },
    { id: "roblox", label: "main_23Kld", href: "https://www.roblox.com/users/4349007560/profile" },
    { id: "github", label: "Brave-Gadolinium", href: "https://github.com/Brave-Gadolinium/Brave-Gadolinium" },
    { id: "website", label: "nikita-hazel.vercel.app", href: "https://nikita-hazel.vercel.app" },
  ],
} as const;

export const focusAreas = [
  text("Gameplay Development", "Разработка геймплея"), text("Architecture", "Архитектура"),
  text("Debugging", "Отладка"), text("Optimization", "Оптимизация"),
] as const;

export const workExperience = [
  { company: "DeepFox", duration: text("Sep 2025 — Oct 2026 · 1 year 2 months", "Сентябрь 2025 — октябрь 2026 · 1 год 2 месяца"), role: text("Senior Tech Lead", "Senior Tech Lead"), description: text("Led 3 programmers and coordinated cross-functional game development from brief to release. Built Overture, an internal framework that standardized architecture, reduced bugs and sped up development. Ran daily stand-ups and technical interviews; interviewed 38 candidates, hired 3, and shipped 26 games.", "Руководил командой из 3 программистов и координировал разработку игр по ТЗ вместе с геймдизайнерами, дизайнерами, саундмейкерами, 3D-моделлерами, программистами и продакт-менеджером. Создал внутренний фреймворк Overture: он стандартизировал архитектуру проектов, помог снизить число багов и ускорил разработку. Проводил ежедневные стендапы и технические собеседования; провёл 38 интервью, нанял 3 разработчиков, участвовал в запуске 26 игр.") },
  { company: "Indigo", duration: text("Sep 2024 — Sep 2025 · 1 year", "Сентябрь 2024 — сентябрь 2025 · 1 год"), role: text("Middle+ → Senior Roblox Developer", "Middle+ → Senior Roblox-разработчик"), description: text("Maintained and optimized popular Roblox games, refactored code, refreshed visuals and updated mechanics in collaboration with a producer, 3D artists and developers.", "Поддерживал и оптимизировал популярные игры, рефакторил код, обновлял визуальное оформление и игровые механики. Работал с продюсером, 3D-художниками и программистами.") },
  { company: "Playton", duration: text("Aug 2022 — Jul 2024 · 2 years", "Август 2022 — июль 2024 · 2 года"), role: text("Junior+ → Middle Roblox Developer", "Junior+ → Middle Roblox-разработчик"), description: text("Built games from technical briefs and supported acquired titles. Optimized and refactored code, updated mechanics, refreshed visuals and built environments in collaboration with a producer.", "Создавал игры по ТЗ и поддерживал купленные компанией проекты. Оптимизировал и рефакторил код, обновлял механики и визуальное оформление, занимался билдингом. Работал с продюсером.") },
  { company: "CODDY", duration: text("Sep 2021 — Aug 2022 · 1 year", "Сентябрь 2021 — август 2022 · 1 год"), role: text("Intern", "Стажёр"), description: text("Created Roblox games from technical briefs, collaborated with a producer and built game environments.", "Создавал игры по ТЗ, работал с продюсером и занимался билдингом.") },
] as const;

export const capabilities = [
  { title: text("Gameplay Systems", "Игровые системы"), description: text("Weapons, abilities, interactions, progression and responsive game mechanics.", "Оружие, способности, взаимодействия, прогрессия и отзывчивые игровые механики."), details: [text("Combat", "Бой"), text("Abilities", "Способности"), text("Progression", "Прогрессия"), text("Interactions", "Взаимодействия")] },
  { title: text("Client / Server", "Клиент / Сервер"), description: text("Secure communication, validation and server-authoritative game logic.", "Безопасное взаимодействие, валидация и авторитетная серверная логика."), details: [text("RemoteEvents", "RemoteEvents"), text("Validation", "Валидация"), text("Replication", "Репликация"), text("Services", "Сервисы")] },
  { title: text("Data Systems", "Системы данных"), description: text("Persistent player profiles, safe saves, migrations and leaderboards.", "Постоянные профили игроков, безопасные сохранения, миграции и таблицы лидеров."), details: [text("DataStore", "DataStore"), text("OrderedDataStore", "OrderedDataStore"), text("Sessions", "Сессии"), text("Migrations", "Миграции")] },
  { title: text("NPC & AI", "NPC и ИИ"), description: text("Movement, targeting, combat behaviour and maintainable state systems.", "Перемещение, выбор целей, боевое поведение и поддерживаемые системы состояний."), details: [text("Pathfinding", "Поиск пути"), text("Targeting", "Выбор цели"), text("State Machines", "Машины состояний"), text("Combat AI", "Боевой ИИ")] },
  { title: text("Game Systems", "Системы игры"), description: text("Rounds, events, quests, rewards and multiplayer match logic.", "Раунды, события, задания, награды и логика мультиплеерных матчей."), details: [text("Rounds", "Раунды"), text("Quests", "Задания"), text("Events", "События"), text("Rewards", "Награды")] },
  { title: text("Optimization", "Оптимизация"), description: text("Profiling, refactoring, networking and performance improvements.", "Профилирование, рефакторинг, сеть и повышение производительности."), details: [text("Profiling", "Профилирование"), text("Networking", "Сеть"), text("Memory", "Память"), text("Scalability", "Масштабирование")] },
] as const;

export const techStack = ["Luau", "roblox-ts", "Rojo", "Wally", "Rokit", "RbxUtil", "Git", "GitHub", "Roblox Studio MCP", "Cursor", "VS Code", "Confluence", "Slack", "Discord", "Adaptive UI", "Environment Building", "AI Asset Generation"] as const;

export const workflow = [
  ["01", text("UNDERSTAND", "ИЗУЧИТЬ"), text("Clarify gameplay requirements, constraints and dependencies.", "Уточнить требования к геймплею, ограничения и зависимости.")],
  ["02", text("DESIGN", "СПРОЕКТИРОВАТЬ"), text("Define architecture and client / server responsibilities.", "Определить архитектуру и ответственность клиента и сервера.")],
  ["03", text("BUILD", "СОЗДАТЬ"), text("Implement reusable, secure and maintainable systems.", "Реализовать переиспользуемые, безопасные и поддерживаемые системы.")],
  ["04", text("TEST", "ПРОВЕРИТЬ"), text("Check multiplayer behaviour, edge cases and persistence.", "Проверить мультиплеер, граничные случаи и сохранение данных.")],
  ["05", text("IMPROVE", "УЛУЧШИТЬ"), text("Profile, refactor and prepare the system to scale.", "Профилировать, улучшить код и подготовить систему к масштабированию.")],
] as const;
