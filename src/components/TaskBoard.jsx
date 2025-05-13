import { useEffect, useState } from "react";
import { FaTasks } from "react-icons/fa";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Welcome to Tasker",
    description:
      "This is a sample task. Click edit to modify it or create a new task by clicking the 'Add Task' button.",
    tags: ["welcome", "example", "tasker"],
    priority: "medium",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  const handleAddEditTask = (newTask, isAdding) => {
    if (isAdding) {
      setTasks([...tasks, newTask]);
    } else {
      const updatedTasks = tasks.map((task) =>
        task.id === newTask.id ? newTask : task
      );
      setTasks(updatedTasks);
    }
    setAddTaskModalOpen(false);
  };

  const handleEditTask = (task) => {
    setEditTask(task);
    setAddTaskModalOpen(true);
  };

  const handleCloseClick = () => {
    setAddTaskModalOpen(false);
    setEditTask(null);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleDeleteAll = () => {
    setTasks([]);
  };

  const handleFav = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isFavorite: !task.isFavorite } : task
    );
    setTasks(updatedTasks);
  };

  const handleSearch = (searchTerm) => {
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTasks(filteredTasks);
  };

  return (
    <section className="mb-20 mt-10 relative" id="tasks">
      {/* Background decorative elements */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-indigo-600/10 rounded-full filter blur-3xl"></div>

      {addTaskModalOpen && (
        <AddTaskModal
          onSave={handleAddEditTask}
          editTask={editTask}
          onCloseClick={handleCloseClick}
        />
      )}

      <div
        className={`container px-4 relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <FaTasks className="text-purple-500" />
            <h2 className="section-title pb-2">Task Dashboard</h2>
          </div>
          <p className="text-gray-400 text-center max-w-2xl mb-8">
            Manage your tasks efficiently. Add, edit, and organize your workflow
            in one place.
          </p>

          <div className="w-full max-w-5xl">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div className="animated-gradient h-12 w-full md:w-1/3 rounded-lg hidden md:block mb-4 md:mb-0"></div>
              <SearchTask onSearch={handleSearch} />
            </div>
          </div>
        </div>

        <div className="task-card px-6 py-8 md:px-9 md:py-12 max-w-5xl mx-auto animate-fade-in">
          <TaskAction
            onAddTask={() => setAddTaskModalOpen(true)}
            onDeleteAll={handleDeleteAll}
          />

          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onFav={handleFav}
            />
          ) : (
            <NoTaskFound />
          )}
        </div>
      </div>
    </section>
  );
}
