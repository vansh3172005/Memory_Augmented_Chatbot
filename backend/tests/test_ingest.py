from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_ingest_endpoint_accepts_text() -> None:
    response = client.post(
        "/api/ingest/",
        json={"title": "AI notes", "content": "LangGraph orchestrates memory and retrieval."},
    )

    assert response.status_code == 200
    payload = response.json()
    assert payload["title"] == "AI notes"
    assert payload["chunk_count"] >= 1
