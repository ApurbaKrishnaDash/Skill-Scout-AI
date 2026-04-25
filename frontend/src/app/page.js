import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-6">
          Build better skills with AI guidance
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Plan your goals, generate study schedules, and get AI-based advice to
          stay consistent in your learning journey.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Get Started
          </Link>

          <Link
            href="/login"
            className="border px-6 py-3 rounded-lg font-semibold bg-white"
          >
            Login
          </Link>
        </div>
      </section>
    </main>
  );
}
