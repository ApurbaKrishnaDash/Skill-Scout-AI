from pydantic import BaseModel


class ManagerRequest(BaseModel):
    goal: str
    current_level: str
    study_hours_per_week: int

class SchedulerRequest(BaseModel):
    goal: str
    study_hours_per_week: int       

class AdvisorRequest(BaseModel):
    goal: str
    current_level: str
    problem: str    