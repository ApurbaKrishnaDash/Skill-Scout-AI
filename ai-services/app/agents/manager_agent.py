def analyze_goal(goal: str, current_level: str, study_hours_per_week: int):
    return {
        "goal": goal,
        "current_level": current_level,
        "study_hours_per_week": study_hours_per_week,
        "priority": "high",
        "recommended_focus": [
            "Build consistency",
            "Break goal into smaller milestones",
            "Track weekly progress",
        ],
        "message": f"For the goal '{goal}', focus on consistent weekly progress and milestone-based learning."
    }