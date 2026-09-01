from dataclasses import dataclass


@dataclass
class MemoryEntry:
    key: str
    value: str


class MemoryService:
    def list_entries(self) -> list[MemoryEntry]:
        return [
            MemoryEntry(key="preference", value="likes concise answers"),
            MemoryEntry(key="topic", value="interested in AI systems"),
        ]

    def add_entry(self, key: str, value: str) -> MemoryEntry:
        if not key.strip() or not value.strip():
            raise ValueError("Memory key and value must be non-empty")
        return MemoryEntry(key=key.strip(), value=value.strip())
