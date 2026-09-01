from pydantic import BaseModel, Field


class UserModel(BaseModel):
    username: str = Field(min_length=3)
    email: str | None = None
    is_active: bool = True
