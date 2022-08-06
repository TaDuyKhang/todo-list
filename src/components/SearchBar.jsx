import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import "../css/SearchBar.scss";

export default function SearchBar({ filterData }) {
  const data = useSelector((state) => state.todoList.taskList);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const filteredData = data?.filter((el) => {
      if (!inputText.trim()) {
        return el;
      } else {
        return el.taskName.toLowerCase().includes(inputText);
      }
    });

    filterData(filteredData);
  }, [inputText, data]);

  const inputHandler = (e) => {
    //convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return useMemo(
    () => (
      <input
        className="searchBar"
        onChange={inputHandler}
        type="text"
        placeholder="Search ..."
      />
    ),
    [inputText]
  );
}
