import type { Project } from "@/types/project";
import type { LocalizedText } from "@/types/i18n";

const text = (en: string, ru: string): LocalizedText => ({ en, ru });

const validationCode = `local function canAttack(player: Player, request: AttackRequest): boolean
    if typeof(request.target) ~= "Instance" then
        return false
    end

    local character = player.Character
    local root = character and character:FindFirstChild("HumanoidRootPart")
    local targetRoot = request.target:FindFirstChild("HumanoidRootPart")

    if not root or not targetRoot then
        return false
    end

    return (root.Position - targetRoot.Position).Magnitude <= MAX_RANGE
end`;

const dataCode = `local success, result = pcall(function()
    return playerStore:UpdateAsync(key, function(current)
        local profile = reconcile(current, DEFAULT_PROFILE)
        profile.coins = session.coins
        profile.updatedAt = os.time()
        return profile
    end)
end)

if not success then
    warn(string.format("Profile save failed: %s", result))
end`;

const architecture = {
  nodes: [
    { id: "input", label: "InputController", type: "client" as const, description: text("Collects player input and local intent.", "Собирает ввод игрока и локальные намерения.") },
    { id: "remote", label: "RemoteEvent", type: "network" as const, description: text("Transfers a typed action request to the server.", "Передаёт типизированный запрос действия на сервер.") },
    { id: "service", label: "GameplayService", type: "server" as const, description: text("Validates requests and owns authoritative state.", "Проверяет запросы и управляет авторитетным состоянием.") },
    { id: "store", label: "Player Data", type: "data" as const, description: text("Persists validated progression and rewards.", "Сохраняет проверенную прогрессию и награды.") },
  ],
  connections: [
    { from: "input", to: "remote" },
    { from: "remote", to: "service" },
    { from: "service", to: "store" },
  ],
};

