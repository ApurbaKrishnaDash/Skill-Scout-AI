export default function SummariesPage() {
  const summary = {
    week: "Week 1",
    completedTasks: 4,
    missedTasks: 2,
    totalStudyHours: 6,
    reflection:
      "You made good progress this week, but missed some sessions. Try shorter sessions on busy days.",
    suggestion:
      "Focus on consistency next week. Even 30-minute study sessions will help maintain momentum.",
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Weekly Summary</h1>
        <p className="text-gray-600 mb-6">
          Review your weekly learning performance and reflections.
        </p>

        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">{summary.week}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="border rounded-lg p-4">
              <p className="text-gray-500">Completed Tasks</p>
              <p className="text-2xl font-bold">{summary.completedTasks}</p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-gray-500">Missed Tasks</p>
              <p className="text-2xl font-bold">{summary.missedTasks}</p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-gray-500">Study Hours</p>
              <p className="text-2xl font-bold">{summary.totalStudyHours}</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Reflection</h3>
            <p className="text-gray-700">{summary.reflection}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">AI Suggestion</h3>
            <p className="text-gray-700">{summary.suggestion}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
