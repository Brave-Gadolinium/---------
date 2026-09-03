from math import ceil
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "output" / "pdf"
PUBLIC = ROOT / "public" / "cv"
FONT_REGULAR = r"C:\Windows\Fonts\arial.ttf"
FONT_BOLD = r"C:\Windows\Fonts\arialbd.ttf"

pdfmetrics.registerFont(TTFont("Arial", FONT_REGULAR))
pdfmetrics.registerFont(TTFont("Arial-Bold", FONT_BOLD))

DATA = {
    "en": {
        "file": "nikita-roblox-developer-cv-en.pdf",
        "name": "NIKITA PUGACHEV",
        "role": "ROBLOX / LUAU DEVELOPER",
        "summary_title": "PROFILE",
        "summary": "Roblox developer with 2+ years of commercial production experience. I build games from scratch, support live projects and ship updates.",
        "skills_title": "CORE SKILLS",
        "skills": ["Luau & Roblox Studio", "Gameplay systems", "Client / server architecture", "DataStore & persistence", "NPC, AI & pathfinding", "Optimization & debugging"],
        "tools_title": "TOOLS",
        "tools": "Git · Wally · JavaScript\nJira · Confluence · Notion\nFigma · Miro · TopBar\nEnglish: B2",
        "experience_title": "EXPERIENCE",
        "experience": [
            ("DeepFox", "Lua Developer · Oct 2025-Aug 2026", "Built Roblox games from the ground up."),
            ("Indigo", "Roblox Developer · May-Oct 2025", "Built games from scratch, supported live projects and shipped updates."),
            ("Hybrid", "Roblox Developer · Apr-Jul 2025", "Project development for branded Roblox experiences."),
            ("Maff", "Roblox Developer · Apr 2025", "Created and supported Roblox games, including Luana's Maze."),
            ("Protagonist", "Roblox Developer · Oct 2024-Mar 2025", "Developed Roblox games in a startup team."),
        ],
        "projects_title": "SELECTED PROJECTS",
        "projects": ["Dig to Earth · 248M", "Build Scam Empire · 49M", "Flying Wings · 32.2M", "My Pet Jelly · 12.9M", "Merge Brainrot", "Brainrot Bowling", "Sportik City", "Dobry: Back to School", "Luana's Maze"],
        "contact_title": "CONTACT",
    },
    "ru": {
        "file": "nikita-roblox-developer-cv-ru.pdf",
        "name": "НИКИТА ПУГАЧЕВ",
        "role": "ROBLOX / LUAU РАЗРАБОТЧИК",
        "summary_title": "ПРОФИЛЬ",
        "summary": "Roblox-разработчик с опытом более 2 лет в коммерческом продакшене. Создаю игры с нуля, поддерживаю live-проекты и выпускаю обновления.",
        "skills_title": "КЛЮЧЕВЫЕ НАВЫКИ",
        "skills": ["Luau и Roblox Studio", "Игровые системы", "Клиент-серверная архитектура", "DataStore и сохранения", "NPC, ИИ и поиск пути", "Оптимизация и отладка"],
        "tools_title": "ИНСТРУМЕНТЫ",
        "tools": "Git · Wally · JavaScript\nJira · Confluence · Notion\nFigma · Miro · TopBar\nАнглийский: B2",
        "experience_title": "ОПЫТ РАБОТЫ",
        "experience": [
            ("DeepFox", "Lua-разработчик · окт. 2025-авг. 2026", "Создание Roblox-игр с нуля."),
            ("Indigo", "Roblox-разработчик · май-окт. 2025", "Создание игр с нуля, поддержка и выпуск обновлений."),
            ("Hybrid", "Roblox-разработчик · апр.-июль 2025", "Проектная разработка брендированных Roblox-игр."),
            ("Maff", "Roblox-разработчик · апр. 2025", "Создание и поддержка игр, включая «Лабиринт Луаны»."),
            ("Протагонист", "Roblox-разработчик · окт. 2024-март 2025", "Разработка Roblox-игр в стартап-команде."),
        ],
        "projects_title": "ИЗБРАННЫЕ ПРОЕКТЫ",
        "projects": ["Dig to Earth · 248 млн", "Build Scam Empire · 49 млн", "Flying Wings · 32,2 млн", "My Pet Jelly · 12,9 млн", "Merge Brainrot", "Brainrot Bowling", "Спортик-сити", "Добрый: снова в школу", "Лабиринт Луаны"],
        "contact_title": "КОНТАКТЫ",
    },
}

