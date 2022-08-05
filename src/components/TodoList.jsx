import { useState } from "react";
import { useSelector } from "react-redux";
import ListTask from "./ListTask.jsx";
import "../css/TodoList.scss";
import SearchBar from "./SearchBar.jsx";

export default function TodoList() {
  const data = useSelector((state) => state.todoList.taskList);
  const [listData, setListData] = useState(data);
  const filterData = (e) => {
    console.log(e);
    setListData(e);
  };

  return (
    <div className="todo-list">
      <p className="title"> To Do List </p>
      <SearchBar filterData={filterData} />
      <ListTask data={listData} />
    </div>
  );
}
