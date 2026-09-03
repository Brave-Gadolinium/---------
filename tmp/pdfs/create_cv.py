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
            ("DeepFox", "Lua Developer · Oct 2025–Aug 2026", "Built Roblox games from the ground up."),
            ("Indigo", "Roblox Developer · May–Oct 2025", "Built games from scratch, supported live projects and shipped updates."),
            ("Hybrid", "Roblox Developer · Apr–Jul 2025", "Project development for branded Roblox experiences."),
            ("Maff", "Roblox Developer · Apr 2025", "Created and supported Roblox games, including Luana's Maze."),
            ("Protagonist", "Roblox Developer · Oct 2024–Mar 2025", "Developed Roblox games in a startup team."),
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
            ("DeepFox", "Lua-разработчик · окт. 2025–авг. 2026", "Создание Roblox-игр с нуля."),
            ("Indigo", "Roblox-разработчик · май–окт. 2025", "Создание игр с нуля, поддержка и выпуск обновлений."),
            ("Hybrid", "Roblox-разработчик · апр.–июль 2025", "Проектная разработка брендированных Roblox-игр."),
            ("Maff", "Roblox-разработчик · апр. 2025", "Создание и поддержка игр, включая «Лабиринт Луаны»."),
            ("Протагонист", "Roblox-разработчик · окт. 2024–март 2025", "Разработка Roblox-игр в стартап-команде."),
        ],
        "projects_title": "ИЗБРАННЫЕ ПРОЕКТЫ",
        "projects": ["Dig to Earth · 248 млн", "Build Scam Empire · 49 млн", "Flying Wings · 32,2 млн", "My Pet Jelly · 12,9 млн", "Merge Brainrot", "Brainrot Bowling", "Спортик-сити", "Добрый: снова в школу", "Лабиринт Луаны"],
        "contact_title": "КОНТАКТЫ",
    },
}


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


def create_cv(language):
    data = DATA[language]
    OUTPUT.mkdir(parents=True, exist_ok=True)
    PUBLIC.mkdir(parents=True, exist_ok=True)
    target = OUTPUT / data["file"]
    c = canvas.Canvas(str(target), pagesize=A4)
    width, height = A4
    c.setTitle(f"Nikita — {data['role']}")
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

    contact_y = 62
    c.setStrokeColor(HexColor("#DDE5EF"))
    c.line(mx, contact_y + 24, width - 30, contact_y + 24)
    c.setFillColor(accent)
    c.setFont("Arial-Bold", 8)
    c.drawString(mx, contact_y + 8, data["contact_title"])
    c.setFillColor(navy)
    c.setFont("Arial", 8)
    c.drawString(mx, contact_y - 8, "Telegram: @Brave_Gadolinium")
    c.drawString(mx, contact_y - 22, "Email: np_v@inbox.ru")
    c.drawString(mx + 175, contact_y - 8, "Roblox: main_23Kld")
    c.linkURL("https://t.me/Brave_Gadolinium", (mx, contact_y - 12, mx + 150, contact_y + 3), relative=0)
    c.linkURL("mailto:np_v@inbox.ru", (mx, contact_y - 26, mx + 150, contact_y - 11), relative=0)
    c.linkURL("https://www.roblox.com/users/4349007560/profile", (mx + 175, contact_y - 12, width - 30, contact_y + 3), relative=0)

    c.save()
    (PUBLIC / data["file"]).write_bytes(target.read_bytes())
    return target


if __name__ == "__main__":
    for lang in ("en", "ru"):
        print(create_cv(lang))
