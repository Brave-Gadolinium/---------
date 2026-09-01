import type { LocalizedText } from "@/types/i18n";

const text = (en: string, ru: string): LocalizedText => ({ en, ru });

export const siteConfig = {
  name: "NIKITA",
  role: text("ROBLOX / LUAU DEVELOPER", "ROBLOX / LUAU РАЗРАБОТЧИК"),
  description: text(
    "I build gameplay systems, client-server architecture and scalable Roblox experiences.",
    "Разрабатываю игровые системы, клиент-серверную архитектуру и масштабируемые Roblox-проекты.",
  ),
  availableForWork: true,
  experienceYears: "2+",
  links: { telegram: "", discord: "", email: "", github: "", roblox: "", linkedin: "" },
} as const;

export const focusAreas = [
  text("Gameplay Development", "Разработка геймплея"), text("Architecture", "Архитектура"),
  text("Debugging", "Отладка"), text("Optimization", "Оптимизация"),
] as const;

export const workExperience = [
  { company: "PlayTon", duration: text("6 months", "6 месяцев"), role: text("Roblox Developer", "Roblox-разработчик"), description: text("Production development in a multidisciplinary game team.", "Продакшен-разработка в составе многопрофильной игровой команды.") },
  { company: "Hybrid", duration: text("3 months", "3 месяца"), role: text("Roblox Developer", "Roblox-разработчик"), description: text("Gameplay implementation and collaboration with production specialists.", "Реализация игровых механик и работа с продакшен-специалистами.") },
  { company: "Indigo", duration: text("6 months", "6 месяцев"), role: text("Roblox Developer", "Roblox-разработчик"), description: text("Development and support of Roblox gameplay systems.", "Разработка и поддержка игровых систем Roblox.") },
  { company: "DeepFox", duration: text("1 year", "1 год"), role: text("Roblox Developer", "Roblox-разработчик"), description: text("Long-term production work on maintainable game systems and releases.", "Долгосрочная продакшен-работа над поддерживаемыми игровыми системами и релизами.") },
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
