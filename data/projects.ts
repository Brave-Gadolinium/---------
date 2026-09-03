import type { Project } from "@/types/project";
import type { LocalizedText } from "@/types/i18n";

const text = (en: string, ru: string): LocalizedText => ({ en, ru });

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

const existingProjects: Project[] = [
  {
    id: "nightmare-survivors",
    index: "01",
    title: "NIGHTMARE SURVIVORS",
    type: text("Survival / Roguelite Experience", "Survival / Roguelite проект"),
    shortDescription: text("Team up, build a base and survive increasingly dangerous nights filled with anomalies.", "Собери команду, построй базу и переживи всё более опасные ночи с аномалиями."),
    description: text("A cooperative survival experience for parties of up to four players. The production architecture separates the lobby and survival place, keeps combat, resources, purchases and run progression server-authoritative, and supports configurable night scenarios, base construction, crafting, personal enhancements and resumable solo or party sessions.", "Кооперативное выживание для пати до четырёх игроков. Продакшен-архитектура разделяет лобби и плейс выживания, оставляет бой, ресурсы, покупки и прогрессию забега под контролем сервера и поддерживает настраиваемые сценарии ночей, строительство базы, крафт, личные усиления и восстановление одиночных или групповых сессий."),
    role: text("Gameplay / Systems Developer", "Разработчик геймплея и систем"),
    engine: "Roblox Studio",
    language: "Luau",
    platform: "Roblox",
    status: text("Released", "Выпущен"),
    robloxUrl: "https://www.roblox.com/games/134558356313859/Nightmare-Survivors",
    cover: "/projects/nightmare-survivors/nightmare-cover.png",
    video: "/projects/nightmare-survivors/gameplay.mp4",
    accent: text("SURVIVAL PROTOCOL", "ПРОТОКОЛ ВЫЖИВАНИЯ"),
    tags: ["Co-op", "Server Authority", "Run Persistence", "Config-Driven"],
    highlights: [text("Server-authoritative run state", "Авторитетное состояние забега на сервере"), text("Solo saves and party rejoin", "Сохранение соло-забегов и возврат в пати"), text("Configurable night scenarios", "Настраиваемые сценарии ночей"), text("Crafting and base progression", "Крафт и развитие базы")],
    systems: [
      { title: text("Lobby, Party & Rejoin", "Лобби, пати и возврат"), description: text("A separate lobby starts parties of up to four players, while runtime snapshots allow interrupted party members to rejoin an active run.", "Отдельное лобби запускает пати до четырёх игроков, а runtime-снимки позволяют участникам вернуться в незавершённый забег."), tags: ["TeleportService", "Party", "Snapshots"] },
      { title: text("Resources, Crafting & Base", "Ресурсы, крафт и база"), description: text("Players carry and deposit shared run resources, craft at the workbench and purchase or upgrade stationary buildings through validated server actions.", "Игроки переносят и сдают общие ресурсы забега, создают предметы на верстаке и покупают или улучшают стационарные постройки через проверяемые сервером действия."), tags: ["Economy", "Crafting", "Buildings"] },
      { title: text("Night Scenario Runtime", "Сценарии ночей"), description: text("Config-driven day and night phases coordinate threat level, staged enemy waves, anomalies, rewards and post-night enhancement offers.", "Конфигурируемые фазы дня и ночи управляют уровнем угрозы, волнами врагов, аномалиями, наградами и выбором усилений после ночи."), tags: ["Config", "Waves", "Enhancements"] },
      { title: text("Authoritative State & Saves", "Серверное состояние и сохранения"), description: text("The server owns damage, economy and progression; compact state updates feed the HUD, while versioned profiles and solo snapshots preserve long-term and run data.", "Сервер управляет уроном, экономикой и прогрессией; компактные обновления питают HUD, а версионированные профили и снимки сохраняют постоянные данные и состояние забега."), tags: ["DataStore", "Validation", "Replication"] },
    ],
    architecture,
    codeExamples: [],
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
    shortDescription: text("Train strength, evolve fireballs, collect pets and compete for the King of the Hill.", "Тренируй силу, улучшай огненные шары, собирай питомцев и сражайся за вершину холма."),
    description: text("A content-rich progression simulator where players train strength, unlock fireball evolutions, collect pets and compete in PvP. The project uses profile-backed progression and a modular content layer for powers, pets, areas, quests, seasons, events, boosts, ranks, trades and clans.", "Контентный симулятор прогрессии, где игроки тренируют силу, открывают эволюции огненных шаров, собирают питомцев и участвуют в PvP. Проект использует профильное сохранение и модульный слой контента для сил, питомцев, зон, заданий, сезонов, событий, усилений, рангов, трейдов и кланов."),
    role: text("Systems Developer", "Разработчик систем"),
    engine: "Roblox Studio",
    language: "Luau",
    platform: "Roblox",
    status: text("Released", "Выпущен"),
    robloxUrl: "https://www.roblox.com/games/134571136953118/Strength-Clicker",
    cover: "/projects/strength-clicker/cover.webp",
    accent: text("POWER LOOP", "ЦИКЛ СИЛЫ"),
    tags: ["Progression", "ProfileService", "Live Ops", "Social Systems"],
    highlights: [text("Profile-backed progression", "Прогрессия на основе профилей"), text("Modular content configuration", "Модульная конфигурация контента"), text("Quests, seasons and events", "Задания, сезоны и события"), text("Trades, clans and leaderboards", "Трейды, кланы и таблицы лидеров")],
    systems: [
      { title: text("Config-Driven Progression", "Конфигурируемая прогрессия"), description: text("Shared databases and utilities define strength, powers, pets, upgrades, ranks, areas and reward requirements without scattering balance logic across UI code.", "Общие базы и утилиты описывают силу, способности, питомцев, улучшения, ранги, зоны и требования наград без разбрасывания баланса по UI-коду."), tags: ["Config", "Economy", "Luau"] },
      { title: text("Profiles & Session Safety", "Профили и безопасность сессий"), description: text("ProfileService-backed player data, client-side state mirrors and a soft-shutdown flow protect progression during normal play and server updates.", "Данные игроков на ProfileService, клиентские зеркала состояния и мягкое выключение серверов защищают прогрессию во время игры и обновлений."), tags: ["ProfileService", "DataStore", "Soft Shutdown"] },
      { title: text("Live Content Systems", "Системы live-контента"), description: text("Daily and weekly quests, seasons, timed events, promo codes, gifts, boosts, cases and a reward wheel support ongoing updates.", "Ежедневные и еженедельные задания, сезоны, временные события, промокоды, подарки, усиления, кейсы и колесо наград поддерживают регулярные обновления."), tags: ["Quests", "Events", "Rewards"] },
      { title: text("Social & Competitive Layer", "Социальный и соревновательный слой"), description: text("Pets, player trading, clans, leaderboards, portals and PvP modes are separated into dedicated controllers and utilities.", "Питомцы, трейды между игроками, кланы, таблицы лидеров, порталы и PvP-режимы разделены на специализированные контроллеры и утилиты."), tags: ["Trading", "Clans", "PvP"] },
    ],
    architecture,
    codeExamples: [],
    gallery: [
      { src: "/projects/strength-clicker/cover.webp", alt: text("Strength Clicker gameplay artwork", "Игровая иллюстрация Strength Clicker"), label: text("Strength training", "Тренировка силы") },
      { src: "/projects/strength-clicker/gallery-2.webp", alt: text("Strength Clicker progression artwork", "Иллюстрация прогрессии Strength Clicker"), label: text("Power progression", "Прогрессия силы") },
      { src: "/projects/strength-clicker/gallery-3.webp", alt: text("Strength Clicker feature artwork", "Иллюстрация механик Strength Clicker"), label: text("Game features", "Игровые механики") },
    ],
  },
  {
    id: "kinopoisk-world",
    index: "03",
    title: "KINOPOISK WORLD",
    type: text("Branded Social Experience", "Брендированный социальный проект"),
    shortDescription: text("A branded cinema hub connecting multiple game worlds inspired by Kinopoisk films and series.", "Брендированный кинотеатр-хаб с игровыми мирами по мотивам фильмов и сериалов Кинопоиска."),
    description: text("A commercial Roblox universe where each title becomes a separate themed world: duels, pursuits, tower challenges, detective games, races, music activities and a museum, all connected through a central cinema hub.", "Коммерческая Roblox-вселенная, где каждый тайтл превращается в отдельный тематический мир: дуэли, погони, башни, детективные игры, гонки, музыкальные активности и музей, объединённые центральным кинотеатром."),
    role: text("Roblox Developer", "Roblox-разработчик"),
    engine: "Roblox Studio",
    language: "Luau",
    platform: "Roblox",
    status: text("Released", "Выпущен"),
    robloxUrl: "https://www.roblox.com/games/131987391427170/unnamed",
    cover: "/projects/kinopoisk-world/cover.webp",
    accent: text("BRANDED EXPERIENCE", "БРЕНДИРОВАННЫЙ МИР"),
    tags: ["Game Hub", "Minigames", "Quests", "UGC"],
    highlights: [text("Commercial production", "Коммерческий продакшен"), text("Cross-discipline teamwork", "Междисциплинарная работа"), text("Multiplayer interactions", "Мультиплеерные взаимодействия"), text("Production debugging", "Продакшен-отладка")],
    systems: [
      { title: text("Interaction Layer", "Слой взаимодействий"), description: text("Reusable world interactions with clear client and server ownership.", "Переиспользуемые взаимодействия в мире с чётким разделением клиента и сервера."), tags: ["Prompts", "RemoteEvent", "Controllers"] },
      { title: text("Minigame Worlds", "Миры мини-игр"), description: text("Independent themed activities connected through a shared cinema hub.", "Независимые тематические активности, объединённые общим кинотеатром-хабом."), tags: ["Game Hub", "Teleport", "Game Loop"] },
      { title: text("Quests & UGC", "Задания и UGC"), description: text("Tasks, vibe currency and exclusive character-inspired rewards.", "Задания, внутренняя валюта «вайбики» и эксклюзивные награды по мотивам персонажей."), tags: ["Quests", "Rewards", "UGC"] },
    ],
    architecture,
    codeExamples: [],
    gallery: [
      { src: "/projects/kinopoisk-world/cover.webp", alt: text("Kinopoisk World official artwork", "Официальная иллюстрация Мира Кинопоиска"), label: text("Kinopoisk World", "Мир Кинопоиска") },
    ],
  },
  {
    id: "upgrade-your-brainrot",
    index: "04",
    title: "UPGRADE YOUR BRAINROT",
    type: text("Tycoon / Idle Evolution", "Тайкун / Idle-прогрессия"),
    shortDescription: text("Buy eggs, hatch rare units and evolve a base that keeps progressing offline.", "Покупай яйца, получай редких юнитов и развивай базу даже вне игры."),
    description: text("A base-building tycoon where players buy eggs from a conveyor, place them into slots, hatch income-producing units and upgrade both the conveyor and their Brainrots to reach increasingly rare evolutions.", "Тайкун со строительством базы: игрок покупает яйца с конвейера, размещает их в слотах, получает приносящих доход юнитов и улучшает конвейер и Brainrot-персонажей ради всё более редких эволюций."),
    role: text("Roblox Developer", "Roblox-разработчик"), engine: "Roblox Studio", language: "Luau", platform: "Roblox", status: text("Released", "Выпущен"),
    robloxUrl: "https://www.roblox.com/games/104609916234164/Upgrade-Your-Brainrot",
    cover: "/projects/upgrade-your-brainrot/cover.webp", accent: text("EVOLVE OFFLINE", "ЭВОЛЮЦИЯ ОФЛАЙН"),
    tags: ["Tycoon", "Offline Progress", "Rarities", "Economy"],
    highlights: [text("Offline egg hatching", "Вылупление яиц офлайн"), text("Rare unit evolutions", "Редкие эволюции юнитов"), text("Upgradeable conveyor", "Улучшаемый конвейер"), text("Base slot progression", "Развитие слотов базы")],
    systems: [
      { title: text("Egg & Hatch Loop", "Система яиц"), description: text("Egg rarity, timed hatching and unit generation form the core collection loop.", "Редкость яиц, таймеры вылупления и получение юнитов формируют основной цикл коллекционирования."), tags: ["Timers", "Rarities", "Collection"] },
      { title: text("Income Economy", "Экономика дохода"), description: text("Placed units generate cash that feeds upgrades and further purchases.", "Размещённые юниты приносят деньги для улучшений и следующих покупок."), tags: ["Economy", "Units", "Rewards"] },
      { title: text("Offline Progress", "Офлайн-прогресс"), description: text("Eggs hatch and units evolve while the player is away.", "Яйца вылупляются, а юниты развиваются, пока игрок не в игре."), tags: ["Persistence", "Offline", "Time"] },
      { title: text("Upgrade Machines", "Машины улучшений"), description: text("Base machines and the conveyor unlock better eggs and stronger evolutions.", "Машины на базе и конвейер открывают более качественные яйца и сильные эволюции."), tags: ["Upgrades", "Base", "Config"] },
    ], architecture, codeExamples: [],
    gallery: [
      { src: "/projects/upgrade-your-brainrot/cover.webp", alt: text("Upgrade Your Brainrot official artwork", "Официальная иллюстрация Upgrade Your Brainrot"), label: text("Core experience", "Основной геймплей") },
      { src: "/projects/upgrade-your-brainrot/gallery-2.webp", alt: text("Upgrade Your Brainrot gameplay feature", "Игровая механика Upgrade Your Brainrot"), label: text("Base progression", "Развитие базы") },
      { src: "/projects/upgrade-your-brainrot/gallery-3.webp", alt: text("Upgrade Your Brainrot unit evolution", "Эволюция юнитов Upgrade Your Brainrot"), label: text("Rare evolutions", "Редкие эволюции") },
    ],
  },
  {
    id: "dig-bomb-brainrot-rush",
    index: "05",
    title: "DIG & BOMB: BRAINROT RUSH!",
    type: text("Mining / PvP Tycoon", "Майнинг / PvP-тайкун"),
    shortDescription: text("Blast deeper underground, recover rare units and turn them into a growing base economy.", "Взрывай землю, находи редких юнитов и развивай экономику своей базы."),
    description: text("An explosive mining tycoon built around a service-controller architecture. The server owns profiles, slot income, offline rewards, monetization and timed events, while staged terrain generation keeps the mine playable during startup and restores only changed chunks between rounds.", "Взрывной майнинг-тайкун с архитектурой сервисов и контроллеров. Сервер управляет профилями, доходом слотов, офлайн-наградами, монетизацией и временными событиями, а поэтапная генерация шахты ускоряет вход в игру и восстанавливает между раундами только изменённые чанки."),
    role: text("Roblox Developer", "Roblox-разработчик"), engine: "Roblox Studio", language: "Luau", platform: "Roblox", status: text("Released", "Выпущен"),
    robloxUrl: "https://www.roblox.com/games/121277380801084/Dig-Bomb-Brainrot-Rush",
    cover: "/projects/dig-bomb-brainrot-rush/cover.webp", accent: text("DIG · BLAST · BUILD", "КОПАЙ · ВЗРЫВАЙ · СТРОЙ"),
    tags: ["Mining", "Server Authority", "Offline Income", "FTUE"],
    highlights: [text("Staged mine generation", "Поэтапная генерация шахты"), text("Dirty-chunk round reset", "Восстановление изменённых чанков"), text("Server-owned offline rewards", "Офлайн-награды под контролем сервера"), text("Guided onboarding funnel", "Пошаговый сценарий первого входа")],
    systems: [
      { title: text("Mine Runtime", "Runtime шахты"), description: text("Zones bootstrap in stages with readiness gates; baseline snapshots and dirty-chunk tracking restore mined terrain efficiently after a round.", "Зоны загружаются поэтапно с контролем готовности; базовые снимки и учёт изменённых чанков эффективно восстанавливают шахту после раунда."), tags: ["Terrain", "Streaming", "Performance"] },
      { title: text("Bomb & Camera Feedback", "Бомбы и отклик камеры"), description: text("Mining combines upgradeable explosions with a temporary follow camera, FOV handoff, blast punch and reliable recovery when system menus open.", "Майнинг объединяет прокачиваемые взрывы с камерой сопровождения, сменой FOV, импульсом от взрыва и надёжным восстановлением при открытии системного меню."), tags: ["Camera", "VFX", "Mobile"] },
      { title: text("Live & Offline Economy", "Онлайн- и офлайн-экономика"), description: text("One canonical formula powers slot income and HUD estimates; offline rewards have pending claim state and server-authoritative x1, x5 and playtime flows.", "Единая формула рассчитывает доход слотов и значения HUD; офлайн-награды имеют ожидающее состояние и авторитетные серверные сценарии x1, x5 и награды за игровое время."), tags: ["Income", "Persistence", "Validation"] },
      { title: text("Onboarding & Events", "Обучение и события"), description: text("A guided FTUE coordinates UI masks, world beams and progression steps, while scheduled server events add collectibles and authoritative reward-wheel outcomes.", "Пошаговый FTUE управляет масками UI, подсказками в мире и этапами прогрессии, а серверные события по расписанию добавляют коллекционные предметы и проверяемые результаты колеса наград."), tags: ["FTUE", "Events", "Analytics"] },
    ], architecture, codeExamples: [],
    gallery: [
      { src: "/projects/dig-bomb-brainrot-rush/cover.webp", alt: text("Dig & Bomb official artwork", "Официальная иллюстрация Dig & Bomb"), label: text("Explosive mining", "Взрывные раскопки") },
      { src: "/projects/dig-bomb-brainrot-rush/gallery-2.webp", alt: text("Dig & Bomb underground gameplay", "Подземный геймплей Dig & Bomb"), label: text("Underground layers", "Подземные уровни") },
      { src: "/projects/dig-bomb-brainrot-rush/gallery-3.webp", alt: text("Dig & Bomb base gameplay", "Геймплей базы Dig & Bomb"), label: text("Brainrot economy", "Экономика Brainrot") },
    ],
  },
  {
    id: "key-jump-brainrots",
    index: "06",
    title: "+1 KEY +1 JUMP FOR BRAINROTS",
    type: text("Flying / Collection Simulator", "Симулятор полёта и коллекционирования"),
    shortDescription: text("Fly with bubble-gum balloons, collect units and escape hazards on the way back to base.", "Летай на пузыре, собирай юнитов и избегай опасностей по пути на базу."),
    description: text("A vertical collection simulator where players improve flight, survive obstacle and disaster runs, recover Brainrots and Lucky Blocks, and place units at their base. The runtime persists reward metadata from drop generation through inventory and slots, enabling timed special units with configurable income, speed, height and obstacle abilities.", "Вертикальный симулятор коллекционирования, где игроки улучшают полёт, проходят полосы препятствий и события-катастрофы, собирают Brainrot-юнитов и Lucky Blocks и размещают их на базе. Runtime сохраняет метаданные награды от генерации до инвентаря и слота, поддерживая временных особых юнитов с настраиваемыми бонусами дохода, скорости, высоты и отключения препятствий."),
    role: text("Roblox Developer", "Roblox-разработчик"), engine: "Roblox Studio", language: "Luau", platform: "Roblox", status: text("Beta", "Бета"),
    robloxUrl: "https://www.roblox.com/games/134867980028583/1-Key-1-Jump-for-Brainrots",
    cover: "/projects/key-jump-brainrots/cover.png", accent: text("FLY · COLLECT · ESCAPE", "ЛЕТИ · СОБИРАЙ · УБЕГАЙ"),
    tags: ["Flying", "Lucky Blocks", "Timed Abilities", "Persistence"],
    highlights: [text("Configurable flight progression", "Настраиваемая прогрессия полёта"), text("Disaster and obstacle runtime", "Система катастроф и препятствий"), text("Persistent reward metadata", "Сохраняемые метаданные наград"), text("Slot-based special abilities", "Особые способности через слоты")],
    systems: [
      { title: text("Flight Progression", "Прогрессия полёта"), description: text("Configurable jetpack and balloon movement, height upgrades and rebirth progression open increasingly valuable areas.", "Настраиваемое движение джетпака и пузыря, улучшения высоты и перерождения открывают всё более ценные зоны."), tags: ["Movement", "Upgrades", "Rebirth"] },
      { title: text("Disaster Runtime", "Система катастроф"), description: text("Obstacles and tsunami-style events shape collection runs, with ability-aware controls that can modify speed, height or hazard availability.", "Препятствия и события с цунами формируют забеги, а система способностей может менять скорость, высоту или доступность опасностей."), tags: ["Disasters", "Obstacles", "Abilities"] },
      { title: text("Lucky Block Reward Pipeline", "Награды Lucky Block"), description: text("Reward entries can produce regular units, mutated variants, consumables or timed specials while preserving their metadata through pickup and saving.", "Таблица наград может выдавать обычных юнитов, мутации, расходники или временных особых персонажей, сохраняя их параметры после подбора и загрузки."), tags: ["Lucky Blocks", "Inventory", "Save Data"] },
      { title: text("Slots & Special Abilities", "Слоты и особые способности"), description: text("Placing special units activates configurable income, movement and hazard modifiers; removing them cleanly reverses the derived player attributes.", "Размещение особых юнитов активирует настраиваемые модификаторы дохода, движения и препятствий, а снятие корректно пересчитывает атрибуты игрока."), tags: ["Slots", "Modifiers", "Economy"] },
    ], architecture, codeExamples: [],
    gallery: [
      { src: "/projects/key-jump-brainrots/cover.png", alt: text("+1 Key +1 Jump official artwork", "Официальная иллюстрация +1 Key +1 Jump"), label: text("Bubble flight", "Полёт на пузыре") },
      { src: "/projects/key-jump-brainrots/gallery-2.webp", alt: text("+1 Key +1 Jump gameplay", "Геймплей +1 Key +1 Jump"), label: text("Collection run", "Забег за коллекцией") },
      { src: "/projects/key-jump-brainrots/gallery-3.webp", alt: text("+1 Key +1 Jump base", "База +1 Key +1 Jump"), label: text("Base progression", "Развитие базы") },
    ],
  },
  {
    id: "dark-survivor",
    index: "07",
    title: "DARK SURVIVOR",
    type: text("Horde Survival / Roguelite", "Выживание против орд / Roguelite"),
    shortDescription: text("Run, dodge and combine more than 40 weapons and upgrades against a growing horde.", "Беги, уклоняйся и комбинируй более 40 видов оружия и улучшений против растущей орды."),
    description: text("A Roblox horde-survival experience inspired by the fast escalating runs of Megabonk: players build powerful weapon setups, destroy large enemy waves, defeat bosses and push their survival time.", "Roblox-игра на выживание против орд в духе быстро нарастающих забегов Megabonk: игроки собирают сильные комбинации оружия, уничтожают волны врагов, побеждают боссов и стараются продержаться как можно дольше."),
    role: text("Roblox Developer", "Roblox-разработчик"), engine: "Roblox Studio", language: "Luau", platform: "Roblox", status: text("Released", "Выпущен"),
    robloxUrl: "https://www.roblox.com/games/93340206427348/Dark-Survivor",
    cover: "/projects/dark-survivor/cover.webp", accent: text("SURVIVE THE HORDE", "ПЕРЕЖИВИ ОРДУ"),
    tags: ["Horde Survival", "40+ Weapons", "Bosses", "Upgrades"],
    highlights: [text("40+ weapons and upgrades", "Более 40 видов оружия и улучшений"), text("Escalating enemy hordes", "Нарастающие орды врагов"), text("Boss encounters", "Сражения с боссами"), text("Build-based runs", "Забеги на основе билдов")],
    systems: [
      { title: text("Weapon Builds", "Оружейные билды"), description: text("A large weapon and upgrade pool supports varied combinations across runs.", "Большой набор оружия и улучшений позволяет собирать разные комбинации в каждом забеге."), tags: ["Weapons", "Upgrades", "Builds"] },
      { title: text("Horde Director", "Контроллер орды"), description: text("Enemy pressure escalates over time to challenge player movement and damage output.", "Давление врагов растёт со временем, проверяя мобильность и урон игрока."), tags: ["Spawning", "Scaling", "Game Loop"] },
      { title: text("Boss Encounters", "Сражения с боссами"), description: text("Boss fights punctuate runs with stronger enemies and reward milestones.", "Боссы разделяют этапы забега более сильными противниками и наградами."), tags: ["Bosses", "Combat", "Rewards"] },
    ], architecture, codeExamples: [],
    gallery: [
      { src: "/projects/dark-survivor/cover.webp", alt: text("Dark Survivor official artwork", "Официальная иллюстрация Dark Survivor"), label: text("Horde survival", "Выживание против орды") },
      { src: "/projects/dark-survivor/gallery-2.png", alt: text("Dark Survivor gameplay artwork", "Игровая иллюстрация Dark Survivor"), label: text("Weapon builds", "Оружейные билды") },
    ],
  },
  {
    id: "scam-empire",
    index: "08",
    title: "BUILD A SCAM EMPIRE!",
    type: text("Live Tycoon · 49M visits", "Live-тайкун · 49 млн посещений"),
    shortDescription: text("Maintained and updated a plot-based tycoon with a 49-million-visit audience.", "Поддержка и обновление тайкуна на личном участке с аудиторией в 49 млн посещений."),
    description: text("A mature live tycoon where players place workers, collect and sell cards, merge units and expand a persistent offline economy. I supported production updates across a broad live-game surface that also includes rebirths, crafting, daily rewards, quests, leaderboards, player raids, corporations and monetization.", "Зрелый live-тайкун, где игроки размещают работников, собирают и продают карты, объединяют юнитов и развивают постоянную экономику с офлайн-доходом. Я поддерживал продакшен-обновления большой live-системы, включающей перерождения, крафт, ежедневные награды, задания, таблицы лидеров, рейды на игроков, корпорации и монетизацию."),
    role: text("Live Ops & Updates Developer", "Разработчик поддержки и обновлений"), engine: "Roblox Studio", language: "Luau", platform: "Roblox", status: text("Released", "Выпущен"),
    robloxUrl: "https://www.roblox.com/games/83942919686609/Build-a-Scam-Empire",
    cover: "/projects/scam-empire/cover.webp", accent: text("49M VISITS", "49 МЛН ПОСЕЩЕНИЙ"),
    tags: ["Live Ops", "Data Migration", "Monetization", "Social Systems"],
    highlights: [text("49M visits at portfolio submission", "49 млн посещений на момент отправки портфолио"), text("Large persistent economy", "Большая сохраняемая экономика"), text("Backward-compatible live updates", "Обратная совместимость обновлений"), text("Corporations and leaderboards", "Корпорации и таблицы лидеров")],
    systems: [
      { title: text("Persistent Tycoon Economy", "Сохраняемая экономика тайкуна"), description: text("Workers, plot slots, card inventory, collection, selling, merging, crafting and rebirths form a long-running progression loop with offline earnings.", "Работники, слоты участка, инвентарь карт, сбор, продажа, объединение, крафт и перерождения образуют длительный цикл прогрессии с офлайн-доходом."), tags: ["Profiles", "Economy", "Offline"] },
      { title: text("Live Content Surface", "Слой live-контента"), description: text("Daily rewards, promo codes, quests, boosts, limited items, spin wheels and events are backed by dedicated configuration and server handlers.", "Ежедневные награды, промокоды, задания, усиления, лимитированные предметы, колёса и события используют отдельные конфиги и серверные обработчики."), tags: ["Live Ops", "Events", "Config"] },
      { title: text("Corporations & Competition", "Корпорации и соревнование"), description: text("Corporation levels, buffs, quests and leaderboards extend progression beyond the personal plot, alongside player raids and global rankings.", "Уровни, усиления, задания и рейтинги корпораций расширяют прогрессию за пределы личного участка вместе с рейдами на игроков и глобальными таблицами."), tags: ["Corporations", "Leaderboards", "Raids"] },
      { title: text("Production Migration Work", "Продакшен-миграции"), description: text("Live updates account for existing profile keys, inventories, product identifiers and leaderboard data so reskins and terminology changes do not invalidate player progress.", "Обновления учитывают существующие ключи профилей, инвентарь, идентификаторы продуктов и данные рейтингов, чтобы рескины и смена терминологии не ломали прогресс игроков."), tags: ["Migration", "Compatibility", "DataStore"] },
    ], architecture, codeExamples: [],
    gallery: [
      { src: "/projects/scam-empire/cover.webp", alt: text("Build a Scam Empire official artwork", "Официальная иллюстрация Build a Scam Empire"), label: text("Empire building", "Строительство империи") },
      { src: "/projects/scam-empire/gallery-2.webp", alt: text("Build a Scam Empire plot", "Участок Build a Scam Empire"), label: text("Plot management", "Управление участком") },
      { src: "/projects/scam-empire/gallery-3.webp", alt: text("Build a Scam Empire workers", "Работники Build a Scam Empire"), label: text("Worker progression", "Развитие работников") },
      { src: "/projects/scam-empire/gallery-4.webp", alt: text("Build a Scam Empire economy", "Экономика Build a Scam Empire"), label: text("Collect and sell", "Сбор и продажа") },
    ],
  },
];

