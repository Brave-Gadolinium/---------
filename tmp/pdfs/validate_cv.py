from pathlib import Path

from pypdf import PdfReader


FILES = (
    Path("output/pdf/nikita-roblox-developer-cv-ru.pdf"),
    Path("output/pdf/nikita-roblox-developer-cv-en.pdf"),
)

EXPECTED_PROJECTS = (
    "Nightmare Survivors",
    "Strength Clicker",
    "Build a Scam Empire",
    "Upgrade Your Brainrot",
    "Dig & Bomb: Brainrot Rush",
    "+1 Key +1 Jump for Brainrots",
    "Dark Survivor",
    "Kinopoisk World",
    "Dig to Earth",
    "Flying Wings",
    "My Pet Jelly",
    "Merge Brainrot",
    "Sportik City",
    "Dobry: Back to School",
    "Luana's Maze",
    "Brainrot Bowling",
)


for file_path in FILES:
    reader = PdfReader(str(file_path))
    text = "\n".join(page.extract_text() or "" for page in reader.pages)
    annotations = sum(len(page.get("/Annots") or []) for page in reader.pages)
    missing = [project for project in EXPECTED_PROJECTS if project not in text]
    has_coddy = "coddy" in text.lower()
    print(
        f"{file_path.name}: pages={len(reader.pages)}, "
        f"annotations={annotations}, missing={missing}, coddy={has_coddy}"
    )

    assert len(reader.pages) == 7
    assert not missing
    assert not has_coddy
    assert annotations >= 20
    assert "nikita-hazel.vercel.app" in text
    assert "Brave-Gadolinium" in text
