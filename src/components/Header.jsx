import { useState } from "react";
import { FaMoon, FaSun, FaTasks } from "react-icons/fa";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // For demonstration only - would need to be connected to a theme context in real implementation
  };

  return (
    <nav className="py-4 fixed top-0 w-full bg-[#0F1219]/40 backdrop-blur-xl z-50 border-b border-white/5 shadow-lg">
      <div className="container mx-auto flex items-center justify-between gap-x-6 px-4">
        <a href="/" className="flex items-center space-x-3 group">
          <div className="h-10 w-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300 overflow-hidden">
            <FaTasks className="text-white text-xl relative animate-pulse-slow" />
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">
              Tasker
            </span>
            <span className="text-[10px] text-gray-400 -mt-1">
              Task Manager
            </span>
          </div>
        </a>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="h-9 w-9 bg-[#1D212B]/70 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 border border-gray-700/30"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? (
              <FaSun className="text-yellow-300" />
            ) : (
              <FaMoon className="text-gray-300" />
            )}
          </button>
          <a
            href="#tasks"
            className="hidden md:flex btn-primary items-center space-x-2 group"
          >
            <span>My Tasks</span>
            <span className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center text-xs group-hover:bg-white/30 transition-colors">
              {/* Task count could go here */}+
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
