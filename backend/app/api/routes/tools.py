from fastapi import APIRouter
from pydantic import BaseModel

from app.services.tool_service import ToolService

router = APIRouter()
tool_service = ToolService()


class ToolDefinition(BaseModel):
    name: str
    description: str


@router.get("/", response_model=list[ToolDefinition])
def list_tools() -> list[ToolDefinition]:
    tools = tool_service.list_tools()
    return [ToolDefinition(name=tool["name"], description=tool["description"]) for tool in tools]
