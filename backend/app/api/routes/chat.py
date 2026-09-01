from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from app.services.orchestrator import OrchestratorService
from app.services.rag_service import RagService

router = APIRouter()
rag_service = RagService()
orchestrator_service = OrchestratorService()


class ChatRequest(BaseModel):
    message: str = Field(min_length=1)


class ChatResponse(BaseModel):
    reply: str
    memory_used: bool
    graph_used: bool
    intent: str
    source: str
    confidence: float


@router.post("/", response_model=ChatResponse)
def chat(payload: ChatRequest) -> ChatResponse:
    if not payload.message.strip():
        raise HTTPException(status_code=400, detail="Message must not be empty")

    retrieval = rag_service.retrieve(payload.message)
    state = orchestrator_service.build_state(payload.message)
    context = retrieval[0].content if retrieval else "No retrieval context"
    return ChatResponse(
        reply=f"Intent: {state.intent}\nAssistant response to: {payload.message}\nContext: {context}",
        memory_used=state.memory_used,
        graph_used=state.graph_used,
        intent=state.intent,
        source="hybrid-rag" if state.intent != "general" else "general",
        confidence=0.91,
    )
