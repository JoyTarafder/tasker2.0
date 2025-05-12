import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import NoTaskFound from "./NoTaskFound";
export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Task 1",
    description: "Description 1",
    tags: ["tag1", "tag2", "tag3"],
    priority: "high",
    isFavorite: false,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);

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
    <section className="mb-20" id="tasks">
      {addTaskModalOpen && (
        <AddTaskModal
          onSave={handleAddEditTask}
          editTask={editTask}
          onCloseClick={handleCloseClick}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask onSearch={handleSearch} />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            onAddTask={() => setAddTaskModalOpen(true)}
            onDeleteAll={handleDeleteAll}
          />

          {tasks.length > 0 ? (<TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onFav={handleFav}
          />) : (<NoTaskFound />)}
        </div>
      </div>
    </section>
  );
}
