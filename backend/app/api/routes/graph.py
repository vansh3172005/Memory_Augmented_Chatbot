from fastapi import APIRouter
from pydantic import BaseModel

from app.services.graph_service import GraphService

router = APIRouter()
graph_service = GraphService()


class GraphNode(BaseModel):
    id: str
    label: str
    properties: dict[str, str] | None = None


class GraphEdge(BaseModel):
    source: str
    target: str
    label: str


class GraphResponse(BaseModel):
    nodes: list[GraphNode]
    edges: list[GraphEdge]


@router.get("/", response_model=GraphResponse)
def graph_summary() -> GraphResponse:
    summary = graph_service.get_graph_summary()
    return GraphResponse(
        nodes=[GraphNode(id=node["id"], label=node["label"]) for node in summary["nodes"]],
        edges=[GraphEdge(source=edge["source"], target=edge["target"], label=edge["label"]) for edge in summary["edges"]],
    )
