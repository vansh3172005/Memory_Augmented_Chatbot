## Run locally

1. Start the backend:
   - cd backend
   - python -m uvicorn app.main:app --reload --port 8000
2. Start the frontend:
   - cd frontend
   - npm install
   - npm run dev
3. **Open http://localhost:3000**

## Repository Structure

- backend/: FastAPI application
- frontend/: Next.js application
- docker/: container files and Compose configuration
- docs/: architecture and usage documentation

## Architecture Summary

### Backend
- FastAPI application with modular routers
- JWT authentication and role-aware access
- RAG pipeline using ChromaDB and document retrieval
- Knowledge graph services using Neo4j abstraction with fallback
- Long-term memory persistence through MongoDB abstraction with fallback
- LangGraph-inspired state machine for assistant orchestration
- Dynamic tool registry and evaluation framework

### Frontend
- Next.js 14 + TypeScript + Tailwind CSS
- Responsive chatbot UI
- Authentication screens
- Knowledge graph visualization card
- Memory dashboard
- Evaluation dashboard

# Memory-Augmented Chatbot

A production-ready internship major project implementing a memory-augmented conversational assistant with:

- FastAPI backend
- Next.js frontend
- LangChain and LangGraph orchestration
- MongoDB-backed memory
- Neo4j-backed knowledge graph
- ChromaDB-backed retrieval
- JWT authentication
- evaluation dashboard and dynamic tool calling




