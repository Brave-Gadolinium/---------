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
  experienceYears: "2+",
  studioCount: "05",
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
  { company: "DeepFox", duration: text("Oct 2025 — Aug 2026 · 11 months", "Октябрь 2025 — август 2026 · 11 месяцев"), role: text("Lua Developer", "Разработчик Lua"), description: text("Built Roblox games from the ground up.", "Создание игр с нуля в Roblox Studio.") },
  { company: "Indigo", duration: text("May 2025 — Oct 2025 · 6 months", "Май 2025 — октябрь 2025 · 6 месяцев"), role: text("Roblox Developer", "Roblox-разработчик"), description: text("Built games from scratch, supported live projects and shipped updates.", "Создание игр с нуля, поддержка выпущенных проектов и разработка обновлений.") },
  { company: "Hybrid", duration: text("Apr 2025 — Jul 2025 · 4 months", "Апрель 2025 — июль 2025 · 4 месяца"), role: text("Roblox Developer", "Roblox-разработчик"), description: text("Project-based Roblox Studio development for branded experiences.", "Проектная разработка брендированных игр в Roblox Studio.") },
  { company: "Maff", duration: text("Apr 2025 · 1 month", "Апрель 2025 · 1 месяц"), role: text("Roblox Studio Developer", "Разработчик Roblox Studio"), description: text("Project development and support, including Luana's Maze for Kinopoisk.", "Создание и поддержка проектов, включая «Лабиринт Луаны» для Кинопоиска.") },
  { company: "Protagonist", duration: text("Oct 2024 — Mar 2025 · 6 months", "Октябрь 2024 — март 2025 · 6 месяцев"), role: text("Roblox Developer", "Roblox-разработчик"), description: text("Roblox game development in a startup team.", "Разработка Roblox-игр в команде стартапа.") },
] as const;

export const capabilities = [
  { title: text("Gameplay Systems", "Игровые системы"), description: text("Weapons, abilities, interactions, progression and responsive game mechanics.", "Оружие, способности, взаимодействия, прогрессия и отзывчивые игровые механики."), details: [text("Combat", "Бой"), text("Abilities", "Способности"), text("Progression", "Прогрессия"), text("Interactions", "Взаимодействия")] },
  { title: text("Client / Server", "Клиент / Сервер"), description: text("Secure communication, validation and server-authoritative game logic.", "Безопасное взаимодействие, валидация и авторитетная серверная логика."), details: [text("RemoteEvents", "RemoteEvents"), text("Validation", "Валидация"), text("Replication", "Репликация"), text("Services", "Сервисы")] },
  { title: text("Data Systems", "Системы данных"), description: text("Persistent player profiles, safe saves, migrations and leaderboards.", "Постоянные профили игроков, безопасные сохранения, миграции и таблицы лидеров."), details: [text("DataStore", "DataStore"), text("OrderedDataStore", "OrderedDataStore"), text("Sessions", "Сессии"), text("Migrations", "Миграции")] },
  { title: text("NPC & AI", "NPC и ИИ"), description: text("Movement, targeting, combat behaviour and maintainable state systems.", "Перемещение, выбор целей, боевое поведение и поддерживаемые системы состояний."), details: [text("Pathfinding", "Поиск пути"), text("Targeting", "Выбор цели"), text("State Machines", "Машины состояний"), text("Combat AI", "Боевой ИИ")] },
  { title: text("Game Systems", "Системы игры"), description: text("Rounds, events, quests, rewards and multiplayer match logic.", "Раунды, события, задания, награды и логика мультиплеерных матчей."), details: [text("Rounds", "Раунды"), text("Quests", "Задания"), text("Events", "События"), text("Rewards", "Награды")] },
  { title: text("Optimization", "Оптимизация"), description: text("Profiling, refactoring, networking and performance improvements.", "Профилирование, рефакторинг, сеть и повышение производительности."), details: [text("Profiling", "Профилирование"), text("Networking", "Сеть"), text("Memory", "Память"), text("Scalability", "Масштабирование")] },
] as const;

export const techStack = ["Luau", "Roblox Studio", "Client / Server", "RemoteEvent", "RemoteFunction", "DataStore", "OrderedDataStore", "PathfindingService", "TweenService", "Git", "Wally", "OOP"] as const;

export const workflow = [
  ["01", text("UNDERSTAND", "ИЗУЧИТЬ"), text("Clarify gameplay requirements, constraints and dependencies.", "Уточнить требования к геймплею, ограничения и зависимости.")],
  ["02", text("DESIGN", "СПРОЕКТИРОВАТЬ"), text("Define architecture and client / server responsibilities.", "Определить архитектуру и ответственность клиента и сервера.")],
  ["03", text("BUILD", "СОЗДАТЬ"), text("Implement reusable, secure and maintainable systems.", "Реализовать переиспользуемые, безопасные и поддерживаемые системы.")],
  ["04", text("TEST", "ПРОВЕРИТЬ"), text("Check multiplayer behaviour, edge cases and persistence.", "Проверить мультиплеер, граничные случаи и сохранение данных.")],
  ["05", text("IMPROVE", "УЛУЧШИТЬ"), text("Profile, refactor and prepare the system to scale.", "Профилировать, улучшить код и подготовить систему к масштабированию.")],
] as const;
