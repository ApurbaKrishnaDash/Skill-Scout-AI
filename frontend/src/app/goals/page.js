"use client";

import { useState } from "react";

export default function GoalsPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    currentLevel: "beginner",
    targetDate: "",
  });

  const [problem, setProblem] = useState("");
  const [advice, setAdvice] = useState(null);
  const [loadingGoal, setLoadingGoal] = useState(false);
  const [loadingAdvice, setLoadingAdvice] = useState(false);

  const getToken = () => localStorage.getItem("token");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveGoal = async (e) => {
    e.preventDefault();

    const token = getToken();

    if (!token) {
      alert("Please login first");
      window.location.href = "/login";
      return;
    }

    try {
      setLoadingGoal(true);

      const res = await fetch("http://localhost:5000/api/goals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to save goal");
        return;
      }

      alert("Goal saved successfully ✅");

      setForm({
        title: "",
        description: "",
        currentLevel: "beginner",
        targetDate: "",
      });
    } catch (error) {
      console.error("Save goal error:", error);
      alert("Error saving goal");
    } finally {
      setLoadingGoal(false);
    }
  };

  const getAIAdvice = async () => {
    const token = getToken();

    if (!token) {
      alert("Please login first");
      window.location.href = "/login";
      return;
    }

    if (!form.title || !problem) {
      alert("Please enter a goal title and a problem first");
      return;
    }

    try {
      setLoadingAdvice(true);
      setAdvice(null);

      const res = await fetch(
        "https://skill-scout-ai.onrender.com/api/goals/ai-advice",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            goal: form.title,
            currentLevel: form.currentLevel,
            problem,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || data.message || "Failed to get AI advice");
        return;
      }

      setAdvice(data);
    } catch (error) {
      console.error("AI advice error:", error);
      alert("Error getting AI advice");
    } finally {
      setLoadingAdvice(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Goal Planner</h1>
          <p className="text-gray-600">
            Create a learning goal and get AI-powered advice when you feel
            stuck.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Create Goal</h2>

            <form onSubmit={saveGoal} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Goal Title"
                value={form.title}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg"
                required
              />

              <textarea
                name="description"
                placeholder="Goal Description"
                value={form.description}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg"
                rows="4"
                required
              />

              <select
                name="currentLevel"
                value={form.currentLevel}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg"
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
                className="w-full border px-4 py-3 rounded-lg"
              />

              <button
                type="submit"
                disabled={loadingGoal}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400"
              >
                {loadingGoal ? "Saving..." : "Save Goal"}
              </button>
            </form>
          </section>

          <section className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">AI Advisor</h2>

            <textarea
              placeholder="Describe your problem, e.g. I missed two study sessions and feel stuck"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              className="w-full border px-4 py-3 rounded-lg mb-4"
              rows="5"
            />

            <button
              onClick={getAIAdvice}
              disabled={loadingAdvice}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-400"
            >
              {loadingAdvice ? "Generating Advice..." : "Get AI Advice"}
            </button>

            {advice && (
              <div className="mt-6 border rounded-xl p-5 bg-purple-50">
                <h3 className="text-xl font-bold mb-3">AI Advice</h3>

                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">Goal:</span> {advice.goal}
                </p>

                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {advice.advice?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <p className="text-sm text-gray-600 mt-4">{advice.message}</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
