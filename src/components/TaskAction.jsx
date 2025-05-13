import { useState } from "react";
import { FaFilter, FaPlus, FaSort, FaTrashAlt } from "react-icons/fa";

export default function TaskAction({ onAddTask, onDeleteAll }) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex items-center space-x-3 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-200 relative">
            <span className="relative z-10">Your Tasks</span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-600/70 to-indigo-600/70 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </h2>
          <span className="bg-purple-600/20 text-purple-300 text-xs font-medium py-1 px-2 rounded-full border border-purple-500/20">
            {/* This could be dynamic */}1 active
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <button
              className="btn-secondary flex items-center space-x-2 !px-4"
              onClick={() => setShowOptions(!showOptions)}
            >
              <FaFilter className="text-sm" />
              <span>Options</span>
              <span
                className={`transition-transform duration-300 ml-1 ${
                  showOptions ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {showOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-[#1D212B]/90 backdrop-blur-md rounded-lg shadow-lg border border-white/10 py-2 z-10 animate-fade-in">
                <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-purple-600/20 transition-colors flex items-center space-x-2">
                  <FaSort className="text-sm" />
                  <span>Sort by date</span>
                </button>
                <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-purple-600/20 transition-colors flex items-center space-x-2">
                  <FaFilter className="text-sm" />
                  <span>Filter by tag</span>
                </button>
                <div className="border-t border-gray-700 my-1"></div>
                <button
                  className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-600/20 transition-colors flex items-center space-x-2"
                  onClick={() => {
                    onDeleteAll();
                    setShowOptions(false);
                  }}
                >
                  <FaTrashAlt className="text-sm" />
                  <span>Delete all</span>
                </button>
              </div>
            )}
          </div>

          <button
            className="btn-primary flex items-center space-x-2 relative overflow-hidden group"
            onClick={onAddTask}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:opacity-0 transition-opacity duration-300"></span>
            <span className="absolute inset-0 w-0 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center relative z-10 group-hover:bg-white/30 transition-colors">
              <FaPlus className="text-xs" />
            </div>
            <span className="relative z-10">Add Task</span>
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {["All", "Favorites", "Completed", "Pending"].map((filter, index) => (
          <button
            key={index}
            className={`px-4 py-1.5 rounded-full text-sm ${
              index === 0
                ? "bg-gradient-to-r from-purple-600/70 to-indigo-600/70 text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            } transition-all duration-300 border border-white/5`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
