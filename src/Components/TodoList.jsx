
import { MdCheck, MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux"; // Import Redux hooks
import { taskAction } from "../store/Task"; // Import actions from the Redux store

export const TodoList = () => {
  const tasks = useSelector((store)=>store.task || []); // Get tasks from Redux store
 console.log("Received Input From Store", tasks);
  const dispatch = useDispatch(); // Get dispatch function

  const handleToggleTask = (id) => {
    dispatch(taskAction.toggleTask(id)); // Dispatch toggleTask action
  };

  const handleDeleteTask = (id) => {
    dispatch(taskAction.deleteTask(id)); // Dispatch deleteTask action
  };
 
  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <ul>
      {sortedTasks.map((task) => (
        <li key={task.id} className="todo-item">
          <span className={task.checked ? "checkList" : "notCheckList"}>
            {task.content} - <strong>{task.priority}</strong>
          </span>
          <button
            className="check-btn"
            onClick={() => handleToggleTask(task.id)}
          >
            <MdCheck />
          </button>
          <button
            className="delete-btn"
            onClick={() => handleDeleteTask(task.id)}
          >
            <MdDeleteForever />
          </button>
        </li>
      ))}
    </ul>
  );
};

 
