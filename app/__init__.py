from pathlib import Path

_BACKEND_APP_DIR = Path(__file__).resolve().parent.parent / "backend" / "app"

if str(_BACKEND_APP_DIR) not in __path__:
    __path__.append(str(_BACKEND_APP_DIR))
