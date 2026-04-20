const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes");
const goalRoutes = require("./routes/goalRoutes");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "AI Skill Manager Backend is running",
  });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  app.use("/api/auth", authRoutes);
  app.use("/api/test", testRoutes);
  app.use("/api/goals", goalRoutes);
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
