import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../css/SearchBar.scss";

export default function SearchBar({ filterData }) {
  const data = useSelector((state) => state.todoList.taskList);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    filterData(filteredData);
  }, [inputText, data]);

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = data?.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      return el.taskName.toLowerCase().includes(inputText);
    }
  });

  return (
    <input
      className="searchBar"
      onChange={inputHandler}
      type="text"
      placeholder="Search ..."
    />
  );
}
