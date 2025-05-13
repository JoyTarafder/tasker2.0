/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaFlag, FaPen, FaSave, FaTag, FaTimes } from "react-icons/fa";

export default function AddTaskModal({ onSave, editTask, onCloseClick }) {
  const [task, setTask] = useState(
    editTask || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );

  const [isAdding, setIsAdding] = useState(Object.is(editTask, null));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after modal opens
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "tags") {
      setTask({ ...task, tags: e.target.value.split(",") });
    } else {
      setTask({ ...task, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task, isAdding);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onCloseClick, 300); // Wait for animation to complete
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      >
        <div
          className={`max-w-[640px] mx-4 w-full transition-all duration-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            {/* Animated background gradient */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-70 animate-pulse-slow group-hover:opacity-100 transition duration-1000"></div>

            {/* Card container */}
            <div className="relative bg-gradient-to-b from-[#262B36]/95 to-[#1D212B]/95 backdrop-blur-xl p-1 rounded-xl shadow-2xl shadow-purple-500/10">
              <div className="bg-[#1D212B]/80 p-6 md:p-8 lg:p-10 rounded-lg">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                      {isAdding ? (
                        <FaPen className="text-white" />
                      ) : (
                        <FaFlag className="text-white" />
                      )}
                    </div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">
                      {isAdding ? "Add New Task" : "Edit Task"}
                    </h2>
                  </div>
                  <button
                    onClick={handleClose}
                    className="h-8 w-8 rounded-full bg-gray-700/50 hover:bg-gray-600 flex items-center justify-center transition-colors duration-200 border border-white/5"
                  >
                    <FaTimes className="text-gray-300" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="title"
                      className="text-sm font-medium text-gray-300 block"
                    >
                      Title
                    </label>
                    <input
                      className="input-field"
                      type="text"
                      name="title"
                      id="title"
                      value={task.title}
                      onChange={handleChange}
                      placeholder="Task title"
                      required
                      autoFocus
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="description"
                      className="text-sm font-medium text-gray-300 block"
                    >
                      Description
                    </label>
                    <textarea
                      className="input-field min-h-[120px] resize-none"
                      name="description"
                      id="description"
                      value={task.description}
                      onChange={handleChange}
                      placeholder="Task description..."
                      required
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="tags"
                        className="text-sm font-medium text-gray-300 block flex items-center space-x-2"
                      >
                        <FaTag className="text-purple-400" />
                        <span>Tags (comma separated)</span>
                      </label>
                      <input
                        className="input-field"
                        type="text"
                        name="tags"
                        id="tags"
                        value={task.tags}
                        onChange={handleChange}
                        placeholder="e.g. work, urgent, feature"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="priority"
                        className="text-sm font-medium text-gray-300 block flex items-center space-x-2"
                      >
                        <FaFlag className="text-purple-400" />
                        <span>Priority</span>
                      </label>
                      <select
                        className="input-field cursor-pointer appearance-none"
                        name="priority"
                        id="priority"
                        value={task.priority}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end space-x-4 mt-8">
                    <button
                      type="button"
                      className="btn-secondary flex items-center space-x-2 group"
                      onClick={handleClose}
                    >
                      <FaTimes className="text-sm group-hover:rotate-90 transition-transform duration-300" />
                      <span>Cancel</span>
                    </button>
                    <button
                      type="submit"
                      className="btn-primary flex items-center space-x-2 group relative overflow-hidden"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:opacity-0 transition-opacity duration-300"></span>
                      <span className="absolute inset-0 w-0 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                      <FaSave className="text-sm relative z-10" />
                      <span className="relative z-10">
                        {isAdding ? "Create Task" : "Update Task"}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
