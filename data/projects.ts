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
    description: text("A cooperative survival experience for parties of up to four players. The team teleports into a separate nightmare world, explores it, builds and upgrades a base, fights monsters and unusual anomalies, and tries to survive for as many nights as possible while working toward rescuing Tommy.", "Кооперативное выживание для пати до четырёх игроков. Команда телепортируется в отдельный мир кошмара, исследует его, строит и улучшает базу, сражается с монстрами и необычными аномалиями и старается пережить как можно больше ночей, приближаясь к спасению Томми."),
    role: text("Gameplay / Systems Developer", "Разработчик геймплея и систем"),
    engine: "Roblox Studio",
    language: "Luau",
    platform: "Roblox",
    status: text("Released", "Выпущен"),
    robloxUrl: "https://www.roblox.com/games/134558356313859/Nightmare-Survivors",
    cover: "/projects/nightmare-survivors/nightmare-cover.png",
    video: "/projects/nightmare-survivors/gameplay.mp4",
    accent: text("SURVIVAL PROTOCOL", "ПРОТОКОЛ ВЫЖИВАНИЯ"),
    tags: ["Co-op", "Base Building", "Anomalies", "Night Survival"],
    highlights: [text("Parties of up to four players", "Пати до четырёх игроков"), text("Separate survival place", "Отдельный плейс выживания"), text("Buildable and upgradeable base", "Строительство и улучшение базы"), text("Escalating nights and anomalies", "Усложняющиеся ночи и аномалии")],
    systems: [
      { title: text("Party & Teleport Flow", "Пати и телепортация"), description: text("Up to four players form a party before moving together into the survival place.", "До четырёх игроков собираются в пати и вместе переходят в отдельный плейс выживания."), tags: ["Party", "Teleport", "Multiplayer"] },
      { title: text("Base Building", "Строительство базы"), description: text("Players establish a safe area and upgrade it from a simple camp into a fortified base.", "Игроки создают безопасную зону и развивают её от простого лагеря до укреплённой базы."), tags: ["Building", "Upgrades", "Progression"] },
      { title: text("Night & Anomaly Loop", "Ночи и аномалии"), description: text("Each night increases danger through new monsters, anomalies and survival pressure.", "Каждая ночь повышает сложность за счёт новых монстров, аномалий и давления на команду."), tags: ["Nights", "Anomalies", "Scaling"] },
      { title: text("Exploration & Combat", "Исследование и бой"), description: text("The team explores the world, gathers strength and fights nightmare creatures.", "Команда исследует мир, становится сильнее и сражается с существами кошмара."), tags: ["Exploration", "Combat", "Co-op"] },
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
    description: text("A progression simulator where players train their body, unlock fireball evolutions, collect pets and compete in PvP for the King of the Hill while their progress persists between sessions.", "Симулятор прогрессии, где игроки тренируют силу, открывают эволюции огненных шаров, собирают питомцев и участвуют в PvP за звание короля холма, сохраняя прогресс между сессиями."),
    role: text("Systems Developer", "Разработчик систем"),
    engine: "Roblox Studio",
    language: "Luau",
    platform: "Roblox",
    status: text("Released", "Выпущен"),
    robloxUrl: "https://www.roblox.com/games/134571136953118/Strength-Clicker",
    cover: "/projects/strength-clicker/cover.webp",
    accent: text("POWER LOOP", "ЦИКЛ СИЛЫ"),
    tags: ["Progression", "PvP", "Pets", "DataStore"],
    highlights: [text("Persistent player profiles", "Постоянные профили игроков"), text("Validated progression", "Проверяемая прогрессия"), text("Upgrade economy", "Экономика улучшений"), text("Responsive feedback", "Отзывчивая обратная связь")],
    systems: [
      { title: text("Progression Loop", "Цикл прогрессии"), description: text("Configurable strength gains, unlock requirements and upgrade curves.", "Настраиваемый рост силы, требования разблокировки и кривые улучшений."), tags: ["Config", "Economy", "Luau"] },
      { title: text("Data Persistence", "Сохранение данных"), description: text("Safe profile updates with defaults, reconciliation and failure diagnostics.", "Безопасное обновление профилей, значения по умолчанию, согласование и диагностика ошибок."), tags: ["DataStore", "pcall", "Profiles"] },
      { title: text("Fireball Evolution", "Эволюция огненных шаров"), description: text("Power thresholds unlock new fireball forms and combat progression.", "Пороги силы открывают новые формы огненных шаров и боевую прогрессию."), tags: ["Progression", "Combat", "Config"] },
      { title: text("Pets & PvP", "Питомцы и PvP"), description: text("Collectible pets, player battles and a King of the Hill competitive loop.", "Коллекционные питомцы, сражения игроков и соревновательный режим King of the Hill."), tags: ["Pets", "PvP", "Rewards"] },
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
    description: text("An explosive mining loop where players dig through increasingly deep layers, discover Brainrots, carry one back to their base and place it into a free slot to generate income before upgrading their bombs and descending again.", "Взрывной игровой цикл: игроки спускаются всё глубже, находят Brainrot-юнитов, возвращают одного на базу и ставят в свободный слот для дохода, после чего улучшают бомбы и снова отправляются под землю."),
    role: text("Roblox Developer", "Roblox-разработчик"), engine: "Roblox Studio", language: "Luau", platform: "Roblox", status: text("Released", "Выпущен"),
    robloxUrl: "https://www.roblox.com/games/121277380801084/Dig-Bomb-Brainrot-Rush",
    cover: "/projects/dig-bomb-brainrot-rush/cover.webp", accent: text("DIG · BLAST · BUILD", "КОПАЙ · ВЗРЫВАЙ · СТРОЙ"),
    tags: ["Mining", "Bombs", "PvP", "Tycoon"],
    highlights: [text("Depth-based mining", "Майнинг по уровням глубины"), text("Upgradeable bombs", "Прокачиваемые бомбы"), text("Unit base economy", "Экономика юнитов на базе"), text("Timed events and leaderboards", "События и таблицы лидеров")],
    systems: [
      { title: text("Digging Loop", "Цикл раскопок"), description: text("Players break through deeper layers to find increasingly valuable units.", "Игроки пробиваются через уровни глубины в поисках всё более ценных юнитов."), tags: ["Mining", "Depth", "Rewards"] },
      { title: text("Bomb Progression", "Прокачка бомб"), description: text("Bomb upgrades improve explosion size, speed and strength.", "Улучшения повышают радиус, скорость и силу взрыва бомбы."), tags: ["Upgrades", "Config", "Feedback"] },
      { title: text("Base Income", "Доход базы"), description: text("Recovered Brainrots occupy base slots and generate recurring income.", "Найденные Brainrot-юниты занимают слоты базы и регулярно приносят доход."), tags: ["Tycoon", "Slots", "Economy"] },
      { title: text("Competition", "Соревнования"), description: text("PvP, timed events and leaderboards create risk around deeper rewards.", "PvP, временные события и таблицы лидеров добавляют риск при охоте за глубокими наградами."), tags: ["PvP", "Events", "Leaderboards"] },
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
    description: text("A vertical collection simulator where players run across keys, fly with a bubble-gum balloon, avoid obstacles and tsunamis, recover Brainrots and Lucky Blocks, then place units at their base to earn cash and improve future flights.", "Вертикальный симулятор коллекционирования: игрок бежит по клавишам, летает на пузыре жвачки, избегает препятствий и цунами, собирает Brainrot-юнитов и Lucky Blocks, а затем размещает юнитов на базе для заработка и новых улучшений."),
    role: text("Roblox Developer", "Roblox-разработчик"), engine: "Roblox Studio", language: "Luau", platform: "Roblox", status: text("Beta", "Бета"),
    robloxUrl: "https://www.roblox.com/games/134867980028583/1-Key-1-Jump-for-Brainrots",
    cover: "/projects/key-jump-brainrots/cover.png", accent: text("FLY · COLLECT · ESCAPE", "ЛЕТИ · СОБИРАЙ · УБЕГАЙ"),
    tags: ["Flying", "Collection", "Rebirth", "Offline Income"],
    highlights: [text("Bubble flight progression", "Прогрессия полёта на пузыре"), text("Tsunami escape events", "Побег от цунами"), text("Lucky Block collection", "Сбор Lucky Blocks"), text("Offline unit income", "Офлайн-доход юнитов")],
    systems: [
      { title: text("Bubble Flight", "Полёт на пузыре"), description: text("Ball upgrades and rebirths increase flight height and access to new areas.", "Улучшения шара и перерождения увеличивают высоту полёта и открывают новые зоны."), tags: ["Movement", "Upgrades", "Rebirth"] },
      { title: text("Hazard Course", "Полоса препятствий"), description: text("Key paths, obstacles and tsunami events shape each collection run.", "Маршруты по клавишам, препятствия и события с цунами формируют каждый забег."), tags: ["Obstacles", "Events", "Movement"] },
      { title: text("Collection Loop", "Цикл коллекционирования"), description: text("Brainrots and Lucky Blocks are recovered and returned to the base.", "Brainrot-юниты и Lucky Blocks нужно найти и доставить обратно на базу."), tags: ["Collection", "Inventory", "Rewards"] },
      { title: text("Base & Offline Income", "База и офлайн-доход"), description: text("Base slots hold characters that earn cash for up to two hours offline.", "Слоты базы хранят персонажей, которые приносят деньги до двух часов офлайн."), tags: ["Base", "Persistence", "Economy"] },
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
    description: text("A plot-based tycoon where players buy scammers, place them at workstations, collect the cards they produce and sell them to expand an empire that continues earning while offline. I supported the released project and developed production updates for its live audience.", "Тайкун на личном участке: игрок покупает работников, размещает их за рабочими местами, собирает создаваемые ими карты и продаёт их, расширяя империю с офлайн-доходом. Я поддерживал выпущенный проект и разрабатывал продакшен-обновления для действующей аудитории."),
    role: text("Live Ops & Updates Developer", "Разработчик поддержки и обновлений"), engine: "Roblox Studio", language: "Luau", platform: "Roblox", status: text("Released", "Выпущен"),
    robloxUrl: "https://www.roblox.com/games/83942919686609/Build-a-Scam-Empire",
    cover: "/projects/scam-empire/cover.webp", accent: text("49M VISITS", "49 МЛН ПОСЕЩЕНИЙ"),
    tags: ["Tycoon", "Placement", "Offline Income", "Economy"],
    highlights: [text("49M visits at portfolio submission", "49 млн посещений на момент отправки портфолио"), text("Live project support", "Поддержка действующего проекта"), text("Production updates", "Продакшен-обновления"), text("Offline earnings", "Офлайн-заработок")],
    systems: [
      { title: text("Worker Shop", "Магазин работников"), description: text("Players purchase new workers and expand the earning capacity of their plot.", "Игроки покупают новых работников и увеличивают доходность своего участка."), tags: ["Shop", "Economy", "Progression"] },
      { title: text("Plot Placement", "Размещение на участке"), description: text("Owned workers are placed into available workstations on the player plot.", "Купленные работники размещаются на свободных рабочих местах личного участка."), tags: ["Placement", "Slots", "Ownership"] },
      { title: text("Collect & Sell", "Сбор и продажа"), description: text("Generated cards are collected and sold to fund the next expansion cycle.", "Созданные карты собираются и продаются, финансируя следующий цикл расширения."), tags: ["Collection", "Selling", "Loop"] },
      { title: text("Offline Earnings", "Офлайн-заработок"), description: text("The empire continues accumulating value while the player is away.", "Империя продолжает накапливать ценность, пока игрок находится вне игры."), tags: ["Offline", "Persistence", "Income"] },
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