interface CommercialProjectInput {
  id: string;
  title: string;
  type: LocalizedText;
  summary: LocalizedText;
  role: LocalizedText;
  url: string;
  accent: LocalizedText;
  tags: string[];
  highlights: LocalizedText[];
}

function commercialProject(input: CommercialProjectInput): Project {
  return {
    id: input.id,
    index: "00",
    title: input.title,
    type: input.type,
    shortDescription: input.summary,
    description: input.summary,
    role: input.role,
    engine: "Roblox Studio",
    language: "Luau",
    platform: "Roblox",
    status: text("Released", "Выпущен"),
    robloxUrl: input.url,
    accent: input.accent,
    tags: input.tags,
    highlights: input.highlights,
    systems: [],
    architecture: { nodes: [], connections: [] },
    codeExamples: [],
    gallery: [],
  };
}

const commercialProjects: Project[] = [
  commercialProject({
    id: "dig-to-earth", title: "DIG TO EARTH", type: text("Live Game · 248M visits", "Live-проект · 248 млн посещений"),
    summary: text("Supported a large-scale live Roblox experience and delivered production updates.", "Поддержка крупного действующего Roblox-проекта и выпуск продакшен-обновлений."),
    role: text("Live Ops & Updates Developer", "Разработчик поддержки и обновлений"), url: "https://www.roblox.com/share?code=e9350038a23e36429c50a81e051b7f4a&type=ExperienceDetails&stamp=1760600757324", accent: text("248M VISITS", "248 МЛН ПОСЕЩЕНИЙ"), tags: ["Live Ops", "Updates", "Production"],
    highlights: [text("248M visits at portfolio submission", "248 млн посещений на момент отправки портфолио"), text("Live project support", "Поддержка действующего проекта"), text("Production updates", "Продакшен-обновления")],
  }),
  commercialProject({
    id: "flying-wings", title: "FLYING WINGS", type: text("Live Game · 32.2M visits", "Live-проект · 32,2 млн посещений"),
    summary: text("Supported the released experience and shipped updates for a multi-million player audience.", "Поддержка выпущенного проекта и разработка обновлений для многомиллионной аудитории."),
    role: text("Live Ops & Updates Developer", "Разработчик поддержки и обновлений"), url: "https://www.roblox.com/share?code=23cc6a488c932e43bc4922cd65a28a1f&type=ExperienceDetails&stamp=1760598087876", accent: text("32.2M VISITS", "32,2 МЛН ПОСЕЩЕНИЙ"), tags: ["Live Ops", "Updates", "Gameplay"],
    highlights: [text("32.2M visits at portfolio submission", "32,2 млн посещений на момент отправки портфолио"), text("Project support", "Поддержка проекта"), text("Content updates", "Контентные обновления")],
  }),
  commercialProject({
    id: "my-pet-jelly", title: "MY PET JELLY", type: text("Live Simulator · 12.9M visits", "Live-симулятор · 12,9 млн посещений"),
    summary: text("Maintained and updated a persistent pet-growth simulator with offline progression.", "Поддержка и обновление симулятора роста питомца с офлайн-прогрессией."),
    role: text("Live Ops & Updates Developer", "Разработчик поддержки и обновлений"), url: "https://www.roblox.com/share?code=d543daec5dd48347a429984fc0b4f687&type=ExperienceDetails&stamp=1760600626261", accent: text("12.9M VISITS", "12,9 МЛН ПОСЕЩЕНИЙ"), tags: ["Simulator", "Persistence", "Live Ops"],
    highlights: [text("12.9M visits at portfolio submission", "12,9 млн посещений на момент отправки портфолио"), text("Offline progression", "Офлайн-прогрессия"), text("Live updates", "Обновления проекта")],
  }),
  commercialProject({
    id: "merge-brainrot-commercial", title: "MERGE BRAINROT", type: text("Merge Simulator · Live Ops", "Merge-симулятор · Live Ops"),
    summary: text("Supported the released merge-based simulator and developed project updates.", "Поддержка выпущенного merge-симулятора и разработка обновлений проекта."),
    role: text("Live Ops & Updates Developer", "Разработчик поддержки и обновлений"), url: "https://www.roblox.com/share?code=f69fdfe11f41fd4aaa0bd04f83240818&type=ExperienceDetails&stamp=1760600772559", accent: text("MERGE · UPGRADE", "ОБЪЕДИНЯЙ · УЛУЧШАЙ"), tags: ["Merge", "Simulator", "Updates"],
    highlights: [text("Live game support", "Поддержка действующей игры"), text("Update development", "Разработка обновлений"), text("Progression systems", "Системы прогрессии")],
  }),
  commercialProject({
    id: "brainrot-bowling", title: "BRAINROT BOWLING", type: text("Bowling Game · Built from scratch", "Боулинг · Создан с нуля"),
    summary: text("Built a complete Roblox bowling experience from the ground up.", "Создание полноценной Roblox-игры про боулинг с нуля."),
    role: text("Game Developer", "Разработчик игры"), url: "", accent: text("BUILT FROM SCRATCH", "СОЗДАНО С НУЛЯ"), tags: ["From Scratch", "Gameplay", "Bowling"],
    highlights: [text("End-to-end development", "Полный цикл разработки"), text("Core bowling gameplay", "Основной геймплей боулинга"), text("Production release", "Подготовка к релизу")],
  }),
  commercialProject({
    id: "sportik-city", title: "SPORTIK CITY", type: text("Branded Experience · Built from scratch", "Брендированный проект · Создан с нуля"),
    summary: text("Built a branded Roblox game for Svyatoy Istochnik with Hybrid Metaverse, featuring tag, training, quiz and duel activities.", "В команде Hybrid Metaverse с нуля разработал игру про Спортика для «Святого источника»: салки, качалка, квиз и дуэль."),
    role: text("Roblox Developer · Hybrid Metaverse", "Roblox-разработчик · Hybrid Metaverse"), url: "https://www.roblox.com/share?code=cf3ba5c61ebd624097901f8b9e5f9ef0&type=ExperienceDetails&stamp=1760601177743", accent: text("BRANDED WORLD", "БРЕНДИРОВАННЫЙ МИР"), tags: ["Brand", "Minigames", "From Scratch"],
    highlights: [text("Built from scratch", "Создан с нуля"), text("Four gameplay activities", "Четыре игровые активности"), text("Hybrid Metaverse team", "Команда Hybrid Metaverse")],
  }),
  commercialProject({
    id: "dobry-back-to-school", title: "DOBRY: BACK TO SCHOOL", type: text("Branded World Activation", "Активация брендированного мира"),
    summary: text("Shipped a new Dobry World activation with Hybrid: treasure hunting, quests, new UGC and ships.", "В команде Hybrid выпустил активацию мира «Добрый: снова в школу»: поиск сокровищ, квесты, новые UGC и корабли."),
    role: text("Roblox Developer · Hybrid", "Roblox-разработчик · Hybrid"), url: "https://www.roblox.com/share?code=20fb6959b7b2fc4899ffbbacd181acb3&type=ExperienceDetails&stamp=1760601301686", accent: text("BACK TO SCHOOL", "СНОВА В ШКОЛУ"), tags: ["Brand", "Quests", "UGC"],
    highlights: [text("Released activation", "Активация выпущена в релиз"), text("Treasure hunt and quests", "Поиск сокровищ и квесты"), text("New UGC and ships", "Новые UGC и корабли")],
  }),
  commercialProject({
    id: "luana-maze", title: "LUANA'S MAZE", type: text("Kinopoisk Branded Game", "Брендированная игра Кинопоиска"),
    summary: text("Created a standalone Luana's Maze game with the Maff team as part of the Kinopoisk project.", "В команде Maff создал отдельную игру «Лабиринт Луаны» в рамках проекта с Кинопоиском."),
    role: text("Roblox Developer · Maff", "Roblox-разработчик · Maff"), url: "https://www.roblox.com/share?code=2530e96aa9867442a21f70ec7583ae37&type=ExperienceDetails&stamp=1760601241775", accent: text("KINOPOISK WORLD", "МИР КИНОПОИСКА"), tags: ["Kinopoisk", "Maze", "Team Project"],
    highlights: [text("Standalone game", "Отдельная игра"), text("Kinopoisk collaboration", "Коллаборация с Кинопоиском"), text("Maff development team", "Команда разработки Maff")],
  }),
];

