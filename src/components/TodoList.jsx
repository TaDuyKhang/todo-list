import { useState, useCallback } from "react";
import ListTask from "./ListTask.jsx";
import SearchBar from "./SearchBar.jsx";
import BulkAction from "./BulkAction.jsx";
import "../css/TodoList.scss";
export default function TodoList() {
  const [listData, setListData] = useState();

  const filterData = (e) => {
    setListData(e);
  };

  return (
    <div className="todo-list">
      <p className="title"> To Do List </p>
      <SearchBar filterData={filterData} />
      <ListTask data={listData} />
      <BulkAction />
    </div>
  );
}
