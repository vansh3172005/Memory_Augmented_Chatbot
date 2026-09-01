from pydantic import BaseModel


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
