import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { taskAction } from "../store/Task";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";
import { TodoDate } from "./TodoDate";
import WeatherCard from "./Weather";
import { FaFlag, FaPlus, FaEdit, FaTrash } from "react-icons/fa";

export const Todo = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.task);
  const [taskInput, setTaskInput] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const savedTasks = getLocalStorageTodoData();
    if (savedTasks.length > 0) {
      dispatch(taskAction.loadTasks(savedTasks));
    }
  }, [dispatch]);

  useEffect(() => {
    setLocalStorageTodoData(tasks);
  }, [tasks]);

  const handleAddOrUpdateTask = () => {
    if (!taskInput.trim()) return;

    if (editId) {
      dispatch(taskAction.updateTask({ id: editId, content: taskInput, priority }));
      setEditId(null);
    } else {
      const newTask = { id: Date.now(), content: taskInput, priority, checked: false };
      dispatch(taskAction.addTask(newTask));
    }

    setTaskInput("");
    setPriority("Medium");
  };

  const handleDeleteTask = (taskId) => {
    dispatch(taskAction.deleteTask(taskId));
  };

  const handleEditTask = (task) => {
    setTaskInput(task.content);
    setPriority(task.priority);
    setEditId(task.id);
  };

  return (
    <div className="flex justify-center items-center min-h-screen   bg-gray-100">
      <div className="border border-gray-300 shadow-lg rounded-lg p-6 bg-white max-w-2xl w-full">
        <header className="text-center">
          <h1 className="text-2xl font-bold text-gray-700">Todo List</h1>
          <TodoDate />
        </header>

        <div className="relative mt-4">
          <FaFlag className="absolute top-3 left-3 text-red-500 text-lg" />
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Enter your task..."
            className="w-full h-16 text-lg px-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mt-3">
          <select
            className="w-full p-3 bg-gray-100 border rounded-lg cursor-pointer"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">🔥 High Priority</option>
            <option value="Medium">⚡ Medium Priority</option>
            <option value="Low">✅ Low Priority</option>
          </select>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            onClick={handleAddOrUpdateTask}
            className={`flex-1 p-3 text-white font-semibold rounded-lg transition-all ${
              taskInput.trim()
                ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!taskInput.trim()}
          >
            {editId ? <><FaEdit /> Update Task</> : <><FaPlus /> Add Task</>}
          </button>
        </div>

        {/* 🟢 Sorted Task List */}
        <section className="mt-6">
          <ul className="space-y-3">
            {[...tasks]
              .sort((a, b) => {
                const priorityOrder = { High: 1, Medium: 2, Low: 3 };
                return priorityOrder[a.priority] - priorityOrder[b.priority];
              })
              .map((task) => (
                <li key={task.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border">
                  <div className="flex-1">
                    <span className={`font-semibold text-lg ${task.priority === "High" ? "text-red-500" : "text-gray-700"}`}>
                      {task.content}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">({task.priority} Priority)</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditTask(task)}
                      className="p-2 text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="p-2 text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </section>

        {tasks.length > 0 && (
          <div className="flex justify-center mt-6">
            <button
              className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
              onClick={() => dispatch(taskAction.clearTasks())}
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      <div className="ml-6 w-full md:w-1/3 max-w-sm">
        <WeatherCard />
      </div>
    </div>
  );
};
