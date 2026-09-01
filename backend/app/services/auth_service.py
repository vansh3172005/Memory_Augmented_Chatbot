from typing import Any

from jose import jwt

from app.core.config import settings


class AuthService:
    def create_token(self, username: str) -> str:
        return jwt.encode({"sub": username}, settings.secret_key, algorithm=settings.algorithm)
