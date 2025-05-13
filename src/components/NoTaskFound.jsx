import React from "react";
import { FaClipboardList, FaPlus } from "react-icons/fa";

export default function NoTaskFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="h-32 w-32 relative bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-8 border border-white/10">
          <div className="h-24 w-24 bg-[#1D212B]/80 rounded-full flex items-center justify-center">
            <FaClipboardList className="text-5xl text-gray-500" />
          </div>
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
        No Tasks Found
      </h3>

      <p className="text-gray-400 text-center max-w-md mb-8">
        You don't have any tasks yet. Click the "Add Task" button to create your
        first task and start organizing your workflow.
      </p>

      <a
        href="#"
        className="btn-primary group flex items-center space-x-2 animate-bounce"
        style={{ animationDuration: "2s" }}
      >
        <FaPlus className="text-sm" />
        <span>Create Your First Task</span>
      </a>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
        {[
          {
            title: "Create Tasks",
            desc: "Add tasks with title, description and priority",
          },
          {
            title: "Organize Work",
            desc: "Tag and categorize your tasks for better workflow",
          },
          {
            title: "Track Progress",
            desc: "Mark favorites and monitor your productivity",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:border-purple-500/20 transition-all duration-300"
          >
            <h4 className="text-white font-medium mb-2">{item.title}</h4>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