export const projects: Project[] = [
  {
    id: "nightmare-survivors",
    index: "01",
    title: "NIGHTMARE SURVIVORS",
    type: text("Survival / Roguelite Experience", "Survival / Roguelite проект"),
    shortDescription: text("A wave-based survival experience built around combat, enemies and scalable progression.", "Волновой survival-проект с боевой системой, противниками и масштабируемой прогрессией."),
    description: text("A Roblox survival experience where players face escalating enemy waves, develop their loadout and survive dynamic encounters.", "Survival-проект в Roblox, где игроки сражаются с усиливающимися волнами противников, развивают экипировку и участвуют в динамических столкновениях."),
    role: text("Gameplay / Systems Developer", "Разработчик геймплея и систем"),
    engine: "Roblox Studio",
    language: "Luau",
    platform: "Roblox",
    status: text("Released", "Выпущен"),
    robloxUrl: "https://www.roblox.com/games/134558356313859/Nightmare-Survivors",
    cover: "/projects/nightmare-survivors/nightmare-cover.png",
    video: "/projects/nightmare-survivors/gameplay.mp4",
    accent: text("SURVIVAL PROTOCOL", "ПРОТОКОЛ ВЫЖИВАНИЯ"),
    tags: ["Combat", "NPC AI", "Progression", "Events"],
    highlights: [text("Server-authoritative combat", "Авторитетная серверная боевая система"), text("Wave-based encounters", "Волновые столкновения"), text("NPC combat behaviour", "Боевое поведение NPC"), text("Persistent progression", "Сохраняемая прогрессия")],
    systems: [
      { title: text("Combat System", "Боевая система"), description: text("Server-controlled damage, cooldown validation and reusable weapon behaviour.", "Серверный контроль урона, проверка задержек и переиспользуемая логика оружия."), tags: ["RemoteEvent", "Validation", "Luau"] },
      { title: text("NPC AI", "ИИ противников"), description: text("Target selection, movement and combat states designed for concurrent enemies.", "Выбор целей, перемещение и боевые состояния для множества одновременных противников."), tags: ["Pathfinding", "State Machine", "AI"] },
      { title: text("Wave Director", "Контроллер волн"), description: text("Controls encounter pacing, enemy composition and progression between waves.", "Управляет темпом столкновений, составом врагов и переходами между волнами."), tags: ["Game Loop", "Events", "Scaling"] },
      { title: text("Progression", "Прогрессия"), description: text("Persistent upgrades and rewards with server-owned state.", "Сохраняемые улучшения и награды с серверным источником истины."), tags: ["DataStore", "Rewards", "Server"] },
    ],
    architecture,
    codeExamples: [{ title: text("Server-side attack validation", "Серверная проверка атаки"), language: "luau", description: text("Distance and type validation before authoritative damage processing.", "Проверка расстояния и типов до авторитетной обработки урона."), code: validationCode }],
    gallery: [
      { src: "/projects/nightmare-survivors/nightmare-cover.png", alt: text("Players hide from an anomaly in Nightmare Survivors", "Игроки прячутся от аномалии в Nightmare Survivors"), label: text("Nightmare encounter", "Столкновение с аномалией") },
      { src: "/projects/nightmare-survivors/base-upgrade.png", alt: text("Base before and after upgrading", "База до и после улучшения"), label: text("Base progression", "Развитие базы") },
      { src: "/projects/nightmare-survivors/save-tommy.png", alt: text("Save Tommy game event artwork", "Иллюстрация игрового события «Спасти Томми»"), label: text("Save Tommy event", "Событие «Спасти Томми»") },
    ],
  },
  {
    id: "strength-clicker",
    index: "02",
    title: "STRENGTH CLICKER",
    type: text("Simulator / Progression Experience", "Симулятор / Прогрессия"),
    shortDescription: text("A progression-focused simulator with responsive interactions and persistent player data.", "Симулятор с фокусом на прогрессии, отзывчивых взаимодействиях и сохранении данных игрока."),
    description: text("A Roblox clicker experience focused on a clear progression loop, upgrades, rewards and reliable persistent data.", "Roblox-кликер с понятным циклом прогрессии, улучшениями, наградами и надёжным сохранением данных."),
    role: text("Systems Developer", "Разработчик систем"),
    engine: "Roblox Studio",
    language: "Luau",
    platform: "Roblox",
    status: text("Released", "Выпущен"),
    robloxUrl: "https://www.roblox.com/games/134571136953118/Strength-Clicker",
    accent: text("POWER LOOP", "ЦИКЛ СИЛЫ"),
    tags: ["DataStore", "Progression", "Rewards", "UI"],
    highlights: [text("Persistent player profiles", "Постоянные профили игроков"), text("Validated progression", "Проверяемая прогрессия"), text("Upgrade economy", "Экономика улучшений"), text("Responsive feedback", "Отзывчивая обратная связь")],
    systems: [
      { title: text("Progression Loop", "Цикл прогрессии"), description: text("Configurable strength gains, unlock requirements and upgrade curves.", "Настраиваемый рост силы, требования разблокировки и кривые улучшений."), tags: ["Config", "Economy", "Luau"] },
      { title: text("Data Persistence", "Сохранение данных"), description: text("Safe profile updates with defaults, reconciliation and failure diagnostics.", "Безопасное обновление профилей, значения по умолчанию, согласование и диагностика ошибок."), tags: ["DataStore", "pcall", "Profiles"] },
      { title: text("Reward System", "Система наград"), description: text("Server-issued rewards with validation and a single source of truth.", "Серверная выдача наград с проверкой и единым источником истины."), tags: ["Server", "Validation", "Rewards"] },
    ],
    architecture,
    codeExamples: [{ title: text("Persistent profile update", "Обновление постоянного профиля"), language: "luau", description: text("An atomic profile save that reconciles older player data.", "Атомарное сохранение профиля с согласованием старых данных игрока."), code: dataCode }],
    gallery: [
      { alt: text("Strength Clicker gameplay placeholder", "Placeholder геймплея Strength Clicker"), label: text("Core loop", "Основной цикл") },
      { alt: text("Strength Clicker upgrades placeholder", "Placeholder улучшений Strength Clicker"), label: text("Upgrade system", "Система улучшений") },
    ],
  },
  {
    id: "kinopoisk-world",
    index: "03",
    title: "KINОPOISK WORLD",
    type: text("Branded Social Experience", "Брендированный социальный проект"),
    shortDescription: text("A branded multiplayer world created for exploration, social play and live interactions.", "Брендированный мультиплеерный мир для исследования, социального взаимодействия и игровых активностей."),
    description: text("A commercial Roblox world combining branded content, multiplayer exploration and interactive experience systems.", "Коммерческий Roblox-мир, объединяющий брендированный контент, мультиплеерное исследование и интерактивные системы."),
    role: text("Roblox Developer", "Roblox-разработчик"),
    engine: "Roblox Studio",
    language: "Luau",
    platform: "Roblox",
    status: text("Released", "Выпущен"),
    robloxUrl: "https://www.roblox.com/games/131987391427170/unnamed",
    accent: text("BRANDED EXPERIENCE", "БРЕНДИРОВАННЫЙ МИР"),
    tags: ["Multiplayer", "Interactions", "Events", "UI"],
    highlights: [text("Commercial production", "Коммерческий продакшен"), text("Cross-discipline teamwork", "Междисциплинарная работа"), text("Multiplayer interactions", "Мультиплеерные взаимодействия"), text("Production debugging", "Продакшен-отладка")],
    systems: [
      { title: text("Interaction Layer", "Слой взаимодействий"), description: text("Reusable world interactions with clear client and server ownership.", "Переиспользуемые взаимодействия в мире с чётким разделением клиента и сервера."), tags: ["Prompts", "RemoteEvent", "Controllers"] },
      { title: text("Experience Events", "Игровые события"), description: text("State-driven activities coordinated across multiplayer sessions.", "Активности на основе состояний, синхронизированные между мультиплеерными сессиями."), tags: ["Events", "Server", "Replication"] },
      { title: text("UI Integration", "Интеграция UI"), description: text("Responsive interface flows connected to live game state.", "Отзывчивые сценарии интерфейса, связанные с актуальным состоянием игры."), tags: ["UI", "State", "TweenService"] },
    ],
    architecture,
    codeExamples: [],
    gallery: [
      { alt: text("Kinopoisk World environment placeholder", "Placeholder окружения Мира Кинопоиска"), label: text("World environment", "Окружение мира") },
      { alt: text("Kinopoisk World event placeholder", "Placeholder события Мира Кинопоиска"), label: text("Live interaction", "Игровое взаимодействие") },
    ],
  },
];
