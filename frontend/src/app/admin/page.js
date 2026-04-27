"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchGoals = async () => {
      if (!token) return;

      try {
        const res = await fetch(
          "https://skill-scout-ai.onrender.com/api/goals",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await res.json();

        if (res.ok) {
          setGoals(data.goals || []);
        }
      } catch (error) {
        console.error("Admin fetch error:", error);
      }
    };

    fetchGoals();
  }, []);

  const beginner = goals.filter((g) => g.currentLevel === "beginner").length;
  const intermediate = goals.filter(
    (g) => g.currentLevel === "intermediate",
  ).length;
  const advanced = goals.filter((g) => g.currentLevel === "advanced").length;

  const latestGoal = goals[0];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Admin Panel</h1>
        <p className="text-gray-600 mb-8">
          System overview and analytics of learning data.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-5">
            <p className="text-gray-500">Total Goals</p>
            <p className="text-3xl font-bold">{goals.length}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5">
            <p className="text-gray-500">Beginner</p>
            <p className="text-3xl font-bold">{beginner}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5">
            <p className="text-gray-500">Intermediate</p>
            <p className="text-3xl font-bold">{intermediate}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5">
            <p className="text-gray-500">Advanced</p>
            <p className="text-3xl font-bold">{advanced}</p>
          </div>
        </div>

        {/* Latest Goal */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Latest Goal</h2>

          {latestGoal ? (
            <div>
              <h3 className="text-xl font-bold">{latestGoal.title}</h3>
              <p className="text-gray-600 mt-2">{latestGoal.description}</p>
              <p className="mt-3 capitalize">
                <span className="font-medium">Level:</span>{" "}
                {latestGoal.currentLevel}
              </p>
            </div>
          ) : (
            <p className="text-gray-600">No data available</p>
          )}
        </div>

        {/* System Info */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">System Info</h2>
          <p className="text-gray-700">
            This panel shows aggregated goal data from users. It can be extended
            to include user analytics, activity logs, and AI insights.
          </p>
        </div>
      </div>
    </main>
  );
}
