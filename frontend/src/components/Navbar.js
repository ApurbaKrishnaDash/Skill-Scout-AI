"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged out successfully");

    window.location.href = "/login";
  };

  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          AI Skill Manager
        </Link>

        <div className="flex gap-6 text-sm font-medium items-center">
          <Link href="/">Home</Link>

          {isLoggedIn && (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/goals">Goals</Link>
              <Link href="/summaries">Summaries</Link>
              <Link href="/admin">Admin</Link>
            </>
          )}

          {!isLoggedIn ? (
            <>
              <Link href="/login" className="text-blue-600">
                Login
              </Link>
              <Link href="/register">Register</Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded-md"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
