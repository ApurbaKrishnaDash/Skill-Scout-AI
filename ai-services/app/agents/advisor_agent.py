def generate_advice(goal: str, current_level: str, problem: str):
    advice_list = []

    if "missed" in problem.lower():
        advice_list.append("Reduce task size and resume with a shorter session.")
        advice_list.append("Schedule a catch-up session within the next two days.")

    if "stuck" in problem.lower():
        advice_list.append("Review beginner-friendly resources before continuing.")
        advice_list.append("Switch to a smaller practice task to rebuild confidence.")

    if not advice_list:
        advice_list.append("Maintain consistency and review progress weekly.")
        advice_list.append("Focus on one small milestone at a time.")

    return {
        "goal": goal,
        "current_level": current_level,
        "problem": problem,
        "advice": advice_list,
        "message": f"Advice generated for goal '{goal}'."
    }