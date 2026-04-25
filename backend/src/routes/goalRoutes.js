const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createGoal,
  getGoals,
  getGoalAdvice,
  testAI,
} = require("../controllers/goalController");

router.post("/", protect, createGoal);
router.get("/", protect, getGoals);

router.post("/ai-advice", protect, getGoalAdvice);

// AI test route
router.get("/ai-test", testAI);

module.exports = router;
