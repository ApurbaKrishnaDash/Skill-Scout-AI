"use client";

import { useState } from "react";

export default function GoalsPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    currentLevel: "beginner",
    targetDate: "",
  });

  const goals = [
    {
      id: 1,
      title: "Become a Frontend Developer",
      description: "Learn React, Next.js, Tailwind CSS, and build projects.",
      currentLevel: "Beginner",
      targetDate: "2026-12-31",
    },
    {
      id: 2,
      title: "Improve JavaScript Problem Solving",
      description:
        "Practice arrays, objects, loops, and problem solving regularly.",
      currentLevel: "Intermediate",
      targetDate: "2026-10-15",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Goal Form Data:", form);
    alert("Goal form UI done");
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">My Goals</h1>
        <p className="text-gray-600 mb-6">
          Manage your long-term learning goals here.
        </p>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Add New Goal</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Goal Title"
              value={form.title}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />

            <textarea
              name="description"
              placeholder="Goal Description"
              value={form.description}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              rows="4"
              required
            />

            <select
              name="currentLevel"
              value={form.currentLevel}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>

            <input
              type="date"
              name="targetDate"
              value={form.targetDate}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save Goal
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goals.map((goal) => (
            <div key={goal.id} className="bg-white rounded-xl shadow-md p-5">
              <h2 className="text-xl font-bold mb-2">{goal.title}</h2>
              <p className="text-gray-600 mb-3">{goal.description}</p>
              <p>
                <span className="font-medium">Current Level:</span>{" "}
                {goal.currentLevel}
              </p>
              <p>
                <span className="font-medium">Target Date:</span>{" "}
                {goal.targetDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
