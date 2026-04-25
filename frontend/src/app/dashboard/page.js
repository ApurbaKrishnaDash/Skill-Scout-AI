"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [goals, setGoals] = useState([]);
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (savedUser) {
      setUserName(JSON.parse(savedUser).name || "User");
    }

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
        console.error("Dashboard goals error:", error);
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

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-8">Welcome back, {userName}</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-5">
            <h2 className="text-sm font-semibold text-gray-500">Total Goals</h2>
            <p className="text-4xl font-bold mt-2">{goals.length}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5">
            <h2 className="text-sm font-semibold text-gray-500">Beginner</h2>
            <p className="text-4xl font-bold mt-2">{beginnerGoals}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5">
            <h2 className="text-sm font-semibold text-gray-500">
              Intermediate
            </h2>
            <p className="text-4xl font-bold mt-2">{intermediateGoals}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5">
            <h2 className="text-sm font-semibold text-gray-500">Advanced</h2>
            <p className="text-4xl font-bold mt-2">{advancedGoals}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Recent Goals</h2>

            {goals.length === 0 ? (
              <p className="text-gray-600">
                No goals found. Create a goal from the Goals page.
              </p>
            ) : (
              <div className="space-y-4">
                {goals.slice(0, 3).map((goal) => (
                  <div key={goal._id} className="border rounded-xl p-4">
                    <div className="flex justify-between gap-3">
                      <h3 className="text-lg font-bold">{goal.title}</h3>
                      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full capitalize">
                        {goal.currentLevel}
                      </span>
                    </div>

                    <p className="text-gray-600 mt-2">{goal.description}</p>

                    <p className="text-sm text-gray-500 mt-3">
                      Target:{" "}
                      {goal.targetDate
                        ? new Date(goal.targetDate).toLocaleDateString()
                        : "Not set"}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Current Focus</h2>

            {latestGoal ? (
              <div>
                <h3 className="text-xl font-bold">{latestGoal.title}</h3>
                <p className="text-gray-600 mt-2">{latestGoal.description}</p>
                <p className="mt-4">
                  <span className="font-medium">Level:</span>{" "}
                  <span className="capitalize">{latestGoal.currentLevel}</span>
                </p>
              </div>
            ) : (
              <p className="text-gray-600">No active focus yet.</p>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
