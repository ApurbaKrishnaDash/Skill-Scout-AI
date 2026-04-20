from fastapi import APIRouter
from app.models.schemas import ManagerRequest
from app.agents.manager_agent import analyze_goal

router = APIRouter()


@router.post("/analyze")
def manager_analyze(data: ManagerRequest):
    result = analyze_goal(
        goal=data.goal,
        current_level=data.current_level,
        study_hours_per_week=data.study_hours_per_week,
    )
    return result