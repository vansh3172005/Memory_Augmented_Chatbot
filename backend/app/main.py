from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import auth, chat, ingest, memory, graph, evaluation, tools
from app.core.config import settings
from app.core.logging import configure_logging

configure_logging()

app = FastAPI(title="Memory-Augmented Chatbot", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(chat.router, prefix="/api/chat", tags=["chat"])
app.include_router(ingest.router, prefix="/api/ingest", tags=["ingest"])
app.include_router(memory.router, prefix="/api/memory", tags=["memory"])
app.include_router(graph.router, prefix="/api/graph", tags=["graph"])
app.include_router(evaluation.router, prefix="/api/evaluation", tags=["evaluation"])
app.include_router(tools.router, prefix="/api/tools", tags=["tools"])

@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}
