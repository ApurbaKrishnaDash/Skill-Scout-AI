from fastapi import APIRouter
from app.models.schemas import SchedulerRequest
from app.agents.scheduler_agent import generate_schedule

router = APIRouter()


@router.post("/generate")
def scheduler_generate(data: SchedulerRequest):
    result = generate_schedule(
        goal=data.goal,
        study_hours_per_week=data.study_hours_per_week,
    )
    return result