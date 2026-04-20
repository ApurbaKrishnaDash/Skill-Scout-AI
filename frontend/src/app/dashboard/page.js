export default function DashboardPage() {
  const userName = "Apurba";
  const totalGoals = 1;
  const completedTasks = 2;
  const missedTasks = 1;

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-6">Welcome back, {userName}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h2 className="text-lg font-semibold text-gray-700">Total Goals</h2>
            <p className="text-3xl font-bold mt-2">{totalGoals}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5">
            <h2 className="text-lg font-semibold text-gray-700">
              Completed Tasks
            </h2>
            <p className="text-3xl font-bold mt-2">{completedTasks}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5">
            <h2 className="text-lg font-semibold text-gray-700">
              Missed Tasks
            </h2>
            <p className="text-3xl font-bold mt-2">{missedTasks}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Current Goal</h2>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-bold">Become a Frontend Developer</h3>
            <p className="text-gray-600 mt-2">
              I want to master React, Next.js, and modern frontend development.
            </p>
            <p className="mt-3">
              <span className="font-medium">Current Level:</span> Beginner
            </p>
            <p className="mt-1">
              <span className="font-medium">Target Date:</span> 2026-12-31
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
