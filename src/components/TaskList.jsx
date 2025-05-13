import { FaClock, FaEdit, FaStar, FaTrash } from "react-icons/fa";

export default function TaskList({ tasks, onEdit, onDelete, onFav }) {
  return (
    <div className="overflow-x-auto mt-6">
      <div className="w-full min-w-[800px]">
        <div className="mb-6 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-lg p-4 border border-white/5">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-1 text-left text-sm font-medium text-gray-300 uppercase tracking-wider flex items-center">
              <span className="ml-10">Title</span>
            </div>
            <div className="col-span-2 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
              Description
            </div>
            <div className="col-span-1 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
              Tags
            </div>
            <div className="col-span-1 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
              Priority
            </div>
            <div className="col-span-1 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
              Actions
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {tasks.map((task, index) => (
            <div
              key={task.id}
              className="bg-[#1D212B]/70 backdrop-blur-sm rounded-lg border border-white/5 hover:border-purple-500/30 transition-all duration-300 shadow-md hover:shadow-purple-500/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid grid-cols-6 gap-4 p-4">
                <div className="col-span-1 flex items-center space-x-3">
                  <button
                    onClick={() => onFav(task.id)}
                    className="transition-transform duration-300 hover:scale-125 focus:outline-none"
                  >
                    {task.isFavorite ? (
                      <FaStar className="text-yellow-400 h-5 w-5" />
                    ) : (
                      <FaStar className="text-gray-500 h-5 w-5" />
                    )}
                  </button>
                  <div>
                    <p className="font-medium text-white">{task.title}</p>
                    <p className="text-xs text-gray-400 flex items-center mt-1">
                      <FaClock className="mr-1" /> Created today
                    </p>
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="text-gray-300 line-clamp-2">
                    {task.description}
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="flex flex-wrap gap-2">
                    {task.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="col-span-1">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      task.priority.toLowerCase() === "high"
                        ? "bg-red-500/20 text-red-400 border border-red-500/30"
                        : task.priority.toLowerCase() === "medium"
                        ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        : "bg-green-500/20 text-green-400 border border-green-500/30"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>

                <div className="col-span-1">
                  <div className="flex items-center space-x-2">
                    <button
                      className="p-2 rounded-full bg-gray-700/70 hover:bg-red-600 text-gray-300 hover:text-white transition-colors duration-200 backdrop-blur-sm border border-white/5"
                      onClick={() => onDelete(task.id)}
                      title="Delete"
                    >
                      <FaTrash className="text-sm" />
                    </button>
                    <button
                      className="p-2 rounded-full bg-gray-700/70 hover:bg-blue-600 text-gray-300 hover:text-white transition-colors duration-200 backdrop-blur-sm border border-white/5"
                      onClick={() => onEdit(task)}
                      title="Edit"
                    >
                      <FaEdit className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