PORTFOLIO = [
    {
        "title": "Nightmare Survivors",
        "type": {"en": "Co-op survival / roguelite", "ru": "Кооперативное выживание / roguelite"},
        "role": {"en": "Gameplay and Systems Developer", "ru": "Разработчик геймплея и систем"},
        "context": {"en": "A four-player survival run split between a lobby and a separate nightmare place with escalating nights.", "ru": "Забег на выживание для четырёх игроков, разделённый между лобби и отдельным миром кошмара с усложняющимися ночами."},
        "contribution": {"en": "Gameplay systems, server-authoritative run architecture and persistent solo/party session flows.", "ru": "Игровые системы, серверная архитектура забега и сохранение одиночных и групповых сессий."},
        "systems": {"en": "Party rejoin; versioned saves; configurable night scenarios; resources, crafting, base and buildings.", "ru": "Возврат в пати; версионированные сохранения; сценарии ночей; ресурсы, крафт, база и постройки."},
        "result": {"en": "Released Roblox experience with a complete repeatable night-survival loop.", "ru": "Выпущенный Roblox-проект с полноценным повторяемым циклом ночного выживания."},
        "url": "https://www.roblox.com/games/134558356313859/Nightmare-Survivors",
    },
    {
        "title": "Strength Clicker",
        "type": {"en": "Simulator / progression", "ru": "Симулятор / прогрессия"},
        "role": {"en": "Systems Developer", "ru": "Разработчик систем"},
        "context": {"en": "A content-rich strength simulator with powers, pets, PvP and several parallel progression paths.", "ru": "Контентный симулятор силы со способностями, питомцами, PvP и несколькими направлениями прогрессии."},
        "contribution": {"en": "Development of modular progression, profile-backed data and live-content systems.", "ru": "Разработка модульной прогрессии, профильных данных и систем live-контента."},
        "systems": {"en": "ProfileService; powers and pets; quests, seasons and events; trades, clans and soft shutdown.", "ru": "ProfileService; силы и питомцы; задания, сезоны и события; трейды, кланы и мягкое выключение."},
        "result": {"en": "Released simulator with several parallel progression paths.", "ru": "Выпущенный симулятор с несколькими параллельными направлениями прогрессии."},
        "url": "https://www.roblox.com/games/134571136953118/Strength-Clicker",
    },
    {
        "title": "Build a Scam Empire!",
        "type": {"en": "Live tycoon / 49M visits", "ru": "Live-тайкун / 49 млн посещений"},
        "role": {"en": "Live Ops and Updates Developer", "ru": "Разработчик поддержки и обновлений"},
        "context": {"en": "A mature live tycoon with a persistent plot economy and broad progression and social systems.", "ru": "Зрелый live-тайкун с сохраняемой экономикой участка и большой системой прогрессии и социальных механик."},
        "contribution": {"en": "Production updates and backward-compatible work across live data, economy and monetization.", "ru": "Продакшен-обновления и обратно совместимая работа с live-данными, экономикой и монетизацией."},
        "systems": {"en": "Workers and cards; merge, crafting and rebirth; offline income; corporations, raids and leaderboards.", "ru": "Работники и карты; merge, крафт и перерождения; офлайн-доход; корпорации, рейды и рейтинги."},
        "result": {"en": "Live project with 49M visits at the time the portfolio was submitted.", "ru": "Действующий проект с 49 млн посещений на момент отправки портфолио."},
        "url": "https://www.roblox.com/games/83942919686609/Build-a-Scam-Empire",
    },
    {
        "title": "Upgrade Your Brainrot",
        "type": {"en": "Tycoon / idle economy", "ru": "Тайкун / idle-экономика"},
        "role": {"en": "Roblox Developer", "ru": "Roblox-разработчик"},
        "context": {"en": "Players buy eggs, hatch income-generating units and upgrade their conveyor and base.", "ru": "Игроки покупают яйца, получают приносящих доход юнитов и улучшают конвейер и базу."},
        "contribution": {"en": "Development of gameplay and progression systems for the project.", "ru": "Разработка игровых систем и прогрессии проекта."},
        "systems": {"en": "Egg rarity and timers; unit income; upgrade machines; offline hatching and evolution.", "ru": "Редкость яиц и таймеры; доход юнитов; машины улучшений; офлайн-вылупление и эволюция."},
        "result": {"en": "Released collection tycoon with online and offline progression.", "ru": "Выпущенный коллекционный тайкун с онлайн- и офлайн-прогрессией."},
        "url": "https://www.roblox.com/games/104609916234164/Upgrade-Your-Brainrot",
    },
    {
        "title": "Dig & Bomb: Brainrot Rush!",
        "type": {"en": "Mining / PvP tycoon", "ru": "Майнинг / PvP-тайкун"},
        "role": {"en": "Roblox Developer", "ru": "Roblox-разработчик"},
        "context": {"en": "An explosive mining tycoon with staged terrain generation and a server-owned slot economy.", "ru": "Взрывной майнинг-тайкун с поэтапной генерацией шахты и серверной экономикой слотов."},
        "contribution": {"en": "Service-controller gameplay, efficient mine resets, onboarding, offline rewards and live events.", "ru": "Сервисно-контроллерный геймплей, эффективный сброс шахты, обучение, офлайн-награды и события."},
        "systems": {"en": "Dirty-chunk terrain restore; bomb camera; canonical income formula; FTUE; timed candy event.", "ru": "Восстановление изменённых чанков; камера бомбы; единая формула дохода; FTUE; временное событие."},
        "result": {"en": "Released experience combining mining risk with tycoon progression.", "ru": "Выпущенный проект, объединяющий риск раскопок с прогрессией тайкуна."},
        "url": "https://www.roblox.com/games/121277380801084/Dig-Bomb-Brainrot-Rush",
    },
    {
        "title": "+1 Key +1 Jump for Brainrots",
        "type": {"en": "Flying / collection simulator", "ru": "Симулятор полёта и коллекционирования"},
        "role": {"en": "Roblox Developer", "ru": "Roblox-разработчик"},
        "context": {"en": "A vertical collection simulator with flight progression, disasters, Lucky Blocks and a unit base.", "ru": "Вертикальный коллекционный симулятор с прогрессией полёта, катастрофами, Lucky Blocks и базой юнитов."},
        "contribution": {"en": "Movement, reward metadata persistence, slots and configurable special-unit abilities.", "ru": "Передвижение, сохранение параметров наград, слоты и настраиваемые способности особых юнитов."},
        "systems": {"en": "Flight and rebirths; disaster runtime; Lucky Block reward pipeline; timed slot modifiers.", "ru": "Полёт и перерождения; катастрофы; цепочка наград Lucky Block; временные модификаторы слотов."},
        "result": {"en": "Beta experience with a complete collect-return-upgrade loop.", "ru": "Бета-проект с полным циклом «собрать - вернуть - улучшить»."},
        "url": "https://www.roblox.com/games/134867980028583/1-Key-1-Jump-for-Brainrots",
    },
    {
        "title": "Dark Survivor",
        "type": {"en": "Horde survival / roguelite", "ru": "Выживание против орд / roguelite"},
        "role": {"en": "Roblox Developer", "ru": "Roblox-разработчик"},
        "context": {"en": "A fast horde-survival game where players build weapon combinations and fight bosses.", "ru": "Динамичная игра на выживание, где игрок собирает оружейные комбинации и сражается с боссами."},
        "contribution": {"en": "Development of combat, upgrade and run-progression systems.", "ru": "Разработка систем боя, улучшений и прогрессии забега."},
        "systems": {"en": "40+ weapons and upgrades; scalable enemy hordes; bosses; build-based runs.", "ru": "Более 40 видов оружия и улучшений; масштабируемые орды; боссы; система билдов."},
        "result": {"en": "Released Roblox horde-survival experience.", "ru": "Выпущенная Roblox-игра на выживание против орд."},
        "url": "https://www.roblox.com/games/93340206427348/Dark-Survivor",
    },
    {
        "title": "Kinopoisk World",
        "type": {"en": "Branded entertainment hub", "ru": "Брендированный развлекательный мир"},
        "role": {"en": "Roblox Developer", "ru": "Roblox-разработчик"},
        "context": {"en": "A cinema hub connecting standalone games inspired by Kinopoisk films and series.", "ru": "Мир-кинотеатр, объединяющий отдельные игры по мотивам фильмов и сериалов Кинопоиска."},
        "contribution": {"en": "Development of gameplay for branded worlds and standalone activities.", "ru": "Разработка геймплея брендированных миров и отдельных игровых активностей."},
        "systems": {"en": "Minigames; quests; UGC rewards; themed worlds; hub navigation.", "ru": "Мини-игры; квесты; UGC-награды; тематические миры; навигация хаба."},
        "result": {"en": "Released multi-experience branded Roblox world.", "ru": "Выпущенный брендированный Roblox-мир из нескольких игровых направлений."},
        "url": "https://www.roblox.com/games/131987391427170/unnamed",
    },
    {
        "title": "Dig to Earth",
        "type": {"en": "Large-scale live game / 248M visits", "ru": "Крупный live-проект / 248 млн посещений"},
        "role": {"en": "Live Ops and Updates Developer", "ru": "Разработчик поддержки и обновлений"},
        "context": {"en": "A released Roblox experience serving a large active audience.", "ru": "Выпущенный Roblox-проект с крупной действующей аудиторией."},
        "contribution": {"en": "Maintained the live project and delivered production updates.", "ru": "Поддерживал действующий проект и выпускал продакшен-обновления."},
        "systems": {"en": "Work covered live-game maintenance and update delivery; detailed scope is not public.", "ru": "Работа включала поддержку live-игры и выпуск обновлений; подробности задач не публичны."},
        "result": {"en": "248M visits at the time the portfolio was submitted.", "ru": "248 млн посещений на момент отправки портфолио."},
        "url": "https://www.roblox.com/share?code=e9350038a23e36429c50a81e051b7f4a&type=ExperienceDetails&stamp=1760600757324",
    },
    {
        "title": "Flying Wings",
        "type": {"en": "Live game / 32.2M visits", "ru": "Live-проект / 32,2 млн посещений"},
        "role": {"en": "Live Ops and Updates Developer", "ru": "Разработчик поддержки и обновлений"},
        "context": {"en": "A released Roblox experience with a multi-million player audience.", "ru": "Выпущенный Roblox-проект с многомиллионной аудиторией."},
        "contribution": {"en": "Supported the project and developed production updates.", "ru": "Поддерживал проект и разрабатывал продакшен-обновления."},
        "systems": {"en": "Live-game maintenance and update development; detailed scope is not public.", "ru": "Поддержка live-игры и разработка обновлений; подробности задач не публичны."},
        "result": {"en": "32.2M visits at the time the portfolio was submitted.", "ru": "32,2 млн посещений на момент отправки портфолио."},
        "url": "https://www.roblox.com/share?code=23cc6a488c932e43bc4922cd65a28a1f&type=ExperienceDetails&stamp=1760598087876",
    },
    {
        "title": "My Pet Jelly",
        "type": {"en": "Live simulator / 12.9M visits", "ru": "Live-симулятор / 12,9 млн посещений"},
        "role": {"en": "Live Ops and Updates Developer", "ru": "Разработчик поддержки и обновлений"},
        "context": {"en": "A persistent pet-growth simulator where the player's Jelly continues growing offline.", "ru": "Симулятор роста питомца, в котором Jelly продолжает развиваться во время отсутствия игрока."},
        "contribution": {"en": "Maintained the released project and developed updates.", "ru": "Поддерживал выпущенный проект и разрабатывал обновления."},
        "systems": {"en": "Persistent progress; offline growth; global leaderboard; live updates.", "ru": "Сохранение прогресса; офлайн-рост; глобальный рейтинг; live-обновления."},
        "result": {"en": "12.9M visits at the time the portfolio was submitted.", "ru": "12,9 млн посещений на момент отправки портфолио."},
        "url": "https://www.roblox.com/share?code=d543daec5dd48347a429984fc0b4f687&type=ExperienceDetails&stamp=1760600626261",
    },
    {
        "title": "Merge Brainrot",
        "type": {"en": "Merge simulator / live ops", "ru": "Merge-симулятор / live ops"},
        "role": {"en": "Live Ops and Updates Developer", "ru": "Разработчик поддержки и обновлений"},
        "context": {"en": "A progression simulator built around merging units into rarer forms.", "ru": "Симулятор прогрессии, построенный вокруг объединения юнитов в более редкие формы."},
        "contribution": {"en": "Supported the released project and developed updates.", "ru": "Поддерживал выпущенный проект и разрабатывал обновления."},
        "systems": {"en": "Merge progression and live updates; detailed implementation scope is not public.", "ru": "Merge-прогрессия и live-обновления; подробности реализации не публичны."},
        "result": {"en": "Released Roblox project supported after launch.", "ru": "Выпущенный Roblox-проект с послерелизной поддержкой."},
        "url": "https://www.roblox.com/share?code=f69fdfe11f41fd4aaa0bd04f83240818&type=ExperienceDetails&stamp=1760600772559",
    },
    {
        "title": "Sportik City",
        "type": {"en": "Branded experience / built from scratch", "ru": "Брендированный проект / создан с нуля"},
        "role": {"en": "Roblox Developer, Hybrid Metaverse", "ru": "Roblox-разработчик, Hybrid Metaverse"},
        "context": {"en": "A branded game about Sportik created for Svyatoy Istochnik with the Hybrid Metaverse team.", "ru": "Брендированная игра про Спортика для «Святого источника», созданная командой Hybrid Metaverse."},
        "contribution": {"en": "Participated in end-to-end development of the project from scratch.", "ru": "Участвовал в полном цикле разработки проекта с нуля."},
        "systems": {"en": "Tag minigame; gym activity; quiz; duel.", "ru": "Салки; качалка; квиз; дуэль."},
        "result": {"en": "Released branded Roblox experience with four distinct activities.", "ru": "Выпущенный брендированный Roblox-проект с четырьмя игровыми активностями."},
        "url": "https://www.roblox.com/share?code=cf3ba5c61ebd624097901f8b9e5f9ef0&type=ExperienceDetails&stamp=1760601177743",
    },
    {
        "title": "Dobry: Back to School",
        "type": {"en": "Branded world activation", "ru": "Активация брендированного мира"},
        "role": {"en": "Roblox Developer, Hybrid", "ru": "Roblox-разработчик, Hybrid"},
        "context": {"en": "A new seasonal activation for the existing Dobry Roblox world.", "ru": "Новая сезонная активация для существующего Roblox-мира «Добрый»."},
        "contribution": {"en": "Worked with the Hybrid team to develop and ship the activation.", "ru": "В команде Hybrid разработал и выпустил активацию в релиз."},
        "systems": {"en": "Treasure hunt; quests; new UGC rewards; ships.", "ru": "Поиск сокровищ; квесты; новые UGC-награды; корабли."},
        "result": {"en": "Seasonal content successfully released into the live branded world.", "ru": "Сезонный контент выпущен в действующий брендированный мир."},
        "url": "https://www.roblox.com/share?code=20fb6959b7b2fc4899ffbbacd181acb3&type=ExperienceDetails&stamp=1760601301686",
    },
    {
        "title": "Luana's Maze",
        "type": {"en": "Kinopoisk branded game", "ru": "Брендированная игра Кинопоиска"},
        "role": {"en": "Roblox Developer, Maff", "ru": "Roblox-разработчик, Maff"},
        "context": {"en": "A standalone maze game created as part of the Kinopoisk collaboration.", "ru": "Отдельная игра-лабиринт, созданная в рамках проекта с Кинопоиском."},
        "contribution": {"en": "Developed the game with the Maff team.", "ru": "Разработал игру в составе команды Maff."},
        "systems": {"en": "Maze gameplay and themed standalone experience; further scope is not public.", "ru": "Геймплей лабиринта и отдельный тематический мир; остальные детали не публичны."},
        "result": {"en": "Standalone game released inside the Kinopoisk project ecosystem.", "ru": "Отдельная игра выпущена в экосистеме проекта Кинопоиска."},
        "url": "https://www.roblox.com/share?code=2530e96aa9867442a21f70ec7583ae37&type=ExperienceDetails&stamp=1760601241775",
    },
    {
        "title": "Brainrot Bowling",
        "type": {"en": "Bowling game / built from scratch", "ru": "Боулинг / создан с нуля"},
        "role": {"en": "Game Developer", "ru": "Разработчик игры"},
        "context": {"en": "A Roblox game centered on bowling gameplay and Brainrot characters.", "ru": "Roblox-игра, построенная вокруг боулинга и Brainrot-персонажей."},
        "contribution": {"en": "Built the project from the ground up through the full development cycle.", "ru": "Создал проект с нуля и прошёл полный цикл разработки."},
        "systems": {"en": "Core bowling gameplay; detailed mechanics and media have not yet been provided.", "ru": "Основной геймплей боулинга; подробные механики и медиаматериалы пока не предоставлены."},
        "result": {"en": "Complete project created from scratch; public link is available on request.", "ru": "Полноценный проект создан с нуля; публичная ссылка предоставляется по запросу."},
        "url": "",
    },
]


