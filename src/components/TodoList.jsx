import { useSelector } from "react-redux";
import ListTask from "./ListTask.jsx";
import "../css/TodoList.scss";

export default function TodoList() {
  const data = useSelector((state) => state.todoList.taskList);
  return (
    <div className="todo-list">
      <p className="title"> To Do List </p>
      <ListTask data={data} />
    </div>
  );
}
