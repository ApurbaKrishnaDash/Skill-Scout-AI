from fastapi import FastAPI
from app.routes import manager, scheduler, advisor

app = FastAPI()


@app.get("/")
def root():
    return {"message": "AI Service is running 🚀"}


app.include_router(manager.router, prefix="/manager", tags=["Manager Agent"])
app.include_router(scheduler.router, prefix="/scheduler", tags=["Scheduler Agent"])
app.include_router(advisor.router, prefix="/advisor", tags=["Advisor Agent"])