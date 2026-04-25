const axios = require("axios");

const AI_BASE_URL = "http://127.0.0.1:8000";

// Manager Agent
exports.analyzeGoal = async (data) => {
  const res = await axios.post(`${AI_BASE_URL}/manager/analyze`, data);
  return res.data;
};

// Scheduler Agent
exports.generateSchedule = async (data) => {
  const res = await axios.post(`${AI_BASE_URL}/scheduler/generate`, data);
  return res.data;
};

// Advisor Agent
exports.getAdvice = async (data) => {
  const res = await axios.post(`${AI_BASE_URL}/advisor/suggest`, data);
  return res.data;
};
