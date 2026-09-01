from datetime import datetime, timedelta, timezone

from fastapi import APIRouter, HTTPException, status
from jose import jwt
from passlib.context import CryptContext
from pydantic import BaseModel, Field

from app.core.config import settings
from app.services.auth_service import AuthService

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
auth_service = AuthService()


class LoginRequest(BaseModel):
    username: str = Field(min_length=3)
    password: str = Field(min_length=6)


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class UserRecord(BaseModel):
    username: str
    email: str | None = None


def create_access_token(subject: str) -> str:
    expire = datetime.now(timezone.utc) + timedelta(minutes=settings.access_token_expire_minutes)
    payload = {"sub": subject, "exp": expire}
    return jwt.encode(payload, settings.secret_key, algorithm=settings.algorithm)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)


@router.post("/login", response_model=TokenResponse)
def login(payload: LoginRequest) -> TokenResponse:
    if payload.username != "demo" or not verify_password(payload.password, get_password_hash("demo123")):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid username or password")

    token = auth_service.create_token(payload.username)
    return TokenResponse(access_token=token)


@router.get("/me", response_model=UserRecord)
def get_current_user() -> UserRecord:
    return UserRecord(username="demo", email="demo@example.com")
