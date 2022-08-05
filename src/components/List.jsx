import { useDispatch } from "react-redux";
import { removeTask, setCheckbox } from "../store/features/slice.js";
import { useState, useEffect } from "react";

export default function List({ item, index, handleDetail }) {
  const dispatch = useDispatch();

  const handleRemoveTask = () => {
    dispatch(removeTask(item.id));
  };

  const handleCheckbox = (e) => {
    dispatch(setCheckbox({ checked: e.target.checked, id: item.id }));
  };

  return (
    <div className="task">
      <div className="text-box">
        <label className="checkbox-label" htmlFor={item.id}>
          <input
            id={item.id}
            type="checkbox"
            checked={item.checked ? true : false}
            onChange={handleCheckbox}
            className="checkbox"
          />
          <p className="checkbox-p"></p>
        </label>
        <span className="task-name">{item.taskName}</span>
      </div>
      <div className="button-box">
        <button onClick={() => handleDetail(index)} className="detail">
          Detail
        </button>
        <button onClick={() => handleRemoveTask()} className="remove">
          Remove
        </button>
      </div>
    </div>
  );
}
