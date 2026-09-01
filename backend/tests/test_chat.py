from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_chat_endpoint_returns_rich_payload() -> None:
    response = client.post(
        "/api/chat/",
        json={"message": "Explain the memory graph workflow"},
    )

    assert response.status_code == 200
    payload = response.json()
    assert payload["intent"] in {"memory", "graph", "tool", "general"}
    assert payload["memory_used"] is True
    assert payload["graph_used"] is True
    assert payload["reply"].startswith("Intent:")
