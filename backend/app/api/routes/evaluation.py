from fastapi import APIRouter
from pydantic import BaseModel

from app.services.evaluation_service import EvaluationService

router = APIRouter()
evaluation_service = EvaluationService()


class EvaluationMetric(BaseModel):
    name: str
    score: float


class EvaluationResponse(BaseModel):
    metrics: list[EvaluationMetric]


@router.get("/", response_model=EvaluationResponse)
def evaluation_summary() -> EvaluationResponse:
    metrics = evaluation_service.get_metrics()
    return EvaluationResponse(metrics=[EvaluationMetric(name=str(metric["name"]), score=float(metric["score"])) for metric in metrics])
