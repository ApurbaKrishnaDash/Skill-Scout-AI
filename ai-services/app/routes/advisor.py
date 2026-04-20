from fastapi import APIRouter
from app.models.schemas import AdvisorRequest
from app.agents.advisor_agent import generate_advice

router = APIRouter()


@router.post("/suggest")
def advisor_suggest(data: AdvisorRequest):
    result = generate_advice(
        goal=data.goal,
        current_level=data.current_level,
        problem=data.problem,
    )
    return result