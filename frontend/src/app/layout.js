import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "AI Skill Manager",
  description: "AI Powered Personal Skill-Building Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