def wrap_text(text, font, size, max_width):
    lines = []
    for paragraph in text.split("\n"):
        words = paragraph.split()
        current = ""
        for word in words:
            candidate = f"{current} {word}".strip()
            if pdfmetrics.stringWidth(candidate, font, size) <= max_width:
                current = candidate
            else:
                if current:
                    lines.append(current)
                current = word
        lines.append(current)
    return lines


def draw_lines(c, text, x, y, width, font="Arial", size=9, leading=13, color="#536071"):
    c.setFont(font, size)
    c.setFillColor(HexColor(color))
    for line in wrap_text(text, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_heading(c, text, x, y):
    c.setFillColor(HexColor("#2789F3"))
    c.setFont("Arial-Bold", 8)
    c.drawString(x, y, text)
    c.setStrokeColor(HexColor("#DDE5EF"))
    c.line(x, y - 6, x + 335, y - 6)
    return y - 22


def draw_case_row(c, label, value, x, y, width, language):
    label_width = 78
    c.setFillColor(HexColor("#2789F3"))
    c.setFont("Arial-Bold", 7)
    c.drawString(x, y, label.upper())
    return draw_lines(c, value, x + label_width, y, width - label_width, size=7.7, leading=10, color="#3F4B5C")


def draw_portfolio_pages(c, data, language, width, height):
    labels = {
        "en": {"title": "PROJECT PORTFOLIO", "subtitle": "Selected Roblox production work", "role": "Role", "context": "Context", "contribution": "Contribution", "systems": "Key systems", "result": "Result", "link": "OPEN ON ROBLOX", "request": "LINK AVAILABLE ON REQUEST"},
        "ru": {"title": "ПОРТФОЛИО ПРОЕКТОВ", "subtitle": "Избранные работы в Roblox-продакшене", "role": "Роль", "context": "Контекст", "contribution": "Вклад", "systems": "Системы", "result": "Результат", "link": "ОТКРЫТЬ В ROBLOX", "request": "ССЫЛКА ПО ЗАПРОСУ"},
    }[language]
    per_page = 3
    portfolio_pages = ceil(len(PORTFOLIO) / per_page)
    total_pages = portfolio_pages + 1

    for page_offset in range(portfolio_pages):
        c.showPage()
        page_number = page_offset + 2
        c.setFillColor(HexColor("#0B1320"))
        c.rect(0, height - 86, width, 86, fill=1, stroke=0)
        c.setFillColor(HexColor("#2789F3"))
        c.rect(0, height - 86, 7, 86, fill=1, stroke=0)
        c.setFillColor(HexColor("#FFFFFF"))
        c.setFont("Arial-Bold", 17)
        c.drawString(30, height - 39, labels["title"])
        c.setFillColor(HexColor("#AEBAC9"))
        c.setFont("Arial", 8)
        c.drawString(31, height - 58, labels["subtitle"])
        c.drawRightString(width - 30, height - 48, f"{page_number:02d} / {total_pages:02d}")

        page_cases = PORTFOLIO[page_offset * per_page:(page_offset + 1) * per_page]
        card_x = 30
        card_width = width - 60
        card_height = 222
        card_gap = 10
        top = height - 105

        for local_index, case in enumerate(page_cases):
            project_index = page_offset * per_page + local_index + 1
            card_top = top - local_index * (card_height + card_gap)
            card_bottom = card_top - card_height
            c.setFillColor(HexColor("#F7F9FC"))
            c.setStrokeColor(HexColor("#DCE4EE"))
            c.roundRect(card_x, card_bottom, card_width, card_height, 9, fill=1, stroke=1)
            c.setFillColor(HexColor("#E3F0FE"))
            c.roundRect(card_x + 14, card_top - 35, 28, 22, 5, fill=1, stroke=0)
            c.setFillColor(HexColor("#2789F3"))
            c.setFont("Arial-Bold", 8)
            c.drawCentredString(card_x + 28, card_top - 28, f"{project_index:02d}")
            c.setFillColor(HexColor("#101827"))
            c.setFont("Arial-Bold", 13)
            c.drawString(card_x + 52, card_top - 29, case["title"])
            c.setFillColor(HexColor("#6A7686"))
            c.setFont("Arial", 7.5)
            c.drawRightString(card_x + card_width - 16, card_top - 28, case["type"][language])

            row_x = card_x + 18
            row_width = card_width - 36
            row_y = card_top - 55
            draw_case_row(c, labels["role"], case["role"][language], row_x, row_y, row_width, language)
            draw_case_row(c, labels["context"], case["context"][language], row_x, row_y - 27, row_width, language)
            draw_case_row(c, labels["contribution"], case["contribution"][language], row_x, row_y - 68, row_width, language)
            draw_case_row(c, labels["systems"], case["systems"][language], row_x, row_y - 109, row_width, language)
            draw_case_row(c, labels["result"], case["result"][language], row_x, row_y - 150, row_width, language)

            link_text = labels["link"] if case["url"] else labels["request"]
            c.setFillColor(HexColor("#2789F3" if case["url"] else "#7C8796"))
            c.setFont("Arial-Bold", 7)
            c.drawRightString(card_x + card_width - 18, card_bottom + 12, link_text)
            if case["url"]:
                link_width = pdfmetrics.stringWidth(link_text, "Arial-Bold", 7)
                c.linkURL(case["url"], (card_x + card_width - 18 - link_width, card_bottom + 7, card_x + card_width - 18, card_bottom + 18), relative=0)

        c.setFillColor(HexColor("#7C8796"))
        c.setFont("Arial", 7)
        c.drawString(30, 22, "Nikita Pugachev · Roblox / Luau Developer")
        c.drawRightString(width - 30, 22, f"{page_number} / {total_pages}")


def create_cv(language):
    data = DATA[language]
    OUTPUT.mkdir(parents=True, exist_ok=True)
    PUBLIC.mkdir(parents=True, exist_ok=True)
    target = OUTPUT / data["file"]
    c = canvas.Canvas(str(target), pagesize=A4)
    width, height = A4
    c.setTitle(f"Nikita - {data['role']}")
    c.setAuthor("Nikita")

    navy = HexColor("#0B1320")
    accent = HexColor("#2789F3")
    c.setFillColor(navy)
    c.rect(0, height - 126, width, 126, fill=1, stroke=0)
    c.setFillColor(accent)
    c.rect(0, height - 126, 7, 126, fill=1, stroke=0)
    c.setFillColor(HexColor("#FFFFFF"))
    c.setFont("Arial-Bold", 25)
    c.drawString(38, height - 58, data["name"])
    c.setFont("Arial-Bold", 10)
    c.setFillColor(HexColor("#68B2FF"))
    c.drawString(39, height - 79, data["role"])
    c.setFont("Arial", 8)
    c.setFillColor(HexColor("#CAD5E3"))
    c.drawString(39, height - 103, "+7 952 155-99-47   ·   np_v@inbox.ru   ·   @Brave_Gadolinium   ·   Pyatigorsk")

    sidebar_width = 185
    c.setFillColor(HexColor("#F1F5F9"))
    c.rect(0, 0, sidebar_width, height - 126, fill=1, stroke=0)

    sx, sy = 28, height - 158
    c.setFillColor(accent)
    c.setFont("Arial-Bold", 8)
    c.drawString(sx, sy, data["summary_title"])
    sy = draw_lines(c, data["summary"], sx, sy - 19, sidebar_width - 50, size=8.2, leading=12)
    sy -= 17
    c.setFillColor(accent)
    c.setFont("Arial-Bold", 8)
    c.drawString(sx, sy, data["skills_title"])
    sy -= 19
    for skill in data["skills"]:
        c.setFillColor(accent)
        c.circle(sx + 2, sy + 3, 1.6, fill=1, stroke=0)
        sy = draw_lines(c, skill, sx + 11, sy, sidebar_width - 61, size=8.2, leading=11) - 4
    sy -= 6
    c.setFillColor(accent)
    c.setFont("Arial-Bold", 8)
    c.drawString(sx, sy, data["tools_title"])
    draw_lines(c, data["tools"], sx, sy - 19, sidebar_width - 50, size=8.2, leading=13)

    mx, my = sidebar_width + 28, height - 157
    my = draw_heading(c, data["experience_title"], mx, my)
    for company, role, description in data["experience"]:
        c.setFillColor(navy)
        c.setFont("Arial-Bold", 12)
        c.drawString(mx, my, company)
        c.setFillColor(accent)
        c.setFont("Arial-Bold", 8)
        c.drawRightString(width - 30, my + 1, role)
        my = draw_lines(c, description, mx, my - 15, width - mx - 30, size=8.5, leading=11)
        my -= 9

    my = draw_heading(c, data["projects_title"], mx, my + 2)
    project_width = 165
    for index, project in enumerate(data["projects"]):
        column = index % 2
        row = index // 2
        px = mx + column * 174
        py = my - row * 26
        c.setFillColor(HexColor("#E8F3FF"))
        c.roundRect(px, py - 11, project_width, 19, 4, fill=1, stroke=0)
        c.setFillColor(navy)
        c.setFont("Arial-Bold", 7.4)
        c.drawCentredString(px + project_width / 2, py - 4, project)

    contact_y = 75
    c.setStrokeColor(HexColor("#DDE5EF"))
    c.line(mx, contact_y + 24, width - 30, contact_y + 24)
    c.setFillColor(accent)
    c.setFont("Arial-Bold", 8)
    c.drawString(mx, contact_y + 8, data["contact_title"])
    c.setFillColor(navy)
    c.setFont("Arial", 8)
    c.drawString(mx, contact_y - 8, "Telegram: @Brave_Gadolinium")
    c.drawString(mx, contact_y - 22, "Email: np_v@inbox.ru")
    c.drawString(mx, contact_y - 36, "Web: nikita-hazel.vercel.app")
    c.drawString(mx + 175, contact_y - 8, "Roblox: main_23Kld")
    c.drawString(mx + 175, contact_y - 22, "GitHub: Brave-Gadolinium")
    c.linkURL("https://t.me/Brave_Gadolinium", (mx, contact_y - 12, mx + 150, contact_y + 3), relative=0)
    c.linkURL("mailto:np_v@inbox.ru", (mx, contact_y - 26, mx + 150, contact_y - 11), relative=0)
    c.linkURL("https://nikita-hazel.vercel.app", (mx, contact_y - 40, mx + 150, contact_y - 25), relative=0)
    c.linkURL("https://www.roblox.com/users/4349007560/profile", (mx + 175, contact_y - 12, width - 30, contact_y + 3), relative=0)
    c.linkURL("https://github.com/Brave-Gadolinium/Brave-Gadolinium", (mx + 175, contact_y - 26, width - 30, contact_y - 11), relative=0)

    total_pages = ceil(len(PORTFOLIO) / 3) + 1
    c.setFillColor(HexColor("#7C8796"))
    c.setFont("Arial", 7)
    c.drawRightString(width - 30, 20, f"1 / {total_pages}")
    draw_portfolio_pages(c, data, language, width, height)

    c.save()
    (PUBLIC / data["file"]).write_bytes(target.read_bytes())
    return target


if __name__ == "__main__":
    for lang in ("en", "ru"):
        print(create_cv(lang))
