from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "memory-augmented-chatbot"
    api_v1_prefix: str = "/api"
    secret_key: str = "dev-secret-key"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 60 * 24
    cors_origins: list[str] = ["http://localhost:3000"]
    mongodb_uri: str = "mongodb://localhost:27017"
    mongodb_db: str = "memory_chatbot"
    neo4j_uri: str = "bolt://localhost:7687"
    neo4j_user: str = "neo4j"
    neo4j_password: str = "password"
    chroma_persist_directory: str = "./chroma_db"

    class Config:
        env_file = ".env"


settings = Settings()
