from fastapi import APIRouter
from pydantic import BaseModel

from app.services.memory_service import MemoryService

router = APIRouter()
memory_service = MemoryService()


class MemoryItem(BaseModel):
    key: str
    value: str


@router.get("/")
def list_memories() -> list[MemoryItem]:
    entries = memory_service.list_entries()
    return [MemoryItem(key=entry.key, value=entry.value) for entry in entries]


@router.post("/")
def create_memory(item: MemoryItem) -> MemoryItem:
    entry = memory_service.add_entry(item.key, item.value)
    return MemoryItem(key=entry.key, value=entry.value)
