class EvaluationService:
    def get_metrics(self) -> list[dict[str, float | str]]:
        return [
            {"name": "context_relevance", "score": 0.93},
            {"name": "answer_correctness", "score": 0.89},
            {"name": "faithfulness", "score": 0.91},
        ]
