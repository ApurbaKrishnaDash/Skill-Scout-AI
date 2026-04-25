"use client";

import { useEffect, useState } from "react";

export default function SummariesPage() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchGoals = async () => {
      if (!token) return;

      try {
        const res = await fetch("http://localhost:5000/api/goals", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setGoals(data.goals || []);
        }
      } catch (error) {
        console.error("Summary goals error:", error);
      }
    };

    fetchGoals();
  }, []);

  const beginnerGoals = goals.filter(
    (goal) => goal.currentLevel === "beginner",
  ).length;
  const intermediateGoals = goals.filter(
    (goal) => goal.currentLevel === "intermediate",
  ).length;
  const advancedGoals = goals.filter(
    (goal) => goal.currentLevel === "advanced",
  ).length;

  const latestGoal = goals[0];

  const reflection =
    goals.length === 0
      ? "No goals have been created yet. Start by adding one learning goal."
      : `You currently have ${goals.length} active learning goal(s). Your latest focus is "${latestGoal?.title}".`;

  const suggestion =
    goals.length === 0
      ? "Create a clear first goal with a target date to begin structured learning."
      : "Stay consistent by breaking goals into smaller weekly tasks and reviewing your progress regularly.";

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Weekly Summary</h1>
        <p className="text-gray-600 mb-8">
          Review your learning goals and AI-style progress reflection.
        </p>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-5">Learning Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="border rounded-xl p-4">
              <p className="text-gray-500">Total Goals</p>
              <p className="text-3xl font-bold">{goals.length}</p>
            </div>

            <div className="border rounded-xl p-4">
              <p className="text-gray-500">Beginner</p>
              <p className="text-3xl font-bold">{beginnerGoals}</p>
            </div>

            <div className="border rounded-xl p-4">
              <p className="text-gray-500">Intermediate</p>
              <p className="text-3xl font-bold">{intermediateGoals}</p>
            </div>

            <div className="border rounded-xl p-4">
              <p className="text-gray-500">Advanced</p>
              <p className="text-3xl font-bold">{advancedGoals}</p>
            </div>
          </div>

          <div className="mb-5">
            <h3 className="text-lg font-semibold mb-2">Reflection</h3>
            <p className="text-gray-700">{reflection}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">AI Suggestion</h3>
            <p className="text-gray-700">{suggestion}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Goal Summary</h2>

          {goals.length === 0 ? (
            <p className="text-gray-600">No saved goals found.</p>
          ) : (
            <div className="space-y-4">
              {goals.map((goal) => (
                <div key={goal._id} className="border rounded-xl p-4">
                  <h3 className="text-lg font-bold">{goal.title}</h3>
                  <p className="text-gray-600 mt-1">{goal.description}</p>
                  <p className="text-sm text-gray-500 mt-2 capitalize">
                    Level: {goal.currentLevel}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