const featuredProjectIds = ["nightmare-survivors", "strength-clicker", "scam-empire"] as const;

function getCompletenessScore(project: Project): number {
  return (
    (project.cover ? 8 : 0) +
    (project.video ? 3 : 0) +
    (project.description.en && project.description.ru ? 4 : 0) +
    Math.min(project.systems.length, 4) * 2 +
    Math.min(project.architecture.nodes.length, 4) +
    project.gallery.filter((item) => item.src).length * 2 +
    Math.min(project.highlights.length, 4) +
    (project.robloxUrl ? 1 : 0)
  );
}

const orderedProjects = [...commercialProjects, ...existingProjects].sort((left, right) => {
  const leftFeaturedIndex = featuredProjectIds.indexOf(left.id as typeof featuredProjectIds[number]);
  const rightFeaturedIndex = featuredProjectIds.indexOf(right.id as typeof featuredProjectIds[number]);

  if (leftFeaturedIndex !== -1 || rightFeaturedIndex !== -1) {
    if (leftFeaturedIndex === -1) return 1;
    if (rightFeaturedIndex === -1) return -1;
    return leftFeaturedIndex - rightFeaturedIndex;
  }

  return getCompletenessScore(right) - getCompletenessScore(left);
});

export const projects: Project[] = orderedProjects.map((project, index) => ({
  ...project,
  index: String(index + 1).padStart(2, "0"),
}));
