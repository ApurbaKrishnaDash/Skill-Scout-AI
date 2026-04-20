"use client";

import { useState } from "react";

export default function AdminPage() {
  const [status, setStatus] = useState("No simulation run yet.");

  const handleInactivity = () => {
    setStatus(
      "Inactivity simulation completed. Pending tasks marked as missed.",
    );
  };

  const handleMissedSessions = () => {
    setStatus(
      "Missed session simulation completed. Rescheduling can be triggered later.",
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Admin Simulation</h1>
        <p className="text-gray-600 mb-6">
          Use this page to simulate inactivity and missed learning sessions for
          demo purposes.
        </p>

        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Simulation Controls</h2>

          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={handleInactivity}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Simulate Inactivity
            </button>

            <button
              onClick={handleMissedSessions}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
            >
              Simulate Missed Sessions
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Simulation Status</h2>
          <p className="text-gray-700">{status}</p>
        </div>
      </div>
    </main>
  );
}
