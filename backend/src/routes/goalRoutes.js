const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createGoal,
  getGoals,
  testAI,
} = require("../controllers/goalController");

router.post("/", protect, createGoal);
router.get("/", protect, getGoals);

// AI test route
router.get("/ai-test", testAI);

module.exports = router;
