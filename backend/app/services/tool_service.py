class ToolService:
    def list_tools(self) -> list[dict[str, str]]:
        return [{"name": "search_docs", "description": "Retrieve relevant document snippets"}]
