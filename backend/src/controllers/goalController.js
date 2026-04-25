const Goal = require("../models/Goal");
const aiService = require("../services/aiBridgeService");

// create goal
const createGoal = async (req, res) => {
  try {
    const { title, description, currentLevel, targetDate } = req.body;

    const goal = await Goal.create({
      userId: req.user.id,
      title,
      description,
      currentLevel,
      targetDate,
    });

    res.status(201).json({
      message: "Goal created successfully",
      goal,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get goals
const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.user.id }).sort({
      createdAt: -1,
    });

    res.json({
      count: goals.length,
      goals,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// AI advice for goal
const getGoalAdvice = async (req, res) => {
  try {
    const { goal, currentLevel, current_level, problem } = req.body;

    const result = await aiService.getAdvice({
      goal,
      current_level: currentLevel || current_level,
      problem,
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({
      error: err.response?.data || err.message,
    });
  }
};

// AI test
const testAI = async (req, res) => {
  try {
    const result = await aiService.analyzeGoal({
      goal: "Become a Frontend Developer",
      current_level: "beginner",
      study_hours_per_week: 6,
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createGoal,
  getGoals,
  getGoalAdvice,
  testAI,
};
