from dataclasses import dataclass


@dataclass
class OrchestrationState:
    intent: str
    memory_used: bool
    graph_used: bool


class OrchestratorService:
    def build_state(self, message: str) -> OrchestrationState:
        lowered = message.lower()
        intent = "general"
        if "memory" in lowered:
            intent = "memory"
        elif "graph" in lowered:
            intent = "graph"
        elif "tool" in lowered:
            intent = "tool"

        return OrchestrationState(
            intent=intent,
            memory_used=True,
            graph_used="graph" in lowered or "memory" in lowered,
        )
