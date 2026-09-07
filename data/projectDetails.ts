import type { CodeExample } from "@/types/project";
import type { LocalizedText } from "@/types/i18n";

const text = (en: string, ru: string): LocalizedText => ({ en, ru });

type ProjectDetails = {
  responsibilities: LocalizedText[];
  codeExamples: CodeExample[];
};

function example(titleEn: string, titleRu: string, descriptionEn: string, descriptionRu: string, code: string): CodeExample[] {
  return [{ title: text(titleEn, titleRu), language: "luau", description: text(descriptionEn, descriptionRu), code }];
}

export const projectDetails: Record<string, ProjectDetails> = {
  "nightmare-survivors": {
    responsibilities: [text("Server-authoritative combat, resources and progression", "Серверная логика боя, ресурсов и прогрессии"), text("Day/night scenarios, anomalies and enemy waves", "Сценарии дня и ночи, аномалии и волны врагов"), text("Base upgrades, crafting and stationary buildings", "Улучшения базы, крафт и стационарные постройки"), text("Versioned solo saves and party rejoin", "Версионированные соло-сохранения и возврат в пати"), text("A/B/C testing support", "A/B/C-тесты")],
    codeExamples: example("Validated run action", "Проверяемое действие забега", "Sanitized example of a server-owned base upgrade transaction.", "Обезличенный пример серверной транзакции улучшения базы.", `local function purchaseBaseUpgrade(player, expectedLevel)
    local run = RunService:GetActiveRun(player)
    if not run or run.phase == "Finished" then return false end
    if expectedLevel ~= run.baseLevel then return false end

    local cost = BaseConfig.GetUpgradeCost(run.baseLevel)
    if not Resources.TrySpend(run.teamResources, cost) then return false end

    run.baseLevel += 1
    StateReplicator.PushBaseState(run.partyId)
    return true
end`),
  },
  "strength-clicker": {
    responsibilities: [text("Config-driven strength and fireball progression", "Конфигурируемая прогрессия силы и огненных шаров"), text("Player profiles, rewards and upgrade economy", "Профили игроков, награды и экономика улучшений"), text("Pets, PvP, trades and clans", "Питомцы, PvP, трейды и кланы"), text("Quests, seasons, events and soft shutdown", "Задания, сезоны, события и мягкое выключение")],
    codeExamples: example("Config-driven power unlock", "Открытие силы через конфиг", "Progression thresholds remain in shared configuration rather than UI code.", "Пороги прогрессии хранятся в общем конфиге, а не в UI.", `local function getUnlockedPower(strength)
    local unlocked = PowerConfig.Order[1]
    for _, powerId in PowerConfig.Order do
        local power = PowerConfig.ById[powerId]
        if strength < power.requiredStrength then break end
        unlocked = powerId
    end
    return unlocked
end`),
  },
  "kinopoisk-world": {
    responsibilities: [text("Standalone themed minigame development", "Разработка отдельных тематических мини-игр"), text("Quest, reward and UGC-related gameplay", "Игровая логика заданий, наград и UGC"), text("Hub interactions and transitions between activities", "Взаимодействия хаба и переходы между активностями")],
    codeExamples: example("Reusable activity state", "Переиспользуемое состояние активности", "A compact state machine suitable for independent branded minigames.", "Компактный автомат состояний для независимых брендированных мини-игр.", `local Activity = {}

function Activity:SetState(nextState)
    if not self.allowed[self.state][nextState] then return false end
    self.state = nextState
    self.stateChanged:Fire(nextState)
    return true
end

return Activity`),
  },
  "upgrade-your-brainrot": {
    responsibilities: [text("Egg purchase monetization", "Монетизация покупки яиц"), text("New conveyor, machine and base balance", "Новый баланс конвейера, машин и базы"), text("Offline hatching and unit evolution", "Офлайн-вылупление и эволюция юнитов")],
    codeExamples: example("Offline hatch resolution", "Расчёт офлайн-вылупления", "Elapsed time is resolved from server timestamps and capped by configuration.", "Прошедшее время рассчитывается по серверным меткам и ограничивается конфигом.", `local function resolveOfflineHatch(egg, now)
    local elapsed = math.max(0, now - egg.startedAt)
    local capped = math.min(elapsed, EconomyConfig.maxOfflineSeconds)
    if capped < egg.hatchDuration then return egg, false end

    return UnitFactory.FromEgg(egg.eggId, egg.seed), true
end`),
  },
  "dig-bomb-brainrot-rush": {
    responsibilities: [text("Bomb mining", "Майнинг бомбами"), text("Staged mine generation and round reset", "Поэтапная генерация шахты и сброс раунда"), text("Base slots, live and offline income", "Слоты базы, онлайн- и офлайн-доход"), text("FTUE, live events and monetized reward flows", "FTUE, live-события и монетизируемые наградные потоки")],
    codeExamples: example("Dirty-chunk mine reset", "Сброс изменённых чанков", "Only modified terrain chunks are restored at the end of a round.", "После раунда восстанавливаются только изменённые чанки шахты.", `local function restoreMine(round)
    for chunkId in round.dirtyChunks do
        local snapshot = round.baseline[chunkId]
        if snapshot then
            TerrainChunks.Restore(chunkId, snapshot)
        end
    end
    table.clear(round.dirtyChunks)
end`),
  },
  "key-jump-brainrots": {
    responsibilities: [text("Flight, height upgrades and rebirth progression", "Полёт, улучшения высоты и перерождения"), text("Obstacle and disaster runtime", "Система препятствий и катастроф"), text("Lucky Block rewards and persistent metadata", "Награды Lucky Block и сохранение параметров"), text("Slot-based special unit abilities", "Способности особых юнитов через слоты")],
    codeExamples: example("Derived slot modifiers", "Расчёт модификаторов слотов", "Player modifiers are rebuilt from equipped units instead of accumulated incrementally.", "Модификаторы пересчитываются из установленных юнитов, а не накапливаются изменениями.", `local function rebuildModifiers(profile)
    local result = { income = 1, speed = 1, height = 1 }
    for _, slot in profile.slots do
        local ability = AbilityConfig[slot.abilityId]
        if ability then
            result[ability.stat] *= ability.multiplier
        end
    end
    return result
end`),
  },
  "dark-survivor": {
    responsibilities: [text("Weapon and upgrade build system", "Система оружия и билдов улучшений"), text("Scalable enemy hordes and spawn pacing", "Масштабируемые орды и темп спавна"), text("Boss encounters and run rewards", "Боссы и награды забега")],
    codeExamples: example("Weighted upgrade choice", "Взвешенный выбор улучшения", "Run upgrades are selected without repeating already offered entries.", "Улучшения забега выбираются без повторения уже предложенных вариантов.", `local function rollUpgrades(pool, count, rng)
    local available = table.clone(pool)
    local result = {}
    while #result < count and #available > 0 do
        local index = WeightedRandom.Index(available, rng)
        table.insert(result, table.remove(available, index))
    end
    return result
end`),
  },
  "scam-empire": {
    responsibilities: [text("New quest content", "Новые задания"), text("Live updates and new monetization", "Live-обновления и новая монетизация"), text("Daily rewards", "Дейли-награды")],
    codeExamples: example("Backward-compatible profile migration", "Совместимая миграция профиля", "Legacy keys are migrated once while preserving player inventory and progress.", "Старые ключи мигрируют один раз с сохранением инвентаря и прогресса.", `local function migrateProfile(data)
    if data.schemaVersion >= 3 then return data end
    data.revenue = data.revenue or data.scammed or 0
    data.scammed = nil
    data.inventory = data.inventory or {}
    data.schemaVersion = 3
    return data
end`),
  },
  "dig-to-earth": {
    responsibilities: [text("Maintenance of a high-traffic live project", "Поддержка live-проекта с крупной аудиторией"), text("Production updates and regression fixes", "Продакшен-обновления и исправление регрессий"), text("Compatibility with existing player progress", "Совместимость с существующим прогрессом игроков")],
    codeExamples: example("Safe live-data default", "Безопасное дополнение live-данных", "New progression fields are reconciled without resetting existing profiles.", "Новые поля прогрессии добавляются без сброса существующих профилей.", `local function reconcileProfile(data, template)
    for key, defaultValue in template do
        if data[key] == nil then
            data[key] = typeof(defaultValue) == "table"
                and table.clone(defaultValue) or defaultValue
        end
    end
end`),
  },
  "flying-wings": {
    responsibilities: [text("Live gameplay maintenance and updates", "Поддержка live-геймплея и обновления"), text("Movement-related regression fixes", "Исправление регрессий передвижения"), text("Safe rollout for an existing audience", "Безопасный выпуск изменений для действующей аудитории")],
    codeExamples: example("Validated movement upgrade", "Проверяемое улучшение движения", "The server applies configured movement progression and rejects stale requests.", "Сервер применяет прогрессию движения из конфига и отклоняет устаревшие запросы.", `local function upgradeFlight(profile, expectedLevel)
    if profile.flightLevel ~= expectedLevel then return false end
    local nextLevel = FlightConfig[expectedLevel + 1]
    if not nextLevel or profile.coins < nextLevel.cost then return false end
    profile.coins -= nextLevel.cost
    profile.flightLevel += 1
    return true
end`),
  },
  "my-pet-jelly": {
    responsibilities: [text("Persistent pet growth and offline progression", "Сохраняемый рост питомца и офлайн-прогрессия"), text("Live project maintenance and updates", "Поддержка и обновление live-проекта"), text("Leaderboard-compatible progression", "Прогрессия, совместимая с рейтингами")],
    codeExamples: example("Capped offline growth", "Ограниченный офлайн-рост", "Offline progress uses server time and a configurable maximum duration.", "Офлайн-прогресс использует серверное время и настраиваемый лимит.", `local function applyOfflineGrowth(profile, now)
    local elapsed = math.clamp(now - profile.lastSeen, 0, MAX_OFFLINE)
    local gain = elapsed * GrowthConfig.GetRate(profile.level)
    profile.jellySize += gain
    profile.lastSeen = now
    return gain
end`),
  },
  "merge-brainrot-commercial": {
    responsibilities: [text("Merge progression and unit evolution", "Merge-прогрессия и эволюция юнитов"), text("Live updates and production fixes", "Live-обновления и продакшен-исправления")],
    codeExamples: example("Authoritative unit merge", "Авторитетное объединение юнитов", "A merge verifies ownership and matching tiers before mutating inventory.", "Merge проверяет владение и одинаковый уровень до изменения инвентаря.", `local function mergeUnits(profile, firstId, secondId)
    local a, b = profile.units[firstId], profile.units[secondId]
    if not a or not b or firstId == secondId then return nil end
    if a.tier ~= b.tier then return nil end
    profile.units[firstId], profile.units[secondId] = nil, nil
    return UnitFactory.Create(a.tier + 1)
end`),
  },
  "brainrot-bowling": {
    responsibilities: [text("End-to-end project development from scratch", "Полный цикл разработки проекта с нуля"), text("Core bowling throw and scoring mechanics", "Основная механика броска и подсчёта очков"), text("Match state and repeatable round flow", "Состояние матча и повторяемый цикл раундов")],
    codeExamples: example("Server-owned bowling score", "Серверный подсчёт очков", "The server converts confirmed pin states into frame scores.", "Сервер преобразует подтверждённое состояние кеглей в очки фрейма.", `local function finishThrow(frame, standingPins)
    local knocked = frame.pinsBefore - standingPins
    frame.throws += 1
    table.insert(frame.knockedPins, knocked)
    frame.pinsBefore = standingPins
    return Scoring.IsFrameComplete(frame)
end`),
  },
  "sportik-city": {
    responsibilities: [text("Project development from scratch with Hybrid", "Разработка проекта с нуля в команде Hybrid"), text("Tag, gym, quiz and duel activities", "Салки, качалка, квиз и дуэль"), text("Shared reward flow across minigames", "Общая система наград мини-игр")],
    codeExamples: example("Shared minigame contract", "Общий контракт мини-игр", "Independent activities report validated results through one shared contract.", "Независимые активности передают проверенные результаты через общий контракт.", `function MinigameService:Finish(player, activityId, result)
    local session = self.sessions[player]
    if not session or session.activityId ~= activityId then return end
    local reward = ActivityConfig.GetReward(activityId, result)
    Rewards.Grant(player, reward)
    self.sessions[player] = nil
end`),
  },
  "dobry-back-to-school": {
    responsibilities: [text("Treasure-hunt and quest gameplay", "Геймплей поиска сокровищ и заданий"), text("UGC reward progression", "Прогрессия UGC-наград"), text("Ship-related seasonal content integration", "Интеграция сезонного контента с кораблями")],
    codeExamples: example("Idempotent quest progress", "Идемпотентный прогресс задания", "Unique objectives cannot be counted twice toward a seasonal reward.", "Уникальная цель не может быть засчитана дважды для сезонной награды.", `local function completeObjective(profile, objectiveId)
    if profile.completed[objectiveId] then return false end
    profile.completed[objectiveId] = true
    profile.questProgress += 1
    if profile.questProgress >= QuestConfig.Required then
        profile.rewardUnlocked = true
    end
    return true
end`),
  },
  "luana-maze": {
    responsibilities: [text("Standalone maze gameplay", "Геймплей отдельной игры-лабиринта"), text("Checkpoint and completion progression", "Прогрессия контрольных точек и завершения"), text("Integration into the Kinopoisk ecosystem", "Интеграция в экосистему Кинопоиска")],
    codeExamples: example("Ordered maze checkpoints", "Последовательные точки лабиринта", "The server accepts only the next expected checkpoint for a player run.", "Сервер принимает только следующую ожидаемую точку забега.", `local function reachCheckpoint(run, checkpointIndex)
    if checkpointIndex ~= run.checkpoint + 1 then return false end
    run.checkpoint = checkpointIndex
    if checkpointIndex == MazeConfig.FinalCheckpoint then
        run.completedAt = workspace:GetServerTimeNow()
    end
    return true
end`),
  },
  "upgrade-ufo": {
    responsibilities: [text("UFO upgrade progression", "Улучшение НЛО"), text("Bases, slots, daily rewards and events", "Базы, слоты, дейли и ивенты"), text("Drop system", "Система дропа")],
    codeExamples: [],
  },
  "brainrot-bomb-rush": {
    responsibilities: [text("Round system", "Система раундов"), text("Winner and loser flow", "Победитель и проигравший"), text("Daily rewards, funnels and A/B tests", "Дейли, воронки и A/B-тесты")],
    codeExamples: [],
  },
  "squad-wars": {
    responsibilities: [text("Bases, slots and offline income", "Базы, слоты и офлайн-доход"), text("Matchmaking system", "Система матчмейкинга"), text("NPC combat", "NPC и их сражение")],
    codeExamples: [],
  },
  "break-rocks-brainrots": {
    responsibilities: [text("Brainrot mining, index, bases and slots", "Добывание брейнротов, индекс, базы и слоты"), text("Offline and online income", "Офлайн- и онлайн-доход"), text("Daily rewards, events and core loop", "Дейли, ивенты и основной игровой цикл")],
    codeExamples: [],
  },
  "aliens-steal-brainrots": {
    responsibilities: [text("Core game loop", "Основной игровой цикл"), text("Bases, offline and online income", "Базы, офлайн- и онлайн-доход"), text("Index system", "Индекс"), text("Full monetization surface", "Вся монетизация")],
    codeExamples: [],
  },
  "pull-the-sword": {
    responsibilities: [text("Sword-pulling mechanic", "Вытягивание меча"), text("NPC combat", "Сражение с NPC"), text("Cutscenes and presentation flow", "Катсцены и презентационный поток"), text("Core loop and monetization", "Весь основной цикл с монетизацией")],
    codeExamples: [],
  },
};
