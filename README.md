# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
 List file code
 /* eslint-disable react/prop-types */
import { MdCheck, MdDeleteForever } from "react-icons/md";

 const TodoList = ({
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
export default TodoList;


import { useState } from "react";
import { useDispatch } from "react-redux";
import { taskAction } from "../store/Task";

export const TodoForm = () => {
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState("Medium"); // Default priority
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setContent(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (content.trim()) {
      const newTask = {
        id: Date.now(),
        content,
        priority, // Include priority in the task
        checked: false,
      };
      dispatch(taskAction.addTask(newTask)); // Dispatch addTask action
      setContent("");
      setPriority("Medium"); // Reset priority to default
    }
  };

  return (
    <section className="bg-white p-6 shadow-lg rounded-lg border border-gray-300">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        {/* Task Input */}
        <div className="relative">
          <input
            type="text"
            className="w-full p-4 text-lg border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            autoComplete="off"
            value={content}
            onChange={handleInputChange}
            placeholder="Add a new task..."
          />
        </div>

        {/* Priority Dropdown */}
        <div>
          <select
            className="w-full p-3 bg-gray-100 border rounded-lg cursor-pointer focus:ring-2 focus:ring-blue-400"
            value={priority}
            onChange={handlePriorityChange}
          >
            <option value="High">🔥 High Priority</option>
            <option value="Medium">⚡ Medium Priority</option>
            <option value="Low">✅ Low Priority</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={!content.trim()}
            className={`w-full p-3 text-white font-semibold rounded-lg transition-all duration-200 ${
              content.trim()
                ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
