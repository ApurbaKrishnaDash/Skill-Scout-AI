import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4">AI Skill Manager</h1>

        <p className="text-gray-600 mb-6">
          Plan, track, and improve your learning with AI-powered guidance.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/register">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
              Get Started
            </button>
          </Link>

          <Link href="/login">
            <button className="border px-5 py-2 rounded-lg">Login</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
