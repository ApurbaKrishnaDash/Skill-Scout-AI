import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          AI Skill Manager
        </Link>

        <div className="flex gap-4 text-sm md:text-base">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/register" className="hover:text-blue-600">
            Register
          </Link>
          <Link href="/login" className="hover:text-blue-600">
            Login
          </Link>
          <Link href="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>
          <Link href="/goals" className="hover:text-blue-600">
            Goals
          </Link>
          <Link href="/summaries" className="hover:text-blue-600">
            Summaries
          </Link>
          <Link href="/admin" className="hover:text-blue-600">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}
