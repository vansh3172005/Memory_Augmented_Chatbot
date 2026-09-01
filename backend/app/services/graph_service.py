class GraphService:
    def get_graph_summary(self) -> dict[str, object]:
        return {
            "nodes": [
                {"id": "user", "label": "User"},
                {"id": "assistant", "label": "Assistant"},
                {"id": "memory", "label": "Memory"},
            ],
            "edges": [
                {"source": "user", "target": "assistant", "label": "chats"},
                {"source": "assistant", "target": "memory", "label": "stores_context"},
            ],
        }
