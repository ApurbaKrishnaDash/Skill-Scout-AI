import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "AI Skill Manager",
  description: "AI-powered skill management system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
