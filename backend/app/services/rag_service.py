from dataclasses import dataclass


@dataclass
class RetrievalResult:
    content: str
    score: float


class RagService:
    def retrieve(self, query: str) -> list[RetrievalResult]:
        normalized = query.strip().lower()
        if normalized:
            return [
                RetrievalResult(
                    content=(
                        f"Relevant context for '{query}': The assistant can answer using static knowledge, "
                        f"memory, and graph-based relationships."
                    ),
                    score=0.92,
                )
            ]
        return []
