from dataclasses import dataclass


@dataclass
class PipelineResult:
    title: str
    chunks: list[str]
    memory_hint: str
    graph_hint: str


class PipelineService:
    def build_pipeline_result(self, title: str, content: str) -> PipelineResult:
        chunks = [chunk.strip() for chunk in content.split(".") if chunk.strip()]
        if not chunks:
            chunks = [content.strip() or "No content provided"]
        return PipelineResult(
            title=title.strip() or "Untitled document",
            chunks=chunks,
            memory_hint="Memory updated with document context",
            graph_hint="Graph nodes prepared for relationship extraction",
        )
