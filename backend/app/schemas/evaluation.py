from pydantic import BaseModel


class EvaluationMetric(BaseModel):
    name: str
    score: float


class EvaluationResponse(BaseModel):
    metrics: list[EvaluationMetric]
