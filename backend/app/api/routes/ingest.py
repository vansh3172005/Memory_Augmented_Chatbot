from fastapi import APIRouter
from pydantic import BaseModel, Field

from app.services.pipeline_service import PipelineService

router = APIRouter()
pipeline_service = PipelineService()


class IngestRequest(BaseModel):
    title: str = Field(min_length=1)
    content: str = Field(min_length=1)


class IngestResponse(BaseModel):
    title: str
    chunk_count: int
    message: str
    memory_hint: str
    graph_hint: str


@router.post("/", response_model=IngestResponse)
def ingest(payload: IngestRequest) -> IngestResponse:
    pipeline_result = pipeline_service.build_pipeline_result(payload.title, payload.content)
    return IngestResponse(
        title=pipeline_result.title,
        chunk_count=len(pipeline_result.chunks),
        message="Ingestion completed successfully",
        memory_hint=pipeline_result.memory_hint,
        graph_hint=pipeline_result.graph_hint,
    )
