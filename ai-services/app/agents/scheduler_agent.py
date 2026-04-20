def generate_schedule(goal: str, study_hours_per_week: int):
    if study_hours_per_week <= 3:
        sessions = 2
    elif study_hours_per_week <= 6:
        sessions = 3
    else:
        sessions = 5

    weekly_plan = []

    for i in range(1, sessions + 1):
        weekly_plan.append(
            {
                "day": f"Session {i}",
                "task": f"Work on '{goal}'",
                "duration_hours": round(study_hours_per_week / sessions, 1),
            }
        )

    return {
        "goal": goal,
        "study_hours_per_week": study_hours_per_week,
        "sessions_per_week": sessions,
        "weekly_plan": weekly_plan,
        "message": "Weekly study schedule generated successfully.",
    }